import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Lofty Mediquip",
  description:
    "Read Lofty Mediquip's Privacy Policy — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `When you visit our website, inquire about products, or contact us, we may collect the following information:
    
• **Personal identification:** Name, email address, phone number, and company/hospital name.
• **Inquiry details:** Product interests, order specifications, and correspondence records.
• **Usage data:** Pages visited, time spent on pages, browser type, and device information (collected automatically via cookies and analytics tools).`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect for the following purposes:
    
• To respond to your inquiries and provide product information.
• To process and manage product orders and quotations.
• To send relevant updates about products, offers, or services (with your consent).
• To improve our website, services, and user experience.
• To comply with applicable laws and regulations.`,
  },
  {
    title: "Data Sharing & Disclosure",
    content: `We do not sell, rent, or trade your personal information to third parties. We may share your information with:
    
• **Service providers:** Trusted partners who assist in website operations, logistics, and customer service — bound by confidentiality agreements.
• **Legal authorities:** When required by law, court order, or government regulation.
• **Business transfers:** In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the business.`,
  },
  {
    title: "Cookies & Tracking",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help us:
    
• Remember your preferences and settings.
• Understand how you interact with our website.
• Deliver relevant content and recommendations.

You can control cookie settings through your browser preferences. Disabling cookies may limit certain website functionality.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your personal information, including:
    
• SSL/TLS encryption for data in transit.
• Secure server infrastructure with restricted access.
• Regular security audits and vulnerability assessments.

While we strive to protect your data, no method of electronic transmission or storage is 100% secure.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:
    
• **Access:** Request a copy of the personal data we hold about you.
• **Correction:** Ask us to correct or update inaccurate information.
• **Deletion:** Request the deletion of your personal data (subject to legal retention requirements).
• **Opt-out:** Unsubscribe from marketing communications at any time.

To exercise any of these rights, contact us at **info@loftymediquip.com**.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

• **Email:** info@loftymediquip.com
• **Phone:** +92 333 6835815
• **Address:** Islamabad, Pakistan`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full py-16"
        style={{ backgroundColor: "#ECF3FE" }}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[60px] xl:px-[100px]">
          <h1
            className="text-[36px] sm:text-[42px] font-bold leading-tight mb-4"
            style={{ color: "#18315B" }}
          >
            Privacy Policy
          </h1>
          <p className="text-[15px]" style={{ color: "#7D7D7D" }}>
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        className="w-full py-16"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[60px] xl:px-[100px]">
          <div className="max-w-[800px]">
            <p
              className="text-[15px] leading-relaxed mb-10"
              style={{ color: "#555555" }}
            >
              At Lofty Mediquip, we are committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or interact
              with our services.
            </p>

            {sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2
                  className="text-[20px] font-bold mb-4"
                  style={{ color: "#18315B" }}
                >
                  {i + 1}. {section.title}
                </h2>
                <div
                  className="text-[14px] leading-relaxed whitespace-pre-line"
                  style={{ color: "#555555" }}
                  dangerouslySetInnerHTML={{
                    __html: section.content
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
