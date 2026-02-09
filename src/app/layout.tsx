import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import TopArrow from '@/Components/TopArrow';
import FloatingContact from '@/Components/FloatingContact';
import Script from 'next/script';
import './globals.css';
import './theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'ScientistsHub Labs - Research & Engineering Studio',
    template: '%s | ScientistsHub Labs',
  },
  description: 'ScientistsHub Labs is a research-driven product development and engineering studio building scalable software systems and intelligent AI solutions.',
  keywords: ['product engineering', 'software systems', 'research-driven development', 'AI solutions', 'intelligent systems', 'web development', 'software engineering'],
  authors: [{ name: 'ScientistsHub Labs' }],
  creator: 'ScientistsHub Labs',
  publisher: 'ScientistsHub Labs',
  metadataBase: new URL('https://labs.scientistshub.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://labs.scientistshub.com',
    title: 'ScientistsHub Labs - Research & Engineering Studio',
    description: 'ScientistsHub Labs is a research-driven product development and engineering studio building scalable software systems and intelligent AI solutions.',
    siteName: 'ScientistsHub Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScientistsHub Labs - Research & Engineering Studio',
    description: 'ScientistsHub Labs is a research-driven product development and engineering studio building scalable software systems and intelligent AI solutions.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ScientistsHub Labs',
  url: 'https://labs.scientistshub.com',
  logo: 'https://labs.scientistshub.com/logo.png',
  description: 'Research-driven product development and engineering studio building scalable software systems and intelligent AI solutions.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@scientistshub.com'
  },
  sameAs: [
    'https://twitter.com/scientistshub',
    'https://linkedin.com/company/scientistshub-labs'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive" 
        />
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
            <TopArrow />
            <FloatingContact />
            <main className="w-full overflow-x-hidden mt-[60px]">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
