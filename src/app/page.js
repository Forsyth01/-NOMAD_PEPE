'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import Marquee from './components/MarqueeSection';
import FaqSection from './components/FaqSection';
import HowToBuy from './components/HowToBuy';
import BuyUsingJupiter from './components/BuyUsingJupiter';
import Nomadnomics from './components/Nomadnomics';
import NomadBadge from './components/NomadBadge';
import ExpeditionSection from './components/ExpeditionSection';
import VideoPlayer from './components/VideoPlayer';
import NomadJourney from './components/TheNomadJourney';
import SixMonthsJourney from './components/SixMonthsJourney';
import TappedInCollab from './components/TappedInCollab';
import LuxuryVillaCollab from './components/LuxuryVillaCollab';
import PresaleSection from './components/PresaleSection';
import NomadYachtParties from './components/NOMADYachtParties';

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
      {/* <Hero /> */} 
      <Marquee /> 
      {/* <HowToBuy/> */}
      <PresaleSection/>
      <VideoPlayer/>
      {/* <BuyUsingJupiter/> */}
      <Nomadnomics />
      <ExpeditionSection/>
      <NomadJourney/>
      <SixMonthsJourney/>
      <LuxuryVillaCollab/>
      <NomadYachtParties/>
      <TappedInCollab/>
      <FaqSection/>
      <NomadBadge/>
      {/* <ParallaxSection /> */}
      {/* <Roadmap /> */}
      {/* <Community /> */}
      <Footer />
    </main>
  );
}