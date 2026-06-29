"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Digital Identity Systems", href: "/solutions#identity" },
      { label: "ERP & Workflow", href: "/solutions#erp" },
      { label: "Citizen Service Platforms", href: "/solutions#citizen" },
      { label: "Analytics & Data", href: "/solutions#analytics" },
      { label: "Regulatory Technology", href: "/solutions#regtech" },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      { label: "Government & Public Administration", href: "/sectors#government" },
      { label: "Energy & Utilities", href: "/sectors#energy" },
      { label: "Education & Capacity", href: "/sectors#education" },
      { label: "Revenue & Finance", href: "/sectors#finance" },
      { label: "Security & Public Safety", href: "/sectors#security" },
    ],
  },
  { label: "Approach", href: "/approach" },
  { label: "Leadership", href: "/leadership" },
  // { label: "Insights", href: "/insights" }, // hidden — content not yet live
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy shadow-xl shadow-navy/20 py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo-mono.png"
            alt="NASENI Golborn Limited"
            width={999}
            height={705}
            className="h-16 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation" ref={dropdownRef}>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="menu"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }
                  onMouseEnter={() => setActiveDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 pt-2 w-72"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <ul
                      role="menu"
                      className="bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                            className="block px-5 py-3 text-sm text-navy-500 hover:bg-green-50 hover:text-green transition-colors font-medium"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="lg:hidden bg-navy-dark border-t border-white/10 py-4">
          <div className="container-wide space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
