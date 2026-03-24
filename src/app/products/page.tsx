"use client";

import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Menubar from "@/components/layout/Menubar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import CategorySidebar from "@/components/ui/CategorySidebar";
import SortBar from "@/components/ui/SortBar";
import Pagination from "@/components/ui/Pagination";
import productsData from "@/data/products.json";

const PRODUCTS_PER_PAGE = 9;

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = useMemo(() => {
    const arr = [...productsData.products];
    switch (sortBy) {
      case "price-asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price-desc":
        return arr.sort((a, b) => b.price - a.price);
      case "name-asc":
        return arr.sort((a, b) => a.shortName.localeCompare(b.shortName));
      case "newest":
        return arr.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      default:
        return arr;
    }
  }, [sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Menubar />
      <div className="gradient-divider" />

      <main className="flex-1">
        <section className="w-full py-10">
          <div className="max-w-[1440px] mx-auto px-[100px]">
            {/* Breadcrumb */}
            <nav className="text-[12px] mb-6" style={{ color: "#7D7D7D" }}>
              <span>Home</span>
              <span className="mx-2">›</span>
              <span style={{ color: "#3163B7" }}>Hospital Equipment</span>
            </nav>

            <div className="flex gap-8">
              {/* Sidebar */}
              <CategorySidebar categories={productsData.categories} />

              {/* Main */}
              <div className="flex-1 flex flex-col gap-5">
                {/* Page Title */}
                <h1
                  className="text-[24px] font-bold"
                  style={{ color: "#18315B" }}
                >
                  Hospital Equipment
                </h1>

                {/* Sort Bar */}
                <SortBar
                  total={sortedProducts.length}
                  sortBy={sortBy}
                  onSortChange={handleSortChange}
                />

                {/* Products Grid */}
                <div className="grid grid-cols-3 gap-5">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-4">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
