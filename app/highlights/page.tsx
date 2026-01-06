"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function HighlightsPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    "/popup/1.jpeg",
    "/popup/2.jpeg",
    "/popup/3.jpeg",
    "/popup/4.jpeg",
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxImage(images[index]);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % images.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + images.length) % images.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(images[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, lightboxIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg animate-pulse-glow" style={{ fontFamily: "'Poppins', sans-serif" }}>
              ⭐ TOUR HIGHLIGHTS
            </span>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="gradient-text">Tour Highlights & Photos</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
              Discover the best moments from our tours - breathtaking destinations, memorable experiences, and unforgettable adventures across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Gallery */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image}
                alt={`Highlight ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              {/* Image Number Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-600 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center gap-1.5">
                <Camera className="w-3 h-3" />
                <span>#{index + 1}</span>
              </div>
              
              {/* View Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Info Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
            Click on any photo to view in full size
          </p>
        </div>
      </main>

      {/* Enhanced Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-[95vw] max-h-[95vh] rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Image */}
            <div className="relative bg-black">
              <Image
                src={lightboxImage}
                alt={`Highlight ${lightboxIndex + 1}`}
                width={1200}
                height={1600}
                className="max-h-[90vh] w-auto h-auto mx-auto"
                priority
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-300 hover:scale-110 shadow-xl group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:translate-x-[-2px] transition-transform" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-300 hover:scale-110 shadow-xl group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-[2px] transition-transform" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxImage(images[index]);
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      index === lightboxIndex 
                        ? "bg-white w-8 h-2" 
                        : "bg-white/50 w-2 h-2 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

