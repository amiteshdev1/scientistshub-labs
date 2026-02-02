import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Scientistshub Labs | Building Software & Intelligent Systems",
    template: "%s | Scientistshub Labs"
  },
  description: "A modern software studio building scalable digital solutions, intelligent products, and cutting-edge applications. We create web apps, mobile apps, custom software, and AI-powered systems.",
  keywords: ["software development", "product studio", "web development", "mobile apps", "AI automation", "custom software", "UI/UX design"],
  authors: [{ name: "Scientistshub Labs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scientistshublabs.com",
    siteName: "Scientistshub Labs",
    title: "Scientistshub Labs | Building Software & Intelligent Systems",
    description: "A modern software studio building scalable digital solutions and intelligent products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
