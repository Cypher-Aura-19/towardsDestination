"use client";

import { ArrowRight, Users, Zap, Wind, Gauge, Car, Shield, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function RentalServicesContent() {
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);

  const rentalServices = [
    {
      id: 1,
      name: "Toyota Corolla Grande",
      type: "Sedan",
      seats: 5,
      transmission: "Auto",
      luggage: 3,
      ac: 1,
      price: 10000,
      image: "/main.jpg",
      priceType: "/day",
      description: "Premium sedan with luxury features, perfect for comfortable city and highway travel."
    },
    {
      id: 2,
      name: "Honda Civic X",
      type: "Sedan",
      seats: 5,
      transmission: "Auto",
      luggage: 3,
      ac: 1,
      price: 10000,
      image: "/main2.jpg",
      priceType: "/day",
      description: "Modern and stylish sedan offering smooth performance and premium comfort."
    },
    {
      id: 3,
      name: "Honda BRV (Rent a car)",
      type: "SUV",
      seats: 6,
      transmission: "Auto",
      luggage: 3,
      ac: 4,
      price: 8000,
      image: "/main3.jpg",
      priceType: "/day",
      description: "Compact SUV perfect for families with spacious interior and modern features."
    },
    {
      id: 4,
      name: "Toyota Grand Cabin (Rent a car)",
      type: "Van",
      seats: 13,
      transmission: "Auto",
      luggage: 11,
      ac: 3,
      price: 13000,
      image: "/astore.jpg",
      priceType: "/day",
      description: "Spacious van ideal for large groups with comfortable seating and ample luggage space."
    },
    {
      id: 5,
      name: "Toyota Corolla (Sedan Car)",
      type: "Sedan",
      seats: 3,
      transmission: "Auto",
      luggage: 3,
      ac: 4,
      price: 7000,
      image: "/hunza1.jpg",
      priceType: "/day",
      description: "Reliable and economical sedan, perfect for small groups and city tours."
    },
    {
      id: 6,
      name: "Toyota Coaster (Rent a car)",
      type: "Coach",
      seats: 25,
      transmission: "Auto",
      luggage: 15,
      ac: 2,
      price: 20000,
      image: "/skardu8.jpg",
      priceType: "/day",
      description: "Large capacity coach perfect for big group tours, events, and long-distance travel."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/main.jpg"
            alt="Rental Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Company Badge */}
          <div className="mb-6">
            <span className="inline-block bg-white text-red-600 px-4 py-2 rounded-md text-sm font-bold">
              🚗 TOWARDSDESTINATION.PK - Premium Rental Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Premium Vehicle Rentals<br />
            <span className="bg-white text-red-600 px-4 py-2 inline-block rounded-lg mt-2">For Your Journey</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
            Choose from our fleet of well-maintained vehicles for your Northern Pakistan adventure. Professional drivers and complete travel support included.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-xs text-white/80 font-semibold">Vehicles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-white/80 font-semibold">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/80 font-semibold">Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Modern Fleet</h3>
              <p className="text-gray-600">
                Well-maintained vehicles with regular servicing and safety checks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Complete insurance coverage for your peace of mind during travel.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Flexible Booking</h3>
              <p className="text-gray-600">
                Daily, weekly, or monthly rentals with professional drivers available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg">
              🚗 OUR FLEET
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              Choose Your Vehicle
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Select from our range of vehicles perfect for group tours and family trips across Northern Pakistan.
            </p>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rentalServices.map((vehicle, index) => (
            <a
              href={`/rental-services/${vehicle.id}`}
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
            </a>
          ))}
          </div>

          {/* Selected Vehicle Details */}
          {selectedVehicle && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {(() => {
              const vehicle = rentalServices.find(v => v.id === selectedVehicle);
              return vehicle ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {vehicle.name}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                      {vehicle.description}
                    </p>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Seating Capacity</div>
                          <div className="text-2xl font-bold text-red-600">{vehicle.seats} Seats</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Transmission</div>
                          <div className="text-2xl font-bold text-red-600">{vehicle.transmission}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Luggage Space</div>
                          <div className="text-2xl font-bold text-red-600">{vehicle.luggage} Units</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">AC Units</div>
                          <div className="text-2xl font-bold text-red-600">{vehicle.ac}</div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-red-50 p-6 rounded-xl mb-6 border border-red-200">
                      <div className="text-sm text-gray-600 mb-2">Daily Rate</div>
                      <div className="text-4xl font-bold text-red-600 mb-2">
                        PKR {vehicle.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">{vehicle.priceType}</div>
                    </div>

                    {/* Book Button */}
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                      Book This Vehicle
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
          )}
        </div>
      </section>
    </>
  );
}
