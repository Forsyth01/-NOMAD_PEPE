'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { PieChart, DollarSign, Users, Lock } from 'lucide-react';

export default function Tokenomics() {
  const tokenomicsRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tokenomicsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".tokenomics-item",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 }
    );

    // Animate chart segments
    gsap.fromTo(".chart-segment",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const tokenomicsData = [
    { label: "Liquidity", percentage: 60, color: "#00ff00", icon: PieChart },
    { label: "Marketing", percentage: 20, color: "#00cc00", icon: DollarSign },
    { label: "Team", percentage: 10, color: "#008800", icon: Users },
    { label: "Airdrops", percentage: 10, color: "#006600", icon: Lock }
  ];

  // Calculate pie chart segments
  const calculateSegments = () => {
    let currentAngle = 0;
    const radius = 120;
    const center = 128;

    return tokenomicsData.map((item, index) => {
      const angle = (item.percentage / 100) * 360;
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      const x1 = center + radius * Math.cos(currentAngle * Math.PI / 180);
      const y1 = center + radius * Math.sin(currentAngle * Math.PI / 180);
      
      const x2 = center + radius * Math.cos((currentAngle + angle) * Math.PI / 180);
      const y2 = center + radius * Math.sin((currentAngle + angle) * Math.PI / 180);

      const pathData = [
        `M ${center} ${center}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');

      currentAngle += angle;
      
      return {
        ...item,
        pathData,
        index
      };
    });
  };

  const segments = calculateSegments();

  return (
    <section ref={tokenomicsRef} className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-green-400 meme-text">
            TOKENOMICS
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto meme-text">
            Carefully designed for sustainable growth and community rewards
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tokenomics Chart */}
          <motion.div
            ref={chartRef}
            className="relative w-64 h-64 mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <svg width="256" height="256" viewBox="0 0 256 256" className="w-full h-full">
              {segments.map((segment) => (
                <motion.path
                  key={segment.label}
                  d={segment.pathData}
                  fill={segment.color}
                  className="chart-segment"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: segment.index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    filter: "brightness(1.2)",
                    transition: { duration: 0.2 }
                  }}
                />
              ))}
              
              {/* Center circle */}
              <circle cx="128" cy="128" r="40" fill="#000" />
              
              {/* Center text */}
              <text 
                x="128" 
                y="128" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                className="fill-green-400 text-sm font-bold"
                style={{ fontFamily: 'Comic Neue, cursive' }}
              >
                TOKEN
              </text>
              <text 
                x="128" 
                y="145" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                className="fill-green-400 text-sm font-bold"
                style={{ fontFamily: 'Comic Neue, cursive' }}
              >
                DISTRO
              </text>
            </svg>
            
            {/* Floating animation for the entire chart */}
            <motion.div
              className="absolute inset-0"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Tokenomics Details */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="tokenomics-item flex items-center justify-between p-6 bg-gradient-to-r from-green-900/50 to-black rounded-2xl border border-green-500/30"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: "#00ff00",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="p-3 rounded-full bg-green-500/20 border border-green-500"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white meme-text">{item.label}</h3>
                      <p className="text-green-400 text-2xl font-bold">{item.percentage}%</p>
                    </div>
                  </div>
                  <motion.div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[
            { 
              title: "Total Supply", 
              value: "100,000,000", 
              desc: "$NOMADPEPE",
              icon: "🔢"
            },
            { 
              title: "Initial Market Cap", 
              value: "$500,000", 
              desc: "At Launch",
              icon: "💰"
            },
            { 
              title: "Tax", 
              value: "0%", 
              desc: "Zero Tax Forever",
              icon: "🎯"
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 bg-black/50 rounded-2xl border border-green-500/30 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#00ff00",
                boxShadow: "0 0 30px rgba(0, 255, 0, 0.2)"
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"
                initial={{ x: -100, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-3xl font-bold text-green-400 mb-2 meme-text">{item.value}</div>
              <div className="text-lg text-white mb-1 meme-text">{item.title}</div>
              <div className="text-gray-400 text-sm">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-12 p-6 bg-black/30 rounded-2xl border border-green-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-green-400 mb-4 text-center meme-text">
            💡 TOKEN DISTRIBUTION EXPLAINED
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="space-y-2">
              <p className="meme-text"><span className="text-green-400 font-bold">60% Liquidity:</span> Ensures smooth trading and price stability</p>
              <p className="meme-text"><span className="text-green-400 font-bold">20% Marketing:</span> Global awareness and community growth</p>
            </div>
            <div className="space-y-2">
              <p className="meme-text"><span className="text-green-400 font-bold">10% Team:</span> Development and maintenance</p>
              <p className="meme-text"><span className="text-green-400 font-bold">10% Airdrops:</span> Rewards for early supporters</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}