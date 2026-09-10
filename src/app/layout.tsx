import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marsya Nur Zaskia — Tech & Creative",
  description:
    "Portfolio of Marsya Nur Zaskia — Information Systems student, RPL graduate, and creative professional with experience in software development, content creation, e-commerce, and customer experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}