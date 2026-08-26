"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
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

  const services = [
    {
      icon: "🐔",
      title: "Poultry Management & Training",
      description: "Complete brooder setup, heating, watering, vaccine protocols, and feed management for Broilers, Layers, Kuroilers, and Uzima breeds.",
      details: [
        "Zero-mortality brooding techniques",
        "Vaccination schedules and protocols",
        "Feed formulation and management",
        "Disease prevention and biosecurity",
        "Breed selection and management"
      ]
    },
    {
      icon: "☕",
      title: "Coffee Agronomy & Advisory",
      description: "Professional seedling nursery management, zero-loss transplanting techniques, and disease prevention strategies.",
      details: [
        "Seedling nursery establishment",
        "Zero-loss transplanting techniques",
        "Disease and pest management",
        "Soil fertility management",
        "Harvesting and post-harvest handling"
      ]
    },
    {
      icon: "🍯",
      title: "Beekeeping & Honey Production",
      description: "Modern apiculture setups, hive management, and pure honey harvesting techniques.",
      details: [
        "Modern hive setup and management",
        "Swarm control and management",
        "Honey harvesting and processing",
        "Pest and disease management",
        "Value addition and marketing"
      ]
    },
    {
      icon: "📊",
      title: "Agribusiness Consulting",
      description: "One-on-one WhatsApp advisory, daily live coaching sessions, and linking producers directly to buyers.",
      details: [
        "Personalized farm advisory",
        "Market access and linkages",
        "Business planning and development",
        "Financial management",
        "Daily live coaching sessions"
      ]
    }
  ];

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

        <div className="mx-auto max-w-7xl px-5 py-12 lg:py-16 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-emerald-200 border border-emerald-500/20 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Our Services
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What We Offer
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-yellow-300 bg-clip-text text-transparent">
                to Help You Grow
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-emerald-100/80 leading-relaxed">
              Practical training, quality inputs, and market access for modern farmers. From poultry to coffee to beekeeping — we've got you covered.
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

      {/* ===== SERVICES GRID ===== */}
      <section ref={sectionRef} className="relative bg-slate-50/30 py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-emerald-100/30 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-100/20 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800">Our Services</h2>
            <p className="mt-2 text-slate-600">
              We offer a wide range of agricultural services to help you grow and succeed.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {services.map((service, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`absolute -inset-4 bg-gradient-to-br from-emerald-100/30 to-emerald-50/20 ${blobShapes[i % blobShapes.length]}`} />
                <div className={`relative bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${blobShapes[(i + 2) % blobShapes.length]}`}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex h-20 w-20 items-center justify-center rounded-[40%_60%_40%_60%/60%_40%_60%_40%] bg-emerald-50 text-5xl shadow-sm">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">{service.description}</p>
                      
                      {/* Details */}
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.details.map((detail, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-emerald-700 px-8 py-3.5 font-medium text-white transition-all hover:bg-emerald-800 hover:shadow-lg"
            >
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative bg-white py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-emerald-50/30 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50/20 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className={`inline-block bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[0]}`}>
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Built for Farmers, by Farmers
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We understand the challenges farmers face because we've been there. Our services are practical, hands-on, and designed for real results.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: "📚", title: "Practical Training", desc: "Hands-on, step-by-step training you can apply immediately." },
              { icon: "🤝", title: "Community Support", desc: "Join a network of farmers learning and growing together." },
              { icon: "📈", title: "Market Access", desc: "Connect directly to buyers and get better prices for your produce." },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition ${blobShapes[i % blobShapes.length]}`}>
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-emerald-700 py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Grow Your Farm?
          </h2>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Contact us today and let's start your journey to better farming.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/447776892185"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-emerald-800 transition-all hover:bg-emerald-50 hover:shadow-lg"
            >
              📱 WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-emerald-400/30 px-8 py-3.5 font-medium text-emerald-200 transition-all hover:bg-emerald-800/30"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}