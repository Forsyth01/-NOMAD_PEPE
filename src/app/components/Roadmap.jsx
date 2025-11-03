'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Circle, Rocket, Users, Gem, Trophy } from 'lucide-react';

export default function Roadmap() {
  const roadmapRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".roadmap-item",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: roadmapRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      status: "completed",
      icon: Rocket,
      items: [
        "Token Launch on Uniswap",
        "Community Building",
        "Website & Social Media",
        "1000 Holders Target"
      ]
    },
    {
      phase: "Phase 2",
      title: "Growth & Expansion",
      status: "current",
      icon: Users,
      items: [
        "CEX Listings",
        "Marketing Campaign",
        "NFT Collection",
        "10,000 Holders Target"
      ]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Development",
      status: "upcoming",
      icon: Gem,
      items: [
        "Play-to-Earn Game",
        "Merchandise Store",
        "Community DAO",
        "100,000 Holders Target"
      ]
    },
    {
      phase: "Phase 4",
      title: "Moon & Beyond",
      status: "upcoming",
      icon: Trophy,
      items: [
        "Major Exchange Listings",
        "Global Partnerships",
        "Charity Initiatives",
        "1,000,000 Holders Target"
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case "current":
        return <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Circle className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        </motion.div>;
      case "upcoming":
        return <Circle className="w-6 h-6 text-gray-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section ref={roadmapRef} className="py-20 bg-gradient-to-b from-black to-green-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-green-400 meme-text">
            ROADMAP
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto meme-text">
            Our journey to the moon and beyond! Join us every step of the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-500 h-full hidden md:block"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  className={`roadmap-item relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <motion.div
                      className="bg-black/80 backdrop-blur-sm border-2 border-green-500 rounded-2xl p-8 shadow-2xl"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 40px rgba(0, 255, 0, 0.3)"
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-8 h-8 text-green-400" />
                          <span className="text-2xl font-bold text-green-400 meme-text">
                            {phase.phase}
                          </span>
                        </div>
                        {getStatusIcon(phase.status)}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 meme-text">
                        {phase.title}
                      </h3>
                      
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-center space-x-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="meme-text">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-black hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}