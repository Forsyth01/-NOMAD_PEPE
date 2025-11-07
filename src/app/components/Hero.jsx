"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
      className=""
      style={{
        backgroundImage: 'url("/assets/herobg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "full",
      }}
    >
      <div className="z-10 items-center">
        <div className="w-full text-center">
          <div className="flex justify-center items-center lg:h-screen">
            {/* FLEX CONTAINER */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0">
              {/* Left Content */}
              <motion.div 
                className="lg:pl-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Image
                      src="/assets/logo.png"
                      alt="Logo"
                      width={900}
                      height={300}
                      quality={90}
                      className="relative lg:top-12 top-16 
              h-auto w-[332.5324830616657px]
               xs:w-[250px]
               sm:w-[300px]
               md:w-[450px]
               lg:w-[750px]
               xl:w-[800.7236653215286px]
               xl:h-[350.48741138446843px]
               2xl:w-[700px]"
                    />
                  </motion.div>

                  {/* Tagline */}
                  <motion.div 
                    className="mt-4 lg:mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.p 
                      className="relative lg:bottom-4 xl:bottom:6 lucky text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] px-4 sm:px-8 lg:px-0 rotate-[-2deg]"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Hop On. Explore the Chain.
                    </motion.p>
                  </motion.div>
                </div>

                {/* Buy Button */}
                <motion.div 
                  className="hidden lg:block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#" className="">
                    <img src="/buynomad.png" alt="" className="m-auto h-20" />
                  </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div 
                  className="py-3 sm:py-4 mt-3 sm:mt-4 lg:mt-0 hidden lg:block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <SocialIcons />
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div 
                className="relative h-130 w-94 sm:w-80 md:w-[20rem] lg:w-[50rem] xl:w-[48rem] 2xl:w-[50rem] sm:h-80 md:h-[20rem] lg:h-[36rem] xl:h-[45rem] 2xl:h-[50rem] mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src="/assets/image2.png"
                    alt="Nomad Pepe"
                    fill
                    className="lg:object-contain object-cover"
                    priority
                    quality={90}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}