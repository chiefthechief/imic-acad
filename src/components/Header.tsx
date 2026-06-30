"use client";

import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Admissions", href: "#admissions" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg shadow-black/20">
      <div className="container-wide flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <div className="font-serif text-2xl font-bold tracking-wide text-white">
            IMIC
          </div>
          <div className="text-[10px] font-medium tracking-[0.25em] text-white/70 uppercase">
            International Academy
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href="#admissions" className="btn-primary text-xs tracking-widest uppercase">
            Apply Now
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/85"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admissions"
              className="btn-primary mt-2 w-fit text-xs tracking-widest uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
              <ChevronRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
