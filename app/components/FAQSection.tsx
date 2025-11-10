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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Header */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently Asked<br />
              Questions
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions? We've got answers! Learn everything you need to plan your journey to Northern Pakistan or your Umrah pilgrimage.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-gray-700 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                    openIndex === index 
                      ? 'bg-gray-900 border-gray-900 text-white' 
                      : 'border-gray-900 text-gray-900 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white'
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
