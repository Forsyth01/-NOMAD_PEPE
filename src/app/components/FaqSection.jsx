'use client';
import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqs = [
  { id: 1, question: 'WHAT BLOCKCHAIN IS $NOMAD ON?', answer: 'Nomad operates on the Solana blockchain for fast and low-cost transactions.' },
  { id: 2, question: "WHAT'S THE TOKEN CONTRACT ADDRESS?", answer: 'The official contract address will be released on launch.' },
  { id: 3, question: 'WILL THERE BE AIRDROPS?', answer: 'Yes! Airdrops will reward early supporters and active community members.' },
  { id: 4, question: 'WHAT ARE THE OFFICIAL PROJECT LINKS?', answer: 'You can find all links on our verified channels and website.' },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const faqItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
    id='why $nomad'
    ref={ref} className="flex flex-col items-center py-20 pb-40 lg:pb-20 px-8 bg-[#0F1C0F] text-[#0F1C0F]  ">
      {/* Header */}
      <motion.h2 
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="lucky text-5xl md:text-5xl mb-10 text-[#F1F5D8] font-['Luckiest_Guy'] text-center drop-shadow-[3px_3px_0px_#0F1C0F]"
      >
        FREQUENTLY <br className='lg:hidden'/> ASKED <br /> QUESTIONS
      </motion.h2>

      {/* FAQ Card with Shadow */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative max-w-3xl w-full"
      >
        {/* Shadow Layer */}
        <div className="absolute inset-0 bg-[#6B8d26] rounded-md translate-x-[6px] translate-y-[6px]"></div>

        {/* Main FAQ Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative bg-[#B1BE97] rounded-md border border-[#0F1C0F] p-6 md:p-8 space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id} 
              custom={index}
              variants={faqItemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="border-b-2  border-[#273628]/50 pb-3"
            >
              <motion.button
                onClick={() => toggle(faq.id)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="w-full flex items-center justify-between text-left  text-xl md:text-2xl text-[#273628] tracking-wide lucky"
              >
                {faq.question}
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shadow */}
                  <span className="absolute inset-0 bg-[#02221D] rounded-sm translate-x-[2px] translate-y-[2px]"></span>
                  {/* Icon Box */}
                  <span className="relative border border-[#0F1C0F] opacity-80 bg-[#02221D] rounded-sm p-3 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openId === faq.id ? (
                        <Minus size={16} className="text-white" />
                      ) : (
                        <Plus size={16} className="text-white" />
                      )}
                    </motion.div>
                  </span>
                </motion.span>
              </motion.button>

              {/* Answer Animation */}
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-[#0F1C0F] mt-2 font-medium leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}