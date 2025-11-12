"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TappedInCollab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="tapped-in-academy"
      ref={ref}
      className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#1a1f1a" }}
    >
      {/* Different background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Compact Header with Side Badge */}
        <motion.div variants={slideVariants} className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚨</span>
                <span className="text-red-400 font-normal text-sm uppercase tracking-wider bg-red-500/10 px-4 py-1.5 rounded-md border border-red-500/20">
                  Exclusive Partnership
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl lucky text-white leading-tight">
                Nomad <span className="text-green-400">×</span> Tapped In
              </h2>
              <p className="text-xl text-gray-400 mt-3">
                Level up your trading game
              </p>
            </div>

            {/* <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-center transform lg:rotate-3 shadow-2xl">
                <p className="text-white text-sm font-medium mb-1">Hold to unlock</p>
                <p className="text-6xl font-bold text-white lucky">$500</p>
                <p className="text-green-100 text-sm mt-1">in $NOMAD</p>
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Video + Offer Side by Side */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Video - Takes up 3 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border-2 border-green-500/30">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/aqDIs-GKjZM"
                  title="Tapped In Academy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Intro Text */}
        <motion.div variants={itemVariants} className="mb-12 max-w-4xl">
          <p className="text-xl text-gray-300 leading-relaxed">
            We've partnered with{" "}
            <span className="text-white font-semibold">Tapped In Academy</span>,
            one of the top trading education platforms in the game, to bring an
            exclusive offer to the Nomad community!
          </p>
        </motion.div>

        {/* Compact Benefits - 3 Column Grid */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-3xl text-white mb-8 ">What's included:</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                
                title: "Live Daily Market Streams",
                description: "Learn in real time as pros break down the charts",
              },
              {
                
                title: "TIA Trendsetter Indicator",
                description: "Spot trends and sharpen your edge",
              },
              {
                
                title: "FREE Full Trading Course",
                description: "From beginner to advanced, it's all included",
              },
              {
                
                title: "Private Community Support",
                description: "Ask questions and grow alongside other traders",
              },
              {
                
                title: "Lifetime Upgrade",
                description: "After 12 months, you own the membership for life",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-black/20 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all hover:bg-black/30"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="text-lg text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement - Full Width Bar */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-gradient-to-r from-green-900/30 via-emerald-900/20 to-green-900/30 p-8 rounded-xl border-y-2 border-green-500/30">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl text-white leading-relaxed">
                Tapped In sees the long-term vision of Nomad. They're fired up
                to help our community build{" "}
                <span className="text-green-400 font-semibold">
                  real market skills
                </span>
                , so we can all live that true Nomad lifestyle:{" "}
                <span className="text-green-400 font-semibold">
                  free, mobile, and financially independent
                </span>
                .
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA - Horizontal Layout */}
        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 p-10 rounded-2xl border-2 border-green-500/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-300 mb-2">
                  Ready to claim your{" "}
                  <span className="text-green-400 ">50% discount</span>?
                </p>
                <p className="text-3xl text-white ">
                  Let's grow together{" "}
                  <span className="text-green-400 lucky">
                    in life and on the charts
                  </span>
                </p>
              </div>

              <div className="flex-shrink-0">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white  px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Coming after launch
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
