"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    category: string;
  } | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const blobShapes = [
    "rounded-[62%_38%_34%_66%/45%_38%_62%_55%]",
    "rounded-[62%_38%_45%_55%/40%_45%_55%_60%]",
    "rounded-[45%_55%_38%_62%/55%_45%_60%_40%]",
    "rounded-[55%_45%_62%_38%/45%_60%_40%_55%]",
  ];

  const softShapes = [
    "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
    "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/farm-1.jpg",
      title: "Poultry Brooder Setup",
      category: "Operations",
      description: "Modern brooder setup for healthy chicks",
    },
    {
      id: 2,
      src: "/images/gallery/farm-2.jpg",
      title: "Coffee Seedling Nursery",
      category: "Coffee",
      description: "Healthy coffee seedlings ready for transplant",
    },
    {
      id: 3,
      src: "/images/gallery/farm-3.jpg",
      title: "Beekeeping Hives",
      category: "Beekeeping",
      description: "Modern beekeeping hives in a natural setting",
    },
    {
      id: 4,
      src: "/images/gallery/farm-4.jpg",
      title: "Harvesting Honey",
      category: "Beekeeping",
      description: "Pure honey harvesting and processing",
    },
    {
      id: 5,
      src: "/images/gallery/farm-5.jpg",
      title: "Training Session",
      category: "Training",
      description: "Daily live training with farmers",
    },
    {
      id: 6,
      src: "/images/gallery/farm-6.jpg",
      title: "Fresh Organic Eggs",
      category: "Products",
      description: "Fresh eggs from our poultry farm",
    },
    {
      id: 7,
      src: "/images/gallery/farm-7.jpg",
      title: "Coffee Harvesting",
      category: "Coffee",
      description: "Harvesting ripe coffee cherries",
    },
    {
      id: 8,
      src: "/images/gallery/farm-8.jpg",
      title: "Farm Facilities",
      category: "Operations",
      description: "Our facilities in Masaka Lwengo District",
    },
    {
      id: 9,
      src: "/images/gallery/farm-9.jpg",
      title: "Community Training",
      category: "Training",
      description: "Community farmers learning together",
    },
  ];

  // Filter categories
  const categories = ["All", "Operations", "Coffee", "Beekeeping", "Training", "Products"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 via-emerald-900/90 to-emerald-800/90" />
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-700/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl" />
          
          <svg
            className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 xl:-bottom-40 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[280px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.06)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-16 lg:py-20 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-emerald-200 border border-emerald-500/20 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Gallery
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Farm
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-yellow-300 bg-clip-text text-transparent">
                in Pictures
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-emerald-100/80 leading-relaxed">
              A visual journey through our farm operations, training sessions, and products.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER ===== */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#f8fafc"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== GALLERY GRID ===== */}
      <section ref={sectionRef} className="relative bg-slate-50/30 py-16">
        <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-emerald-100/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-100/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800">Our Gallery</h2>
            <p className="mt-2 text-slate-600">
              Explore our farm operations and products.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-emerald-700 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image, i) => (
              <div
                key={image.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                      <div>
                        <p className="text-white font-semibold">{image.title}</p>
                        <p className="text-emerald-200 text-sm">{image.description}</p>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                      {image.category}
                    </div>
                    {/* Click to view */}
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-800">{image.title}</h4>
                    <p className="text-sm text-slate-500">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== LIGHTBOX MODAL ===== */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-[70vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-slate-800">{selectedImage.title}</h3>
              <p className="mt-1 text-slate-500">{selectedImage.description}</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ===== WAVE DIVIDER ===== */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== CTA ===== */}
      <section className="relative bg-emerald-700 py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Farm?
          </h2>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Join the movement of modern farmers who are starting small and growing big.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-emerald-800 transition-all hover:bg-emerald-50 hover:shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-emerald-400/30 px-8 py-3.5 font-medium text-emerald-200 transition-all hover:bg-emerald-800/30"
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}