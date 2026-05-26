import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const sections = [
  ["Information we collect", "Booyaa may collect contact details you submit through forms, basic website usage information, and product-specific information required to operate Booyaa apps."],
  ["How we use it", "Information is used to respond to inquiries, provide services, improve products, send requested updates, and maintain security."],
  ["Sharing", "Booyaa does not sell personal information. Trusted service providers may process data for hosting, form delivery, analytics, or product infrastructure."],
  ["Retention and rights", "Information is retained only as long as needed for the purpose collected or as required by law. You may request access, correction, or deletion."],
  ["Security", "Reasonable technical and organizational safeguards are used, but no internet transmission or storage method can be guaranteed completely secure."],
  ["Updates", "This policy may be updated from time to time. The effective date will be changed when material updates are made."],
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Legal</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d]">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#536156]">Effective date: May 3, 2026</p>
          <div className="mt-12 space-y-10">
            {sections.map(([title, text], index) => (
              <section key={title} className="border-t border-[#d9d0c2] pt-8">
                <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">{index + 1}. {title}</h2>
                <p className="mt-4 leading-8 text-[#536156]">{text}</p>
              </section>
            ))}
            <section className="border-t border-[#d9d0c2] pt-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">7. Contact</h2>
              <p className="mt-4 leading-8 text-[#536156]">
                For privacy questions or data requests, use the website contact form.
              </p>
              <div className="mt-5">
                <ContactModal topic="Privacy question" source="Privacy page" mode="contact">Contact Booyaa</ContactModal>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
