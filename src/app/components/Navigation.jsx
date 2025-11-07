'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Twitter, MessageCircle } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['About/Tokenomics', 'About $Nomad', 'Why $Nomad'];

  return (
    <div className="absolute z-100 w-full">
      <motion.nav
        className={`w-full sm:w-[60%] md:w-[55%] lg:w-[50%] xl:w-[45%] 2xl:w-[50%] m-auto my-2 sm:my-3 md:my-4 z-50 transition-all duration-500 py-2 sm:py-3 rounded-lg md:rounded-xl border border-[#CCE697] ${
          scrolled ? '' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="text-[#E5EED2]  text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium transition-colors whitespace-nowrap"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Desktop BUY $NOMAD Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative hidden md:inline-block font-bold text-[#0F1C0F] text-[14px] lg:text-[16px] xl:text-lg uppercase tracking-wide"
          >
            {/* Shadow Layer */}
            <span className="absolute inset-0 bg-[#58731f] rounded-md translate-x-[3px] lg:translate-x-[4px] translate-y-[3px] lg:translate-y-[4px]"></span>

            {/* Main Button */}
            <span className="relative bg-[#99CC33] rounded-md border border-[#0F1C0F] px-4 lg:px-5 xl:px-6 py-1.5 lg:py-2 inline-block text-sm lg:text-base">
              BUY $NOMAD
            </span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-white p-1 sm:p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </motion.button>
        </div>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-full xs:w-4/5 sm:w-3/4 bg-black/95 backdrop-blur-lg border-l border-emerald-500/20 flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-6 z-40"
            >
              <div className="flex flex-col space-y-4 sm:space-y-6 mt-16 sm:mt-20">
                {menuItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 8 }}
                    className="text-white font-semibold hover:text-emerald-400 transition-colors text-lg sm:text-xl py-2 sm:py-3"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="flex space-x-4 sm:space-x-6 justify-center">
                  {[Twitter, MessageCircle].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-400 hover:text-emerald-400 p-2"
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </motion.a>
                  ))}
                </div>

                {/* Mobile BUY $NOMAD Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative block font-bold text-[#0F1C0F] text-[14px] sm:text-lg uppercase tracking-wide text-center"
                >
                  {/* Shadow Layer */}
                  <span className="absolute inset-0 bg-[#B7D74B] rounded-md translate-x-[3px] sm:translate-x-[4px] translate-y-[3px] sm:translate-y-[4px]"></span>

                  {/* Main Button */}
                  <span className="relative bg-[#99CC33] rounded-md border border-[#0F1C0F] px-4 sm:px-6 py-2.5 sm:py-3 inline-block text-sm sm:text-base w-full max-w-xs mx-auto">
                    BUY $NOMAD
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}