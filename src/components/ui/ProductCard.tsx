"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";

interface Product {
  id: string;
  shortName: string;
  brand: string;
  price: number;
  availability: string;
  imageUrl: string;
  isNew?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const { currencyLocale, currency, currencySymbol } = productsData.settings;

  const formattedPrice = new Intl.NumberFormat(currencyLocale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col rounded-[10px] border overflow-hidden transition-shadow hover:shadow-lg"
      style={{ borderColor: "#E5EAF2", backgroundColor: "#FFFFFF" }}
    >
      {/* Image */}
      <div
        className="relative w-full h-[220px] overflow-hidden"
        style={{ backgroundColor: "#ECF3FE" }}
      >
        <Image
          src={product.imageUrl}
          alt={product.shortName}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 1440px) 33vw"
        />
        {product.isNew && (
          <span
            className="absolute top-3 left-3 text-[11px] font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: "#098B48", color: "#FFFFFF" }}
          >
            NEW
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 p-4 flex-1">
        <span
          className="text-[11px] font-bold uppercase tracking-wide"
          style={{ color: "#7D7D7D" }}
        >
          {product.brand}
        </span>
        <h3
          className="text-[14px] font-bold leading-snug"
          style={{ color: "#18315B" }}
        >
          {product.shortName}
        </h3>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span
            className="text-[16px] font-bold"
            style={{ color: "#3163B7" }}
          >
            {currencySymbol}
            {formattedPrice.replace(/[^\d,.\s]/g, "")}
          </span>
          <span
            className="text-[11px] font-semibold"
            style={{
              color:
                product.availability === "In Stock" ? "#098B48" : "#D92550",
            }}
          >
            {product.availability}
          </span>
        </div>
      </div>
    </Link>
  );
}
