"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Star, Phone, Mail, Wifi, Car, Coffee, Utensils, Check, X, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const hotelDetails: any = {
  "1": {
    id: 1,
    name: "Trout Villa, Skardu",
    location: "Skardu",
    address: "Trout Villa near Clifton Bridge, Skardu",
    rating: 3,
    reviews: 0,
    price: 5000,
    image: "/tr.jpg",
    images: ["/tr.jpg", "/tr.jpg", "/tr.jpg"],
    description: "Trout Villa is a charming boutique hotel located near the iconic Clifton Bridge in Skardu. Surrounded by breathtaking mountain views and the serene Indus River, this hotel offers a perfect blend of comfort and natural beauty. Ideal for travelers seeking a peaceful retreat with easy access to Skardu's major attractions.",
    facilities: [
      "Free WiFi",
      "Free Parking",
      "Restaurant",
      "Room Service",
      "24/7 Reception",
      "Mountain View",
      "Garden",
      "Laundry Service"
    ],
    roomTypes: [
      { type: "Standard Room", price: 5000, capacity: "2 Adults" },
      { type: "Deluxe Room", price: 7000, capacity: "2 Adults + 1 Child" },
      { type: "Family Suite", price: 10000, capacity: "4 Adults" }
    ],
    nearbyAttractions: [
      "Clifton Bridge - 0.5 km",
      "Skardu Fort - 3 km",
      "Satpara Lake - 8 km",
      "Shangrila Resort - 10 km",
      "Deosai National Park - 30 km"
    ],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    policies: [
      "Valid ID required at check-in",
      "Advance payment required",
      "Cancellation: 48 hours before check-in",
      "No smoking in rooms",
      "Pets not allowed"
    ]
  },
  "2": {
    id: 2,
    name: "Parkway Hotel, Fizaghat Swat",
    location: "Fizaghat, Swat",
    address: "Fizaghat, Swat Valley",
    rating: 3,
    reviews: 0,
    price: 8000,
    image: "/pr.jpeg",
    images: ["/pr.jpeg", "/pr.jpeg", "/pr.jpeg"],
    description: "Parkway Hotel is nestled in the heart of Fizaghat, Swat Valley, offering guests a luxurious stay amidst the stunning natural beauty of the Switzerland of Pakistan. With modern amenities, elegant rooms, and warm hospitality, this hotel is perfect for families and couples looking to explore the enchanting Swat Valley.",
    facilities: [
      "Free WiFi",
      "Free Parking",
      "Restaurant & Café",
      "Room Service",
      "24/7 Reception",
      "Valley View",
      "Beautiful Garden",
      "Conference Room",
      "Laundry Service",
      "Tour Desk"
    ],
    roomTypes: [
      { type: "Standard Room", price: 8000, capacity: "2 Adults" },
      { type: "Deluxe Room", price: 11000, capacity: "2 Adults + 1 Child" },
      { type: "Executive Suite", price: 15000, capacity: "4 Adults" },
      { type: "Family Suite", price: 18000, capacity: "6 Adults" }
    ],
    nearbyAttractions: [
      "Fizaghat Town - 1 km",
      "Malam Jabba Ski Resort - 25 km",
      "Kalam Valley - 45 km",
      "Mahodand Lake - 60 km",
      "Mingora City - 15 km"
    ],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    policies: [
      "Valid ID required at check-in",
      "Advance payment required",
      "Cancellation: 72 hours before check-in",
      "No smoking in rooms",
      "Pets not allowed"
    ]
  },
  "3": {
    id: 3,
    name: "ONE INN Hotel, Islamabad",
    location: "Islamabad",
    address: "Nust Uni EME Main Peshawar Rd, Jhangi Syedian, Islamabad",
    rating: 4,
    reviews: 0,
    price: 3499,
    image: "/one.jpeg",
    images: ["/one.jpeg", "/one.jpeg", "/one.jpeg"],
    description: "ONE INN Hotel is a modern, budget-friendly hotel located on the main Peshawar Road in Islamabad. Offering comfortable accommodations with contemporary amenities, this hotel is ideal for business travelers and tourists alike. Its strategic location provides easy access to major attractions, universities, and the city center.",
    facilities: [
      "Free WiFi",
      "Free Parking",
      "Restaurant",
      "Room Service",
      "24/7 Reception",
      "City View",
      "Elevator",
      "Business Center",
      "Laundry Service",
      "Airport Shuttle (Paid)"
    ],
    roomTypes: [
      { type: "Standard Room", price: 3499, capacity: "2 Adults" },
      { type: "Deluxe Room", price: 4999, capacity: "2 Adults + 1 Child" },
      { type: "Executive Room", price: 6499, capacity: "2 Adults + 2 Children" },
      { type: "Suite", price: 8999, capacity: "4 Adults" }
    ],
    nearbyAttractions: [
      "NUST University - 2 km",
      "Faisal Mosque - 12 km",
      "Pakistan Monument - 15 km",
      "Daman-e-Koh - 18 km",
      "Centaurus Mall - 14 km",
      "Islamabad Airport - 20 km"
    ],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    policies: [
      "Valid ID required at check-in",
      "Advance payment or credit card required",
      "Cancellation: 24 hours before check-in",
      "No smoking in rooms",
      "Pets not allowed"
    ]
  }
};

export default function HotelDetail() {
  const params = useParams();
  const id = params?.id as string;
  const hotel = hotelDetails[id];

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Hotel Booking Inquiry - ${hotel.name}*%0A%0A*Name:* ${bookingData.name}%0A*Email:* ${bookingData.email}%0A*Phone:* ${bookingData.phone}%0A*Check-in:* ${bookingData.checkIn}%0A*Check-out:* ${bookingData.checkOut}%0A*Guests:* ${bookingData.guests}%0A*Room Type:* ${bookingData.roomType}%0A*Message:* ${bookingData.message}`;
    window.open(`https://wa.me/923153309070?text=${whatsappMessage}`, '_blank');
    setBookingData({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "2", roomType: "", message: "" });
  };

  const handleWhatsAppInquiry = () => {
    const message = `*Inquiry for: ${hotel.name}*%0A%0AHello, I'm interested in booking a room. Please provide more details and availability.`;
    window.open(`https://wa.me/923153309070?text=${message}`, '_blank');
  };

  if (!hotel) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Hotel Not Found</h1>
          <Link href="/hotels" className="text-red-600 hover:underline">
            Back to Hotels
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              {[...Array(hotel.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
              ))}
              <span className="text-gray-600 ml-2">
                {hotel.reviews > 0 ? `${hotel.reviews} reviews` : "No reviews yet"}
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {hotel.name}
          </h1>
          
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5 text-red-600" />
            <span className="text-lg">{hotel.address}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Description */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Hotel</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{hotel.description}</p>
              
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

            {/* Facilities */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Facilities & Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.facilities.map((facility: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Room Types & Pricing */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Room Types & Pricing</h2>
              <div className="space-y-4">
                {hotel.roomTypes.map((room: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{room.type}</h3>
                        <p className="text-gray-600">Capacity: {room.capacity}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">
                          PKR {room.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">per night</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Nearby Attractions */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nearby Attractions</h2>
              <div className="space-y-3">
                {hotel.nearbyAttractions.map((attraction: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                    <span className="text-gray-700">{attraction}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Hotel Policies */}
            <section className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hotel Policies</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Check-in</h3>
                    <p className="text-gray-700">{hotel.checkIn}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Check-out</h3>
                    <p className="text-gray-700">{hotel.checkOut}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <h3 className="font-bold text-gray-900 mb-3">Important Policies</h3>
                  <ul className="space-y-2">
                    {hotel.policies.map((policy: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 font-bold">•</span>
                        <span>{policy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold mb-1">Phone</p>
                    <a href="tel:+923174101300" className="text-red-600 hover:text-red-700 underline font-medium">
                      +92 317 4101300
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold mb-1">Email</p>
                    <a href="mailto:Info.Towardsdestination@gmail.com" className="text-red-600 hover:text-red-700 underline font-medium">
                      Info.Towardsdestination@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-red-50 border-b border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Starting from</div>
                <div className="text-3xl font-bold text-red-600">
                  PKR {hotel.price.toLocaleString()}
                  <span className="text-lg text-gray-600 font-normal">/night</span>
                </div>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Stay</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={bookingData.name}
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
                      value={bookingData.email}
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
                      value={bookingData.phone}
                      onChange={handleChange}
                      placeholder="Phone/WhatsApp"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in Date</label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      value={bookingData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      value={bookingData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
                    <input
                      type="number"
                      name="guests"
                      required
                      min="1"
                      value={bookingData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Room Type</label>
                    <select
                      name="roomType"
                      required
                      value={bookingData.roomType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                    >
                      <option value="">Select Room Type</option>
                      {hotel.roomTypes.map((room: any, index: number) => (
                        <option key={index} value={room.type}>
                          {room.type} - PKR {room.price.toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={bookingData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Special Requests (Optional)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg"
                  >
                    Send Booking Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
