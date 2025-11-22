"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function PresaleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const walletAddress = "8ymgmdBe8JVM7E7q5r8CsCv7zxYhKrqzRuyLTYdSjcRE";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="presale"
      ref={ref}
      className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
  background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/bg 4.png') center/cover no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 60%)",
            animationDuration: "4s",
          }}
        ></div>
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 60%)",
            animationDuration: "6s",
          }}
        ></div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header with Live Badge */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-sm  uppercase tracking-wider">Presale Live Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">$NOMAD</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join early and unlock exclusive access to the nomad lifestyle
          </p>
        </motion.div>

        {/* Hero Card with Wallet */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="relative bg-gradient-to-br from-green-500/5 via-black/40 to-emerald-500/5 rounded-3xl p-1 backdrop-blur-xl">
            <div className="bg-black/60 rounded-3xl p-8 md:p-10">
              
              {/* Stats Row */}
              {/* <div className="flex flex-wrap justify-center gap-8 mb-10 pb-8 border-b border-green-500/10">
                <div className="text-center">
                  <div className="text-green-400 text-xs mb-2 uppercase tracking-widest ">Token Price</div>
                  <div className="text-white text-3xl md:text-4xl font-bold">$0.001</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 text-xs mb-2 uppercase tracking-widest font-medium">Minimum</div>
                  <div className="text-white text-3xl md:text-4xl font-bold">0.1 SOL</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 text-xs mb-2 uppercase tracking-widest font-medium">Network</div>
                  <div className="text-white text-3xl md:text-4xl font-bold">Solana</div>
                </div>
              </div> */}

              {/* Wallet Address - Highlighted */}
              <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-2xl p-6 border-2 border-green-500/30 mb-8">
                <div className="lg:flex items-center justify-between mb-4 space-y-2 lg:space-y-0">
                  <h3 className="text-white text-lg ">Presale Wallet Address</h3>
                  <div className="flex items-center gap-2 text-xs text-green-400 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/40 w-fit">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Verified
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="bg-black/80 rounded-xl p-4 border border-green-500/20 hover:border-green-500/40 transition-all">
                    <div className="lg:flex items-center gap-3">
                      <code className="text-gray-200 text-sm md:text-base flex-1 break-all font-mono tracking-tight">
                        {walletAddress}
                      </code>
                      <button
                        onClick={copyToClipboard}
                        className="shrink-0 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 lg:py-3 py-2 rounded-lg transition-all font-medium shadow-lg hover:shadow-green-500/25 hover:scale-105 transform my-4 lg:my-0"
                      >
                        {copied ? (
                          <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Steps */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative bg-black/40 rounded-xl p-5 border border-green-500/20 hover:border-green-500/40 transition-all group">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                  <div className="pt-4">
                    <h4 className="text-white text-base mb-2 font-semibold">Copy Address</h4>
                    <p className="text-gray-400 text-sm">Click the copy button above to save the wallet address</p>
                  </div>
                </div>

                <div className="relative bg-black/40 rounded-xl p-5 border border-green-500/20 hover:border-green-500/40 transition-all group">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                  <div className="pt-4">
                    <h4 className="text-white text-base mb-2 font-semibold">Send SOL</h4>
                    <p className="text-gray-400 text-sm">Please send only from a non-custodial wallet (e.g., Phantom).
Do NOT send from centralized exchanges like Coinbase or Binance, as the transaction will not work properly</p>
                  </div>
                </div>

                <div className="relative bg-black/40 rounded-xl p-5 border border-green-500/20 hover:border-green-500/40 transition-all group">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    3
                  </div>
                  <div className="pt-4">
                    <h4 className="text-white text-base mb-2 font-semibold">Get $NOMAD</h4>
                    <p className="text-gray-400 text-sm">Receive tokens after presale ends</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        {/* <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-black/40 rounded-2xl p-6 border border-green-500/10 backdrop-blur">
            <h4 className="text-white text-lg mb-4 font-semibold flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              Early Bird Benefits
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Lowest entry price before public launch</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Priority access to luxury villa bookings</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Exclusive invites to launch events</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 rounded-2xl p-6 border border-green-500/10 backdrop-blur">
            <h4 className="text-white text-lg mb-4 font-semibold flex items-center gap-2">
              <span className="text-2xl">👥</span>
              Community Perks
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Special role in Discord community</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Direct access to founders and influencers</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Vote on future community decisions</span>
              </li>
            </ul>
          </div>
        </motion.div> */}

        {/* Warning Banner */}
        <motion.div variants={itemVariants}>
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-5 backdrop-blur">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              <div>
                <h5 className="text-yellow-500 font-semibold mb-1">Important Security Notice</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Always verify the wallet address before sending funds. Only send SOL to this address. Tokens will be distributed after the presale period ends. This is not financial advice. DYOR.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}