"use client";
import ImportantInstructionsSection from '@/app/components/ImportantInstructionsSection';
import CancellationPolicySection from '@/app/components/CancellationPolicySection';

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Calendar, Heart, Phone, Mail, Send, Check, X, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const packageDetails: any = {
  "1": {
    id: 1,
    title: "Naran & Shogran Honeymoon Tour Package (3 Days)",
    location: "Naran & Shogran",
    duration: "3 Days 2 Nights",
    price: "PKR 105,000",
    image: "/hn3.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Indulge in a dreamy getaway with our Naran & Shogran Honeymoon Tour Package, designed for couples seeking romance and adventure. This short yet enchanting trip offers breathtaking views, serene landscapes, and unforgettable experiences. Whether you wish to explore lush green valleys, enjoy cozy evenings by the riverside, or capture stunning moments in nature, this tour has everything to make your honeymoon truly special.",
    pointsToVisit: [
      "Shogran Valley",
      "Siri Paye Meadows",
      "Naran Valley",
      "Saif ul Malook Lake",
      "Lulusar Lake",
      "Babusar Top",
      "Kunhar River",
      "Kiwai Waterfall"
    ],
    highlights: [
      "Romantic stay in premium hotels",
      "Private jeep ride to Saif ul Malook Lake",
      "Visit to Siri Paye Meadows",
      "Scenic views of Kunhar River",
      "Bonfire and romantic dinner setup",
      "Flexible itinerary for couples"
    ],
    included: [
      "Transport (Toyota Corolla)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "Jeep for Saif ul Malook Lake & Siri Paye",
      "2 Breakfasts",
      "Bonfire (1 Night)",
      "Romantic room decoration (on request)"
    ],
    excluded: [
      "Any kind of Activity Charges",
      "Lunch and Dinner",
      "Any kind of Entry Tickets",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Departure to Shogran & Naran",
        description: "Departure from Lahore/Islamabad. Arrival at Kiwai Waterfall and visit. Transfer to Jeep for Shogran Valley and Siri Paye Meadows. Enjoy the scenic beauty and take memorable photos. Back to Kiwai in evening and leave for Naran. Arrival at Naran and check in hotel. Romantic dinner and night stay at Naran Valley."
      },
      {
        day: "Day 02",
        title: "Explore Naran",
        description: "Breakfast call. After breakfast leave for Rafting Point. Visit Rafting Point and free time for enjoyment. Lulusar Lake and Babusar Top will be visited when accessible. Back to Hotel in evening. Bonfire and romantic setup. Night stay at Naran Valley."
      },
      {
        day: "Day 03",
        title: "Saif ul Malook Lake - Return",
        description: "Early morning leave for Lake Saif Ul Malook on 4×4. Visit Lake Saif Ul Malook till 9:00am. Back to Naran for breakfast. Drive back to Lahore/Islamabad. Short stay for lunch on way. Arrival at Islamabad at 8:00PM. Arrival at Lahore late night."
      }
    ],
    hotelList: [
      { location: "Naran", standard: "Gateway Hotel", deluxe: "Hotel Homes", executive: "Masonite Hotel" }
    ],
    pricing: {
      fromIslamabad: {
        standard_per_couple: "PKR 105,000",
        deluxe_per_couple: "PKR 120,000",
        executive_per_couple: "PKR 155,000"
      },
      fromLahore: {
        standard_per_couple: "PKR 135,000",
        deluxe_per_couple: "PKR 150,000",
        executive_per_couple: "PKR 185,000"
      }
    },
    notes: [
      "20% of charges will be charged extra from June to September due to Peak Season.",
      "Hotels can be changed according to availability.",
      "Romantic room decoration available on request at additional cost."
    ]
  },
  "2": {
    id: 2,
    title: "Kumrat Honeymoon Tour Package (3 Days)",
    location: "Kumrat Valley",
    duration: "3 Days, 2 Nights",
    price: "PKR 125,000",
    image: "/hk3.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Experience the pristine beauty of Kumrat Valley with your loved one. This romantic package includes visits to Kala Chashma, Dojanga Meadows, and the enchanting forests of Kumrat. Surrounded by towering mountains and crystal-clear streams, Kumrat offers the perfect setting for couples seeking adventure and tranquility.",
    pointsToVisit: [
      "Kumrat Valley",
      "Kala Chashma",
      "Do Aabshaar Waterfalls",
      "Dojanga Meadows",
      "Kumrat Forest",
      "Jahaz Banda"
    ],
    highlights: [
      "Private luxury accommodation in Kumrat",
      "Jeep safari through Kumrat Forest",
      "Visit to Kala Chashma waterfall",
      "Romantic camping at Dojanga Meadows",
      "Bonfire under the stars",
      "Photography sessions at scenic spots"
    ],
    included: [
      "Transport (Toyota Corolla)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "Jeeps for Kumrat Valley",
      "2 Dinners, 3 Breakfasts",
      "Bonfire",
      "Premium accommodation"
    ],
    excluded: [
      "Any kind of Entry Tickets",
      "Jeep Charges for Dojanga Meadows (PKR 2,500/head)",
      "Lunches",
      "Personal expenses",
      "Any extra charges in case of road blocks"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad/Lahore - Kumrat Forest",
        description: "Pickup from Islamabad/Lahore. Short stay at Timergara for breakfast. Arrival to Thal. Transfer to Jeeps for Kumrat Forest. Arrival to Hotel and check-in. Explore the surroundings. Romantic dinner and overnight at Kumrat Forest."
      },
      {
        day: "Day 02",
        title: "Kumrat - Kala Chashma - Dojanga",
        description: "Breakfast call. Transfer to Jeeps. Enjoy the beautiful jeep ride through the forest. Visit Do Aabshaar waterfalls. Visit Kala Chashma. Visit Dojanga Meadows and spend quality time. Back to Kumrat Forest. Bonfire and romantic setup. Overnight at Kumrat."
      },
      {
        day: "Day 03",
        title: "Kumrat - Return Journey",
        description: "Breakfast call. Transfer to jeep and arrive to Thal. Shift luggage to vehicle. Departure to Islamabad and Lahore. Short stays on the way. Arrival to Islamabad. Arrival to Lahore."
      }
    ],
    hotelList: [
      { location: "Kumrat", standard: "Maskan Hotel", deluxe: "Khanabadosh Hut/Pods", executive: "Khanabadosh Glamps" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 125,000",
        deluxe: "PKR 165,000",
        executive: "PKR 195,000"
      }
    },
    notes: [
      "Jeep charges for Kumrat Valley will be PKR 2,500/head.",
      "Hotels are subject to availability and can be changed.",
      "Best time to visit: May to September"
    ]
  },
  "3": {
    id: 3,
    title: "Nathia Gali Honeymoon Package – A Romantic Mountain Retreat",
    location: "Nathia Gali",
    duration: "2 Days 1 Night",
    price: "Contact for Pricing",
    image: "/hnath2.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Escape to the serene hills of Nathia Gali for a romantic mountain retreat. Enjoy cool weather, lush green forests, and peaceful moments with your partner. This short getaway is perfect for couples seeking a quick escape from city life.",
    pointsToVisit: [
      "Nathia Gali",
      "Ayubia National Park",
      "Pipeline Track",
      "Mukshpuri Top",
      "Dunga Gali"
    ],
    highlights: [
      "Romantic walks through pine forests",
      "Cool mountain weather",
      "Cozy hotel accommodation",
      "Scenic viewpoints",
      "Peaceful environment"
    ],
    included: [
      "Transport (Toyota Corolla)",
      "Fuel and Toll Taxes",
      "1 Night Accommodation",
      "1 Breakfast",
      "Professional Driver"
    ],
    excluded: [
      "Lunch and Dinner",
      "Entry Tickets",
      "Personal expenses"
    ]
  },
  "4": {
    id: 4,
    title: "Malam Jabba Honeymoon Tour Package (2 Days)",
    location: "Malam Jabba",
    duration: "2 Days 1 Night",
    price: "Contact for Pricing",
    image: "/hma2.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Discover the beauty of Malam Jabba with your loved one. Enjoy skiing, cable car rides, and stunning mountain views in this romantic getaway. Perfect for adventure-loving couples who want to experience winter sports and mountain beauty.",
    pointsToVisit: [
      "Malam Jabba Ski Resort",
      "Cable Car Station",
      "Swat Valley",
      "Fizaghat",
      "White Palace Marghazar"
    ],
    highlights: [
      "Cable car ride with mountain views",
      "Skiing and snow activities (seasonal)",
      "Romantic mountain resort stay",
      "Visit to White Palace",
      "Scenic drive through Swat Valley"
    ],
    included: [
      "Transport (Toyota Corolla)",
      "Fuel and Toll Taxes",
      "1 Night Accommodation",
      "1 Breakfast",
      "Professional Driver",
      "Cable car tickets"
    ],
    excluded: [
      "Skiing equipment rental",
      "Lunch and Dinner",
      "Entry Tickets",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Malam Jabba",
        description: "Departure from Islamabad. Drive through scenic Swat Valley. Arrival at Malam Jabba. Cable car ride to ski resort. Free time for skiing and snow activities. Check-in at hotel. Romantic dinner. Overnight at Malam Jabba."
      },
      {
        day: "Day 02",
        title: "Malam Jabba - Return",
        description: "Breakfast call. Visit White Palace Marghazar. Explore Fizaghat. Drive back to Islamabad. Short stops on the way. Arrival at Islamabad."
      }
    ],
    hotelList: [
      { location: "Malam Jabba", standard: "Pearl Continental", deluxe: "Malam Jabba Resort", executive: "Luxury Mountain Lodge" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 85,000",
        deluxe: "PKR 110,000",
        executive: "PKR 145,000"
      }
    },
    notes: [
      "Skiing available only in winter season (December to March).",
      "Cable car operates subject to weather conditions.",
      "Hotels can be changed according to availability."
    ]
  },
  "5": {
    id: 5,
    title: "Kashmir Honeymoon Tour Package (3 Days)",
    location: "Kashmir",
    duration: "3 Days 2 Nights",
    price: "Contact for Pricing",
    image: "/nel3.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Experience the paradise of Kashmir with your partner. Visit Neelum Valley, Arang Kel, and enjoy the breathtaking beauty of this romantic destination. This package offers the perfect blend of natural beauty, adventure, and romantic moments.",
    pointsToVisit: [
      "Neelum Valley",
      "Sharda",
      "Kel",
      "Arang Kel",
      "Dhani Waterfall",
      "Kutton Waterfall"
    ],
    highlights: [
      "Cable car ride to Arang Kel",
      "Romantic stay in Sharda",
      "Visit to beautiful waterfalls",
      "Scenic drive along Neelum River",
      "Bonfire and romantic setup"
    ],
    included: [
      "Transport (Toyota Corolla)",
      "Fuel and Toll Taxes",
      "2 Nights Accommodation",
      "2 Dinners, 3 Breakfasts",
      "Professional Guide",
      "Bonfire"
    ],
    excluded: [
      "Cable car charges",
      "Entry Tickets",
      "Lunches",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Sharda",
        description: "Departure from Islamabad. Visit Dhani Waterfall. Visit Kutton Waterfall. Arrival at Sharda. Check-in hotel. Romantic dinner and bonfire. Overnight at Sharda."
      },
      {
        day: "Day 02",
        title: "Sharda - Arang Kel",
        description: "Breakfast call. Transfer to Kel. Cable car ride to Arang Kel. Hiking to Arang Kel (45 mins). Explore the beauty. Back to Sharda. Romantic dinner. Overnight at Sharda."
      },
      {
        day: "Day 03",
        title: "Return Journey",
        description: "Breakfast call. Drive back to Islamabad. Short stops on the way. Arrival at Islamabad."
      }
    ]
  },
  "6": {
    id: 6,
    title: "7 Days Honeymoon Tour for Swat & HUNZA (by Road)",
    location: "Swat & HUNZA",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/hswh7.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Embark on a romantic journey through Swat and HUNZA valleys. Experience the perfect blend of natural beauty, culture, and adventure with your loved one. This comprehensive tour covers two of Pakistan's most beautiful valleys, offering diverse landscapes and unforgettable experiences.",
    pointsToVisit: [
      "Malam Jabba",
      "Kalam Valley",
      "Mahodand Lake",
      "Chilas",
      "HUNZA Valley",
      "Attabad Lake",
      "Baltit Fort",
      "Altit Fort",
      "Passu Cones",
      "Khunjerab Pass"
    ],
    highlights: [
      "Explore both Swat and HUNZA valleys",
      "Visit Mahodand Lake",
      "Cable car ride at Malam Jabba",
      "Boat ride at Attabad Lake",
      "Visit to Khunjerab Pass (China Border)",
      "Historical forts of HUNZA",
      "Romantic stays in premium hotels"
    ],
    included: [
      "Transport (Toyota Corolla/Parado)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "6 Nights Accommodation",
      "6 Breakfasts",
      "Jeeps for Mahodand Lake",
      "Bonfire",
      "Romantic room decoration"
    ],
    excluded: [
      "Lunch and Dinner",
      "Entry Tickets",
      "Cable car charges",
      "Boat ride charges",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Swat",
        description: "Departure from Islamabad. Drive to Swat Valley. Visit Malam Jabba. Cable car ride. Arrival at Kalam. Check-in hotel. Romantic dinner. Overnight at Kalam."
      },
      {
        day: "Day 02",
        title: "Kalam - Mahodand Lake",
        description: "Breakfast call. Transfer to jeeps for Mahodand Lake. Explore the beautiful lake. Picnic lunch by the lake. Back to Kalam. Bonfire and romantic setup. Overnight at Kalam."
      },
      {
        day: "Day 03",
        title: "Kalam - Chilas",
        description: "Breakfast call. Departure for Chilas. Drive through scenic routes. Short stops on the way. Arrival at Chilas. Check-in hotel. Dinner and overnight at Chilas."
      },
      {
        day: "Day 04",
        title: "Chilas - HUNZA",
        description: "Breakfast call. Departure for HUNZA Valley. Visit Rakaposhi viewpoint. Arrival at HUNZA. Visit Baltit and Altit Forts. Shopping at Karimabad Bazar. Check-in hotel. Romantic dinner. Overnight at HUNZA."
      },
      {
        day: "Day 05",
        title: "HUNZA - Khunjerab Pass",
        description: "Breakfast call. Departure for Khunjerab Pass. Visit Attabad Lake. Visit Passu Cones. Visit Hussaini Bridge. Visit Khunjerab Border (if open). Back to HUNZA. Romantic dinner. Overnight at HUNZA."
      },
      {
        day: "Day 06",
        title: "HUNZA - Chilas",
        description: "Breakfast call. Free time in HUNZA. Visit Eagle's Nest viewpoint. Departure for Chilas. Arrival at Chilas. Dinner and overnight at Chilas."
      },
      {
        day: "Day 07",
        title: "Chilas - Islamabad",
        description: "Breakfast call. Departure for Islamabad. Short stops on the way. Arrival at Islamabad."
      }
    ],
    hotelList: [
      { location: "Kalam", standard: "Kalam Inn", deluxe: "Ushu Forest Hotel", executive: "Luxury Mountain Resort" },
      { location: "Chilas", standard: "Shangrilla Chilas", deluxe: "Grace Continental", executive: "Shangrilla Hotel" },
      { location: "HUNZA", standard: "HUNZA Hidden Palace", deluxe: "Northern Sapphire", executive: "Luxus HUNZA" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 195,000",
        deluxe: "PKR 245,000",
        executive: "PKR 295,000"
      }
    },
    notes: [
      "Khunjerab Pass visit subject to weather and border opening.",
      "Jeep charges for Mahodand Lake approximately PKR 3,000/head.",
      "Hotels can be changed according to availability."
    ]
  },
  "7": {
    id: 7,
    title: "7 Days SKARDU Honeymoon Tour",
    location: "SKARDU",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/hsk7.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Explore the majestic beauty of SKARDU with your partner. Visit Shangrila Lake, DEOSAI Plains, and create unforgettable memories in this romantic destination. This comprehensive tour covers all major attractions of SKARDU, offering a perfect blend of natural beauty and adventure.",
    pointsToVisit: [
      "Shangrila Lake",
      "Upper Kachura Lake",
      "Lower Kachura Lake",
      "DEOSAI National Park",
      "Sheosar Lake",
      "Manthoka Waterfall",
      "Sarfaranga Cold Desert",
      "Shigar Fort",
      "Basho Valley",
      "Satpara Lake"
    ],
    highlights: [
      "Visit to Shangrila Resort",
      "Explore DEOSAI Plains (Land of Giants)",
      "Boat ride at Kachura Lakes",
      "Visit Sarfaranga Cold Desert",
      "Explore Basho Valley",
      "Visit historic Shigar Fort",
      "Romantic stays with mountain views"
    ],
    included: [
      "Transport (Toyota Corolla/Parado)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "6 Nights Accommodation",
      "6 Breakfasts",
      "Jeeps for DEOSAI and Basho Valley",
      "Bonfire",
      "Romantic room decoration"
    ],
    excluded: [
      "Lunch and Dinner",
      "Entry Tickets",
      "Boat ride charges",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Chilas",
        description: "Departure from Islamabad. Drive through scenic Karakoram Highway. Short stops on the way. Arrival at Chilas. Check-in hotel. Dinner and overnight at Chilas."
      },
      {
        day: "Day 02",
        title: "Chilas - SKARDU",
        description: "Breakfast call. Departure for SKARDU. Visit Shangrila Lake and Resort. Visit Upper Kachura Lake. Check-in hotel in SKARDU. Romantic dinner. Overnight at SKARDU."
      },
      {
        day: "Day 03",
        title: "SKARDU - DEOSAI Plains",
        description: "Breakfast call. Transfer to 4x4 jeeps. Departure for DEOSAI National Park. Visit Sheosar Lake. Explore the Land of Giants. Wildlife spotting. Back to SKARDU. Bonfire. Overnight at SKARDU."
      },
      {
        day: "Day 04",
        title: "Manthoka - Sarfaranga - Shigar",
        description: "Breakfast call. Visit Manthoka Waterfall. Visit Sarfaranga Cold Desert. Free time for activities. Visit Shigar Fort. Visit Amburuk Mosque. Back to SKARDU. Overnight at SKARDU."
      },
      {
        day: "Day 05",
        title: "Basho Valley",
        description: "Breakfast call. Transfer to 4x4 jeeps for Basho Valley. Explore Basho Meadows. Visit Basho Suspension Bridge. Picnic lunch. Back to SKARDU. Romantic dinner. Overnight at SKARDU."
      },
      {
        day: "Day 06",
        title: "SKARDU - Chilas",
        description: "Breakfast call. Visit Satpara Lake. Free time for shopping. Departure for Chilas. Arrival at Chilas. Dinner and overnight at Chilas."
      },
      {
        day: "Day 07",
        title: "Chilas - Islamabad",
        description: "Breakfast call. Departure for Islamabad. Short stops on the way. Arrival at Islamabad."
      }
    ],
    hotelList: [
      { location: "Chilas", standard: "Shangrilla Chilas", deluxe: "Grace Continental", executive: "Shangrilla Hotel" },
      { location: "SKARDU", standard: "Trout Villa", deluxe: "Gumaan Resort", executive: "Gumaan Resort" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 185,000",
        deluxe: "PKR 235,000",
        executive: "PKR 285,000"
      }
    },
    notes: [
      "DEOSAI Plains accessible from June to September only.",
      "Jeep charges for DEOSAI approximately PKR 3,000/head.",
      "Hotels can be changed according to availability."
    ]
  },
  "8": {
    id: 8,
    title: "Honeymoon Tour to HUNZA Valley 6 Days– By Road",
    location: "HUNZA Valley",
    duration: "6 Days 5 Nights",
    price: "Contact for Pricing",
    image: "/hh6.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Discover the enchanting HUNZA Valley with your loved one. Visit Attabad Lake, Baltit Fort, and enjoy the stunning mountain scenery on this romantic journey. This tour offers a perfect blend of culture, history, and natural beauty, making it ideal for couples seeking a memorable honeymoon experience.",
    pointsToVisit: [
      "Naran Valley",
      "Babusar Top",
      "Lulusar Lake",
      "Chilas",
      "Rakaposhi Viewpoint",
      "HUNZA Valley",
      "Baltit Fort",
      "Altit Fort",
      "Attabad Lake",
      "Passu Cones",
      "Hussaini Bridge",
      "Khunjerab Pass",
      "NALTAR Valley"
    ],
    highlights: [
      "Scenic drive via Babusar Top",
      "Visit to Attabad Lake with boat ride",
      "Explore Baltit and Altit Forts",
      "Drive to Khunjerab Pass (China Border)",
      "Visit NALTAR Valley",
      "Shopping at Karimabad Bazar",
      "Romantic stays with mountain views"
    ],
    included: [
      "Transport (Toyota Corolla/Parado)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "5 Nights Accommodation",
      "5 Breakfasts",
      "Jeeps for NALTAR Valley",
      "Bonfire",
      "Romantic room decoration"
    ],
    excluded: [
      "Lunch and Dinner",
      "Entry Tickets",
      "Boat ride charges",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Naran - Chilas",
        description: "Departure from Islamabad. Drive through scenic routes. Short stay at Balakot for breakfast. Visit Naran Valley. Visit Lulusar Lake. Visit Babusar Top (seasonal). Arrival at Chilas. Check-in hotel. Dinner and overnight at Chilas."
      },
      {
        day: "Day 02",
        title: "Chilas - HUNZA",
        description: "Breakfast call. Departure for HUNZA Valley. Visit Rakaposhi viewpoint. Arrival at HUNZA. Visit Baltit and Altit Forts. Shopping at Karimabad Bazar. Check-in hotel. Romantic dinner. Overnight at HUNZA."
      },
      {
        day: "Day 03",
        title: "HUNZA - Khunjerab Pass",
        description: "Breakfast call. Departure for Khunjerab Pass. Visit Attabad Lake. Boat ride at Attabad Lake. Visit Passu Cones. Visit Hussaini Suspension Bridge. Visit Khunjerab Border (if open). Back to HUNZA. Bonfire and romantic setup. Overnight at HUNZA."
      },
      {
        day: "Day 04",
        title: "HUNZA - NALTAR Valley",
        description: "Breakfast call. Departure for NALTAR Valley. Transfer to jeeps at Nomal. Visit Satrangi Lake. Visit Blue Water Lake. Explore NALTAR Valley. Back to Gilgit. Check-in hotel. Dinner and overnight at Gilgit."
      },
      {
        day: "Day 05",
        title: "Gilgit - Naran",
        description: "Breakfast call. Departure for Naran. Drive through scenic Karakoram Highway. Short stops on the way. Arrival at Naran. Check-in hotel. Romantic dinner. Overnight at Naran."
      },
      {
        day: "Day 06",
        title: "Naran - Islamabad",
        description: "Breakfast call. Departure for Islamabad. Short stops on the way. Arrival at Islamabad."
      }
    ],
    hotelList: [
      { location: "Chilas", standard: "Shangrilla Chilas", deluxe: "Grace Continental", executive: "Shangrilla Hotel" },
      { location: "HUNZA", standard: "HUNZA Hidden Palace", deluxe: "Northern Sapphire", executive: "Luxus HUNZA" },
      { location: "Gilgit", standard: "Alpine Guest House", deluxe: "Duroyou Inn", executive: "Serena Gilgit" },
      { location: "Naran", standard: "Gateway Hotel", deluxe: "Hotel Homes", executive: "Masonite Hotel" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 165,000",
        deluxe: "PKR 215,000",
        executive: "PKR 265,000"
      }
    },
    notes: [
      "Babusar Top accessible from June to September only.",
      "Khunjerab Pass visit subject to weather and border opening.",
      "Jeep charges for NALTAR approximately PKR 2,500/head.",
      "Hotels can be changed according to availability."
    ]
  },
  "9": {
    id: 9,
    title: "Honeymoon in HUNZA & SKARDU 7 Days – By Air",
    location: "HUNZA & SKARDU",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/hs.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Experience the ultimate romantic getaway with flights to Gilgit. Explore both HUNZA and SKARDU valleys, creating memories that will last a lifetime. This exclusive honeymoon package combines luxury, adventure, and breathtaking landscapes, designed for couples seeking romance and adventure.",
    pointsToVisit: [
      "Shangrila Lake",
      "Upper Kachura Lake",
      "Manthoka Waterfall",
      "Sarfaranga Cold Desert",
      "Shigar Fort",
      "Basho Valley",
      "Attabad Lake",
      "Passu Cones",
      "Baltit Fort",
      "Altit Fort",
      "Khunjerab Pass",
      "NALTAR Valley"
    ],
    highlights: [
      "Scenic flight to SKARDU",
      "Luxury honeymoon accommodations",
      "Boat ride at Attabad Lake",
      "Visit to Khunjerab Pass (China Border)",
      "Romantic setup at hotels",
      "Professional photography sessions",
      "Bonfire and candlelight dinner"
    ],
    included: [
      "Transport (Toyota Corolla/Parado)",
      "Fuel/Toll Tax/Challan/Driver/Guide",
      "6 Nights Accommodation",
      "6 Breakfasts",
      "Jeeps for Basho Valley",
      "Jeeps for NALTAR",
      "Bonfire",
      "Romantic room decoration"
    ],
    excluded: [
      "Air Fares (charged separately)",
      "Any kind of Activity Charges",
      "Lunch and Dinner",
      "Entry Tickets",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Flight to SKARDU",
        description: "Pick up from SKARDU Airport. Arrival at Hotel and check-in. Visit Shangrilla Lake and Resort. Visit Upper Kachura Lake. Free time for activities. Romantic dinner and overnight stay in SKARDU."
      },
      {
        day: "Day 02",
        title: "Sarfaranga Cold Desert - Manthoka Waterfall",
        description: "Breakfast call. Visit Manthoka waterfall. Departure for Sarfaranga Cold Desert. Free time for activities (Jeep Safari, Paragliding). Visit Shigar Fort and Amburuk Mosque. Back to hotel. Overnight stay at SKARDU."
      },
      {
        day: "Day 03",
        title: "Basho Valley",
        description: "Breakfast call. Visit Chocolate Rocks. Transfer to 4x4 jeeps for Basho Meadows. Explore Basho Valley. Visit Basho Suspension Bridge. Back to hotel. Overnight stay at SKARDU."
      },
      {
        day: "Day 04",
        title: "SKARDU to HUNZA",
        description: "After breakfast departure for HUNZA Valley. Short stay at Astak Nala. Visit Rakaposhi viewpoint. Visit Altit Fort & Baltit Fort. Shopping at Karimabad bazar. Check-in at HUNZA hotel. Romantic dinner and night stay."
      },
      {
        day: "Day 05",
        title: "Explore HUNZA - Khunjerab Pass",
        description: "After breakfast departure for Khunjerab Pass. Visit Attabad Lake. Visit Hussaini Suspension Bridge. Visit Passu Cones. Visit Khunjerab Border (if open). Drive back to HUNZA. Romantic dinner and overnight stay."
      },
      {
        day: "Day 06",
        title: "HUNZA - NALTAR Valley",
        description: "Breakfast call. Arrival to Nomal Valley. Transfer to Jeep for NALTAR Valley. Visit Satrangi Lake and Blue Water Lake. Explore NALTAR Valley. Leave for Gilgit. Dinner and night stay at Gilgit."
      },
      {
        day: "Day 07",
        title: "Fly Back Home",
        description: "Breakfast call. After breakfast leave for Gilgit Airport. Drop off at airport. Fly back to Islamabad."
      }
    ],
    hotelList: [
      { location: "SKARDU", standard: "Trout Villa", deluxe: "Gumaan Resort", executive: "Gumaan Resort" },
      { location: "HUNZA", standard: "HUNZA Hidden Palace", deluxe: "Northern Sapphire", executive: "Luxus HUNZA" },
      { location: "Gilgit", standard: "Alpine Guest House", deluxe: "Duroyou Inn", executive: "Serena Gilgit" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 180,000",
        deluxe: "PKR 240,000",
        executive: "PKR 295,000"
      }
    },
    notes: [
      "AIR FARES are not included. They will be charged separately.",
      "Hotels can be changed according to availability.",
      "Romantic room decoration and special arrangements available on request."
    ]
  },
  "10": {
    id: 10,
    title: "3-Day Honeymoon in HUNZA – By Air",
    location: "HUNZA",
    duration: "3 Days 2 Nights",
    price: "Contact for Pricing",
    image: "/hswh7.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "A quick romantic escape to HUNZA Valley by air. Perfect for couples with limited time who want to experience the beauty of HUNZA. Fly to Gilgit and explore the stunning HUNZA Valley with its majestic mountains, historic forts, and crystal-clear lakes.",
    pointsToVisit: [
      "Gilgit Airport",
      "Rakaposhi Viewpoint",
      "HUNZA Valley",
      "Baltit Fort",
      "Altit Fort",
      "Karimabad Bazar",
      "Eagle's Nest (Duikar)",
      "Attabad Lake",
      "Passu Cones",
      "Hussaini Bridge",
      "Khunjerab Pass"
    ],
    highlights: [
      "Scenic flight to Gilgit",
      "Visit historic Baltit and Altit Forts",
      "Sunset at Eagle's Nest viewpoint",
      "Boat ride at Attabad Lake",
      "Drive to Khunjerab Pass (China Border)",
      "Shopping at Karimabad Bazar"
    ],
    included: [
      "Transport (Toyota Corolla)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "2 Nights Accommodation",
      "2 Breakfasts",
      "Bonfire",
      "Romantic room decoration"
    ],
    excluded: [
      "Air Fares (charged separately)",
      "Lunch and Dinner",
      "Entry Tickets",
      "Boat ride charges",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Flight to Gilgit - HUNZA",
        description: "Pickup from Gilgit Airport. Departure for HUNZA Valley. Sightseeing of Indus River. Visit Rakaposhi viewpoint. Arrival in HUNZA. Visit Altit and Baltit Fort. Visit Karimabad Shopping Center. Visit Duikar for sunset (Eagle Nest point). Check-in hotel. Romantic dinner. Night stay at HUNZA."
      },
      {
        day: "Day 02",
        title: "Exploring HUNZA Valley",
        description: "Breakfast call. Departure for Khunjerab. Experience Attabad Tunnel drive. Visit Attabad Lake. Visit Passu Cones. Visit Hussaini Suspension Bridge. Visit Khunjerab Pass (if open). Back to HUNZA. Visit Karimabad Bazar. Bonfire and romantic setup. Overnight at HUNZA."
      },
      {
        day: "Day 03",
        title: "Fly Back to Home",
        description: "Breakfast call. After breakfast leave for Gilgit Airport. Drop off at Gilgit Airport. Fly back to Islamabad."
      }
    ],
    hotelList: [
      { location: "HUNZA", standard: "HUNZA Hidden Palace", deluxe: "Dastan By Roomy", executive: "Luxus HUNZA" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 85,000",
        deluxe: "PKR 110,000",
        executive: "PKR 130,000"
      }
    },
    notes: [
      "AIR FARES are not included. They will be charged separately.",
      "Khunjerab Pass visit subject to weather and border opening.",
      "Hotels can be changed according to availability."
    ]
  },
  "11": {
    id: 11,
    title: "4 Days By Air Honeymoon Package for HUNZA Valley",
    location: "HUNZA Valley",
    duration: "4 Days 3 Nights",
    price: "Contact for Pricing",
    image: "/hswh7.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Fly to Gilgit and explore the romantic beauty of HUNZA Valley. Visit Attabad Lake, Passu Cones, and enjoy quality time with your partner. This 4-day package includes visits to NALTAR Valley, making it a comprehensive HUNZA experience.",
    pointsToVisit: [
      "Gilgit Airport",
      "Rakaposhi Viewpoint",
      "HUNZA Valley",
      "Baltit Fort",
      "Altit Fort",
      "Eagle's Nest",
      "Attabad Lake",
      "Passu Cones",
      "Hussaini Bridge",
      "Khunjerab Pass",
      "NALTAR Valley",
      "Satrangi Lake",
      "Blue Water Lake"
    ],
    highlights: [
      "Scenic flight to Gilgit",
      "Visit Attabad Lake and Passu Cones",
      "Explore Baltit and Altit Forts",
      "Drive to Khunjerab Pass",
      "Visit NALTAR Valley",
      "Romantic stays with mountain views"
    ],
    included: [
      "Transport (Toyota Corolla/Parado)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "3 Nights Accommodation",
      "3 Breakfasts",
      "Jeeps for NALTAR",
      "Bonfire",
      "Romantic room decoration"
    ],
    excluded: [
      "Air Fares (charged separately)",
      "Lunch and Dinner",
      "Entry Tickets",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Flight to Gilgit - HUNZA",
        description: "Pickup from Gilgit Airport. Departure for HUNZA Valley. Sightseeing of Indus River. Visit Rakaposhi viewpoint. Arrival in HUNZA. Visit Altit and Baltit Fort. Visit Karimabad Shopping Center. Visit Eagle Nest point for sunset. Check-in hotel. Romantic dinner. Night stay at HUNZA."
      },
      {
        day: "Day 02",
        title: "Exploring HUNZA Valley",
        description: "Breakfast call. Departure for Khunjerab. Experience Attabad Tunnel drive. Visit Attabad Lake. Visit Passu Cones. Visit Hussaini Suspension Bridge. Visit Khunjerab Pass (if open). Back to HUNZA. Visit Karimabad Bazar. Bonfire. Overnight at HUNZA."
      },
      {
        day: "Day 03",
        title: "HUNZA - NALTAR Valley",
        description: "Breakfast call. Arrival to Nomal Valley. Transfer to Jeep for NALTAR Valley. Visit NALTAR Valley. Visit Satrangi Lake. Visit Blue Water Lake. Explore the Beauty of NALTAR Valley. Leave for Gilgit. Dinner and night stay at Gilgit."
      },
      {
        day: "Day 04",
        title: "Fly Back to Home",
        description: "Breakfast call. After breakfast leave for Gilgit Airport. Drop off at Gilgit Airport. Fly back to Islamabad."
      }
    ],
    hotelList: [
      { location: "HUNZA", standard: "HUNZA Hidden Palace", deluxe: "Dastan By Roomy", executive: "Luxus HUNZA" },
      { location: "Gilgit", standard: "Duroyou Inn", deluxe: "Destination Hotel", executive: "Ramada Gilgit" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 105,000",
        deluxe: "PKR 135,000",
        executive: "PKR 170,000"
      }
    },
    notes: [
      "AIR FARES are not included. They will be charged separately.",
      "Jeep charges for NALTAR approximately PKR 2,500/head.",
      "Hotels can be changed according to availability."
    ]
  },
  "12": {
    id: 12,
    title: "5 Days By Air Honeymoon Package for SKARDU Valley",
    location: "SKARDU Valley",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/hs.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Experience the magical beauty of SKARDU with a convenient flight. Visit Shangrila Resort, Kachura Lakes, and create romantic memories. This package offers the perfect blend of natural beauty, adventure, and romantic experiences in one of Pakistan's most stunning valleys.",
    pointsToVisit: [
      "Shangrila Lake",
      "Upper Kachura Lake",
      "Manthoka Waterfall",
      "Sarfaranga Cold Desert",
      "Shigar Fort",
      "Amburuk Mosque",
      "Basho Valley",
      "Khaplu Valley",
      "Chaqchan Mosque"
    ],
    highlights: [
      "Scenic flight to SKARDU",
      "Visit Shangrila Resort",
      "Explore Sarfaranga Cold Desert",
      "Visit historic Shigar Fort",
      "Jeep safari to Basho Valley",
      "Explore Khaplu Valley",
      "Romantic stays with mountain views"
    ],
    included: [
      "Transport (Toyota Corolla/Parado)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "4 Nights Accommodation",
      "4 Breakfasts",
      "Jeeps for Basho Valley",
      "Bonfire",
      "Romantic room decoration"
    ],
    excluded: [
      "Air Fares (charged separately)",
      "Lunch and Dinner",
      "Entry Tickets",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Flight to SKARDU",
        description: "Pick up from SKARDU Airport. Visit Shangrilla Lake and Resort. Visit Upper Kachura Lake. Free time for activities. Check-in hotel. Romantic dinner. Overnight stay in SKARDU."
      },
      {
        day: "Day 02",
        title: "Sarfaranga - Shigar",
        description: "Breakfast call. Visit Manthoka waterfall. Visit Sarfaranga Cold Desert. Free time for activities. Visit Shigar Fort. Visit Amburuk Mosque. Back to hotel. Overnight at SKARDU."
      },
      {
        day: "Day 03",
        title: "Basho Valley",
        description: "Breakfast call. Transfer to 4x4 jeeps for Basho Valley. Explore Basho Meadows. Visit Basho Suspension Bridge. Back to hotel. Bonfire. Overnight at SKARDU."
      },
      {
        day: "Day 04",
        title: "Khaplu Valley",
        description: "Breakfast call. Departure for Khaplu. Visit Khaplu Palace. Visit Chaqchan Mosque. Explore Khaplu Valley. Back to SKARDU. Romantic dinner. Overnight at SKARDU."
      },
      {
        day: "Day 05",
        title: "Fly Back Home",
        description: "Breakfast call. After breakfast leave for SKARDU Airport. Drop off at airport. Fly back to Islamabad."
      }
    ],
    hotelList: [
      { location: "SKARDU", standard: "Trout Villa", deluxe: "Gumaan Resort", executive: "Gumaan Resort" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 150,000",
        deluxe: "PKR 190,000",
        executive: "PKR 225,000"
      }
    },
    notes: [
      "AIR FARES are not included. They will be charged separately.",
      "Jeep charges for Basho Valley approximately PKR 2,500/head.",
      "Hotels can be changed according to availability."
    ]
  },
  "13": {
    id: 13,
    title: "4 Days By Air Honeymoon Package for SKARDU Valley",
    location: "SKARDU Valley",
    duration: "4 Days 3 Nights",
    price: "Contact for Pricing",
    image: "/sk.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "A perfect short honeymoon to SKARDU by air. Explore the stunning landscapes and enjoy romantic moments at beautiful lakes and valleys. This compact package covers all major attractions of SKARDU, perfect for couples with limited time.",
    pointsToVisit: [
      "Shangrila Lake",
      "Upper Kachura Lake",
      "Manthoka Waterfall",
      "Sarfaranga Cold Desert",
      "Shigar Fort",
      "Basho Valley",
      "Chocolate Rocks"
    ],
    highlights: [
      "Scenic flight to SKARDU",
      "Visit Shangrila Resort",
      "Explore Sarfaranga Cold Desert",
      "Visit Manthoka Waterfall",
      "Jeep safari to Basho Valley",
      "Romantic stays"
    ],
    included: [
      "Transport (Toyota Corolla/Parado)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "3 Nights Accommodation",
      "3 Breakfasts",
      "Jeeps for Basho Valley",
      "Bonfire",
      "Romantic room decoration"
    ],
    excluded: [
      "Air Fares (charged separately)",
      "Lunch and Dinner",
      "Entry Tickets",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Flight to SKARDU",
        description: "Pick up from SKARDU Airport. Visit Shangrilla Lake. Visit Upper Kachura Lake. Free time for activities. Check-in hotel. Romantic dinner. Overnight stay in SKARDU."
      },
      {
        day: "Day 02",
        title: "Sarfaranga - Manthoka",
        description: "Breakfast call. Visit Manthoka waterfall. Visit Sarfaranga Cold Desert. Visit Shigar Fort. Back to hotel. Bonfire. Overnight at SKARDU."
      },
      {
        day: "Day 03",
        title: "Basho Valley",
        description: "Breakfast call. Visit Chocolate Rocks. Transfer to 4x4 jeeps for Basho Valley. Explore Basho Meadows. Visit Basho Suspension Bridge. Back to hotel. Romantic dinner. Overnight at SKARDU."
      },
      {
        day: "Day 04",
        title: "Fly Back Home",
        description: "Breakfast call. After breakfast leave for SKARDU Airport. Drop off at airport. Fly back to Islamabad."
      }
    ],
    hotelList: [
      { location: "SKARDU", standard: "Trout Villa", deluxe: "Gumaan Resort", executive: "Gumaan Resort" }
    ],
    pricing: {
      perCouple: {
        standard: "PKR 110,000",
        deluxe: "PKR 145,000",
        executive: "PKR 175,000"
      }
    },
    notes: [
      "AIR FARES are not included. They will be charged separately.",
      "Jeep charges for Basho Valley approximately PKR 2,500/head.",
      "Hotels can be changed according to availability."
    ]
  },
  "14": {
    id: 14,
    title: "10 Days Honeymoon Tour for Swat, HUNZA & SKARDU Valley",
    location: "Swat, HUNZA & SKARDU",
    duration: "10 Days 9 Nights",
    price: "Contact for Pricing",
    image: "/sw5.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "The ultimate honeymoon experience covering three beautiful valleys. Enjoy an extended romantic journey through Swat, HUNZA, and SKARDU. This comprehensive tour offers the best of northern Pakistan's natural beauty, culture, and adventure.",
    pointsToVisit: [
      "Swat Valley", "Malam Jabba", "Kalam", "Mahodand Lake", "Chilas", "HUNZA Valley", "Attabad Lake", "Baltit Fort", "Khunjerab Pass", "SKARDU", "Shangrila Lake", "DEOSAI Plains"
    ],
    highlights: [
      "Explore three major valleys", "Visit Mahodand Lake", "Drive to Khunjerab Pass", "Explore DEOSAI Plains", "Visit historic forts", "Romantic stays throughout"
    ],
    included: [
      "Transport", "9 Nights Accommodation", "9 Breakfasts", "Professional Guide", "Jeeps for special locations", "Bonfire", "Romantic room decoration"
    ],
    excluded: [
      "Lunch and Dinner", "Entry Tickets", "Personal expenses"
    ],
    pricing: {
      perCouple: {
        standard: "PKR 295,000",
        deluxe: "PKR 365,000",
        executive: "PKR 445,000"
      }
    },
    notes: [
      "This is an extensive tour covering three valleys.", "Hotels can be changed according to availability."
    ]
  },
  "15": {
    id: 15,
    title: "6 Days Honeymoon Package for SKARDU Valley",
    location: "SKARDU Valley",
    duration: "6 Days 5 Nights",
    price: "Contact for Pricing",
    image: "/skardu1.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Immerse yourself in the beauty of SKARDU with this comprehensive honeymoon package. Visit all major attractions and enjoy romantic experiences.",
    pointsToVisit: ["Shangrila Lake", "DEOSAI Plains", "Manthoka Waterfall", "Sarfaranga Cold Desert", "Basho Valley", "Khaplu Valley"],
    highlights: ["Visit Shangrila Resort", "Explore DEOSAI Plains", "Jeep safari to Basho Valley", "Visit Khaplu Palace", "Romantic stays"],
    included: ["Transport", "5 Nights Accommodation", "5 Breakfasts", "Professional Guide", "Jeeps for special locations", "Bonfire"],
    excluded: ["Lunch and Dinner", "Entry Tickets", "Personal expenses"],
    pricing: { perCouple: { standard: "PKR 165,000", deluxe: "PKR 210,000", executive: "PKR 255,000" } },
    notes: ["Hotels can be changed according to availability."]
  },
  "16": {
    id: 16,
    title: "Honeymoon Tour Package: Swat , Shogran | Kashmir (7 Days)",
    location: "Swat, Shogran & Kashmir",
    duration: "7 Days 6 Nights",
    price: "Contact for Pricing",
    image: "/swat1.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Experience three beautiful destinations in one romantic journey. Explore Swat, Shogran, and Kashmir valleys with your loved one.",
    pointsToVisit: ["Swat Valley", "Malam Jabba", "Kalam", "Shogran", "Siri Paye", "Neelum Valley", "Arang Kel", "Sharda"],
    highlights: ["Visit three valleys", "Cable car at Malam Jabba", "Siri Paye Meadows", "Hike to Arang Kel", "Romantic stays"],
    included: ["Transport", "6 Nights Accommodation", "6 Breakfasts", "Professional Guide", "Jeeps", "Bonfire"],
    excluded: ["Lunch and Dinner", "Entry Tickets", "Personal expenses"],
    pricing: { perCouple: { standard: "PKR 185,000", deluxe: "PKR 235,000", executive: "PKR 285,000" } },
    notes: ["Hotels can be changed according to availability."]
  },
  "17": {
    id: 17,
    title: "Honeymoon Package for Swat Valley & Shogran Valley (05 Days)",
    location: "Swat & Shogran",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/sw5.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Discover the beauty of Swat and Shogran valleys on this romantic 5-day honeymoon tour. Perfect for couples seeking adventure and relaxation.",
    pointsToVisit: ["Swat Valley", "Malam Jabba", "Kalam", "Mahodand Lake", "Shogran", "Siri Paye Meadows"],
    highlights: ["Visit Malam Jabba", "Explore Kalam Valley", "Jeep ride to Mahodand Lake", "Siri Paye Meadows", "Romantic stays"],
    included: ["Transport", "4 Nights Accommodation", "4 Breakfasts", "Professional Guide", "Jeeps", "Bonfire"],
    excluded: ["Lunch and Dinner", "Entry Tickets", "Personal expenses"],
    pricing: { perCouple: { standard: "PKR 135,000", deluxe: "PKR 175,000", executive: "PKR 215,000" } },
    notes: ["Hotels can be changed according to availability."]
  },
  "18": {
    id: 18,
    title: "5 Days Honeymoon Package for HUNZA Valley",
    location: "HUNZA Valley",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/hh6.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Spend 5 romantic days in the beautiful HUNZA Valley. Visit iconic locations and create unforgettable memories with your partner.",
    pointsToVisit: ["HUNZA Valley", "Attabad Lake", "Baltit Fort", "Altit Fort", "Passu Cones", "Khunjerab Pass", "NALTAR Valley"],
    highlights: ["Visit Attabad Lake", "Explore historic forts", "Drive to Khunjerab Pass", "Visit NALTAR Valley", "Romantic stays"],
    included: ["Transport", "4 Nights Accommodation", "4 Breakfasts", "Professional Guide", "Jeeps for NALTAR", "Bonfire"],
    excluded: ["Lunch and Dinner", "Entry Tickets", "Personal expenses"],
    pricing: { perCouple: { standard: "PKR 145,000", deluxe: "PKR 185,000", executive: "PKR 225,000" } },
    notes: ["Hotels can be changed according to availability."]
  },
  "19": {
    id: 19,
    title: "8 Days Honeymoon Package for HUNZA Valley and SKARDU Valley",
    location: "HUNZA & SKARDU",
    duration: "8 Days 7 nights",
    price: "Contact for Pricing",
    image: "/h8.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "An extensive honeymoon tour covering both HUNZA and SKARDU valleys. Experience the best of northern Pakistan with your loved one.",
    pointsToVisit: ["HUNZA Valley", "Attabad Lake", "Khunjerab Pass", "SKARDU", "Shangrila Lake", "DEOSAI Plains", "Basho Valley"],
    highlights: ["Explore two major valleys", "Visit Khunjerab Pass", "Explore DEOSAI Plains", "Visit Shangrila Resort", "Romantic stays"],
    included: ["Transport", "7 Nights Accommodation", "7 Breakfasts", "Professional Guide", "Jeeps", "Bonfire"],
    excluded: ["Lunch and Dinner", "Entry Tickets", "Personal expenses"],
    pricing: { perCouple: { standard: "PKR 225,000", deluxe: "PKR 285,000", executive: "PKR 345,000" } },
    notes: ["Hotels can be changed according to availability."]
  },
  "20": {
    id: 20,
    title: "Arang Kel, Taobat, Ratti Gali Tour – 05 Days",
    location: "Kashmir",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/neelum.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "Explore the hidden gems of Kashmir including Arang Kel, Taobat, and Ratti Gali Lake. A perfect romantic adventure for nature-loving couples.",
    pointsToVisit: ["Neelum Valley", "Sharda", "Kel", "Arang Kel", "Taobat", "Ratti Gali Lake", "Keran"],
    highlights: ["Hike to Arang Kel", "Visit Taobat", "Jeep safari to Ratti Gali Lake", "Explore Neelum Valley", "Romantic stays"],
    included: ["Transport", "4 Nights Accommodation", "4 Breakfasts", "Professional Guide", "Jeeps for Ratti Gali", "Bonfire"],
    excluded: ["Lunch and Dinner", "Entry Tickets", "Cable car charges", "Personal expenses"],
    pricing: { perCouple: { standard: "PKR 155,000", deluxe: "PKR 195,000", executive: "PKR 235,000" } },
    notes: ["Jeep charges for Ratti Gali approximately PKR 5,000/head.", "Hotels can be changed according to availability."]
  },
  "21": {
    id: 21,
    title: "Couple Tour To Kashmir From Islamabad – 05 Days",
    location: "Kashmir",
    duration: "5 Days 4 Nights",
    price: "Contact for Pricing",
    image: "/neelum.jpg",
    groupSize: "2 people",
    tourType: "Honeymoon Package",
    description: "A romantic 5-day tour to Kashmir from Islamabad. Experience the beauty of Neelum Valley and create cherished memories with your partner.",
    pointsToVisit: ["Neelum Valley", "Sharda", "Kel", "Arang Kel", "Dhani Waterfall", "Kutton Waterfall", "Keran"],
    highlights: ["Explore Neelum Valley", "Hike to Arang Kel", "Visit beautiful waterfalls", "LOC viewpoint at Keran", "Romantic stays"],
    included: ["Transport", "4 Nights Accommodation", "4 Breakfasts", "Professional Guide", "Bonfire"],
    excluded: ["Lunch and Dinner", "Entry Tickets", "Cable car charges", "Personal expenses"],
    pricing: { perCouple: { standard: "PKR 135,000", deluxe: "PKR 175,000", executive: "PKR 215,000" } },
    notes: ["Cable car charges for Arang Kel approximately PKR 1,500/person.", "Hotels can be changed according to availability."]
  }
};

export default function HoneymoonTourDetail() {
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
    const whatsappMessage = `*Honeymoon Tour Inquiry - ${pkg.title}*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/923153309070?text=${whatsappMessage}`, '_blank');
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppInquiry = () => {
    const message = `*Inquiry for: ${pkg.title}*%0A%0AHello, I'm interested in this honeymoon package. Please provide more details and pricing.`;
    window.open(`https://wa.me/923153309070?text=${message}`, '_blank');
  };

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-emerald-600 mb-4">Tour Not Found</h1>
          <Link href="/private-tours/honeymoon" className="text-emerald-600 hover:underline">
            Back to Honeymoon Tours
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
            <span className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-bold">
              <Heart className="w-4 h-4" />
              Honeymoon Package
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {pkg.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span className="text-lg">{pkg.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span className="text-lg">{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-600" />
              <span className="text-lg">For Couples</span>
            </div>
          </div>
          
          {/* Why Choose Us Box */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-5 shadow-xl text-white mt-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">Why Choose Us?</h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">7+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">22,000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">100% Visa Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">24/7 Support</span>
                </div>
              </div>

              <div className="hidden lg:block text-xs text-white/90 max-w-xs">
                Expert team handling every aspect of your journey.
              </div>
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
            <section className="bg-white rounded-xl p-8 border border-emerald-200 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-700 mb-4">About This Package</h2>
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

            {/* Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <section className="bg-emerald-50 rounded-xl p-8 border border-emerald-200">
                <h2 className="text-3xl font-bold text-emerald-800 mb-6">Package Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Points to Visit */}
            {pkg.pointsToVisit && pkg.pointsToVisit.length > 0 && (
              <section className="bg-white rounded-xl p-8 border border-emerald-200 shadow-lg">
                <h2 className="text-3xl font-bold text-emerald-700 mb-6">Places to Visit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pkg.pointsToVisit.map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section className="bg-white rounded-xl p-4 md:p-8 border border-emerald-200 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-6 section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>Itinerary</h2>
                <div className="space-y-6">
                  {pkg.itinerary.map((item: any, index: number) => (
                    <div key={index} className="border-l-4 border-emerald-600 pl-4 md:pl-6 pb-6 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                        <span className="bg-emerald-600 text-white px-3 py-2 rounded-lg flex flex-col items-center justify-center font-bold shrink-0 w-fit">
                          <span className="text-[9px] uppercase tracking-wider">DAY</span>
                          <span className="text-xl leading-none">{item.day.replace('Day ', '').replace('day ', '').replace('DAY ', '')}</span>
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-emerald-700 card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base font-body" style={{ fontFamily: "'Inter', sans-serif" }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Included & Excluded */}
            {(pkg.included || pkg.excluded) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pkg.included && (
                  <section className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                      <Heart className="w-6 h-6" />
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {pkg.included.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {pkg.excluded && (
                  <section className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                      <span className="text-2xl">✗</span>
                      What's Excluded
                    </h3>
                    <ul className="space-y-2">
                      {pkg.excluded.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-600 mt-1">✗</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}

            {/* Hotel List */}
            {pkg.hotelList && pkg.hotelList.length > 0 && (
              <section className="bg-emerald-50 rounded-xl p-8 border border-emerald-200">
                <h2 className="text-3xl font-bold text-emerald-800 mb-6">Accommodation Options</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-emerald-300">
                        <th className="text-left py-3 px-4 text-emerald-800 font-bold">Location</th>
                        <th className="text-left py-3 px-4 text-emerald-800 font-bold">Standard</th>
                        <th className="text-left py-3 px-4 text-emerald-800 font-bold">Deluxe</th>
                        <th className="text-left py-3 px-4 text-emerald-800 font-bold">Executive</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.hotelList.map((hotel: any, index: number) => (
                        <tr key={index} className="border-b border-emerald-200">
                          <td className="py-3 px-4 font-semibold text-gray-800">{hotel.location}</td>
                          <td className="py-3 px-4 text-gray-700">{hotel.standard}</td>
                          <td className="py-3 px-4 text-gray-700">{hotel.deluxe}</td>
                          <td className="py-3 px-4 text-gray-700">{hotel.executive}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Pricing */}
            {pkg.pricing && (
              <section className="bg-white rounded-xl p-8 border border-emerald-200 shadow-lg">
                <h2 className="text-3xl font-bold text-emerald-700 mb-6">Pricing Details</h2>
                
                {pkg.pricing.fromIslamabad && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-emerald-700 mb-4">From Islamabad</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pkg.pricing.fromIslamabad.standard_per_couple && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Standard</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.fromIslamabad.standard_per_couple}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                      {pkg.pricing.fromIslamabad.deluxe_per_couple && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Deluxe</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.fromIslamabad.deluxe_per_couple}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                      {pkg.pricing.fromIslamabad.executive_per_couple && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Executive</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.fromIslamabad.executive_per_couple}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {pkg.pricing.fromLahore && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-emerald-700 mb-4">From Lahore</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pkg.pricing.fromLahore.standard_per_couple && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Standard</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.fromLahore.standard_per_couple}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                      {pkg.pricing.fromLahore.deluxe_per_couple && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Deluxe</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.fromLahore.deluxe_per_couple}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                      {pkg.pricing.fromLahore.executive_per_couple && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Executive</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.fromLahore.executive_per_couple}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {pkg.pricing.perCouple && (
                  <div>
                    <h3 className="text-xl font-bold text-emerald-700 mb-4">Package Pricing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pkg.pricing.perCouple.standard && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Standard</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.perCouple.standard}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                      {pkg.pricing.perCouple.deluxe && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Deluxe</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.perCouple.deluxe}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                      {pkg.pricing.perCouple.executive && (
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                          <div className="text-sm text-gray-600 mb-1">Executive</div>
                          <div className="text-2xl font-bold text-emerald-700">{pkg.pricing.perCouple.executive}</div>
                          <div className="text-xs text-gray-500 mt-1">Per Couple</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Notes */}
            {pkg.notes && pkg.notes.length > 0 && (
              <section className="bg-gray-100 rounded-xl p-8 border border-gray-300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Notes</h2>
                <ul className="space-y-3">
                  {pkg.notes.map((note: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gray-800 font-bold mt-1">•</span>
                      <span className="text-gray-700">{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

           <ImportantInstructionsSection />
<CancellationPolicySection />
           <TourContactSection/>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-emerald-200 overflow-hidden">
             
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-700 mb-4">Request Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Your Message or Special Requirements"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg"
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
