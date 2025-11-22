"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Calendar, Hotel, Check, Star, Plane, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UmrahPackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    message: ""
  });

  const umrahPackages = [
    {
      id: 1,
      name: "Short Umrah Package",
      duration: "10 Days / 9 Nights",
      price: "PKR 180,000",
      priceUSD: "$632",
      category: "Quick Trip",
      image: "/umrah.jpg",
      makkahHotel: "3-Star Hotel (600m from Haram)",
      madinahHotel: "3-Star Hotel (400m from Masjid Nabawi)",
      highlights: [
        "Ideal for limited time travelers",
        "Round-trip economy airfare",
        "3-star hotel accommodation",
        "Breakfast included",
        "Complete visa processing",
        "Airport transfers",
        "Essential Ziyarat tours",
        "Professional guide services"
      ]
    },
    {
      id: 2,
      name: "Economy Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 220,000",
      priceUSD: "$772",
      category: "Budget Friendly",
      image: "/umrah.jpg",
      makkahHotel: "3-Star Hotel (500m from Haram)",
      madinahHotel: "3-Star Hotel (300m from Masjid Nabawi)",
      highlights: [
        "Round-trip economy class airfare",
        "3-star hotel accommodation",
        "Breakfast & dinner included",
        "Complete visa processing",
        "Airport transfers in Saudi Arabia",
        "Ziyarat tours in Makkah & Madinah",
        "Experienced multilingual guide",
        "24/7 customer support"
      ]
    },
    {
      id: 3,
      name: "Family Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 260,000",
      priceUSD: "$912",
      category: "Family Special",
      image: "/umrah.jpg",
      makkahHotel: "4-Star Hotel with family rooms",
      madinahHotel: "4-Star Hotel with family rooms",
      highlights: [
        "Special family room arrangements",
        "Round-trip airfare for all members",
        "4-star family-friendly hotels",
        "All meals included",
        "Child-friendly Ziyarat tours",
        "Complete visa processing for family",
        "Private family transport",
        "Experienced family guide",
        "Special discounts for children"
      ]
    },
    {
      id: 4,
      name: "Standard Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 280,000",
      priceUSD: "$982",
      category: "Most Popular",
      popular: true,
      image: "/umrah.jpg",
      makkahHotel: "4-Star Hotel (300m from Haram)",
      madinahHotel: "4-Star Hotel (200m from Masjid Nabawi)",
      highlights: [
        "Round-trip economy class airfare",
        "4-star hotel accommodation",
        "All meals included (breakfast, lunch, dinner)",
        "Complete visa processing assistance",
        "Private airport transfers",
        "Comprehensive Ziyarat tours",
        "Professional tour guide",
        "Travel insurance included",
        "Laundry service"
      ]
    },
    {
      id: 5,
      name: "Ramadan Special Package",
      duration: "20 Days / 19 Nights",
      price: "PKR 320,000",
      priceUSD: "$1,123",
      category: "Seasonal",
      image: "/umrah.jpg",
      makkahHotel: "4-Star Hotel (400m from Haram)",
      madinahHotel: "4-Star Hotel (250m from Masjid Nabawi)",
      highlights: [
        "Extended stay for Ramadan",
        "Round-trip airfare included",
        "4-star hotel accommodation",
        "Suhoor & Iftar arrangements",
        "Complete visa processing",
        "Airport & local transfers",
        "Ziyarat tours included",
        "Taraweeh prayer arrangements",
        "Special Ramadan guide services"
      ]
    },
    {
      id: 6,
      name: "Premium Umrah Package",
      duration: "15 Days / 14 Nights",
      price: "PKR 350,000",
      priceUSD: "$1,228",
      category: "Luxury Experience",
      image: "/umrah.jpg",
      makkahHotel: "5-Star Hotel (Walking distance to Haram)",
      madinahHotel: "5-Star Hotel (Walking distance to Masjid Nabawi)",
      highlights: [
        "Round-trip business class airfare",
        "5-star luxury hotel accommodation",
        "All meals at hotel restaurants",
        "VIP visa processing",
        "Private luxury vehicle transfers",
        "Exclusive Ziyarat tours",
        "Dedicated personal guide",
        "Premium travel insurance",
        "Daily laundry & room service",
        "Special amenities package"
      ]
    }
  ];

  const selectedPkg = umrahPackages.find(pkg => pkg.id === selectedPackage) || umrahPackages[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Umrah Package Inquiry - ${selectedPkg.name}*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Travelers:* ${formData.travelers}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/923153309070?text=${whatsappMessage}`, '_blank');
    setFormData({ name: "", email: "", phone: "", travelers: "2", message: "" });
  };

  const handleWhatsAppInquiry = () => {
    const message = `*Inquiry for: ${selectedPkg.name}*%0A%0AHello, I'm interested in this Umrah package. Please provide more details and pricing.`;
    window.open(`https://wa.me/923153309070?text=${message}`, '_blank');
  };

  const ziyadatPlaces = [
    "Jabal al-Nour (Cave of Hira)",
    "Jabal Thawr",
    "Masjid Quba",
    "Masjid Qiblatain",
    "Uhud Mountain & Martyrs Cemetery",
    "Masjid Jinn",
    "Jannat al-Baqi",
    "Historical Islamic sites"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 pt-40 pb-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-md text-sm font-bold">
              🕋 Umrah Package
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Umrah Packages 2024-2025
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              <span className="text-lg">Makkah & Madinah</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-600" />
              <span className="text-lg">10-20 Days Options</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-red-600" />
              <span className="text-lg">6 Package Options</span>
            </div>
          </div>

          {/* Why Choose Us Box */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-5 shadow-xl text-white">
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">Select Your Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {umrahPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? 'border-red-600 bg-red-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-red-300 hover:shadow-md'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-bold text-red-600 mb-1">{pkg.name}</h3>
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
                Experience the spiritual journey of a lifetime with our {selectedPkg.name}. This carefully curated package includes everything you need for a comfortable and meaningful Umrah experience.
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

            {/* Hotels */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hotel Accommodation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hotel className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-red-600 mb-2">Makkah</p>
                    <p className="text-gray-700">{selectedPkg.makkahHotel}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hotel className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-red-600 mb-2">Madinah</p>
                    <p className="text-gray-700">{selectedPkg.madinahHotel}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Package Highlights */}
            <section className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
              <h2 className="text-3xl font-bold text-red-800 mb-6">Package Includes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Ziyarat Places */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ziyarat Tours Included</h2>
              <p className="text-gray-600 mb-6">
                All packages include comprehensive Ziyarat tours to important Islamic historical sites in Makkah and Madinah, guided by knowledgeable scholars.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ziyadatPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{place}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-b border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Selected Package</div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  {selectedPkg.price}
                </div>
                <div className="text-sm text-gray-600 mb-2">({selectedPkg.priceUSD} USD) /person</div>
                <div className="text-sm font-semibold text-gray-700">{selectedPkg.duration}</div>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      required
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg"
                  >
                    Send Inquiry
                  </button>
                </form>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link href="/international-tours" className="text-red-600 hover:underline text-sm">
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
