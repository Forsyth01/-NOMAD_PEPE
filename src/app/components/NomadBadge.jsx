import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

export default function NomadBadge() {
  return (
    <div
      className=" relative flex flex-col items-center justify-center bg-[#E5EED2] pb-4 bg-contain"
      style={{
        backgroundImage: "url('/nomadbadge_bg.png')",
        backgroundSize: "cover", // 
        backgroundPosition: "center", 
        // backgroundRepeat: "no-repeat", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay to improve visibility */}
      <div className="absolute inset-0 bg-[#E5EED2]/40"></div>

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
            className="h-120 object-cover"
          />
        </motion.div>

        {/* Social Icons */}
        <div className="">
          <SocialIcons />
        </div>

        {/* CTA Button */}
        <div className=" flex justify-center mt-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            className=""
          >
          <img src="/buynomadbtn.png" alt="" className="h-16" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
