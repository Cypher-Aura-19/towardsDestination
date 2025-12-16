"use client";
import ImportantInstructionsSection from '@/app/components/ImportantInstructionsSection';
import CancellationPolicySection from '@/app/components/CancellationPolicySection';

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { Car, Calendar, Users, Luggage, DoorOpen, Settings, MapPin, Check, X, Phone, Mail, MessageCircle, Star, Send, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const carDetails: any = {
  "2": {
    id: 2,
    name: "Hiace Grand Cabin",
    type: "Rent a car",
    price: 10000,
    passengers: "10-14",
    gearShift: "Auto",
    baggage: 10,
    doors: 3,
    image: "/car/hi1.jpg",
    rating: 4.9,
    reviews: 67,
    description: "The Toyota Hiace is a reliable and comfortable van ideal for group tours. Known for its excellent fuel efficiency and smooth ride, this vehicle is perfect for navigating through the scenic routes of Northern Pakistan. With seating for 9 passengers, it offers the perfect balance between capacity and comfort.",
    highlights: [
      "Reliable Toyota engineering",
      "Excellent fuel efficiency",
      "Smooth and comfortable ride",
      "Auto transmission",
      "Spacious for 9 passengers",
      "Perfect for group tours"
    ],
    features: [
      "Air Conditioning",
      "Power Steering",
      "Premium Sound System",
      "Comfortable Reclining Seats",
      "Large Storage Compartments",
      "Safety Airbags"
    ],
    included: [
      "Vehicle rental for specified duration",
      "Comprehensive insurance coverage",
      "24/7 roadside assistance",
      "Free delivery and pickup (within city limits)",
      "All taxes and fees included"
    ],
    excluded: [
      "Fuel charges",
      "Driver charges (if driver required)",
      "Toll taxes",
      "Parking fees",
      "Any damages or violations"
    ],
    suitableFor: [
      "Group tours",
      "Family vacations",
      "Business trips",
      "Northern Pakistan expeditions"
    ]
  },
  "3": {
    id: 3,
    name: "Coaster Saloon",
    type: "Rent a car",
    price: 20000,
    passengers: "20-25",
    gearShift: "Auto",
    baggage: 15,
    doors: 2,
    image: "/car/c1.jpg",
    rating: 4.7,
    reviews: 32,
    description: "The Toyota Coaster is a large capacity bus perfect for big groups. With maximum comfort and space for extended journeys, this vehicle can accommodate up to 25 passengers comfortably. Ideal for large tour groups, corporate events, and special occasions where maximum capacity is required.",
    highlights: [
      "Maximum capacity for 25 passengers",
      "Luxurious and spacious interior",
      "Perfect for large groups",
      "Comfortable for extended journeys",
      "Auto transmission",
      "Premium amenities"
    ],
    features: [
      "Climate Control System",
      "Premium Seating",
      "Entertainment System",
      "Large Luggage Compartments",
      "Safety Features",
      "Comfortable Legroom"
    ],
    included: [
      "Vehicle rental for specified duration",
      "Comprehensive insurance coverage",
      "24/7 roadside assistance",
      "Professional driver included",
      "All taxes and fees included"
    ],
    excluded: [
      "Fuel charges",
      "Toll taxes",
      "Parking fees",
      "Any damages or violations"
    ],
    suitableFor: [
      "Large tour groups",
      "Corporate events",
      "Wedding parties",
      "School trips",
      "Large family gatherings"
    ]
  },
  "6": {
    id: 6,
    name: "Honda BRV",
    type: "Rent a car",
    price: 8000,
    passengers: "4-6",
    gearShift: "Auto",
    baggage: 3,
    doors: 4,
    image: "/car/brv.jpg",
    rating: 4.6,
    reviews: 43,
    description: "The Honda BRV is a compact SUV with modern features. Great fuel economy and comfortable for small groups, this vehicle is perfect for city travel and short trips. With its modern design and efficient performance, it's an excellent choice for budget-conscious travelers.",
    highlights: [
      "Compact SUV with modern features",
      "Great fuel economy",
      "Comfortable for 6 passengers",
      "Perfect for city travel",
      "Auto transmission",
      "Budget-friendly option"
    ],
    features: [
      "Air Conditioning",
      "Power Steering",
      "Music System",
      "Comfortable Seats",
      "Modern Design",
      "Safety Features"
    ],
    included: [
      "Vehicle rental for specified duration",
      "Comprehensive insurance coverage",
      "24/7 roadside assistance",
      "Free delivery and pickup (within city limits)",
      "All taxes and fees included"
    ],
    excluded: [
      "Fuel charges",
      "Driver charges (if driver required)",
      "Toll taxes",
      "Parking fees",
      "Any damages or violations"
    ],
    suitableFor: [
      "City travel",
      "Small group trips",
      "Short journeys",
      "Budget-conscious travelers"
    ]
  },
  "7": {
    id: 7,
    name: "Corolla GLI/XLI",
    type: "Sedan Car",
    price: 7000,
    passengers: "2-4",
    gearShift: "Auto",
    baggage: 3,
    doors: 4,
    image: "/car/corrxli.jpg",
    rating: 4.7,
    reviews: 92,
    description: "The Toyota Corolla is an economical sedan perfect for city travel and short trips. Reliable and fuel-efficient, this vehicle is ideal for couples or small families. Known for its reliability and low maintenance costs, it's the perfect choice for budget-conscious travelers.",
    highlights: [
      "Economical and fuel-efficient",
      "Reliable Toyota engineering",
      "Perfect for city travel",
      "Comfortable for 3 passengers",
      "Auto transmission",
      "Low maintenance costs"
    ],
    features: [
      "Air Conditioning",
      "Power Steering",
      "Music System",
      "Comfortable Seats",
      "Fuel Efficient",
      "Safety Features"
    ],
    included: [
      "Vehicle rental for specified duration",
      "Comprehensive insurance coverage",
      "24/7 roadside assistance",
      "Free delivery and pickup (within city limits)",
      "All taxes and fees included"
    ],
    excluded: [
      "Fuel charges",
      "Driver charges (if driver required)",
      "Toll taxes",
      "Parking fees",
      "Any damages or violations"
    ],
    suitableFor: [
      "City travel",
      "Short trips",
      "Couples",
      "Small families",
      "Budget travelers"
    ]
  },
  "8": {
    id: 8,
    name: "Corolla Grandi X 1.8",
    type: "Sedan Car",
    price: 10000,
    passengers: "2-4",
    gearShift: "Auto",
    baggage: 3,
    doors: 4,
    image: "/car/cor1.jpg",
    rating: 4.7,
    reviews: 92,
    description: "The Corolla Grande is an upgraded version of the classic Corolla, offering more space and comfort. Perfect for city travel and short trips with enhanced features, this vehicle provides excellent value. With seating for 5 passengers, it's ideal for small families seeking comfort and reliability.",
    highlights: [
      "Spacious interior for 5 passengers",
      "Enhanced comfort features",
      "Reliable Toyota engineering",
      "Perfect for city and highway travel",
      "Auto transmission",
      "Great value for money"
    ],
    features: [
      "Air Conditioning",
      "Power Steering",
      "Premium Music System",
      "Comfortable Seats",
      "Fuel Efficient",
      "Advanced Safety Features"
    ],
    included: [
      "Vehicle rental for specified duration",
      "Comprehensive insurance coverage",
      "24/7 roadside assistance",
      "Free delivery and pickup (within city limits)",
      "All taxes and fees included"
    ],
    excluded: [
      "Fuel charges",
      "Driver charges (if driver required)",
      "Toll taxes",
      "Parking fees",
      "Any damages or violations"
    ],
    suitableFor: [
      "City travel",
      "Family trips",
      "Short to medium journeys",
      "Small families",
      "Comfortable travel"
    ]
  }
};

export default function CarDetailPage() {
  const params = useParams();
  const carId = params?.id as string;
  const car = carDetails[carId];

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");

  if (!car) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Car Not Found</h1>
          <p className="text-gray-600 mb-8">The car you're looking for doesn't exist.</p>
          <Link href="/transportation" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            Back to Car Rental
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppInquiry = () => {
    const message = `Hello! I'm interested in renting the ${car.name} (${car.type}).\n\nPrice: PKR ${car.price.toLocaleString()}/day\nPassengers: ${car.passengers}\nGear Shift: ${car.gearShift}\nBaggage: ${car.baggage}\nDoors: ${car.doors}`;
    const whatsappNumber = "923153309070";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/transportation" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <span>←</span> Back to Cars
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 mb-8 border border-red-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                  {car.type}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-2">
                  {car.name}
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{car.rating}</span>
                  <span className="text-sm">({car.reviews} reviews)</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-red-700">PKR {car.price.toLocaleString()}</p>
                <p className="text-sm text-gray-600">per day</p>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-red-700" />
                <div>
                  <p className="text-xs text-gray-600">Passengers</p>
                  <p className="font-semibold text-red-700">{car.passengers}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-red-700" />
                <div>
                  <p className="text-xs text-gray-600">Gear Shift</p>
                  <p className="font-semibold text-red-700">{car.gearShift}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Luggage className="w-5 h-5 text-red-700" />
                <div>
                  <p className="text-xs text-gray-600">Baggage</p>
                  <p className="font-semibold text-red-700">{car.baggage}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DoorOpen className="w-5 h-5 text-red-700" />
                <div>
                  <p className="text-xs text-gray-600">Doors</p>
                  <p className="font-semibold text-red-700">{car.doors}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={car.image}
                alt={car.name}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Description */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-red-200">
              <h2 className="text-3xl font-bold text-red-700 mb-6">
                About This Vehicle
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {car.description}
              </p>
              
              {/* WhatsApp Inquiry Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleWhatsAppInquiry}
                  type="button"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Inquire via WhatsApp
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Click to chat with us on WhatsApp for instant booking and queries
                </p>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-red-50 rounded-xl p-8 shadow-sm border border-red-200">
              <h2 className="text-2xl font-bold text-red-800 mb-6">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-red-200">
              <h2 className="text-2xl font-bold text-red-700 mb-6">
                Vehicle Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Suitable For */}
            <section className="bg-red-50 rounded-xl p-8 shadow-sm border border-red-200">
              <h2 className="text-2xl font-bold text-red-800 mb-6">
                Perfect For
              </h2>
              <div className="flex flex-wrap gap-3">
                {car.suitableFor.map((item: string, index: number) => (
                  <span key={index} className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium border border-red-300 hover:bg-red-200 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl p-6 shadow-lg border border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6">
                Book This Vehicle
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pick Up Date
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pick Up Time
                  </label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Return Time
                  </label>
                  <input
                    type="time"
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Price per day</span>
                    <span className="text-xl font-bold text-red-700">PKR {car.price.toLocaleString()}</span>
                  </div>
              </div>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mb-4"
              >
                <MessageCircle className="w-6 h-6" />
                Book via WhatsApp
              </button>

              <div className="border-t border-red-200 pt-6">
                <h4 className="font-semibold text-red-800 mb-3">Contact Us</h4>
                <div className="space-y-2 text-sm">
                  <a href="tel:+923174101300" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Phone className="w-4 h-4" />
                    +92 317 4101300
                  </a>
                  <a href="mailto:Info.Towardsdestination@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Mail className="w-4 h-4" />
                    Info.Towardsdestination@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Included/Excluded */}
            <div className="mt-6 space-y-6">
              <div className="bg-red-50 rounded-xl p-6 shadow-sm border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Included
                </h3>
                <ul className="space-y-2">
                  {car.included.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Not Included
                </h3>
                <ul className="space-y-2">
                  {car.excluded.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <X className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ImportantInstructionsSection />
<CancellationPolicySection />
<TourContactSection/>

      </div>

      <Footer />
    </div>
  );
}

