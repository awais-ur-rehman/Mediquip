"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ui/ProductCard";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── animated counter hook ─── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return { count, ref };
}

/* ─── stats data ─── */
const stats = [
  { value: 500, suffix: "+", label: "Products" },
  { value: 120, suffix: "+", label: "Hospital Partners" },
  { value: 25, suffix: "+", label: "Brands" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

const trustBadges = [
  {
    icon: "certified",
    title: "Certified Products",
    desc: "100% genuine & authorized equipment from trusted manufacturers",
  },
  {
    icon: "delivery",
    title: "Nationwide Delivery",
    desc: "Fast, insured shipping to hospitals & clinics across Pakistan",
  },
  {
    icon: "support",
    title: "After-Sales Support",
    desc: "Dedicated service team for installation, training & maintenance",
  },
  {
    icon: "warranty",
    title: "Warranty Assured",
    desc: "Comprehensive manufacturer warranty on every purchase",
  },
];

export default function HomePage() {
  const featuredProducts = productsData.products.slice(0, 6);
  const moreCategories = productsData.moreCategories;
  const brands = productsData.brands;

  /* parallax ref for hero */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — Full Viewport
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #050D1F 0%, #0D2A5C 30%, #1B4298 65%, #3163B7 100%)",
        }}
      >
        <motion.div
          className="max-w-[1440px] mx-auto px-[100px] w-full flex items-center gap-16 relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {/* Text Side */}
          <motion.div
            className="flex-1 max-w-[620px]"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#4ADE80" }}
              />
              <span className="text-[12px] font-semibold tracking-wider uppercase" style={{ color: "#F4B142" }}>
                Pakistan&apos;s Trusted Medical Equipment Store
              </span>
            </motion.div>

            <h1 className="text-[52px] font-bold leading-[1.1] mb-6 text-white">
              Premium Hospital
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #F4B142, #F99B2A)",
                }}
              >
                Equipment
              </span>{" "}
              &amp;
              <br />
              Medical Supplies
            </h1>

            <p
              className="text-[17px] leading-relaxed mb-10 max-w-[520px]"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Your one-stop destination for certified medical devices,
              diagnostic equipment, surgical instruments, and hospital
              furniture from Pakistan&apos;s most trusted manufacturers.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/products"
                className="group relative px-8 py-4 rounded-[10px] text-[14px] font-bold overflow-hidden transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: "#F4B142", color: "#0D2A5C" }}
              >
                <span className="relative z-10">Browse Equipment</span>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-[10px] text-[14px] font-bold transition-all hover:scale-[1.03]"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(4px)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="relative h-[480px] rounded-[20px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                alt="Modern hospital equipment"
                fill
                className="object-cover"
                sizes="600px"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(5,13,31,0.5) 100%)",
                }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -left-8 p-5 rounded-[14px]"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-[28px] font-bold text-white">500+</p>
              <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Products Available
              </p>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2.5 rounded-[10px]"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1l8 4v4c0 5-8 8-8 8S1 14 1 9V5l8-4z" stroke="#4ADE80" strokeWidth="1.5" />
                  <path d="M6 9l2 2 4-4" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-[12px] font-bold text-white">100% Certified</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(49,99,183,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(244,177,66,0.08) 0%, transparent 70%)",
            }}
          />
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="w-full py-0 relative z-10" style={{ marginTop: "-60px" }}>
        <div className="max-w-[1200px] mx-auto px-[100px]">
          <motion.div
            className="grid grid-cols-4 rounded-[16px] overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} total={stats.length} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE US — Full Viewport
      ═══════════════════════════════════════════ */}
      <section className="w-full min-h-screen flex items-center py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1440px] mx-auto px-[100px] w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-[12px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "#ECF3FE", color: "#3163B7" }}
            >
              Why Choose Us
            </span>
            <h2 className="text-[36px] font-bold mb-3" style={{ color: "#18315B" }}>
              Built on Trust, Driven by Quality
            </h2>
            <p className="text-[15px] max-w-[500px] mx-auto" style={{ color: "#7D7D7D" }}>
              We set the standard for medical equipment procurement in Pakistan
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.title}
                className="group relative p-7 rounded-[16px] border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  borderColor: "#EEF2F9",
                  backgroundColor: "#FAFBFF",
                }}
                variants={fadeUp}
                custom={i}
              >
                <div
                  className="w-14 h-14 rounded-[12px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #ECF3FE 0%, #D6E4FC 100%)",
                  }}
                >
                  <TrustIcon name={badge.icon} />
                </div>
                <h3 className="text-[16px] font-bold mb-2" style={{ color: "#18315B" }}>
                  {badge.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#7D7D7D" }}>
                  {badge.desc}
                </p>
                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(90deg, #3163B7, #F4B142)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BROWSE CATEGORIES — Full Viewport
      ═══════════════════════════════════════════ */}
      <section className="w-full min-h-screen flex items-center py-24" style={{ backgroundColor: "#F4F7FC" }}>
        <div className="max-w-[1440px] mx-auto px-[100px] w-full">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-[12px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "#FFFFFF", color: "#3163B7" }}
            >
              Categories
            </span>
            <h2 className="text-[36px] font-bold mb-3" style={{ color: "#18315B" }}>
              Browse by Category
            </h2>
            <p className="text-[15px] max-w-[500px] mx-auto" style={{ color: "#7D7D7D" }}>
              Explore our comprehensive range of medical equipment
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-5 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {moreCategories.map((cat, i) => (
              <motion.div key={cat.id} variants={fadeUp} custom={i}>
                <Link
                  href={`/products?category=${cat.id}`}
                  className="group flex flex-col items-center gap-4 py-8 px-4 rounded-[16px] border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    borderColor: "#E5EAF2",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div
                    className="w-[90px] h-[90px] rounded-full overflow-hidden relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: "#ECF3FE" }}
                  >
                    <Image
                      src={cat.imageUrl}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="90px"
                    />
                  </div>
                  <span className="text-[13px] font-bold text-center" style={{ color: "#18315B" }}>
                    {cat.name}
                  </span>
                  <span
                    className="text-[11px] font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: "#3163B7" }}
                  >
                    View Products →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PRODUCTS — Full Viewport
      ═══════════════════════════════════════════ */}
      <section className="w-full min-h-screen flex items-center py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1440px] mx-auto px-[100px] w-full">
          <motion.div
            className="flex items-end justify-between mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span
                className="inline-block text-[12px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: "#ECF3FE", color: "#3163B7" }}
              >
                Featured
              </span>
              <h2 className="text-[36px] font-bold mb-2" style={{ color: "#18315B" }}>
                Popular Equipment
              </h2>
              <p className="text-[15px]" style={{ color: "#7D7D7D" }}>
                The most requested hospital equipment &amp; devices
              </p>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 px-6 py-3 rounded-[10px] text-[13px] font-bold border transition-all hover:shadow-md"
              style={{ borderColor: "#E5EAF2", color: "#3163B7" }}
            >
              View All Products
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="#3163B7" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {featuredProducts.map((product, i) => (
              <motion.div key={product.id} variants={fadeUp} custom={i}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BRANDS — Infinite Marquee
      ═══════════════════════════════════════════ */}
      <section className="w-full py-20 overflow-hidden" style={{ backgroundColor: "#F4F7FC" }}>
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[28px] font-bold mb-2" style={{ color: "#18315B" }}>
              Trusted by Leading Manufacturers
            </h2>
            <p className="text-[14px]" style={{ color: "#7D7D7D" }}>
              Authorized partnerships with Pakistan&apos;s top medical equipment brands
            </p>
          </motion.div>
        </div>

        {/* Marquee — infinite horizontal scroll */}
        <div className="relative">
          <div className="flex animate-marquee gap-8">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="relative w-[160px] h-[70px] rounded-[12px] overflow-hidden border shrink-0 transition-shadow hover:shadow-md"
                style={{
                  borderColor: "#E5EAF2",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Image
                  src={brand.imageUrl}
                  alt={brand.name}
                  fill
                  className="object-contain p-4"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Full Viewport
      ═══════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-[70vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #050D1F 0%, #0D2A5C 40%, #1B4298 100%)",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-[100px] w-full relative z-10">
          <motion.div
            className="text-center max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8h14" stroke="#F4B142" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>
                Expert Consultation Available
              </span>
            </span>

            <h2 className="text-[40px] font-bold text-white mb-5 leading-tight">
              Need Help Choosing the
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #F4B142, #F99B2A)",
                }}
              >
                Right Equipment?
              </span>
            </h2>

            <p
              className="text-[16px] leading-relaxed mb-10 max-w-[560px] mx-auto"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Our medical equipment specialists provide personalized
              recommendations for hospitals, clinics, and healthcare
              practices.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-[10px] text-[14px] font-bold transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: "#F4B142", color: "#0D2A5C" }}
              >
                Contact Our Experts
              </Link>
              <a
                href="tel:+923336835815"
                className="px-8 py-4 rounded-[10px] text-[14px] font-bold transition-all hover:scale-[1.03]"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                Call +92 333 6835815
              </a>
            </div>
          </motion.div>
        </div>

        {/* BG decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(49,99,183,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(244,177,66,0.06) 0%, transparent 70%)",
            }}
          />
        </div>
      </section>
    </>
  );
}

/* ─── Stat Counter Item ─── */
function StatItem({ stat, index, total }: { stat: typeof stats[0]; index: number; total: number }) {
  const { count, ref } = useCounter(stat.value);
  return (
    <div
      className="flex flex-col items-center py-7"
      style={{
        borderRight: index < total - 1 ? "1px solid #EEF2F9" : undefined,
      }}
    >
      <span ref={ref} className="text-[32px] font-bold" style={{ color: "#3163B7" }}>
        {count.toLocaleString()}
        {stat.suffix}
      </span>
      <span className="text-[13px] font-medium" style={{ color: "#7D7D7D" }}>
        {stat.label}
      </span>
    </div>
  );
}

/* ─── Trust Badge Icons ─── */
function TrustIcon({ name }: { name: string }) {
  const p = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  if (name === "certified")
    return (
      <svg {...p}>
        <path d="M12 2l2.5 5 5.5.8-4 3.9.95 5.5L12 14.5l-4.95 2.7.95-5.5-4-3.9L9.5 7z" stroke="#3163B7" strokeWidth="1.5" strokeLinejoin="round" />
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
        <path d="M3 11V8a9 9 0 0 1 18 0v3" stroke="#3163B7" strokeWidth="1.5" />
        <rect x="1" y="11" width="4" height="7" rx="1" stroke="#3163B7" strokeWidth="1.5" />
        <rect x="19" y="11" width="4" height="7" rx="1" stroke="#3163B7" strokeWidth="1.5" />
      </svg>
    );
  if (name === "warranty")
    return (
      <svg {...p}>
        <path d="M12 2l8 4v6c0 5-8 9-8 9s-8-4-8-9V6l8-4z" stroke="#3163B7" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#3163B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return null;
}
