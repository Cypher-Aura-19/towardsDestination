"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Bus, Calendar, Users, MapPin, Star, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PublicToursByRoad() {
  const [selectedCity, setSelectedCity] = useState<string>("all");
 
const packages = [
  {
    id: 1,
    title: "03 days KUMRAT VALLEY",
    duration: "3 days 2 nights",
    location: "Kumrat Valley",
    price: 14500,
    image: "/kumrat.jpg",
    rating: 4.8,
    reviews: 125,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 2,
    title: "05 days HUNZA VALLEY",
    duration: "5 Days, 4 Nights",
    location: "HUNZA VALLEY",
    price: 22000,
    image: "/hunza1.jpg",
    rating: 4.9,
    reviews: 210,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 3,
    title: "03 days NARAN & SHOGRAN",
    duration: "3 Days 2 Nights",
    location: "Naran & Shogran",
    price: 105000,
    image: "/naran1.jpg",
    rating: 5.0,
    reviews: 98,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 4,
    title: "03 days NARAN & SHOGRAN",
    duration: "3 Days 2 Nights",
    location: "Naran & Shogran",
    price: 14000,
    image: "/naran1.jpg",
    rating: 4.7,
    reviews: 156,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 5,
    title: "05 days NEELUM VALLEY",
    duration: "5 Days 4 Nights",
    location: "Neelum Valley, Kashmir",
    price: 25000,
    image: "/neelum5.jpg",
    rating: 4.9,
    reviews: 189,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 6,
    title: "04 days KASHMIR",
    duration: "4 Days 3 Nights",
    location: "Kashmir",
    price: 0,
    image: "/neelum.jpg",
    rating: 4.6,
    reviews: 87,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 7,
    title: "04 days KASHMIR",
    duration: "4 Days 3 Nights",
    location: "Kashmir",
    price: 17500,
    image: "/neelum.jpg",
    rating: 4.7,
    reviews: 92,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 8,
    title: "04 days KUMRAT VALLEY",
    duration: "4 Days 3 Nights",
    location: "Kumrat Valley",
    price: 17500,
    image: "/kumrat.jpg",
    rating: 4.8,
    reviews: 143,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 9,
    title: "03 days KASHMIR",
    duration: "3 Days 2 Nights",
    location: "Kashmir",
    price: 15500,
    image: "/neelum3.jpg",
    rating: 4.5,
    reviews: 76,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 10,
    title: "05 days FAIRY MEADOWS",
    duration: "5 Days 4 Nights",
    location: "FAIRY MEADOWS",
    price: 24000,
    image: "/medows.jpg",
    rating: 4.9,
    reviews: 167,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 11,
    title: "06 days ASTORE & DEOSAI",
    duration: "6 Days 5 Nights",
    location: "ASTORE & DEOSAI",
    price: 28000,
    image: "/astore.jpg",
    rating: 4.8,
    reviews: 134,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 12,
    title: "08 days HUNZA & SKARDU",
    duration: "8 Days 7 Nights",
    location: "HUNZA & SKARDU",
    price: 32000,
    image: "/skardu8.jpg",
    rating: 4.8,
    reviews: 150,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 13,
    title: "06 days SKARDU & DEOSAI",
    duration: "6 Days 5 Nights",
    location: "SKARDU & DEOSAI",
    price: 26000,
    image: "/skardu6.jpg",
    rating: 4.7,
    reviews: 120,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 14,
    title: "03 days NEELUM VALLEY",
    duration: "3 Days 2 Nights",
    location: "Neelum Valley, Kashmir",
    price: 14000,
    image: "/neelum.jpg",
    rating: 4.6,
    reviews: 95,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 15,
    title: "03 days SWAT VALLEY",
    duration: "3 Days 2 Nights",
    location: "Swat Valley",
    price: 14000,
    image: "/swat.jpg",
    rating: 4.7,
    reviews: 110,
    city: "Lahore-Islamabad-Faisalabad"
  },
  {
    id: 16,
    title: "08 days SHOGRAN & KASHMIR",
    duration: "8 days, 7 nights",
    location: "Shogran & Kashmir Valley",
    price: 38000,
    image: "/shogran.jpg",
    rating: 0,
    reviews: 0,
    city: "karachi"
  },
  {
    id: 17,
    title: "10 days SWAT, SHOGRAN & KASHMIR",
    duration: "10 days, 9 nights",
    location: "Swat, Shogran & Kashmir Valley",
    price: 48000,
    image: "/swat.jpg",
    rating: 0,
    reviews: 0,
    city: "karachi"
  },
  {
    id: 18,
    title: "07 days SWAT VALLEY",
    duration: "7 days, 6 nights",
    location: "Swat Valley",
    price: 30000,
    image: "/swat.jpg",
    rating: 0,
    reviews: 0,
    city: "karachi"
  },
  {
    id: 19,
    title: "09 days HUNZA VALLEY",
    duration: "9 days, 8 nights",
    location: "HUNZA Valley",
    price: 42000,
    image: "/hunza1.jpg",
    rating: 0,
    reviews: 0,
    city: "karachi"
  },
  {
    id: 20,
    title: "12 days HUNZA & SKARDU",
    duration: "12 days, 11 nights",
    location: "HUNZA & SKARDU Valley",
    price: 50000,
    image: "/skardu8.jpg",
    rating: 0,
    reviews: 0,
    city: "karachi"
  },
  {
    id: 21,
    title: "08 days HUNZA & SKARDU",
    duration: "8 Days 7 Nights",
    location: "HUNZA, SKARDU, Lahore & Islamabad",
    price: 455,
    image: "/hunza1.jpg",
    rating: 0,
    reviews: 0,
    city: "Lahore-Islamabad-Faisalabad",
    currency: "USD"
  }
];

  const filteredPackages = selectedCity === "all" 
    ? packages 
    : packages.filter(pkg => pkg.city === selectedCity);


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
          
          <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
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
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 badge-premium" style={{ fontFamily: "'Poppins', sans-serif" }}>
              🚌 AVAILABLE TOUR PACKAGES
            </span>
            <h2 className="text-4xl font-extrabold text-red-600 mb-4 section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Choose Your Perfect Road Tour
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
              All packages include comfortable transport, accommodation, meals, and guided tours. Experience the journey!
            </p>
          </div>

          {/* City Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg shadow-md p-2 gap-2">
              <button
                onClick={() => setSelectedCity("all")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCity === "all"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                All Tours
              </button>
              <button
                onClick={() => setSelectedCity("Lahore-Islamabad-Faisalabad")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCity === "Lahore-Islamabad-Faisalabad"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Lahore / Islamabad / Faisalabad
              </button>
              <button
                onClick={() => setSelectedCity("karachi")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCity === "karachi"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Karachi
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
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
                  
                  <h3 className="card-title text-base text-gray-800 mb-3 line-clamp-2 group-hover:text-red-700 transition-colors">
                      {/* The 'Business' part - using a cursive/script-like Google Font */}
                      <span style={{ fontFamily: 'Dancing Script, cursive' }} className="font-light">
                        {pkg.title.split(' ')[0]} {pkg.title.split(' ')[1]}
                      </span>{' '}
                      {/* The 'WEBSITE' part - keeping a strong, non-cursive font */}
                      <span className="">
                        {pkg.title.split(' ').slice(2).join(' ')}
                      </span>
                    </h3>
                                      {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>

                  {/* Reviews */}
                  {pkg.reviews > 0 ? (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{pkg.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-gray-500">No reviews yet</span>
                    </div>
                  )}

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-red-600">
                        {pkg.currency === "USD" ? `USD ${pkg.price}` : `PKR ${pkg.price.toLocaleString()}`}
                      </p>
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
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Why Choose Road Travel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-xl font-bold text-red-600 mb-2">Scenic Journey</h3>
              <p className="text-gray-600 card-description" style={{ fontFamily: "'Inter', sans-serif" }}>
                Experience the world-famous Karakoram Highway with countless photo opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-xl font-bold text-red-600 mb-2">Budget Friendly</h3>
              <p className="text-gray-600 card-description" style={{ fontFamily: "'Inter', sans-serif" }}>
                More economical option while still enjoying comfortable travel and great experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-xl font-bold text-red-600 mb-2">Cultural Immersion</h3>
              <p className="text-gray-600 card-description" style={{ fontFamily: "'Inter', sans-serif" }}>
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
