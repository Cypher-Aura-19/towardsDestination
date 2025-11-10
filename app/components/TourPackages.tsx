"use client";

import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TourPackages() {
  const destinations = [
    {
      id: 1,
      name: "Hunza Valley Tour",
      location: "Gilgit-Baltistan, Pakistan",
      priceByRoad: "PKR 45,000",
      priceByAir: "PKR 65,000",
      priceLabel: "/person",
      image: "/hunza.jpg", // Add your image to public folder
    },
    {
      id: 2,
      name: "Skardu & Deosai Plains",
      location: "Skardu, Pakistan",
      priceByRoad: "PKR 55,000",
      priceByAir: "PKR 75,000",
      priceLabel: "/person",
      image: "/skardu.jpg", // Add your image to public folder
    },
    {
      id: 3,
      name: "Naran Kaghan Valley",
      location: "Khyber Pakhtunkhwa, Pakistan",
      priceByRoad: "PKR 35,000",
      priceByAir: "PKR 50,000",
      priceLabel: "/person",
      image: "/naran.jpg", // Add your image to public folder
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        {/* Header - Travel Agency Style */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4">
            🏔️ POPULAR TOUR PACKAGES
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Explore Northern Pakistan
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            Discover breathtaking valleys, majestic mountains, and crystal-clear lakes. Choose from our carefully curated tour packages with flexible travel options.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/public-tours/by-air" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-bold transition-colors">
              View All Tours
            </a>
            <a href="/contact" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-lg font-bold transition-colors">
              Custom Package
            </a>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ BEST SELLER
                </div>
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl">
                  <div className="text-xs font-semibold">Starting from</div>
                  <div className="text-xl font-bold">{destination.priceByRoad}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {destination.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 text-gray-900" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                {/* Travel Options */}
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 bg-gray-50 px-3 py-2 rounded-lg text-center border border-gray-200">
                    <div className="text-xs text-gray-600">By Road</div>
                    <div className="text-sm font-bold text-gray-900">{destination.priceByRoad}</div>
                  </div>
                  <div className="flex-1 bg-gray-900 px-3 py-2 rounded-lg text-center">
                    <div className="text-xs text-white">By Air</div>
                    <div className="text-sm font-bold text-white">{destination.priceByAir}</div>
                  </div>
                </div>
                
                {/* Book Button */}
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-bold transition-colors">
                  View Details & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
