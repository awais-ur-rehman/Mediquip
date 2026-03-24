"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (p) =>
      p === 1 ||
      p === totalPages ||
      (p >= currentPage - 1 && p <= currentPage + 1),
  );

  return (
    <div className="flex items-center gap-2">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-[6px] flex items-center justify-center border transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50"
        style={{ borderColor: "#E5EAF2", color: "#3163B7" }}
        aria-label="Previous page"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      {visiblePages
        .reduce<(number | "...")[]>((acc, page, i, arr) => {
          if (i > 0 && (page as number) - (arr[i - 1] as number) > 1)
            acc.push("...");
          acc.push(page);
          return acc;
        }, [])
        .map((item, i) =>
          item === "..." ? (
            <span
              key={`dots-${i}`}
              className="w-9 h-9 flex items-center justify-center text-[13px]"
              style={{ color: "#7D7D7D" }}
            >
              …
            </span>
          ) : (
            <button
              key={item}
              onClick={() => onPageChange(item as number)}
              className="w-9 h-9 rounded-[6px] text-[13px] font-medium border transition-colors"
              style={{
                backgroundColor: currentPage === item ? "#3163B7" : "#FFFFFF",
                color: currentPage === item ? "#FFFFFF" : "#18315B",
                borderColor: currentPage === item ? "#3163B7" : "#E5EAF2",
              }}
            >
              {item}
            </button>
          ),
        )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-[6px] flex items-center justify-center border transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50"
        style={{ borderColor: "#E5EAF2", color: "#3163B7" }}
        aria-label="Next page"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
