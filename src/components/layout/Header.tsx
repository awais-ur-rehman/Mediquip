"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-[100px] py-5 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="6" fill="#3163B7" />
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
            className="text-[16px] font-bold leading-none"
            style={{ color: "#18315B" }}
          >
            Lofty
          </span>
          <span
            className="text-[24px] font-bold leading-none"
            style={{ color: "#4285F4" }}
          >
            Mediquip
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-[480px]">
          <div
            className="flex items-center rounded-[8px] border overflow-hidden"
            style={{ borderColor: "#4285F4" }}
          >
            <input
              type="text"
              placeholder="Search all products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2.5 text-[14px] outline-none bg-white placeholder-gray-400"
              style={{ color: "#222222" }}
            />
            <button
              className="px-4 py-2.5 flex items-center justify-center transition-colors"
              style={{ backgroundColor: "#4285F4" }}
              aria-label="Search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="5.5"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.5 11.5 L15.5 15.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Account */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-[6px] border bg-white text-[14px] font-medium transition-colors hover:bg-gray-50"
            style={{ borderColor: "#18315B", color: "#18315B" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9"
                cy="6"
                r="3.5"
                stroke="#18315B"
                strokeWidth="1.3"
              />
              <path
                d="M2 16c0-3.314 3.134-6 7-6s7 2.686 7 6"
                stroke="#18315B"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <span>Account</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5 L6 7.5 L9 4.5"
                stroke="#18315B"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Cart */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-[6px] border bg-white text-[14px] font-semibold transition-colors hover:bg-blue-50"
            style={{ borderColor: "#18315B", color: "#3163B7" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5h2.5l1.6 8.5h8.8l1.6-6H5"
                stroke="#3163B7"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="7" cy="15" r="1.2" fill="#3163B7" />
              <circle cx="13" cy="15" r="1.2" fill="#3163B7" />
            </svg>
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
