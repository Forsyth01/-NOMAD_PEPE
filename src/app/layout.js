import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ──────────────────────────────────────────────────────────────
// Site Configuration
// ──────────────────────────────────────────────────────────────
const SITE_URL = "https://www.nomadpepe.xyz";
const OG_IMAGE = `${SITE_URL}/nomad-logo.png`;

// ──────────────────────────────────────────────────────────────
// Next.js Metadata (This is all you need!)
// ──────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NOMAD PEPE - The Traveling Frog Meme Coin",
  description:
    "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
  
  openGraph: {
    title: "NOMAD PEPE - The Traveling Frog Meme Coin",
    description:
      "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
    url: SITE_URL,
    siteName: "NOMAD PEPE",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NOMAD PEPE - Traveling Frog Meme Coin",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NOMAD PEPE - The Traveling Frog Meme Coin",
    description:
      "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
    site: "@nomadcoinhq",
    creator: "@nomadcoinhq",
    images: [OG_IMAGE],
  },

  icons: {
    icon: "/nomad-logo.png",
    apple: "/nomad-logo.png",
  },
};

// ──────────────────────────────────────────────────────────────
// Root Layout (Clean, no duplicate meta tags)
// ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}