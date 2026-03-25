import Image from "next/image";
import productsData from "@/data/products.json";

export const metadata = {
  title: "Blogs - Lofty Mediquip",
  description:
    "Medical equipment guides, product reviews, and clinical tips from the Lofty Mediquip team.",
};

export default function BlogsPage() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[60px] xl:px-[100px]">
        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold mb-2"
            style={{ color: "#18315B" }}
          >
            Blogs &amp; Articles
          </h1>
          <p className="text-[15px]" style={{ color: "#7D7D7D" }}>
            Equipment guides, product reviews, and clinical tips from our
            medical experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productsData.blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-[12px] border overflow-hidden transition-shadow hover:shadow-md"
              style={{ borderColor: "#E5EAF2", backgroundColor: "#FFFFFF" }}
            >
              {/* Image */}
              <div
                className="relative w-full h-[200px] overflow-hidden"
                style={{ backgroundColor: "#ECF3FE" }}
              >
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1440px) 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category + Read Time */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold uppercase px-2 py-0.5 rounded"
                    style={{ backgroundColor: "#ECF3FE", color: "#3163B7" }}
                  >
                    {blog.category}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{ color: "#7D7D7D" }}
                  >
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-[16px] font-bold leading-snug mb-3"
                  style={{ color: "#18315B" }}
                >
                  {blog.title}
                </h2>

                {/* Excerpt */}
                <p
                  className="text-[13px] leading-relaxed mb-4 line-clamp-3"
                  style={{ color: "#7D7D7D" }}
                >
                  {blog.excerpt}
                </p>

                {/* Author + Date */}
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "#EEF2F9" }}
                >
                  <span
                    className="text-[12px] font-semibold"
                    style={{ color: "#555555" }}
                  >
                    {blog.author}
                  </span>
                  <span
                    className="text-[12px]"
                    style={{ color: "#7D7D7D" }}
                  >
                    {new Date(blog.date).toLocaleDateString("en-PK", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
