"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, Camera, ArrowRight } from "lucide-react";

const highlights = [
  {
    src: "/popup/1.jpeg",
    alt: "Mountain lake with boats",
    label: "Hunza Valley",
  },
  {
    src: "/popup/2.jpeg",
    alt: "Snow covered peaks",
    label: "Skardu Peaks",
  },
  {
    src: "/popup/3.jpeg",
    alt: "Green valley and river",
    label: "Naran Valley",
  },
  {
    src: "/popup/4.jpeg",
    alt: "Sunset over mountains",
    label: "Fairy Meadows",
  },
];

export default function HighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % highlights.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + highlights.length) % highlights.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-emerald-50 to-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -left-10 top-10 w-60 h-60 bg-emerald-200 blur-3xl opacity-40 rounded-full"></div>
      <div className="absolute -right-16 bottom-10 w-72 h-72 bg-emerald-100 blur-3xl opacity-50 rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
            <Sparkles className="w-4 h-4" />
            Tour Highlights
          </span>
          <h2
            className="text-[26px] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 mb-3 section-heading text-emerald-700"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Moments from our adventures
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
            A quick look at the breathtaking places and experiences our travelers enjoy across Pakistan.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 bg-white">
          <div className="relative aspect-video min-h-[280px] sm:min-h-[340px] md:min-h-[420px]">
            <Image
              key={highlights[activeIndex].src}
              src={highlights[activeIndex].src}
              alt={highlights[activeIndex].alt}
              fill
              className="object-contain object-center bg-black transition-all duration-700"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            {/* Badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              <Camera className="w-4 h-4" />
              #{activeIndex + 1} / {highlights.length}
            </div>

          
            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full shadow-lg transition"
              aria-label="Previous highlight"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full shadow-lg transition"
              aria-label="Next highlight"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 py-4 bg-white/80 backdrop-blur-sm">
            {highlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${idx === activeIndex ? "w-8 bg-emerald-600" : "w-2.5 bg-emerald-200 hover:bg-emerald-300"}`}
                aria-label={`Go to highlight ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href="/highlights"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-md"
          >
            View all highlights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

