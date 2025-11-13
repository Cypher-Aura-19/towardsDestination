"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Calendar, Users, Star, Bus, Filter, X, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Tour packages data
const allPackages = [
  {
    id: 1,
    title: "KUMRAT, KALA CHASHMA & DOJANGA MEADOWS (3 Days) Tour",
    duration: "3 days 2 nights",
    location: "Kumrat Valley",
    city: "Kumrat",
    price: 14500,
    image: "/kumrat.jpg",
    rating: 4.8,
    reviews: 125
  },
  {
    id: 2,
    title: "5 Days Trip to Hunza & Naltar Valley",
    duration: "5 Days, 4 Nights",
    location: "Hunza & Naltar",
    city: "Hunza",
    price: 22000,
    image: "/hunza1.jpg",
    rating: 4.9,
    reviews: 210
  },
  {
    id: 3,
    title: "Naran & Shogran Honeymoon Tour Package (3 Days)",
    duration: "3 Days 2 Nights",
    location: "Naran & Shogran",
    city: "Naran",
    price: 105000,
    image: "/naran1.jpg",
    rating: 5.0,
    reviews: 98
  },
  {
    id: 4,
    title: "3 Days – Naran | Shogran Group Tour Packages",
    duration: "3 Days 2 Nights",
    location: "Naran & Shogran",
    city: "Naran",
    price: 14000,
    image: "/naran1.jpg",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    title: "5 Days Trip to Neelum Valley | Taobat| Arang Kel & Ratti Gali",
    duration: "5 Days 4 Nights",
    location: "Neelum Valley, Kashmir",
    city: "Neelum",
    price: 25000,
    image: "/neelum5.jpg",
    rating: 4.9,
    reviews: 189
  },
  {
    id: 6,
    title: "4 Days Trip to Ratti Gali & Arang kel",
    duration: "4 Days 3 Nights",
    location: "Kashmir",
    city: "Kashmir",
    price: 17000,
    image: "/neelum.jpg",
    rating: 4.6,
    reviews: 87
  },
  {
    id: 7,
    title: "Taobat & Arang kel Kashmir : 4 Days Trip",
    duration: "4 Days 3 Nights",
    location: "Kashmir",
    city: "Kashmir",
    price: 17500,
    image: "/neelum.jpg",
    rating: 4.7,
    reviews: 92
  },
  {
    id: 8,
    title: "4 Days Trip to Kumrat | Jahaz Banda & Katora Lake",
    duration: "4 Days 3 Nights",
    location: "Kumrat Valley",
    city: "Kumrat",
    price: 17500,
    image: "/kumrat.jpg",
    rating: 4.8,
    reviews: 143
  },
  {
    id: 9,
    title: "3 Days Trip to Ratti Gali Kashmir",
    duration: "3 Days 2 Nights",
    location: "Kashmir",
    city: "Kashmir",
    price: 15500,
    image: "/neelum3.jpg",
    rating: 4.5,
    reviews: 76
  },
  {
    id: 10,
    title: "5 Days Trip to Fairy Meadows & Beyal Camp",
    duration: "5 Days 4 Nights",
    location: "Fairy Meadows",
    city: "Fairy Meadows",
    price: 24000,
    image: "/logo.jpeg",
    rating: 4.9,
    reviews: 167
  },
  {
    id: 11,
    title: "6 Days Trip to Astore | Minimarg | Rama Meadows| Deosai",
    duration: "6 Days 5 Nights",
    location: "Astore & Deosai",
    city: "Astore",
    price: 28000,
    image: "/astore.jpg",
    rating: 4.8,
    reviews: 134
  },
  {
    id: 12,
    title: "8 Days Trip to Hunza & Skardu Valley",
    duration: "8 Days 7 Nights",
    location: "Hunza & Skardu",
    city: "Hunza",
    price: 32000,
    image: "/skardu8.jpg",
    rating: 4.9,
    reviews: 201
  },
  {
    id: 13,
    title: "6 Days Trip to Skardu & Deosai Plains",
    duration: "6 Days 5 Nights",
    location: "Skardu & Deosai",
    city: "Skardu",
    price: 26000,
    image: "/skardu6.jpg",
    rating: 4.8,
    reviews: 178
  },
  {
    id: 14,
    title: "3 Days Trip to Neelum Valley & Arang Kel",
    duration: "3 Days 2 Nights",
    location: "Neelum Valley, Kashmir",
    city: "Neelum",
    price: 14000,
    image: "/neelum.jpg",
    rating: 4.6,
    reviews: 112
  },
  {
    id: 15,
    title: "3 Days Trip to Kalam & Malam Jabba, Swat Valley",
    duration: "3 Days 2 Nights",
    location: "Swat Valley",
    city: "Swat",
    price: 14000,
    image: "/swat.jpg",
    rating: 4.7,
    reviews: 145
  }
];

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialLocation = searchParams.get("location") || "";
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";
  const initialGuests = searchParams.get("guests") || "";

  // Filter states
  const [location, setLocation] = useState(initialLocation);
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guests, setGuests] = useState(initialGuests);
  const [priceRange, setPriceRange] = useState("all");
  const [duration, setDuration] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);

  // Filter packages based on all criteria
  let filteredPackages = location
    ? allPackages.filter((pkg) =>
        pkg.location.toLowerCase().includes(location.toLowerCase()) ||
        pkg.city.toLowerCase().includes(location.toLowerCase()) ||
        pkg.title.toLowerCase().includes(location.toLowerCase())
      )
    : allPackages;

  // Apply price filter
  if (priceRange !== "all") {
    filteredPackages = filteredPackages.filter((pkg) => {
      if (priceRange === "budget") return pkg.price < 15000;
      if (priceRange === "mid") return pkg.price >= 15000 && pkg.price < 25000;
      if (priceRange === "premium") return pkg.price >= 25000;
      return true;
    });
  }

  // Apply duration filter
  if (duration !== "all") {
    filteredPackages = filteredPackages.filter((pkg) => {
      const days = parseInt(pkg.duration);
      if (duration === "short") return days <= 3;
      if (duration === "medium") return days >= 4 && days <= 5;
      if (duration === "long") return days >= 6;
      return true;
    });
  }

  // Apply sorting
  if (sortBy === "price-low") {
    filteredPackages.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredPackages.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredPackages.sort((a, b) => b.rating - a.rating);
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (checkIn) params.append("checkIn", checkIn);
    if (checkOut) params.append("checkOut", checkOut);
    if (guests) params.append("guests", guests);
    router.push(`/search?${params.toString()}`);
  };

  const clearFilters = () => {
    setPriceRange("all");
    setDuration("all");
    setSortBy("relevance");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Search Results Header with Search Bar */}
      <section className="pt-32 pb-8 bg-linear-to-br from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Search Results
          </h1>
          
          {/* Search Bar in Results Page */}
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 mb-6">
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Search location..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Search
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Search Info */}
          <div className="flex items-center justify-between text-white">
            <div>
              {location && <p className="text-lg mb-1">📍 <span className="font-semibold">{location}</span></p>}
              {guests && <p className="text-sm opacity-90">👥 {guests} Guest{guests !== "1" ? "s" : ""}</p>}
            </div>
            <p className="text-lg">
              <span className="font-bold text-2xl">{filteredPackages.length}</span> tours found
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-red-600 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span className="font-semibol text-gray-900 ">Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-semibold text-gray-900"
              >
                <option value="relevance" className="font-semibold">Sort by: Relevance</option>
                <option value="price-low" className="font-semibold">Price: Low to High</option>
                <option value="price-high" className="font-semibold">Price: High to Low</option>
                <option value="rating" className="font-semibold">Highest Rating</option>
              </select>

              {(priceRange !== "all" || duration !== "all") && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Expandable Filters */}
            {showFilters && (
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value="all"
                          checked={priceRange === "all"}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="text-red-600 focus:ring-red-600"
                        />
                        <span className="text-gray-700">All Prices</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value="budget"
                          checked={priceRange === "budget"}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="text-red-600 focus:ring-red-600"
                        />
                        <span className="text-gray-700">Budget (Under PKR 15,000)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value="mid"
                          checked={priceRange === "mid"}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="text-red-600 focus:ring-red-600"
                        />
                        <span className="text-gray-700">Mid-Range (PKR 15,000 - 25,000)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value="premium"
                          checked={priceRange === "premium"}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="text-red-600 focus:ring-red-600"
                        />
                        <span className="text-gray-700">Premium (PKR 25,000+)</span>
                      </label>
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Duration</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="duration"
                          value="all"
                          checked={duration === "all"}
                          onChange={(e) => setDuration(e.target.value)}
                          className="text-red-600 focus:ring-red-600"
                        />
                        <span className="text-gray-700">All Durations</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="duration"
                          value="short"
                          checked={duration === "short"}
                          onChange={(e) => setDuration(e.target.value)}
                          className="text-red-600 focus:ring-red-600"
                        />
                        <span className="text-gray-700">Short (1-3 Days)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="duration"
                          value="medium"
                          checked={duration === "medium"}
                          onChange={(e) => setDuration(e.target.value)}
                          className="text-red-600 focus:ring-red-600"
                        />
                        <span className="text-gray-700">Medium (4-5 Days)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="duration"
                          value="long"
                          checked={duration === "long"}
                          onChange={(e) => setDuration(e.target.value)}
                          className="text-red-600 focus:ring-red-600"
                        />
                        <span className="text-gray-700">Long (6+ Days)</span>
                      </label>
                    </div>
                  </div>

                  {/* Active Filters Summary */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Active Filters</h3>
                    <div className="space-y-2">
                      {priceRange !== "all" && (
                        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm">
                          <span>Price: {priceRange === "budget" ? "Budget" : priceRange === "mid" ? "Mid-Range" : "Premium"}</span>
                          <button onClick={() => setPriceRange("all")} className="hover:bg-red-100 rounded-full">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                      {duration !== "all" && (
                        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm ml-2">
                          <span>Duration: {duration === "short" ? "Short" : duration === "medium" ? "Medium" : "Long"}</span>
                          <button onClick={() => setDuration("all")} className="hover:bg-red-100 rounded-full">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                      {priceRange === "all" && duration === "all" && (
                        <p className="text-gray-500 text-sm">No filters applied</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <Link
                  key={pkg.id}
                  href={`/public-tours/by-road/${pkg.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Bus className="w-4 h-4 text-red-600" />
                      <span className="text-xs font-bold text-red-600">By Road</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-semibold">{pkg.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {pkg.title}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>

                    {/* Reviews */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-900">
                          {pkg.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        ({pkg.reviews} reviews)
                      </span>
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Starting from</p>
                        <p className="text-2xl font-bold text-red-600">
                          PKR {pkg.price.toLocaleString()}
                        </p>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
              <div className="text-7xl mb-6">🔍</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                No tours found
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                We couldn't find any tours matching your criteria. Try adjusting your filters or search terms.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={clearFilters}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Clear Filters
                </button>
                <Link
                  href="/"
                  className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading search results...</div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
