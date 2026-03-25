"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ui/ProductCard";
import CategorySidebar from "@/components/ui/CategorySidebar";
import SortBar from "@/components/ui/SortBar";
import Pagination from "@/components/ui/Pagination";

const ITEMS_PER_PAGE = 9;

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <section className="w-full py-10 min-h-screen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[60px] xl:px-[100px]">
            <div className="animate-pulse space-y-6">
              <div className="h-8 w-48 bg-gray-200 rounded" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-64 bg-gray-100 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </section>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const subParam = searchParams.get("sub");

  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on URL category/subcategory params
  const filteredProducts = useMemo(() => {
    let products = productsData.products;

    if (categoryParam) {
      products = products.filter(
        (p) => p.category.toLowerCase().replace(/\s+/g, "-") === categoryParam,
      );
    }

    if (subParam) {
      products = products.filter(
        (p) =>
          p.subcategory.toLowerCase().replace(/\s+/g, "-") === subParam,
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case "name-az":
        products = [...products].sort((a, b) =>
          a.shortName.localeCompare(b.shortName),
        );
        break;
      case "name-za":
        products = [...products].sort((a, b) =>
          b.shortName.localeCompare(a.shortName),
        );
        break;
      default:
        break;
    }

    return products;
  }, [categoryParam, subParam, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Active category label for breadcrumb
  const activeLabel = subParam
    ? subParam.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : categoryParam
      ? categoryParam.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "All Products";

  // Reset page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <section className="w-full py-10 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[60px] xl:px-[100px]">
        <div className="flex gap-8">
          {/* Sidebar */}
          <CategorySidebar
            categories={productsData.categories}
            onFilterChange={handleFilterChange}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Breadcrumb */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
              <h1
                className="text-[26px] font-bold"
                style={{ color: "#18315B" }}
              >
                {activeLabel}
              </h1>
              <span
                className="text-[13px]"
                style={{ color: "#7D7D7D" }}
              >
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""} found
              </span>
            </div>

            {/* Sort Bar */}
            <SortBar sortBy={sortBy} onSortChange={setSortBy} />

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div
                className="flex items-center justify-center py-20 rounded-[12px]"
                style={{ backgroundColor: "#F8FAFF" }}
              >
                <div className="text-center">
                  <p
                    className="text-[16px] font-semibold mb-2"
                    style={{ color: "#18315B" }}
                  >
                    No products found
                  </p>
                  <p className="text-[13px]" style={{ color: "#7D7D7D" }}>
                    Try selecting a different category or removing filters.
                  </p>
                </div>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
