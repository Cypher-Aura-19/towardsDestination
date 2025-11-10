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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Popular Activities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From thrilling mountain treks to immersive cultural experiences, we offer diverse activities that showcase the best of Pakistan's northern beauty and heritage.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
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
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium">
            Browse All Activities
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
