'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ExpeditionSection() {
  return (
    <section
      className="relative min-h-screen bg-[#5B7A3D] overflow-hidden flex items-center justify-center px-6 md:px-12 py-16"
      style={{
        backgroundImage: "url('/nomad_expedition_frame_bg.png')", // optional background pattern
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* === Left Text Section === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-xl"
        >
          {/* Headline */}
          <h2 className="text-[#F5F8E9] lucky text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight drop-shadow-[2px_2px_0px_#0f1c0f]">
            CASH THE HOP! <br /> START THE EXPEDITION!
          </h2>

          {/* Subtext */}
          <p className="mt-5 text-[#F5F8E9] text-lg leading-relaxed lucky">
            Join the most epic tap-to-earn adventure in the crypto space. 
            <span className="font-extrabold">$NOMAD</span> is your ticket to the 
            real world of decentralized fun.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-4 text-[#F5F8E9] lucky text-lg">
            <li className="flex items-start gap-2">
              <span className="text-[#E5EED2] text-xl">■</span>
              Be part of a rapidly growing community of <b>$NOMAD</b> explorers (currently 500k+).
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E5EED2] text-xl">■</span>
              Unlock ancient treasures with daily quests & traveler challenges.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E5EED2] text-xl">■</span>
              Fuel your journey and claim massive weekly reward drops!
            </li>
          </ul>

          {/* CTA Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-block bg-[#B7D74B] border border-[#0F1C0F] text-[#0F1C0F] lucky text-xl uppercase px-10 py-4 rounded-lg shadow-[4px_4px_0px_#0F1C0F]"
          >
            Launch the Nomad Tap
          </motion.a>
        </motion.div>

        {/* === Right Image Section === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-[300px] sm:w-[360px] md:w-[400px] lg:w-[450px]">
            <Image
              src="/nomad_expedition_frame.png" // Replace with your gold frame image
              alt="Nomad Expedition"
              width={450}
              height={550}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Optional overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3f5a2d]/30"></div>
    </section>
  );
}
