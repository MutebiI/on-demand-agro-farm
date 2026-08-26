"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
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

  // Organic blob shapes for cards
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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-900/80 to-emerald-800/85" />
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

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-emerald-200 border border-emerald-500/20 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Agricultural Enterprise | Uganda
              </span>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Start Small and
                <br />
                <span className="bg-gradient-to-r from-emerald-300 to-yellow-300 bg-clip-text text-transparent">
                  Grow Big.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100/80">
                ON-DEMAND AGRO-FARM empowers farmers through modern, sustainable farming practices — bridging the gap between practical knowledge and profitable agribusiness.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-full bg-emerald-600 px-8 py-3.5 font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30"
                >
                  Explore Services →
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-emerald-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-emerald-800/30"
                >
                  Get in Touch
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-emerald-200/70">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Poultry Training
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Coffee Agronomy
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Beekeeping
                </span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-[40%_60%_30%_70%/50%_40%_60%_50%] bg-emerald-500/10 blur-2xl" />
                <div className="relative rounded-2xl border border-emerald-400/20 bg-emerald-800/30 p-8 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-7xl mb-4">🌱</div>
                    <h3 className="text-2xl font-bold text-white">Start Small. Invest Wisely.</h3>
                    <p className="mt-2 text-emerald-200/70">Expert training • Quality inputs • Market access</p>
                    <div className="mt-6 flex justify-center gap-4 text-sm text-emerald-200/60">
                      <span>✓ Poultry</span>
                      <span>✓ Coffee</span>
                      <span>✓ Beekeeping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER ===== */}
      <div className="relative h-16 w-full overflow-hidden bg-emerald-50/30 -mt-1">
        <svg className="absolute left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== ABOUT PREVIEW ===== */}
      <section ref={sectionRef} className="relative bg-white py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-emerald-50/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50/30 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`inline-block bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[0]}`}>
                About Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Empowering Farmers Through Modern Agriculture
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                ON-DEMAND AGRO-FARM is a Uganda-based agricultural enterprise and consultancy dedicated to helping farmers overcome fear, reduce expenses, and maximize yield.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                We bridge the gap between practical field knowledge and profitable agribusiness, serving beginner and experienced farmers alike.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block rounded-full bg-emerald-700 px-8 py-3 font-medium text-white transition-all hover:bg-emerald-800 hover:shadow-lg"
              >
                Learn More →
              </Link>
            </div>

            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-700 p-8 text-white overflow-hidden">
                <div className={`absolute -right-10 -top-10 w-48 h-48 bg-emerald-500/30 blur-2xl ${blobShapes[0]}`} />
                <div className="relative z-10">
                  <p className="text-2xl font-bold text-emerald-200">"Start Small and Grow Big."</p>
                  <p className="mt-4 text-emerald-100/80 leading-relaxed">
                    Founded on the principle that fear is the biggest barrier to entry in farming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER 2 ===== */}
      <div className="relative h-16 w-full overflow-hidden bg-emerald-50/30">
        <svg className="absolute left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#f8fafc"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="relative bg-slate-50/50 py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-emerald-100/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[0]}`}>
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-3 text-slate-600">
              Practical training, quality inputs, and market access for modern farmers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🐔",
                title: "Poultry Management",
                desc: "Brooder setup, heating, vaccination, and feed management for all breeds.",
                color: "from-amber-50 to-amber-100",
                border: "border-amber-200",
              },
              {
                icon: "☕",
                title: "Coffee Agronomy",
                desc: "Seedling nursery management, transplanting, and disease prevention.",
                color: "from-emerald-50 to-emerald-100",
                border: "border-emerald-200",
              },
              {
                icon: "🍯",
                title: "Beekeeping",
                desc: "Modern hive management, honey harvesting, and processing techniques.",
                color: "from-yellow-50 to-yellow-100",
                border: "border-yellow-200",
              },
              {
                icon: "📊",
                title: "Agribusiness Consulting",
                desc: "One-on-one advisory, daily coaching, and market linkage.",
                color: "from-blue-50 to-blue-100",
                border: "border-blue-200",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`group relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} blur-2xl ${blobShapes[i % blobShapes.length]}`} />
                <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center h-full">
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full bg-emerald-700 px-8 py-3 font-medium text-white transition-all hover:bg-emerald-800 hover:shadow-lg"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER 3 ===== */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <svg className="absolute left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#f8fafc"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== IMPACT / CTA ===== */}
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