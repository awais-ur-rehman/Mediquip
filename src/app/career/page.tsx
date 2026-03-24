import productsData from "@/data/products.json";

export const metadata = {
  title: "Careers - Lofty Mediquip",
  description:
    "Join the Lofty Mediquip team. Browse open positions in sales, support, and more.",
};

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full py-16"
        style={{ backgroundColor: "#ECF3FE" }}
      >
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <h1
            className="text-[36px] font-bold mb-4"
            style={{ color: "#18315B" }}
          >
            Join Our Team
          </h1>
          <p
            className="text-[16px] max-w-[600px] leading-relaxed"
            style={{ color: "#555555" }}
          >
            Be part of a mission-driven team committed to transforming
            healthcare access in India. We&apos;re looking for passionate
            individuals who want to make a difference.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="w-full py-12">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <h2
            className="text-[24px] font-bold mb-8"
            style={{ color: "#18315B" }}
          >
            Open Positions
          </h2>

          <div className="flex flex-col gap-6">
            {productsData.careers.map((job) => (
              <div
                key={job.id}
                className="rounded-[12px] border p-6 transition-shadow hover:shadow-md"
                style={{ borderColor: "#E5EAF2", backgroundColor: "#FFFFFF" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-[18px] font-bold mb-2"
                      style={{ color: "#18315B" }}
                    >
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 flex-wrap">
                      <Tag icon="department">{job.department}</Tag>
                      <Tag icon="location">{job.location}</Tag>
                      <Tag icon="type">{job.type}</Tag>
                      <Tag icon="experience">{job.experience}</Tag>
                    </div>
                  </div>
                  <button
                    className="px-6 py-2.5 rounded-[8px] text-[13px] font-bold transition-colors hover:opacity-90 shrink-0"
                    style={{ backgroundColor: "#3163B7", color: "#FFFFFF" }}
                  >
                    Apply Now
                  </button>
                </div>

                <p
                  className="text-[13px] leading-relaxed mb-5"
                  style={{ color: "#555555" }}
                >
                  {job.description}
                </p>

                <div>
                  <p
                    className="text-[13px] font-semibold mb-2"
                    style={{ color: "#18315B" }}
                  >
                    Requirements:
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {job.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px]"
                        style={{ color: "#555555" }}
                      >
                        <svg
                          className="mt-0.5 shrink-0"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <circle cx="7" cy="7" r="7" fill="#ECF3FE" />
                          <path
                            d="M4 7l2 2 4-4"
                            stroke="#3163B7"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* No openings CTA */}
          <div
            className="mt-10 p-8 rounded-[12px] text-center"
            style={{ backgroundColor: "#F8FAFF" }}
          >
            <p className="text-[14px] mb-3" style={{ color: "#7D7D7D" }}>
              Don&apos;t see a role that fits? Send us your CV anyway.
            </p>
            <a
              href="mailto:careers@loftymediquip.com"
              className="inline-block text-[14px] font-semibold hover:underline"
              style={{ color: "#3163B7" }}
            >
              careers@loftymediquip.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Tag({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <span
      className="flex items-center gap-1.5 text-[12px]"
      style={{ color: "#7D7D7D" }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        {icon === "department" && (
          <rect
            x="1"
            y="1"
            width="10"
            height="10"
            rx="2"
            stroke="#7D7D7D"
            strokeWidth="1.2"
          />
        )}
        {icon === "location" && (
          <path
            d="M6 1a3.5 3.5 0 0 0-3.5 3.5C2.5 7.5 6 11 6 11S9.5 7.5 9.5 4.5A3.5 3.5 0 0 0 6 1z"
            stroke="#7D7D7D"
            strokeWidth="1.2"
          />
        )}
        {icon === "type" && (
          <circle cx="6" cy="6" r="5" stroke="#7D7D7D" strokeWidth="1.2" />
        )}
        {icon === "experience" && (
          <>
            <path d="M2 9V5.5L6 2l4 3.5V9" stroke="#7D7D7D" strokeWidth="1.2" />
            <rect
              x="4"
              y="6"
              width="4"
              height="3"
              stroke="#7D7D7D"
              strokeWidth="1.2"
            />
          </>
        )}
      </svg>
      {children}
    </span>
  );
}
