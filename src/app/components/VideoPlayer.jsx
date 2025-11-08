"use client";
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="py-16 md:py-24 px-4 md:px-8"
      style={{ backgroundColor: "#242B24" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-green-500"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-400 text-sm md:text-base uppercase tracking-wider">
              Tutorial
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white lucky mb-3">
            How to Buy $NOMAD
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Follow this step-by-step guide to get your $NOMAD tokens and join
            the adventure
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative background elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-green-600/10 rounded-3xl blur-2xl"></div>

          <div className="relative">
            {/* Video Container */}
            <div
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-green-500/20"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(!isPlaying)}
            >
              <video
                ref={videoRef}
                className="w-full aspect-video object-contain bg-black"
                onClick={handlePlayPause}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={false}
                poster="/howtobuy1.png" // <-- add this line
              >
                <source src="/Nomad - Final.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Overlay */}
              {!isPlaying && (
                <div
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="relative group">
                    {/* Animated rings */}
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 bg-green-500/10 rounded-full scale-110 animate-pulse"></div>

                    {/* Play button */}
                    <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-5 md:p-7 shadow-2xl group-hover:scale-110 group-active:scale-95 transition-transform duration-200">
                      <svg
                        className="w-8 h-8 md:w-12 md:h-12 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Custom Controls Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
                  showControls || !isPlaying
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="bg-gradient-to-t from-black via-black/95 to-transparent p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    {/* Play/Pause */}
                    <button
                      onClick={handlePlayPause}
                      className="group relative"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md group-hover:bg-green-500/30 transition-colors"></div>
                      <div className="relative text-white hover:text-green-400 transition-colors p-2">
                        {isPlaying ? (
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Progress Bar Placeholder */}
                    <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-0"></div>
                    </div>

                    {/* Volume */}
                    <button
                      className="text-white hover:text-green-400 transition-colors p-2 hidden sm:block"
                      aria-label="Volume"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    </button>

                    {/* Settings */}
                    <button
                      className="text-white hover:text-green-400 transition-colors p-2 hidden md:block"
                      aria-label="Settings"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>

                    {/* Fullscreen */}
                    <button
                      onClick={() => videoRef.current?.requestFullscreen()}
                      className="text-white hover:text-green-400 transition-colors p-2"
                      aria-label="Fullscreen"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info Grid */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {/* Meme Level */}
              <div className="bg-green-900/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Meme Level</p>
                    <p className="text-white font-normal">
                      Maximum Degeneration
                    </p>
                  </div>
                </div>
              </div>

              {/* Adventure Type */}
              <div className="bg-green-900/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Adventure Type</p>
                    <p className="text-white font-normal">
                      Cross-Chain Journey
                    </p>
                  </div>
                </div>
              </div>

              {/* Pepe Certified */}
              <div className="bg-green-900/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Certification</p>
                    <p className="text-white font-normal">Pepe Approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
