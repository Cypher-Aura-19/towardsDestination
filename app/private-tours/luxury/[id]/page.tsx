"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Calendar, Star, Phone, Mail, Send, Check, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const packageDetails: any = {
  "1": {
    id: 1,
    title: "Nathia Gali Honeymoon Package – A Romantic Mountain Retreat",
    location: "Nathia Gali",
    duration: "2 Days 1 Night",
    price: "PKR 85,000",
    image: "/naran1.jpg",
    groupSize: "2 people",
    tourType: "Luxury Package",
    description: "Escape to the serene hills of Nathia Gali for a romantic mountain retreat. Enjoy cool weather, lush green forests, and peaceful moments with your partner in premium luxury accommodations.",
    pointsToVisit: [
      "Nathia Gali Hills",
      "Ayubia National Park",
      "Pipeline Track",
      "Mukshpuri Top",
      "Dunga Gali",
      "Thandiani"
    ],
    highlights: [
      "5-Star luxury hotel accommodation",
      "Private luxury vehicle with chauffeur",
      "Gourmet dining experiences",
      "Romantic room decoration",
      "Couples spa session",
      "Professional photography session"
    ],
    included: [
      "Luxury Transport (Mercedes/Land Cruiser)",
      "Fuel, Toll Taxes, Parking",
      "Professional Driver cum Guide",
      "5-Star Hotel Accommodation",
      "All Meals (Breakfast, Lunch, Dinner)",
      "Romantic Room Decoration",
      "Couples Spa Session",
      "Professional Photography (2 hours)",
      "Welcome Drinks & Snacks"
    ],
    excluded: [
      "Personal expenses",
      "Additional activities not mentioned",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival & Romantic Evening",
        description: "Pickup from Islamabad in luxury vehicle. Scenic drive to Nathia Gali with stops at viewpoints. Check-in at 5-star hotel with welcome drinks. Romantic room setup with flowers and candles. Gourmet lunch at hotel restaurant. Evening walk on Pipeline Track. Couples spa session. Candlelight dinner with live music. Overnight stay in luxury suite."
      },
      {
        day: "Day 02",
        title: "Exploration & Departure",
        description: "Breakfast in bed or at restaurant. Professional photography session at scenic locations. Visit to Ayubia National Park and chairlift ride. Lunch at premium restaurant. Leisure time for shopping or relaxation. Check-out and departure. Arrival in Islamabad by evening."
      }
    ],
    pricing: {
      standard_per_couple: "PKR 85,000",
      deluxe_per_couple: "PKR 110,000",
      presidential_per_couple: "PKR 150,000"
    },
    notes: [
      "All rates are per couple for 2 Days 1 Night",
      "Peak season charges may apply (June-September)",
      "Customization available on request",
      "24/7 concierge service included"
    ]
  },
  "2": {
    id: 2,
    title: "Malam Jabba Honeymoon Tour Package (2 Days)",
    location: "Malam Jabba",
    duration: "2 Days 1 Night",
    price: "PKR 95,000",
    image: "/swat.jpg",
    groupSize: "2 people",
    tourType: "Luxury Package",
    description: "Discover the beauty of Malam Jabba with your loved one. Enjoy skiing, cable car rides, and stunning mountain views in this romantic luxury getaway.",
    pointsToVisit: ["Malam Jabba Ski Resort", "Cable Car Ride", "Swat Valley", "Mingora City", "Fizaghat"],
    highlights: ["Luxury ski resort stay", "Private cable car experience", "Skiing lessons included", "Romantic dinner setup", "Mountain view suite"],
    included: ["Luxury Transport", "5-Star Resort Stay", "All Meals", "Cable Car Tickets", "Skiing Equipment", "Professional Guide"],
    excluded: ["Personal expenses", "Additional activities", "Travel insurance"],
    itinerary: [
      { day: "Day 01", title: "Arrival & Adventure", description: "Luxury pickup from Islamabad. Drive to Malam Jabba with scenic stops. Check-in at premium ski resort. Cable car ride to mountain top. Skiing session with instructor. Romantic dinner with mountain views. Overnight in luxury suite." },
      { day: "Day 02", title: "Exploration & Return", description: "Breakfast with panoramic views. Morning skiing or relaxation. Visit to Swat Valley viewpoints. Lunch at premium restaurant. Shopping in Mingora. Departure to Islamabad." }
    ],
    pricing: { standard_per_couple: "PKR 95,000", deluxe_per_couple: "PKR 125,000", presidential_per_couple: "PKR 170,000" },
    notes: ["Winter season (Dec-Feb) best for skiing", "Equipment rental included", "Professional photography available"]
  },
  "3": {
    id: 3,
    title: "Honeymoon Tour Package: Swat, Kalam & Malam Jabba (3 Days)",
    location: "Swat Valley",
    duration: "3 Days 2 Nights",
    price: "PKR 145,000",
    image: "/swat.jpg",
    groupSize: "2 people",
    tourType: "Luxury Package",
    description: "Experience the Switzerland of Pakistan with this luxury tour covering Swat, Kalam, and Malam Jabba. Premium accommodations and exclusive experiences await.",
    pointsToVisit: ["Kalam Valley", "Mahodand Lake", "Ushu Forest", "Malam Jabba", "Fizaghat", "Mingora"],
    highlights: ["3 luxury hotels", "Private jeep for Mahodand", "Cable car experience", "Riverside dining", "Professional photography"],
    included: ["Luxury Transport (Land Cruiser)", "5-Star Hotels", "All Meals", "Jeep for Mahodand Lake", "Cable Car", "Photography Session"],
    excluded: ["Personal expenses", "Additional activities", "Travel insurance"],
    itinerary: [
      { day: "Day 01", title: "Swat to Kalam", description: "Luxury pickup. Drive to Kalam via Fizaghat. Check-in at riverside luxury hotel. Visit Ushu Forest. Romantic riverside dinner. Overnight in Kalam." },
      { day: "Day 02", title: "Mahodand Lake & Malam Jabba", description: "Early breakfast. Jeep ride to Mahodand Lake. Picnic lunch at lakeside. Drive to Malam Jabba. Cable car ride. Check-in at ski resort. Dinner with mountain views." },
      { day: "Day 03", title: "Exploration & Return", description: "Breakfast. Morning activities. Visit Mingora for shopping. Lunch. Departure to Islamabad." }
    ],
    pricing: { standard_per_couple: "PKR 145,000", deluxe_per_couple: "PKR 180,000", presidential_per_couple: "PKR 240,000" },
    notes: ["Best time: April-October", "Customization available", "Helicopter tour optional"]
  },
  "4": {
    id: 4,
    title: "Honeymoon Package for Swat Valley & Shogran Valley (05 Days)",
    location: "Swat & Shogran",
    duration: "5 Days 4 Nights",
    price: "PKR 225,000",
    image: "/swat.jpg",
    groupSize: "2 people",
    tourType: "Luxury Package",
    description: "Discover the beauty of Swat and Shogran valleys on this romantic 5-day luxury honeymoon tour. Perfect for couples seeking adventure and relaxation in premium comfort.",
    pointsToVisit: ["Kalam Valley", "Mahodand Lake", "Malam Jabba", "Shogran", "Siri Paye", "Naran"],
    highlights: ["5 nights luxury hotels", "Multiple scenic locations", "Private jeep rides", "Spa sessions", "Gourmet dining"],
    included: ["Luxury Transport", "5-Star Hotels (4 nights)", "All Meals", "Jeep Rides", "Spa Sessions", "Photography"],
    excluded: ["Personal expenses", "Additional activities", "Travel insurance"],
    itinerary: [
      { day: "Day 01", title: "Islamabad to Kalam", description: "Luxury pickup. Scenic drive to Kalam. Check-in at riverside resort. Evening walk. Romantic dinner." },
      { day: "Day 02", title: "Mahodand Lake", description: "Jeep to Mahodand Lake. Full day at lake. Picnic lunch. Return to Kalam. Spa session. Dinner." },
      { day: "Day 03", title: "Kalam to Shogran", description: "Breakfast. Drive to Shogran via Naran. Check-in at hilltop resort. Jeep to Siri Paye. Sunset views. Bonfire dinner." },
      { day: "Day 04", title: "Shogran Exploration", description: "Breakfast. Morning at Siri Paye. Lunch. Leisure time. Couples spa. Romantic dinner." },
      { day: "Day 05", title: "Return Journey", description: "Breakfast. Photography session. Departure to Islamabad. Lunch en route. Evening arrival." }
    ],
    pricing: { standard_per_couple: "PKR 225,000", deluxe_per_couple: "PKR 280,000", presidential_per_couple: "PKR 360,000" },
    notes: ["Best season: May-September", "Helicopter tours available", "Customizable itinerary"]
  },
  "5": {
    id: 5,
    title: "Explore Pakistan: Hunza | Skardu | Islamabad (12 Days Trip: By Road)",
    location: "Hunza, Skardu & Islamabad",
    duration: "12 Days 11 Nights",
    price: "PKR 550,000",
    image: "/hunza1.jpg",
    groupSize: "Flexible",
    tourType: "Luxury Package",
    description: "The ultimate luxury tour of Pakistan covering three iconic destinations. Experience the best of Hunza, Skardu, and Islamabad with premium accommodations and exclusive experiences throughout your journey.",
    pointsToVisit: ["Hunza Valley", "Attabad Lake", "Karimabad", "Skardu", "Shangrila Resort", "Shigar Fort", "Deosai Plains", "Islamabad"],
    highlights: ["12 days luxury experience", "5-star hotels throughout", "Private luxury vehicle", "Professional guide", "All meals included", "VIP experiences"],
    included: ["Luxury Transport (Land Cruiser)", "5-Star Hotels (11 nights)", "All Meals", "Professional Guide", "All Entry Tickets", "Boat Rides", "Photography"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: "Day 01-03", title: "Islamabad to Hunza", description: "Luxury journey via KKH. Stops at Besham, Chilas. Arrival Hunza. Explore Karimabad, Altit Fort, Baltit Fort, Attabad Lake." },
      { day: "Day 04-08", title: "Hunza to Skardu", description: "Drive to Skardu. Visit Shangrila Resort, Shigar Fort, Katpana Desert, Upper Kachura Lake, Deosai Plains, Satpara Lake." },
      { day: "Day 09-11", title: "Return to Islamabad", description: "Scenic return journey. Stops at viewpoints. Arrival Islamabad. City tour: Faisal Mosque, Daman-e-Koh, Pakistan Monument." },
      { day: "Day 12", title: "Departure", description: "Breakfast. Last minute shopping. Airport transfer." }
    ],
    pricing: { standard_per_person: "PKR 550,000", deluxe_per_person: "PKR 680,000", presidential_per_person: "PKR 850,000" },
    notes: ["Best time: April-October", "Helicopter tours available", "Customizable itinerary", "Group discounts available"]
  },
  "6": {
    id: 6,
    title: "Islamabad Tour – 04 Days",
    location: "Islamabad",
    duration: "4 Days 3 Nights",
    price: "PKR 120,000",
    image: "/hero.jpg",
    groupSize: "Flexible",
    tourType: "Luxury Package",
    description: "Explore Pakistan's beautiful capital city with this luxury 4-day tour. Visit iconic landmarks, enjoy fine dining, and stay in premium 5-star hotels.",
    pointsToVisit: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh", "Lok Virsa Museum", "Rawal Lake", "Margalla Hills", "Saidpur Village"],
    highlights: ["5-star hotel stay", "Fine dining experiences", "Private city tours", "Cultural experiences", "Shopping tours"],
    included: ["Luxury Transport", "5-Star Hotel (3 nights)", "All Meals", "City Tours", "Entry Tickets", "Shopping Guide"],
    excluded: ["Shopping expenses", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: "Day 01", title: "Arrival & City Tour", description: "Airport pickup in luxury vehicle. Check-in at 5-star hotel. Visit Faisal Mosque, Pakistan Monument. Dinner at Monal Restaurant." },
      { day: "Day 02", title: "Cultural Exploration", description: "Breakfast. Visit Lok Virsa Museum, Saidpur Village. Lunch at traditional restaurant. Daman-e-Koh viewpoint. Shopping at F-7 Markaz. Dinner." },
      { day: "Day 03", title: "Nature & Leisure", description: "Breakfast. Margalla Hills trail. Rawal Lake visit. Spa session at hotel. Fine dining experience. Evening at leisure." },
      { day: "Day 04", title: "Shopping & Departure", description: "Breakfast. Shopping at Centaurus Mall. Lunch. Check-out. Airport transfer." }
    ],
    pricing: { standard_per_person: "PKR 120,000", deluxe_per_person: "PKR 155,000", presidential_per_person: "PKR 200,000" },
    notes: ["Year-round destination", "Customizable itinerary", "Business facilities available", "Airport transfers included"]
  }
};

export default function LuxuryTourDetail() {
  const params = useParams();
  const id = params?.id as string;
  const pkg = packageDetails[id];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Luxury Tour Inquiry - ${pkg.title}*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/923153309070?text=${whatsappMessage}`, '_blank');
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppInquiry = () => {
    const message = `*Inquiry for: ${pkg.title}*%0A%0AHello, I'm interested in this luxury tour package. Please provide more details and pricing.`;
    window.open(`https://wa.me/923153309070?text=${message}`, '_blank');
  };

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-amber-600 mb-4">Tour Not Found</h1>
          <Link href="/private-tours/luxury" className="text-amber-600 hover:underline">
            Back to Luxury Tours
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
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-md text-sm font-bold">
              <Star className="w-4 h-4" />
              Luxury Package
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {pkg.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span className="text-lg">{pkg.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span className="text-lg">{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-600" />
              <span className="text-lg">Premium Experience</span>
            </div>
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
                src={pkg.image}
                alt={pkg.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Description */}
            <section className="bg-white rounded-xl p-8 border border-amber-200 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-700 mb-4">About This Package</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{pkg.description}</p>
              
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

            {/* Points to Visit */}
            {pkg.pointsToVisit && (
              <section className="bg-white rounded-xl p-8 border border-amber-200 shadow-lg">
                <h2 className="text-3xl font-bold text-amber-700 mb-6">Points to Visit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.pointsToVisit.map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tour Highlights */}
            {pkg.highlights && (
              <section className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200">
                <h2 className="text-3xl font-bold text-amber-800 mb-6">Tour Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            {pkg.itinerary && (
              <section className="bg-white rounded-xl p-8 border border-amber-200 shadow-lg">
                <h2 className="text-3xl font-bold text-amber-700 mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {pkg.itinerary.map((day: any, index: number) => (
                    <div key={index} className="border-l-4 border-amber-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-amber-700 mb-2">{day.day}: {day.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Inclusions & Exclusions */}
            {(pkg.included || pkg.excluded) && (
              <section className="bg-white rounded-xl p-8 border border-amber-200 shadow-lg">
                <h2 className="text-3xl font-bold text-amber-700 mb-6">What's Included & Excluded</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {pkg.included && (
                    <div>
                      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Check className="w-6 h-6" />
                        Included
                      </h3>
                      <ul className="space-y-3">
                        {pkg.included.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {pkg.excluded && (
                    <div>
                      <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                        <X className="w-6 h-6" />
                        Excluded
                      </h3>
                      <ul className="space-y-3">
                        {pkg.excluded.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Pricing */}
            {pkg.pricing && (
              <section className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200">
                <h2 className="text-3xl font-bold text-amber-800 mb-6">Pricing Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(pkg.pricing).map(([key, value]: [string, any]) => (
                    <div key={key} className="bg-white rounded-lg p-6 border-2 border-amber-300 hover:border-amber-500 transition-colors">
                      <h3 className="text-lg font-bold text-amber-700 mb-2 capitalize">
                        {key.replace(/_/g, ' ')}
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Important Notes */}
            {pkg.notes && (
              <section className="bg-amber-50 rounded-xl p-8 border border-amber-300">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Important Notes</h2>
                <ul className="space-y-2">
                  {pkg.notes.map((note: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          <TourContactSection/>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-amber-200 overflow-hidden">
        

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-700 mb-4">Request Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone/WhatsApp"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Your Message or Special Requirements"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg"
                  >
                    Send Inquiry
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
