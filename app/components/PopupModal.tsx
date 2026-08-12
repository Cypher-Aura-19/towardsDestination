"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const POPUP_MEDIA = [
  { type: "image", src: "/popup/IMG_2669.PNG" },
  { type: "image", src: "/popup/IMG_2717.PNG" },
  { type: "image", src: "/popup/IMG_2719.PNG" },
  { type: "image", src: "/popup/IMG_2732.PNG" },
  { type: "image", src: "/popup/IMG_2750.PNG" },
  { type: "video", src: "/popup/8.MP4" },
] as const;

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Show popup once per page refresh
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const currentItem = POPUP_MEDIA[currentSlide];
    if (currentItem.type !== "image") return;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % POPUP_MEDIA.length);
    }, 2500);

    return () => clearTimeout(timer);
  }, [isOpen, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % POPUP_MEDIA.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + POPUP_MEDIA.length) % POPUP_MEDIA.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image Slider */}
        <div className="relative">
          {POPUP_MEDIA.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
              }`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`Popup image ${index + 1}`}
                  width={600}
                  height={700}
                  className="max-h-[85vh] w-auto h-auto"
                  priority={index === 0}
                />
              ) : (
                <video
                  src={item.src}
                  className="max-h-[85vh] w-auto h-auto"
                  autoPlay={index === currentSlide}
                  muted
                  loop={false}
                  controls
                  playsInline
                  onEnded={() => {
                    if (index === currentSlide) nextSlide();
                  }}
                />
              )}
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {POPUP_MEDIA.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

