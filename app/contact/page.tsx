"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate sending
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    animation: "float 6s ease-in-out infinite",
  };

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

  // Floating animation style
  const floatStyle = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(3deg); }
    }
    @keyframes pulse-soft {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delay-1 {
      animation: float 7s ease-in-out infinite 1s;
    }
    .animate-float-delay-2 {
      animation: float 8s ease-in-out infinite 2s;
    }
    .animate-pulse-soft {
      animation: pulse-soft 3s ease-in-out infinite;
    }
    .animate-slide-up {
      animation: slide-up 0.6s ease-out forwards;
    }
  `;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Animation Styles */}
      <style>{floatStyle}</style>

      {/* ===== HERO WITH IMAGE ===== */}
      <section className="relative isolate overflow-hidden min-h-[40vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact ON-DEMAND AGRO-FARM"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/85 via-emerald-900/75 to-emerald-800/85" />
          
          {/* Decorative floating blobs */}
          <div className={`absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl animate-float`} />
          <div className={`absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl animate-float-delay-1`} />
          
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
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-emerald-200 border border-emerald-500/20 mb-4 animate-pulse-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Get in Touch
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's Talk
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-yellow-300 bg-clip-text text-transparent">
                About Your Farm
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-emerald-100/80 leading-relaxed">
              We're here to answer your questions and help you grow. Reach out to us anytime.
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

      {/* ===== CONTACT SECTION ===== */}
      <section ref={sectionRef} className="relative bg-slate-50/30 py-16">
        {/* Floating background blobs */}
        <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-emerald-100/20 blur-3xl animate-float-delay-2" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-100/15 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* ===== LEFT: CONTACT INFO ===== */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`inline-block bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ${softShapes[0]}`}>
                Contact Information
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                We'd Love to Hear
                <br />
                <span className="text-emerald-700">From You</span>
              </h2>
              <p className="mt-3 text-slate-600">
                Have questions about our services? Want to partner with us? Reach out and we'll get back to you quickly.
              </p>

              {/* Contact Details with Hover Animation */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: "📍",
                    title: "Location",
                    content: "Masaka Lwengo District, Uganda",
                    delay: "0ms"
                  },
                  {
                    icon: "📱",
                    title: "WhatsApp / Phone",
                    content: (
                      <a
                        href="https://wa.me/447776892185"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-800 hover:underline transition group flex items-center gap-2"
                      >
                        +44 777 689 2185
                        <span className="text-sm text-emerald-500 group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </a>
                    ),
                    delay: "100ms"
                  },
                  {
                    icon: "📧",
                    title: "Email",
                    content: (
                      <a
                        href="mailto:info@ondemandagrofarm.com"
                        className="text-emerald-700 hover:text-emerald-800 hover:underline transition group flex items-center gap-2"
                      >
                        info@ondemandagrofarm.com
                        <span className="text-sm text-emerald-500 group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </a>
                    ),
                    delay: "200ms"
                  },
                  {
                    icon: "🕐",
                    title: "Office Hours",
                    content: "Monday - Friday: 8:00 AM - 5:00 PM",
                    delay: "300ms"
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group relative transition-all duration-500 hover:-translate-y-1 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: item.delay }}
                  >
                    <div className="relative bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
                      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/20 blur-2xl ${blobShapes[i % blobShapes.length]}`} />
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h3 className="font-semibold text-slate-800">{item.title}</h3>
                          <p className="mt-1 text-slate-600">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/50 flex items-center gap-4">
                <div className="text-3xl">🌱</div>
                <div>
                  <p className="font-medium text-slate-800">Start Small and Grow Big</p>
                  <p className="text-sm text-slate-500">We're here to support your farming journey.</p>
                </div>
              </div>
            </div>

            {/* ===== RIGHT: CONTACT FORM ===== */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Decorative floating blobs */}
                <div className={`absolute -right-10 -top-10 w-48 h-48 bg-emerald-100/20 blur-2xl ${blobShapes[2]} animate-float`} />
                <div className={`absolute -left-10 -bottom-10 w-48 h-48 bg-emerald-50/20 blur-2xl ${blobShapes[3]} animate-float-delay-1`} />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800">Send Us a Message</h3>
                  <p className="mt-1 text-sm text-slate-500">We'll respond within 24 hours.</p>

                  {formStatus === "success" && (
                    <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 animate-slide-up">
                      ✅ Thank you! Your message has been sent. We'll get back to you soon.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 animate-slide-up">
                      ❌ Something went wrong. Please try again or WhatsApp us directly.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 transition-colors group-focus-within:text-emerald-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 transition-colors group-focus-within:text-emerald-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 transition-colors group-focus-within:text-emerald-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 transition-colors group-focus-within:text-emerald-700">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full rounded-full bg-emerald-700 px-6 py-3.5 font-medium text-white transition-all hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-600/20 disabled:opacity-50"
                    >
                      {formStatus === "sending" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>

                  <div className="mt-4 text-center">
                    <p className="text-xs text-slate-400">
                      Or reach us directly on{" "}
                      <a
                        href="https://wa.me/447776892185"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition"
                      >
                        WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-emerald-700 py-16 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl animate-pulse-soft" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Farm?
          </h2>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Join the movement of modern farmers who are starting small and growing big.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/447776892185"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-emerald-800 transition-all hover:bg-emerald-50 hover:shadow-lg group"
            >
              WhatsApp Us Now
              <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
            </a>
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