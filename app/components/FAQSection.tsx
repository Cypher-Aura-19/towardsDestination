"use client";

import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "What's included in the Northern Pakistan tour packages?",
      answer: "Our packages include transportation, accommodation, meals, experienced tour guides, and all necessary permits. Specific inclusions vary by package - check individual tour details for complete information."
    },
    {
      id: 2,
      question: "What's the difference between Umrah by Air and by Road?",
      answer: "Umrah by Air offers faster travel with round-trip flights and typically 15-day duration. Umrah by Road is more economical, travels by comfortable bus, takes about 20 days, and includes scenic stops along the way."
    },
    {
      id: 3,
      question: "Is your hotel available for independent bookings?",
      answer: "Yes! Our hotel is available for both package tours and independent bookings. We offer standard rooms, deluxe rooms, and suites with modern amenities and traditional Pakistani hospitality."
    },
    {
      id: 4,
      question: "What's the best time to visit Northern Pakistan?",
      answer: "The best time is from April to October when weather is pleasant. Summer (June-August) is ideal for high-altitude areas. Spring (April-May) and autumn (September-October) offer moderate temperatures and beautiful scenery."
    },
    {
      id: 5,
      question: "Do you provide visa assistance for Umrah packages?",
      answer: "Yes, we provide complete visa processing assistance for all our Umrah packages. Our experienced team will guide you through the documentation and application process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-linear-to-b from-white via-red-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in-up">
          {/* Left Side - Header */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-red-700 mb-6 leading-tight">
              Frequently Asked<br />
              Questions
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions? We've got answers! Learn everything you need to plan your journey to Northern Pakistan or your Umrah pilgrimage.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-red-100 hover:shadow-lg hover:border-red-300 transition-all duration-300 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold text-red-700 pr-4 group-hover:text-red-800 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                    openIndex === index 
                      ? 'bg-red-600 border-red-600 text-white' 
                      : 'border-red-600 text-red-600 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white'
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                {/* Answer - Expandable */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
