"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section className="relative h-screen md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mobile Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/Frame 70.png")',
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backgroundBlendMode: "multiply",
          opacity: 0.8,
        }}
      ></div>
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/herobg2.png")',
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "multiply",
          opacity: 0.8,
        }}
      ></div>
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/herobg2.png")',
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          opacity: 0.8,
        }}
      ></div>

      {/* Centered Content */}
      <div className="relative z-10 w-full h-full flex flex-col md:px-6 md:py-12">
        <div className="max-w-7xl mx-auto h-full w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-12 h-full ">
            {/* Left Content */}
            <motion.div
              className="relative z-20 text-center lg:text-left lg:left-10 pt-12 px-4 md:pt-4 lg:pt-0 flex-shrink-0 top-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  width={900}
                  height={300}
                  quality={90}
                  className="h-auto w-[450px] sm:w-[280px] md:w-[450px] lg:w-[500px] xl:w-[650px] relative top-12"
                />
              </div>

              {/* Tagline */}
              <p className="lucky text-lg sm:text-xl md:text-3xl lg:text-3xl xl:text-[35px] rotate-[-2deg] mt-2 md:mt-0">
                Freedom has a currency.
              </p>

              {/* Buy Button - Desktop Only */}
              <div className="mt-8 hidden lg:block">
                <motion.a
                  href="#howtobuy"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/buynomad.png"
                    alt="Buy Nomad"
                    width={200}
                    height={80}
                    className="m-auto h-20"
                  />
                </motion.a>
              </div>

              {/* Social Icons - Desktop Only */}
              <div className="mt-6 hidden lg:block">
                <SocialIcons />
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[720px] z-10
                sm:w-[380px] sm:h-[380px]
                md:relative md:left-0 md:translate-x-0 md:w-[400px] md:h-[400px] 
                lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/assets/hero.png"
                alt="Nomad Pepe"
                fill
                className="object-contain object-bottom md:object-center"
                priority
                quality={90}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
