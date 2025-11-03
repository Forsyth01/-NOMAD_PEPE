'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

export default function ParallaxSection() {
  const parallaxRef = useRef();
  const layersRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    layersRef.current.forEach((layer, index) => {
      const depth = 1 - (index * 0.2);
      const moveY = index % 2 === 0 ? 100 : -100;

      gsap.to(layer, {
        y: moveY,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Floating coins animation
    gsap.to(".floating-coin", {
      y: -20,
      rotation: 360,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2
    });
  }, []);

  const parallaxLayers = [
    { depth: 0.2, content: "🌍", size: "text-4xl" },
    { depth: 0.4, content: "✈️", size: "text-3xl" },
    { depth: 0.6, content: "💰", size: "text-5xl" },
    { depth: 0.8, content: "🐸", size: "text-6xl" },
  ];

  return (
    <section ref={parallaxRef} className="min-h-screen relative overflow-hidden bg-gradient-to-b from-green-900 to-black">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-green-400 meme-text">
            THE JOURNEY BEGINS
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto meme-text">
            Join Nomad Pepe as he travels through the crypto space, 
            collecting memes and building the most based community!
          </p>
        </motion.div>

        {/* Parallax Layers */}
        {parallaxLayers.map((layer, index) => (
          <div
            key={index}
            ref={el => layersRef.current[index] = el}
            className={`absolute floating-coin ${layer.size} text-green-400 opacity-30`}
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
          >
            {layer.content}
          </div>
        ))}

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative z-20">
          {[
            {
              title: "🌐 Global Community",
              description: "Join thousands of Pepe enthusiasts worldwide in our epic journey"
            },
            {
              title: "🚀 Moon Mission",
              description: "We're not just another meme coin. We're going to the moon!"
            },
            {
              title: "🎮 Play to Earn",
              description: "Earn $NOMADPEPE while playing our upcoming travel adventure game"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#00ff00",
                boxShadow: "0 0 30px rgba(0, 255, 0, 0.3)"
              }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-4 meme-text">
                {card.title}
              </h3>
              <p className="text-gray-300 meme-text">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}