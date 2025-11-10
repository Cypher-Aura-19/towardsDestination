"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Plane, Calendar, Users, MapPin, Check, Star, Hotel, Utensils } from "lucide-react";
import Image from "next/image";

export default function UmrahPackages() {
  const packages = [
    {
      id: 1,
      name: "Economy Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 220,000",
      category: "Budget Friendly",
      image: "/umrah.jpg",
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
            alt="Umrah Packages"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-gray-900" />
            </div>
            <span className="text-white/90 text-sm font-medium">Sacred Journey</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Umrah Packages<br />
            <span className="text-white/90">2024-2025</span>
          </h1>
          <p className="text-white/95 text-lg max-w-2xl">
            Embark on a spiritual journey with our comprehensive Umrah packages. 
            We handle all arrangements so you can focus on your worship and spiritual growth.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our range of carefully curated Umrah packages designed to suit different needs and budgets.
            </p>
          </div>

          <div className="space-y-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative ${
                  pkg.popular ? 'ring-2 ring-gray-900' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
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
                      <span className="text-sm font-medium text-gray-900">{pkg.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:col-span-7">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
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
                          <Hotel className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm mb-1">Makkah</p>
                          <p className="text-gray-600 text-sm">{pkg.makkahHotel}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Hotel className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm mb-1">Madinah</p>
                          <p className="text-gray-600 text-sm">{pkg.madinahHotel}</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {pkg.highlights.slice(0, 4).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-gray-900 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Starting from</p>
                        <p className="text-3xl font-bold text-gray-900">{pkg.price}</p>
                        <p className="text-xs text-gray-500 mt-1">per person</p>
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

      {/* Ziyarat Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ziyarat Tours Included
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                All our packages include comprehensive Ziyarat tours to important Islamic historical sites in Makkah and Madinah, guided by knowledgeable scholars.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ziyadatPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-900 flex-shrink-0" />
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

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What's Included in All Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flights</h3>
              <p className="text-gray-600 text-sm">
                Round-trip airfare from Pakistan to Saudi Arabia
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hotel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accommodation</h3>
              <p className="text-gray-600 text-sm">
                Quality hotels near Haram & Masjid Nabawi
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Meals</h3>
              <p className="text-gray-600 text-sm">
                Daily meals as per package selection
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Guide</h3>
              <p className="text-gray-600 text-sm">
                Experienced multilingual tour guide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today to book your Umrah package or get a customized quote for your group.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors">
              Book Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-medium transition-colors">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
