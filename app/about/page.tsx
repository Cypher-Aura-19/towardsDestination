"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Users, Award, Globe, Heart, Target, Eye, Shield, Clock } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { value: "12+", label: "Years of Experience" },
    { value: "15K+", label: "Happy Travelers" },
    { value: "120+", label: "Destinations Covered" },
    { value: "500+", label: "Umrah Pilgrims" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your safety is our priority. We ensure secure travel arrangements and reliable services throughout your journey."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring personalized service and attention to detail."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from planning to execution."
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Deep knowledge of Pakistan's northern regions and cultural insights for authentic experiences."
    }
  ];
const team = [
  {
    name: "Muhammad Asad Sindhu",
    role: "Founder/CEO", // 
    image: "/team/1.png", // Placeholder path
    description: "Founder & CEO of TowardsDestination.pk" // 
  },
  {
    name: "Ms. Aqsa Aziz Jamali", // [cite: 36]
    role: "Team Member", // Placeholder role
    image: "/team/2.png", // Placeholder path
    description: "Valuable member of the team" // Placeholder description
  },
  {
    name: "Mis Iqra Arshad Faraz", // [cite: 40]
    role: "Team Member", // Placeholder role
    image: "/team/3.png", // Placeholder path
    description: "Valuable member of the team" // Placeholder description
  },
  {
    name: "Shafah Mehmood", // [cite: 41]
    role: "Team Member", // Placeholder role
    image: "/team/4.png", // Placeholder path
    description: "Valuable member of the team" // Placeholder description
  },
  {
    name: "Ms. Fatima Nadeem", // [cite: 42]
    role: "Team Member", // Placeholder role
    image: "/team/5.png", // Placeholder path
    description: "Valuable member of the team" // Placeholder description
  },
  {
    name: "Mariam Tahir", // [cite: 43]
    role: "Team Member", // Placeholder role
    image: "/team/6.png", // Placeholder path
    description: "Valuable member of the team" // Placeholder description
  },
  {
    name: "Mr. Hafiz Zeeshan", // [cite: 44]
    role: "Team Member", // Placeholder role
    image: "/team/7.png", // Placeholder path
    description: "Valuable member of the team" // Placeholder description
  },
  {
    name: "Mr. Arham Gull", // [cite: 45]
    role: "Team Member", // Placeholder role
    image: "/team/8.png", // Placeholder path
    description: "Valuable member of the team" // Placeholder description
  }
];

  const milestones = [
    { year: "2012", event: "Company Founded", description: "Started with a vision to showcase Pakistan's beauty" },
    { year: "2015", event: "First Umrah Package", description: "Expanded services to include sacred journeys" },
    { year: "2018", event: "Hotel Established", description: "Opened our premium hotel facility" },
    { year: "2024", event: "15K+ Travelers", description: "Reached milestone of serving thousands" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 pb-12 xs:pb-16 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="About TOWARDSDESTINATION.PK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 text-center">
          {/* Company Badge */}
          <div className="mb-4 xs:mb-6">
            <span className="inline-block bg-white text-red-600 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-md text-xs xs:text-sm font-bold">
              🏔️ ABOUT OUR COMPANY
            </span>
          </div>
          
          <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 xs:mb-6 leading-tight break-words">
            TOWARDSDESTINATION.PK
          </h1>
          
          <p className="text-base xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            <span className="bg-white text-red-600 px-2.5 xs:px-4 py-1.5 xs:py-2 inline-block rounded-lg text-sm xs:text-lg sm:text-xl md:text-2xl">Let's have an Adventure</span>
          </p>
          
          <p className="text-white/95 text-sm xs:text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 xs:mb-6">
            Pakistan's Leading Travel Company Since 2012
          </p>
          
          {/* Registration Badge */}
          <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-white/10 backdrop-blur-sm text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full text-xs xs:text-sm font-semibold">
            Registered: FBR • SECP • DTS for Travel • Nadra
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 xs:py-12 sm:py-16 bg-white border-y border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 mb-1 xs:mb-2">{stat.value}</div>
                <div className="text-gray-600 font-semibold text-xs xs:text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 xs:py-16 sm:py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <span className="inline-block bg-red-600 text-white px-3 xs:px-4 py-2 rounded-full text-xs xs:text-sm font-bold mb-4">
              OUR JOURNEY
            </span>
            <h2 className="text-xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-4 break-words">
              The TOWARDSDESTINATION.PK Story
            </h2>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto">
              From a small startup to Pakistan's trusted travel partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-center">
            <div>
              <div className="space-y-4 xs:space-y-6 text-gray-600 leading-relaxed text-sm xs:text-base sm:text-lg">
                <p>
                  Founded in 2012, TOWARDSDESTINATION.PK began with a simple mission: to share the breathtaking beauty of Pakistan's northern regions with travelers from around the world. What started as a small tour operation has grown into a comprehensive travel service provider.
                </p>
                <p>
                  Over the years, we've expanded our services to include sacred Umrah journeys and established our own premium hotel facility. Our commitment to excellence and customer satisfaction has made us one of the most trusted names in Pakistan's tourism industry.
                </p>
                <p>
                  Today, we're proud to have served over 15,000 happy travelers, helping them create unforgettable memories in the majestic mountains of Northern Pakistan and facilitating spiritual journeys to the holy cities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 rounded-xl xs:rounded-2xl overflow-hidden">
                <Image
                  src="/hunza.jpg"
                  alt="Our Journey"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 rounded-xl xs:rounded-2xl overflow-hidden mt-4 xs:mt-6 sm:mt-8">
                <Image
                  src="/skardu.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 rounded-xl xs:rounded-2xl overflow-hidden -mt-4 xs:-mt-6 sm:-mt-8">
                <Image
                  src="/naran.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 rounded-xl xs:rounded-2xl overflow-hidden">
                <Image
                  src="/photography.jpg"
                  alt="Our Values"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 xs:py-16 sm:py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <span className="inline-block bg-red-600 text-white px-3 xs:px-4 py-2 rounded-full text-xs xs:text-sm font-bold mb-4">
              MISSION & VISION
            </span>
            <h2 className="text-xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
              What Drives Us Forward
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            <div className="bg-gray-50 rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 md:p-10 border border-gray-200">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-red-600 mb-3 xs:mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm xs:text-base">
                To provide exceptional travel experiences that showcase the natural beauty and cultural richness of Pakistan, 
                while ensuring the highest standards of safety, comfort, and customer satisfaction. We aim to make travel 
                accessible and memorable for everyone.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 md:p-10 border border-gray-200">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-red-600 mb-3 xs:mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm xs:text-base">
                To become Pakistan's leading travel service provider, recognized for our commitment to excellence, 
                innovation, and sustainable tourism. We envision a future where Pakistan's northern beauty is celebrated 
                globally, and every traveler leaves with cherished memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 xs:py-16 sm:py-20">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-xl xs:text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-sm xs:text-base max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="hidden lg:block py-12 xs:py-16 sm:py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-xl xs:text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-sm xs:text-base max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-600 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm inline-block">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-red-600" />
                        <span className="text-2xl font-bold text-red-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-red-600 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-4 h-4 bg-red-600 rounded-full relative z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 xs:py-16 sm:py-20">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-xl xs:text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-sm xs:text-base max-w-2xl mx-auto">
              Dedicated professionals committed to making your travel experience exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-red-600">
        <div className="w-full max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 text-center">
          <h2 className="text-xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 xs:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-sm xs:text-base sm:text-lg mb-6 xs:mb-8">
            Let us help you create unforgettable memories in Pakistan's beautiful northern regions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full font-medium transition-colors">
              Explore Tours
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
