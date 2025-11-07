"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HowToBuy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div
      ref={ref}
      className="pb-5"
      style={{
        background: `linear-gradient(rgba(69,102,49,0.5), rgba(69,102,49,0.8)), url('/BG htb.png') center/cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    
      <motion.section 
        className="lg:grid grid-cols-2 pb-6 "
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Image */}
        <motion.div
          variants={slideLeftVariants}
          className="hidden lg:flex  flex-col justify-end"
        >
          <motion.div
            className=""
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/nomad_beach.png"
              alt="Nomad Beach"
              width={500}
            height={500}
            className="object-contain w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[880px] relative"
              quality={100}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={slideRightVariants}
          className="flex-1 flex flex-col items-center justify-center text-center "
        >
          <motion.div
            animate={{ 
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/howtobuy.png"
              alt="How to Buy"
              width={500}
              height={500}
              className="object-contain w-[437px] h-[507px sm:w-[400px] lg:w-[600px] xl:w-[880px] lg:relative right-20"
              quality={90}
            />
          </motion.div>
        </motion.div>
      </motion.section>
      {/* Tutorial Button */}
      <motion.a
        href="#"
        variants={fadeUpVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=""
      >
        <Image
          src="/Btn htb.png"
          alt="Watch Tutorial"
          width={220}
          height={80}
          className="h-[48.1112060546875px] md:h-20 lg:h-[120px] w-[351px] lg:w-[800px] m-auto "
          quality={90}
        />
      </motion.a>
    </div>
  );
}