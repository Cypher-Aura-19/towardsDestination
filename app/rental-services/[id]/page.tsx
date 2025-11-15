"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Users, Zap, Wind, Gauge, Check, Phone, Mail, MessageCircle, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const vehicleDetails: any = {
  "1": {
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
    description: "Premium sedan with luxury features, perfect for comfortable city and highway travel.",
    features: [
      "Leather seats with premium upholstery",
      "Advanced safety features",
      "Fuel-efficient engine",
      "Spacious interior",
      "Modern infotainment system",
      "Comfortable for long journeys"
    ],
    included: [
      "Professional driver (optional)",
      "Full insurance coverage",
      "24/7 roadside assistance",
      "Regular maintenance",
      "Fuel (negotiable)"
    ],
    excluded: [
      "Fuel charges (if not included)",
      "Toll taxes",
      "Parking fees",
      "Driver accommodation (for multi-day trips)"
    ]
  },
  "2": {
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
    description: "Modern and stylish sedan offering smooth performance and premium comfort.",
    features: [
      "Sporty design with modern aesthetics",
      "Turbocharged engine",
      "Advanced safety systems",
      "Premium sound system",
      "Comfortable seating",
      "Excellent fuel economy"
    ],
    included: [
      "Professional driver (optional)",
      "Full insurance coverage",
      "24/7 roadside assistance",
      "Regular maintenance",
      "Fuel (negotiable)"
    ],
    excluded: [
      "Fuel charges (if not included)",
      "Toll taxes",
      "Parking fees",
      "Driver accommodation (for multi-day trips)"
    ]
  },
  "3": {
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
    description: "Compact SUV perfect for families with spacious interior and modern features.",
    features: [
      "7-seater configuration",
      "High ground clearance",
      "Spacious cargo area",
      "Family-friendly design",
      "Comfortable for long trips",
      "Modern safety features"
    ],
    included: [
      "Professional driver (optional)",
      "Full insurance coverage",
      "24/7 roadside assistance",
      "Regular maintenance",
      "Fuel (negotiable)"
    ],
    excluded: [
      "Fuel charges (if not included)",
      "Toll taxes",
      "Parking fees",
      "Driver accommodation (for multi-day trips)"
    ]
  },
  "4": {
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
    description: "Spacious van ideal for large groups with comfortable seating and ample luggage space.",
    features: [
      "13-seater capacity",
      "Ample luggage space",
      "Comfortable for group tours",
      "Air conditioning throughout",
      "Perfect for family trips",
      "Reliable performance"
    ],
    included: [
      "Professional driver",
      "Full insurance coverage",
      "24/7 roadside assistance",
      "Regular maintenance",
      "Fuel (negotiable)"
    ],
    excluded: [
      "Fuel charges (if not included)",
      "Toll taxes",
      "Parking fees",
      "Driver accommodation (for multi-day trips)"
    ]
  },
  "5": {
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
    description: "Reliable and economical sedan, perfect for small groups and city tours.",
    features: [
      "Fuel-efficient",
      "Reliable performance",
      "Comfortable seating",
      "Easy to drive",
      "Low maintenance",
      "Perfect for city travel"
    ],
    included: [
      "Professional driver (optional)",
      "Full insurance coverage",
      "24/7 roadside assistance",
      "Regular maintenance",
      "Fuel (negotiable)"
    ],
    excluded: [
      "Fuel charges (if not included)",
      "Toll taxes",
      "Parking fees",
      "Driver accommodation (for multi-day trips)"
    ]
  },
  "6": {
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
    description: "Large capacity coach perfect for big group tours, events, and long-distance travel.",
    features: [
      "25-seater capacity",
      "Spacious luggage compartment",
      "Comfortable for long journeys",
      "Air conditioning",
      "Perfect for events and tours",
      "Professional driver included"
    ],
    included: [
      "Professional driver",
      "Full insurance coverage",
      "24/7 roadside assistance",
      "Regular maintenance",
      "Fuel (negotiable)"
    ],
    excluded: [
      "Fuel charges (if not included)",
      "Toll taxes",
      "Parking fees",
      "Driver accommodation (for multi-day trips)"
    ]
  }
};

export default function VehicleDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const vehicle = vehicleDetails[id];
  const [persons, setPersons] = useState(1);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Vehicle Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    const message = `Hi, I want to book ${vehicle.name} for ${persons} person(s). Price: PKR ${vehicle.price}${vehicle.priceType}`;
    const whatsappUrl = `https://wa.me/923153309070?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {vehicle.type}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {vehicle.name}
              </h1>
              
              <p className="text-gray-600 text-lg mb-6">
                {vehicle.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600">Seating</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{vehicle.seats} Seats</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600">Transmission</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{vehicle.transmission}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600">Luggage</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{vehicle.luggage} Units</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600">AC Units</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{vehicle.ac}</div>
                </div>
              </div>

              {/* Price */}
              <div className="bg-red-50 p-6 rounded-xl mb-6 border border-red-200">
                <div className="text-sm text-gray-600 mb-2">Rental Rate</div>
                <div className="text-4xl font-bold text-red-600 mb-2">
                  PKR {vehicle.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">{vehicle.priceType}</div>
              </div>

              {/* Booking */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Persons
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPersons(Math.max(1, persons - 1))}
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center text-gray-900"
                    >
                      <Minus className="w-5 h-5 text-gray-900" />
                    </button>
                    <span className="text-2xl font-bold text-gray-900 w-12 text-center">{persons}</span>
                    <button
                      onClick={() => setPersons(persons + 1)}
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center text-gray-900"
                    >
                      <Plus className="w-5 h-5 text-gray-900" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleBooking}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vehicle Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicle.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included/Excluded */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Included */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-3">
                {vehicle.included.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Excluded */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Not Included</h3>
              <div className="space-y-3">
                {vehicle.excluded.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-red-600 flex-shrink-0 mt-0.5">✕</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book This Vehicle?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us now for availability and special rates for long-term rentals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/923153309070"
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +92 315 3309070
            </a>
            <a
              href="mailto:Info.Towardsdestination@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
