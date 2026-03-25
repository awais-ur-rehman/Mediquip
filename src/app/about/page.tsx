import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Lofty Mediquip",
  description:
    "Learn about Lofty Mediquip — Pakistan's trusted medical supply store committed to quality, safety, and performance.",
};

const values = [
  {
    title: "Quality",
    description:
      "We source only certified, authentic medical equipment from trusted manufacturers and authorized distributors.",
    icon: "quality",
  },
  {
    title: "Commitment",
    description:
      "Our commitment to our customers extends beyond the sale — we provide ongoing support and after-sales service.",
    icon: "commitment",
  },
  {
    title: "Performance",
    description:
      "Every product we carry meets stringent performance standards to ensure the best outcomes for healthcare professionals.",
    icon: "performance",
  },
  {
    title: "Safety",
    description:
      "Patient safety is at the core of everything we do. We only stock equipment that meets the highest safety certifications.",
    icon: "safety",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full py-16"
        style={{ backgroundColor: "#ECF3FE" }}
      >
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <div className="max-w-[700px]">
            <h1
              className="text-[42px] font-bold leading-tight mb-6"
              style={{ color: "#18315B" }}
            >
              About Lofty Mediquip
            </h1>
            <p
              className="text-[16px] leading-relaxed mb-4"
              style={{ color: "#555555" }}
            >
              Lofty Mediquip is Pakistan&apos;s trusted online medical supply
              store, dedicated to providing hospitals, clinics, and healthcare
              professionals with the highest-quality medical equipment at
              competitive prices.
            </p>
            <p
              className="text-[16px] leading-relaxed"
              style={{ color: "#555555" }}
            >
              Founded with a mission to make advanced medical technology
              accessible across Pakistan, we partner with leading global and
              domestic brands to bring you a comprehensive range of hospital
              equipment, diagnostic devices, surgical supplies, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <h2
            className="text-[28px] font-bold text-center mb-12"
            style={{ color: "#18315B" }}
          >
            Our Core Values
          </h2>

          <div className="grid grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-[12px] border"
                style={{ borderColor: "#E5EAF2", backgroundColor: "#FFFFFF" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#ECF3FE" }}
                >
                  <ValueIcon name={value.icon} />
                </div>
                <h3
                  className="text-[18px] font-bold"
                  style={{ color: "#18315B" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "#7D7D7D" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section
        className="w-full py-14"
        style={{ backgroundColor: "#3163B7" }}
      >
        <div className="max-w-[1440px] mx-auto px-[100px] text-center">
          <blockquote
            className="text-[24px] font-semibold italic mb-4"
            style={{ color: "#FFFFFF" }}
          >
            &ldquo;Empowering healthcare professionals with the tools they
            need to save lives.&rdquo;
          </blockquote>
          <p className="text-[14px]" style={{ color: "#AEBDDB" }}>
            — Lofty Mediquip Team
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <div className="grid grid-cols-2 gap-12">
            <div
              className="relative p-8 rounded-[12px] overflow-hidden"
              style={{ backgroundColor: "#ECF3FE" }}
            >
              <span
                className="absolute top-4 right-6 text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: "#3163B7", opacity: 0.08 }}
              >
                V
              </span>
              <h3
                className="text-[22px] font-bold mb-4 relative z-10"
                style={{ color: "#18315B" }}
              >
                Our Vision
              </h3>
              <p
                className="text-[15px] leading-relaxed relative z-10"
                style={{ color: "#555555" }}
              >
                To be Pakistan&apos;s most trusted and comprehensive medical
                equipment platform, enabling every healthcare facility — from
                large hospitals to rural clinics — to access world-class
                medical technology at affordable prices.
              </p>
            </div>

            <div
              className="relative p-8 rounded-[12px] overflow-hidden"
              style={{ backgroundColor: "#ECF3FE" }}
            >
              <span
                className="absolute top-4 right-6 text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: "#3163B7", opacity: 0.08 }}
              >
                M
              </span>
              <h3
                className="text-[22px] font-bold mb-4 relative z-10"
                style={{ color: "#18315B" }}
              >
                Our Mission
              </h3>
              <p
                className="text-[15px] leading-relaxed relative z-10"
                style={{ color: "#555555" }}
              >
                To simplify the procurement of medical equipment by offering a
                transparent, reliable online marketplace with genuine
                products, competitive pricing, fast delivery, and exceptional
                customer support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueIcon({ name }: { name: string }) {
  const props = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  if (name === "quality")
    return (
      <svg {...props}>
        <path
          d="M14 3l2.5 5 5.5.8-4 3.9.95 5.5L14 15.5l-4.95 2.7.95-5.5-4-3.9L11.5 8z"
          stroke="#3163B7"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "commitment")
    return (
      <svg {...props}>
        <path
          d="M14 4v10M14 14l-3-3M14 14l3-3"
          stroke="#3163B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="11" stroke="#3163B7" strokeWidth="1.5" />
      </svg>
    );
  if (name === "performance")
    return (
      <svg {...props}>
        <path
          d="M4 20L10 12l4 4 5-8 5 6"
          stroke="#3163B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "safety")
    return (
      <svg {...props}>
        <path
          d="M14 3l9 4v8c0 5.5-9 10-9 10S5 20.5 5 15V7l9-4z"
          stroke="#3163B7"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 14l2.5 2.5 5.5-5.5"
          stroke="#3163B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return null;
}
