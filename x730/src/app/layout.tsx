import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "X730 — Elite Security Solutions",
    template: "%s | X730",
  },
  description:
    "X730 INC. manages all security needs from A to Z. Close protection, security consulting, risk assessments, event security, private investigation, and advanced technology solutions.",
  keywords: [
    "security consulting Canada",
    "close protection",
    "executive protection",
    "risk assessment",
    "private investigation",
    "event security",
    "X730",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.x730.ca",
    siteName: "X730 INC.",
    title: "X730 — Elite Security Solutions",
    description:
      "Integrity. Experience. Excellence. Discretion. Managing all security needs from A to Z.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${bebasNeue.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
