import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Best-effort in-memory rate limiting. On serverless this is per-instance and
// resets on cold start, so it is not a hard guarantee, but it blunts bursts
// from a single IP cheaply and without extra infrastructure. Pair with the
// honeypot below; move to a shared store (e.g. Upstash) if abuse persists.
const RATE_LIMIT_MAX = 5; // submissions per window
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const rateLimitHits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateLimitHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimitHits.set(ip, recent);

  // Opportunistic cleanup so the map does not grow unbounded.
  if (rateLimitHits.size > 5000) {
    for (const [key, times] of rateLimitHits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) rateLimitHits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

const maxAttachmentSize = 5 * 1024 * 1024;
const allowedAttachmentTypes = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function requireEnv(key: string) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing ${key}`);
  }

  return value;
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(clientIp(request))) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const formData = await request.formData();

    // Honeypot: real users never see or fill this field. If it has a value the
    // submission is a bot, so return a success shape without sending anything.
    if (getString(formData, "company_website")) {
      return NextResponse.json({ success: true });
    }

    const name = getString(formData, "name");
    const email = getString(formData, "email");
    const phone = getString(formData, "phone");
    const project = getString(formData, "project");
    const purpose = getString(formData, "purpose");
    const message = getString(formData, "message");
    const topic = getString(formData, "topic") || "Project inquiry";
    const source = getString(formData, "source") || "Website";
    const mode = getString(formData, "mode") || "contact";
    const attachment = formData.get("attachment");

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const attachments = [];

    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > maxAttachmentSize) {
        return NextResponse.json(
          { success: false, message: "Reference files must be 5 MB or smaller." },
          { status: 400 },
        );
      }

      if (!allowedAttachmentTypes.has(attachment.type)) {
        return NextResponse.json(
          { success: false, message: "Reference files must be JPG, PNG, WebP, or PDF." },
          { status: 400 },
        );
      }

      attachments.push({
        filename: attachment.name || "reference",
        content: Buffer.from(await attachment.arrayBuffer()),
        contentType: attachment.type,
      });
    }

    const smtpUser = requireEnv("SMTP_USER");
    const contactTo = process.env.CONTACT_TO || smtpUser;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: smtpUser,
        pass: requireEnv("SMTP_PASS"),
      },
    });

    const submittedAt = new Date().toISOString();
    const subject = `Booyaa inquiry - ${topic}`;
    const fields = [
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Business / Project", project],
      ["Purpose", purpose],
      ["Topic", topic],
      ["Source", source],
      ["Mode", mode],
      ["Submitted", submittedAt],
      ["Message", message],
    ].filter(([, value]) => value);

    const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n\n");
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #18231d;">
        <h2 style="margin: 0 0 16px;">New Booyaa inquiry</h2>
        ${fields
          .map(
            ([label, value]) => `
              <p style="margin: 0 0 12px;">
                <strong>${escapeHtml(label)}:</strong><br />
                ${escapeHtml(value).replace(/\n/g, "<br />")}
              </p>
            `,
          )
          .join("")}
      </div>
    `;

    await transporter.sendMail({
      from: `Booyaa Website <${smtpUser}>`,
      to: contactTo,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to send message. Please try again later." },
      { status: 500 },
    );
  }
}
