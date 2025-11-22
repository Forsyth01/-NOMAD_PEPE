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

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const SITE_URL = "https://www.nomadpepe.xyz";
const OG_IMAGE = `${SITE_URL}/pfp.jpg`; // MUST BE ABSOLUTE FOR TELEGRAM

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NOMAD PEPE - The Traveling Frog Meme Coin",
  description:
    "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
  keywords: [
    "meme coin",
    "crypto",
    "frog meme",
    "nomad pepe",
    "pepe token",
    "web3",
  ],

  openGraph: {
    title: "NOMAD PEPE - The Traveling Frog Meme Coin",
    description:
      "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
    url: SITE_URL,
    siteName: "NOMAD PEPE",
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE, // ← REQUIRED FOR TELEGRAM
        width: 1200,
        height: 630,
        alt: "Nomad Pepe Meme Coin",
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
    image: OG_IMAGE,
    images: [OG_IMAGE],
  },

  icons: {
    icon: "/pfp.jpg",
    apple: "/pfp.jpg",
  },
};

// ─────────────────────────────────────────────
// ROOT LAYOUT — WITH RAW OG TAGS FOR TELEGRAM
// ─────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Telegram NEEDS raw meta tags */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="twitter:image" content={OG_IMAGE} />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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