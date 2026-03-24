"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Hospital Equipment", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Career", href: "/career" },
];

export default function Menubar() {
  const pathname = usePathname();

  return (
    <nav className="w-full" style={{ backgroundColor: "#3163B7" }}>
      <div className="max-w-[1440px] mx-auto px-[100px]">
        <ul className="flex items-center gap-0">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-5 py-3 text-[14px] font-medium transition-colors"
                  style={{
                    color: isActive ? "#3163B7" : "#FFFFFF",
                    backgroundColor: isActive ? "#FFFFFF" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
