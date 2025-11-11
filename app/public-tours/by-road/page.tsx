"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Bus, Calendar, Users, MapPin, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PublicToursByRoad() {
 
const packages = [
  {
    id: 1,
    title: "KUMRAT, KALA CHASHMA & DOJANGA MEADOWS (3 Days) Tour",
    duration: "3 days 2 nights",
    location: "Kumrat Valley",
    price: 14500,
    image: "/kumrat.jpg",
    rating: 4.8,
    reviews: 125
  },
  {
    id: 2,
    title: "5 Days Trip to Hunza & Naltar Valley",
    duration: "5 Days, 4 Nights",
    location: "Hunza & Naltar",
    price: 22000,
    image: "/hunza.jpg",
    rating: 4.9,
    reviews: 210
  },
  {
    id: 3,
    title: "Naran & Shogran Honeymoon Tour Package (3 Days)",
    duration: "3 Days 2 Nights",
    location: "Naran & Shogran",
    price: 105000,
    image: "/naran.jpg",
    rating: 5.0,
    reviews: 98
  },
  {
    id: 4,
    title: "3 Days – Naran | Shogran Group Tour Packages",
    duration: "3 Days 2 Nights",
    location: "Naran & Shogran",
    price: 14000,
    image: "/shogran.jpg",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    title: "5 Days Trip to Neelum Valley | Taobat| Arang Kel & Ratti Gali",
    duration: "5 Days 4 Nights",
    location: "Neelum Valley, Kashmir",
    price: 25000,
    image: "/neelum valley.jpg",
    rating: 4.9,
    reviews: 189
  },
  {
    id: 6,
    title: "4 Days Trip to Ratti Gali & Arang kel",
    duration: "4 Days 3 Nights",
    location: "Kashmir",
    price: 0,
    image: "/arang kel.jpg",
    rating: 4.6,
    reviews: 87
  },
  {
    id: 7,
    title: "Taobat & Arang kel Kashmir : 4 Days Trip",
    duration: "4 Days 3 Nights",
    location: "Kashmir",
    price: 17500,
    image: "/arang kel.jpg",
    rating: 4.7,
    reviews: 92
  },
  {
    id: 8,
    title: "4 Days Trip to Kumrat | Jahaz Banda & Katora Lake",
    duration: "4 Days 3 Nights",
    location: "Kumrat Valley",
    price: 17500,
    image: "/kumrat.jpg",
    rating: 4.8,
    reviews: 143
  },
  {
    id: 9,
    title: "3 Days Trip to Ratti Gali Kashmir",
    duration: "3 Days 2 Nights",
    location: "Kashmir",
    price: 15500,
    image: "/ratti-gali.jpg",
    rating: 4.5,
    reviews: 76
  },
  {
    id: 10,
    title: "5 Days Trip to Fairy Meadows & Beyal Camp",
    duration: "5 Days 4 Nights",
    location: "Fairy Meadows",
    price: 24000,
    image: "/fairy-meadows.jpg",
    rating: 4.9,
    reviews: 167
  },
  {
    id: 11,
    title: "6 Days Trip to Astore | Minimarg | Rama Meadows| Deosai",
    duration: "6 Days 5 Nights",
    location: "Astore & Deosai",
    price: 28000,
    image: "/deosai.jpg",
    rating: 4.8,
    reviews: 134
  },
  {
    id: 12,
    title: "8 Days Trip to Hunza & Skardu Valley",
    duration: "8 Days 7 Nights",
    location: "Hunza & Skardu",
    price: 32000,
    image: "/skardu.jpg" // Image Source
  },
  {
    id: 13,
    title: "6 Days Trip to Skardu & Deosai Plains",
    duration: "6 Days 5 Nights",
    location: "Skardu & Deosai",
    price: 26000,
    image: "/skardu.jpg" // Image Source
  },
  {
    id: 14,
    title: "3 Days Trip to Neelum Valley & Arang Kel",
    duration: "3 Days 2 Nights",
    location: "Neelum Valley, Kashmir",
    price: 14000,
    image: "/neelum valley.jpg" // Image Source
  },
  {
    id: 15,
    title: "3 Days Trip to Kalam & Malam Jabba, Swat Valley",
    duration: "3 Days 2 Nights",
    location: "Swat Valley",
    price: 14000,
    image: "/swat.jpg" // Image Source
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
            alt="Northern Pakistan Tours By Road"
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
              🚌 TOWARDSDESTINATION.PK - Public Group Tours
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Northern Pakistan Tours<br />
            <span className="bg-white text-red-600 px-4 py-2 inline-block rounded-lg mt-2">By Road Travel</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
            Journey through the legendary Karakoram Highway with our group tours. Experience scenic mountain roads and breathtaking views at a comfortable pace.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-white/80 font-semibold">Tour Packages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">7-10</div>
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
              🚌 AVAILABLE TOUR PACKAGES
            </span>
            <h2 className="text-4xl font-extrabold text-red-600 mb-4">
              Choose Your Perfect Road Tour
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              All packages include comfortable transport, accommodation, meals, and guided tours. Experience the journey!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link 
                key={pkg.id}
                href={`/public-tours/by-road/${pkg.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Bus className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-medium text-red-600">By Road</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    {pkg.title}
                  </h3>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>

                  {/* Reviews */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">{pkg.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-red-600">PKR {pkg.price.toLocaleString()}</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Road Travel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Why Choose Road Travel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Scenic Journey</h3>
              <p className="text-gray-600">
                Experience the world-famous Karakoram Highway with countless photo opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Budget Friendly</h3>
              <p className="text-gray-600">
                More economical option while still enjoying comfortable travel and great experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">
                Stop at local villages, interact with communities, and experience authentic culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
