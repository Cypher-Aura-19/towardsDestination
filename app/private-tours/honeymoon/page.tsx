"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Calendar, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const packageDetails: any = {
  "1": {
    id: 1,
    title: "Naran & Shogran Honeymoon Tour Package (3 Days)",
    location: "Naran & Shogran",
    duration: "3 Days 2 Nights",
    price: "PKR 105,000",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "2": {
    id: 2,
    title: "Kumrat Honeymoon Tour Package (3 Days)",
    location: "Kumrat Valley",
    duration: "3 Days, 2 Nights",
    price: "PKR 125,000",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "3": {
    id: 3,
    title: "Nathia Gali Honeymoon Package – A Romantic Mountain Retreat",
    location: "Nathia Gali",
    duration: "2 Days 1 Night",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "4": {
    id: 4,
    title: "Malam Jabba Honeymoon Tour Package (2 Days)",
    location: "Malam Jabba",
    duration: "2 Days 1 Night",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "5": {
    id: 5,
    title: "Kashmir Honeymoon Tour Package (3 Days)",
    location: "Kashmir",
    duration: "3 Days 2 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "6": {
    id: 6,
    title: "7 Days Honeymoon Tour for Swat & Hunza (by Road)",
    location: "Swat & Hunza",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "7": {
    id: 7,
    title: "7 Days Skardu Honeymoon Tour",
    location: "Skardu",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "8": {
    id: 8,
    title: "Honeymoon Tour to Hunza Valley 6 Days– By Road",
    location: "Hunza Valley",
    duration: "6 Days 5 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "9": {
    id: 9,
    title: "Honeymoon in Hunza & Skardu 7 Days – By Air",
    location: "Hunza & Skardu",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "10": {
    id: 10,
    title: "3-Day Honeymoon in Hunza – By Air",
    location: "Hunza",
    duration: "3 Days 2 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "11": {
    id: 11,
    title: "4 Days By Air Honeymoon Package for Hunza Valley",
    location: "Hunza Valley",
    duration: "4 Days 3 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "12": {
    id: 12,
    title: "5 Days By Air Honeymoon Package for Skardu Valley",
    location: "Skardu Valley",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "13": {
    id: 13,
    title: "4 Days By Air Honeymoon Package for Skardu Valley",
    location: "Skardu Valley",
    duration: "4 Days 3 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "14": {
    id: 14,
    title: "10 Days Honeymoon Tour for Swat, Hunza & Skardu Valley",
    location: "Swat, Hunza & Skardu",
    duration: "10 Days 9 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "15": {
    id: 15,
    title: "6 Days Honeymoon Package for Skardu Valley",
    location: "Skardu Valley",
    duration: "6 Days 5 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "16": {
    id: 16,
    title: "Honeymoon Tour Package: Swat , Shogran | Kashmir (7 Days)",
    location: "Swat, Shogran & Kashmir",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "17": {
    id: 17,
    title: "Honeymoon Package for Swat Valley & Shogran Valley (05 Days)",
    location: "Swat & Shogran",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "18": {
    id: 18,
    title: "5 Days Honeymoon Package for Hunza Valley",
    location: "Hunza Valley",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "19": {
    id: 19,
    title: "8 Days Honeymoon Package for Hunza Valley and Skardu Valley",
    location: "Hunza & Skardu",
    duration: "8 Days 7 nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "20": {
    id: 20,
    title: "Arang Kel, Taobat, Ratti Gali Tour – 05 Days",
    location: "Kashmir",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "21": {
    id: 21,
    title: "Couple Tour To Kashmir From Islamabad – 05 Days",
    location: "Kashmir",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  }
};

export default function HoneymoonToursPage() {
  const packages = Object.values(packageDetails);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/honeymoon_hero.webp"
            alt="Honeymoon Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/70 via-red-900/60 to-rose-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg border border-white/30">
              <Heart className="w-5 h-5" />
              Honeymoon Packages
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Romantic Honeymoon Tours
          </h1>
          
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Create unforgettable memories with our specially curated honeymoon packages. 
            Experience romance, adventure, and luxury in Pakistan's most beautiful destinations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
              <Heart className="w-5 h-5 text-white" />
              <span className="font-semibold">Romantic Destinations</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
              <MapPin className="w-5 h-5 text-white" />
              <span className="font-semibold">Premium Accommodations</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
              <Calendar className="w-5 h-5 text-white" />
              <span className="font-semibold">Flexible Dates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg: any) => (
            <Link 
              key={pkg.id} 
              href={`/private-tours/honeymoon/${pkg.id}`}
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
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Honeymoon
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {pkg.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500">Starting from</div>
                    <div className="text-xl font-bold text-red-600">{pkg.price}</div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Plan Your Dream Honeymoon?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to customize your perfect romantic getaway
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
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
