"use client";

import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
      className=""
      style={{
        backgroundImage: 'url("/assets/herobg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "full",
      }}
    >
      <div className="z-10 items-center">
        <div className="w-full text-center">
          <div className="flex justify-center items-center lg:h-screen">
            {/* FLEX CONTAINER */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0">
              {/* Left Content */}
              <div className="lg:pl-12">
                <div>
                  {/* Logo */}
                  <div>
                    <Image
                      src="/assets/logo.png"
                      alt="Logo"
                      width={900}
                      height={300}
                      quality={90}
                      className="relative lg:top-12 top-16 
              h-[154.90926173863448px] w-[332.5324830616657px]
               xs:w-[250px]
               sm:w-[300px]
               md:w-[450px]
               lg:w-[750px]
               xl:w-[800.7236653215286px]
               xl:h-[350.48741138446843px]
               2xl:w-[700px]"
                      priority
                    />
                  </div>

                  {/* Tagline */}
                  <div className="mt-4 lg:mt-2">
                    <p className="relative lg:bottom-4 xl:bottom:6 lucky text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] px-4 sm:px-8 lg:px-0 rotate-[-2deg]">
                      Hop On. Explore the Chain.
                    </p>
                  </div>
                </div>

                {/* Buy Button */}
                <div className="hidden lg:block">
                  <a href="#" className="">
                    <img src="/buynomad.png" alt="" className="m-auto h-20" />
                  </a>
                </div>

                {/* Social Icons */}
                <div className="py-3 sm:py-4 mt-3 sm:mt-4 lg:mt-0 hidden lg:block">
                  <SocialIcons />
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-130 w-94 sm:w-80 md:w-[20rem] lg:w-[50rem] xl:w-[48rem] 2xl:w-[50rem] sm:h-80 md:h-[20rem] lg:h-[36rem] xl:h-[45rem] 2xl:h-[50rem] mx-auto">
                <Image
                  src="/assets/image2.png"
                  alt="Nomad Pepe"
                  fill
                  className="lg:object-contain object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
