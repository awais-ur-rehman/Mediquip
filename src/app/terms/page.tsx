import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Lofty Mediquip",
  description:
    "Read Lofty Mediquip's Terms of Service — the rules and guidelines governing your use of our website and services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the Lofty Mediquip website (loftymediquip.com), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: "Use of Website",
    content: `You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:

• Use the website in any way that violates applicable laws or regulations.
• Attempt to gain unauthorized access to any part of the website or its systems.
• Use automated tools (bots, scrapers) to collect information from the website.
• Transmit any malicious code, viruses, or harmful content.
• Interfere with the proper functioning of the website.`,
  },
  {
    title: "Product Information",
    content: `We strive to provide accurate product descriptions, specifications, images, and pricing on our website. However:

• Product images are for illustrative purposes and may differ slightly from actual products.
• Specifications are subject to change by manufacturers without prior notice.
• Prices displayed are subject to change and may not include taxes, shipping, or other applicable fees.
• Availability of products is not guaranteed and may vary.

All product purchases are subject to a separate purchase agreement between you and Lofty Mediquip.`,
  },
  {
    title: "Inquiries & Orders",
    content: `Our website serves as an informational platform for browsing medical equipment. Product inquiries submitted through our website are not binding orders. A formal quotation and purchase agreement will be provided upon request.

We reserve the right to:
• Accept or decline any inquiry or order at our discretion.
• Modify pricing and availability based on current market conditions.
• Require additional verification for orders above certain thresholds.`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website — including text, graphics, logos, images, product descriptions, and software — is the property of Lofty Mediquip or its content suppliers and is protected by applicable intellectual property laws.

You may not:
• Reproduce, distribute, or modify any content without written permission.
• Use our branding, logos, or trademarks without authorization.
• Create derivative works based on our content.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, Lofty Mediquip shall not be liable for:

• Any indirect, incidental, special, or consequential damages arising from the use of our website or services.
• Loss of profits, data, or business opportunities.
• Errors, interruptions, or delays in website availability.
• Actions or content of third-party websites linked from our website.

Our total liability for any claim shall not exceed the amount paid by you for the specific product or service giving rise to the claim.`,
  },
  {
    title: "Warranty Disclaimer",
    content: `Product warranties are provided by the respective manufacturers and are subject to their terms and conditions. Lofty Mediquip facilitates warranty claims but does not independently warrant products beyond what is stated by the manufacturer.

Our website is provided "as is" without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of Islamabad, Pakistan.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the updated terms.`,
  },
  {
    title: "Contact Information",
    content: `For any questions or concerns regarding these Terms of Service, please contact us:

• **Email:** info@loftymediquip.com
• **Phone:** +92 333 6835815
• **Address:** Islamabad, Pakistan`,
  },
];

export default function TermsOfServicePage() {
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
            Terms of Service
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
              Welcome to Lofty Mediquip. These Terms of Service govern your
              use of our website and services. Please read them carefully
              before using our platform.
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
