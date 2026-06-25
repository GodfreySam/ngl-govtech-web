"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Our Vision", href: "#vision"     },
  { label: "Technology",  href: "#technology" },
  { label: "Impact",      href: "#impact"     },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "w-full sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm"
          : "bg-background border-b border-outline-variant/20",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-page py-4">
        {/* Wordmark */}
        <a
          href="/"
          className="text-headline-md font-semibold text-on-surface tracking-tighter hover:text-secondary transition-colors duration-200"
        >
          NGL
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-label-md text-on-surface-variant hover:text-on-surface transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button size="sm">Contact Us</Button>
          <button
            className="md:hidden p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all duration-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="border-t border-outline-variant/30 bg-background px-page py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
