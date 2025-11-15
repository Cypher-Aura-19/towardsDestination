"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      id: 1,
      title: "Chasing Mountain",
      location: "Swiss Alps",
      image: "/gallery1.jpg",
      category: "Adventure"
    },
    {
      id: 2,
      title: "Relax at the World's Longest Unbroken Sandy Sea Beach",
      location: "Cox's Bazar, Bangladesh",
      image: "/gallery2.jpg",
      category: "Beach Paradise"
    },
    {
      id: 3,
      title: "Cruise Through Crystal-clear Waters and Hidden Coves",
      location: "Greek Islands, Shoreline",
      image: "/gallery3.jpg",
      category: "Coastal Adventure"
    },
    {
      id: 4,
      title: "Vibrant Culture and Lush Landscapes",
      location: "Tropical Rice in Bali",
      image: "/gallery4.jpg",
      category: "Cultural Experience"
    },
    {
      id: 5,
      title: "Spiritual Journeys in the Nepal & Bhutan",
      location: "Mystical Himalaya",
      image: "/gallery5.jpg",
      category: "Spiritual Journey"
    },
    {
      id: 6,
      title: "The Ultimate Getaway in the City of Lights",
      location: "Paris, France",
      image: "/gallery6.jpg",
      category: "Urban Exploration"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Travel Stories You Can Feel
          </h2>
          <p className="text-gray-600">
            Inspiring destinations, unforgettable memories.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div className="flex gap-6 overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${(stories.length * 100) / 3}%`
              }}
            >
              {stories.map((story) => (
                <div 
                  key={story.id}
                  className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer shrink-0"
                  style={{ width: `${100 / stories.length}%` }}
                >
                  {/* Placeholder for image - Replace with actual images from public folder */}
                  <div className="absolute inset-0 bg-linear-to-br from-red-600 via-red-700 to-red-800">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                      Add image: {story.image}
                    </div>
                  </div>
                  {/* Uncomment when you add images to public folder
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  */}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{story.location}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">
                      {story.title}
                    </h3>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
