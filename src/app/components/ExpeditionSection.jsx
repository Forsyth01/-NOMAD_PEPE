"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Expedition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div
      ref={ref}
      className="min-h-screen sm:h-screen lg:h-screen bg-[#456631] flex items-center justify-center pb-20 py-4 pt-4 lg:pt-4 lg:pb-4"
      style={{
        background: `linear-gradient(rgba(69,102,49,0.6), rgba(69,102,49,0.8)), url('/nomad_expedition_frame_bg.png') center/cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-7xl w-full overflow-hidden"
      >
        <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left: Text Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-6 text-[#E5EED2]"
          >
            <motion.h1 
              variants={textVariants}
              className="text-5xl"
            >
              CASH THE HOP! START <br className="hidden lg:flex" />
              THE EXPEDITION!
            </motion.h1>

            <motion.p 
              variants={textVariants}
              className="text-xl md:text-xl text-[#E5EED2] lucky"
            >
              Join the most epic tap-to-earn adventure in the crypto space.{" "}
              <span className="text-[#E5EED2]">$NOMAD</span> is your ticket to
              the real world of decentralized fun!
            </motion.p>

            <ul className="space-y-4 text-xl lucky">
              {[
                "Be part of a rapidly growing community of $NOMAD EXPLORERS (currently 500K+).",
                "Unlock ancient treasures with daily quests & traveler challenges.",
                "Fuel your journey and claim massive weekly reward drops!",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-start gap-3"
                >
                  <span className="text-2xl text-[#E5EED2]">■</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-fit"
            >
              <div className="relative group">
                <div className="">
                  <img
                    src="/launchthenomad.png"
                    alt=""
                    className="h-20 object-cover"
                  />
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* Right: Image Frame - Reduced Size */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:relative items-center justify-center "
          >
            {/* Golden Frame - Reduced Size */}
            <motion.div 
              className="relative w-[350px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px]"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/nomad_expedition_frame.png"
                alt="Golden Frame"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}