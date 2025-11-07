'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { id: 1, question: 'WHAT BLOCKCHAIN IS $NOMAD ON?', answer: 'Nomad operates on the Solana blockchain for fast and low-cost transactions.' },
  { id: 2, question: "WHAT’S THE TOKEN CONTRACT ADDRESS?", answer: 'The official contract address will be released on launch.' },
  { id: 3, question: 'WILL THERE BE AIRDROPS?', answer: 'Yes! Airdrops will reward early supporters and active community members.' },
  { id: 4, question: 'WHAT ARE THE OFFICIAL PROJECT LINKS?', answer: 'You can find all links on our verified channels and website.' },
  { id: 5, question: 'WHAT ARE THE OFFICIAL PROJECT LINKS?', answer: 'You can find all links on our verified channels and website.' },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="flex flex-col items-center py-20 px-4 bg-[#0F1C0F] text-[#0F1C0F]">
      {/* Header */}
      <h2 className="lucky text-4xl md:text-5xl mb-10 text-[#F1F5D8] font-['Luckiest_Guy'] text-center drop-shadow-[3px_3px_0px_#0F1C0F]">
        FREQUENTLY ASKED <br /> QUESTIONS
      </h2>

      {/* FAQ Card with Shadow */}
      <div className="relative max-w-3xl w-full">
        {/* Shadow Layer */}
        <div className="absolute inset-0 bg-[#6B8d26] rounded-md translate-x-[6px] translate-y-[6px]"></div>

        {/* Main FAQ Container */}
        <div className="relative bg-[#B1BE97] rounded-md border border-[#0F1C0F] p-6 md:p-8 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b-2  border-[#273628]/50 pb-3">
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between text-left  text-lg md:text-2xl text-[#273628] tracking-wide lucky"
              >
                {faq.question}
                <span className="relative inline-block">
                  {/* Shadow */}
                  <span className="absolute inset-0 bg-[#02221D] rounded-sm translate-x-[2px] translate-y-[2px]"></span>
                  {/* Icon Box */}
                  <span className="relative border border-[#0F1C0F] opacity-80 bg-[#02221D] rounded-sm p-3 flex items-center justify-center">
                    {openId === faq.id ? (
                      <Minus size={16} className="text-white" />
                    ) : (
                      <Plus size={16} className="text-white" />
                    )}
                  </span>
                </span>
              </button>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
