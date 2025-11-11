"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Calendar, Users, Check, X, Phone, Mail, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


const packageDetails: any = {
  "1": {
    id: 1,
    title: "KUMRAT, KALA CHASHMA & DOJANGA MEADOWS (3 Days) Tour",
    location: "Kumrat Valley",
    duration: "3 days 2 nights",
    price: 14500,
    image: "/kumrat.jpg",
    groupSize: "20 - 25",
    tourType: "Daily Tour",
    description: "Experience the mesmerizing view of Kumrat, Kala Chashma & Dojanga Meadows with Nature Explorer Tours Pvt. Ltd. Book your Trip Now and Experience the Beauty of Kumrat Valley with Nature Explorer Tours. Nature Explorer Tours is known for planning and executing the best tours in North Pakistan, including trekking tours, Cycling Tours, Camping Tours, Cultural Tours and much more.",
    pointsToVisit: [
      "Kumrat Valley",
      "Kala Chashma",
      "Do Aabshaar",
      "Dojanga Meadows",
      "Kumrat Forest"
    ],
    highlights: [
      "Visit to Kumrat Valley and Kala Chashma",
      "Explore Dojanga Meadows",
      "Experience Do Aabshaar waterfalls",
      "Scenic drive through Kumrat Forest",
      "Musical Night/Bonfire"
    ],
    included: [
      "Transportation (Grand Cabin or Coaster)",
      "Accommodations (according to Package)",
      "Food (2 Dinners, 3 Breakfasts)",
      "Professional Guide",
      "Sight Seeing",
      "Musical Night/Bonfire"
    ],
    excluded: [
      "Any Kind of Entry Tickets",
      "Jeep Charges for Dojanga Meadows",
      "Lunches",
      "Laundary/Press/Photography",
      "Any kind of Extra charges incase of Road Blocks",
      "Any other Charages which are not included in the Package"
    ],
    hotelList: [
      { location: "Kumrat", standard: "Maskan Hotel", deluxe: "Khanabadosh Hut/ Pods", premium: "Khanabadosh Chalet", executive: "Khanabadosh Glamps" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Every Friday Morning", departure2: "—" },
      { city: "Lahore", departure1: "Every Thursday Night", departure2: "—" }
    ],
    pricing: {
      quadSharing: { standard: "14,500", deluxe: "Not Available", premium: "Not Available", executive: "Not Available" },
      twinSharing: { standard: "17,000", deluxe: "27,900", premium: "42,000", executive: "44,500" },
      soloSharing: { standard: "Not Available", deluxe: "Not Available", premium: "Not Available", executive: "Not Available" }
    },
    exceptions: [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    notes: [
      "Any Kind of Jeeps and Entry tickets are not included in the package.",
      "Jeep Charges for Kumrat Valley will be Rs. 2500/head.",
      "All the Hotels are subject to availability and can be changed due to issues.",
      "On Eid Days only Standard Package will be available"
    ],
    itinerary: [
      {
        day: "Day 00",
        title: "Departure from ISB/LHR",
        description: "Lahore Departure Point: Timings: 09:00 PM on from Lahore Pick Up Point: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore. Islamabad Departure Point: Timings: 3:30AM from Islamabad Pick Up Point: Daewoo terminal near EME College NUST."
      },
      {
        day: "Day 01",
        title: "ISLAMABD - THAL - KUMRAT FOREST",
        description: "Pickup members from Islambad at 4:30 am. Short stay at Timergara for Breakfast. Short stay at Sherangal for Rest. Arrival to Thal. Transfer to Jeeps for Kumrat Forest. Arrival to Hotel Check Inn Hotel. Overnight at Kumrat Forest."
      },
      {
        day: "Day 02",
        title: "Kumrat - Aabshar - Dojanga",
        description: "Breakfast Call. Transfer to Jeeps. Enjoy the Beautiful Ride of Jeep in the middle of Forest. Visit Do Aabshaar. Visit Kala Chashma. Visit Dojanga Meadows. Spend Quality Time There. Back to Kumrat Forest. Overnight at Kumrat."
      },
      {
        day: "Day 03",
        title: "Thal - Islamabad - Lahore",
        description: "Breakfast call. Transfer to jeep and Arrive to Thal. Shift luggage to Coasters. Departure to Islamabad and Lahore. Short stays on the ways. Arrival to Islamabad. Short stay at Bhera. Arrival to Lahore."
      }
    ],
    contact: {
      email: "info@towardsdestination.pk",
      whatsapp: "+92 344 7079307",
      instagram: "NATURE EXPLORER TOURS"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-20 adults"
  }
};

export default function TourDetailPage() {
  const params = useParams();
  const packageId = params.id as string;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [bookingData, setBookingData] = useState({
    date: "",
    tripFrom: "Islamabad",
    sharingType: "",
    packageType: "",
    adults: 1,
    children: 0,
    infants: 0
  });

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  // Get package details or use demo data
  const pkg = packageDetails[packageId] || packageDetails["1"];

  const handleBookingChange = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const incrementGuest = (type: 'adults' | 'children' | 'infants') => {
    setBookingData(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrementGuest = (type: 'adults' | 'children' | 'infants') => {
    setBookingData(prev => ({ ...prev, [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] - 1) }));
  };

  const handleBook = () => {
    const message = `*Tour Booking - ${pkg.title}*%0A%0A*Date:* ${bookingData.date}%0A*Trip From:* ${bookingData.tripFrom}%0A*Sharing Type:* ${bookingData.sharingType}%0A*Package Type:* ${bookingData.packageType}%0A*Adults:* ${bookingData.adults}%0A*Children:* ${bookingData.children}%0A*Infants:* ${bookingData.infants}`;
    
    const whatsappNumber = "923447079307";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*Tour Inquiry - ${pkg.title}*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Package:* ${pkg.title}%0A*Price:* PKR ${pkg.price.toLocaleString()}%0A%0A*Message:*%0A${formData.message}`;
    
    // Updated WhatsApp number from HTML
    const whatsappNumber = "923447079307"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setShowInquiryForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section with Breadcrumb and Title */}
      <section className="bg-white border-b border-gray-200 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Province Tag */}
          <div className="mb-4">
            <span className="text-teal-600 font-semibold text-sm">
              Khyber Pakhtunkhwa (KPK)
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {pkg.title}
          </h1>
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-teal-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/public-tours/by-road" className="hover:text-teal-600 transition-colors">Khyber Pakhtunkhwa (KPK)</a>
            <span>/</span>
            <span className="text-gray-400">{pkg.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content with Image and Sidebar */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hero Image - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
                priority
              />
              {/* Share and Favorite Buttons */}
              <div className="absolute top-4 right-4 flex gap-3">
                <button className="w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center shadow-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center shadow-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Form - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Price Header */}
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <div className="text-sm text-gray-600 mb-1">From:</div>
                <div className="text-3xl font-bold text-gray-900">PKR {pkg.price.toLocaleString()}</div>
              </div>

              {/* Toggle Buttons */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setShowInquiryForm(false)}
                  className={`flex-1 py-4 font-semibold text-base transition-all ${
                    !showInquiryForm 
                      ? 'bg-green-700 text-white shadow-inner' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Book
                </button>
                <button
                  onClick={() => setShowInquiryForm(true)}
                  className={`flex-1 py-4 font-semibold text-base transition-all ${
                    showInquiryForm 
                      ? 'bg-green-700 text-white shadow-inner' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Inquiry
                </button>
              </div>

              <div className="p-6">
                {!showInquiryForm ? (
                  /* Booking Form */
                  <div className="space-y-5">
                    {/* Date */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => handleBookingChange('date', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 bg-white"
                        placeholder="11/14/2025"
                      />
                    </div>

                    {/* Trip From */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Trip From:</label>
                      <select
                        value={bookingData.tripFrom}
                        onChange={(e) => handleBookingChange('tripFrom', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 bg-white"
                      >
                        <option value="Islamabad">Islamabad</option>
                        <option value="Lahore">Lahore</option>
                      </select>
                    </div>

                    {/* Sharing Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Sharing Type:</label>
                      <select
                        value={bookingData.sharingType}
                        onChange={(e) => handleBookingChange('sharingType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 bg-white"
                      >
                        <option value="">Select Package</option>
                        <option value="Quad Sharing">Quad Sharing</option>
                        <option value="Twin Sharing">Twin Sharing</option>
                        <option value="Solo Sharing">Solo Sharing</option>
                      </select>
                    </div>

                    {/* Package Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Package Type</label>
                      <select
                        value={bookingData.packageType}
                        onChange={(e) => handleBookingChange('packageType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 bg-white"
                      >
                        <option value="">Select Package</option>
                        <option value="Standard">Standard</option>
                        <option value="Deluxe">Deluxe</option>
                        <option value="Premium">Premium</option>
                        <option value="Executive">Executive</option>
                      </select>
                    </div>

                    {/* Adults */}
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <div className="font-semibold text-gray-900">Adults</div>
                        <div className="text-sm text-gray-500">Age 18+</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decrementGuest('adults')}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:bg-green-50 transition-colors"
                          type="button"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-semibold text-gray-900">{bookingData.adults}</span>
                        <button
                          onClick={() => incrementGuest('adults')}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:bg-green-50 transition-colors"
                          type="button"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <div className="font-semibold text-gray-900">Children</div>
                        <div className="text-sm text-gray-500">Age 6-17</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decrementGuest('children')}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:bg-green-50 transition-colors"
                          type="button"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-semibold text-gray-900">{bookingData.children}</span>
                        <button
                          onClick={() => incrementGuest('children')}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:bg-green-50 transition-colors"
                          type="button"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* More Options Toggle */}
                    <button
                      onClick={() => setShowMoreOptions(!showMoreOptions)}
                      className="w-full py-3 text-green-700 font-semibold hover:bg-green-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                      type="button"
                    >
                      More option
                      <svg 
                        className={`w-5 h-5 transition-transform ${showMoreOptions ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Infants (shown when More Options is expanded) */}
                    {showMoreOptions && (
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div>
                          <div className="font-semibold text-gray-900">Infants</div>
                          <div className="text-sm text-gray-500">Age 0-5</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => decrementGuest('infants')}
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:bg-green-50 transition-colors"
                            type="button"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-900">{bookingData.infants}</span>
                          <button
                            onClick={() => incrementGuest('infants')}
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:bg-green-50 transition-colors"
                            type="button"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Book Button */}
                    <button
                      onClick={handleBook}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg mt-6"
                      type="button"
                    >
                      Book Now
                    </button>
                  </div>
                ) : (
                  /* Inquiry Form */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone/WhatsApp *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Your Message or Inquiry *"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 resize-none text-gray-900 placeholder-gray-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+923480456456" className="text-sm hover:text-green-600 transition-colors">
                      +923 480 456 456
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@natureexplorertours.com" className="text-sm hover:text-green-600 transition-colors">
                      info@natureexplorertours.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections Below - Starts immediately after image */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Takes 2 columns to match image width */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-8 bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {pkg.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {pkg.description}
              </p>
            </section>

            {/* Tour Highlights */}
            <section className="mb-8 bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
              <ul className="space-y-3">
                {pkg.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Points to Visit */}
            {pkg.pointsToVisit && (
              <section className="mb-8 bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Points to Visit</h2>
                <ul className="space-y-3">
                  {pkg.pointsToVisit.map((point: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tour Details */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Details</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-900">Duration:</span>
                  <span className="text-gray-700 ml-2">{pkg.duration}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Tour Type:</span>
                  <span className="text-gray-700 ml-2">{pkg.tourType || "By Road"}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Group Size:</span>
                  <span className="text-gray-700 ml-2">{pkg.groupSize || "Varies"}</span>
                </div>
              </div>
            </section>

            {/* Why Choose */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose the {pkg.title}?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This package blends natural beauty, tranquility, and adventure, making it an ideal choice for travelers. From exploring scenic valleys to enjoying peaceful moments, every aspect is filled with memorable experiences and relaxation.
              </p>
            </section>

            {/* Pricing Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing Options</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Sharing Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Standard</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Deluxe</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Premium</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Executive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.pricing && (
                      <>
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="border text-black border-gray-300 px-4 py-3 font-semibold">Quad Sharing</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.quadSharing?.standard}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.quadSharing?.deluxe}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.quadSharing?.premium}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.quadSharing?.executive}</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="border  text-black border-gray-300 px-4 py-3 font-semibold">Twin Sharing</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.twinSharing?.standard}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.twinSharing?.deluxe}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.twinSharing?.premium}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.twinSharing?.executive}</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="border  text-black border-gray-300 px-4 py-3 font-semibold">Solo Sharing</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.soloSharing?.standard}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.soloSharing?.deluxe}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.soloSharing?.premium}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.soloSharing?.executive}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
              
              {/* Exceptions */}
              {pkg.exceptions && pkg.exceptions.length > 0 && (
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Exceptions:</h3>
                  <ul className="space-y-1">
                    {pkg.exceptions.map((exception: string, index: number) => (
                      <li key={index} className="text-sm text-gray-700">• {exception}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Notes */}
              {pkg.notes && pkg.notes.length > 0 && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Notes:</h3>
                  <ul className="space-y-1">
                    {pkg.notes.map((note: string, index: number) => (
                      <li key={index} className="text-sm text-gray-700">• {note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Hotel List */}
            {pkg.hotelList && pkg.hotelList.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hotel List</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Location</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Standard</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Deluxe</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Premium</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Executive</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.hotelList.map((hotel: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border  text-black border-gray-300 px-4 py-3 font-semibold">{hotel.location}</td>
                          <td className="border  text-black border-gray-300 px-4 py-3">{hotel.standard}</td>
                          <td className="border  text-black border-gray-300 px-4 py-3">{hotel.deluxe}</td>
                          <td className="border  text-black border-gray-300 px-4 py-3">{hotel.premium}</td>
                          <td className="border  text-black border-gray-300 px-4 py-3">{hotel.executive}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Departure Schedule */}
            {pkg.departureSchedule && pkg.departureSchedule.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Departure Schedule</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Departure City</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Departure 1</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Departure 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.departureSchedule.map((schedule: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border  text-black border-gray-300 px-4 py-3 font-semibold">{schedule.city}</td>
                          <td className="border  text-black border-gray-300 px-4 py-3">{schedule.departure1}</td>
                          <td className="border  text-black border-gray-300 px-4 py-3">{schedule.departure2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Included/Excluded */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Included/Excluded</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {pkg.included.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 mb-3">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  {pkg.excluded.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 mb-3">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tour Itinerary */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day: any, index: number) => (
                  <div key={index} className="border-l-4 border-red-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {day.day}: {day.title}
                    </h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            {pkg.contact && (
              <section className="mb-12 p-6 bg-linear-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="space-y-3">
                  {pkg.contact.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-green-700" />
                      <a href={`mailto:${pkg.contact.email}`} className="text-gray-700 hover:text-green-700">
                        {pkg.contact.email}
                      </a>
                    </div>
                  )}
                  {pkg.contact.whatsapp && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-700" />
                      <a href={`httpsTo://wa.me/${pkg.contact.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-700">
                        WhatsApp: {pkg.contact.whatsapp}
                      </a>
                    </div>
                  )}
                  {pkg.contact.instagram && (
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 text-green-700">📷</span>
                      <a href="https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-700">
                        {pkg.contact.instagram}
                      </a>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Bulk Discount */}
            {pkg.bulkDiscount && (
              <section className="mb-12">
                <div className="p-6 bg-linear-to-r from-red-50 to-orange-50 rounded-lg border-2 border-red-200">
                  <h3 className="text-xl font-bold text-red-700 mb-2">💰 Special Offer!</h3>
                  <p className="text-gray-700">{pkg.bulkDiscount}</p>
                </div>
              </section>
            )}
          </div>

          {/* Empty column for spacing */}
          <div className="lg:col-span-1"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}