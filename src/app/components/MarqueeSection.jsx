'use client';
import { motion } from 'framer-motion';

export default function Marquee() {
  const marqueeItems = [
    "BUY $NOMAD",
    "HOP ON. EXPLORE THE CHAIN.",
    "JOIN THE MOVEMENT",
    "BUY $NOMAD",
    "HOP ON. EXPLORE THE CHAIN.",
    "JOIN THE MOVEMENT"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#ACC578] py-3">
      {/* Hand-drawn border elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top border - hand-drawn style */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0F1C0F] transform scale-x-105">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Hand-drawn effect - uneven edges */}
            <div className="absolute -top-1 left-0 w-4 h-1 bg-[#0F1C0F] rounded-full"></div>
            <div className="absolute -top-1 left-10 w-3 h-1 bg-[#0F1C0F] rounded-full"></div>
            <div className="absolute -top-1 left-20 w-5 h-1 bg-[#0F1C0F] rounded-full"></div>
            <div className="absolute -top-1 right-10 w-4 h-1 bg-[#0F1C0F] rounded-full"></div>
            <div className="absolute -top-1 right-0 w-3 h-1 bg-[#0F1C0F] rounded-full"></div>
          </div>
        </div>
        
        {/* Bottom border - hand-drawn style */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F1C0F] transform scale-x-105">
          <div className="absolute bottom-0 left-0 w-full h-full">
            {/* Hand-drawn effect - uneven edges */}
            <div className="absolute -bottom-1 left-5 w-3 h-1 bg-[#0F1C0F] rounded-full"></div>
            <div className="absolute -bottom-1 left-15 w-4 h-1 bg-[#0F1C0F] rounded-full"></div>
            <div className="absolute -bottom-1 left-25 w-2 h-1 bg-[#0F1C0F] rounded-full"></div>
            <div className="absolute -bottom-1 right-5 w-5 h-1 bg-[#0F1C0F] rounded-full"></div>
            <div className="absolute -bottom-1 right-20 w-3 h-1 bg-[#0F1C0F] rounded-full"></div>
          </div>
        </div>

        {/* Corner decorations for hand-drawn look */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#0F1C0F] rounded-tl-sm"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#0F1C0F] rounded-tr-sm"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#0F1C0F] rounded-bl-sm"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#0F1C0F] rounded-br-sm"></div>
      </div>

      {/* Main Marquee */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-[#0F1C0F] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider">
              {item}
            </span>
            {index < marqueeItems.length - 1 && (
              <div className="w-3 h-3 bg-[#0F1C0F] rounded-full mx-8"></div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#ACC578] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#ACC578] to-transparent z-10"></div>
    </div> 
  ); 
}