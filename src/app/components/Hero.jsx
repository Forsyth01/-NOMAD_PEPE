"use client";
import { useState } from "react";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <section className="">
      {/* Background Image - Optimized with Next.js Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/herobg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="z-10 items-center max-w-[1600px] m-auto"> {/* ONLY CHANGE: Added max-w-[1600px] */}
        <div className="w-full text-center">
          <div className="min-h-screen flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-0">
              {/* Left Content */}
              <div className="">
                <div className=" ">
                  {/* Logo - Made Bigger */}
                  <div className="">
                    <Image
                      src="/assets/logo.png"
                      alt="Logo"
                      width={800}
                      height={300}
                      quality={90}
                      className="rounded-full relative top-14"
                      priority
                    />
                  </div>

                  {/* Tagline - No animation delay */}
                  <div className="">
                    <p className="relative bottom-6 lucky text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] px-4 sm:px-8 lg:px-0">
                      Hop On. Explore the Chain.
                    </p>
                  </div>
                </div>

                <div className="">
                  <a href="#" className="p">
                    <img src="/buynomad.png" alt="" className="m-auto h-20" />
                  </a>
                </div>

                {/* Social Icons */}
                <div className="py-3 sm:py-4 mt-3 sm:mt-4 lg:mt-0">
                  <SocialIcons/>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative lg:absolute lg:right-0 z-50 lg:bottom-0 w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px]">
                  <Image
                    src="/assets/image1.png"
                    alt="Nomad Pepe"
                    fill
                    className="object-contain mix-blend-multiply "
                    priority
                    quality={90}
                    sizes="(max-width: 400px) 192px, (max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 500px, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}