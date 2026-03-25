"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full py-4"
      style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E5EAF2" }}
    >
      <div className="max-w-[1440px] mx-auto px-[100px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="8" fill="#3163B7" />
            <path d="M8 24l6-10 5 6 4-8 5 12" stroke="#F4B142" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex items-center gap-1.5">
            <span
              className="text-[14px] font-semibold"
              style={{ color: "#7D7D7D" }}
            >
              Lofty
            </span>
            <span
              className="text-[22px] font-bold font-lemonada"
              style={{ color: "#3163B7" }}
            >
              Mediquip
            </span>
          </div>
        </Link>

        {/* Search */}
        <div className="flex items-center w-[480px]">
          <input
            type="text"
            placeholder="Search all products..."
            className="w-full h-[42px] px-4 rounded-l-[6px] border text-[13px] outline-none"
            style={{ borderColor: "#D1D5DB", color: "#222222" }}
          />
          <button
            className="h-[42px] w-[42px] flex items-center justify-center rounded-r-[6px]"
            style={{ backgroundColor: "#3163B7" }}
            aria-label="Search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="5.5"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M11.5 11.5L16 16"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-[13px] font-semibold transition-colors hover:opacity-80"
            style={{ color: "#18315B" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M3 2h3.5l1.5 4-1.5 1.5a10 10 0 0 0 4 4L12 10l4 1.5V15c0 .5-.5 1-1 1C8 16 2 10 2 3c0-.5.5-1 1-1z"
                stroke="#3163B7"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            +91 98765 43210
          </a>

          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-[13px] font-bold transition-colors hover:opacity-90"
            style={{ backgroundColor: "#3163B7", color: "#FFFFFF" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <rect
                x="1"
                y="3"
                width="14"
                height="10"
                rx="2"
                stroke="white"
                strokeWidth="1.3"
              />
              <path
                d="M1 5l7 4.5L15 5"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
