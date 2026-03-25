"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productsData from "@/data/products.json";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[60px] xl:px-[100px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-3"
            style={{ color: "#18315B" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-[15px] max-w-[600px] mx-auto"
            style={{ color: "#7D7D7D" }}
          >
            Find answers to the most common questions about our products,
            ordering, shipping, and support.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {productsData.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                className="rounded-[10px] border overflow-hidden"
                style={{
                  borderColor: isOpen ? "#3163B7" : "#E5EAF2",
                  backgroundColor: "#FFFFFF",
                }}
                layout
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[11px] font-bold uppercase px-2 py-0.5 rounded shrink-0"
                      style={{
                        backgroundColor: "#ECF3FE",
                        color: "#3163B7",
                      }}
                    >
                      {faq.category}
                    </span>
                    <span
                      className="text-[14px] font-semibold"
                      style={{ color: "#18315B" }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="shrink-0 ml-4"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      d="M4.5 6.75L9 11.25L13.5 6.75"
                      stroke={isOpen ? "#3163B7" : "#7D7D7D"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-5"
                        style={{ borderTop: "1px solid #EEF2F9" }}
                      >
                        <p
                          className="text-[14px] leading-relaxed pt-4"
                          style={{ color: "#555555" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-14 text-center p-10 rounded-[12px]"
          style={{ backgroundColor: "#ECF3FE" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3
            className="text-[20px] font-bold mb-2"
            style={{ color: "#18315B" }}
          >
            Still have questions?
          </h3>
          <p className="text-[14px] mb-5" style={{ color: "#7D7D7D" }}>
            Our team is happy to help. Reach out to us anytime.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-[8px] text-[14px] font-bold transition-colors hover:opacity-90"
            style={{ backgroundColor: "#3163B7", color: "#FFFFFF" }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
