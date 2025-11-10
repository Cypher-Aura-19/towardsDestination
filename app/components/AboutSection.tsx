"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    {
      value: "12+",
      label: "Years of Experience"
    },
    {
      value: "120+",
      label: "Destination Countries"
    },
    {
      value: "15K+",
      label: "Satisfied Clients"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center animate-fade-in-up">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="text-red-600 font-bold text-sm">TOWARDSDESTINATION.PK</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-600 text-sm">Let's have an Adventure</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Your Trusted Travel<br />
              Partner in Pakistan</span>

            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At TOWARDSDESTINATION.PK, we specialize in creating unforgettable journeys across Pakistan's northern regions and sacred Umrah pilgrimages. With years of experience and dedicated service, we're your trusted companion for every adventure.
            </p>
            
            {/* Registration Badge */}
            <div className="bg-white border border-red-600 rounded-lg p-4 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-sm font-semibold text-red-600 mb-1">Officially Registered & Certified</p>
              <p className="text-sm text-gray-600">FBR • SECP • DTS for Travel • Nadra</p>
            </div>
            <a href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Side - Image Grid and Stats */}
          <div className="relative flex gap-6 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Top Left Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/hunza.jpg"
                  alt="Hunza Valley"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Top Right Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/skardu.jpg"
                  alt="Skardu"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/photography.jpg"
                  alt="Photography"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src="/naran.jpg"
                  alt="Naran Kaghan"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Stats - Positioned on the right side */}
            <div className="flex flex-col justify-center space-y-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <p className="text-4xl lg:text-5xl font-bold text-red-600 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600 whitespace-nowrap">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
