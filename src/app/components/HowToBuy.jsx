"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HowToBuy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      id="howtobuy"
      className="lg:pb-5 pb-2 px-4 lg:px-0"
      style={{
        background: `linear-gradient(rgba(69,102,49,0.5), rgba(69,102,49,0.8)), url('/bg 4.png') center/cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section className="flex flex-col lg:grid grid-cols-2 lg:pb-6 ">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block lg:flex flex-col justify-end order-2 lg:order-1 "
        >
          <motion.div
            className="relative z-100"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/website 3.png"
              alt="Nomad Beach" 
              width={500}
              height={500}
              className="object-contain w-[420px m-auto lg:m-0 sm:w-[400px] lg:w-[600px] xl:w-[880px] relative z-100"
              quality={100}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center text-center order-1 lg:order-2"
        >
          <Image
            src="/howtobuy2.png"
            alt="How to Buy"
            width={500}
            height={500}
            className="object-contain w-[437px] h-[507px sm:w-[400px] lg:w-[600px] xl:w-[880px] lg:relative right-20"
            quality={90}
          />
          
          {/* Store Buttons - Below image on mobile, visible on mobile only */}
          <div className="flex flex-col items-center gap-3 mt-6 lg:hidden">
            <p className="text-white text-lg font-semibold">Get Phantom Wallet</p>
            <div className="flex gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=app.phantom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
              <a 
                href="https://apps.apple.com/app/phantom-solana-wallet/id1598432977" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Store Buttons - Bottom middle on desktop */}
      <div className="hidden lg:flex flex-col items-center gap-3 pb-6">
        <p className="text-white text-xl">Get Phantom Wallet</p>
        <div className="flex gap-4">
          <a 
            href="https://play.google.com/store/apps/details?id=app.phantom" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="h-14"
            />
          </a>
          <a 
            href="https://apps.apple.com/app/phantom-solana-wallet/id1598432977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              className="h-14"
            />
          </a>
        </div>
      </div>
    </div>
  );
}