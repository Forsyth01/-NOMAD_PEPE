"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Twitter, MessageCircle, Send, Music2 } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["About/Tokenomics", "About $Nomad", "Why $Nomad"];
  const socialIcons = [
    { icon: Send, label: "Telegram" },
    { icon: Twitter, label: "Twitter" },
    { icon: MessageCircle, label: "Discord" },
    { icon: Music2, label: "TikTok" }
  ];

  return (
    <div className="absolute z-100 w-full">
      <motion.nav
        className={`w-full sm:w-[60%] md:w-[55%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%] m-auto my-2 sm:my-3 md:my-4 z-50 transition-all duration-500 py-2 sm:py-3 rounded-lg md:rounded-xl lg:border border-[#CCE697] ${
          scrolled ? "" : ""
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
                className="text-[#E5EED2] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium transition-colors whitespace-nowrap"
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
            <span className="absolute inset-0 bg-[#58731f] rounded-md translate-x-[3px] lg:translate-x-[4px] translate-y-[3px] lg:translate-y-[4px]"></span>
            <span className="relative bg-[#99CC33] rounded-md border border-[#0F1C0F] px-4 lg:px-5 xl:px-6 py-1.5 lg:py-2 inline-block text-sm lg:text-base">
              BUY $NOMAD
            </span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <div className="flex justify-end w-full md:hidden">
            <motion.button
              className="text-[#0F1C0F] bg-[#99CC33] hover:bg-[#8BC033] rounded-2xl p-3 mr-2 shadow-lg border-2 border-[#0F1C0F]"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X size={24} className="text-[#0F1C0F]" />
              ) : (
                <Menu size={24} className="text-[#0F1C0F]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Slide Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  damping: 30, 
                  stiffness: 300 
                }}
                className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-gradient-to-b from-[#1a3a35] to-[#0E2422] border-l border-[#99CC33]/30 shadow-2xl flex flex-col z-50 md:hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-[#99CC33]/20">
                  <div className="flex items-center justify-between">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold text-[#99CC33] lucky"
                    >
                      Menu
                    </motion.h2>
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-full bg-[#99CC33]/20 hover:bg-[#99CC33]/30 transition-colors"
                    >
                      <X size={20} className="text-[#99CC33]" />
                    </motion.button>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 p-6 space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      className="block p-4 rounded-2xl bg-[#2a4a45] hover:bg-[#99CC33]/20 border border-[#99CC33]/10 text-[#E5EED2] text-lg font-semibold transition-all duration-300 shadow-lg"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 border-t border-[#99CC33]/20"
                >
                  <h3 className="text-[#99CC33] text-sm font-semibold mb-4 text-center uppercase tracking-wider">
                    Join The Community
                  </h3>
                  <div className="flex justify-center space-x-4">
                    {socialIcons.map(({ icon: Icon, label }, index) => (
                      <motion.a
                        key={label}
                        href="#"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="p-3 bg-[#99CC33] rounded-2xl text-[#0F1C0F] shadow-lg border-2 border-[#0F1C0F] hover:bg-[#8BC033] transition-colors"
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Buy Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-6 pt-4"
                >
                  <motion.a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative block font-bold text-[#0F1C0F] text-lg uppercase tracking-wide text-center"
                  >
                    <span className="absolute inset-0 bg-[#58731f] rounded-2xl translate-x-2 translate-y-2 -z-10"></span>
                    <span className="relative bg-[#99CC33] rounded-2xl border-2 border-[#0F1C0F] px-8 py-4 inline-block text-base w-full shadow-lg hover:bg-[#8BC033] transition-colors">
                      BUY $NOMAD
                    </span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}