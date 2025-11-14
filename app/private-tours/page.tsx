"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Users, Calendar, MapPin, Send, Star } from "lucide-react";
import Image from "next/image";

export default function PrivateToursPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    persons: "",
    travelType: "by-road",
    departureFrom: "",
    placesToVisit: "",
    startDate: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*Private Tour Request*%0A%0A*Full Name:* ${formData.fullName}%0A*WhatsApp/Phone:* ${formData.whatsapp}%0A*Travel Mode:* ${formData.travelType === "by-road" ? "By Road" : "By Air"}%0A*Number of Persons:* ${formData.persons}%0A*Departure From:* ${formData.departureFrom}%0A*Places to Visit:* ${formData.placesToVisit}%0A*Preferred Travel Date:* ${formData.startDate || "Flexible"}`;
    
    // WhatsApp number
    const whatsappNumber = "923153309070";
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      fullName: "",
      whatsapp: "",
      persons: "",
      travelType: "by-road",
      departureFrom: "",
      placesToVisit: "",
      startDate: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const features = [
    "Customized itinerary based on your preferences",
    "Private vehicle with experienced driver",
    "Dedicated tour guide",
    "Flexible schedule and stops",
    "Premium accommodation options",
    "Personalized service throughout"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Private Tours"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Company Badge */}
          <div className="mb-6">
            <span className="inline-block bg-white text-red-600 px-4 py-2 rounded-md text-sm font-bold">
              👥 TOWARDSDESTINATION.PK - Exclusive Private Tours
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Customized Private Tours<br />
            <span className="bg-white text-red-600 px-4 py-2 inline-block rounded-lg mt-2">Tailored Just for You</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
            Create your perfect journey with our fully customized private tours. Travel with your family or friends at your own pace with personalized itineraries.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/80 font-semibold">Customizable</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-white/80 font-semibold">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">VIP</div>
              <div className="text-xs text-white/80 font-semibold">Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Private Tours */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Exclusive Experience</h3>
              <p className="text-gray-600">
                Travel with your family or friends only. No strangers, complete privacy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Choose your dates, duration, and pace. Complete control over your itinerary.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Custom Destinations</h3>
              <p className="text-gray-600">
                Visit the places you want. We'll create a personalized route for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              Request Your Private Tour
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Fill out the form below with your requirements, and we'll create a customized tour package just for you.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href="/private-tours/by-air"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                ✈️ Browse By Air Tours
              </a>
              <a 
                href="/private-tours/honeymoon"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                💑 Browse Honeymoon Packages
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                    placeholder="WhatsApp/Phone +92 300 1234567"
                  />
                </div>

                <div>
                  <span className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Travel Mode
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="travelType"
                        value="by-road"
                        checked={formData.travelType === "by-road"}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div
                        className={`w-full px-4 py-3 rounded-lg border transition ${
                          formData.travelType === "by-road"
                            ? "border-red-600 bg-red-50 text-red-700 font-semibold"
                            : "border-gray-300 text-gray-700 hover:border-red-600"
                        }`}
                      >
                        🚌 By Road
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="travelType"
                        value="by-air"
                        checked={formData.travelType === "by-air"}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div
                        className={`w-full px-4 py-3 rounded-lg border transition ${
                          formData.travelType === "by-air"
                            ? "border-red-600 bg-red-50 text-red-700 font-semibold"
                            : "border-gray-300 text-gray-700 hover:border-red-600"
                        }`}
                      >
                        ✈️ By Air
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <input
                    type="number"
                    name="persons"
                    required
                    min="1"
                    value={formData.persons}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                    placeholder="Number of Travelers"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="departureFrom"
                    required
                    value={formData.departureFrom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                    placeholder="Departure City"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="placesToVisit"
                    required
                    value={formData.placesToVisit}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                    placeholder="Preferred Destinations"
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                    placeholder="Preferred Start Date"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Leave blank if your dates are flexible.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-lg"
              >
                Request Trip
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-600 text-center">
                Your request will be sent via WhatsApp. We'll respond within 24 hours with a customized quote.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              What's Included in Private Tours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every private tour is customized, but here's what you can expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <Star className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
