"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

export default function Nomadnomics() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "Coming Soon";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCopy = () => {
    // Disabled until launch
    return;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section
      id="about/tokenomics"
      ref={ref}
      className="bg-[#0E2422] relative overflow-hidden py-8 px-8 md:px-6"
    >
      {/* Decorative clouds */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 lg:right-0 right-20  
                w-[200px] xs:w-[150px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] 2xl:w-[340px]"
      >
        <img
          src="/cloud.png"
          alt=""
          className="relative right-4 sm:right-6 md:right-8 object-cover w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="hidden lg:flex absolute bottom-0 right-0 
                w-[180px] xs:w-[130px] sm:w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px] 2xl:w-[280px]"
      >
        <img
          src="/cloud2.png"
          alt=""
          className="relative right-6 sm:right-8 md:right-10 object-cover w-full"
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl lucky h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 w-full lg:order-2"
          >
            {/* Title */}
            <motion.div
              variants={itemVariants}
              className="mb-6 sm:mb-8 lg:text-left md:text-center mt-14 lg:mt-0"
            >
              <h1 className="text-[#e5eed2] text-4xl sm:text-4xl md:text-5xl uppercase tracking-wide">
                #NOMADNOMICS
              </h1>
            </motion.div>

            {/* Total Supply */}
            <motion.div
              variants={itemVariants}
              className="mb-4 sm:mb-5 lg:text-left md:text-center"
            >
              <h3 className="text-[#Acc578] text-sm sm:text-base md:text-lg mb-1 uppercase">
                TOTAL SUPPLY
              </h3>
              <p className="text-[#e5eed2] text-2xl sm:text-3xl md:text-4xl">
                1,000,000,000,000
              </p>
            </motion.div>

            {/* Buy/Sell Tax */}
            <motion.div
              variants={itemVariants}
              className="mb-6 sm:mb-8 flex flex-col gap-3 lg:justify-start md:justify-center"
            >
              {/* Buy Tax */}
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#9fd235] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#6b8d26] rounded-full"></div>
                </div>
                <p className="text-[#e5eed2] text-base sm:text-lg md:text-xl">
                  BUY TAX: <span className="font-bold">0%</span>
                </p>
              </div>

              {/* Sell Tax */}
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#9fd235] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#6b8d26] rounded-full"></div>
                </div>
                <p className="text-[#e5eed2] text-base sm:text-lg md:text-xl">
                  SELL TAX: <span className="font-bold">2%</span>
                </p>
              </div>
            </motion.div>

            {/* Public Marketing Wallet */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <h3 className="text-[#Acc578] text-sm sm:text-base md:text-lg mb-1 uppercase">
                PUBLIC MARKETING WALLET
              </h3>
              <p className="text-[#e5eed2] text-base sm:text-lg break-all">
                4zYUqr9fQMmrEUXxndVfmUzwJY7bGsroc141xYmAiE2i
              </p>
            </motion.div>

            {/* Contract Address */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <h3 className="text-white text-sm md:text-center sm:text-base md:text-lg mb-3 uppercase tracking-wide lg:text-left">
                Contract Address
              </h3>

              <div className="w-full max-w-md lg:max-w-2xl mx-auto lg:mx-0">
                <div className="bg-[#1a3a35]/50 border-2 border-[#ACC578] rounded-xl p-3 sm:p-4 flex items-center justify-center gap-3 w-full">
                  <p className="text-[#e5eed2] text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-center flex-1">
                    {contractAddress}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Buy Button */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <img
                  src="/$NOMADNOMICSBUTTON.png"
                  alt="Buy Nomad"
                  className="cursor-pointer h-12 md:h-14"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg lg:order-1"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative rounded-full overflow-hidden">
                <img
                  src="/not blur.png"
                  alt="Nomad Pepe"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}