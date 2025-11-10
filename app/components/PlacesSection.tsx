"use client";

import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PlacesSection() {
  const places = [
    {
      id: 1,
      name: "Hunza Valley",
      region: "Gilgit-Baltistan",
      image: "/hunza.jpg",
      highlights: ["Karimabad", "Attabad Lake", "Rakaposhi View"],
      description: "Ancient forts, turquoise lakes, and snow-capped peaks"
    },
    {
      id: 2,
      name: "Skardu",
      region: "Gilgit-Baltistan",
      image: "/skardu.jpg",
      highlights: ["Shangrila Resort", "Deosai Plains", "Shigar Fort"],
      description: "Gateway to K2 and breathtaking mountain landscapes"
    },
    {
      id: 3,
      name: "Naran Kaghan",
      region: "Khyber Pakhtunkhwa",
      image: "/naran.jpg",
      highlights: ["Saif-ul-Malook", "Babusar Top", "Lulusar Lake"],
      description: "Lush green valleys and crystal-clear lakes"
    },
    {
      id: 4,
      name: "Swat Valley",
      region: "Khyber Pakhtunkhwa",
      image: "/cultural tours.jpg",
      highlights: ["Kalam", "Malam Jabba", "Mingora"],
      description: "Switzerland of Pakistan with rich cultural heritage"
    },
    {
      id: 5,
      name: "Fairy Meadows",
      region: "Gilgit-Baltistan",
      image: "/mountain trekking.jpg",
      highlights: ["Nanga Parbat View", "Beyal Camp", "Raikot Bridge"],
      description: "Stunning views of the 9th highest mountain in the world"
    },
    {
      id: 6,
      name: "Chitral",
      region: "Khyber Pakhtunkhwa",
      image: "/photography.jpg",
      highlights: ["Kalash Valleys", "Shandur Pass", "Chitral Fort"],
      description: "Unique culture and the highest polo ground"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4">
            🗺️ EXPLORE PAKISTAN
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Top Places to Visit in Pakistan
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Discover the breathtaking beauty of Pakistan's northern regions. From majestic mountains to serene valleys, 
            experience the adventure of a lifetime with TOWARDSDESTINATION.PK
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
            <div 
              key={place.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Region Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    <MapPin className="w-3 h-3" />
                    {place.region}
                  </span>
                </div>

                {/* Place Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {place.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">
                    {place.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {place.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="/public-tours/by-air"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-colors text-lg"
          >
            Explore All Destinations
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
