'use client';
import { motion } from 'framer-motion';
import { Send, Instagram, Twitter, Music2 } from 'lucide-react';

export default function SocialIcons() {
  const icons = [
    { id: 1, icon: Send, link: '#', rotate: -20 },       // Telegram
    { id: 2, icon: Instagram, link: '#', rotate: -7 },   // Instagram
    { id: 3, icon: Twitter, link: '#', rotate: 7 },      // X (Twitter)
    { id: 4, icon: Music2, link: '#', rotate: 20 },      // TikTok
  ];

  return (
    <div className="flex items-center justify-center space-x-6 py-6">
      {icons.map(({ id, icon: Icon, link, rotate }) => (
        <motion.a
          key={id}
          href={link}
          whileHover={{ y: -4, scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          style={{ rotate }}
          className="relative inline-block"
        >
          {/* Shadow Layer */}
          <span className="absolute inset-0 bg-[#6B8E23] rounded-[18%] translate-x-[4px] translate-y-[4px]"></span>

          {/* Main Icon Box */}
          <span className="relative bg-[#E5EED2] border border-[#0F1C0F] rounded-[18%] p-3 flex items-center justify-center w-[60px] h-[60px]">
            <Icon className="text-[#0F1C0F]" size={28} strokeWidth={2.2} />
          </span>
        </motion.a>
      ))}
    </div>
  );
}
