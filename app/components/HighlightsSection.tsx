"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-0 sm:px-4 md:px-6">
        {/* Carousel only */}
        <div className="relative rounded-none sm:rounded-3xl overflow-hidden">
          <div className="relative aspect-video w-full min-h-[280px] sm:min-h-[340px] md:min-h-[420px]">
            <Image
              key={highlights[activeIndex].src}
              src={highlights[activeIndex].src}
              alt={highlights[activeIndex].alt}
              fill
              className="object-contain object-center transition-all duration-700"
              priority
              sizes="100vw"
            />

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full shadow-lg transition z-10"
              aria-label="Previous highlight"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full shadow-lg transition z-10"
              aria-label="Next highlight"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 py-3 sm:py-4">
            {highlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === activeIndex ? "w-6 sm:w-8 bg-emerald-600" : "w-2 bg-emerald-200 hover:bg-emerald-300"}`}
                aria-label={`Go to highlight ${idx + 1}`}
              />
            ))}
          </div>
          </div>
      </div>
    </section>
  );
}

