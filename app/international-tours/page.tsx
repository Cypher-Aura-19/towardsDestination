"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Plane, Calendar, Hotel, Check, Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InternationalToursPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [showUmrahPackages, setShowUmrahPackages] = useState(false);
  const internationalTours = [
    {
      id: 1,
      name: "Baku Azerbaijan Tour",
      duration: "5 Days / 4 Nights",
      price: "PKR 249,999",
      priceUSD: "$877",
      category: "Cultural Experience",
      popular: true,
      image: "/A.jpg",
      destination: "Baku, Azerbaijan",
      type: "baku",
      highlights: [
        "Round-trip airfare included",
        "4-star hotel accommodation",
        "Daily breakfast included",
        "Visit to Old City (Icherisheher)",
        "Flame Towers & Highland Park",
        "Gobustan National Park tour",
        "Baku Boulevard & Carpet Museum",
        "Professional tour guide",
        "Airport transfers included"
      ]
    },
    {
      id: 2,
      name: "Turkey Tours 2024-2025",
      duration: "5-7 Days Options",
      price: "PKR 339,999",
      priceUSD: "$1,193",
      category: "Multiple Options",
      popular: true,
      image: "/T.jpg",
      destination: "Istanbul & Cappadocia, Turkey",
      type: "turkey",
      isMultiPackage: true,
      packageCount: "2 Package Options",
      highlights: [
        "5-Day Istanbul Special Package",
        "7-Day Grand Tour with Cappadocia",
        "Round-trip airfare included",
        "4-star hotel accommodation",
        "Blue Mosque & Hagia Sophia tours",
        "Topkapi Palace & Grand Bazaar",
        "Hot air balloon ride (7-day tour)",
        "Bosphorus cruise included",
        "Professional English-speaking guide"
      ]
    },
    {
      id: 3,
      name: "Indonesia Bali Paradise",
      duration: "5 Days / 4 Nights",
      price: "PKR 299,999",
      priceUSD: "$1,053",
      category: "Tropical Paradise",
      popular: true,
      image: "/bali.jpg",
      destination: "Bali, Indonesia",
      type: "bali",
      highlights: [
        "Round-trip airfare included",
        "4-star beachfront resort",
        "Daily breakfast included",
        "Ubud rice terraces & monkey forest",
        "Tanah Lot temple sunset tour",
        "Traditional Balinese spa session",
        "Water sports at Nusa Dua beach",
        "Uluwatu temple & Kecak dance",
        "All transfers & guided tours"
      ]
    },
    {
      id: 4,
      name: "Turkey Istanbul Special - Hidden",
      duration: "5 Days / 4 Nights",
      price: "PKR 160,000",
      priceUSD: "$561",
      category: "City Break",
      hidden: true,
      image: "/T.jpg",
      destination: "Istanbul, Turkey",
      type: "turkey",
      highlights: [
        "Round-trip economy airfare",
        "4-star hotel in Sultanahmet area",
        "Breakfast included daily",
        "Guided city tour of Istanbul",
        "Blue Mosque & Hagia Sophia",
        "Topkapi Palace entrance",
        "Grand Bazaar shopping tour",
        "Bosphorus boat cruise",
        "Airport transfers included"
      ]
    },
    {
      id: 5,
      name: "Maldives Male Luxury Escape",
      duration: "5 Days / 4 Nights",
      price: "PKR 299,999",
      priceUSD: "$1,053",
      category: "Luxury Beach Resort",
      popular: true,
      image: "/maldives.jpg",
      destination: "Male, Maldives",
      type: "maldives",
      highlights: [
        "Round-trip airfare included",
        "5-star overwater villa resort",
        "All-inclusive meal plan",
        "Private speedboat transfers",
        "Snorkeling & diving excursions",
        "Sunset dolphin cruise",
        "Spa & wellness treatments",
        "Water sports activities",
        "Romantic beach dinner setup"
      ]
    },
    {
      id: 6,
      name: "Dubai Luxury Experience",
      duration: "5 Days / 4 Nights",
      price: "PKR 249,999",
      priceUSD: "$877",
      category: "Luxury & Shopping",
      image: "/dubai.jpeg",
      destination: "Dubai, UAE",
      type: "dubai",
      highlights: [
        "Round-trip airfare included",
        "5-star hotel accommodation",
        "Daily breakfast at hotel",
        "Burj Khalifa 124th floor tickets",
        "Desert safari with BBQ dinner",
        "Dubai Mall & Gold Souk tours",
        "Dubai Marina dhow cruise",
        "Palm Jumeirah & Atlantis visit",
        "All transfers in luxury vehicles"
      ]
    }
  ];

  const umrahPackages = [
    {
      id: 1,
      name: "Economy Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 220,000",
      category: "Budget Friendly",
      image: "/umrah.jpg",
      type: "umrah",
      makkahHotel: "3-Star Hotel (500m from Haram)",
      madinahHotel: "3-Star Hotel (300m from Masjid Nabawi)",
      highlights: [
        "Round-trip economy class airfare",
        "3-star hotel accommodation",
        "Breakfast & dinner included",
        "Complete visa processing",
        "Airport transfers in Saudi Arabia",
        "Ziyarat tours in Makkah & Madinah",
        "Experienced multilingual guide",
        "24/7 customer support"
      ]
    },
    {
      id: 2,
      name: "Standard Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 280,000",
      category: "Most Popular",
      popular: true,
      image: "/umrah.jpg",
      type: "umrah",
      makkahHotel: "4-Star Hotel (300m from Haram)",
      madinahHotel: "4-Star Hotel (200m from Masjid Nabawi)",
      highlights: [
        "Round-trip economy class airfare",
        "4-star hotel accommodation",
        "All meals included (breakfast, lunch, dinner)",
        "Complete visa processing assistance",
        "Private airport transfers",
        "Comprehensive Ziyarat tours",
        "Professional tour guide",
        "Travel insurance included",
        "Laundry service"
      ]
    },
    {
      id: 3,
      name: "Premium Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 350,000",
      category: "Luxury Experience",
      image: "/umrah.jpg",
      type: "umrah",
      makkahHotel: "5-Star Hotel (Walking distance to Haram)",
      madinahHotel: "5-Star Hotel (Walking distance to Masjid Nabawi)",
      highlights: [
        "Round-trip business class airfare",
        "5-star luxury hotel accommodation",
        "All meals at hotel restaurants",
        "VIP visa processing",
        "Private luxury vehicle transfers",
        "Exclusive Ziyarat tours",
        "Dedicated personal guide",
        "Premium travel insurance",
        "Daily laundry & room service",
        "Special amenities package"
      ]
    },
    {
      id: 4,
      name: "Ramadan Special Package",
      duration: "20 Days / 19 Nights",
      price: "PKR 320,000",
      category: "Seasonal",
      image: "/umrah.jpg",
      type: "umrah",
      makkahHotel: "4-Star Hotel (400m from Haram)",
      madinahHotel: "4-Star Hotel (250m from Masjid Nabawi)",
      highlights: [
        "Extended stay for Ramadan",
        "Round-trip airfare included",
        "4-star hotel accommodation",
        "Suhoor & Iftar arrangements",
        "Complete visa processing",
        "Airport & local transfers",
        "Ziyarat tours included",
        "Taraweeh prayer arrangements",
        "Special Ramadan guide services"
      ]
    },
    {
      id: 5,
      name: "Family Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 260,000",
      category: "Family Special",
      image: "/umrah.jpg",
      type: "umrah",
      makkahHotel: "4-Star Hotel with family rooms",
      madinahHotel: "4-Star Hotel with family rooms",
      highlights: [
        "Special family room arrangements",
        "Round-trip airfare for all members",
        "4-star family-friendly hotels",
        "All meals included",
        "Child-friendly Ziyarat tours",
        "Complete visa processing for family",
        "Private family transport",
        "Experienced family guide",
        "Special discounts for children"
      ]
    },
    {
      id: 6,
      name: "Short Umrah Package",
      duration: "10 Days / 9 Nights",
      price: "PKR 180,000",
      category: "Quick Trip",
      image: "/umrah.jpg",
      type: "umrah",
      makkahHotel: "3-Star Hotel (600m from Haram)",
      madinahHotel: "3-Star Hotel (400m from Masjid Nabawi)",
      highlights: [
        "Ideal for limited time travelers",
        "Round-trip economy airfare",
        "3-star hotel accommodation",
        "Breakfast included",
        "Complete visa processing",
        "Airport transfers",
        "Essential Ziyarat tours",
        "Professional guide services"
      ]
    }
  ];

  const ziyadatPlaces = [
    "Jabal al-Nour (Cave of Hira)",
    "Jabal Thawr",
    "Masjid Quba",
    "Masjid Qiblatain",
    "Uhud Mountain & Martyrs Cemetery",
    "Masjid Jinn",
    "Jannat al-Baqi",
    "Historical Islamic sites"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/umrah.jpg"
            alt="International Tours"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Company Name - More Visible */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              TOWARDSDESTINATION.PK
            </h2>
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-bold">
              🌍 International Tours
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Explore the World<br />
            <span className="bg-white text-red-600 px-4 py-2 inline-block rounded-lg mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>With Premium Packages</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
         Explore the World with Towardsdestination.pk, Join our International Tour Packages.
From the Spiritual Journey of Umrah, Cultural wonders of Turkey and Baku to the Nature of Maldives and Baki, we offer complete Travel Solutions with Flights Assistance, Hotel Accommodations and Guide Assistance 24/7
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-white/80 font-semibold">Destinations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">5-7</div>
              <div className="text-xs text-white/80 font-semibold">Days Tours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/80 font-semibold">Visa Assistance</div>
            </div>
          </div>
        </div>
      </section>


      {/* International Tours Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              ✈️ EXPLORE THE WORLD
            </span>
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              International Tour Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover amazing destinations with our all-inclusive international tour packages featuring flights, hotels, and guided tours.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeTab === "all"
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Packages
              </button>
              <button
                onClick={() => setActiveTab("umrah")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeTab === "umrah"
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                 Umrah
              </button>
              <button
                onClick={() => setActiveTab("turkey")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeTab === "turkey"
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                 Turkey
              </button>
              <button
                onClick={() => setActiveTab("baku")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeTab === "baku"
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                 Baku
              </button>
              <button
                onClick={() => setActiveTab("bali")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeTab === "bali"
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                 Bali
              </button>
              <button
                onClick={() => setActiveTab("maldives")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeTab === "maldives"
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                 Maldives
              </button>
              <button
                onClick={() => setActiveTab("dubai")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeTab === "dubai"
                    ? "bg-red-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                 Dubai
              </button>
            </div>
          </div>

          <div className="space-y-8 mb-20">
            {internationalTours
              .filter((tour) => !tour.hidden && (activeTab === "all" || tour.type === activeTab))
              .map((tour) => (
              <div 
                key={tour.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                  tour.popular ? 'ring-2 ring-red-600' : ''
                }`}
              >
                {tour.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-white" />
                      {tour.isMultiPackage ? tour.packageCount : 'Most Popular'}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto lg:col-span-5">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-medium text-red-600">{tour.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:col-span-7">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-red-600 mb-2">
                          {tour.name}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{tour.destination}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-red-600 mb-3">Package Includes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {tour.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Starting from</p>
                        <p className="text-3xl font-bold text-red-600">{tour.price}</p>
                        {tour.priceUSD && (
                          <p className="text-lg text-gray-500">({tour.priceUSD} USD)</p>
                        )}
                        <p className="text-sm text-gray-600">per person</p>
                      </div>
                      <div className="flex gap-3">
                        <Link 
                          href={tour.isMultiPackage ? `/international-tours/turkey` : `/international-tours/${tour.id}`}
                          className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                        >
                          View Details
                        </Link>
                        <Link 
                          href={tour.isMultiPackage ? `/international-tours/turkey` : `/international-tours/${tour.id}`}
                          className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Umrah Packages Section */}
          {(activeTab === "all" || activeTab === "umrah") && (
            <>
              <div className="text-center mb-12 mt-20">
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  🕋 SACRED JOURNEY
                </span>
                <h2 className="text-4xl font-bold text-red-600 mb-4">
                  Umrah Packages
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Select from our range of carefully curated Umrah packages designed to suit different needs and budgets.
                </p>
              </div>

              {/* Single Consolidated Umrah Card */}
              <Link href="/international-tours/umrah">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ring-2 ring-red-600 mb-8 cursor-pointer">
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-white" />
                      6 Package Options
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Image */}
                    <div className="relative h-80 lg:h-auto lg:col-span-5">
                      <Image
                        src="/umrah.jpg"
                        alt="Umrah Packages"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-sm font-medium text-red-600">Multiple Options Available</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:col-span-7">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-red-600 mb-2">
                            Umrah Packages 2024-2025
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">10-20 Days Options Available</span>
                          </div>
                        </div>
                      </div>

                      {/* Package Types */}
                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <p className="text-gray-700 mb-4">Choose from 6 carefully designed packages:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {umrahPackages.map((pkg) => (
                            <div key={pkg.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                              <p className="text-xs font-semibold text-red-600 mb-1">{pkg.name}</p>
                              <p className="text-xs text-gray-600">{pkg.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Round-trip airfare included</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>3 to 5-star hotel options</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Complete visa processing</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Ziyarat tours included</span>
                        </li>
                      </ul>

                      {/* Price & Button */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Starting from</p>
                          <p className="text-3xl font-bold text-red-600">PKR 180,000</p>
                          <p className="text-xs text-gray-500 mt-1">per person</p>
                        </div>
                        <div className="flex gap-3">
                          <span className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                            View Details
                          </span>
                          <span className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                            Book Now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Remove expandable section - now goes to detail page */}
              <div className="space-y-8 mb-8 hidden">
                {umrahPackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative ${
                  pkg.popular ? 'ring-2 ring-red-600' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 fill-white" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image - Wider */}
                  <div className="relative h-80 lg:h-auto lg:col-span-5">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-red-600">{pkg.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:col-span-7">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-red-600 mb-2">
                          {pkg.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{pkg.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hotels */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Hotel className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-red-600 text-sm mb-1">Makkah</p>
                          <p className="text-gray-600 text-sm">{pkg.makkahHotel}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Hotel className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-red-600 text-sm mb-1">Madinah</p>
                          <p className="text-gray-600 text-sm">{pkg.madinahHotel}</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {pkg.highlights.slice(0, 4).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Starting from</p>
                        <p className="text-3xl font-bold text-red-600">{pkg.price}</p>
                        <p className="text-xs text-gray-500 mt-1">per person</p>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
            </>
          )}
        </div>
      </section>

      {/* Ziyarat Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Ziyarat Tours Included
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                All our packages include comprehensive Ziyarat tours to important Islamic historical sites in Makkah and Madinah, guided by knowledgeable scholars.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ziyadatPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{place}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/umrah.jpg"
                alt="Ziyarat Tours"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today to book your Umrah package or get a customized quote for your group.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full font-medium transition-colors">
              Book Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-medium transition-colors">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
