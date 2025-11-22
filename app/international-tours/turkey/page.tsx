"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Calendar, Hotel, Check, Star, Plane, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TurkeyToursPage() {
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    message: ""
  });

  const turkeyPackages = [
    {
      id: 1,
      name: "Turkey Istanbul Special",
      duration: "5 Days / 4 Nights",
      price: "PKR 339,999",
      priceUSD: "$1,193",
      category: "City Break",
      image: "/T.jpg",
      pricing: {
        quad_triple: "PKR 339,999 ($1,193)",
        twin_sharing: "PKR 379,999 ($1,333)",
        single_sharing: "PKR 409,999 ($1,439)"
      },
      highlights: [
        "Round-trip economy airfare",
        "4-star hotel in Sultanahmet area",
        "Breakfast included daily",
        "Guided city tour of Istanbul",
        "Blue Mosque & Hagia Sophia",
        "Topkapi Palace entrance",
        "Grand Bazaar shopping tour",
        "Bosphorus boat cruise"
      ]
    },
    {
      id: 2,
      name: "Turkey Grand Tour",
      duration: "7 Days / 6 Nights",
      price: "PKR 389,999",
      priceUSD: "$1,368",
      category: "Historical & Cultural",
      popular: true,
      image: "/T.jpg",
      pricing: {
        quad_triple: "PKR 389,999 ($1,368)",
        twin_sharing: "PKR 429,999 ($1,509)",
        single_sharing: "PKR 459,999 ($1,614)"
      },
      highlights: [
        "Round-trip airfare to Istanbul",
        "Domestic flight Istanbul-Cappadocia-Istanbul",
        "4-star hotels in Istanbul & Cappadocia",
        "All meals included",
        "Blue Mosque & Hagia Sophia tours",
        "Topkapi Palace & Grand Bazaar",
        "Hot air balloon ride in Cappadocia",
        "Underground cities exploration",
        "Bosphorus cruise"
      ]
    }
  ];

  const selectedPkg = turkeyPackages.find(pkg => pkg.id === selectedPackage) || turkeyPackages[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Turkey Tour Inquiry - ${selectedPkg.name}*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Travelers:* ${formData.travelers}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/923153309070?text=${whatsappMessage}`, '_blank');
    setFormData({ name: "", email: "", phone: "", travelers: "2", message: "" });
  };

  const handleWhatsAppInquiry = () => {
    const message = `*Inquiry for: ${selectedPkg.name}*%0A%0AHello, I'm interested in this Turkey tour package. Please provide more details and pricing.`;
    window.open(`https://wa.me/923153309070?text=${message}`, '_blank');
  };

  const placesToVisit = [
    "Blue Mosque (Sultan Ahmed Mosque)",
    "Hagia Sophia Grand Mosque",
    "Topkapi Palace & Harem",
    "Grand Bazaar",
    "Spice Bazaar",
    "Bosphorus Strait Cruise",
    "Cappadocia Fairy Chimneys (7-day tour)",
    "Goreme Open Air Museum (7-day tour)",
    "Underground Cities (7-day tour)",
    "Hot Air Balloon Ride (7-day tour)"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 pt-40 pb-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-md text-sm font-bold">
              <Plane className="w-4 h-4" />
              Turkey Tour Packages
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Turkey Tours 2024-2025
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-lg">Istanbul & Cappadocia</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-lg">5-7 Days Options</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              <span className="text-lg">2 Package Options</span>
            </div>
          </div>

          {/* Why Choose Us Box */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-5 shadow-xl text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">Why Choose Us?</h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">6+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">20,000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">100% Visa Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">24/7 Support</span>
                </div>
              </div>

              <div className="hidden lg:block text-xs text-white/90 max-w-xs">
                Expert team handling every aspect of your journey.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Package Selection */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Select Your Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {turkeyPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? 'border-blue-600 bg-blue-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-bold text-blue-600 mb-1">{pkg.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{pkg.duration}</p>
                    <p className="text-2xl font-bold text-gray-900">{pkg.price}</p>
                    <p className="text-sm text-gray-500">({pkg.priceUSD} USD)</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Selected Package Image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={selectedPkg.image}
                alt={selectedPkg.name}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Package Details */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedPkg.name}</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {selectedPkg.id === 1 
                  ? "Explore the magical city of Istanbul, where East meets West. This focused 5-day tour covers all the major highlights of Istanbul including historic mosques, palaces, bazaars, and a scenic Bosphorus cruise. Perfect for those who want to experience the essence of Istanbul without extended travel."
                  : "Discover the enchanting beauty of Turkey with our comprehensive 7-day tour covering Istanbul and Cappadocia. Experience the perfect blend of European and Asian cultures, explore ancient Byzantine and Ottoman heritage, witness the surreal landscapes of Cappadocia, and enjoy a magical hot air balloon ride."
                }
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Inquire via WhatsApp
                </button>
              </div>
            </section>

            {/* Pricing Options */}
            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Pricing Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 border-2 border-blue-300 hover:border-blue-500 transition-colors">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">Quad/Triple Sharing</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedPkg.pricing.quad_triple}</p>
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-blue-300 hover:border-blue-500 transition-colors">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">Twin Sharing</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedPkg.pricing.twin_sharing}</p>
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-blue-300 hover:border-blue-500 transition-colors">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">Single Sharing</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedPkg.pricing.single_sharing}</p>
                </div>
              </div>
              <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-sm text-blue-800 font-semibold">
                  💡 Note: Prices may vary according to season and flight availability. Peak season rates may be higher. Early booking recommended for better rates.
                </p>
              </div>
            </section>

            {/* Package Highlights */}
            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Package Includes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Places to Visit */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Places to Visit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {placesToVisit.map((place, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{place}</span>
                  </div>
                ))}
              </div>
            </section>
             <TourContactSection/>
          </div>

          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-b border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Selected Package</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {selectedPkg.price}
                </div>
                <div className="text-sm text-gray-600 mb-2">({selectedPkg.priceUSD} USD) /person</div>
                <div className="text-sm font-semibold text-gray-700">{selectedPkg.duration}</div>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Package</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone/WhatsApp"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      required
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Person</option>
                      <option value="3">3 Person</option>
                      <option value="4">4 Person</option>
                      <option value="5+">5+ Person</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Your Message or Special Requirements"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg"
                  >
                    Send Inquiry
                  </button>
                </form>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link href="/international-tours" className="text-blue-600 hover:underline text-sm">
                    ← Back to All Tours
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
