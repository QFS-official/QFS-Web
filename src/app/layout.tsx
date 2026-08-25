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
  title: "QFS Official \u269b\ufe0f Quantum Financial System",
  description: "The Next Generation of Digital Finance. Blockchain, AI, Advanced Cryptography, Digital Payments & Decentralized Financial Services.",
  keywords: ["QFS", "Quantum Financial System", "blockchain", "DeFi", "digital finance", "crypto", "wallet", "DEX"],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    og: '/opengraph-image.png',
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
