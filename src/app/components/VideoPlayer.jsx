"use client";
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef(null);

  // Extract video ID from YouTube URL
  const youtubeUrl = "https://youtube.com/shorts/bYSO5CLcLHE?si=lwp16dA21gbY6xml";
  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(youtubeUrl);
  
  // High quality embed with native YouTube controls
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=1&hl=en&enablejsapi=1&widgetid=1&quality=high`;

  const toggleFullscreen = () => {
    const element = videoContainerRef.current;

    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(); // Safari
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); // IE/Edge
      }
      setIsFullscreen(true);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
      }
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen changes
  useState(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

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
            {/* Video Container - Pure YouTube Embed */}
            <div
              ref={videoContainerRef}
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-green-500/20"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* YouTube Embed with Native Controls */}
              <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
                <iframe
                  src={embedUrl}
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title="How to Buy $NOMAD"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

              {/* Simple Custom Overlay for Fullscreen Only */}
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-green-400 transition-colors p-2 bg-black/50 rounded-lg backdrop-blur-sm"
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullscreen ? (
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
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
                  )}
                </button>
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