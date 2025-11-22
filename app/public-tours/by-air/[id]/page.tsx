"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Calendar, Users, Check, X, Plane, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Helper function to make important words bold
const formatTextWithBold = (text: string) => {
  const importantWords = [
    // Locations
    'Hunza', 'Skardu', 'Gilgit', 'Fairy Meadows', 'Chitral', 'Kalash', 'Swat', 'Naran', 'Kaghan',
    'Attabad', 'Karimabad', 'Altit Fort', 'Baltit Fort', 'Deosai', 'Shangrila', 'Kachura',
    'Nanga Parbat', 'K2', 'Concordia', 'Astore', 'Rama', 'Malam Jabba', 'Mingora',
    // Activities
    'trekking', 'hiking', 'camping', 'rafting', 'bonfire', 'sightseeing', 'flight',
    // Important terms
    'Book', 'Experience', 'Beauty', 'Mesmerizing', 'mesmerizing',
    'Best', 'best', 'North Pakistan', 'Pakistan Tour', 'Valley', 'Lake', 'Meadows',
    // Tour specifics
    'Breakfast', 'Dinner', 'Accommodation', 'Transportation', 'Guide', 'Professional',
    'Flight', 'Airport', 'Standard Package', 'Deluxe', 'Premium', 'Executive'
  ];

  let formattedText = text;
  
  // First, make company name extra bold (font-weight: 900)
  const companyRegex = new RegExp(`\\b(towardsdestination\\.pk)\\b`, 'gi');
  formattedText = formattedText.replace(companyRegex, '<strong style="font-weight: 900;">$1</strong>');
  
  // Then apply regular bold to other important words
  importantWords.forEach(word => {
    const regex = new RegExp(`\\b(${word})\\b`, 'gi');
    formattedText = formattedText.replace(regex, '<strong>$1</strong>');
  });

  return formattedText;
};

// Component to render formatted text
const FormattedText = ({ text }: { text: string }) => {
  return (
    <span dangerouslySetInnerHTML={{ __html: formatTextWithBold(text) }} />
  );
};


const packageDetails: any = {
  "1": {
    id: 1,
    title: "Hunza Valley Premium Tour (By Air)",
    location: "Gilgit-Baltistan",
    duration: "5 Days / 4 Nights",
    price: 65000,
    image: "/hunza.jpg",
    groupSize: "15-20 person",
    tourType: "By Air",
    description: "Experience the mesmerizing beauty of Hunza Valley with @towardsdestination.pk. Book your Trip Now and Experience the Beauty of Hunza Valley with comfortable air travel. @towardsdestination.pk is known for planning and executing the best tours in North Pakistan with premium services.",
    pointsToVisit: [
      "Gilgit Airport",
      "Karimabad",
      "Altit Fort",
      "Baltit Fort",
      "Eagle's Nest Viewpoint",
      "Attabad Lake",
      "Passu Cones",
      "Hussaini Bridge",
      "Hunza Shopping Center"
    ],
    highlights: [
      "Round-trip flights from Islamabad to Gilgit",
      "4-star hotel accommodation",
      "Visit Karimabad & Altit Fort",
      "Eagle's Nest viewpoint",
      "Attabad Lake boat ride",
      "All meals included",
      "Professional tour guide"
    ],
    included: [
      "Round-trip flight tickets (Islamabad-Gilgit-Islamabad)",
      "Airport transfers",
      "4-star hotel accommodation (4 nights)",
      "All meals (4 Breakfasts, 4 Dinners)",
      "Professional tour guide",
      "Transportation in comfortable vehicles",
      "Entry tickets to forts",
      "Boat ride at Attabad Lake"
    ],
    excluded: [
      "Personal expenses",
      "Lunch meals",
      "Tips for guide and driver",
      "Any activities not mentioned in inclusions",
      "Travel insurance"
    ],
    hotelList: [
      { location: "Hunza", standard: "Hunza Serena Inn / Mountain Lodge / Valley View Hotel", deluxe: "Luxus Hunza / Premium Resort", premium: "Roomy Dastan / Luxury Villas", executive: "Ambiance Resort / Executive Suites" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Every Saturday Morning", departure2: "Every Wednesday Morning" }
    ],
    pricing: {
      perPerson: { standard: "65,000", deluxe: "85,000", premium: "105,000", executive: "125,000" }
    },
    exceptions: [
      "Kids age 5-12: 50% charges",
      "Kids age <= 4: 25% charges"
    ],
    notes: [
      "Flight schedules are subject to weather conditions",
      "All hotels are subject to availability and may be changed due to unforeseen circumstances",
      "Baggage allowance: 20kg check-in + 7kg hand carry",
      "Valid CNIC/Passport required for domestic flights"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Gilgit (By Air) - Hunza",
        description: "Morning flight from Islamabad to Gilgit. Enjoy spectacular aerial views of Nanga Parbat and other peaks. Upon arrival, drive to Hunza Valley (2 hours). Check-in at hotel. Evening free for rest. Dinner and overnight at Hunza."
      },
      {
        day: "Day 02",
        title: "Hunza Valley Exploration",
        description: "After breakfast, visit Karimabad. Explore Baltit Fort and Altit Fort. Visit Eagle's Nest viewpoint for panoramic views. Free time for shopping at Hunza market. Dinner and overnight at Hunza."
      },
      {
        day: "Day 03",
        title: "Attabad Lake & Upper Hunza",
        description: "Breakfast at hotel. Drive to Attabad Lake. Enjoy boat ride on the turquoise waters. Visit Passu Cones and Hussaini Suspension Bridge. Explore Gulmit village. Return to Hunza. Dinner and overnight."
      },
      {
        day: "Day 04",
        title: "Hunza - Gilgit",
        description: "After breakfast, free time for last-minute shopping or photography. Drive to Gilgit. Visit local bazaar. Check-in at hotel. Dinner and overnight at Gilgit."
      },
      {
        day: "Day 05",
        title: "Gilgit - Islamabad (By Air)",
        description: "Early breakfast. Transfer to Gilgit Airport. Flight to Islamabad. End of tour with beautiful memories."
      }
    ],
    contact: {
      email: "Info.Towardsdestination@gmail.com",
      whatsapp: "+92315 3309070",
      instagram: "@towardsdestination.pk"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-15 adults"
  },
  "2": {
    id: 2,
    title: "Skardu & Deosai Adventure (By Air)",
    location: "Skardu, Gilgit-Baltistan",
    duration: "6 Days / 5 Nights",
    price: 75000,
    image: "/skardu.jpg",
    groupSize: "15-20 person",
    tourType: "By Air",
    description: "Explore the breathtaking Skardu Valley and Deosai Plains with @towardsdestination.pk. Experience the land of giants with comfortable air travel and premium accommodations.",
    pointsToVisit: [
      "Skardu Airport",
      "Shangrila Resort",
      "Upper Kachura Lake",
      "Lower Kachura Lake",
      "Deosai Plains",
      "Sheosar Lake",
      "Shigar Fort",
      "Manthoka Waterfall",
      "Sarfaranga Cold Desert"
    ],
    highlights: [
      "Direct flights to Skardu",
      "Shangrila Resort stay",
      "Deosai Plains safari",
      "Upper & Lower Kachura Lakes",
      "Shigar Fort visit",
      "Professional guide included",
      "All meals included"
    ],
    included: [
      "Round-trip flight tickets (Islamabad-Skardu-Islamabad)",
      "Airport transfers",
      "Hotel accommodation (5 nights)",
      "All meals (5 Breakfasts, 5 Dinners)",
      "Professional tour guide",
      "4x4 jeeps for Deosai",
      "Entry tickets",
      "Transportation"
    ],
    excluded: [
      "Personal expenses",
      "Lunch meals",
      "Tips for guide and driver",
      "Travel insurance",
      "Any activities not mentioned"
    ],
    hotelList: [
      { location: "Skardu", standard: "Trout Villa / Skardu Inn / Valley View", deluxe: "Shangrila Resort / Mountain Hotel", premium: "Gumaan Resorts / Luxury Lodge", executive: "Serena Shigar / Executive Suites" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Every Friday Morning", departure2: "Every Tuesday Morning" }
    ],
    pricing: {
      perPerson: { standard: "75,000", deluxe: "95,000", premium: "120,000", executive: "145,000" }
    },
    exceptions: [
      "Kids age 5-12: 50% charges",
      "Kids age <= 4: 25% charges"
    ],
    notes: [
      "Flight schedules are subject to weather conditions",
      "Deosai is accessible from June to September only",
      "All hotels are subject to availability and may be changed due to unforeseen circumstances",
      "Warm clothing recommended even in summer"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Skardu (By Air)",
        description: "Morning flight from Islamabad to Skardu. Spectacular views of K2, Nanga Parbat, and other peaks. Arrival at Skardu. Check-in at hotel. Evening visit to Skardu city. Dinner and overnight."
      },
      {
        day: "Day 02",
        title: "Skardu - Kachura Lakes - Shangrila",
        description: "After breakfast, visit Upper Kachura Lake. Visit Shangrila Resort and Lower Kachura Lake. Enjoy boat ride. Photography time. Return to hotel. Dinner and overnight at Skardu."
      },
      {
        day: "Day 03",
        title: "Deosai Plains Safari",
        description: "Early breakfast. Transfer to 4x4 jeeps. Full day excursion to Deosai Plains. Visit Sheosar Lake. Wildlife spotting (Himalayan Brown Bears, if lucky). Picnic lunch. Return to Skardu. Dinner and overnight."
      },
      {
        day: "Day 04",
        title: "Shigar Valley & Manthoka Waterfall",
        description: "Breakfast at hotel. Drive to Shigar Valley. Visit Shigar Fort. Explore Sarfaranga Cold Desert. Visit Manthoka Waterfall. Return to Skardu. Dinner and overnight."
      },
      {
        day: "Day 05",
        title: "Skardu Local Sightseeing",
        description: "After breakfast, visit Skardu Fort. Explore local bazaar for shopping. Visit Buddha Rock. Free time for photography. Dinner and overnight at Skardu."
      },
      {
        day: "Day 06",
        title: "Skardu - Islamabad (By Air)",
        description: "Early breakfast. Transfer to Skardu Airport. Flight to Islamabad. End of tour with unforgettable memories."
      }
    ],
    contact: {
      email: "Info.Towardsdestination@gmail.com",
      whatsapp: "+92315 3309070",
      instagram: "@towardsdestination.pk"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-15 adults"
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
    adults: 1,
    children: 0
  });

  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const pkg = packageDetails[packageId] || packageDetails["1"];

  const handleBookingChange = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const incrementGuest = (type: 'adults' | 'children') => {
    setBookingData(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrementGuest = (type: 'adults' | 'children') => {
    setBookingData(prev => ({ ...prev, [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] - 1) }));
  };

  const handleBook = () => {
    const message = `*Tour Booking - ${pkg.title}*%0A%0A*Date:* ${bookingData.date}%0A*Adults:* ${bookingData.adults}%0A*Children:* ${bookingData.children}`;
    const whatsappNumber = "923153309070";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Tour Inquiry - ${pkg.title}*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Package:* ${pkg.title}%0A*Price:* PKR ${pkg.price.toLocaleString()}%0A%0A*Message:*%0A${formData.message}`;
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

  const handleWhatsAppInquiry = () => {
    const whatsappNumber = "923153309070";
    const message = `Hello! I'm interested in the tour package: ${pkg.title}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <span className="text-teal-600 font-semibold text-sm flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Public Tours By Air
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {pkg.title}
          </h1>
          
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-teal-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/public-tours/by-air" className="hover:text-teal-600 transition-colors">Public Tours By Air</a>
            <span>/</span>
            <span className="text-gray-400">{pkg.title}</span>
          </nav>
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
                src={pkg.image}
                alt={pkg.title}
                width={1200}
                height={1600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Description */}
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {pkg.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg font-light tracking-wide">
                <FormattedText text={pkg.description} />
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleWhatsAppInquiry}
                  type="button"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Inquire via WhatsApp
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Click to chat with us on WhatsApp for instant booking and queries
                </p>
              </div>
            </section>


            {/* Tour Highlights */}
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {pkg.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">
                      <FormattedText text={highlight} />
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Points to Visit */}
            {pkg.pointsToVisit && (
              <section className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Points to Visit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {pkg.pointsToVisit.map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 group hover:bg-red-50 p-3 rounded-lg transition-colors">
                      <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 font-medium">
                        <FormattedText text={point} />
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tour Details */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold text-gray-900">{pkg.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <Plane className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Tour Type</div>
                    <div className="font-semibold text-gray-900">{pkg.tourType || "By Air"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="text-sm text-gray-600">Group Size</div>
                    <div className="font-semibold text-gray-900">{pkg.groupSize || "15-20"}</div>
                  </div>
                </div>
              </div>
            </section>


            {/* Pricing Table */}
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Options</h2>
              
              {pkg.pricing && pkg.pricing.perPerson && (
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Package Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Price Per Person</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="border text-black border-gray-300 px-4 py-3 font-semibold">Standard</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.perPerson?.standard}</td>
                      </tr>
                      {pkg.pricing.perPerson?.deluxe && (
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="border text-black border-gray-300 px-4 py-3 font-semibold">Deluxe</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.perPerson?.deluxe}</td>
                        </tr>
                      )}
                      {pkg.pricing.perPerson?.premium && (
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="border text-black border-gray-300 px-4 py-3 font-semibold">Premium</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.perPerson?.premium}</td>
                        </tr>
                      )}
                      {pkg.pricing.perPerson?.executive && (
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="border text-black border-gray-300 px-4 py-3 font-semibold">Executive</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.perPerson?.executive}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {pkg.exceptions && pkg.exceptions.length > 0 && (
                <div className="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                  <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2 text-lg">
                    <span>👶</span> Children Pricing:
                  </h3>
                  <ul className="space-y-2">
                    {pkg.exceptions.map((exception: string, index: number) => (
                      <li key={index} className="text-gray-700 font-medium">
                        • <FormattedText text={exception} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pkg.notes && pkg.notes.length > 0 && (
                <div className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                    <span>📝</span> Important Notes:
                  </h3>
                  <ul className="space-y-2">
                    {pkg.notes.map((note: string, index: number) => (
                      <li key={index} className="text-gray-700 font-medium">
                        • <FormattedText text={note} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>


            {/* Hotel List */}
            {pkg.hotelList && pkg.hotelList.length > 0 && (
              <section className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Hotel List</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Location</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Standard</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Deluxe</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Premium</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Executive</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.hotelList.map((hotel: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}>
                          <td className="border text-black border-gray-300 px-4 py-3 font-bold">{hotel.location}</td>
                          <td className="border text-gray-700 border-gray-300 px-4 py-3 font-medium">{hotel.standard}</td>
                          <td className="border text-gray-700 border-gray-300 px-4 py-3 font-medium">{hotel.deluxe}</td>
                          <td className="border text-gray-700 border-gray-300 px-4 py-3 font-medium">{hotel.premium}</td>
                          <td className="border text-gray-700 border-gray-300 px-4 py-3 font-medium">{hotel.executive}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    <span className="font-bold text-yellow-800">Note:</span> Hotels are subject to availability and may be changed due to unforeseen circumstances. In such cases, equivalent or better alternatives will be provided.
                  </p>
                </div>
              </section>
            )}

            {/* Departure Schedule */}
            {pkg.departureSchedule && pkg.departureSchedule.length > 0 && (
              <section className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Departure Schedule</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Departure City</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Departure 1</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Departure 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.departureSchedule.map((schedule: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}>
                          <td className="border text-black border-gray-300 px-4 py-3 font-bold">{schedule.city}</td>
                          <td className="border text-gray-700 border-gray-300 px-4 py-3 font-medium">{schedule.departure1}</td>
                          <td className="border text-gray-700 border-gray-300 px-4 py-3 font-medium">{schedule.departure2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}


            {/* Included/Excluded */}
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Included/Excluded</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-5 flex items-center gap-2">
                    <Check className="w-6 h-6" />
                    Included
                  </h3>
                  <div className="space-y-3">
                    {pkg.included.map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 font-medium">
                          <FormattedText text={item} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-5 flex items-center gap-2">
                    <X className="w-6 h-6" />
                    Excluded
                  </h3>
                  <div className="space-y-3">
                    {pkg.excluded.map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 font-medium">
                          <FormattedText text={item} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Tour Itinerary */}
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Tour Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day: any, index: number) => (
                  <div key={index} className="relative border-l-4 border-teal-600 pl-8 py-4 hover:bg-teal-50 rounded-r-lg transition-colors group">
                    <div className="absolute -left-3 top-6 w-6 h-6 bg-teal-600 rounded-full border-4 border-white group-hover:scale-110 transition-transform"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-teal-600">{day.day}:</span>
                      <span>{day.title}</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      <FormattedText text={day.description} />
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            {pkg.contact && (
              <TourContactSection/>
            )}

            {/* Bulk Discount */}
            {pkg.bulkDiscount && (
              <section>
                <div className="p-8 bg-linear-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-300 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                    <span className="text-3xl">💰</span> Special Offer!
                  </h3>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    <FormattedText text={pkg.bulkDiscount} />
                  </p>
                </div>
              </section>
            )}
          </div>


          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Price Header */}
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <div className="text-sm text-gray-600 mb-1">From:</div>
                <div className="text-3xl font-bold text-gray-900">PKR {pkg.price.toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">Per Person</div>
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

              {/* Form Content */}
              <div className="p-6">
                {!showInquiryForm ? (
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => handleBookingChange('date', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => decrementGuest('adults')}
                          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-semibold">{bookingData.adults}</span>
                        <button
                          type="button"
                          onClick={() => incrementGuest('adults')}
                          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => decrementGuest('children')}
                          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-semibold">{bookingData.children}</span>
                        <button
                          type="button"
                          onClick={() => incrementGuest('children')}
                          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleBook}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Book via WhatsApp
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
