"use client";

import { Users, Heart, Shield, Award, Clock, Headphones } from "lucide-react";

export default function FamilySection() {
  const familyStats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Happy Travelers",
      description: "Families who trusted us"
    },
    {
      icon: Heart,
      number: "12+",
      label: "Years Experience",
      description: "Serving since 2012"
    },
    {
      icon: Award,
      number: "500+",
      label: "Umrah Pilgrims",
      description: "Sacred journeys completed"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Licensed & Insured",
      description: "Fully registered company"
    }
  ];

  const whyFamily = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all our travelers"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your security is our top priority on every journey"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Every traveler is part of our TOWARDSDESTINATION family"
    },
    {
      icon: Headphones,
      title: "Expert Guidance",
      description: "Professional tour guides with local expertise"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4">
            👨‍👩‍👧‍👦 JOIN OUR FAMILY
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            The TOWARDSDESTINATION Family
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
            When you travel with us, you're not just a customer – you're part of our family. 
            We've been creating unforgettable memories for thousands of travelers since 2012.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {familyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <div className="text-4xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-white font-bold mb-1">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyFamily.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20">
            ✓ Registered: FBR • SECP • DTS for Travel • Nadra
          </div>
        </div>
      </div>
    </section>
  );
}
