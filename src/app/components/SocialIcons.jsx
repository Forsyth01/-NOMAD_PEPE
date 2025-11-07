'use client';
import { motion } from 'framer-motion';

export default function SocialIcons() {
  const icons = [
    { id: 1, image: '/social1.png', link: '#', rotate: -20 },       // Telegram
    { id: 2, image: '/social2.png', link: '#', rotate: -7 },        // Instagram
    { id: 3, image: '/social3.png', link: '#', rotate: 7 },         // X (Twitter)
    { id: 4, image: '/social4.png', link: '#', rotate: 20 },        // TikTok
  ];

  return (
    <div className="flex items-center justify-center space-x-3">
      {icons.map(({ id, image, link, rotate }) => (
        <motion.a
          key={id}
          href={link}
          whileHover={{ y: -4, scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          style={{ rotate }}
          className="relative inline-block"
        >
          {/* Shadow Layer */}
          {/* <span className="absolute inset-0 bg-[#6B8E23] rounded-[18%] translate-x-[4px] translate-y-[4px]"></span> */}

          {/* Main Icon Box with Image */}
          <span className="">
            <img 
              src={image} 
              alt={`Social icon ${id}`}
              className="w-full h-12 object-contain"
            />
          </span>
        </motion.a>
      ))}
    </div>
  );
}