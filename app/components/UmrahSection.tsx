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
    <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4">
            🕋 UMRAH PACKAGES 2024-2025
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Sacred Journey to Makkah & Madinah
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Complete Umrah packages with visa processing, flights, 4-5 star hotels, and guided Ziyarat tours. Book your spiritual journey today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🕋</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Premium Umrah Services</h3>
                <p className="text-sm text-gray-600 font-semibold">Ministry Approved Travel Agent</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Experience a hassle-free spiritual journey with our all-inclusive Umrah packages. We handle everything from visa processing to accommodation.
            </p>

            {/* Duration & Price */}
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">15 Days Package</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-gray-900" />
                  <span className="text-sm font-medium text-gray-600">By Air</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-gray-900">PKR 250,000</p>
                  </div>
                  <span className="text-gray-600">/person</span>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Package Includes</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                Book Umrah Package
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-full font-medium transition-colors">
                View Details
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/umrah.jpg"
                alt="Umrah Package"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
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
