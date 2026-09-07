"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const slides = [
    {
      image: "/images/farmer-1.jpg",
      title: "Start Small and Grow Big",
      subtitle: "Empowering farmers through modern, sustainable farming practices.",
    },
    {
      image: "/images/farmer-2.jpg",
      title: "Expert Training & Support",
      subtitle: "Practical training in poultry, coffee, and beekeeping.",
    },
    {
      image: "/images/farmer-3.jpg",
      title: "Quality Inputs & Market Access",
      subtitle: "Connecting farmers to high-grade supplies and viable markets.",
    },
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const softShapes = [
    "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
    "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HORIZONTAL CAROUSEL ===== */}
      <section className="relative isolate overflow-hidden h-[70vh] min-h-[450px] flex items-center">
        {/* Carousel Images */}
        <div className="absolute inset-0 -z-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/60" />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-8 bg-emerald-400"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-emerald-200 border border-emerald-500/20 mb-4">
              🌱 Agricultural Enterprise | Uganda
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slides.map((slide, index) => (
                <span
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 block"
                      : "opacity-0 translate-y-8 absolute"
                  }`}
                >
                  {slide.title}
                </span>
              ))}
            </h1>
            <div className="mt-4 max-w-2xl text-lg text-white/80 relative h-8">
              {slides.map((slide, index) => (
                <p
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute"
                  }`}
                >
                  {slide.subtitle}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-emerald-600 px-8 py-3.5 font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-lg"
              >
                Explore Services →
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT NUMBERS ===== */}
      <section className="bg-slate-50/50 py-16 border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "500+", label: "Farmers Trained" },
              { number: "100+", label: "Active Members" },
              { number: "50+", label: "Partner Farms" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-3xl font-bold text-emerald-700">{stat.number}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW - COLUMN LAYOUT ===== */}
      <section ref={sectionRef} className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Image Column */}
            <div
              className={`order-1 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/farmer-portrait1.jpg"
                  alt="Farmer rearing animals on the farm"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[500px]"
                />
                {/* If you don't have the image yet */}
                {/* <div className="w-full h-[500px] bg-gradient-to-br from-emerald-100/50 to-slate-100 flex items-center justify-center">
                  <span className="text-6xl">🌾</span>
                </div> */}
              </div>
            </div>

            {/* Right: Text Column */}
            <div
              className={`order-2 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <span className={`inline-block bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[0]}`}>
                About Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Empowering Farmers Through Modern Agriculture
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                ON-DEMAND AGRO-FARM is a Uganda-based agricultural enterprise and consultancy dedicated to helping farmers overcome fear, reduce expenses, and maximize yield.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                We bridge the gap between practical field knowledge and profitable agribusiness, serving beginner and experienced farmers alike.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className={`inline-block bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 ${softShapes[0]}`}>
                  🌱 Zero-Mortality Brooding
                </span>
                <span className={`inline-block bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 ${softShapes[1]}`}>
                  ☕ Coffee Agronomy
                </span>
                <span className={`inline-block bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 ${softShapes[0]}`}>
                  🍯 Sustainable Beekeeping
                </span>
              </div>
              <Link
                href="/about"
                className="mt-6 inline-block text-emerald-700 font-medium hover:text-emerald-800 hover:underline transition"
              >
                Learn more about our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-slate-50/30 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[0]}`}>
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-3 text-slate-600">
              Practical training, quality inputs, and market access for modern farmers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🐔",
                title: "Poultry Management",
                desc: "Brooder setup, heating, vaccination, and feed management for all breeds.",
              },
              {
                icon: "☕",
                title: "Coffee Agronomy",
                desc: "Seedling nursery management, transplanting, and disease prevention.",
              },
              {
                icon: "🍯",
                title: "Beekeeping",
                desc: "Modern hive management, honey harvesting, and processing techniques.",
              },
              {
                icon: "📊",
                title: "Agribusiness Consulting",
                desc: "One-on-one advisory, daily coaching, and market linkage.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
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
              className="inline-block text-emerald-700 font-medium hover:text-emerald-800 hover:underline transition"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Farm?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Join the movement of modern farmers who are starting small and growing big.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-emerald-600 px-8 py-3.5 font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-slate-600 px-8 py-3.5 font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}