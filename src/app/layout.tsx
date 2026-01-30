import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";

// Initialize Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | React & Next.js Developer",
  description: "Building Scalable Web Solutions with React & Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-navy-main text-navy-text antialiased font-sans flex flex-col",
          inter.variable,
        )}
      >
        <Navbar />
        <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
