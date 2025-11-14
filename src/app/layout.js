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
  // ✅ Your actual domain
  const domain = "https://www.nomadpepe.xyz";
  const ogImage = `${domain}/nomad-logo.png`;

  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Favicon and Icons */}
        <link rel="icon" href="/nomad-logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/nomad-logo.png" />
        <meta name="theme-color" content="#99CC33" />

        {/* ✅ Open Graph (for link previews) */}
        <meta property="og:title" content="NOMAD PEPE - The Traveling Frog Meme Coin" />
        <meta property="og:site_name" content="NOMAD PEPE" />
        <meta
          property="og:description"
          content="Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NOMAD PEPE Logo" />
        <meta property="og:url" content={domain} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NOMAD PEPE - The Traveling Frog Meme Coin" />
        <meta
          name="twitter:description"
          content="Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space."
        />
        <meta name="twitter:image" content={ogImage} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}