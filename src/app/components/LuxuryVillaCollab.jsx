"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LuxuryVillaCollab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="luxury-villa"
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#1a1f1a" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="absolute top-1/4 -left-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-10 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border border-green-500/30 bg-green-500/10">
            <span className="text-green-400 text-sm uppercase tracking-wider font-normal">
              VIP Access
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-normal">
            Luxury Villa <span className="text-green-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-normal">
            Hold $NOMAD and unlock exclusive access to luxury travel, events, and a global community
          </p>
        </motion.div>

        {/* Hero Video Section - Full Width */}
        <motion.div variants={scaleVariants} className="relative mb-12">
          <div className="relative rounded-3xl overflow-hidden border-2 border-green-500/20 shadow-2xl">
            <div className="aspect-[21/9] bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/y0BH7-8g-nM"
                title="Luxury Villa Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards Below Video */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-20">
          <div className="">
            <div className="text-3xl font-bold">1 Year</div>
            <div className="text-sm opacity-90">Villa Access</div>
          </div>
          <div className="">
            <div className="text-3xl font-bold text-green-400">Free</div>
            <div className="text-sm text-gray-300">For Holders</div>
          </div>
          <div className="">
            <div className="text-3xl font-bold text-green-400">100+</div>
            <div className="text-sm text-gray-300">Influencers</div>
          </div>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 mb-20 mt-16">
          {/* Large Feature Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-3xl p-10 border-2 border-green-500/20 h-full flex flex-col justify-between hover:border-green-500/40 transition-all group">
              <div>
                <h3 className="text-3xl text-white mb-4 font-normal">Your Luxury Villa Awaits</h3>
                <p className="text-gray-300 leading-relaxed text-lg font-normal mb-6">
                  We secured a luxury villa for an entire year. Stay for FREE when you hold $NOMAD. Wake up to ocean views, host your friends, or work remotely in paradise.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">Ocean Views</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">Private Pool</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">4 Bedrooms</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">Electronic Gating</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">Private Community</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 font-normal">Premium Location</span>
              </div>
            </div>
          </motion.div>

          {/* Stacked Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div className="bg-black/40 rounded-2xl p-8 border border-green-500/10 hover:border-green-500/30 transition-all backdrop-blur group">
              <h3 className="text-xl text-white mb-3 font-normal">Exclusive Events</h3>
              <p className="text-gray-300 font-normal">
                Yacht parties, epic club nights, and crypto travel events with influencers.
              </p>
            </div>
            
            <div className="bg-black/40 rounded-2xl p-8 border border-green-500/10 hover:border-green-500/30 transition-all backdrop-blur group">
              <h3 className="text-xl text-white mb-3 font-normal">Global Community</h3>
              <p className="text-gray-300 font-normal">
                Connect with hundreds of travel & crypto influencers worldwide.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Benefits Ribbon */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-black/40 rounded-3xl p-8 border border-green-500/10 backdrop-blur">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Yacht Parties", desc: "Luxury yacht events" },
                { title: "Club Nights", desc: "VIP nightlife access" },
                { title: "Travel Events", desc: "Global crypto meetups" },
                { title: "VIP Access", desc: "Exclusive experiences" },
              ].map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <h4 className="text-white text-lg mb-2 font-normal">{item.title}</h4>
                  <p className="text-gray-400 text-sm font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        
      </motion.div>
    </section>
  );
}