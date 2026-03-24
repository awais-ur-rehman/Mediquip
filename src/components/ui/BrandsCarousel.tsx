import Image from "next/image";

interface Brand {
  id: string;
  name: string;
  imageUrl: string;
}

interface BrandsCarouselProps {
  brands: Brand[];
}

export default function BrandsCarousel({ brands }: BrandsCarouselProps) {
  return (
    <section className="w-full py-12" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-[1440px] mx-auto px-[100px]">
        <h2
          className="text-[24px] font-bold mb-8 text-center"
          style={{ color: "#18315B" }}
        >
          Our Brands
        </h2>

        <div className="flex items-center justify-center gap-10 flex-wrap">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center w-[140px] h-[70px] rounded-[8px] border p-3 transition-shadow hover:shadow-md"
              style={{ borderColor: "#E5EAF2", backgroundColor: "#F8FAFF" }}
            >
              <Image
                src={brand.imageUrl}
                alt={brand.name}
                width={120}
                height={50}
                className="object-contain max-h-[50px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
