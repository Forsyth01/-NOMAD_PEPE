"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SixMonthsJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#242B24" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-green-500"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-bold">
            Six Months on the Road
          </h2>
          <p className="text-xl md:text-2xl text-green-400">
            Thailand → Dubai 🏍️
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-br from-green-900/10 via-emerald-900/5 to-transparent p-8 md:p-12 rounded-3xl border border-green-500/20 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-white ">The Epic Journey</h3>
                </div>
                
                <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
                  <p className="text-xl">
                    <span className="text-green-400 ">Our ride with nomad and Abbosi</span>, six months on the road from <span className="text-white font-medium">Thailand to Dubai</span>. 🏍️
                  </p>
                  <p className="text-lg">
                    Get ready for the <span className="text-green-400">live streams</span>, the <span className="text-white font-medium">"Do Good Deeds,"</span> and countless lives we'll cross and impact along the way. 💫
                  </p>
                </div>

                {/* Stats/Features */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-green-900/10 p-4 rounded-xl border border-green-500/20">
                    <div className="text-3xl font-bold text-green-400 mb-1">6</div>
                    <div className="text-sm text-gray-400">Months Journey</div>
                  </div>
                  <div className="bg-green-900/10 p-4 rounded-xl border border-green-500/20">
                    <div className="text-3xl font-bold text-green-400 mb-1">∞</div>
                    <div className="text-sm text-gray-400">Lives Impacted</div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 rounded-full border border-green-500/30">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-green-400 font-medium text-lg">Journey in Progress</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Instagram Embed */}
              <div className="relative">
                <div className="relative bg-black/20 rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl">
                  <div className="aspect-[9/16] max-h-[650px]">
                    <iframe
                      src="https://www.instagram.com/reel/DQ4QegXkvp0/embed"
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allow="encrypted-media"
                      title="Mr. Abbosi Journey Video"
                    ></iframe>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-2xl -z-10 opacity-75"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-br from-green-900/20 to-emerald-900/10 px-10 py-6 rounded-2xl border border-green-500/20 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Follow along as we redefine what it means to
            </p>
            <p className="text-3xl md:text-4xl text-green-400 font-bold">
              Travel with Purpose
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}