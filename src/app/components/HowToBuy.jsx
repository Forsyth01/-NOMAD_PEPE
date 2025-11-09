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
      className="pb-5 px-4 lg:px-0"
      style={{
        background: `linear-gradient(rgba(69,102,49,0.5), rgba(69,102,49,0.8)), url('/BG htb.png') center/cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section className="flex flex-col lg:grid grid-cols-2 pb-6 ">
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
        </motion.div>
      </section>
    </div>
  );
}
