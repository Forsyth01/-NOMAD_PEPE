"use client";

import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";

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
          <div className="flex justify-center items-center lg:h-screen ">
            {/* FLEX CONTAINER */}
            <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-6 sm:gap-8 lg:gap-0">
              {/* IMAGE FIRST ON BOTH MOBILE & DESKTOP */}
              <motion.div
                className="relative w-64 sm:w-80 md:w-[20rem] lg:w-[50rem] xl:w-[48rem] 2xl:w-[50rem] h-64 sm:h-80 md:h-[28rem] lg:h-[36rem] xl:h-[45rem] 2xl:h-[50rem] mx-auto"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/assets/image1.png"
                  alt="Nomad Pepe"
                  fill
                  className="object-contain"
                  priority
                  quality={90}
                />
              </motion.div>

              {/* TEXT SIDE */}
              <motion.div
                className="lg:pl-12"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Logo */}
                <div>
                  <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={900}
                    height={300}
                    quality={90}
                    className="relative lg:top-12"
                    priority
                  />
                </div>

                {/* Tagline */}
                <div>
                  <p className="relative lg:bottom-4 xl:bottom:6 lucky text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] px-4 sm:px-8 lg:px-0">
                    Hop On. Explore the Chain.
                  </p>
                </div>

                {/* Buy button */}
                <div>
                  <a href="#" className="">
                    <img src="/buynomad.png" alt="" className="m-auto h-20" />
                  </a>
                </div>

                {/* Social Icons */}
                <div className="py-3 sm:py-4 mt-3 sm:mt-4 lg:mt-0">
                  <SocialIcons />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
