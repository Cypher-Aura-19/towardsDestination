"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Plane, Calendar, Users, MapPin, Check } from "lucide-react";
import Image from "next/image";

export default function PublicToursByAir() {
  const packages = [
    {
      id: 1,
      name: "Hunza Valley Premium Tour",
      location: "Gilgit-Baltistan",
      duration: "5 Days / 4 Nights",
      price: "PKR 65,000",
      image: "/hunza.jpg",
      highlights: [
        "Round-trip flights from Islamabad",
        "4-star hotel accommodation",
        "Visit Karimabad & Altit Fort",
        "Eagle's Nest viewpoint",
        "Attabad Lake boat ride",
        "All meals included"
      ]
    },
    {
      id: 2,
      name: "Skardu & Deosai Adventure",
      location: "Skardu, Gilgit-Baltistan",
      duration: "6 Days / 5 Nights",
      price: "PKR 75,000",
      image: "/skardu.jpg",
      highlights: [
        "Direct flights to Skardu",
        "Shangrila Resort stay",
        "Deosai Plains safari",
        "Upper & Lower Kachura Lakes",
        "Shigar Fort visit",
        "Professional guide included"
      ]
    },
    {
      id: 3,
      name: "Fairy Meadows Expedition",
      location: "Nanga Parbat Base",
      duration: "4 Days / 3 Nights",
      price: "PKR 55,000",
      image: "/mountain trekking.jpg",
      highlights: [
        "Flight to Gilgit",
        "Jeep ride to Fairy Meadows",
        "Nanga Parbat base camp trek",
        "Mountain huts accommodation",
        "Stunning valley views",
        "Photography opportunities"
      ]
    },
    {
      id: 4,
      name: "Chitral & Kalash Valley",
      location: "Khyber Pakhtunkhwa",
      duration: "5 Days / 4 Nights",
      price: "PKR 68,000",
      image: "/cultural tours.jpg",
      highlights: [
        "Flight to Chitral",
        "Kalash Valley cultural tour",
        "Traditional villages visit",
        "Local festivals (seasonal)",
        "Chitral Fort exploration",
        "Cultural immersion experience"
      ]
    },
    {
      id: 5,
      name: "Swat Valley Paradise",
      location: "Swat, Khyber Pakhtunkhwa",
      duration: "4 Days / 3 Nights",
      price: "PKR 50,000",
      image: "/naran.jpg",
      highlights: [
        "Flight to Islamabad + road transfer",
        "Malam Jabba ski resort",
        "Mingora city tour",
        "Buddhist archaeological sites",
        "Mahodand Lake excursion",
        "Luxury hotel stay"
      ]
    },
    {
      id: 6,
      name: "Naran Kaghan Express",
      location: "Khyber Pakhtunkhwa",
      duration: "3 Days / 2 Nights",
      price: "PKR 45,000",
      image: "/photography.jpg",
      highlights: [
        "Flight to Islamabad",
        "Lake Saif-ul-Malook visit",
        "Babusar Top excursion",
        "Lulusar Lake stop",
        "Comfortable hotel stay",
        "Scenic photography spots"
      ]
    },
    {
      id: 7,
      name: "K2 Base Camp Trek",
      location: "Skardu to K2",
      duration: "12 Days / 11 Nights",
      price: "PKR 180,000",
      image: "/mountain trekking.jpg",
      highlights: [
        "Flight to Skardu",
        "Professional trekking guide",
        "Porter & camping equipment",
        "Concordia viewpoint",
        "K2 base camp visit",
        "All meals & permits included"
      ]
    },
    {
      id: 8,
      name: "Astore Valley Explorer",
      location: "Gilgit-Baltistan",
      duration: "4 Days / 3 Nights",
      price: "PKR 58,000",
      image: "/hunza.jpg",
      highlights: [
        "Flight to Gilgit",
        "Rama Lake trek",
        "Astore Fort visit",
        "Rupal Valley tour",
        "Nanga Parbat south face view",
        "Local guesthouse experience"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Northern Pakistan Tours By Air"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Company Badge */}
          <div className="mb-6">
            <span className="inline-block bg-white text-red-600 px-4 py-2 rounded-md text-sm font-bold">
              ✈️ TOWARDSDESTINATION.PK - Public Group Tours
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Northern Pakistan Tours<br />
            <span className="bg-white text-red-600 px-4 py-2 inline-block rounded-lg mt-2">By Air Travel</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
            Join our premium group tours and explore Pakistan's northern beauty with fellow travelers. Fast, comfortable, and affordable air travel packages.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">8+</div>
              <div className="text-xs text-white/80 font-semibold">Tour Packages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">5-7</div>
              <div className="text-xs text-white/80 font-semibold">Days Duration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/80 font-semibold">Safe & Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              ✈️ AVAILABLE TOUR PACKAGES
            </span>
            <h2 className="text-4xl font-extrabold text-red-600 mb-4">
              Choose Your Perfect Air Tour
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              All packages include flights, accommodation, meals, and guided tours. Book now and save your spot!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Plane className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-medium text-red-600">By Air</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-red-600">{pkg.price}</p>
                    </div>
                    <a 
                      href={`/public-tours/by-air/${pkg.id}`}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Air Travel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Why Choose Air Travel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Save Time</h3>
              <p className="text-gray-600">
                Reach your destination in hours instead of days, maximizing your vacation time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Aerial Views</h3>
              <p className="text-gray-600">
                Enjoy breathtaking views of mountain ranges and valleys from above.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Comfort</h3>
              <p className="text-gray-600">
                Travel in comfort and arrive refreshed, ready to explore immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
