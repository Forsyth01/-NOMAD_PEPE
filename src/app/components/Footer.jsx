'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const links = [
    { href: "#about", text: "ABOUT $NOMAD" },
    { href: "#howtobuy", text: "HOW TO BUY" },
    { href: "#nomadnomics", text: "NOMADNOMICS" },
    { href: "#faq", text: "FAQ" }
  ];

  return (
    <footer ref={ref} className="bg-[#02221D] text-center py-12 px-4 text-xl">
      {/* Top Navigation Links */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6  text-white "
      >
        {links.map((link, index) => (
          <motion.div
            key={link.href}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center gap-4 md:gap-8"
          >
            <motion.a 
              href={link.href} 
              whileHover={{ scale: 1.05, color: "#99CC33" }}
              transition={{ duration: 0.2 }}
              className="hover:text-[#99CC33] transition-colors duration-200"
            >
              {link.text}
            </motion.a>
            {index < links.length - 1 && (
              <span className="text-[#99CC33]">|</span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.p 
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-3xl mx-auto  text-white mb-6"
      >
        DISCLAIMER: $NOMAD is a meme coin created for fun with absolutely no intrinsic value or any
        expectation of financial return. The token for entertainment purposes only and we take zero
        responsibility for the value of this token. $NOMAD is inspired by NOMAD to be the king of
        meme coins.
      </motion.p>

      {/* Copyright */}
      <motion.p 
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[#9fd235]"
      >
        2025 NOMAD PEPE. All right reserved.
      </motion.p>
    </footer>
  );
}