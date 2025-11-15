"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Car, Calendar, Users, Luggage, DoorOpen, Settings, MapPin, Search, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TransportationPage() {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const cars = [
    {
      id: 1,
      name: "VAN - Classic",
      type: "Rent a car",
      price: 8000,
      passengers: 12,
      gearShift: "Auto",
      baggage: 8,
      doors: 3,
      image: "/car/1.png",
      rating: 4.8,
      reviews: 45,
      description: "Perfect for large groups and family trips. Spacious interior with comfortable seating for 12 passengers."
    },
    {
      id: 2,
      name: "Toyota Hiace",
      type: "Rent a car",
      price: 10000,
      passengers: 9,
      gearShift: "Auto",
      baggage: 7,
      doors: 3,
      image: "/car/2.png",
      rating: 4.9,
      reviews: 67,
      description: "Reliable and comfortable van ideal for group tours. Excellent fuel efficiency and smooth ride."
    },
    {
      id: 3,
      name: "Toyota Coaster",
      type: "Rent a car",
      price: 20000,
      passengers: 25,
      gearShift: "Auto",
      baggage: 15,
      doors: 2,
      image: "/car/3.png",
      rating: 4.7,
      reviews: 32,
      description: "Large capacity bus perfect for big groups. Maximum comfort and space for extended journeys."
    },
    {
      id: 4,
      name: "Mountain Jeep",
      type: "For Rent",
      price: 7998,
      passengers: 4,
      gearShift: "Manual",
      baggage: 4,
      doors: 2,
      image: "/car/4.png",
      rating: 5.0,
      reviews: 89,
      description: "Rugged 4x4 jeep designed for mountain terrains. Perfect for adventure trips and off-road expeditions."
    },
  
    {
      id: 5,
      name: "Toyota Grand Cabin",
      type: "Rent a car",
      price: 13000,
      passengers: 13,
      gearShift: "Auto",
      baggage: 11,
      doors: 3,
      image: "/car/6.png",
      rating: 4.8,
      reviews: 78,
      description: "Spacious cabin with excellent legroom. Ideal for family trips and group travel with ample storage."
    },
    {
      id: 6,
      name: "Honda BRV",
      type: "Rent a car",
      price: 8000,
      passengers: 6,
      gearShift: "Auto",
      baggage: 3,
      doors: 4,
      image: "/car/6.png",
      rating: 4.6,
      reviews: 43,
      description: "Compact SUV with modern features. Great fuel economy and comfortable for small groups."
    },
    {
      id: 7,
      name: "Toyota Corolla",
      type: "Sedan Car",
      price: 7000,
      passengers: 3,
      gearShift: "Auto",
      baggage: 3,
      doors: 4,
      image: "/car/7.png",
      rating: 4.7,
      reviews: 92,
      description: "Economical sedan perfect for city travel and short trips. Reliable and fuel-efficient."
    },

    {
      id: 8,
      name: "Corolla Grande",
      type: "Sedan Car",
      price: 10000,
      passengers: 5,
      gearShift: "Auto",
      baggage: 3,
      doors: 4,
      image: "/car/8.jpg",
      rating: 4.7,
      reviews: 92,
      description: "Economical sedan perfect for city travel and short trips. Reliable and fuel-efficient."
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ location, pickupDate, pickupTime, returnDate, returnTime });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Car Rental Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-black/70 via-red-900/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Company Badge */}
          <div className="mb-6">
            <span className="inline-block bg-white text-red-600 px-4 py-2 rounded-md text-sm font-bold">
              🚗 TOWARDSDESTINATION.PK - Car Rental Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Car Rental Services
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Choose from our wide range of vehicles for your Northern Pakistan adventures. From economical sedans to luxury SUVs and spacious vans.
          </p>
          
          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-6 text-center">
              Find Your Perfect Vehicle
            </h3>
            
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Location */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where are you going?"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Pick Up Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-600" />
                  Pick Up Date
                </label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Pick Up Time */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Pick Up Time</label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Return Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Return Date</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Search Button */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 invisible">Search</label>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 h-[46px] shadow-lg hover:shadow-xl"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🚗 AVAILABLE VEHICLES
            </span>
            <h2 className="text-4xl font-extrabold text-red-600 mb-4">
              Choose Your Perfect Vehicle
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              All vehicles are well-maintained, insured, and come with professional drivers upon request.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Link 
                key={car.id}
                href={`/transportation/${car.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-red-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Car className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-medium text-red-600">{car.type}</span>
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-gray-900">{car.rating}</span>
                    <span className="text-xs text-gray-500">({car.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    {car.name}
                  </h3>
                  
                  {/* Car Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-red-600" />
                      <span className="text-sm">{car.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Settings className="w-4 h-4 text-red-600" />
                      <span className="text-sm">{car.gearShift}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Luggage className="w-4 h-4 text-red-600" />
                      <span className="text-sm">{car.baggage} Baggage</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DoorOpen className="w-4 h-4 text-red-600" />
                      <span className="text-sm">{car.doors} Doors</span>
                    </div>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-red-600">PKR {car.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">per day</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
            Why Choose Our Car Rental Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Well-Maintained Fleet</h3>
              <p className="text-gray-600">
                All our vehicles are regularly serviced and maintained to ensure your safety and comfort.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Professional Drivers</h3>
              <p className="text-gray-600">
                Experienced and licensed drivers available upon request for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Flexible Options</h3>
              <p className="text-gray-600">
                Choose from self-drive or chauffeur-driven options to suit your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

