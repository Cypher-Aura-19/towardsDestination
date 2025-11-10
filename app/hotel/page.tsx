"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Wifi, Coffee, Car, Utensils, Star, MapPin, Phone, Mail, Check, Users, Bed, Clock } from "lucide-react";
import Image from "next/image";

export default function HotelPage() {
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
      name: "Standard Room",
      price: "PKR 8,000",
      image: "/hotel.jpg",
      features: [
        "Queen or Twin beds",
        "Mountain view",
        "Private bathroom",
        "Air conditioning",
        "LED TV with cable",
        "Mini refrigerator"
      ],
      size: "250 sq ft",
      occupancy: "2 Adults"
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: "PKR 12,000",
      image: "/hotel.jpg",
      features: [
        "King-size bed",
        "Panoramic mountain view",
        "Luxury bathroom",
        "Climate control",
        "Smart TV",
        "Work desk & seating area"
      ],
      size: "350 sq ft",
      occupancy: "2 Adults + 1 Child"
    },
    {
      id: 3,
      name: "Family Suite",
      price: "PKR 18,000",
      image: "/hotel.jpg",
      features: [
        "Separate bedroom & living area",
        "Stunning valley views",
        "Premium bathroom amenities",
        "Kitchenette",
        "Multiple TVs",
        "Complimentary snacks"
      ],
      size: "500 sq ft",
      occupancy: "4 Adults + 2 Children"
    }
  ];

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
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors">
              Book Your Stay
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-colors">
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
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Location</p>
                <a href="https://maps.app.goo.gl/rNE3RXtnzyVFKpqC7?g_st=ic" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-gray-700">
                  Jhangi Sayedan, Islamabad
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone</p>
                <a href="tel:+923174101300" className="font-semibold text-gray-900 hover:text-gray-700 block">
                  UAN: +92 317 4101300
                </a>
                <a href="https://wa.me/923153309070" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-gray-700 block">
                  WhatsApp: 0315 3309070
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a href="mailto:info@towardsdestination.pk" className="font-semibold text-gray-900 hover:text-gray-700">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {room.name}
                        </h3>
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
                          <Check className="w-4 h-4 text-gray-900 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Starting from</p>
                        <p className="text-3xl font-bold text-gray-900">{room.price}</p>
                        <p className="text-xs text-gray-500 mt-1">per night</p>
                      </div>
                      <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Guest Reviews
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.8/5.0</span>
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
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Experience comfort and hospitality at our premium hotel. Book now and enjoy special rates for tour packages.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors">
              Book Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
