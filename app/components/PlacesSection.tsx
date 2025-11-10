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
    <section className="py-12 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 animate-fade-in-up">
          <span className="inline-block bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse-glow">
            🗺️ EXPLORE PAKISTAN
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Top Places to Visit in Pakistan</span>

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
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-red-200 border border-transparent animate-fade-in-up"
              style={{animationDelay: `${place.id * 0.15}s`}}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover group-hover:scale-125 group-hover:rotate-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-red-900/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                
                {/* Region Badge */}
                <div className="absolute top-4 left-4 animate-fade-in-left">
                  <span className="inline-flex items-center gap-1 bg-white text-red-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
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
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow"
          >
            Explore All Destinations
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
