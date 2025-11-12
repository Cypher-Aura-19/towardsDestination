"use client";

import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[120px] overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main4.jpg"
          alt="Northern Pakistan"
          fill
          className="object-contain object-center"
          priority
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/60 via-red-900/30 to-black/60 z-10"></div>
        {/* Animated Shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-float z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float z-10" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-12 sm:py-20 min-h-screen flex flex-col justify-between">
        <div className="flex-1 flex items-center pt-4 sm:pt-8 w-full">
          <div className="max-w-3xl w-full">
            {/* Main Heading - Travel Agency Style */}
            <div className="mb-4 animate-fade-in-up">
              <span className="inline-block bg-white text-red-600 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                🌟 Pakistan's #1 Travel Company
              </span>
            </div>
            
            <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Explore Pakistan's<br />
              <span className="bg-white text-red-600 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 inline-block rounded-lg mt-2 text-[20px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl shadow-2xl hover:scale-105 transition-transform duration-300">Northern Beauty</span> & Beyond
            </h1>

            {/* Description */}
            <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl mb-6 max-w-2xl leading-relaxed font-medium animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Premium Tour Packages • Umrah Services • Luxury Hotels<br />
              <span className="bg-red-600/80 text-white px-2 sm:px-3 py-1 rounded-md inline-block mt-2 text-xs xs:text-sm sm:text-base animate-pulse-glow">Book Your Dream Journey Today!</span>
            </p>
            
            {/* Trust Badges - Travel Company Style */}
            <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-4 mb-8 w-full animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">15K+</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Happy Travelers</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">12+</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Years Experience</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">100%</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Licensed & Insured</div>
              </div>
            </div>

          </div>
        </div>

        {/* Search Destination Form at Bottom */}
         {/* Search Destination Form at Bottom */}
        <div className="pb-4 sm:pb-8 flex justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-6xl border border-gray-100 hover:shadow-red-500/20 transition-shadow duration-500">
            {/* Form Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6 text-center">
              Plan Your Journey
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Tour Type */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Tour Type</label>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 bg-white">
                  <option value="">Select Tour</option>
                  <option value="northern-road">Northern Pakistan (By Road)</option>
                  <option value="northern-air">Northern Pakistan (By Air)</option>
                  <option value="umrah">Umrah Package</option>
                  <option value="hotel">Hotel Stay</option>
                </select>
              </div>

              {/* Check In Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Check In</label>
                <input
                  type="date"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Check Out Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Check Out</label>
                <input
                  type="date"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Guests</label>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 bg-white">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 invisible">Search</label>
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 h-[46px]">
                  Search
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Additional Options */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-red-600 rounded focus:ring-2 focus:ring-red-600" />
                <span className="text-gray-700">Direct flights only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-red-600 rounded focus:ring-2 focus:ring-red-600" />
                <span className="text-gray-700">Include nearby airports</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-red-600 rounded focus:ring-2 focus:ring-red-600" />
                <span className="text-gray-700">Flexible dates</span>
              </label>
            </div>
          </div>
        </div>
   
   
      </div>
    </section>
  );
}
