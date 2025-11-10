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

export const metadata = {
  title: "NOMAD PEPE - The Traveling Frog Meme Coin",
  description:
    "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Favicon and Icons */}
        <link rel="icon" href="/assets/hero.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/assets/fav.png" />
        <meta name="theme-color" content="#99CC33" />

        {/* ✅ Open Graph (for link previews) */}
        <meta property="og:title" content="NOMAD PEPE - The Traveling Frog Meme Coin" />
        <meta
          property="og:description"
          content="Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/hero.png"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NOMAD PEPE - The Traveling Frog Meme Coin" />
        <meta
          name="twitter:description"
          content="Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/hero.png"
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
