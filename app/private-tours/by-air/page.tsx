"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Plane, Calendar, MapPin, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PrivateToursByAir() {
  const packages = [
    {
      id: 1,
      title: "Honeymoon in Hunza & Skardu 7 Days – By Air",
      duration: "7 Days 6 Nights",
      location: "Hunza & Skardu",
      price: 0,
      image: "/hunza1.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 2,
      title: "3-Day Honeymoon in Hunza – By Air",
      duration: "3 Days 2 Nights",
      location: "Hunza",
      price: 0,
      image: "/hunza1.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 3,
      title: "4 Days By Air Honeymoon Package for Hunza Valley",
      duration: "4 Days 3 Nights",
      location: "Hunza Valley",
      price: 0,
      image: "/hunza1.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 4,
      title: "5 Days By Air Honeymoon Package for Hunza Valley",
      duration: "5 Days 4 Nights",
      location: "Hunza Valley",
      price: 0,
      image: "/hunza1.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 5,
      title: "4 Days By Air Honeymoon Package for Skardu Valley",
      duration: "4 Days 3 Nights",
      location: "Skardu Valley",
      price: 0,
      image: "/hunza1.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 6,
      title: "5 Days By Air Honeymoon Package for Skardu Valley",
      duration: "5 Days 4 Nights",
      location: "Skardu Valley",
      price: 0,
      image: "/skardu1.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 7,
      title: "Soq Valley Tour",
      duration: "7 Days 6 Nights",
      location: "Soq Valley",
      price: 0,
      image: "/skardu1.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 8,
      title: "Nazbar Valley Tour",
      duration: "8 Days 7 Nights",
      location: "Nazbar Valley",
      price: 0,
      image: "/skardu1.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 9,
      title: "Khorkundus Valley Tour",
      duration: "7 Days 6 Nights",
      location: "Khorkundus Valley",
      price: 0,
      image: "/skardu1.jpg",
      rating: null,
      reviews: 0
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
            alt="Private Tours By Air"
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
              ✈️ TOWARDSDESTINATION.PK - Private Tours By Air
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Private Tours<br />
            <span className="bg-white text-red-600 px-4 py-2 inline-block rounded-lg mt-2">By Air Travel</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
            Experience the beauty of Northern Pakistan with our exclusive private tours by air. Fast, comfortable, and personalized journeys tailored just for you.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">9+</div>
              <div className="text-xs text-white/80 font-semibold">Tour Packages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">3-8</div>
              <div className="text-xs text-white/80 font-semibold">Days Duration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/80 font-semibold">Private & Custom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-linear-to-b from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              ✈️ AVAILABLE PRIVATE TOUR PACKAGES
            </span>
            <h2 className="text-4xl font-extrabold text-red-700 mb-4">
              Choose Your Perfect Air Tour
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              All packages include flights, accommodation, meals, and personalized service. Contact us for custom pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/private-tours/by-air/${pkg.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Plane className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-medium text-red-600">By Air</span>
                  </div>
                  {pkg.rating && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold">{pkg.rating}</span>
                      {pkg.reviews > 0 && (
                        <span className="text-xs text-gray-600">({pkg.reviews})</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-red-700 mb-3 group-hover:text-red-800 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-red-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-red-100">
                    <div>
                      {pkg.price > 0 ? (
                        <>
                          <p className="text-sm text-gray-600">Starting from</p>
                          <p className="text-2xl font-bold text-red-700">PKR {pkg.price.toLocaleString()}</p>
                        </>
                      ) : (
                        <p className="text-sm font-semibold text-red-600">Contact for Pricing</p>
                      )}
                    </div>
                    <div className="bg-red-600 group-hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Air Travel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-700 mb-12 text-center">
            Why Choose Private Tours By Air?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Save Time</h3>
              <p className="text-gray-600">
                Reach your destination in hours instead of days, maximizing your vacation time.
              </p>
            </div>
            <div className="text-center bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Aerial Views</h3>
              <p className="text-gray-600">
                Enjoy breathtaking views of mountain ranges and valleys from above.
              </p>
            </div>
            <div className="text-center bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Exclusive Experience</h3>
              <p className="text-gray-600">
                Private tours tailored to your preferences with personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

