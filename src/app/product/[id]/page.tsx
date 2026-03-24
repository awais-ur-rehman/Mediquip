import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";

export async function generateStaticParams() {
  return productsData.products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productsData.products.find((p) => p.id === id);
  return {
    title: product
      ? `${product.shortName} - Lofty Mediquip`
      : "Product Not Found",
    description: product
      ? `Buy ${product.name} from Lofty Mediquip. ${product.features[0] || ""}`
      : "Product not found",
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productsData.products.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="w-full py-20 text-center">
        <h1
          className="text-[28px] font-bold mb-4"
          style={{ color: "#18315B" }}
        >
          Product Not Found
        </h1>
        <Link
          href="/products"
          className="text-[14px] font-semibold hover:underline"
          style={{ color: "#3163B7" }}
        >
          ← Back to Products
        </Link>
      </section>
    );
  }

  const { currencyLocale, currency, currencySymbol } = productsData.settings;
  const formattedPrice = new Intl.NumberFormat(currencyLocale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  // Related products from same category
  const relatedProducts = productsData.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full py-3" style={{ backgroundColor: "#F8FAFF" }}>
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <div className="flex items-center gap-2 text-[12px]">
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "#7D7D7D" }}
            >
              Home
            </Link>
            <span style={{ color: "#7D7D7D" }}>/</span>
            <Link
              href="/products"
              className="hover:underline"
              style={{ color: "#7D7D7D" }}
            >
              Products
            </Link>
            <span style={{ color: "#7D7D7D" }}>/</span>
            <span style={{ color: "#18315B" }} className="font-semibold">
              {product.shortName}
            </span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="w-full py-10">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <div className="grid grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div
                className="rounded-[12px] overflow-hidden border"
                style={{
                  borderColor: "#E5EAF2",
                  backgroundColor: "#ECF3FE",
                }}
              >
                <div className="relative w-full h-[400px]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    sizes="600px"
                    priority
                  />
                </div>
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-[8px] overflow-hidden border cursor-pointer"
                      style={{
                        borderColor: i === 0 ? "#3163B7" : "#E5EAF2",
                        backgroundColor: "#ECF3FE",
                      }}
                    >
                      <div className="relative w-full h-[80px]">
                        <Image
                          src={img}
                          alt={`${product.name} view ${i + 1}`}
                          fill
                          className="object-contain p-2"
                          sizes="100px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <span
                className="text-[12px] font-bold uppercase tracking-wider"
                style={{ color: "#3163B7" }}
              >
                {product.brand}
              </span>
              <h1
                className="text-[24px] font-bold mt-1 mb-6 leading-snug"
                style={{ color: "#18315B" }}
              >
                {product.name}
              </h1>

              {/* Price + Availability */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-[30px] font-bold"
                  style={{ color: "#3163B7" }}
                >
                  {currencySymbol}
                  {formattedPrice.replace(/[^\d,.\s]/g, "")}
                </span>
                <span
                  className="text-[13px] font-bold px-3 py-1 rounded-[4px]"
                  style={{
                    backgroundColor:
                      product.availability === "In Stock"
                        ? "#E8F7EF"
                        : "#FDEBEF",
                    color:
                      product.availability === "In Stock"
                        ? "#098B48"
                        : "#D92550",
                  }}
                >
                  {product.availability}
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex gap-2 text-[13px]">
                  <span style={{ color: "#7D7D7D" }}>Product ID:</span>
                  <span
                    className="font-semibold"
                    style={{ color: "#18315B" }}
                  >
                    {product.productId}
                  </span>
                </div>
                <div className="flex gap-2 text-[13px]">
                  <span style={{ color: "#7D7D7D" }}>Category:</span>
                  <span
                    className="font-semibold"
                    style={{ color: "#18315B" }}
                  >
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Inquiry CTA */}
              <button
                className="w-full py-3.5 rounded-[8px] text-[15px] font-bold transition-opacity hover:opacity-90 mb-8"
                style={{ backgroundColor: "#3163B7", color: "#FFFFFF" }}
              >
                Inquire Now
              </button>

              {/* Features */}
              <div className="mb-6">
                <h3
                  className="text-[16px] font-bold mb-3"
                  style={{ color: "#18315B" }}
                >
                  Key Features
                </h3>
                <ul className="flex flex-col gap-2">
                  {product.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[13px]"
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
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="w-full py-10">
          <div className="max-w-[1440px] mx-auto px-[100px]">
            <div
              className="pt-10"
              style={{ borderTop: "1px solid #EEF2F9" }}
            >
              <h2
                className="text-[22px] font-bold mb-6"
                style={{ color: "#18315B" }}
              >
                Related Products
              </h2>
              <div className="grid grid-cols-3 gap-6">
                {relatedProducts.map((rp) => {
                  const rpPrice = new Intl.NumberFormat(currencyLocale, {
                    style: "currency",
                    currency,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(rp.price);

                  return (
                    <Link
                      key={rp.id}
                      href={`/product/${rp.id}`}
                      className="group flex flex-col rounded-[10px] border overflow-hidden transition-shadow hover:shadow-lg"
                      style={{
                        borderColor: "#E5EAF2",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <div
                        className="relative w-full h-[200px] overflow-hidden"
                        style={{ backgroundColor: "#ECF3FE" }}
                      >
                        <Image
                          src={rp.imageUrl}
                          alt={rp.shortName}
                          fill
                          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                          sizes="33vw"
                        />
                      </div>
                      <div className="p-4">
                        <span
                          className="text-[11px] font-bold uppercase tracking-wide"
                          style={{ color: "#7D7D7D" }}
                        >
                          {rp.brand}
                        </span>
                        <h3
                          className="text-[14px] font-bold leading-snug"
                          style={{ color: "#18315B" }}
                        >
                          {rp.shortName}
                        </h3>
                        <span
                          className="text-[16px] font-bold"
                          style={{ color: "#3163B7" }}
                        >
                          {currencySymbol}
                          {rpPrice.replace(/[^\d,.\s]/g, "")}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
