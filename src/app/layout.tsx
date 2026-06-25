import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NGL | The Future of Governance",
  description:
    "NGL (a NASENI company) is building the next generation of secure, efficient, and accessible government technology infrastructure.",
  openGraph: {
    title: "NGL | The Future of Governance",
    description:
      "The next generation of government technology infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-on-background" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
