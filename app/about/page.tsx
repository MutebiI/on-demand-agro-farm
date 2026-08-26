"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
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

  // More dramatic, visible blob shapes
  const blobShapes = [
    "rounded-[70%_30%_40%_60%/60%_40%_30%_70%]",
    "rounded-[30%_70%_60%_40%/40%_60%_70%_30%]",
    "rounded-[50%_50%_70%_30%/30%_70%_50%_50%]",
    "rounded-[40%_60%_30%_70%/70%_30%_60%_40%]",
  ];

  const softShapes = [
    "rounded-tl-[4rem] rounded-tr-[1rem] rounded-br-[4rem] rounded-bl-[1rem]",
    "rounded-tl-[1rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[1rem]",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[35vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-emerald-800/90" />
          {/* Decorative blob */}
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-[60%_40%_60%_40%/40%_60%_40%_60%] bg-emerald-600/20 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-[40%_60%_40%_60%/60%_40%_60%_40%] bg-emerald-500/20 blur-3xl" />
          
          <svg
            className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.08)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-16 lg:py-20 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-emerald-200 border border-emerald-500/20 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              About Us
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              We Exist to
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-yellow-300 bg-clip-text text-transparent">
                Empower Farmers
              </span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-base text-emerald-100/80 leading-relaxed">
              ON-DEMAND AGRO-FARM is a Uganda-based agricultural enterprise dedicated to helping farmers overcome fear, reduce expenses, and maximize yield through modern, sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER WITH MORE CURVE ===== */}
      <div className="relative h-20 w-full overflow-hidden bg-white -mt-1">
        <svg className="absolute left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#f8fafc"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== OUR STORY - SPLIT LAYOUT WITH CURVES ===== */}
      <section ref={sectionRef} className="relative bg-slate-50/30 py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-[70%_30%_40%_60%/60%_40%_30%_70%] bg-emerald-100/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-[30%_70%_60%_40%/40%_60%_70%_30%] bg-emerald-100/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left content - 3 columns */}
            <div className="lg:col-span-3">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <span className={`inline-block bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[0]}`}>
                  Our Story
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                  From Fear to Farming Confidence
                </h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  Founded on the principle that fear is the biggest barrier to entry in farming, ON-DEMAND AGRO-FARM began as a hands-on learning center focused on zero-mortality brooding, precision coffee transplanting, and sustainable apiculture.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Through daily live training sessions, active community support, and direct farm consulting, we have grown into a trusted network connecting farmers to training, high-grade supplies, and viable markets across Uganda and beyond.
                </p>
                
                {/* Stats with curved shapes */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { number: "500+", label: "Farmers Trained" },
                    { number: "100+", label: "Active Members" },
                    { number: "50+", label: "Partner Farms" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`text-center p-4 rounded-[40%_60%_40%_60%/60%_40%_60%_40%] bg-white shadow-sm border border-slate-200 hover:shadow-md transition ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <p className="text-2xl font-bold text-emerald-700">{stat.number}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - curved shape with philosophy */}
            <div className="lg:col-span-2">
              <div
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div className={`relative bg-emerald-700 p-10 ${blobShapes[0]} text-white shadow-xl overflow-hidden`}>
                  <div className={`absolute -right-10 -top-10 w-64 h-64 bg-emerald-500/30 blur-3xl ${blobShapes[1]}`} />
                  <div className="relative z-10 text-center">
                    <div className="text-7xl mb-4">🌱</div>
                    <h3 className="text-2xl font-bold">Our Philosophy</h3>
                    <p className="mt-2 text-emerald-200/80 text-lg italic">
                      "Start Small and Grow Big. Invest Wisely."
                    </p>
                    <p className="mt-4 text-emerald-200/70 text-sm leading-relaxed">
                      We believe every farmer can succeed with the right knowledge, support, and resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER ===== */}
      <div className="relative h-20 w-full overflow-hidden bg-white">
        <svg className="absolute left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#f8fafc"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== MISSION & VISION - CURVED CARDS ===== */}
      <section className="relative bg-slate-50/30 py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-[60%_40%_60%_40%/40%_60%_40%_60%] bg-emerald-100/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[1]}`}>
              Our Purpose
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Mission & Vision
            </h2>
            <p className="mt-3 text-slate-600">
              Guiding our work and inspiring our future.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Mission - curved card */}
            <div
              className={`relative transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className={`relative bg-white p-8 ${blobShapes[2]} shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                <div className={`absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-100/40 blur-2xl ${blobShapes[3]}`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    To provide practical, step-by-step agricultural training, quality farm inputs, and direct market access that empower farmers to build profitable and sustainable agribusinesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision - curved card */}
            <div
              className={`relative transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className={`relative bg-white p-8 ${blobShapes[3]} shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                <div className={`absolute -left-10 -top-10 w-48 h-48 bg-emerald-100/40 blur-2xl ${blobShapes[2]}`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">👁️</div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    To become East Africa's leading agricultural hub for coffee, poultry, and beekeeping, inspiring a movement of modern farmers who "Start Small and Grow Big."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER ===== */}
      <div className="relative h-20 w-full overflow-hidden bg-white">
        <svg className="absolute left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== VALUES - ORGANIC PILLS ===== */}
      <section className="relative bg-white py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-[70%_30%_40%_60%/60%_40%_30%_70%] bg-emerald-50/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-[30%_70%_60%_40%/40%_60%_70%_30%] bg-emerald-50/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className={`inline-block bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[0]}`}>
            Our Values
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            What Guides Us
          </h2>
          <p className="mt-3 text-slate-600">
            These principles are the heart of everything we do.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { icon: "🌱", label: "Practical Training" },
              { icon: "📦", label: "Quality Inputs" },
              { icon: "🤝", label: "Market Access" },
              { icon: "💪", label: "Farmer Empowerment" },
              { icon: "♻️", label: "Sustainability" },
              { icon: "💡", label: "Innovation" },
            ].map((value, i) => (
              <div
                key={i}
                className={`group transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 ${blobShapes[i % blobShapes.length]} shadow-sm hover:shadow-md transition-all hover:border-emerald-300 hover:bg-emerald-50/30`}>
                  <span className="text-2xl">{value.icon}</span>
                  <span className="text-sm font-medium text-slate-700">{value.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER ===== */}
      <div className="relative h-20 w-full overflow-hidden bg-white">
        <svg className="absolute left-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="#f8fafc"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </div>

      {/* ===== CTA ===== */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-700 py-20 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-[60%_40%_60%_40%/40%_60%_40%_60%] bg-emerald-600/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-[40%_60%_40%_60%/60%_40%_60%_40%] bg-emerald-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Farm?
          </h2>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Whether you're a beginner or experienced farmer, we're here to help you grow.
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