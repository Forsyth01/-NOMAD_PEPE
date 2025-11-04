import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function NomadBadge() {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-[#E5EED2] p-8 bg-contain bg-center"
      style={{ backgroundImage: "url('/nomadbadge_bg.png')" }}
    >
      {/* Overlay to improve visibility */}
      <div className="absolute inset-0 bg-[#E5EED2]/50"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Badge Image Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
          className="relative "
        >
          <img
            src="/nomadbadge.png"
            alt="Nomad Badge"
            className="h-[260px] sm:h-[320px] md:h-[380px] object-contain"
          />
        </motion.div>

        {/* Social Icons */}
        <div className="">
          <SocialIcons />
        </div>

        {/* CTA Button */}
        <div className="rotate-[-2deg] flex justify-center mt-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block font-bold text-[#0F1C0F] text-sm sm:text-lg uppercase tracking-wide"
          >
            {/* Shadow Layer */}
            <span className="absolute inset-0 bg-white rounded-md translate-x-[2px] translate-y-[3px] sm:translate-x-[3px] sm:translate-y-[5px] md:translate-x-[4px] md:translate-y-[7px]" />

            {/* Button Text */}
            <p className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] bg-[#99CC33] rounded-md border border-[#0F1C0F] px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 inline-block font-normal">
              BUY $NOMAD
            </p>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
