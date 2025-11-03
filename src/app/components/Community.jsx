'use client';
import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Users, Zap } from 'lucide-react';

export default function Community() {
  const socialLinks = [
    {
      platform: "Twitter",
      icon: Twitter,
      handle: "@NomadPepe",
      followers: "50K+",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
      link: "#"
    },
    {
      platform: "Telegram",
      icon: MessageCircle,
      handle: "t.me/NomadPepe",
      members: "25K+",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/20",
      link: "#"
    },
    {
      platform: "Discord",
      icon: Users,
      handle: "Nomad Pepe",
      members: "10K+",
      color: "hover:text-purple-400",
      bgColor: "hover:bg-purple-500/20",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-green-400 meme-text">
            JOIN THE JOURNEY
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto meme-text">
            Become part of the most based traveling frog community in crypto!
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.platform}
                href={social.link}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 text-center transition-all duration-300 ${social.bgColor}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  borderColor: "#00ff00"
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4 border border-green-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className={`w-8 h-8 text-green-400 ${social.color}`} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 meme-text">{social.platform}</h3>
                <p className="text-gray-300 mb-2">{social.handle}</p>
                <p className="text-green-400 font-bold text-lg">
                  {social.followers || social.members}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-green-900/50 to-black rounded-3xl p-12 border-2 border-green-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Zap className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-white mb-4 meme-text">
            READY TO TRAVEL WITH PEPE?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto meme-text">
            Don't miss out on the journey of a lifetime. Join our community and let's moon together!
          </p>
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-black px-12 py-4 rounded-full font-bold text-2xl meme-text shadow-2xl"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 50px #00ff00" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 BUY $NOMADPEPE NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}