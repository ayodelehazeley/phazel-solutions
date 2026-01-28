import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Optimizing the font for that premium engineering feel
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Phazel Solutions | Engineering & Technology Sierra Leone",
    template: "%s | Phazel Solutions"
  },
  description: "Freetown-based engineering firm specializing in Cybersecurity (EScan Partner), Data Centers, Cloud Deployment, and Enterprise Software.",
  keywords: ["Engineering Sierra Leone", "Cybersecurity Freetown", "EScan Partner", "ICT Solutions Africa"],
  metadataBase: new URL("https://phazelsolutions.com"), // Replace with your actual domain
  openGraph: {
    title: "Phazel Solutions",
    description: "Engineering the Future of Digital Business in Sierra Leone.",
    url: "https://phazelsolutions.com",
    siteName: "Phazel Solutions",
    locale: "en_SL",
    type: "website",
  },
  icons: {
    icon: "/logo.png", // This uses your logo as the browser tab icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0c] text-white antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {/* Main content expands to push footer down */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}