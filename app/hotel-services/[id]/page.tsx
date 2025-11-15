"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Star, Check, MessageCircle, Mail, Wifi, Coffee, Car, Utensils, Clock, Info } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const hotelDetails: any = {
  "1": {
    id: 1,
    name: "Premium Mountain Resort",
    location: "Northern Pakistan",
    rating: 4.8,
    reviews: 245,
    price: 8000,
    images: ["/hotel.jpg", "/hunza1.jpg", "/skardu1.jpg", "/naran.jpg"],
    priceType: "/night",
    description: "Experience breathtaking mountain views with world-class hospitality in the heart of Northern Pakistan. Our resort offers a perfect blend of comfort, luxury, and natural beauty, making it an ideal destination for travelers seeking tranquility and adventure.",
    fullDescription: "Nestled in the scenic mountains of Northern Pakistan, our Premium Mountain Resort provides guests with an unforgettable experience. Wake up to stunning valley views, enjoy fresh mountain air, and indulge in authentic local cuisine. Our resort features modern amenities while maintaining the charm of traditional architecture. Whether you're here for adventure or relaxation, our dedicated staff ensures your stay is comfortable and memorable.",
    amenities: [
      { icon: Wifi, label: "Free High-Speed Wi-Fi" },
      { icon: Coffee, label: "Complimentary Breakfast" },
      { icon: Car, label: "Free Parking" },
      { icon: Utensils, label: "On-site Restaurant" },
      { icon: Star, label: "24/7 Room Service" },
      { icon: Info, label: "Tour Desk" }
    ],
    checkIn: "12:00 PM",
    checkOut: "12:00 PM",
    rooms: [
      {
        type: "Standard Room",
        price: 8000,
        capacity: "2 Adults",
        size: "250 sq ft",
        features: ["Queen Bed", "Mountain View", "Private Bathroom", "TV", "Mini Fridge"]
      },
      {
        type: "Deluxe Room",
        price: 12000,
        capacity: "2 Adults + 1 Child",
        size: "350 sq ft",
        features: ["King Bed", "Valley View", "Balcony", "Private Bathroom", "TV", "Mini Fridge", "Seating Area"]
      },
      {
        type: "Family Suite",
        price: 18000,
        capacity: "4 Adults",
        size: "500 sq ft",
        features: ["2 Bedrooms", "Panoramic View", "Large Balcony", "2 Bathrooms", "Living Room", "TV", "Kitchenette"]
      }
    ],
    rules: [
      "Check-in time: 12:00 PM",
      "Check-out time: 12:00 PM",
      "Valid ID required at check-in",
      "Smoking is not allowed inside rooms",
      "Pets are not allowed",
      "Guests are responsible for any damage to hotel property",
      "Outside food is not allowed in restaurant area",
      "Quiet hours: 10:00 PM - 7:00 AM"
    ],
    policies: [
      "Cancellation: Free cancellation up to 48 hours before check-in",
      "Late check-out subject to availability (additional charges may apply)",
      "Early check-in subject to availability",
      "Children under 5 stay free when using existing bedding",
      "Extra bed available on request (additional charges apply)"
    ]
  }
};

export default function HotelDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const hotel = hotelDetails[id];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(0);

  if (!hotel) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Hotel Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    const room = hotel.rooms[selectedRoom];
    const message = `Hi, I want to book ${hotel.name}%0A%0ARoom Type: ${room.type}%0APrice: PKR ${room.price}/night%0ACapacity: ${room.capacity}`;
    const whatsappUrl = `https://wa.me/923153309070?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Image Gallery */}
      <section className="relative pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-4">
            <Image
              src={hotel.images[selectedImage]}
              alt={hotel.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Star className="w-5 h-5 fill-white" />
              <span className="font-bold">{hotel.rating}/5.0</span>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {hotel.images.map((img: string, index: number) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedImage === index ? 'ring-4 ring-red-600' : 'hover:opacity-75'
                }`}
              >
                <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Hotel Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {hotel.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-lg">{hotel.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">({hotel.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {hotel.description}
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {hotel.fullDescription}
              </p>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity: any, index: number) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Check-in/Check-out */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Check-in & Check-out</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="text-sm text-gray-600">Check-in</div>
                      <div className="text-lg font-bold text-gray-900">{hotel.checkIn}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="text-sm text-gray-600">Check-out</div>
                      <div className="text-lg font-bold text-gray-900">{hotel.checkOut}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hotel Rules</h2>
                <div className="space-y-2">
                  {hotel.rules.map((rule: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policies</h2>
                <div className="space-y-2">
                  {hotel.policies.map((policy: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{policy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Select Room Type</h3>
                
                {/* Room Selection */}
                <div className="space-y-3 mb-6">
                  {hotel.rooms.map((room: any, index: number) => (
                    <div
                      key={index}
                      onClick={() => setSelectedRoom(index)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedRoom === index
                          ? 'border-red-600 bg-red-50'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-bold text-gray-900">{room.type}</div>
                          <div className="text-sm text-gray-600">{room.capacity}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">
                            PKR {room.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-600">/night</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">{room.size}</div>
                    </div>
                  ))}
                </div>

                {/* Selected Room Features */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Room Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {hotel.rooms[selectedRoom].features.map((feature: string, index: number) => (
                      <span key={index} className="text-xs bg-white text-gray-700 px-2 py-1 rounded border border-gray-200">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={handleBooking}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </button>

                <div className="mt-4 text-center text-sm text-gray-600">
                  Instant confirmation via WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Your Booking?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us for special rates, group bookings, or any questions about your stay.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/923153309070"
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +92 315 3309070
            </a>
            <a
              href="mailto:Info.Towardsdestination@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
