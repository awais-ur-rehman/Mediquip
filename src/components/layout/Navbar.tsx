"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Hospital Equipment", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Career", href: "/career" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className="w-full sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "#FFFFFF",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.08)"
          : "0 1px 0 #E5EAF2",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[60px] xl:px-[100px]">
        <div className="flex items-center justify-between h-[70px]">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#3163B7" />
              <path
                d="M8 24l6-10 5 6 4-8 5 12"
                stroke="#F4B142"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex items-center gap-1">
              <span
                className="text-[13px] font-semibold hidden sm:inline"
                style={{ color: "#7D7D7D" }}
              >
                Lofty
              </span>
              <span
                className="text-[20px] font-bold"
                style={{
                  fontFamily: "'Lemonada', cursive",
                  color: "#3163B7",
                }}
              >
                Mediquip
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3.5 py-2 text-[13px] font-semibold rounded-md transition-all duration-200 hover:bg-[#ECF3FE]"
                  style={{
                    color: isActive ? "#3163B7" : "#18315B",
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-[2px] left-3 right-3 h-[2.5px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #3163B7, #F4B142)",
                      }}
                      layoutId="activeNav"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+923336835815"
              className="flex items-center gap-2 text-[13px] font-semibold transition-colors hover:opacity-80"
              style={{ color: "#18315B" }}
            >
              <svg
                width="16"
                height="16"
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
              <span className="hidden xl:inline">+92 333 6835815</span>
            </a>

            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
              style={{ backgroundColor: "#3163B7", color: "#FFFFFF" }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-[#ECF3FE]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className="block w-5 h-[2px] rounded-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: "#18315B",
                transform: isOpen
                  ? "rotate(45deg) translateY(3px)"
                  : "none",
              }}
            />
            <span
              className="block w-5 h-[2px] rounded-full transition-all duration-300 mt-[5px]"
              style={{
                backgroundColor: "#18315B",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[2px] rounded-full transition-all duration-300 mt-[5px] origin-center"
              style={{
                backgroundColor: "#18315B",
                transform: isOpen
                  ? "rotate(-45deg) translateY(-3px)"
                  : "none",
                marginTop: isOpen ? "3px" : "5px",
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Accent line ── */}
      <div
        className="w-full h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #3163B7 0%, #4285F4 30%, #F4B142 70%, #F99B2A 100%)",
        }}
      />

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 top-[73px] bg-black/30 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              className="fixed top-[73px] left-0 right-0 z-50 lg:hidden overflow-y-auto"
              style={{
                backgroundColor: "#FFFFFF",
                maxHeight: "calc(100vh - 73px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="px-5 py-4">
                {/* Nav Links */}
                <div className="space-y-1">
                  {navItems.map((item, i) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-semibold transition-colors"
                          style={{
                            color: isActive ? "#3163B7" : "#18315B",
                            backgroundColor: isActive ? "#ECF3FE" : "transparent",
                          }}
                          onClick={() => setIsOpen(false)}
                        >
                          {isActive && (
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(135deg, #3163B7, #F4B142)",
                              }}
                            />
                          )}
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div
                  className="my-4 h-px"
                  style={{ backgroundColor: "#EEF2F9" }}
                />

                {/* Contact info */}
                <div className="space-y-3 px-4">
                  <a
                    href="tel:+923336835815"
                    className="flex items-center gap-3 text-[14px] font-semibold"
                    style={{ color: "#18315B" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#ECF3FE" }}
                    >
                      <svg
                        width="16"
                        height="16"
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
                    </div>
                    +92 333 6835815
                  </a>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-[14px] font-bold transition-all hover:shadow-md"
                    style={{ backgroundColor: "#3163B7", color: "#FFFFFF" }}
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      width="14"
                      height="14"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
