'use client';
import { motion } from 'framer-motion';

export default function HowToBuy() {
  const steps = [
    {
      number: "1",
      title: "DOWNLOAD PHANTOM WALLET",
      description:
        "Download and install the Phantom Wallet either from the app store on your phone or as a browser extension for desktop.",
      button: "GET PHANTOM WALLET",
    },
    {
      number: "2",
      title: "BUY SOME SOLANA",
      description:
        "Purchase $SOL from an exchange or bridge $SOL and send it to your Phantom wallet",
      button: null,
    },
    {
      number: "3",
      title: "BUY $NOMAD",
      description:
        "Go to Decentralized Exchanges (DEXs): Raydium, and paste the $NOMAD contract address listed on this website to swap your SOL for NOMAD",
      button: "BUY NOMAD",
    },
    {
      number: "4",
      title: "BUY $NOMAD",
      description:
        "Go to Decentralized Exchanges (DEXs): Raydium, and paste the $NOMAD contract address listed on this website to swap your SOL for NOMAD",
      button: null,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#5a7a3a] via-[#6b8a4a] to-[#4a6a2a] relative overflow-hidden py-12 md:py-20 px-4 md:px-6">
      {/* Decorative wave pattern */}
      <div className="absolute bottom-0 left-0 w-full opacity-20">
        <svg viewBox="0 0 1440 100" className="w-full">
          <path
            d="M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z"
            fill="#3a5a2a"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left side - Pepe Character */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-auto lg:sticky lg:top-24 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 md:w-80 lg:w-96">
              <div className="relative">
                <div className="text-9xl">🐸</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Clipboard with Steps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-3xl mx-auto lg:mx-0"
          >
            <div className="relative">
              {/* Clipboard clip */}
              <div className="absolute -top-8 md:-top-12 left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative">
                  {/* Left clip */}
                  <div className="absolute left-0 w-12 h-16 md:w-16 md:h-20 bg-[#6b8a4a] rounded-b-lg border-4 border-[#5a7a3a]"></div>
                  {/* Right clip */}
                  <div className="absolute right-0 w-12 h-16 md:w-16 md:h-20 bg-[#6b8a4a] rounded-b-lg border-4 border-[#5a7a3a]"></div>
                  {/* Tab */}
                  <div className="relative mx-auto w-48 md:w-64 h-12 md:h-16 bg-[#7a9a5a] rounded-t-2xl border-4 border-[#5a7a3a] flex items-center justify-center">
                    <h2 className="text-white text-xl md:text-2xl lg:text-3xl lucky uppercase tracking-tight">
                      HOW TO BUY
                    </h2>
                  </div>
                </div>
              </div>

              {/* Clipboard body */}
              <div className="bg-[#1a2a1a] rounded-3xl pt-16 md:pt-20 pb-8 md:pb-12 px-6 md:px-10 lg:px-12 mt-8 md:mt-12 shadow-2xl">
                <div className="space-y-6 md:space-y-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex gap-4 md:gap-6"
                    >
                      {/* Number badge */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#B7D74B] rounded-2xl flex items-center justify-center border-4 border-[#2a3a2a] shadow-lg">
                          <span className="text-[#1a2a1a] text-3xl md:text-4xl lucky">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white text-xl md:text-2xl lucky mb-2 uppercase tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                          {step.description}
                        </p>
                        {step.button && (
                          <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-[#99CC33] hover:bg-[#8BC033] text-[#1a2a1a] px-4 md:px-6 py-2 md:py-2.5 rounded-lg lucky text-xs md:text-sm uppercase tracking-wide transition-colors shadow-md"
                          >
                            {step.button}
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tutorial Video Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="block w-full bg-[#E5EED2] hover:bg-[#D5DEC2] text-[#3a5a2a] text-center py-5 md:py-6 rounded-2xl lucky text-xl md:text-2xl lg:text-3xl uppercase tracking-tight mt-8 md:mt-12 transition-colors shadow-xl"
            >
              WATCH TUTORIAL VIDEO ON HOW TO BUY
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
