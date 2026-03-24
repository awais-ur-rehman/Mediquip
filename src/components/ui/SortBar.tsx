"use client";

interface SortBarProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name-az", label: "Name: A–Z" },
  { value: "name-za", label: "Name: Z–A" },
];

export default function SortBar({ sortBy, onSortChange }: SortBarProps) {
  return (
    <div
      className="flex items-center justify-end px-5 py-3 rounded-[8px] border"
      style={{ borderColor: "#E5EAF2", backgroundColor: "#FFFFFF" }}
    >
      <div className="flex items-center gap-3">
        <span className="text-[13px]" style={{ color: "#7D7D7D" }}>
          Sort by:
        </span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="text-[13px] font-medium px-3 py-1.5 rounded-[6px] border outline-none cursor-pointer"
          style={{ borderColor: "#E5EAF2", color: "#18315B" }}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
