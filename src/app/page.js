'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import Marquee from './components/MarqueeSection';

export default function Home() {
  useEffect(() => {
    // Register ScrollTrigger
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Global scroll animations
      gsap.utils.toArray('.fade-in-up').forEach(element => {
        gsap.fromTo(element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, []);

  return (
    <main className="">
      <Navigation />
      <Hero />
      <Marquee />
      {/* <ParallaxSection /> */}
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  );
}