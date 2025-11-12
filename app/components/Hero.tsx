"use client";

import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const slideshowRef = useRef<HTMLDivElement>(null);
  
  // Array of hero images for slideshow
  const heroImages = [
    "/hero.jpg",
    "/hunza1.jpg",
    "/skardu.jpg",
    "/naran1.jpg",
    "/swat.jpg",
    "/neelum.jpg",
  ];

  useEffect(() => {
    if (!slideshowRef.current) return;

    const slides = slideshowRef.current.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentIndex = 0;

    // Set initial state - first image visible, others hidden
    gsap.set(slides, { opacity: 0, scale: 1 });
    gsap.set(slides[0], { opacity: 1, scale: 1 });

    const animateSlideshow = () => {
      const currentSlide = slides[currentIndex];
      const nextIndex = (currentIndex + 1) % slides.length;
      const nextSlide = slides[nextIndex];

      // Create timeline for smooth fade transition
      const tl = gsap.timeline();

      // Fade out current slide with slight zoom
      tl.to(currentSlide, {
        opacity: 0,
        scale: 1.05,
        duration: 2,
        ease: "power2.inOut",
      });

      // Fade in next slide (overlapping for smooth crossfade)
      tl.fromTo(
        nextSlide,
        {
          opacity: 0,
          scale: 1.05,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=1.8" // Overlap for smooth crossfade effect
      );

      currentIndex = nextIndex;
    };

    // Start slideshow with 10 second intervals
    const interval = setInterval(animateSlideshow, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-[120px] overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0" ref={slideshowRef}>
        {heroImages.map((image, index) => (
          <div key={index} className="hero-slide absolute inset-0">
            <Image
              src={image}
              alt={`Northern Pakistan - Slide ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={95}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </div>
        ))}
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/60 via-red-900/30 to-black/60 z-10"></div>
        {/* Animated Shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-float z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float z-10" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-12 sm:py-20 min-h-screen flex flex-col justify-between">
        <div className="flex-1 flex items-center pt-4 sm:pt-8 w-full">
          <div className="max-w-3xl w-full">
            {/* Main Heading - Travel Agency Style */}
            <div className="mb-4 animate-fade-in-up">
              <span className="inline-block bg-white text-red-600 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                🌟 Pakistan's #1 Travel Company
              </span>
            </div>
            
            <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Explore Pakistan's<br />
              <span className="bg-white text-red-600 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 inline-block rounded-lg mt-2 text-[20px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl shadow-2xl hover:scale-105 transition-transform duration-300">Northern Beauty</span> & Beyond
            </h1>

            {/* Description */}
            <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl mb-6 max-w-2xl leading-relaxed font-medium animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Premium Tour Packages • Umrah Services • Luxury Hotels<br />
              <span className="bg-red-600/80 text-white px-2 sm:px-3 py-1 rounded-md inline-block mt-2 text-xs xs:text-sm sm:text-base animate-pulse-glow">Book Your Dream Journey Today!</span>
            </p>
            
            {/* Trust Badges - Travel Company Style */}
            <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-4 mb-8 w-full animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">15K+</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Happy Travelers</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">12+</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Years Experience</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">100%</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Licensed & Insured</div>
              </div>
            </div>

          </div>
        </div>

        {/* Search Destination Form at Bottom */}
   
      </div>
    </section>
  );
}
