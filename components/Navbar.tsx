"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => setOpen(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      if (buttonRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setOpen(false);
    }

    if (open) {
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
      }, 10);
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [open]);

  useEffect(() => {
    function handleScroll() {
      if (open) setOpen(false);
    }
    if (open) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-200/30 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-700 to-emerald-600 text-white font-bold text-xs">
            ODAF
          </div>
          <span className="text-lg font-bold tracking-tight text-emerald-800">
            ON-DEMAND AGRO-FARM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-emerald-700"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-emerald-600" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-emerald-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Section */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="relative z-50 rounded-md p-2 text-slate-600 transition hover:bg-emerald-50"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-2xl font-light">
              {open ? "✕" : "☰"}
            </span>
          </button>

          {open && (
            <div
              className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}

          <div
            ref={menuRef}
            className={`absolute left-0 right-0 top-20 overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
              open
                ? "max-h-[600px] opacity-100 border-t border-emerald-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-emerald-50 font-semibold text-emerald-700"
                      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 block rounded-full bg-emerald-700 px-4 py-3 text-center font-medium text-white transition hover:bg-emerald-800"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}