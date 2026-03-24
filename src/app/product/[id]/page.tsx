import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Menubar from "@/components/layout/Menubar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import productsData from "@/data/products.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return productsData.products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = productsData.products.find((p) => p.id === id);
  return {
    title: product
      ? `${product.shortName} - Lofty Mediquip`
      : "Product Not Found",
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = productsData.products.find((p) => p.id === id);

  if (!product) notFound();

  const relatedProducts = productsData.products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Menubar />
      <div className="gradient-divider" />

      <main className="flex-1">
        <section className="w-full py-10">
          <div className="max-w-[1440px] mx-auto px-[100px]">
            {/* Breadcrumb */}
            <nav
              className="text-[12px] mb-8 flex items-center gap-2"
              style={{ color: "#7D7D7D" }}
            >
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
              <span>›</span>
              <Link href="/products" className="hover:text-blue-500">
                Hospital Equipment
              </Link>
              <span>›</span>
              <span style={{ color: "#3163B7" }}>{product.shortName}</span>
            </nav>

            {/* Product Detail */}
            <div className="flex gap-12">
              {/* Left: Images */}
              <div className="flex flex-col gap-4 w-[420px] shrink-0">
                {/* Main Image */}
                <div
                  className="relative w-full aspect-square rounded-[12px] overflow-hidden border"
                  style={{ borderColor: "#E5EAF2", backgroundColor: "#ECF3FE" }}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    priority
                    sizes="420px"
                  />
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-3">
                    {product.images.map((img, i) => (
                      <div
                        key={i}
                        className="relative w-[80px] h-[80px] rounded-[8px] overflow-hidden border-2"
                        style={{
                          borderColor: i === 0 ? "#3163B7" : "#E5EAF2",
                          backgroundColor: "#ECF3FE",
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${product.shortName} view ${i + 1}`}
                          fill
                          className="object-contain p-2"
                          sizes="80px"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Info */}
              <div className="flex-1">
                {/* Brand */}
                <p
                  className="text-[13px] font-semibold uppercase tracking-wide mb-2"
                  style={{ color: "#7D7D7D" }}
                >
                  {product.brand}
                </p>

                {/* Name */}
                <h1
                  className="text-[22px] font-bold leading-snug mb-3"
                  style={{ color: "#18315B" }}
                >
                  {product.name}
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-5 text-[13px]">
                  <span style={{ color: "#7D7D7D" }}>
                    Product ID:{" "}
                    <span style={{ color: "#555555" }}>
                      {product.productId}
                    </span>
                  </span>
                  <span
                    className="px-2 py-0.5 rounded text-[12px] font-semibold"
                    style={{
                      backgroundColor:
                        product.availability === "In Stock"
                          ? "#E8F7EF"
                          : "#FEE8EC",
                      color:
                        product.availability === "In Stock"
                          ? "#098B48"
                          : "#D92550",
                    }}
                  >
                    {product.availability}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className="text-[32px] font-bold"
                    style={{ color: "#3163B7" }}
                  >
                    {formattedPrice}
                  </span>
                  <p className="text-[12px] mt-1" style={{ color: "#7D7D7D" }}>
                    Inclusive of all taxes
                  </p>
                </div>

                {/* Type */}
                {product.type && (
                  <div className="mb-5">
                    <p
                      className="text-[13px] font-semibold mb-2"
                      style={{ color: "#18315B" }}
                    >
                      Type
                    </p>
                    <span
                      className="inline-block px-4 py-1.5 rounded-full border text-[13px]"
                      style={{ borderColor: "#3163B7", color: "#3163B7" }}
                    >
                      {product.type}
                    </span>
                  </div>
                )}

                {/* Inquiry Button */}
                <button
                  className="w-full py-3 rounded-[8px] text-[15px] font-bold transition-colors hover:opacity-90 mb-6"
                  style={{ backgroundColor: "#3163B7", color: "#FFFFFF" }}
                >
                  Inquiry Now
                </button>

                {/* Features */}
                <div
                  className="rounded-[10px] p-5 mb-6"
                  style={{ backgroundColor: "#ECF3FE" }}
                >
                  <h3
                    className="text-[15px] font-bold mb-3"
                    style={{ color: "#18315B" }}
                  >
                    Key Features
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {product.features.map((feature, i) => (
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
                          <circle cx="7" cy="7" r="7" fill="#3163B7" />
                          <path
                            d="M4 7l2 2 4-4"
                            stroke="white"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Policies */}
                <div className="flex flex-col gap-4">
                  {[
                    {
                      label: "Shipping Policy",
                      content: product.shippingPolicy,
                    },
                    { label: "Refund Policy", content: product.refundPolicy },
                    {
                      label: "Cancellation Policy",
                      content: product.cancellationPolicy,
                    },
                  ].map(({ label, content }) => (
                    <details
                      key={label}
                      className="rounded-[8px] border overflow-hidden"
                      style={{ borderColor: "#E5EAF2" }}
                    >
                      <summary
                        className="px-4 py-3 text-[13px] font-semibold cursor-pointer select-none list-none flex items-center justify-between"
                        style={{ color: "#18315B" }}
                      >
                        {label}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 5L7 9L11 5"
                            stroke="#7D7D7D"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </summary>
                      <p
                        className="px-4 pb-4 text-[12px] leading-relaxed"
                        style={{ color: "#555555" }}
                      >
                        {content}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Added */}
        {relatedProducts.length > 0 && (
          <section
            className="w-full py-10"
            style={{ backgroundColor: "#F8FAFF" }}
          >
            <div className="max-w-[1440px] mx-auto px-[100px]">
              <h2
                className="text-[22px] font-bold mb-6"
                style={{ color: "#18315B" }}
              >
                Recently Added
              </h2>
              <div className="grid grid-cols-4 gap-5">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
