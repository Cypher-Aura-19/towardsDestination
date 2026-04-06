"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Calendar, Heart } from "lucide-react";
import WhatsAppLogoIcon from "@/app/components/WhatsAppLogoIcon";
import Image from "next/image";
import Link from "next/link";

const packageDetails: any = {
  "1": {
    id: 1,
    title: "NARAN & SHOGRAN — Honeymoon Special Trip (03 Days)",
    location: "Naran & Shogran",
    duration: "3 Days 2 Nights",
    price: "PKR 105,000",
    image: "/hn3.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "2": {
    id: 2,
    title: "KUMRAT VALLEY — Honeymoon Special Trip (03 Days)",
    location: "Kumrat Valley",
    duration: "3 Days, 2 Nights",
    price: "PKR 125,000",
    image: "/hk3.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "3": {
    id: 3,
    title: "NATHIA GALI — Romantic Mountain Retreat (02 Days)",
    location: "Nathia Gali",
    duration: "2 Days 1 Night",
    price: "Contact for Pricing",
    image: "/hnath2.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "4": {
    id: 4,
    title: "MALAM JABBA — Honeymoon Special Trip (02 Days)",
    location: "Malam Jabba",
    duration: "2 Days 1 Night",
    price: "Contact for Pricing",
    image: "/hma2.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "5": {
    id: 5,
    title: "KASHMIR VALLEY — Honeymoon Special Trip (03 Days)",
    location: "Kashmir",
    duration: "3 Days 2 Nights",
    price: "Contact for Pricing",
    image: "/nel3.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "6": {
    id: 6,
    title: "SWAT & HUNZA — Honeymoon Tour by Road (07 Days)",
    location: "SWAT & HUNZA",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/hswh7.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "7": {
    id: 7,
    title: "SKARDU VALLEY — Honeymoon Special Trip (07 Days)",
    location: "SKARDU",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/hsk7.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "8": {
    id: 8,
    title: "HUNZA VALLEY — Honeymoon Tour by Road (06 Days)",
    location: "HUNZA Valley",
    duration: "6 Days 5 Nights",
    price: "Contact for Pricing",
    image: "/hh6.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "9": {
    id: 9,
    title: "HUNZA & SKARDU — Honeymoon Tour by Air (07 Days)",
    location: "HUNZA & SKARDU",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/hs.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "10": {
    id: 10,
    title: "HUNZA VALLEY — Honeymoon Tour by Air (03 Days)",
    location: "HUNZA",
    duration: "3 Days 2 Nights",
    price: "Contact for Pricing",
    image: "/hswh7.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "11": {
    id: 11,
    title: "HUNZA VALLEY — Honeymoon Tour by Air (04 Days)",
    location: "HUNZA Valley",
    duration: "4 Days 3 Nights",
    price: "Contact for Pricing",
    image: "/hswh7.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "12": {
    id: 12,
    title: "SKARDU VALLEY — Honeymoon Tour by Air (05 Days)",
    location: "SKARDU Valley",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/hs.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "13": {
    id: 13,
    title: "SKARDU VALLEY — Honeymoon Tour by Air (04 Days)",
    location: "SKARDU Valley",
    duration: "4 Days 3 Nights",
    price: "Contact for Pricing",
    image: "/hs.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "14": {
    id: 14,
    title: "SWAT, HUNZA & SKARDU — Grand Honeymoon Tour (10 Days)",
    location: "SWAT, HUNZA & SKARDU",
    duration: "10 Days 9 Nights",
    price: "Contact for Pricing",
    image: "/sw5.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "15": {
    id: 15,
    title: "SKARDU VALLEY — Honeymoon Special Trip (06 Days)",
    location: "SKARDU Valley",
    duration: "6 Days 5 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "16": {
    id: 16,
    title: "SWAT, SHOGRAN & KASHMIR — Honeymoon Tour (07 Days)",
    location: "SWAT, Shogran & Kashmir",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "17": {
    id: 17,
    title: "SWAT & SHOGRAN — Honeymoon Special Trip (05 Days)",
    location: "SWAT & Shogran",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/sw5.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "18": {
    id: 18,
    title: "HUNZA VALLEY — Honeymoon Special Trip (05 Days)",
    location: "HUNZA Valley",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/hh6.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "19": {
    id: 19,
    title: "HUNZA & SKARDU — Honeymoon Special Trip (08 Days)",
    location: "HUNZA & SKARDU",
    duration: "8 Days 7 nights",
    price: "Contact for Pricing",
    image: "/h8.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "20": {
    id: 20,
    title: "KASHMIR — Arang Kel, Taobat & Ratti Gali Tour (05 Days)",
    location: "Kashmir",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/honey.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package"
  },
  "21": {
    id: 21,
    title: "KASHMIR VALLEY — Couple Special Tour (05 Days)",
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
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/70 via-emerald-900/60 to-rose-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg border border-white/30 badge-premium" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <Heart className="w-5 h-5" />
              Honeymoon Packages
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Romantic Honeymoon Tours
          </h1>
          
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8 drop-shadow-md font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
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
                  <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Honeymoon
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="card-title text-base text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors min-h-[3.5rem]">
  {/* Part 1: Main Title - Retains default size (text-base) */}
  <span className="">{pkg.title.split('—')[0].trim()}</span>
  {pkg.title.includes('—') && (
    <>
      {' — '}
      {/* Part 2: Middle Section - Uses text-sm for smaller size */}
      <span className="font-normal">{pkg.title.split('—')[1].split('(')[0].trim()}</span>
      {pkg.title.includes('(') && (
        <>
          {' '}
          {/* Part 3: Parentheses Text - Uses 'Dancing Script' */}
          <span style={{ fontFamily: 'Dancing Script, cursive' }} className="font-light">
            ({pkg.title.match(/\(([^)]+)\)/)?.[1]})
          </span>
        </>
      )}
    </>
  )}
</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-sm font-label" style={{ fontFamily: "'Inter', sans-serif" }}>{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-sm font-label" style={{ fontFamily: "'Inter', sans-serif" }}>{pkg.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500">Pricing</div>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="Get latest price on WhatsApp"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const message = `Hello! I want latest price for ${pkg.title}.`;
                        window.open(`https://wa.me/923153309070?text=${encodeURIComponent(message)}`, "_blank");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          const message = `Hello! I want latest price for ${pkg.title}.`;
                          window.open(`https://wa.me/923153309070?text=${encodeURIComponent(message)}`, "_blank");
                        }
                      }}
                      className="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-sm ring-1 ring-emerald-500/40 transition-all duration-300 cursor-pointer"
                    >
                      <WhatsAppLogoIcon className="w-4 h-4" />
                    </span>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Ready to Plan Your Dream Honeymoon?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
            Contact us today to customize your perfect romantic getaway
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
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

