import Link from "next/link";

const footerLinks = {
  information: [
    { label: "About Us", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
    { label: "FAQ's", href: "/faq" },
  ],
  categories: [
    { label: "ECG Machines", href: "/products?category=ecg-channel" },
    { label: "Hospital Equipment", href: "/products?category=device" },
    { label: "Accessories", href: "/products?category=accessories" },
    { label: "Brands", href: "/products?category=brands" },
  ],
  contact: [
    { icon: "phone", text: "+91 98765 43210" },
    { icon: "email", text: "info@loftymediquip.com" },
    { icon: "location", text: "Ahmedabad, Gujarat, India" },
  ],
};

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="w-full" style={{ backgroundColor: "#18315B" }}>
        <div className="max-w-[1440px] mx-auto px-[100px] py-14">
          <div className="grid grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="6" fill="#4285F4" />
                  <path
                    d="M6 22 L10 18 L14 20 L20 14 L24 16 L28 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="22" cy="12" r="3" fill="#F4B142" />
                </svg>
                <span
                  className="text-[16px] font-bold"
                  style={{ color: "#FFFFFF" }}
                >
                  Lofty
                </span>
                <span
                  className="text-[20px] font-bold"
                  style={{ color: "#4285F4" }}
                >
                  Mediquip
                </span>
              </div>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "#AEBDDB" }}
              >
                India&apos;s trusted online medical supply store. Quality
                hospital equipment, diagnostic devices and surgical supplies
                delivered to your doorstep.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-2">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                      style={{ backgroundColor: "#254A80" }}
                      aria-label={social}
                    >
                      <SocialIcon name={social} />
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Information */}
            <div>
              <h4
                className="text-[15px] font-bold mb-5"
                style={{ color: "#FFFFFF" }}
              >
                Information
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.information.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] transition-colors hover:text-white"
                      style={{ color: "#AEBDDB" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4
                className="text-[15px] font-bold mb-5"
                style={{ color: "#FFFFFF" }}
              >
                Categories
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] transition-colors hover:text-white"
                      style={{ color: "#AEBDDB" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4
                className="text-[15px] font-bold mb-5"
                style={{ color: "#FFFFFF" }}
              >
                Contact Us
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.contact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <ContactIcon name={item.icon} />
                    </div>
                    <span
                      className="text-[13px] leading-relaxed"
                      style={{ color: "#AEBDDB" }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full py-4" style={{ backgroundColor: "#0F2240" }}>
        <div className="max-w-[1440px] mx-auto px-[100px] flex items-center justify-between">
          <p className="text-[12px]" style={{ color: "#7A90B2" }}>
            © {new Date().getFullYear()} Lofty Mediquip. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[12px] hover:text-white transition-colors"
              style={{ color: "#7A90B2" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] hover:text-white transition-colors"
              style={{ color: "#7A90B2" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  if (name === "facebook")
    return (
      <svg {...props}>
        <path
          d="M10 2H8C6.895 2 6 2.895 6 4v2H4v3h2v5h3V9h2l.5-3H9V4.5c0-.276.224-.5.5-.5H10V2z"
          fill="#AEBDDB"
        />
      </svg>
    );
  if (name === "twitter")
    return (
      <svg {...props}>
        <path
          d="M14 3s-1 .5-2 .7A3 3 0 0 0 6 6.5c0 .3 0 .5.1.8C4 7 2 6 1 4.5c0 0-.5 2 1.5 3-.5 0-1-.2-1.5-.5 0 1.5 1 2.8 2.5 3.1-.5.2-1 .2-1.5.1.5 1.4 1.8 2.4 3.3 2.4C3.8 14 2 14.6 1 14.5c1.5 1 3.3 1.5 5.5 1.5 6.5 0 10-5.4 10-10V5.5C17 5 17.5 4 18 3h-4z"
          fill="#AEBDDB"
        />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg {...props}>
        <rect
          x="2"
          y="2"
          width="12"
          height="12"
          rx="3.5"
          stroke="#AEBDDB"
          strokeWidth="1.3"
        />
        <circle cx="8" cy="8" r="2.5" stroke="#AEBDDB" strokeWidth="1.3" />
        <circle cx="11.5" cy="4.5" r="0.8" fill="#AEBDDB" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...props}>
        <rect
          x="2"
          y="2"
          width="12"
          height="12"
          rx="2"
          stroke="#AEBDDB"
          strokeWidth="1.3"
        />
        <path
          d="M5 7v4M5 5.5v.01M8 11V8.5c0-1 .5-1.5 1.5-1.5S11 7.5 11 8.5V11"
          stroke="#AEBDDB"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  return null;
}

function ContactIcon({ name }: { name: string }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  if (name === "phone")
    return (
      <svg {...props}>
        <path
          d="M3 2h3l1.5 3.5-1.75 1.05a8.5 8.5 0 0 0 3.7 3.7L10.5 8.5 14 10v3c0 .55-.45 1-1 1C6.27 14 2 9.73 2 4.5 2 3.67 2.67 3 3.5 3H3z"
          stroke="#4285F4"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "email")
    return (
      <svg {...props}>
        <rect
          x="1.5"
          y="3.5"
          width="13"
          height="9"
          rx="1.5"
          stroke="#4285F4"
          strokeWidth="1.2"
        />
        <path
          d="M1.5 5l6.5 4.5L14.5 5"
          stroke="#4285F4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  if (name === "location")
    return (
      <svg {...props}>
        <path
          d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6A4.5 4.5 0 0 0 8 1.5z"
          stroke="#4285F4"
          strokeWidth="1.2"
        />
        <circle cx="8" cy="6" r="1.5" stroke="#4285F4" strokeWidth="1.2" />
      </svg>
    );
  return null;
}
