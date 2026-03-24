"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ui/ProductCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const trustBadges = [
  {
    icon: "certified",
    title: "Certified Products",
    desc: "100% genuine equipment",
  },
  {
    icon: "delivery",
    title: "Pan-India Delivery",
    desc: "Fast & insured shipping",
  },
  {
    icon: "support",
    title: "After-Sales Support",
    desc: "Dedicated service team",
  },
  {
    icon: "warranty",
    title: "Warranty Assured",
    desc: "Manufacturer warranty",
  },
];

export default function HomePage() {
  const featuredProducts = productsData.products.slice(0, 6);
  const moreCategories = productsData.moreCategories;
  const brands = productsData.brands;

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D2A5C 0%, #1B4298 50%, #3163B7 100%)",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-[100px] py-20 flex items-center gap-16">
          <motion.div
            className="flex-1 max-w-[600px]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="inline-block text-[12px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#F4B142" }}
            >
              India&apos;s Trusted Medical Equipment Store
            </span>
            <h1 className="text-[44px] font-bold leading-tight mb-5 text-white">
              Premium Hospital Equipment &amp; Medical Supplies
            </h1>
            <p
              className="text-[16px] leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              One-stop online destination for certified medical devices,
              diagnostic equipment, surgical instruments, and hospital
              furniture — sourced from India&apos;s most trusted
              manufacturers.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/products"
                className="px-8 py-3.5 rounded-[8px] text-[14px] font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: "#F4B142", color: "#18315B" }}
              >
                Browse Equipment
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-[8px] text-[14px] font-bold border transition-transform hover:scale-105"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                }}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative h-[380px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&h=500&fit=crop"
              alt="Hospital equipment"
              fill
              className="object-cover rounded-[16px]"
              sizes="600px"
              priority
            />
            <div
              className="absolute inset-0 rounded-[16px]"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(13,42,92,0.4) 100%)",
              }}
            />
          </motion.div>
        </div>

        {/* Decorative circles */}
        <div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full opacity-5"
          style={{ backgroundColor: "#FFFFFF" }}
        />
      </section>

      {/* ══════════ TRUST BADGES ══════════ */}
      <section className="w-full py-10" style={{ backgroundColor: "#FFFFFF" }}>
        <motion.div
          className="max-w-[1440px] mx-auto px-[100px] grid grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.title}
              className="flex items-center gap-4 px-5 py-4 rounded-[10px]"
              style={{ backgroundColor: "#F8FAFF" }}
              variants={fadeUp}
              custom={i}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#ECF3FE" }}
              >
                <TrustIcon name={badge.icon} />
              </div>
              <div>
                <p
                  className="text-[14px] font-bold"
                  style={{ color: "#18315B" }}
                >
                  {badge.title}
                </p>
                <p className="text-[12px]" style={{ color: "#7D7D7D" }}>
                  {badge.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════ BROWSE CATEGORIES ══════════ */}
      <section className="w-full py-14" style={{ backgroundColor: "#F8FAFF" }}>
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-[28px] font-bold mb-2"
              style={{ color: "#18315B" }}
            >
              Browse by Category
            </h2>
            <p className="text-[14px]" style={{ color: "#7D7D7D" }}>
              Explore our wide range of medical equipment categories
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {moreCategories.map((cat, i) => (
              <motion.div key={cat.id} variants={fadeUp} custom={i}>
                <Link
                  href={`/products?category=${cat.id}`}
                  className="group flex flex-col items-center gap-3 py-6 px-4 rounded-[12px] border transition-all hover:shadow-md hover:border-blue-300"
                  style={{
                    borderColor: "#E5EAF2",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div
                    className="w-[80px] h-[80px] rounded-full overflow-hidden relative transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#ECF3FE" }}
                  >
                    <Image
                      src={cat.imageUrl}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <span
                    className="text-[13px] font-semibold text-center"
                    style={{ color: "#18315B" }}
                  >
                    {cat.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ FEATURED PRODUCTS ══════════ */}
      <section className="w-full py-14">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2
                className="text-[28px] font-bold mb-1"
                style={{ color: "#18315B" }}
              >
                Featured Products
              </h2>
              <p className="text-[14px]" style={{ color: "#7D7D7D" }}>
                Our most popular hospital equipment &amp; devices
              </p>
            </div>
            <Link
              href="/products"
              className="text-[13px] font-bold transition-colors hover:underline"
              style={{ color: "#3163B7" }}
            >
              View All →
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {featuredProducts.map((product, i) => (
              <motion.div key={product.id} variants={fadeUp} custom={i}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ BRANDS ══════════ */}
      <section
        className="w-full py-14"
        style={{ backgroundColor: "#F8FAFF" }}
      >
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-[28px] font-bold mb-2"
              style={{ color: "#18315B" }}
            >
              Trusted Brands
            </h2>
            <p className="text-[14px]" style={{ color: "#7D7D7D" }}>
              We partner with leading medical equipment manufacturers
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-10 flex-wrap"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {brands.map((brand, i) => (
              <motion.div
                key={brand.id}
                className="relative w-[130px] h-[60px] rounded-[8px] overflow-hidden border transition-shadow hover:shadow-md"
                style={{
                  borderColor: "#E5EAF2",
                  backgroundColor: "#FFFFFF",
                }}
                variants={fadeUp}
                custom={i}
              >
                <Image
                  src={brand.imageUrl}
                  alt={brand.name}
                  fill
                  className="object-contain p-3"
                  sizes="130px"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section
        className="w-full py-16"
        style={{
          background:
            "linear-gradient(135deg, #0D2A5C 0%, #1B4298 50%, #3163B7 100%)",
        }}
      >
        <motion.div
          className="max-w-[1440px] mx-auto px-[100px] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[30px] font-bold text-white mb-4">
            Need Help Choosing the Right Equipment?
          </h2>
          <p
            className="text-[15px] max-w-[600px] mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Our medical equipment specialists can help you find the perfect
            solution for your hospital, clinic, or practice. Get personalized
            recommendations today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-[8px] text-[14px] font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#F4B142", color: "#18315B" }}
            >
              Contact Our Experts
            </Link>
            <a
              href="tel:+919876543210"
              className="px-8 py-3.5 rounded-[8px] text-[14px] font-bold border transition-transform hover:scale-105"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "#FFFFFF",
              }}
            >
              Call +91 98765 43210
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

/* ─── Trust Badge Icons ─── */
function TrustIcon({ name }: { name: string }) {
  const p = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  if (name === "certified")
    return (
      <svg {...p}>
        <path
          d="M12 2l2.5 5 5.5.8-4 3.9.95 5.5L12 14.5l-4.95 2.7.95-5.5-4-3.9L9.5 7z"
          stroke="#3163B7"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "delivery")
    return (
      <svg {...p}>
        <rect x="1" y="8" width="13" height="10" rx="1" stroke="#3163B7" strokeWidth="1.5" />
        <path d="M14 12h4l3 3v3h-7" stroke="#3163B7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="6" cy="19" r="2" stroke="#3163B7" strokeWidth="1.5" />
        <circle cx="18" cy="19" r="2" stroke="#3163B7" strokeWidth="1.5" />
      </svg>
    );
  if (name === "support")
    return (
      <svg {...p}>
        <path
          d="M3 11V8a9 9 0 0 1 18 0v3"
          stroke="#3163B7"
          strokeWidth="1.5"
        />
        <rect
          x="1"
          y="11"
          width="4"
          height="7"
          rx="1"
          stroke="#3163B7"
          strokeWidth="1.5"
        />
        <rect
          x="19"
          y="11"
          width="4"
          height="7"
          rx="1"
          stroke="#3163B7"
          strokeWidth="1.5"
        />
      </svg>
    );
  if (name === "warranty")
    return (
      <svg {...p}>
        <path
          d="M12 2l8 4v6c0 5-8 9-8 9s-8-4-8-9V6l8-4z"
          stroke="#3163B7"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#3163B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return null;
}
