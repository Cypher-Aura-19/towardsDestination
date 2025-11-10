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
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
              <span className="text-gray-900 font-bold text-sm">TOWARDSDESTINATION.PK</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-600 text-sm">Let's have an Adventure</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Travel<br />
              Partner in Pakistan
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At TOWARDSDESTINATION.PK, we specialize in creating unforgettable journeys across Pakistan's northern regions and sacred Umrah pilgrimages. With years of experience and dedicated service, we're your trusted companion for every adventure.
            </p>
            
            {/* Registration Badge */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-8">
              <p className="text-sm font-semibold text-white mb-1">Officially Registered & Certified</p>
              <p className="text-sm text-gray-300">FBR • SECP • DTS for Travel • Nadra</p>
            </div>
            <a href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-bold text-lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Side - Image Grid and Stats */}
          <div className="relative flex gap-6">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Top Left Image */}
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src="/hunza.jpg"
                  alt="Hunza Valley"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top Right Image */}
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src="/skardu.jpg"
                  alt="Skardu"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src="/photography.jpg"
                  alt="Photography"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src="/naran.jpg"
                  alt="Naran Kaghan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats - Positioned on the right side */}
            <div className="flex flex-col justify-center space-y-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <p className="text-4xl lg:text-5xl font-bold text-gray-900 mb-1">{stat.value}</p>
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
