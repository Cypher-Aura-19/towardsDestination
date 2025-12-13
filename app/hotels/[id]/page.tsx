"use client";


import ImportantInstructionsSection from '@/app/components/ImportantInstructionsSection';
import CancellationPolicySection from '@/app/components/CancellationPolicySection';
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Star, Phone, Mail, Wifi, Car, Coffee, Utensils, Check, X, Send, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

// Hotel Gallery Carousel Component
function HotelGalleryCarousel({ hotelId }: { hotelId: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hotelImages = hotelId === "2" 
    ? [
        "/hotel/hotel2/1.jpg",
        "/hotel/hotel2/2.jpg",
        "/hotel/hotel2/3.jpg",
        "/hotel/hotel2/4.jpg",
        "/hotel/hotel2/5.jpg",
        "/hotel/hotel2/6.jpg",
        "/hotel/hotel2/7.jpg"
      ]
    : [
        "/hotel/1.jpeg",
        "/hotel/2.jpeg",
        "/hotel/3.jpeg",
        "/hotel/4.jpeg",
        "/hotel/5.jpeg"
      ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotelImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [hotelImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotelImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hotelImages.length) % hotelImages.length);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Images */}
      {hotelImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Hotel view ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
      </button>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
        {hotelImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all border-2 ${
              index === currentSlide
                ? "border-white scale-110"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
        {currentSlide + 1} / {hotelImages.length}
      </div>
    </div>
  );
}

const hotelDetails: any = {
  "1": {
    id: 1,
    name: "ONE INN Hotel, Islamabad",
    location: "Islamabad",
    address: "Nust Uni EME Main Peshawar Rd, Jhangi Syedian, Islamabad",
    rating: 4,
    reviews: 0,
    price: 3500,
    image: "/hotel/4.jpeg",
    images: ["/1.jpeg", "/2.jpeg", "/3.jpeg"],
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
      "Advance payment",
      "Cancellation: 24 hours before check-in",
      "No smoking in rooms",
      "Pets not allowed"
    ]
  },
  "2": {
    id: 2,
    name: "Imperial Resort Kalam",
    location: "Kalam, Swat",
    address: "Kalam Valley, Swat, Khyber Pakhtunkhwa",
    rating: 5,
    reviews: 0,
    price: 5999,
    image: "/hotel/hotel2/1.jpg",
    images: ["/hotel/hotel2/1.jpg", "/hotel/hotel2/2.jpg", "/hotel/hotel2/3.jpg"],
    description: "Imperial Resort Kalam is a premium mountain resort nestled in the breathtaking Kalam Valley of Swat. Surrounded by majestic mountains and pristine natural beauty, this resort offers a perfect blend of luxury and comfort. With modern amenities, stunning views, and warm hospitality, Imperial Resort is your ideal retreat for a memorable mountain getaway.",
    facilities: [
      "Free WiFi",
      "Free Parking",
      "Restaurant",
      "Room Service",
      "24/7 Hot Water",
      "Complimentary Breakfast",
      "Mountain View",
      "24/7 Reception",
      "Laundry Service",
      "Garden Area"
    ],
    roomTypes: [
      { type: "Deluxe Room", price: 5999, capacity: "2 Persons", beds: "01 King Size Bed or 01 Twin Beds", rooms: "08 rooms", image: "/hotel/hotel2/2.jpg" },
      { type: "Deluxe Plus Room", price: 6999, capacity: "3 Persons", beds: "01 King Size Bed + 01 Bed", rooms: "15 rooms", image: "/hotel/hotel2/3.jpg" },
      { type: "Presidential Room", price: 7999, capacity: "4 Persons", beds: "01 King Size Bed or 02 Twin Beds", rooms: "12 rooms", image: "/hotel/hotel2/4.jpg" },
      { type: "Family Room", price: 9999, capacity: "4 Persons", beds: "01 King Size Bed or 02 Twin Beds + Sofa Cum Bed", rooms: "03 rooms", image: "/hotel/hotel2/5.jpg" },
      { type: "Family Suite", price: 12999, capacity: "5 Persons", beds: "01 King Size Bed in One Room + 02 Twin Beds with Sofa Cum bed in Second Room or 01 Twin Beds", rooms: "03 Suite", image: "/hotel/hotel2/6.jpg" }
    ],
    nearbyAttractions: [
      "Kalam Valley - 1 km",
      "Ushu Forest - 5 km",
      "Mahodand Lake - 35 km",
      "Gabral Valley - 20 km",
      "Utror Valley - 15 km",
      "Mingora City - 95 km"
    ],
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    policies: [
      "Valid ID required at check-in",
      "Advance payment required",
      "Cancellation: 48 hours before check-in",
      "No smoking in rooms",
      "Pets not allowed",
      "Complimentary breakfast included",
      "24/7 hot water available"
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
            {/* Hotel Gallery Carousel */}
            <HotelGalleryCarousel hotelId={id} />

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

            {/* Room Types & Pricing - Grouped by Category */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Room Types & Pricing</h2>
              <p className="text-gray-600 mb-6">Select your preferred room type</p>
              
              {id === "1" ? (
                // Hotel 1 - Grouped by Category
                <div className="space-y-6">
                  {/* Economy Rooms */}
                  {hotel.roomTypes.filter((room: any) => room.type.includes("Economy")).length > 0 && (
                    <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                      <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Economy Rooms
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">Perfect for budget-conscious travelers • 2 Adults</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {hotel.roomTypes.filter((room: any) => room.type.includes("Economy")).map((room: any, index: number) => (
                          <button
                            key={index}
                            onClick={() => handleRoomSelect(room.type, room.price)}
                            className={`border-2 rounded-lg p-4 transition-all text-left ${
                              bookingData.roomType === room.type
                                ? 'border-blue-600 bg-white shadow-lg'
                                : 'border-blue-200 bg-white hover:border-blue-400 hover:shadow-md'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-semibold text-gray-900">
                                {room.type.includes("Non-AC") ? "Non-AC" : "AC"}
                              </span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                {room.capacity}
                              </span>
                            </div>
                            <div className="text-2xl font-bold text-blue-600">
                              PKR {room.price.toLocaleString()}
                              <span className="text-sm text-gray-600 font-normal">/night</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deluxe Rooms */}
                  {hotel.roomTypes.filter((room: any) => room.type.includes("Deluxe")).length > 0 && (
                    <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
                      <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        Deluxe Rooms
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">Enhanced comfort with premium amenities</p>
                      <div className="space-y-4">
                        {/* Standard Deluxe */}
                        {hotel.roomTypes.filter((room: any) => room.type.includes("Deluxe Room (") && !room.type.includes("Plus")).length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-purple-700 mb-2">Standard Deluxe (2 Adults)</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {hotel.roomTypes.filter((room: any) => room.type.includes("Deluxe Room (") && !room.type.includes("Plus")).map((room: any, index: number) => (
                                <button
                                  key={index}
                                  onClick={() => handleRoomSelect(room.type, room.price)}
                                  className={`border-2 rounded-lg p-4 transition-all text-left ${
                                    bookingData.roomType === room.type
                                      ? 'border-purple-600 bg-white shadow-lg'
                                      : 'border-purple-200 bg-white hover:border-purple-400 hover:shadow-md'
                                  }`}
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-gray-900">
                                      {room.type.includes("Non-AC") ? "Non-AC" : "Inverter AC"}
                                    </span>
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                      {room.capacity}
                                    </span>
                                  </div>
                                  <div className="text-2xl font-bold text-purple-600">
                                    PKR {room.price.toLocaleString()}
                                    <span className="text-sm text-gray-600 font-normal">/night</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Deluxe Plus */}
                        {hotel.roomTypes.filter((room: any) => room.type.includes("Deluxe Room Plus")).length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-purple-700 mb-2">Deluxe Plus (3 Adults)</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {hotel.roomTypes.filter((room: any) => room.type.includes("Deluxe Room Plus")).map((room: any, index: number) => (
                                <button
                                  key={index}
                                  onClick={() => handleRoomSelect(room.type, room.price)}
                                  className={`border-2 rounded-lg p-4 transition-all text-left ${
                                    bookingData.roomType === room.type
                                      ? 'border-purple-600 bg-white shadow-lg'
                                      : 'border-purple-200 bg-white hover:border-purple-400 hover:shadow-md'
                                  }`}
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-gray-900">
                                      {room.type.includes("Non-AC") ? "Non-AC" : "Inverter AC"}
                                    </span>
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                      {room.capacity}
                                    </span>
                                  </div>
                                  <div className="text-2xl font-bold text-purple-600">
                                    PKR {room.price.toLocaleString()}
                                    <span className="text-sm text-gray-600 font-normal">/night</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Family Rooms */}
                  {hotel.roomTypes.filter((room: any) => room.type.includes("Family")).length > 0 && (
                    <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                      <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Family Rooms
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">Spacious rooms perfect for families • 5 Adults</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {hotel.roomTypes.filter((room: any) => room.type.includes("Family")).map((room: any, index: number) => (
                          <button
                            key={index}
                            onClick={() => handleRoomSelect(room.type, room.price)}
                            className={`border-2 rounded-lg p-4 transition-all text-left ${
                              bookingData.roomType === room.type
                                ? 'border-green-600 bg-white shadow-lg'
                                : 'border-green-200 bg-white hover:border-green-400 hover:shadow-md'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-semibold text-gray-900">
                                {room.type.includes("Non-AC") ? "Non-AC" : "Inverter AC"}
                              </span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                {room.capacity}
                              </span>
                            </div>
                            <div className="text-2xl font-bold text-green-600">
                              PKR {room.price.toLocaleString()}
                              <span className="text-sm text-gray-600 font-normal">/night</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Hotel 2 and others - Simple List
                <div className="space-y-4">
                  {hotel.roomTypes.map((room: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleRoomSelect(room.type, room.price)}
                      className={`w-full border-2 rounded-lg p-6 transition-all text-left ${
                        bookingData.roomType === room.type
                          ? 'border-red-600 bg-red-50 shadow-lg'
                          : 'border-gray-200 hover:border-red-400 hover:shadow-md'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{room.type}</h3>
                          {room.beds && (
                            <p className="text-sm text-gray-600 mb-1">🛏️ {room.beds}</p>
                          )}
                          {room.rooms && (
                            <p className="text-sm text-gray-600 mb-1">🏠 Available: {room.rooms}</p>
                          )}
                          <p className="text-sm text-gray-600">👥 Occupancy: {room.capacity}</p>
                          {bookingData.roomType === room.type && (
                            <span className="inline-block mt-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                              Selected
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-red-600">
                            PKR {room.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">per night</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </section>

            {/* Continue with old structure for reference */}
            <div className="hidden">
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
            </div>

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
                <ImportantInstructionsSection />
<CancellationPolicySection />
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
