import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nasenigolborn.com"),
  title: {
    default: "NASENI Golborn Limited | Digital Public Infrastructure for National Development",
    template: "%s | NASENI Golborn Limited",
  },
  description:
    "NGL is a strategic Public-Private Partnership accelerating digital transformation, institutional modernization, and technology-enabled public service delivery across Nigeria.",
  keywords: [
    "Digital Public Infrastructure",
    "GovTech Nigeria",
    "Institutional Transformation",
    "NASENI",
    "Public Private Partnership",
    "Digital Government",
    "Nigeria Technology",
    "ERP Systems Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "NASENI Golborn Limited",
    title: "NASENI Golborn Limited | Building Digital Public Infrastructure",
    description:
      "Accelerating digital transformation and technology-enabled public service delivery across Nigeria.",
    images: [
      {
        url: "/images/logo-horizontal.png",
        alt: "NASENI Golborn Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NASENI Golborn Limited",
    description: "Building Digital Public Infrastructure for National Development",
    images: ["/images/logo-horizontal.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-green focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
