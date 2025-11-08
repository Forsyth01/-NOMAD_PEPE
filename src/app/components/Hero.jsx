"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: 'url("/assets/herobg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "full",
      }}
      className="overflow-hidden"
    >
      <div className="z-10 items-center">
        <div className="w-full text-center">
          <div className="flex justify-center items-center lg:h-screen overflow-hidden">
            {/* FLEX CONTAINER */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0 w-full">
              
              {/* Left Content */}
              <motion.div
                className="lg:pl-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  {/* Logo */}
                  <div>
                    <Image
                      src="/assets/logo.png"
                      alt="Logo"
                      width={900}
                      height={300}
                      quality={90}
                      className="relative lg:top-12 top-16 
                      h-auto w-[352.5324830616657px]
                      xs:w-[250px]
                      sm:w-[300px]
                      md:w-[450px]
                      lg:w-[750px]
                      xl:w-[800.7236653215286px]
                      xl:h-[350.48741138446843px]
                      2xl:w-[700px]"
                    />
                  </div>

                  {/* Tagline */}
                  <p className="relative top-6 lg:top-0 lg:bottom-4 xl:bottom:6 lucky text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] px-4 sm:px-8 lg:px-0 rotate-[-2deg]">
                    Hop On. Explore the Chain.
                  </p>
                </div>

                {/* Buy Button */}
                <div className="hidden lg:block">
                  <motion.a
                    href="#howtobuy"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src="/buynomad.png" alt="" className="m-auto h-20" />
                  </motion.a>
                </div>

                {/* Social Icons */}
                <div className="py-3 sm:py-4 mt-3 sm:mt-4 lg:mt-0 hidden lg:block">
                  <SocialIcons />
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="relative h-[460px] w-[460px] sm:w-80 sm:h-80 md:w-[20rem] md:h-[20rem] lg:w-[50rem] lg:h-[36rem] xl:w-[48rem] xl:h-[45rem] 2xl:w-[50rem] 2xl:h-[50rem] mx-auto overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/assets/hero.png"
                  alt="Nomad Pepe"
                  fill
                  className="lg:object-contain object-cover"
                  priority
                  quality={90}
                />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}