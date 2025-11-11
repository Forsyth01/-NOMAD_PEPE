"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function NomadJourney() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      id="nomad-journey"
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#242B24" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header with decorative line */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-green-500"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl lucky text-white mb-6">
            The Nomad Journey
          </h2>
          
          <div className="inline-flex items-center gap-2 text-green-400 text-lg md:text-xl font-normal bg-green-900/10 px-8 py-3 rounded-full border border-green-500/20 backdrop-blur-sm">
            <span className="text-white">Powered by</span>
            <span className="font-medium">Soul Labs</span>
            <span className="text-green-500">×</span>
            <span className="font-medium">Mr. Abbosi</span>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div 
          variants={itemVariants} 
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="relative bg-gradient-to-br from-green-900/10 via-emerald-900/5 to-transparent p-8 md:p-10 rounded-3xl border border-green-500/20 backdrop-blur-sm">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-50"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-md opacity-75"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/Mr. Abbosi.png"
                    alt="Mr. Abbosi"
                    fill
                    className="rounded-full object-cover border-4 border-green-500/30"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl text-white font-normal mb-2">Mr. Abbosi</h3>
                <p className="text-gray-400 mb-4">Adventure Creator & Digital Nomad</p>
                
                {/* Social Links */}
                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href="https://www.instagram.com/mrabbosi?igsh=dHloMDd0Y29xZjRm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-900/20 hover:bg-green-900/40 text-gray-300 hover:text-green-400 rounded-lg transition-all border border-green-500/10 hover:border-green-500/30"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-normal">Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@mr.abbosi?_r=1&_t=ZN-91DuVy6cDYs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-900/20 hover:bg-green-900/40 text-gray-300 hover:text-green-400 rounded-lg transition-all border border-green-500/10 hover:border-green-500/30"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <span className="text-sm font-normal">TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Journey Details */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-green-900/5 p-8 rounded-2xl border border-green-500/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-white mb-2">The Route</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We're proud to announce that <span className="text-green-400">$NOMAD by Soul Labs</span> is officially sponsoring <span className="text-white">Mr. Abbosi's</span> incredible journey from <span className="text-green-400">Thailand to Dubai</span>, a modern odyssey that captures the true essence of the Nomad spirit: <span className="text-white">freedom, movement, and purpose.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-900/5 p-8 rounded-2xl border border-green-500/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-white mb-2">The Mission</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Known for his fearless adventures and raw authenticity, Mr. Abbosi will be riding across countries on a bike we helped bring to life, purchased with a <span className="text-green-400">$1,000 pre-launch contribution</span> from $NOMAD. This marks the first step in our mission to empower explorers who live without borders.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Impact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/10 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm h-full flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl text-white mb-4">
                  More than just travel
                </h3>
                <p className="text-2xl text-green-400">
                  It's about impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-green-900/5 p-8 md:p-10 rounded-2xl border border-green-500/10 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl text-white mb-4">Live. Interactive. Community-Driven.</h4>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Throughout his trip, Mr. Abbosi will be <span className="text-green-400">live streaming daily</span> on <span className="text-white">Kick and TikTok</span>, reaching thousands of viewers who will have the power to decide in real time how $NOMAD funds are used for good. From feeding families and supporting local communities to uplifting those in need along the way, every act will be guided by the community.
                  </p>
                  <p>
                    This interactive, community-driven approach brings a whole new audience into the world of crypto and philanthropy, merging <span className="text-green-400">adventure, transparency, and purpose.</span>
                  </p>
                  <p>
                    Together, we're proving that <span className="text-white">freedom and generosity can coexist</span>, and that every mile traveled can make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="inline-block bg-gradient-to-br from-green-900/20 to-emerald-900/10 p-10 md:p-12 rounded-3xl border border-green-500/20 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl text-white mb-3">
              Join us. Watch the journey. Shape the impact.
            </p>
            <p className="text-3xl md:text-4xl text-green-400 lucky mb-6">
              Welcome to the Nomad era.
            </p>
            
            {/* Animated decorative line */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto max-w-md"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}