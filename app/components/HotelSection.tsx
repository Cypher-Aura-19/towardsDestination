"use client";

import { Wifi, Coffee, Car, Utensils, Star, MapPin } from "lucide-react";
import Image from "next/image";

export default function HotelSection() {
  const amenities = [
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: Coffee, label: "Complimentary Breakfast" },
    { icon: Car, label: "Free Parking" },
    { icon: Utensils, label: "Restaurant" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/hotel.jpg"
                alt="Our Hotel"
                fill
                className="object-cover"
              />
            </div>

            {/* Rating Badge */}
            <div className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-900 font-bold text-lg">4.8/5.0</p>
              <p className="text-gray-600 text-sm">Based on 200+ reviews</p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Hotel
            </h2>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <MapPin className="w-5 h-5" />
              <span>Located in the heart of Northern Pakistan</span>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience comfort and hospitality at our premium hotel. Perfectly located for your northern tours and Umrah journeys, we offer modern amenities and traditional Pakistani warmth.
            </p>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => {
                  const IconComponent = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-gray-900" />
                      </div>
                      <span className="text-gray-700 font-medium">{amenity.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Room Rates */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Room Rates</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Standard Room</span>
                  <span className="font-bold text-gray-900">PKR 8,000/night</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Deluxe Room</span>
                  <span className="font-bold text-gray-900">PKR 12,000/night</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Suite</span>
                  <span className="font-bold text-gray-900">PKR 18,000/night</span>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full font-medium transition-colors">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
