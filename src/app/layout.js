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

// ✅ Correct way to define metadata in Next.js App Router
export const metadata = {
  title: "NOMAD PEPE - The Traveling Frog Meme Coin",
  description:
    "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
  metadataBase: new URL("https://www.nomadpepe.xyz"),
  openGraph: {
    title: "NOMAD PEPE - The Traveling Frog Meme Coin",
    description:
      "Join NOMAD PEPE on his epic journey across the crypto universe! The most based traveling frog in the meme coin space.",
    url: "https://www.nomadpepe.xyz",
    siteName: "NOMAD PEPE",
    images: [
      {
        url: "/nomad-logo.png",
        width: 1200,
        height: 630,
        alt: "NOMAD PEPE Logo",
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
    images: ["/nomad-logo.png"],
  },
  icons: {
    icon: "/nomad-logo.png",
    apple: "/nomad-logo.png",
  },
};

export default function RootLayout({ children }) {
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
        <meta name="theme-color" content="#99CC33" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}