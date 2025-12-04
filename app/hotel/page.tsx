"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Wifi, Coffee, Car, Utensils, Star, MapPin, Phone, Mail, Check, Users, Bed, Clock, X, Snowflake, Fan } from "lucide-react";
import Image from "next/image";

export default function HotelPage() {
  const [selectedRoom, setSelectedRoom] = useState<typeof roomTypes[0] | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<"nonAc" | "ac">("nonAc");
  const [showBookingModal, setShowBookingModal] = useState(false);

  const amenities = [
    { icon: Wifi, label: "Free High-Speed Wi-Fi", description: "Stay connected throughout your stay" },
    { icon: Coffee, label: "Complimentary Breakfast", description: "Fresh breakfast buffet daily" },
    { icon: Car, label: "Free Parking", description: "Secure parking for all guests" },
    { icon: Utensils, label: "On-site Restaurant", description: "Traditional & continental cuisine" },
    { icon: Clock, label: "24/7 Reception", description: "Round-the-clock service" },
    { icon: Users, label: "Conference Room", description: "Perfect for business meetings" }
  ];

  const roomTypes = [
    {
      id: 1,
      name: "Economy Room",
      bedType: "Master Bed / Twin Beds",
      priceNonAc: 3500,
      priceAc: 4500,
      acLabel: "AC",
      image: "/hotel/1.jpeg",
      features: [
        "Master or Twin beds",
        "Private bathroom",
        "LED TV with cable",
        "Basic amenities"
      ],
      size: "200 sq ft",
      occupancy: "2 Adults"
    },
    {
      id: 2,
      name: "Deluxe Room",
      bedType: "Master or Twin Beds",
      priceNonAc: 5000,
      priceAc: 6000,
      acLabel: "Inverter AC",
      image: "/hotel/2.jpeg",
      features: [
        "Master or Twin beds",
        "Private bathroom",
        "LED TV with cable",
        "Work desk",
        "Premium amenities"
      ],
      size: "280 sq ft",
      occupancy: "2 Adults"
    },
    {
      id: 3,
      name: "Deluxe Room Plus",
      bedType: "Master + Single Bed",
      priceNonAc: 6000,
      priceAc: 7000,
      acLabel: "Inverter AC",
      image: "/hotel/3.jpeg",
      features: [
        "Master bed + Single bed",
        "Private bathroom",
        "LED TV with cable",
        "Work desk",
        "Premium amenities"
      ],
      size: "320 sq ft",
      occupancy: "3 Adults"
    },
    {
      id: 4,
      name: "Family Room",
      bedType: "Master + 3 Single Beds",
      priceNonAc: 7500,
      priceAc: 9000,
      acLabel: "Inverter AC",
      image: "/hotel/4.jpeg",
      features: [
        "Master bed + 3 Single beds",
        "Spacious layout",
        "Private bathroom",
        "LED TV with cable",
        "Seating area",
        "Premium amenities"
      ],
      size: "450 sq ft",
      occupancy: "5 Adults"
    }
  ];

  const handleBookRoom = (room: typeof roomTypes[0]) => {
    setSelectedRoom(room);
    setSelectedVariant("nonAc");
    setShowBookingModal(true);
  };

  const getWhatsAppLink = () => {
    if (!selectedRoom) return "";
    const price = selectedVariant === "ac" ? selectedRoom.priceAc : selectedRoom.priceNonAc;
    const acType = selectedVariant === "ac" ? `with ${selectedRoom.acLabel}` : "Non-AC";
    const message = `Hi! I would like to book the ${selectedRoom.name} (${selectedRoom.bedType}) - ${acType} at PKR ${price.toLocaleString()} per night.`;
    return `https://wa.me/923153309070?text=${encodeURIComponent(message)}`;
  };

  const reviews = [
    {
      name: "Ahmed Khan",
      rating: 5,
      comment: "Excellent location and wonderful hospitality. The staff was very helpful and the rooms were spotless.",
      date: "October 2024"
    },
    {
      name: "Sarah Ali",
      rating: 5,
      comment: "Perfect base for exploring northern areas. Beautiful views and comfortable rooms. Highly recommend!",
      date: "September 2024"
    },
    {
      name: "Bilal Hassan",
      rating: 4,
      comment: "Great value for money. The breakfast was delicious and the location is ideal for tourists.",
      date: "August 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel.jpg"
            alt="Our Hotel"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-white font-semibold">TOWARDSDESTINATION.PK</span>
            <span className="text-white/80">•</span>
            <span className="text-white/90 text-sm">Let's have an Adventure</span>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">4.8/5.0 Rating</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            TOWARDSDESTINATION.PK<br />
            <span className="text-white/90">Premium Hotel</span>
          </h1>
          <p className="text-white/95 text-lg max-w-2xl mb-8">
            Experience comfort and hospitality in the heart of Northern Pakistan. 
            Your perfect base for mountain adventures and spiritual journeys.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-full font-medium transition-colors">
              Book Your Stay
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-full font-medium transition-colors">
              View Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Location</p>
                <a href="https://maps.app.goo.gl/rNE3RXtnzyVFKpqC7?g_st=ic" target="_blank" rel="noopener noreferrer" className="font-semibold text-red-600 hover:text-red-700">
                  Jhangi Sayedan, Islamabad
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone</p>
                <a href="tel:+923174101300" className="font-semibold text-red-600 hover:text-red-700 block">
                  UAN: +92 317 4101300
                </a>
                <a href="https://wa.me/923153309070" target="_blank" rel="noopener noreferrer" className="font-semibold text-red-600 hover:text-red-700 block">
                  WhatsApp: 0315 3309070
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a href="mailto:info@towardsdestination.pk" className="font-semibold text-red-600 hover:text-red-700">
                  info@towardsdestination.pk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              Our Rooms & Suites
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of comfortable rooms designed for your perfect stay.
            </p>
          </div>

          <div className="space-y-8">
            {roomTypes.map((room) => (
              <div 
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto lg:col-span-5">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:col-span-7">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-red-600 mb-2">
                          {room.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-2">{room.bedType}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Bed className="w-4 h-4" />
                            <span>{room.size}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{room.occupancy}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 pb-6 border-b border-gray-200">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing Options */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Fan className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-600">Non-AC</span>
                        </div>
                        <p className="text-2xl font-bold text-red-600">PKR {room.priceNonAc.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">per night</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Snowflake className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium text-blue-600">{room.acLabel}</span>
                        </div>
                        <p className="text-2xl font-bold text-red-600">PKR {room.priceAc.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">per night</p>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button 
                      onClick={() => handleBookRoom(room)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
                    >
                      Select & Book This Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedRoom && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-red-600 mb-2">Book {selectedRoom.name}</h3>
            <p className="text-gray-500 text-sm mb-6">{selectedRoom.bedType}</p>
            
            <div className="space-y-3 mb-6">
              <label className="block">
                <input 
                  type="radio" 
                  name="roomVariant" 
                  value="nonAc"
                  checked={selectedVariant === "nonAc"}
                  onChange={() => setSelectedVariant("nonAc")}
                  className="sr-only peer"
                />
                <div className="flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer peer-checked:border-red-600 peer-checked:bg-red-50 border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <Fan className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">Non-AC</span>
                  </div>
                  <span className="font-bold text-red-600">PKR {selectedRoom.priceNonAc.toLocaleString()}</span>
                </div>
              </label>
              
              <label className="block">
                <input 
                  type="radio" 
                  name="roomVariant" 
                  value="ac"
                  checked={selectedVariant === "ac"}
                  onChange={() => setSelectedVariant("ac")}
                  className="sr-only peer"
                />
                <div className="flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer peer-checked:border-red-600 peer-checked:bg-red-50 border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <Snowflake className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{selectedRoom.acLabel}</span>
                  </div>
                  <span className="font-bold text-red-600">PKR {selectedRoom.priceAc.toLocaleString()}</span>
                </div>
              </label>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Selected:</span>
                <span className="font-bold text-red-600">
                  PKR {(selectedVariant === "ac" ? selectedRoom.priceAc : selectedRoom.priceNonAc).toLocaleString()}/night
                </span>
              </div>
            </div>
            
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center px-8 py-3 rounded-full font-medium transition-colors"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              Hotel Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy modern facilities and services designed for your comfort and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-red-600 mb-2">
                    {amenity.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              Guest Reviews
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-red-600">4.8/5.0</span>
            </div>
            <p className="text-gray-600">Based on 200+ verified reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-red-600">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Experience comfort and hospitality at our premium hotel. Book now and enjoy special rates for tour packages.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full font-medium transition-colors">
              Book Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
