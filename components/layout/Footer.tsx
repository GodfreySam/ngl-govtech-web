import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import NaseniStamp from "@/components/ui/NaseniStamp";

const footerLinks = {
  company: [
    { label: "About NGL", href: "/about" },
    { label: "Our Approach", href: "/approach" },
    { label: "Leadership", href: "/leadership" },
    { label: "Partnership Ecosystem", href: "/about#partnership" },
    { label: "Careers", href: "/careers" },
  ],
  solutions: [
    { label: "Digital Identity Systems", href: "/solutions#identity" },
    { label: "ERP & Workflow Automation", href: "/solutions#erp" },
    { label: "Citizen Service Platforms", href: "/solutions#citizen" },
    { label: "Analytics Dashboards", href: "/solutions#analytics" },
    { label: "Regulatory Technology", href: "/solutions#regtech" },
    { label: "Interoperability Platforms", href: "/solutions#interop" },
  ],
  sectors: [
    { label: "Government & Public Admin", href: "/sectors#government" },
    { label: "Energy & Utilities", href: "/sectors#energy" },
    { label: "Education & Capacity", href: "/sectors#education" },
    { label: "Revenue & Finance", href: "/sectors#finance" },
    { label: "Security & Public Safety", href: "/sectors#security" },
    { label: "Digital Economy", href: "/sectors#digital" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">

      {/* ── CTA band ── */}
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-navy text-2xl mb-1">
              Ready to Transform Nigeria&apos;s Digital Future?
            </h3>
            <p className="text-slate text-sm">
              Partner with NGL to build scalable, sustainable digital public infrastructure.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Start a Conversation
          </Link>
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="container-wide py-14">
        {/*
          Mobile  (<640px):  single column — brand, then nav links stacked
          Tablet  (640px+):  brand full-width top; nav links in 3 cols below
          Desktop (1024px+): 5-col row — brand occupies 2 cols, nav cols 1 each
        */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Brand column — 2 cols wide on desktop */}
          <div className="lg:col-span-2 lg:pr-12 lg:border-r lg:border-slate-100">
            <Link href="/" className="inline-flex mb-7 group">
              <Image
                src="/images/logo-horizontal.png"
                alt="NASENI Golborn Limited"
                width={1002}
                height={708}
                className="h-20 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
              />
            </Link>

            <p className="text-slate text-sm leading-relaxed mb-7 max-w-sm">
              A strategic Public-Private Partnership building the digital foundations that
              enable efficient institutions and improved citizen outcomes across Nigeria.
            </p>

            <div className="space-y-3 mb-7">
              <a
                href="mailto:info@nasenigolborn.ng"
                className="flex items-center gap-3 text-sm text-slate hover:text-green-600 transition-colors"
              >
                <Mail size={14} className="shrink-0 text-slate/50" />
                info@nasenigolborn.ng
              </a>
              <a
                href="tel:+2347038564425"
                className="flex items-center gap-3 text-sm text-slate hover:text-green-600 transition-colors"
              >
                <Phone size={14} className="shrink-0 text-slate/50" />
                07038564425
              </a>
              <div className="flex items-start gap-3 text-sm text-slate">
                <MapPin size={14} className="mt-0.5 shrink-0 text-slate/50" />
                <span>6th Floor, Bank of Agriculture Building, Abuja</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate hover:border-navy hover:text-navy hover:bg-navy/5 transition-all duration-200"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate hover:border-navy hover:text-navy hover:bg-navy/5 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns — 3 cols on sm+, stacked on mobile */}
          <div className="lg:col-span-3 lg:pl-4 grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div>
              <h4 className="font-semibold text-navy text-xs mb-5 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate hover:text-navy transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-navy text-xs mb-5 uppercase tracking-wider">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate hover:text-navy transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-navy text-xs mb-5 uppercase tracking-wider">Sectors</h4>
              <ul className="space-y-3">
                {footerLinks.sectors.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate hover:text-navy transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar — stamp left, copyright right ── */}
      <div className="border-t border-slate-200">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* NASENI stamp */}
          <NaseniStamp />

          {/* Copyright */}
          <p className="text-slate/60 text-xs text-center sm:text-right">
            &copy; {new Date().getFullYear()} NASENI Golborn Limited (NGL). All rights reserved.
          </p>

        </div>
      </div>

    </footer>
  );
}
