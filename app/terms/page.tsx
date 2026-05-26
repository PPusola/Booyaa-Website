import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const sections = [
  ["Acceptance", "By using Booyaa websites, products, or services, you agree to these terms. If you do not agree, please do not use the services."],
  ["Services", "Booyaa provides web development services and develops digital products including app concepts and downloadable projects."],
  ["User conduct", "You agree not to misuse the services, attempt unauthorized access, upload unlawful content, or interfere with normal operation."],
  ["Intellectual property", "Booyaa site content, design, code, and materials are owned by Booyaa or its licensors unless otherwise stated."],
  ["Third-party services", "Some projects may link to or integrate with third-party services such as GitHub, Spotify, Firebase, or hosted form providers. Their own terms apply."],
  ["Warranties", "Services are provided as available. Booyaa does not guarantee uninterrupted operation or error-free behavior."],
  ["Liability", "To the fullest extent permitted by law, Booyaa is not liable for indirect or consequential damages from use of the services."],
  ["Changes", "These terms may be updated from time to time. Continued use after updates means acceptance of the revised terms."],
];

export default function TermsPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Legal</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d]">Terms of Service</h1>
          <p className="mt-4 text-sm text-[#536156]">Effective date: May 3, 2026</p>
          <div className="mt-12 space-y-10">
            {sections.map(([title, text], index) => (
              <section key={title} className="border-t border-[#d9d0c2] pt-8">
                <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">{index + 1}. {title}</h2>
                <p className="mt-4 leading-8 text-[#536156]">{text}</p>
              </section>
            ))}
            <section className="border-t border-[#d9d0c2] pt-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">9. Contact</h2>
              <p className="mt-4 leading-8 text-[#536156]">For questions about these terms, use the website contact form.</p>
              <div className="mt-5">
                <ContactModal topic="Terms question" source="Terms page" mode="contact">Contact Booyaa</ContactModal>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
