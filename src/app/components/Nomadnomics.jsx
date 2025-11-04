'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Nomadnomics() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "MADHPJRN6BP8T7BR5Y7NUSUNWWA2JU8BYPOBZPRHBHV";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen bg-[#0E2422] relative overflow-hidden py-12 md:py-20 px-4 md:px-6">
      {/* Decorative clouds */}
      <div className="absolute top-0 right-0 w-48 md:w-64 lg:w-80">
       <img src="/cloud.png" alt="" className='h-40' />
      </div>

      {/* Decorative element bottom right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <svg width="120" height="120" viewBox="0 0 120 120" className="w-20 md:w-32">
          <path
            d="M60,10 L65,40 L80,35 L70,60 L90,65 L70,80 L75,100"
            stroke="#8B9D3A"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="50" cy="30" r="3" fill="#A4B84E" />
          <circle cx="85" cy="50" r="4" fill="#8B9D3A" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl lucky">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left side - Pepe Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg"
          >
          
            
            {/* Circular frame */}
            <div className="relative">              
              {/* Placeholder for Pepe image */}
              <div className="relative rounded-full overflow-hidden">
               <img src="/nomadnomics.png" alt="" className="" />
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            {/* Title */}
            <h2 className="lucky text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E5EED2] mb-8 md:mb-12 ">
              $NOMADNOMICS
            </h2>

            {/* Total Supply */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-[#A4B84E] text-xl md:text-2xl mb-2 uppercase tracking-wide">
                TOTAL SUPPLY
              </h3>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl tracking-tight">
                1,000,000,000,000
              </p>
            </div>

            {/* Buy/Sell Tax */}
            <div className="mb-8 md:mb-12 flex items-center gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-[#99CC33] rounded-full flex-shrink-0"></div>
              <p className="text-white text-xl md:text-2xl lg:text-3xl ">
                BUY/SELL TAX: <span className="text-[#99CC33]">0%</span>
              </p>
            </div>

            {/* Contract Address */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-white text-xl md:text-2xl mb-4 uppercase tracking-wide">
                CONTRACT ADDRESS
              </h3>
              <div className="bg-[#1a3a35]/50 border-2 border-[#99CC33]/30 rounded-2xl p-4 md:p-5 flex items-center justify-between gap-4">
                <p className="text-white lucky text-xs sm:text-sm md:text-base font-mono break-all flex-1">
                  {contractAddress}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="bg-[#99CC33] hover:bg-[#8BC033] text-[#0d2626] px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold text-sm md:text-base uppercase tracking-wide flex items-center gap-2 flex-shrink-0 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={18} />
                      <span className="hidden sm:inline">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      <span className="hidden sm:inline">COPY</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Buy Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#99CC33] hover:bg-[#8BC033] text-[#0d2626] px-10 md:px-16 py-4 md:py-5 rounded-2xl text-2xl md:text-3xl uppercase tracking-wide transition-colors shadow-lg shadow-[#99CC33]/20"
            >
              BUY $NOMAD
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}