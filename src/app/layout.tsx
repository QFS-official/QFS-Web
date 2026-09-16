import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qfspay.org'),
  title: "QFS Official \u269b\ufe0f Quantum Financial System",
  description: "The Next Generation of Digital Finance. Blockchain, AI, Advanced Cryptography, Digital Payments & Decentralized Financial Services.",
  keywords: ["QFS", "Quantum Financial System", "blockchain", "DeFi", "digital finance", "crypto", "wallet", "DEX"],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'QFS Official \u269b\ufe0f Quantum Financial System',
    description: 'The Next Generation of Digital Finance. Blockchain, AI, Advanced Cryptography, Digital Payments & Decentralized Financial Services.',
    url: 'https://qfspay.org',
    siteName: 'QFS Pay',
    images: [{
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'QFS Quantum Financial System',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QFS Official \u269b\ufe0f Quantum Financial System',
    description: 'The Next Generation of Digital Finance. Blockchain, AI, Advanced Cryptography, Digital Payments & Decentralized Financial Services.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
