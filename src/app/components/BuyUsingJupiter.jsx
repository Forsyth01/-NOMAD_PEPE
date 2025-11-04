'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Settings, RefreshCw } from 'lucide-react';

export default function JupiterSwap() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('0.00');
  const [fromToken, setFromToken] = useState('SOL');
  const [toToken, setToToken] = useState('NOMAD');

  return (
    <div className="min-h-screen bg-[#242B24] flex items-center justify-center p-20">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="lucky text-center mb-12">
          <h1 className="text-4xl md:text-5xl  text-[#E5EED2] mb-2 tracking-tight">
            OR BUY USING
          </h1>
          <h2 className="text-4xl md:text-5xl text-[#E5EED2] mb-4 tracking-tight">
            JUPITER
          </h2>
          <p className="text-[#E5EED2] text-base md:text-lg flex items-center justify-center gap-2">
            Simply Swap $SOL to $NOMAD on Jupiter below 🐸
          </p>
        </div>

        {/* Swap Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          {/* Jupiter Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 rounded-full">
                    <img src="/jupiter.png" alt="" className="" />
                </div>
              </div>
              <span className="text-white font-bold text-lg">JUPITER</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-white transition-colors">
                <RefreshCw size={20} />
              </button>
              <button className="flex items-center gap-2 bg-[#3a4a3a] px-3 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors">
                <Settings size={16} />
                <span className="text-sm">0.5%</span>
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3a4a3a] px-4 py-1.5 rounded-full text-white text-sm font-medium hover:bg-[#4a5a4a] transition-colors"
              >
                Connect Wallet
              </motion.button>
            </div>
          </div>

          {/* From Input */}
          <div className="bg-[#383C38] rounded-2xl p-4 mb-3">
            <div className="flex items-center justify-between mb-2">
              <button className="flex items-center gap-2 bg-[#595C59] hover:bg-[#5a6a5a] px-3 py-2 rounded-xl transition-colors">
                <div className="w- h-">
                     <div className="w-5 h-5 ">
                    <img src="/sol.png" alt="" className="" />
                </div>
                </div>
                <span className="text-white font-medium">{fromToken}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              <input
                type="text"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder="0.00"
                className="bg-[#383C38] text-right text-3xl text-white font-medium outline-none w-full"
              />
            </div>
          </div>

          {/* Swap Arrow */}
          <div className="flex justify-center -my-1 relative z-10">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#595C59] border-4 border-[#3a4a3a] rounded-full p-2 hover:border-[#4a5a4a] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </motion.button>
          </div>

          {/* To Input */}
          <div className="bg-[#383C38] rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <button className="flex items-center gap-2 bg-[#4a5a4a] hover:bg-[#5a6a5a] px-3 py-2 rounded-xl transition-colors">
                <div className="w-6 h-6 bg-gradient-to-br from-[#9CE77D] to-[#7BC65D] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#3a4a3a] rounded-full"></div>
                </div>
                <span className="text-white font-medium">{toToken}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              <input
                type="text"
                value={toAmount}
                readOnly
                placeholder="0.00"
                className="bg-transparent text-right text-3xl text-gray-400 font-medium outline-none w-full"
              />
            </div>
          </div>

          {/* Connect Wallet Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#9FD235] hover:bg-[#9FD235] text-[#1a2b1a] text-lg py-4 rounded-full transition-colors"
          >
            <p className="">
            Connect Wallet
            </p>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}