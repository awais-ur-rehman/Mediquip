"use client";

import { useState } from "react";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  subcategories: string[];
}

interface CategorySidebarProps {
  categories: Category[];
  selectedCategory?: string;
  selectedSubcategory?: string;
  onFilterChange?: () => void;
}

export default function CategorySidebar({
  categories,
  selectedCategory,
  selectedSubcategory,
}: CategorySidebarProps) {
  const [expanded, setExpanded] = useState<string | null>(
    selectedCategory || categories[0]?.id || null,
  );

  return (
    <aside
      className="w-[220px] shrink-0 rounded-[10px] overflow-hidden border"
      style={{ borderColor: "#E5EAF2", backgroundColor: "#FFFFFF" }}
    >
      {/* Header */}
      <div className="px-4 py-3" style={{ backgroundColor: "#3163B7" }}>
        <h2
          className="text-[14px] font-bold uppercase tracking-wide"
          style={{ color: "#FFFFFF" }}
        >
          Categories
        </h2>
      </div>

      {/* Category List */}
      <nav>
        {categories.map((cat) => {
          const isOpen = expanded === cat.id;
          return (
            <div
              key={cat.id}
              className="border-b last:border-b-0"
              style={{ borderColor: "#EEF2F9" }}
            >
              {/* Category Header */}
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-blue-50"
                style={{
                  backgroundColor: isOpen ? "#ECF3FE" : undefined,
                  color: isOpen ? "#3163B7" : "#18315B",
                }}
                onClick={() => setExpanded(isOpen ? null : cat.id)}
                aria-expanded={isOpen}
              >
                <span className="text-[13px] font-semibold">{cat.name}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform shrink-0"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M3 5L7 9L11 5"
                    stroke={isOpen ? "#3163B7" : "#7D7D7D"}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Subcategories */}
              {isOpen && cat.subcategories.length > 0 && (
                <ul style={{ backgroundColor: "#F8FAFF" }}>
                  {cat.subcategories.map((sub) => {
                    const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
                    const isSubActive = selectedSubcategory === subSlug;
                    return (
                      <li key={sub}>
                        <Link
                          href={`/products?category=${cat.id}&sub=${subSlug}`}
                          className="flex items-center gap-2 px-6 py-2 text-[12px] transition-colors hover:text-blue-600"
                          style={{ color: isSubActive ? "#3163B7" : "#555555" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              backgroundColor: isSubActive
                                ? "#3163B7"
                                : "#AEBDDB",
                            }}
                          />
                          {sub}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
