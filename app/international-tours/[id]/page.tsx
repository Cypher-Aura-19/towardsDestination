"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Calendar, Users, Plane, Hotel, Check, X, Phone, Mail, Send, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const tourDetails: any = {
  "1": {
    id: 1,
    name: "Baku Azerbaijan Tour",
    location: "Baku, Azerbaijan",
    duration: "5 Days / 4 Nights",
    price: "PKR 249,999",
    priceUSD: "$877",
    image: "/A.jpg",
    groupSize: "Flexible",
    tourType: "International Tour",
    description: "Experience the magical blend of ancient history and modern architecture in Baku, Azerbaijan. Known as the 'Land of Fire', Azerbaijan offers stunning landscapes, rich culture, and warm hospitality. This comprehensive tour covers all major attractions including the UNESCO-listed Old City, modern Flame Towers, and the mysterious Gobustan rock art.",
    pointsToVisit: [
      "Old City (Icherisheher) - UNESCO World Heritage Site",
      "Maiden Tower",
      "Shirvanshah's Palace",
      "Flame Towers & Highland Park",
      "Baku Boulevard (Seaside Promenade)",
      "Carpet Museum",
      "Gobustan National Park & Mud Volcanoes",
      "Ateshgah Fire Temple",
      "Yanar Dag (Burning Mountain)",
      "Heydar Aliyev Center"
    ],
    highlights: [
      "Round-trip economy airfare from Pakistan",
      "4-star hotel accommodation in city center",
      "Daily breakfast at hotel",
      "All airport transfers",
      "Professional English-speaking guide",
      "Entrance fees to all attractions",
      "Transportation in air-conditioned vehicle"
    ],
    included: [
      "Round-trip economy class airfare",
      "4-star hotel accommodation (4 nights)",
      "Daily breakfast",
      "Airport transfers (arrival & departure)",
      "All sightseeing tours as per itinerary",
      "Professional tour guide",
      "Entrance fees to monuments",
      "Transportation in AC vehicle"
    ],
    excluded: [
      "Visa fees (Azerbaijan offers e-visa)",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Baku",
        description: "Arrival at Heydar Aliyev International Airport. Meet and greet by our representative. Transfer to hotel. Check-in and rest. Evening free for leisure. Overnight in Baku."
      },
      {
        day: "Day 02",
        title: "Baku City Tour",
        description: "After breakfast, full day city tour. Visit Old City (Icherisheher), Maiden Tower, Shirvanshah's Palace. Explore Baku Boulevard and Carpet Museum. Visit Flame Towers and Highland Park for panoramic city views. Return to hotel. Overnight in Baku."
      },
      {
        day: "Day 03",
        title: "Gobustan & Absheron Peninsula",
        description: "Breakfast at hotel. Visit Gobustan National Park to see ancient rock carvings (UNESCO site). Experience mud volcanoes. Visit Ateshgah Fire Temple and Yanar Dag (Burning Mountain). Return to Baku. Evening free for shopping. Overnight in Baku."
      },
      {
        day: "Day 04",
        title: "Modern Baku & Free Time",
        description: "After breakfast, visit Heydar Aliyev Center (photo stop). Free time for shopping at Nizami Street or exploring local markets. Optional activities available. Overnight in Baku."
      },
      {
        day: "Day 05",
        title: "Departure",
        description: "Breakfast at hotel. Check-out. Transfer to airport for departure flight. End of services with beautiful memories."
      }
    ],
    pricing: {
      per_person_quad: "PKR 249,999 ($877)",
      per_person_triple: "PKR 249,999 ($877)",
      per_person_double: "PKR 280,000 ($982)",
      per_person_single: "PKR 300,000 ($1,053)"
    },
    notes: [
      "Visa: Azerbaijan offers e-visa for Pakistani passport holders",
      "Best time to visit: April to October",
      "Currency: Azerbaijani Manat (AZN)",
      "Language: Azerbaijani (English widely spoken in tourist areas)",
      "Prices may vary according to season and flight availability",
      "Peak season (June-September) may have higher rates",
      "Early booking recommended for better rates"
    ]
  },
  "2": {
    id: 2,
    name: "Turkey Grand Tour",
    location: "Istanbul & Cappadocia, Turkey",
    duration: "7 Days / 6 Nights",
    price: "PKR 220,000",
    priceUSD: "$772",
    image: "/T.jpg",
    groupSize: "Flexible",
    tourType: "International Tour",
    description: "Discover the enchanting beauty of Turkey with our comprehensive 7-day tour covering Istanbul and Cappadocia. Experience the perfect blend of European and Asian cultures, explore ancient Byzantine and Ottoman heritage, witness the surreal landscapes of Cappadocia, and enjoy a magical hot air balloon ride. This tour offers an unforgettable journey through Turkey's most iconic destinations.",
    pointsToVisit: [
      "Blue Mosque (Sultan Ahmed Mosque)",
      "Hagia Sophia Grand Mosque",
      "Topkapi Palace & Harem",
      "Grand Bazaar",
      "Spice Bazaar",
      "Bosphorus Strait Cruise",
      "Cappadocia Fairy Chimneys",
      "Goreme Open Air Museum",
      "Underground Cities (Derinkuyu or Kaymakli)",
      "Uchisar Castle",
      "Pasabag (Monks Valley)",
      "Avanos Pottery Workshop"
    ],
    highlights: [
      "Round-trip airfare to Istanbul",
      "Domestic flight Istanbul-Cappadocia-Istanbul",
      "4-star hotels in Istanbul & Cappadocia",
      "All meals included (breakfast, lunch, dinner)",
      "Hot air balloon ride in Cappadocia",
      "Bosphorus cruise with dinner",
      "Professional English-speaking guide",
      "All entrance fees included"
    ],
    included: [
      "Round-trip international airfare",
      "Domestic flights within Turkey",
      "4-star hotel accommodation (6 nights)",
      "All meals (breakfast, lunch, dinner)",
      "Hot air balloon ride in Cappadocia",
      "Bosphorus dinner cruise",
      "All sightseeing tours",
      "Professional tour guide",
      "Entrance fees to all monuments",
      "Airport & hotel transfers"
    ],
    excluded: [
      "Turkey visa fees",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Optional activities"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Istanbul",
        description: "Arrival at Istanbul Airport. Meet and greet. Transfer to hotel. Check-in and rest. Evening free to explore nearby areas. Welcome dinner at hotel. Overnight in Istanbul."
      },
      {
        day: "Day 02",
        title: "Istanbul Old City Tour",
        description: "After breakfast, full day tour of Istanbul's historic peninsula. Visit Blue Mosque, Hagia Sophia, Topkapi Palace with Harem section, and Hippodrome. Lunch at local restaurant. Visit Grand Bazaar for shopping. Return to hotel. Overnight in Istanbul."
      },
      {
        day: "Day 03",
        title: "Bosphorus & Spice Bazaar",
        description: "Breakfast at hotel. Visit Spice Bazaar. Bosphorus cruise with lunch on board. See Dolmabahce Palace, Bosphorus Bridge, and waterfront mansions. Evening Bosphorus dinner cruise with Turkish entertainment. Overnight in Istanbul."
      },
      {
        day: "Day 04",
        title: "Fly to Cappadocia",
        description: "Early breakfast. Transfer to airport for flight to Cappadocia. Arrival and hotel check-in. Visit Goreme Open Air Museum, Uchisar Castle, and Pasabag (Monks Valley). Visit pottery workshop in Avanos. Dinner and overnight in Cappadocia."
      },
      {
        day: "Day 05",
        title: "Cappadocia Hot Air Balloon & Underground City",
        description: "Early morning hot air balloon ride over fairy chimneys (weather permitting). Return to hotel for breakfast. Visit underground city (Derinkuyu or Kaymakli). Explore Pigeon Valley and Rose Valley. Turkish night show with dinner. Overnight in Cappadocia."
      },
      {
        day: "Day 06",
        title: "Return to Istanbul",
        description: "Breakfast at hotel. Transfer to airport for flight to Istanbul. Arrival and hotel check-in. Free time for shopping at Istiklal Street or Taksim Square. Farewell dinner. Overnight in Istanbul."
      },
      {
        day: "Day 07",
        title: "Departure",
        description: "Breakfast at hotel. Check-out. Transfer to Istanbul Airport for departure flight. End of tour with wonderful memories."
      }
    ],
    pricing: {
      per_person_double: "PKR 220,000 ($772)",
      per_person_triple: "PKR 210,000 ($737)",
      single_supplement: "PKR 40,000 ($140)"
    },
    notes: [
      "Turkey visa available on arrival for Pakistani passport holders",
      "Best time to visit: April-May and September-October",
      "Hot air balloon ride subject to weather conditions",
      "Currency: Turkish Lira (TRY)",
      "Modest dress recommended for mosque visits"
    ]
  },
  "3": {
    id: 3,
    name: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "PKR 180,000",
    priceUSD: "$632",
    image: "/dubai.jpeg",
    groupSize: "Flexible",
    tourType: "International Tour",
    description: "Experience the glamour and luxury of Dubai with our exclusive 5-day tour package. From the world's tallest building Burj Khalifa to the traditional souks, from thrilling desert safaris to luxurious dhow cruises, this tour offers the perfect blend of modern marvels and Arabian heritage. Enjoy world-class shopping, dining, and entertainment in this futuristic city.",
    pointsToVisit: [
      "Burj Khalifa (124th & 125th floor)",
      "Dubai Mall & Dubai Fountain",
      "Palm Jumeirah & Atlantis",
      "Dubai Marina",
      "Jumeirah Beach & Burj Al Arab",
      "Dubai Creek & Gold Souk",
      "Spice Souk & Textile Souk",
      "Dubai Frame",
      "Global Village (seasonal)",
      "Desert Safari with BBQ Dinner"
    ],
    highlights: [
      "Round-trip airfare included",
      "5-star hotel accommodation",
      "Daily breakfast at hotel",
      "Burj Khalifa 124th floor tickets",
      "Desert safari with BBQ dinner & shows",
      "Dubai Marina dhow cruise with dinner",
      "Dubai city tour",
      "All transfers in luxury vehicles"
    ],
    included: [
      "Round-trip economy class airfare",
      "5-star hotel accommodation (4 nights)",
      "Daily breakfast",
      "Burj Khalifa tickets (124th floor)",
      "Desert safari with BBQ dinner",
      "Dubai Marina dhow cruise with dinner",
      "Dubai city tour",
      "Airport transfers in luxury vehicle",
      "All taxes and service charges"
    ],
    excluded: [
      "UAE visa fees",
      "Lunch and dinner (except included)",
      "Personal expenses",
      "Travel insurance",
      "Optional activities and tours"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Dubai",
        description: "Arrival at Dubai International Airport. Meet and greet. Transfer to 5-star hotel in luxury vehicle. Check-in and rest. Evening free for leisure. Overnight in Dubai."
      },
      {
        day: "Day 02",
        title: "Dubai City Tour & Burj Khalifa",
        description: "After breakfast, half-day Dubai city tour. Visit Jumeirah Beach, Burj Al Arab (photo stop), Palm Jumeirah, Atlantis Hotel. Visit Gold Souk and Spice Souk. Evening visit to Burj Khalifa 124th floor. Watch Dubai Fountain show. Overnight in Dubai."
      },
      {
        day: "Day 03",
        title: "Desert Safari Adventure",
        description: "Breakfast at hotel. Day free for shopping at Dubai Mall or Mall of Emirates. Afternoon pickup for desert safari. Dune bashing, camel ride, sandboarding. BBQ dinner with belly dance and Tanoura shows. Return to hotel. Overnight in Dubai."
      },
      {
        day: "Day 04",
        title: "Dubai Marina & Dhow Cruise",
        description: "Breakfast at hotel. Visit Dubai Marina and JBR Beach. Optional: Visit Dubai Frame or Global Village. Evening Dubai Marina dhow cruise with international buffet dinner. Overnight in Dubai."
      },
      {
        day: "Day 05",
        title: "Departure",
        description: "Breakfast at hotel. Check-out. Last minute shopping if time permits. Transfer to Dubai Airport for departure flight. End of tour."
      }
    ],
    pricing: {
      per_person_double: "PKR 180,000 ($632)",
      per_person_triple: "PKR 170,000 ($596)",
      single_supplement: "PKR 35,000 ($123)"
    },
    notes: [
      "UAE visa processing assistance provided",
      "Best time to visit: November to March",
      "Currency: UAE Dirham (AED)",
      "Modest dress code in public places",
      "Shopping festival in January-February offers great deals"
    ]
  },
  "4": {
    id: 4,
    name: "Turkey Istanbul Special",
    location: "Istanbul, Turkey",
    duration: "5 Days / 4 Nights",
    price: "PKR 160,000",
    priceUSD: "$561",
    image: "/turkey.jpeg",
    groupSize: "Flexible",
    tourType: "International Tour",
    description: "Explore the magical city of Istanbul, where East meets West. This focused 5-day tour covers all the major highlights of Istanbul including historic mosques, palaces, bazaars, and a scenic Bosphorus cruise. Perfect for those who want to experience the essence of Istanbul without the extended travel.",
    pointsToVisit: [
      "Blue Mosque (Sultan Ahmed Mosque)",
      "Hagia Sophia Grand Mosque",
      "Topkapi Palace",
      "Grand Bazaar",
      "Spice Bazaar",
      "Bosphorus Cruise",
      "Dolmabahce Palace",
      "Taksim Square & Istiklal Street",
      "Galata Tower"
    ],
    highlights: [
      "Round-trip airfare included",
      "4-star hotel in city center",
      "Daily breakfast",
      "Bosphorus dinner cruise",
      "Professional guide",
      "All entrance fees",
      "Airport transfers"
    ],
    included: [
      "Round-trip economy airfare",
      "4-star hotel (4 nights)",
      "Daily breakfast",
      "Bosphorus dinner cruise",
      "All sightseeing tours",
      "Professional English-speaking guide",
      "Entrance fees to monuments",
      "Airport transfers"
    ],
    excluded: [
      "Turkey visa fees",
      "Lunch and dinner (except cruise)",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Istanbul",
        description: "Arrival at Istanbul Airport. Meet and greet. Transfer to hotel. Check-in and rest. Evening free. Overnight in Istanbul."
      },
      {
        day: "Day 02",
        title: "Old City Tour",
        description: "After breakfast, visit Blue Mosque, Hagia Sophia, Topkapi Palace, and Hippodrome. Lunch at local restaurant. Visit Grand Bazaar. Return to hotel. Overnight in Istanbul."
      },
      {
        day: "Day 03",
        title: "Bosphorus & Spice Bazaar",
        description: "Breakfast at hotel. Visit Spice Bazaar. Bosphorus cruise. Visit Dolmabahce Palace. Evening Bosphorus dinner cruise. Overnight in Istanbul."
      },
      {
        day: "Day 04",
        title: "Modern Istanbul",
        description: "Breakfast. Visit Taksim Square and Istiklal Street. Galata Tower visit. Free time for shopping. Overnight in Istanbul."
      },
      {
        day: "Day 05",
        title: "Departure",
        description: "Breakfast at hotel. Check-out. Transfer to airport for departure flight. End of tour."
      }
    ],
    pricing: {
      per_person_double: "PKR 160,000 ($561)",
      per_person_triple: "PKR 150,000 ($526)",
      single_supplement: "PKR 30,000 ($105)"
    },
    notes: [
      "Turkey visa available on arrival",
      "Best time: April-May, September-October",
      "Currency: Turkish Lira (TRY)",
      "Modest dress for mosques"
    ]
  },
  "5": {
    id: 5,
    name: "Maldives Male Luxury Escape",
    location: "Male, Maldives",
    duration: "5 Days / 4 Nights",
    price: "PKR 250,000",
    priceUSD: "$877",
    image: "/maldives.jpg",
    groupSize: "Flexible",
    tourType: "International Tour",
    description: "Experience paradise on earth with our exclusive Maldives luxury package. Stay in stunning overwater villas, dive into crystal-clear turquoise waters, and indulge in world-class hospitality. This tropical escape offers the perfect blend of relaxation, adventure, and romance with pristine beaches, vibrant coral reefs, and unforgettable sunsets.",
    pointsToVisit: [
      "Male City Tour",
      "Grand Friday Mosque",
      "Maldives National Museum",
      "Local Island Visit",
      "Sandbank Picnic",
      "Coral Reef Snorkeling Sites",
      "Underwater Restaurant Experience",
      "Sunset Fishing Point",
      "Bioluminescent Beach"
    ],
    highlights: [
      "Round-trip airfare included",
      "5-star overwater villa resort",
      "All-inclusive meal plan",
      "Private speedboat transfers",
      "Snorkeling & diving excursions",
      "Sunset dolphin cruise",
      "Spa & wellness treatments",
      "Water sports activities"
    ],
    included: [
      "Round-trip economy class airfare",
      "5-star overwater villa (4 nights)",
      "All-inclusive meals & beverages",
      "Private speedboat transfers",
      "Daily snorkeling trips",
      "Sunset dolphin watching cruise",
      "Complimentary spa session",
      "Water sports (kayaking, paddleboarding)",
      "Romantic beach dinner setup",
      "Airport meet & greet"
    ],
    excluded: [
      "Maldives visa (free on arrival)",
      "Scuba diving certification courses",
      "Premium alcoholic beverages",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Paradise",
        description: "Arrival at Velana International Airport, Male. Meet and greet by resort representative. Private speedboat transfer to resort. Check-in to overwater villa. Welcome drink and resort orientation. Evening free to relax. Dinner at resort. Overnight in Maldives."
      },
      {
        day: "Day 02",
        title: "Snorkeling & Water Sports",
        description: "Breakfast at resort. Morning snorkeling excursion to nearby coral reefs. Spot colorful tropical fish, sea turtles, and rays. Lunch at resort. Afternoon water sports activities - kayaking, paddleboarding, jet skiing. Sunset dolphin watching cruise. Dinner at resort. Overnight in Maldives."
      },
      {
        day: "Day 03",
        title: "Island Hopping & Local Culture",
        description: "Breakfast at villa. Half-day Male city tour - visit Grand Friday Mosque, National Museum, and local markets. Lunch at local restaurant. Afternoon sandbank picnic with swimming and relaxation. Return to resort. Spa and wellness treatment. Dinner at resort. Overnight in Maldives."
      },
      {
        day: "Day 04",
        title: "Leisure & Romance",
        description: "Breakfast at resort. Day at leisure - enjoy resort facilities, private beach, infinity pool. Optional activities: scuba diving, fishing trip, or underwater restaurant experience. Evening romantic beach dinner setup with bonfire. Overnight in Maldives."
      },
      {
        day: "Day 05",
        title: "Departure",
        description: "Breakfast at villa. Check-out. Last minute swimming or relaxation. Private speedboat transfer to Male Airport. Departure flight. End of tour with unforgettable memories."
      }
    ],
    pricing: {
      per_person_double: "PKR 250,000 ($877)",
      per_person_triple: "PKR 240,000 ($842)",
      single_supplement: "PKR 60,000 ($211)"
    },
    notes: [
      "Maldives offers visa-free entry for Pakistani passport holders (30 days)",
      "Best time to visit: November to April (dry season)",
      "Currency: Maldivian Rufiyaa (MVR), USD widely accepted",
      "Perfect for honeymoons and romantic getaways",
      "Seaplane transfers available at additional cost for distant resorts"
    ]
  },
  "6": {
    id: 6,
    name: "Indonesia Bali Paradise",
    location: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: "PKR 195,000",
    priceUSD: "$684",
    image: "/bali.jpg",
    groupSize: "Flexible",
    tourType: "International Tour",
    description: "Discover the enchanting Island of Gods with our comprehensive Bali tour package. Experience the perfect blend of stunning beaches, ancient temples, lush rice terraces, vibrant culture, and warm Balinese hospitality. From the artistic heart of Ubud to the pristine beaches of Nusa Dua, this tour offers an unforgettable tropical paradise experience.",
    pointsToVisit: [
      "Ubud Rice Terraces (Tegalalang)",
      "Sacred Monkey Forest Sanctuary",
      "Tanah Lot Temple",
      "Uluwatu Temple",
      "Tegenungan Waterfall",
      "Tirta Empul Holy Water Temple",
      "Nusa Dua Beach",
      "Seminyak Beach",
      "Traditional Balinese Village",
      "Art Markets & Handicraft Centers"
    ],
    highlights: [
      "Round-trip airfare included",
      "4-star beachfront resort",
      "Daily breakfast included",
      "Ubud rice terraces & monkey forest",
      "Tanah Lot temple sunset tour",
      "Traditional Balinese spa session",
      "Water sports at Nusa Dua beach",
      "Uluwatu temple & Kecak dance"
    ],
    included: [
      "Round-trip economy class airfare",
      "4-star beachfront resort (5 nights)",
      "Daily breakfast",
      "All sightseeing tours as per itinerary",
      "Professional English-speaking guide",
      "Traditional Balinese massage & spa",
      "Kecak fire dance performance",
      "Water sports activities",
      "Airport transfers in AC vehicle",
      "All entrance fees to attractions"
    ],
    excluded: [
      "Indonesia visa fees (visa on arrival)",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Optional activities",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Bali",
        description: "Arrival at Ngurah Rai International Airport, Bali. Meet and greet by our representative. Transfer to beachfront resort. Check-in and rest. Evening free to explore nearby beach or relax at resort. Welcome dinner at resort. Overnight in Bali."
      },
      {
        day: "Day 02",
        title: "Ubud Cultural Tour",
        description: "Breakfast at resort. Full day Ubud tour. Visit Tegalalang Rice Terraces for stunning photos. Explore Sacred Monkey Forest Sanctuary. Visit Tirta Empul Holy Water Temple. Lunch at local restaurant with rice terrace view. Visit traditional art markets and handicraft centers. Return to resort. Overnight in Bali."
      },
      {
        day: "Day 03",
        title: "Tanah Lot & Beach Activities",
        description: "Breakfast at resort. Morning visit to Tegenungan Waterfall. Afternoon water sports at Nusa Dua Beach - banana boat, parasailing, jet ski. Evening visit to iconic Tanah Lot Temple for spectacular sunset views. Dinner at beachfront restaurant. Return to resort. Overnight in Bali."
      },
      {
        day: "Day 04",
        title: "Uluwatu Temple & Kecak Dance",
        description: "Breakfast at resort. Morning at leisure - enjoy resort facilities or optional activities. Afternoon visit to Uluwatu Temple perched on cliff edge. Watch traditional Kecak Fire Dance performance at sunset. Seafood dinner at Jimbaran Beach. Return to resort. Overnight in Bali."
      },
      {
        day: "Day 05",
        title: "Spa & Leisure Day",
        description: "Breakfast at resort. Morning traditional Balinese spa and massage session. Afternoon free for shopping at Seminyak or relaxing at beach. Optional: Visit Bali Safari Park or water park. Farewell dinner at resort. Overnight in Bali."
      },
      {
        day: "Day 06",
        title: "Departure",
        description: "Breakfast at resort. Check-out. Last minute shopping or beach time if flight schedule permits. Transfer to Ngurah Rai Airport for departure flight. End of tour with wonderful memories of Bali."
      }
    ],
    pricing: {
      per_person_double: "PKR 195,000 ($684)",
      per_person_triple: "PKR 185,000 ($649)",
      single_supplement: "PKR 40,000 ($140)"
    },
    notes: [
      "Indonesia offers visa on arrival for Pakistani passport holders",
      "Best time to visit: April to October (dry season)",
      "Currency: Indonesian Rupiah (IDR)",
      "Modest dress required for temple visits",
      "Bali is known for affordable shopping and dining",
      "Prices may vary according to season and flight availability"
    ]
  }
};

export 
default function InternationalTourDetail() {
  const params = useParams();
  const id = params?.id as string;
  const tour = tourDetails[id];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*International Tour Inquiry - ${tour.name}*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Travelers:* ${formData.travelers}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/923153309070?text=${whatsappMessage}`, '_blank');
    setFormData({ name: "", email: "", phone: "", travelers: "2", message: "" });
  };

  const handleWhatsAppInquiry = () => {
    const message = `*Inquiry for: ${tour.name}*%0A%0AHello, I'm interested in this international tour package. Please provide more details and pricing.`;
    window.open(`https://wa.me/923153309070?text=${message}`, '_blank');
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Tour Not Found</h1>
          <Link href="/international-tours" className="text-blue-600 hover:underline">
            Back to International Tours
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
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-md text-sm font-bold">
              <Plane className="w-4 h-4" />
              International Tour
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {tour.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-lg">{tour.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-lg">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-lg">{tour.groupSize}</span>
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
                src={tour.image}
                alt={tour.name}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Description */}
            <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Tour</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{tour.description}</p>
              
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
            {tour.pointsToVisit && (
              <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Places to Visit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.pointsToVisit.map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tour Highlights */}
            {tour.highlights && (
              <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">Tour Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            {tour.itinerary && (
              <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-blue-700 mb-2">{day.day}: {day.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Inclusions & Exclusions */}
            {(tour.included || tour.excluded) && (
              <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included & Excluded</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {tour.included && (
                    <div>
                      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                        <Check className="w-6 h-6" />
                        Included
                      </h3>
                      <ul className="space-y-3">
                        {tour.included.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tour.excluded && (
                    <div>
                      <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                        <X className="w-6 h-6" />
                        Excluded
                      </h3>
                      <ul className="space-y-3">
                        {tour.excluded.map((item: string, index: number) => (
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
            {tour.pricing && (
              <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">Pricing Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {Object.entries(tour.pricing).map(([key, value]: [string, any]) => (
                    <div key={key} className="bg-white rounded-lg p-6 border-2 border-blue-300 hover:border-blue-500 transition-colors">
                      <h3 className="text-lg font-bold text-blue-700 mb-2 capitalize">
                        {key.replace(/_/g, ' ')}
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-sm text-blue-800 font-semibold">
                    💡 Note: Prices may vary according to season and flight availability. Peak season rates may be higher. Early booking recommended for better rates.
                  </p>
                </div>
              </section>
            )}

            {/* Important Notes */}
            {tour.notes && (
              <section className="bg-blue-50 rounded-xl p-8 border border-blue-300">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Important Notes</h2>
                <ul className="space-y-2">
                  {tour.notes.map((note: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

         <TourContactSection/>
          </div>

          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-b border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Starting from</div>
                <div className="text-3xl font-bold text-blue-600">
                  {tour.price}
                </div>
                {tour.priceUSD && (
                  <div className="text-lg text-gray-600 mt-1">({tour.priceUSD} USD)</div>
                )}
                <div className="text-sm text-gray-600 mt-2">/person</div>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Tour</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      required
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Your Message or Special Requirements"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg"
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
