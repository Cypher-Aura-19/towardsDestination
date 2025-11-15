"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Calendar, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const packageDetails: any = {
  "1": {
    id: 1,
    title: "Nathia Gali Honeymoon Package – A Romantic Mountain Retreat",
    location: "Nathia Gali",
    duration: "2 Days 1 Night",
    price: "Contact for Pricing",
    image: "/naran1.jpg",
    groupSize: "2 people",
    tourType: "Luxury Package"
  },
  "2": {
    id: 2,
    title: "Malam Jabba Honeymoon Tour Package (2 Days)",
    location: "Malam Jabba",
    duration: "2 Days 1 Night",
    price: "Contact for Pricing",
    image: "/swat.jpg",
    groupSize: "2 people",
    tourType: "Luxury Package"
  },
  "3": {
    id: 3,
    title: "Honeymoon Tour Package: Swat, Kalam & Malam Jabba (3 Days)",
    location: "Swat Valley",
    duration: "3 Days 2 Nights",
    price: "Contact for Pricing",
    image: "/swat.jpg",
    groupSize: "2 people",
    tourType: "Luxury Package"
  },
  "4": {
    id: 4,
    title: "Honeymoon Package for Swat Valley & Shogran Valley (05 Days)",
    location: "Swat & Shogran",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/swat.jpg",
    groupSize: "2 people",
    tourType: "Luxury Package"
  },
  "5": {
    id: 5,
    title: "Explore Pakistan: Hunza | Skardu | Islamabad (12 Days Trip: By Road)",
    location: "Hunza, Skardu & Islamabad",
    duration: "12 Days 10 Nights",
    price: "Contact for Pricing",
    image: "/hunza1.jpg",
    groupSize: "Flexible",
    tourType: "Luxury Package"
  },
  "6": {
    id: 6,
    title: "Islamabad Tour – 04 Days",
    location: "Islamabad",
    duration: "4 Day 3 Night",
    price: "Contact for Pricing",
    image: "/hero.jpg",
    groupSize: "Flexible",
    tourType: "Luxury Package"
  }
};

export default function LuxuryToursPage() {
  const packages = Object.values(packageDetails);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hunza1.jpg"
            alt="Luxury Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-yellow-900/60 to-orange-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg border border-white/30">
              <Star className="w-5 h-5" />
              Luxury Tours
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Premium Luxury Tours
          </h1>
          
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Experience Pakistan's beauty in ultimate comfort and style. Our luxury tours offer 
            premium accommodations, exclusive experiences, and personalized service.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
              <Star className="w-5 h-5 text-white" />
              <span className="font-semibold">5-Star Accommodations</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
              <MapPin className="w-5 h-5 text-white" />
              <span className="font-semibold">Exclusive Destinations</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
              <Calendar className="w-5 h-5 text-white" />
              <span className="font-semibold">Personalized Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Luxury Tour Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Indulge in the finest travel experiences with our carefully curated luxury packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg: any) => (
            <Link 
              key={pkg.id} 
              href={`/private-tours/luxury/${pkg.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Luxury
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                  {pkg.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Luxury Tours?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Accommodations</h3>
              <p className="text-gray-600">
                Stay in the finest 5-star hotels and luxury resorts with world-class amenities
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Experiences</h3>
              <p className="text-gray-600">
                Access to VIP locations and unique experiences not available to regular tourists
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Dedicated tour managers and 24/7 concierge service for your comfort
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Luxury Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to plan your exclusive luxury tour
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <a 
              href="https://wa.me/923153309070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
