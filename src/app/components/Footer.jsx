'use client';
import { motion } from 'framer-motion';
import { Coins, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-green-900 border-t border-green-500/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <Coins className="w-8 h-8 text-green-400" />
            <span className="meme-text text-2xl text-green-400">NOMAD PEPE</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="flex items-center space-x-2 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            </motion.div>
            <span>by the NOMAD PEPE community © {currentYear}</span>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            className="text-center md:text-right text-sm text-gray-500 mt-6 md:mt-0 max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            $NOMADPEPE is a meme coin with no intrinsic value. Invest at your own risk.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}