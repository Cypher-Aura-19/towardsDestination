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
      title: "HUNZA & SKARDU — Private Tour by Air (07 Days)",
      duration: "7 Days 6 Nights",
      location: "HUNZA & SKARDU",
      price: 0,
      image: "/hs.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 2,
      title: "HUNZA VALLEY — Private Tour by Air (03 Days)",
      duration: "3 Days 2 Nights",
      location: "HUNZA",
      price: 0,
      image: "/h345.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 3,
      title: "HUNZA VALLEY — Private Tour by Air (04 Days)",
      duration: "4 Days 3 Nights",
      location: "HUNZA Valley",
      price: 0,
      image: "/h345.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 4,
      title: "HUNZA VALLEY — Private Tour by Air (05 Days)",
      duration: "5 Days 4 Nights",
      location: "HUNZA Valley",
      price: 0,
      image: "/huna.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 5,
      title: "SKARDU VALLEY — Private Tour by Air (04 Days)",
      duration: "4 Days 3 Nights",
      location: "SKARDU Valley",
      price: 0,
      image: "/ska345.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 6,
      title: "SKARDU VALLEY — Private Tour by Air (05 Days)",
      duration: "5 Days 4 Nights",
      location: "SKARDU Valley",
      price: 0,
      image: "/ska345.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 7,
      title: "SOQ VALLEY — Private Tour by Air (07 Days)",
      duration: "7 Days 6 Nights",
      location: "SOQ Valley",
      price: 0,
      image: "/temp.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 8,
      title: "NAZBAR VALLEY — Private Tour by Air (08 Days)",
      duration: "8 Days 7 Nights",
      location: "NAZBAR Valley",
      price: 0,
      image: "/temp.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 9,
      title: "KHORKUNDUS VALLEY — Private Tour by Air (07 Days)",
      duration: "7 Days 6 Nights",
      location: "KHORKUNDUS Valley",
      price: 0,
      image: "/temp.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 10,
      title: "FAIRY MEADOWS — Private Tour by Air (05 Days)",
      duration: "5 Days 4 Nights",
      location: "FAIRY MEADOWS & NANGA PARBAT",
      price: 0,
      image: "/fa.jpg",
      rating: null,
      reviews: 0
    },
    {
      id: 11,
      title: "ASTORE & MINIMARG — Private Tour by Air (05 Days)",
      duration: "5 Days 4 Nights",
      location: "ASTORE, MINIMARG & DEOSAI Plains",
      price: 0,
      image: "/asa.jpg",
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
            <span className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-md text-sm font-bold">
              ✈️ TOWARDSDESTINATION.PK - Private Tours By Air
            </span>
          </div>
          
          <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Private Tours<br />
            <span className="bg-white text-emerald-600 px-4 py-2 inline-block rounded-lg mt-2">By Air Travel</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
            Experience the beauty of Northern Pakistan with our exclusive private tours by air. Fast, comfortable, and personalized journeys tailored just for you.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white font-numbers">9+</div>
              <div className="text-xs text-white/80 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Tour Packages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white font-numbers">3-8</div>
              <div className="text-xs text-white/80 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Days Duration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white font-numbers">100%</div>
              <div className="text-xs text-white/80 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Private & Custom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 badge-premium" style={{ fontFamily: "'Poppins', sans-serif" }}>
              ✈️ AVAILABLE PRIVATE TOUR PACKAGES
            </span>
            <h2 className="text-4xl font-extrabold text-emerald-700 mb-4 section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Choose Your Perfect Air Tour
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
              All packages include flights, accommodation, meals, and personalized service. Contact us for custom pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/private-tours/by-air/${pkg.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
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
                    <Plane className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-600" style={{ fontFamily: "'Inter', sans-serif" }}>By Air</span>
                  </div>
                  {pkg.rating && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-black text-black" />
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
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{pkg.location}</span>
                  </div>
                  
                              <h3 className="card-title text-base text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors min-h-[3.5rem]">
  {/* Part 1: pkg.duration - Uses 'Dancing Script' and font-light */}
  <span style={{ fontFamily: 'Dancing Script, cursive' }} className="font-light">
    {pkg.duration.split(' ')[0]} {pkg.duration.split(' ')[1]}
  </span>
  {/* Part 2: Added <span> and font-normal for 'simple' style */}
  <span className="font-normal">{' By Air Private tour to '}</span>
  {/* Part 3: pkg.location - Uses font-medium */}
  <span className="">{pkg.location}</span>
</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-emerald-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
                    <div>
                      {pkg.price > 0 ? (
                        <>
                          <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Starting from</p>
                          <p className="text-2xl font-bold text-emerald-700 font-numbers">PKR {pkg.price.toLocaleString()}</p>
                        </>
                      ) : (
                        <p className="text-sm font-semibold text-emerald-600" style={{ fontFamily: "'Inter', sans-serif" }}>Contact for Pricing</p>
                      )}
                    </div>
                    <div className="bg-emerald-600 group-hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
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
          <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Why Choose Private Tours By Air?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2 card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Save Time</h3>
              <p className="text-gray-600 card-description" style={{ fontFamily: "'Inter', sans-serif" }}>
                Reach your destination in hours instead of days, maximizing your vacation time.
              </p>
            </div>
            <div className="text-center bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2 card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Aerial Views</h3>
              <p className="text-gray-600 card-description" style={{ fontFamily: "'Inter', sans-serif" }}>
                Enjoy breathtaking views of mountain ranges and valleys from above.
              </p>
            </div>
            <div className="text-center bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2 card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Exclusive Experience</h3>
              <p className="text-gray-600 card-description" style={{ fontFamily: "'Inter', sans-serif" }}>
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


