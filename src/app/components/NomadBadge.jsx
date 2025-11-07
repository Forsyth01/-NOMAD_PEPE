"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialIcons from "./SocialIcons";

export default function NomadBadge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const badgeVariants = {
    hidden: { scale: 0, rotate: -10, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        duration: 0.8, 
        bounce: 0.4 
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div
      ref={ref}
      className=" relative flex flex-col items-center justify-center bg-[#E5EED2] pb-4 bg-contain"
      style={{
        backgroundImage: "url('/nomadbadge_bg.png')",
        backgroundSize: "cover", // 
        backgroundPosition: "center", 
        // backgroundRepeat: "no-repeat", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay to improve visibility */}
      <div className="absolute inset-0 bg-[#E5EED2]/40"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Badge Image Animation */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative "
        >
          <motion.div
            animate={{ 
              rotate: [0, -2, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src="/nomadbadge.png"
              alt="Nomad Badge"
              className="h-120 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          variants={socialVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=""
        >
          <SocialIcons />
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=" flex justify-center mt-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            className=""
          >
          <img src="/buynomadbtn.png" alt="" className="h-16" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}