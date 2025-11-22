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
// Site Configuration (FIXED STRUCTURE BASED ON BUKKA ISLAND)
// ──────────────────────────────────────────────────────────────
const SITE_URL = "https://www.nomadpepe.xyz";
const OG_IMAGE = `${SITE_URL}/pfp.jpg`; // FIXED — USE JPG

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
  authors: [{ name: "NomadPepe Team" }],

  openGraph: {
    title: "NOMAD PEPE - The Traveling Frog Meme Coin",
    description:
      "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
    url: SITE_URL,
    siteName: "NOMAD PEPE",
    images: [
      {
        url: OG_IMAGE, // FIXED
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
    images: [OG_IMAGE], // FIXED
  },

  icons: {
    icon: "/pfp.jpg",   // FIXED
    apple: "/pfp.jpg",  // FIXED
  },
};

// ──────────────────────────────────────────────────────────────
// Root Layout (MATCHES WORKING BUKKA STRUCTURE)
// ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}