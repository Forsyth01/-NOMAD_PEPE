"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function Nomadnomics() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "MADHPJRN6BP8T7BR5Y7NUSUNWWA2JU8BYPOBZPRHBHV";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#0E2422] relative overflow-hidden py-8 px-4 md:px-6">
      {/* Decorative cloud at top for mobile */}
      <div className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-56">
        <img src="/cloud.png" alt="" className="w-full object-cover" />
      </div>

      {/* Decorative clouds for desktop */}
      <div className="hidden lg:block absolute top-0 right-0 w-[301.8545227050781px] xl:w-56">
        <img src="/cloud.png" alt="" className="relative right-8 object-cover w-[301.8545227050781px] " />
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-40 xl:w-56">
        <img src="/cloud2.png" alt="" className="relative right-10 object-cover" />
      </div>

      <div className="container mx-auto max-w-7xl lucky h-full flex items-center">
        {/* Mobile Layout: Everything stacked vertically */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
          
          {/* Content Section - First on mobile, Second on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:order-2"
          >
            {/* Title - Centered on mobile */}
            <div className="mb-6 sm:mb-8 text-center lg:text-left mt-12 lg:mt-0">
              <h1 className="text-[#e5eed2] text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide">
                #NOMADNOMICS
              </h1>
            </div>

            {/* Total Supply */}
            <div className="mb-4 sm:mb-5 text-center lg:text-left">
              <h3 className="text-[#Acc578] text-sm sm:text-base md:text-lg mb-1 uppercase ">
                TOTAL SUPPLY
              </h3>
              <p className="text-[#e5eed2] text-2xl sm:text-3xl md:text-4xl ">
                1,000,000,000,000
              </p>
            </div>

            {/* Buy/Sell Tax */}
            <div className="mb-6 sm:mb-8 flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#9fd235] rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#6b8d26] rounded-full"></div>
              </div>
              <p className="text-[#e5eed2] text-base sm:text-lg md:text-xl ">
                BUY/SELL TAX: 0%
              </p>
            </div>

            {/* Contract Address */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-[#ffffff] text-sm sm:text-base md:text-lg mb-3 uppercase tracking-wide font-semibold text-center lg:text-left">
                CONTRACT ADDRESS
              </h3>

              {/* Contract box */}
              <div className="w-full max-w-md lg:max-w-2xl mx-auto lg:mx-0">
                <div className="bg-[#1a3a35]/50 border-2 border-[#ACC578] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[#e5eed2] text-xs sm:text-sm md:text-base break-all text-center sm:text-left flex-1">
                    {contractAddress}
                  </p>

                  {/* Copy Button */}
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#a9c577] rounded-md translate-x-1 translate-y-1 -z-10"
                    ></div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopy}
                      aria-label={copied ? "Copied to clipboard" : "Copy contract address"}
                      className="relative bg-[#6b8d26] hover:bg-[#7ca933] text-[#e5eed2] px-4 py-2 rounded-md text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                    >
                      {copied ? (
                        <>
                          <span className="font-semibold">COPIED</span>
                          <Check size={18} />
                        </>
                      ) : (
                        <>
                          <span className="font-semibold">COPY</span>
                          <Copy size={18} />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Button - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
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
            </div>
          </motion.div>

          {/* Image Section - Last on mobile, First on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg lg:order-1"
          >
            <div className="relative">
              {/* Circular border with image */}
              <div className="relative rounded-full overflow-hidden">
                <img 
                  src="/nomadnomics.png" 
                  alt="Nomad Pepe" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}