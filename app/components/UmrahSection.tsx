"use client";

import { Plane, Calendar, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function UmrahSection() {
  const features = [
    "Round-trip airfare included",
    "4-star hotel accommodation in Makkah & Madinah",
    "Complete visa processing assistance",
    "Ground transportation & airport transfers",
    "Experienced multilingual tour guides",
    "Ziyarat tours to historical Islamic sites",
    "24/7 customer support during journey"
  ];

  return (
    <section className="py-12 sm:py-20 bg-linear-to-b from-white via-red-50 to-red-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-25 animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <span className="inline-block bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse-glow">
            🕋 UMRAH PACKAGES 2024-2025
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Sacred Journey to Makkah & Madinah</span>

          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Complete Umrah packages with visa processing, flights, 4-5 star hotels, and guided Ziyarat tours. Book your spiritual journey today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {/* Left Side - Content */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl border border-red-200 hover:shadow-2xl hover:border-red-300 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🕋</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-600">Premium Umrah Services</h3>
                <p className="text-sm text-gray-600 font-semibold">Ministry Approved Travel Agent</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Experience a hassle-free spiritual journey with our all-inclusive Umrah packages. We handle everything from visa processing to accommodation.
            </p>

            {/* Duration & Price */}
            <div className="bg-linear-to-br from-red-100 via-red-50 to-white rounded-2xl p-6 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">15 Days Package</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-medium text-gray-600">By Air</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-red-600">PKR 250,000</p>
                  </div>
                  <span className="text-gray-600">/person</span>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-600 mb-4">Package Includes</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow">
                Book Umrah Package
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                View Details
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative animate-fade-in-right" style={{animationDelay: '0.4s'}}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-shadow duration-500 group">
              <Image
                src="/umrah.jpg"
                alt="Umrah Package"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">500+</p>
                  <p className="text-sm text-gray-600">Pilgrims Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
