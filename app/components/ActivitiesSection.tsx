"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ActivitiesSection() {
  const activities = [
    {
      id: 1,
      title: "Mountain Trekking",
      description: "Experience thrilling treks through the Karakoram and Himalayan ranges with expert guides and stunning views.",
      image: "/mountain trekking.jpg",
    },
    {
      id: 2,
      title: "Cultural Tours",
      description: "Immerse yourself in the rich culture and heritage of northern Pakistan's diverse communities and traditions.",
      image: "/cultural tours.jpg",
    },
    {
      id: 3,
      title: "Photography Expeditions",
      description: "Capture breathtaking landscapes and moments with guided photography tours to the most scenic locations.",
      image: "/photography.jpg",
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white via-red-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-25 animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Popular Activities</span>

          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From thrilling mountain treks to immersive cultural experiences, we offer diverse activities that showcase the best of Pakistan's northern beauty and heritage.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div 
              key={activity.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-red-100 hover:border-red-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-125 group-hover:rotate-1 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-700 mb-2 group-hover:text-red-800 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow">
            Browse All Activities
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
