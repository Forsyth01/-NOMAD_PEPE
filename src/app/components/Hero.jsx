"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  const heroRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    tl.fromTo(
      ".hero-stats > *",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-[#0E242217]"
    >
      <div className="z-10 items-center w-[90%] m-auto">
        <div className="w-full text-center">
          {/* Background Image - Responsive positioning */}
          <div className="absolute right-0 top-0 w-full lg:w-auto">
            <img
              src="/assets/herobg.png"
              alt="Hero Background"
              className="w-full h-[100vh] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[948px] opacity-40 lg:opacity-60 object-cover mx-auto lg:mx-0"
            />
          </div>
          
          <div className="min-h-screen flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-0">
              {/* Left Content */}
              <div className="relative z-50 w-full lg:w-auto order-2 lg:order-1">
                <div className="relative lg:top-12">
                  {/* Logo - Responsive sizing */}
                  <img 
                    src="/assets/logo.png" 
                    alt="Nomad Pepe Logo" 
                    className="h-32 sm:h-48 md:h-60 lg:h-75 mx-auto lg:mx-0" 
                  />
                  
                  {/* Tagline */}
                  <div className="relative lg:bottom-20 mt-3 sm:mt-4 lg:mt-0">
                    <p className="lucky text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] px-4 sm:px-8 lg:px-0">
                      Hop On. Explore the Chain.
                    </p>
                  </div>
                </div>
                
                {/* Button - Responsive sizing */}
                <div className="rotate-[-2deg] mt-4 sm:mt-6 lg:mt-0">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, y: -1, rotate: 0 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block font-bold text-[#0F1C0F] text-sm sm:text-lg uppercase tracking-wide"
                  >
                    {/* Shadow Layer */}
                    <span className="absolute inset-0 bg-white rounded-md translate-x-[2px] translate-y-[3px] sm:translate-x-[3px] sm:translate-y-[5px] md:translate-x-[4px] md:translate-y-[7px]"></span>

                    {/* Main Button - Responsive text size */}
                    <p className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] bg-[#99CC33] rounded-md border border-[#0F1C0F] px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 inline-block font-normal">
                      BUY $NOMAD
                    </p>
                  </motion.a>
                </div>

                {/* Social Icons */}
                <div className="py-3 sm:py-4 mt-3 sm:mt-4 lg:mt-0">
                  <SocialIcons />
                </div>
              </div>
              
              {/* Right Image - Responsive positioning and sizing */}
              <div className="relative lg:absolute lg:right-0 z-50 lg:bottom-0 w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
                <img
                  src="/assets/image1.png"
                  alt="Nomad Pepe"
                  className="h-48 w-48 xs:h-56 xs:w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] 2xl:h-[600px] 2xl:w-[600px] object-contai"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}