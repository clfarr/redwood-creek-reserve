import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Redwood Creek Reserve | Trinity County Cannabis",
  description: "Rooted in Tradition. Grown in the Heart of the Emerald Triangle. Sustainable, sun-grown cannabis from Trinity County, California.",
  keywords: ["cannabis", "Trinity County", "sun-grown", "sustainable", "craft cannabis", "Emerald Triangle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
