import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-page py-6 gap-6">
        {/* Brand + copyright */}
        <div className="flex items-center gap-3">
          <span className="ty-label-md font-bold text-on-surface">NGL</span>
          <span className="ty-label-sm text-on-surface-variant">
            © {new Date().getFullYear()} NGL. All rights reserved.
          </span>
        </div>

        {/* Links + NASENI lockup */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="ty-label-sm text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="ty-label-sm text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Terms of Service
          </a>
          <div className="h-5 w-px bg-outline-variant/40" />
          <Image
            src="/naseni-company.png"
            alt="A NASENI Company"
            width={320}
            height={80}
            className="h-44 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
