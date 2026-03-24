import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  shortName: string;
  brand: string;
  category: string;
  subcategory: string;
  type: string;
  productId: string;
  price: number;
  availability: string;
  imageUrl: string;
  isFeatured: boolean;
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Link href={`/product/${product.id}`} className="block group">
      <div
        className="rounded-[10px] overflow-hidden border transition-shadow hover:shadow-md"
        style={{ borderColor: "#E5EAF2", backgroundColor: "#FFFFFF" }}
      >
        {/* Image */}
        <div
          className="relative w-full aspect-[4/3] overflow-hidden"
          style={{ backgroundColor: "#ECF3FE" }}
        >
          <Image
            src={product.imageUrl}
            alt={product.shortName}
            fill
            className="object-contain p-4 transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {product.isNew && (
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded text-[11px] font-bold uppercase"
              style={{ backgroundColor: "#098B48", color: "#FFFFFF" }}
            >
              New
            </span>
          )}
          {product.availability !== "In Stock" && (
            <span
              className="absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-bold"
              style={{ backgroundColor: "#D92550", color: "#FFFFFF" }}
            >
              Out of Stock
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <p
            className="text-[11px] font-semibold uppercase tracking-wide mb-1"
            style={{ color: "#7D7D7D" }}
          >
            {product.brand}
          </p>
          <h3
            className="text-[13px] font-semibold leading-snug mb-2 line-clamp-2"
            style={{ color: "#18315B" }}
          >
            {product.shortName}
          </h3>
          <div className="flex items-center justify-between">
            <span
              className="text-[15px] font-bold"
              style={{ color: "#3163B7" }}
            >
              {formattedPrice}
            </span>
            <span className="text-[11px]" style={{ color: "#098B48" }}>
              {product.availability}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
