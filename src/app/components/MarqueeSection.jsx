'use client';
import { motion } from 'framer-motion';

export default function NomadMarquee() {
  return (
    <div className="bg-[#70903c]">
    <div className="relative ">
      <img
        src="/marqeebg.png"
        alt="Nomad"
        className="h-20 w-full block " 
      />

      {/* MARQUEE — perfectly overlaid */}
      <div className="absolute top-2 inset-0 flex items-center overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -2400] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {Array(100).fill("$NOMAD").map((_, i) => (
            <span
              key={i}
              className="text-3xl font-black text-[#1a2a1a] mx-5 drop-shadow-2xl"
            >
              $NOMAD
            </span>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
}