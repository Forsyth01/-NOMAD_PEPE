"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowToBuy() {
  const steps = [
    {
      number: "/1.png",
      title: "/Download phantom wallet.png",
      description:
        "Download and install the Phantom Wallet either from the app store on your phone or as a browser extension for desktop.",
      button: "/getphantobtn.png",
    },
    {
      number: "/2.png",
      title: "/Buy some Solana.png",
      description:
        "Purchase $SOL from an exchange or bridge $SOL and send it to your Phantom wallet",
      button: null,
    },
    {
      number: "/3.png",
      title: "/Buy1.png",
      description:
        "Go to Decentralized Exchanges (DEXs): Raydium, and paste the $NOMAD contract address listed on this website to swap your SOL for NOMAD",
      button: "/buynomad.png",
    },
    {
      number: "/4.png",
      title: "/Buy2.png",
      description:
        "Go to Decentralized Exchanges (DEXs): Raydium, and paste the $NOMAD contract address listed on this website to swap your SOL for NOMAD",
      button: null,
    },
  ];

  return (
    <section
      className="min-h-screen bg-[#4f7a36] relative overflow-hidden px-4 pb-10 md:px-6"
      style={{
        background: `linear-gradient(rgba(69,102,49,0.5), rgba(69,102,49,0.8)), url('/BG htb.png') center/cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="z-10 w-full max-w-[1800px] mx-auto relative">
        {/* Absolute Nomad Beach Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute z-50 left-0 bottom-0 lg:bottom-[-100px] z-0"
        >
          <div className="relative w-[300px] md:w-[400px] lg:w-[450px] xl:w-[600px] 2xl:w-[700px]  h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1100px]">
            <Image
              src="/nomad_beach.png"
              alt="Nomad Pepe"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </motion.div>

        {/* Grid Container */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-end gap-8">
          {/* Left empty space for the image */}
          <div className="lg:col-span-1" />

          {/* Right - Steps with Rectangle Background - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 w-full"
          >
            {/* Rectangle Background Image Container */}
            <div className="relative w-full">
              {/* Background Rectangle Image */}
              <Image
                src="/rec htb.png"
                alt=""
                width={800}
                height={1000}
                className="w-full h-auto"
                quality={90}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-12 lg:p-16 mt-20 flex items-center">
                <div className="space-y-4 md:space-y-6 w-full">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex gap-3 md:gap-4"
                    >
                      {/* Number badge */}
                      <div className="flex-shrink-0">
                        <div className="relative w-6 h-6 md:w-8 md:h-8">
                          <Image
                            src={step.number}
                            alt={`Step ${index + 1}`}
                            fill
                            className="object-contain"
                            quality={90}
                          />
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <h3>
                          <img src={step.title} className="object-contain" />
                        </h3>
                        <p className="my-2 text-[20px] jockey text-[#E5EED2] leading-relaxed mb-2">
                          {step.description}
                        </p>
                        {step.button && (
                          <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <img
                              src={step.button}
                              className="object-contain"
                              alt={`Button for ${index + 1}`}
                            />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tutorial Video Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="block mt-10 relative z-10"
        >
          <Image
            src="/Btn htb.png"
            alt="Tutorial Button"
            width={200}
            height={80}
            className="h-20 w-auto m-auto"
            quality={90}
          />
        </motion.a>
      </div>
    </section>
  );
}
