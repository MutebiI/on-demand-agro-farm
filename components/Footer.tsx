import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-200/30 bg-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white font-bold text-xs">
                ODAF
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                ON-DEMAND AGRO-FARM
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-emerald-200">
              Start Small and Grow Big. Invest Wisely.
            </p>
            <p className="mt-4 text-sm text-emerald-300">
              📍 Masaka Lwengo District, Uganda
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-emerald-200 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-emerald-200 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-emerald-200 hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-emerald-200 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-emerald-200">
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📍</span>
                <span>Masaka Lwengo District, Uganda</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📱</span>
                <a href="https://wa.me/447776892185" className="hover:text-white transition">
                  +44 777 689 2185
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📧</span>
                <a href="mailto:info@ondemandagrofarm.com" className="hover:text-white transition">
                  info@ondemandagrofarm.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Tagline */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Our Promise
            </h3>
            <p className="mt-4 text-sm text-emerald-200 leading-relaxed">
              Empowering farmers through practical training, quality inputs, and direct market access.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-emerald-300">Start Small and Grow Big</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-emerald-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-emerald-300">
            © {new Date().getFullYear()} ON-DEMAND AGRO-FARM. All rights reserved.
          </p>
          <p className="text-center text-xs text-emerald-400">
            🌱 Start Small and Grow Big. Invest Wisely.
          </p>
        </div>
      </div>
    </footer>
  );
}