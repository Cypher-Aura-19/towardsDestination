"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Calendar, Users, Search, Star, Heart, Grid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    name: "Trout Villa, Skardu",
    location: "Skardu",
    address: "Trout Villa near Clifton Bridge",
    rating: 3,
    reviews: 0,
    price: 5000,
    image: "/tr.jpg",
    topPick: true,
    facilities: ["WiFi", "Parking", "Restaurant", "Room Service"]
  },
  {
    id: 2,
    name: "Parkway Hotel, Fizaghat Swat",
    location: "Fizaghat, Swat",
    address: "Fizaghat, Swat",
    rating: 3,
    reviews: 0,
    price: 8000,
    image: "/pr.jpeg",
    topPick: true,
    facilities: ["WiFi", "Parking", "Restaurant", "Garden"]
  },
  {
    id: 3,
    name: "ONE INN Hotel, Islamabad",
    location: "Islamabad",
    address: "Nust Uni EME Main Peshawar Rd, jhangi Syedian, Islamabad",
    rating: 4,
    reviews: 0,
    price: 3499,
    image: "/one.jpeg",
    topPick: true,
    facilities: ["WiFi", "Parking", "Restaurant", "Mountain View"]
  }
];

export default function HotelsPage() {
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1 guest, 1 room"
  });
  
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState({ min: 3000, max: 20000 });
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleSearch = () => {
    // Search functionality
    console.log("Searching with:", searchData);
  };

  const filteredHotels = hotels.filter(hotel => {
    const matchesPrice = hotel.price >= priceRange.min && hotel.price <= priceRange.max;
    const matchesRating = selectedRating ? hotel.rating >= selectedRating : true;
    return matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section with Search */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel.jpg"
            alt="Hotels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-center">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-white/90 text-center mb-12 max-w-3xl mx-auto">
            Discover comfortable accommodations across Pakistan's most beautiful destinations
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Check in
                </label>
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Check out
                </label>
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="w-4 h-4 inline mr-1" />
                  Guests
                </label>
                <input
                  type="text"
                  placeholder="1 guest, 1 room"
                  value={searchData.guests}
                  onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredHotels.length} hotels found
          </h2>
          
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>

            <div className="flex gap-2 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-red-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-red-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Filter Price</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Min price</span>
                    <span className="font-semibold">PKR {priceRange.min.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="3000"
                    max="20000"
                    step="1000"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Max price</span>
                    <span className="font-semibold">PKR {priceRange.max.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="3000"
                    max="20000"
                    step="1000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value)})}
                    className="w-full"
                  />
                </div>
                <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Apply
                </button>
              </div>

              {/* Rating Filter */}
              <div className="mb-6 pb-6 border-b">
                <h4 className="font-semibold text-gray-900 mb-3">Review Score</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                        className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                      />
                      <div className="flex items-center gap-1">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Hotel Star */}
              <div className="mb-6 pb-6 border-b">
                <h4 className="font-semibold text-gray-900 mb-3">Hotel Star</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <label key={stars} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-red-600 rounded focus:ring-red-500" />
                      <div className="flex items-center gap-1">
                        {[...Array(stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full text-red-600 hover:text-red-700 font-semibold py-2">
                Clear
              </button>
            </div>
          </div>

          {/* Hotels Grid */}
          <div className="lg:col-span-3">
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}>
              {filteredHotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  href={`/hotels/${hotel.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    {hotel.topPick && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Top Pick
                      </div>
                    )}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(hotel.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {hotel.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{hotel.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                          {hotel.rating}/5
                        </div>
                        <span className="text-sm text-gray-600">
                          {hotel.reviews > 0 ? `${hotel.reviews} reviews` : "No Review"}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">From:</div>
                        <div className="text-2xl font-bold text-red-600">
                          PKR {hotel.price.toLocaleString()}
                          <span className="text-sm text-gray-600 font-normal">/night</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
