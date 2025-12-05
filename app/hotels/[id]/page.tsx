"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Star, Phone, Mail, Wifi, Car, Coffee, Utensils, Check, X, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const hotelDetails: any = {
  "1": {
    id: 1,
    name: "ONE INN Hotel, Islamabad",
    location: "Islamabad",
    address: "Nust Uni EME Main Peshawar Rd, Jhangi Syedian, Islamabad",
    rating: 4,
    reviews: 0,
    price: 3500,
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
      { type: "Economy Room (Non-AC)", price: 3500, capacity: "2 Adults", image: "/hotel/1.jpeg" },
      { type: "Economy Room (AC)", price: 4500, capacity: "2 Adults", image: "/hotel/1.jpeg" },
      { type: "Deluxe Room (Non-AC)", price: 5000, capacity: "2 Adults", image: "/hotel/2.jpeg" },
      { type: "Deluxe Room (Inverter AC)", price: 6000, capacity: "2 Adults", image: "/hotel/2.jpeg" },
      { type: "Deluxe Room Plus (Non-AC)", price: 6000, capacity: "3 Adults", image: "/hotel/3.jpeg" },
      { type: "Deluxe Room Plus (Inverter AC)", price: 7000, capacity: "3 Adults", image: "/hotel/3.jpeg" },
      { type: "Family Room (Non-AC)", price: 7500, capacity: "5 Adults", image: "/hotel/4.jpeg" },
      { type: "Family Room (Inverter AC)", price: 9000, capacity: "5 Adults", image: "/hotel/4.jpeg" }
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

  const [selectedRoomPrice, setSelectedRoomPrice] = useState(hotel?.price || 3500);
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

  const handleRoomSelect = (roomType: string, roomPrice: number) => {
    setSelectedRoomPrice(roomPrice);
    setBookingData({
      ...bookingData,
      roomType: roomType
    });
  };

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
              <p className="text-gray-600 mb-4">Click on a room type to select it for booking</p>
              <div className="space-y-4">
                {hotel.roomTypes.map((room: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleRoomSelect(room.type, room.price)}
                    className={`w-full border-2 rounded-lg overflow-hidden transition-all ${
                      bookingData.roomType === room.type
                        ? 'border-red-600 bg-red-50 shadow-lg'
                        : 'border-gray-200 hover:border-red-400 hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row">
                      {room.image && (
                        <div className="relative w-full md:w-48 h-32 md:h-auto flex-shrink-0">
                          <Image
                            src={room.image}
                            alt={room.type}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 p-6 flex items-center justify-between">
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{room.type}</h3>
                          <p className="text-gray-600">Capacity: {room.capacity}</p>
                          {bookingData.roomType === room.type && (
                            <span className="inline-block mt-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                              Selected
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-red-600">
                            PKR {room.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">per night</div>
                        </div>
                      </div>
                    </div>
                  </button>
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

            <TourContactSection/>
           
          </div>

          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-red-50 border-b border-gray-200">
                <div className="text-sm text-gray-600 mb-1">
                  {bookingData.roomType ? 'Selected Room Price' : 'Starting from'}
                </div>
                <div className="text-3xl font-bold text-red-600">
                  PKR {selectedRoomPrice.toLocaleString()}
                  <span className="text-lg text-gray-600 font-normal">/night</span>
                </div>
                {bookingData.roomType && (
                  <div className="text-sm text-gray-700 mt-2 font-medium">
                    {bookingData.roomType}
                  </div>
                )}
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
