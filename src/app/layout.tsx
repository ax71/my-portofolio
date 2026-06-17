import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kadek Buktiasa — Builder. Problem Solver. Bali.",
  description:
    "Full-Stack Developer based in Bali, Indonesia. I build digital products that create real impact for people and businesses.",
  keywords: ["Kadek Buktiasa", "Full-Stack Developer", "Bali", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-ink text-primary`}>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
