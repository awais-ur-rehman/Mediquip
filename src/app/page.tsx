import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Menubar from "@/components/layout/Menubar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import CategorySidebar from "@/components/ui/CategorySidebar";
import BrandsCarousel from "@/components/ui/BrandsCarousel";
import productsData from "@/data/products.json";

export default function HomePage() {
  const featuredProducts = productsData.products
    .filter((p) => p.isFeatured)
    .slice(0, 6);
  const recentProducts = productsData.products
    .filter((p) => p.isNew)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Menubar />

      {/* Hero Gradient Divider */}
      <div className="gradient-divider" />

      {/* Main Content */}
      <main className="flex-1">
        {/* Products Section */}
        <section className="w-full py-10 min-h-screen">
          <div className="max-w-7xl mx-auto px-[100px]">
            <div className="flex gap-8">
              {/* Sidebar */}
              <CategorySidebar categories={productsData.categories} />

              {/* Products Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h2
                    className="text-[22px] font-bold"
                    style={{ color: "#18315B" }}
                  >
                    Hospital Equipment
                  </h2>
                  <Link
                    href="/products"
                    className="text-[13px] font-semibold transition-colors hover:underline"
                    style={{ color: "#4285F4" }}
                  >
                    View All →
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-5">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Categories */}
        <section
          className="w-full py-10"
          style={{ backgroundColor: "#F8FAFF" }}
        >
          <div className="max-w-[1440px] mx-auto px-[100px]">
            <h2
              className="text-[22px] font-bold mb-8"
              style={{ color: "#18315B" }}
            >
              More Categories
            </h2>
            <div className="flex flex-wrap gap-6 justify-start">
              {productsData.moreCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.id}`}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div
                    className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 transition-all group-hover:border-blue-400 group-hover:shadow-md"
                    style={{
                      borderColor: "#E5EAF2",
                      backgroundColor: "#ECF3FE",
                    }}
                  >
                    <Image
                      src={cat.imageUrl}
                      alt={cat.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span
                    className="text-[12px] font-semibold text-center max-w-[100px] leading-snug transition-colors group-hover:text-blue-600"
                    style={{ color: "#18315B" }}
                  >
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Added */}
        <section className="w-full py-10">
          <div className="max-w-[1440px] mx-auto px-[100px]">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-[22px] font-bold"
                style={{ color: "#18315B" }}
              >
                Recently Added
              </h2>
              <Link
                href="/products?filter=new"
                className="text-[13px] font-semibold hover:underline"
                style={{ color: "#4285F4" }}
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-5">
              {recentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <div className="gradient-divider" />
        <BrandsCarousel brands={productsData.brands} />
        <div className="gradient-divider" />
      </main>

      <Footer />
    </div>
  );
}
