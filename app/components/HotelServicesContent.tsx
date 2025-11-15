"use client";

import { ArrowRight, MapPin, Star, Wifi, Coffee, Car, Utensils, Hotel, Award, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HotelServicesContent() {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);

  const hotelServices = [
    {
      id: 1,
      name: "Premium Mountain Resort",
      location: "Northern Pakistan",
      rating: 4.8,
      reviews: 245,
      price: 8000,
      image: "/hotel.jpg",
      amenities: ["Free Wi-Fi", "Breakfast", "Parking", "Restaurant"],
      priceType: "/night",
      description: "Experience breathtaking mountain views with world-class hospitality in the heart of Northern Pakistan.",
      fullAmenities: [
        { icon: Wifi, label: "Free Wi-Fi" },
        { icon: Coffee, label: "Complimentary Breakfast" },
        { icon: Car, label: "Free Parking" },
        { icon: Utensils, label: "Restaurant" }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hotel.jpg"
            alt="Hotel Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Company Badge */}
          <div className="mb-6">
            <span className="inline-block bg-white text-red-600 px-4 py-2 rounded-md text-sm font-bold">
              🏨 TOWARDSDESTINATION.PK - Premium Hotel Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Premium Hotel Accommodations<br />
            <span className="bg-white text-red-600 px-4 py-2 inline-block rounded-lg mt-2">Comfort & Hospitality</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
            Stay in comfort at our partner hotels across Northern Pakistan. Experience world-class amenities, warm hospitality, and breathtaking mountain views.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-xs text-white/80 font-semibold">Hotels</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">4.7★</div>
              <div className="text-xs text-white/80 font-semibold">Avg Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/80 font-semibold">Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hotel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Prime Locations</h3>
              <p className="text-gray-600">
                Hotels strategically located near major tourist attractions and scenic spots.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Handpicked hotels with verified reviews and quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Competitive rates with special packages for tour groups and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg">
              🏨 OUR PARTNERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              Featured Hotels
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Discover our carefully selected partner hotels offering comfort, convenience, and exceptional service.
            </p>
          </div>

          {/* Hotels Grid */}
          <div className="max-w-2xl mx-auto">
          {hotelServices.map((hotel, index) => (
            <a
              href={`/hotel-services/${hotel.id}`}
              key={hotel.id}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2 animate-fade-in-up block"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ {hotel.rating}
                </div>
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-2 rounded-lg shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="text-xs font-semibold">PKR {hotel.price.toLocaleString()}</div>
                  <div className="text-xs">{hotel.priceType}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors line-clamp-2">
                  {hotel.name}
                </h3>
                
                {/* Location & Rating */}
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-3 pb-3 border-b border-gray-200">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({hotel.reviews} reviews)</span>
                </div>
                
                {/* Amenities */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 font-semibold mb-2">Amenities</div>
                  <div className="flex flex-wrap gap-1">
                    {hotel.amenities.slice(0, 2).map((amenity, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        +{hotel.amenities.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Book Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </a>
          ))}
          </div>

          {/* Selected Hotel Details */}
          {selectedHotel && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {(() => {
              const hotel = hotelServices.find(h => h.id === selectedHotel);
              return hotel ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {hotel.name}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <span className="text-lg">{hotel.location}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-gray-600">{hotel.rating}/5.0 ({hotel.reviews} reviews)</span>
                    </div>

                    <p className="text-gray-600 text-lg mb-6">
                      {hotel.description}
                    </p>

                    {/* Amenities */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {hotel.fullAmenities.map((amenity, index) => {
                          const IconComponent = amenity.icon;
                          return (
                            <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-red-600" />
                              </div>
                              <span className="text-gray-700 font-medium">{amenity.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-red-50 p-6 rounded-xl mb-6 border border-red-200">
                      <div className="text-sm text-gray-600 mb-2">Per Night Rate</div>
                      <div className="text-4xl font-bold text-red-600 mb-2">
                        PKR {hotel.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">{hotel.priceType}</div>
                    </div>

                    {/* Book Button */}
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                      Book Your Stay
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
          )}
        </div>
      </section>
    </>
  );
}
