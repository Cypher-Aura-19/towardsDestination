"use client";

import { ArrowRight, Users, MapPin, Home, Headphones, Play } from "lucide-react";
import Image from "next/image";

export default function WhyChooseSection() {
  const features = [
    {
      id: 1,
      icon: Users,
      title: "Expert Travel Guides",
      description: "Hey, you've gotta check out these awesome tips and local hacks for a trip you won't forget!",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      icon: MapPin,
      title: "Customizable Itineraries",
      description: "Turn your trip into your own adventure – switch things up however you like!",
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      icon: Home,
      title: "Handpicked Destinations",
      description: "Hey, you gotta see some of the wildest and most unique spots on the planet!",
      color: "bg-red-100 text-red-600"
    },
    {
      id: 4,
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "You can totally rely on our awesome team to help you out whenever you need!",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 animate-fade-in-up">
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="text-red-600 font-bold text-sm">TOWARDSDESTINATION.PK</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-red-600 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We're Pakistan's trusted travel partner, offering exceptional service, local expertise, and unforgettable experiences for over a decade. Officially registered with FBR, SECP, DTS & Nadra.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Video Section */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-12 group cursor-pointer shadow-2xl hover:shadow-red-500/20 transition-shadow duration-500 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Image
            src="/hero.jpg"
            alt="Why Choose Towards Destination"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-xl animate-pulse-glow">
              <Play className="w-10 h-10 text-red-600 fill-red-600 ml-1" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id}
                className="flex gap-4 items-start animate-fade-in-up"
                style={{animationDelay: `${index * 0.1 + 0.4}s`}}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
