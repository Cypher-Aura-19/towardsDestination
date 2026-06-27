"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const highlights = [
  {
    type: "image",
    src: "/popup/IMG_0289.JPG.jpeg",
    alt: "Tour Highlight 1",
    label: "Tour Highlight 1",
  },
  {
    type: "image",
    src: "/popup/IMG_0290.JPG.jpeg",
    alt: "Tour Highlight 2",
    label: "Tour Highlight 2",
  },
  {
    type: "image",
    src: "/popup/IMG_0291.JPG.jpeg",
    alt: "Tour Highlight 3",
    label: "Tour Highlight 3",
  },
  {
    type: "image",
    src: "/popup/IMG_0292.JPG.jpeg",
    alt: "Tour Highlight 4",
    label: "Tour Highlight 4",
  },
  {
    type: "image",
    src: "/popup/IMG_0293.JPG.jpeg",
    alt: "Tour Highlight 5",
    label: "Tour Highlight 5",
  },
  {
    type: "image",
    src: "/popup/IMG_0294.JPG.jpeg",
    alt: "Tour Highlight 6",
    label: "Tour Highlight 6",
  },
  {
    type: "image",
    src: "/popup/IMG_0295.JPG.jpeg",
    alt: "Tour Highlight 7",
    label: "Tour Highlight 7",
  },
  {
    type: "video",
    src: "/popup/8.MP4",
    alt: "Tour highlights video",
    label: "Fairy Meadows",
  },
] as const;

export default function HighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % highlights.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + highlights.length) % highlights.length);

  const handleImageClick = () => {
    const whatsappNumber = "923153309070";
    const message = `Hello! I'm interested in learning more about Towards Destination tour package. Can you please provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const currentItem = highlights[activeIndex];
    if (currentItem.type !== "image") return;

    const timer = setTimeout(() => {
      nextSlide();
    }, 4500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-emerald-50 to-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -left-10 top-10 w-60 h-60 bg-emerald-200 blur-3xl opacity-40 rounded-full"></div>
      <div className="absolute -right-16 bottom-10 w-72 h-72 bg-emerald-100 blur-3xl opacity-50 rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-0 sm:px-4 md:px-6">
        {/* Carousel only */}
        <div className="relative rounded-none sm:rounded-3xl overflow-hidden">
          <div
            className="relative aspect-video w-full min-h-[280px] sm:min-h-[340px] md:min-h-[420px] cursor-pointer"
            onClick={handleImageClick}
          >
            {highlights[activeIndex].type === "image" ? (
              <Image
                key={highlights[activeIndex].src}
                src={highlights[activeIndex].src}
                alt={highlights[activeIndex].alt}
                fill
                className="object-contain object-center transition-all duration-700 hover:opacity-90"
                priority
                sizes="100vw"
              />
            ) : (
              <video
                key={highlights[activeIndex].src}
                src={highlights[activeIndex].src}
                className="w-full h-full object-contain object-center transition-all duration-700"
                autoPlay
                muted
                loop={false}
                controls
                playsInline
                onEnded={nextSlide}
              />
            )}

            {/* Controls */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full shadow-lg transition z-10"
              aria-label="Previous highlight"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
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

