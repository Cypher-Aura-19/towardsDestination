"use client";

import { MapPin, ArrowRight, ChevronDown, Users, Zap, Wind, Gauge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OtherServices() {
  const [activeService, setActiveService] = useState<"rental" | "hotel">("rental");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Rental Services Data
  const rentalServices = [
    {
      id: 1,
      name: "VAN – Classic (Rent a car)",
      type: "Van",
      seats: 12,
      transmission: "Auto",
      luggage: 8,
      ac: 3,
      price: 8000,
      image: "/astore.jpg",
      priceType: "/day"
    },
    {
      id: 2,
      name: "Toyota Hiace (Rent a car)",
      type: "Hiace",
      seats: 9,
      transmission: "Auto",
      luggage: 6,
      ac: 2,
      price: 10000,
      image: "/main.jpg",
      priceType: "/day"
    },
    {
      id: 3,
      name: "Toyota Coaster (Rent a car)",
      type: "Coaster",
      seats: 15,
      transmission: "Auto",
      luggage: 10,
      ac: 4,
      price: 20000,
      image: "/main2.jpg",
      priceType: "/day"
    },
    {
      id: 4,
      name: "Mountain Jeep (For Rent)",
      type: "Jeep",
      seats: 4,
      transmission: "Manual",
      luggage: 2,
      ac: 1,
      price: 7998,
      image: "/main3.jpg",
      priceType: "/day"
    }
  ];

  // Hotel Services Data
  const hotelServices = [
    {
      id: 1,
      name: "Mountain View Resort",
      location: "Hunza Valley",
      rating: 4.8,
      reviews: 245,
      price: 8000,
      image: "/hotel.jpg",
      amenities: ["Free Wi-Fi", "Breakfast", "Parking", "Restaurant"],
      priceType: "/night"
    },
    {
      id: 2,
      name: "Skardu Luxury Hotel",
      location: "Skardu",
      rating: 4.6,
      reviews: 189,
      price: 12000,
      image: "/skardu1.jpg",
      amenities: ["Free Wi-Fi", "Breakfast", "Parking", "Spa"],
      priceType: "/night"
    },
    {
      id: 3,
      name: "Naran Comfort Inn",
      location: "Naran",
      rating: 4.7,
      reviews: 156,
      price: 6500,
      image: "/naran.jpg",
      amenities: ["Free Wi-Fi", "Breakfast", "Parking", "Garden"],
      priceType: "/night"
    },
    {
      id: 4,
      name: "Swat Valley Resort",
      location: "Swat",
      rating: 4.5,
      reviews: 203,
      price: 9500,
      image: "/swat.jpg",
      amenities: ["Free Wi-Fi", "Breakfast", "Parking", "Pool"],
      priceType: "/night"
    }
  ];

  const getSpecIcon = (spec: string) => {
    switch(spec) {
      case "seats":
        return <Users className="w-5 h-5" />;
      case "transmission":
        return <Zap className="w-5 h-5" />;
      case "luggage":
        return <Wind className="w-5 h-5" />;
      case "ac":
        return <Gauge className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="other-services" className="py-12 sm:py-20 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up relative z-40">
          <span className="inline-block bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            🚗 OTHER SERVICES
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Rental & Hotel Services</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            Complete your journey with our premium rental vehicles and comfortable hotel accommodations across Northern Pakistan.
          </p>

          {/* Service Selector Dropdown */}
          <div className="flex justify-center gap-4 flex-wrap">
            <div 
              className="relative z-30"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                {activeService === "rental" ? "🚗 Rental Services" : "🏨 Hotel Services"}
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100 transition-all duration-200 z-50 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <button 
                  onClick={() => {
                    setActiveService("rental");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-base font-medium transition-colors ${
                    activeService === "rental" 
                      ? "bg-red-50 text-red-600" 
                      : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  🚗 Rental Services
                </button>
                <button 
                  onClick={() => {
                    setActiveService("hotel");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-base font-medium transition-colors ${
                    activeService === "hotel" 
                      ? "bg-red-50 text-red-600" 
                      : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  🏨 Hotel Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Services Cards */}
        {activeService === "rental" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
            {rentalServices.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ AVAILABLE
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xs font-semibold">PKR {vehicle.price.toLocaleString()}</div>
                    <div className="text-xs">{vehicle.priceType}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {vehicle.name}
                  </h3>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="text-xs text-gray-500">Seats</div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.seats}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="text-xs text-gray-500">Trans</div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.transmission}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="text-xs text-gray-500">Luggage</div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.luggage}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="text-xs text-gray-500">AC</div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.ac}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Book Button */}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2 text-sm">
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hotel Services Cards */}
        {activeService === "hotel" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
            {hotelServices.map((hotel, index) => (
              <div
                key={hotel.id}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ {hotel.rating}
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xs font-semibold">PKR {hotel.price.toLocaleString()}</div>
                    <div className="text-xs">{hotel.priceType}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors line-clamp-2">
                    {hotel.name}
                  </h3>
                  
                  {/* Location & Rating */}
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3 pb-3 border-b border-gray-200">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({hotel.reviews} reviews)</span>
                  </div>
                  
                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 font-semibold mb-2">Amenities</div>
                    <div className="flex flex-wrap gap-1">
                      {hotel.amenities.slice(0, 2).map((amenity, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          +{hotel.amenities.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Book Button */}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2 text-sm">
                    Book Stay
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
