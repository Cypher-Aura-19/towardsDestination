"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Calendar, Users, Check, X, Plane, MessageCircle, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import image from "next/image";
import { title } from "process";


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
    image: "/hunza1.jpg",
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
  },
  "3": {
    id: 3,
    title: "Fairy Meadows Expedition (By Air)",
    location: "Nanga Parbat Base",
    duration: "4 Days / 3 Nights",
    price: 55000,
    image: "/mountain trekking.jpg",
    groupSize: "15-20 person",
    tourType: "By Air",
    description: "Experience the magical Fairy Meadows with @towardsdestination.pk. Trek to the base of Nanga Parbat, the Killer Mountain, and witness breathtaking views with comfortable air travel.",
    pointsToVisit: [
      "Gilgit Airport",
      "Raikot Bridge",
      "Tattu Village",
      "Fairy Meadows",
      "Nanga Parbat Base Camp",
      "Beyal Camp",
      "German Viewpoint"
    ],
    highlights: [
      "Flight to Gilgit",
      "Jeep ride to Fairy Meadows",
      "Nanga Parbat base camp trek",
      "Mountain huts accommodation",
      "Stunning valley views",
      "Photography opportunities",
      "Professional trekking guide"
    ],
    included: [
      "Round-trip flight tickets (Islamabad-Gilgit-Islamabad)",
      "Airport transfers",
      "Jeep from Raikot to Tattu Village",
      "Mountain hut accommodation (3 nights)",
      "All meals (3 Breakfasts, 3 Dinners)",
      "Professional trekking guide",
      "Porter services",
      "Basic first aid"
    ],
    excluded: [
      "Personal expenses",
      "Lunch meals",
      "Tips for guide and porter",
      "Travel insurance",
      "Personal trekking gear"
    ],
    hotelList: [
      { location: "Fairy Meadows", standard: "Mountain Huts / Alpine Cottages / Meadow Lodge", deluxe: "Premium Cottages / Luxury Huts", premium: "Not Available", executive: "Not Available" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Every Saturday Morning", departure2: "Every Wednesday Morning" }
    ],
    pricing: {
      perPerson: { standard: "55,000", deluxe: "70,000", premium: "Not Available", executive: "Not Available" }
    },
    exceptions: [
      "Kids age 5-12: 50% charges",
      "Kids age <= 4: Not recommended for safety reasons"
    ],
    notes: [
      "Flight schedules are subject to weather conditions",
      "Moderate fitness level required for trekking",
      "All hotels are subject to availability and may be changed due to unforeseen circumstances",
      "Warm clothing and trekking shoes mandatory"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Gilgit (By Air) - Raikot",
        description: "Morning flight from Islamabad to Gilgit. Drive to Raikot Bridge (3 hours). Check-in at hotel. Evening briefing about trek. Dinner and overnight at Raikot."
      },
      {
        day: "Day 02",
        title: "Raikot - Tattu - Fairy Meadows",
        description: "After breakfast, jeep ride to Tattu Village (1 hour). Start trek to Fairy Meadows (3-4 hours). Arrival at Fairy Meadows. Check-in at mountain huts. Explore surroundings. Dinner and overnight."
      },
      {
        day: "Day 03",
        title: "Fairy Meadows - Nanga Parbat Base Camp",
        description: "Early breakfast. Trek to Nanga Parbat Base Camp (4-5 hours). Spectacular views of Nanga Parbat. Photography time. Trek back to Fairy Meadows. Dinner and overnight."
      },
      {
        day: "Day 04",
        title: "Fairy Meadows - Gilgit - Islamabad (By Air)",
        description: "After breakfast, trek down to Tattu Village. Jeep ride to Raikot. Drive to Gilgit Airport. Flight to Islamabad. End of memorable expedition."
      }
    ],
    contact: {
      email: "Info.Towardsdestination@gmail.com",
      whatsapp: "+92315 3309070",
      instagram: "@towardsdestination.pk"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-15 adults"
  },
  "4": {
    id: 4,
    title: "Chitral & Kalash Valley (By Air)",
    location: "Khyber Pakhtunkhwa",
    duration: "5 Days / 4 Nights",
    price: 68000,
    image: "/cultural tours.jpg",
    groupSize: "15-20 person",
    tourType: "By Air",
    description: "Discover the unique Kalash culture with @towardsdestination.pk. Experience the ancient traditions, colorful festivals, and stunning landscapes of Chitral Valley with comfortable air travel.",
    pointsToVisit: [
      "Chitral Airport",
      "Chitral Fort",
      "Chitral Museum",
      "Bumburet Valley",
      "Rumbur Valley",
      "Birir Valley",
      "Kalash Villages",
      "Shahi Mosque"
    ],
    highlights: [
      "Flight to Chitral",
      "Kalash Valley cultural tour",
      "Traditional villages visit",
      "Local festivals (seasonal)",
      "Chitral Fort exploration",
      "Cultural immersion experience",
      "Traditional dance performances"
    ],
    included: [
      "Round-trip flight tickets (Islamabad-Chitral-Islamabad)",
      "Airport transfers",
      "Hotel accommodation (4 nights)",
      "All meals (4 Breakfasts, 4 Dinners)",
      "Professional cultural guide",
      "Transportation to Kalash valleys",
      "Entry permits",
      "Cultural activities"
    ],
    excluded: [
      "Personal expenses",
      "Lunch meals",
      "Tips for guide and driver",
      "Travel insurance",
      "Photography fees in villages"
    ],
    hotelList: [
      { location: "Chitral", standard: "Chitral Inn / Mountain View Hotel / Valley Lodge", deluxe: "Hindukush Heights / Premium Hotel", premium: "Chitral Resort / Luxury Lodge", executive: "Executive Suites / Premium Resort" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Every Thursday Morning", departure2: "Every Monday Morning" }
    ],
    pricing: {
      perPerson: { standard: "68,000", deluxe: "85,000", premium: "105,000", executive: "125,000" }
    },
    exceptions: [
      "Kids age 5-12: 50% charges",
      "Kids age <= 4: 25% charges"
    ],
    notes: [
      "Flight schedules are subject to weather conditions",
      "Respect local customs and traditions",
      "All hotels are subject to availability and may be changed due to unforeseen circumstances",
      "Festival dates vary - contact for specific dates"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Chitral (By Air)",
        description: "Morning flight from Islamabad to Chitral. Spectacular mountain views during flight. Arrival at Chitral. Check-in at hotel. Visit Chitral Fort and Museum. Evening free. Dinner and overnight."
      },
      {
        day: "Day 02",
        title: "Chitral - Bumburet Valley",
        description: "After breakfast, drive to Bumburet Valley (2 hours). Visit Kalash villages. Interact with locals. Learn about unique culture and traditions. Visit local museum. Return to Chitral. Dinner and overnight."
      },
      {
        day: "Day 03",
        title: "Rumbur & Birir Valleys",
        description: "Breakfast at hotel. Full day excursion to Rumbur and Birir valleys. Visit traditional Kalash houses. Witness daily life. Photography opportunities. Cultural performances (if available). Return to Chitral. Dinner and overnight."
      },
      {
        day: "Day 04",
        title: "Chitral Local Sightseeing",
        description: "After breakfast, visit Shahi Mosque. Explore Chitral bazaar. Visit local handicraft centers. Free time for shopping. Farewell dinner with cultural show. Overnight at Chitral."
      },
      {
        day: "Day 05",
        title: "Chitral - Islamabad (By Air)",
        description: "Early breakfast. Transfer to Chitral Airport. Flight to Islamabad. End of cultural journey with beautiful memories."
      }
    ],
    contact: {
      email: "Info.Towardsdestination@gmail.com",
      whatsapp: "+92315 3309070",
      instagram: "@towardsdestination.pk"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-15 adults"
  },
  "5": {
    id: 5,
    title: "Swat Valley Paradise (By Air)",
    location: "Swat, Khyber Pakhtunkhwa",
    duration: "4 Days / 3 Nights",
    price: 50000,
    image: "/naran.jpg",
    groupSize: "15-20 person",
    tourType: "By Air",
    description: "Explore the Switzerland of Pakistan with @towardsdestination.pk. Experience the lush green valleys, ancient Buddhist sites, and scenic beauty of Swat with comfortable air travel.",
    pointsToVisit: [
      "Islamabad Airport",
      "Mingora City",
      "Malam Jabba",
      "Fizaghat",
      "Kalam Valley",
      "Mahodand Lake",
      "Buddhist Stupas",
      "White Palace"
    ],
    highlights: [
      "Flight to Islamabad + road transfer",
      "Malam Jabba ski resort",
      "Mingora city tour",
      "Buddhist archaeological sites",
      "Mahodand Lake excursion",
      "Luxury hotel stay",
      "Scenic valley views"
    ],
    included: [
      "Round-trip flight tickets (Islamabad)",
      "Airport transfers",
      "Transportation to Swat",
      "Hotel accommodation (3 nights)",
      "All meals (3 Breakfasts, 3 Dinners)",
      "Professional tour guide",
      "Entry tickets to sites",
      "Jeep for Mahodand Lake"
    ],
    excluded: [
      "Personal expenses",
      "Lunch meals",
      "Tips for guide and driver",
      "Travel insurance",
      "Ski equipment rental"
    ],
    hotelList: [
      { location: "Swat", standard: "Swat Serena / Valley Inn / Mountain Lodge", deluxe: "Malam Jabba Resort / Premium Hotel", premium: "Luxury Resort / Executive Suites", executive: "Five Star Hotel / Premium Resort" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Every Friday Morning", departure2: "Every Tuesday Morning" }
    ],
    pricing: {
      perPerson: { standard: "50,000", deluxe: "65,000", premium: "85,000", executive: "105,000" }
    },
    exceptions: [
      "Kids age 5-12: 50% charges",
      "Kids age <= 4: 25% charges"
    ],
    notes: [
      "Road transfer from Islamabad to Swat (4-5 hours)",
      "Ski season: December to March",
      "All hotels are subject to availability and may be changed due to unforeseen circumstances",
      "Buddhist sites require special permits"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Swat Valley",
        description: "Pick up from Islamabad. Drive to Swat Valley via Malakand Pass. Stop at scenic points. Arrival at Mingora. Check-in at hotel. Evening visit to Mingora bazaar. Dinner and overnight."
      },
      {
        day: "Day 02",
        title: "Malam Jabba & Buddhist Sites",
        description: "After breakfast, drive to Malam Jabba. Enjoy ski resort activities. Visit chairlift. Lunch at resort. Visit Buddhist stupas and archaeological sites. Return to hotel. Dinner and overnight."
      },
      {
        day: "Day 03",
        title: "Kalam & Mahodand Lake",
        description: "Early breakfast. Drive to Kalam Valley. Transfer to jeep for Mahodand Lake. Enjoy the pristine lake. Photography time. Visit Ushu Forest. Return to hotel. Dinner and overnight."
      },
      {
        day: "Day 04",
        title: "Swat - Islamabad",
        description: "Breakfast at hotel. Visit White Palace. Last-minute shopping. Drive back to Islamabad. Drop at airport/hotel. End of tour."
      }
    ],
    contact: {
      email: "Info.Towardsdestination@gmail.com",
      whatsapp: "+92315 3309070",
      instagram: "@towardsdestination.pk"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-15 adults"
  }
  ,
  "6": {
    id: 6,
    title: "Naran Kaghan Express (By Air)",
    location: "Khyber Pakhtunkhwa",
    duration: "3 Days / 2 Nights",
    price: 45000,
    image: "/photography.jpg",
    groupSize: "15-20 person",
    tourType: "By Air",
    description: "Experience the beauty of Naran and Kaghan valleys with @towardsdestination.pk. Quick getaway to pristine lakes and mountain scenery with comfortable air travel.",
    pointsToVisit: [
      "Islamabad Airport",
      "Balakot",
      "Naran Valley",
      "Lake Saif-ul-Malook",
      "Babusar Top",
      "Lulusar Lake",
      "Kunhar River",
      "Kaghan Valley"
    ],
    highlights: [
      "Flight to Islamabad",
      "Lake Saif-ul-Malook visit",
      "Babusar Top excursion",
      "Lulusar Lake stop",
      "Comfortable hotel stay",
      "Scenic photography spots",
      "Kunhar River views"
    ],
    included: [
      "Round-trip flight tickets",
      "Airport transfers",
      "Transportation to Naran",
      "Hotel accommodation (2 nights)",
      "All meals (2 Breakfasts, 2 Dinners)",
      "Professional tour guide",
      "Jeep for Lake Saif-ul-Malook",
      "Entry tickets"
    ],
    excluded: [
      "Personal expenses",
      "Lunch meals",
      "Tips for guide and driver",
      "Travel insurance",
      "Horse riding at lake"
    ],
    hotelList: [
      { location: "Naran", standard: "Gateway Hotel / Alpine Inn / Valley View", deluxe: "Naran International / Mountain Resort", premium: "Hotel Homes / Luxury Lodge", executive: "Executive Suites / Premium Resort" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Every Friday Morning", departure2: "Every Monday Morning" }
    ],
    pricing: {
      perPerson: { standard: "45,000", deluxe: "58,000", premium: "75,000", executive: "92,000" }
    },
    exceptions: [
      "Kids age 5-12: 50% charges",
      "Kids age <= 4: 25% charges"
    ],
    notes: [
      "Babusar Top accessible May to October only",
      "Lake Saif-ul-Malook jeep charges included",
      "All hotels are subject to availability and may be changed due to unforeseen circumstances",
      "Warm clothing recommended"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Naran Valley",
        description: "Pick up from Islamabad. Drive to Naran Valley via Mansehra and Balakot. Stop at scenic points. Arrival at Naran. Check-in at hotel. Evening walk along Kunhar River. Dinner and overnight."
      },
      {
        day: "Day 02",
        title: "Lake Saif-ul-Malook & Babusar Top",
        description: "Early morning jeep ride to Lake Saif-ul-Malook. Enjoy the pristine lake. Photography time. Return to Naran. After lunch, drive to Babusar Top (if accessible). Visit Lulusar Lake. Return to hotel. Dinner and overnight."
      },
      {
        day: "Day 03",
        title: "Naran - Islamabad",
        description: "Breakfast at hotel. Last-minute shopping at Naran bazaar. Drive back to Islamabad. Stop at Balakot for lunch (own expense). Drop at airport/hotel. End of tour."
      }
    ],
    contact: {
      email: "Info.Towardsdestination@gmail.com",
      whatsapp: "+92315 3309070",
      instagram: "@towardsdestination.pk"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-15 adults"
  },
  "7": {
    id: 7,
    title: "K2 Base Camp Trek (By Air)",
    location: "Skardu to K2",
    duration: "12 Days / 11 Nights",
    price: 180000,
    image: "/mountain trekking.jpg",
    groupSize: "10-15 person",
    tourType: "By Air",
    description: "Embark on the ultimate adventure with @towardsdestination.pk. Trek to K2 Base Camp, witness the world's second-highest peak, and experience the majestic Karakoram Range.",
    pointsToVisit: [
      "Skardu Airport",
      "Askole Village",
      "Jhola Camp",
      "Paiju Camp",
      "Urdukas",
      "Goro II",
      "Concordia",
      "K2 Base Camp",
      "Broad Peak Base Camp"
    ],
    highlights: [
      "Flight to Skardu",
      "Professional trekking guide",
      "Porter & camping equipment",
      "Concordia viewpoint",
      "K2 base camp visit",
      "All meals & permits included",
      "Experienced support team"
    ],
    included: [
      "Round-trip flight tickets (Islamabad-Skardu-Islamabad)",
      "Airport transfers",
      "Professional trekking guide and assistant",
      "Porter services",
      "All camping equipment",
      "All meals during trek",
      "Permits and entry fees",
      "Emergency evacuation insurance",
      "Satellite phone",
      "First aid and medical kit"
    ],
    excluded: [
      "Personal trekking gear",
      "Personal expenses",
      "Tips for guide and porters",
      "International travel insurance",
      "Helicopter rescue (if needed)"
    ],
    hotelList: [
      { location: "Skardu", standard: "Trout Villa / Skardu Inn / Valley View", deluxe: "Shangrila Resort / Mountain Hotel", premium: "Not Available", executive: "Not Available" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "June to August (Specific dates)", departure2: "Contact for schedule" }
    ],
    pricing: {
      perPerson: { standard: "180,000", deluxe: "220,000", premium: "Not Available", executive: "Not Available" }
    },
    exceptions: [
      "Minimum age: 18 years",
      "Medical fitness certificate required",
      "Previous trekking experience recommended"
    ],
    notes: [
      "Trek season: June to August only",
      "High altitude trek - acclimatization required",
      "All hotels are subject to availability and may be changed due to unforeseen circumstances",
      "Weather dependent - itinerary may change",
      "Physical fitness mandatory"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Skardu (By Air)",
        description: "Morning flight to Skardu. Spectacular mountain views. Arrival and check-in. Rest and acclimatization. Briefing about trek. Dinner and overnight."
      },
      {
        day: "Day 02",
        title: "Skardu - Askole",
        description: "Drive to Askole village (6-7 hours). Last village with facilities. Meet porters. Final preparations. Overnight at Askole."
      },
      {
        day: "Day 03",
        title: "Askole - Jhola Camp",
        description: "Start trek to Jhola. Cross Braldu River. Trek through rocky terrain (6-7 hours). Camp at Jhola. Dinner and overnight."
      },
      {
        day: "Day 04",
        title: "Jhola - Paiju Camp",
        description: "Trek to Paiju (5-6 hours). Cross Korofon River. Reach Paiju - last vegetation point. Rest day tomorrow. Camp and overnight."
      },
      {
        day: "Day 05",
        title: "Paiju - Rest & Acclimatization",
        description: "Rest day at Paiju for acclimatization. Short hikes around camp. Prepare for glacier crossing. Overnight at Paiju."
      },
      {
        day: "Day 06",
        title: "Paiju - Urdukas",
        description: "Cross Baltoro Glacier. Trek to Urdukas (6-7 hours). Spectacular views of Trango Towers. Camp at Urdukas. Overnight."
      },
      {
        day: "Day 07",
        title: "Urdukas - Goro II",
        description: "Continue on Baltoro Glacier. Trek to Goro II (6-7 hours). Views of Cathedral Peak. Camp and overnight."
      },
      {
        day: "Day 08",
        title: "Goro II - Concordia",
        description: "Trek to Concordia (4-5 hours). Junction of Baltoro and Godwin-Austen glaciers. 360-degree mountain views. Camp at Concordia. Overnight."
      },
      {
        day: "Day 09",
        title: "Concordia - K2 Base Camp - Concordia",
        description: "Early start to K2 Base Camp (3-4 hours). Reach base of world's second-highest peak. Photography time. Return to Concordia. Overnight."
      },
      {
        day: "Day 10-11",
        title: "Return Trek to Askole",
        description: "Trek back to Askole via same route. Two days of descent. Overnight camps at Urdukas and Jhola. Reach Askole on Day 11."
      },
      {
        day: "Day 12",
        title: "Askole - Skardu - Islamabad",
        description: "Drive to Skardu. Flight to Islamabad. End of epic adventure with lifetime memories."
      }
    ],
    contact: {
      email: "Info.Towardsdestination@gmail.com",
      whatsapp: "+92315 3309070",
      instagram: "@towardsdestination.pk"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-10 adults"
  },
  "8": {
    id: 8,
    title: "Astore Valley Explorer (By Air)",
    location: "Gilgit-Baltistan",
    duration: "4 Days / 3 Nights",
    price: 58000,
    image: "/astore.jpg",
    groupSize: "15-20 person",
    tourType: "By Air",
    description: "Discover the hidden gem of Astore Valley with @towardsdestination.pk. Experience pristine Rama Lake, majestic Nanga Parbat views, and untouched natural beauty.",
    pointsToVisit: [
      "Gilgit Airport",
      "Astore Valley",
      "Rama Lake",
      "Rama Meadows",
      "Astore Fort",
      "Rupal Valley",
      "Nanga Parbat South Face",
      "Minimarg"
    ],
    highlights: [
      "Flight to Gilgit",
      "Rama Lake trek",
      "Astore Fort visit",
      "Rupal Valley tour",
      "Nanga Parbat south face view",
      "Local guesthouse experience",
      "Pristine natural beauty"
    ],
    included: [
      "Round-trip flight tickets (Islamabad-Gilgit-Islamabad)",
      "Airport transfers",
      "Transportation to Astore",
      "Hotel/Guesthouse accommodation (3 nights)",
      "All meals (3 Breakfasts, 3 Dinners)",
      "Professional tour guide",
      "Jeep for Rama Lake",
      "Entry permits"
    ],
    excluded: [
      "Personal expenses",
      "Lunch meals",
      "Tips for guide and driver",
      "Travel insurance",
      "Horse riding at Rama"
    ],
    hotelList: [
      { location: "Astore", standard: "Astore Inn / Valley Lodge / Mountain View", deluxe: "Rama Meadows Resort / Premium Hotel", premium: "Luxury Cottages / Executive Lodge", executive: "Not Available" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Every Saturday Morning", departure2: "Every Wednesday Morning" }
    ],
    pricing: {
      perPerson: { standard: "58,000", deluxe: "75,000", premium: "95,000", executive: "Not Available" }
    },
    exceptions: [
      "Kids age 5-12: 50% charges",
      "Kids age <= 4: 25% charges"
    ],
    notes: [
      "Flight schedules are subject to weather conditions",
      "Rama Lake accessible June to September",
      "All hotels are subject to availability and may be changed due to unforeseen circumstances",
      "Moderate trekking required for Rama Lake"
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Islamabad - Gilgit (By Air) - Astore",
        description: "Morning flight from Islamabad to Gilgit. Drive to Astore Valley (2-3 hours). Check-in at hotel. Visit Astore Fort. Evening walk in valley. Dinner and overnight."
      },
      {
        day: "Day 02",
        title: "Astore - Rama Lake - Rama Meadows",
        description: "After breakfast, drive to Rama Meadows. Trek to Rama Lake (2-3 hours). Enjoy the pristine alpine lake. Photography time. Return to Rama Meadows. Overnight at Rama."
      },
      {
        day: "Day 03",
        title: "Rupal Valley & Nanga Parbat View",
        description: "Early breakfast. Drive to Rupal Valley. Spectacular views of Nanga Parbat south face (Rupal Face - highest mountain face). Visit local villages. Return to Astore. Dinner and overnight."
      },
      {
        day: "Day 04",
        title: "Astore - Gilgit - Islamabad (By Air)",
        description: "Breakfast at hotel. Drive to Gilgit. Last-minute shopping. Transfer to airport. Flight to Islamabad. End of peaceful valley tour."
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
    tripFrom: "Islamabad",
    sharingType: "",
    packageType: "",
    adults: 1,
    children: 0,
    infants: 0
  });

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

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
                  <div className="space-y-5">
                    {/* Date */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => handleBookingChange('date', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 bg-white"
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

                    {/* Package Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Package Type:</label>
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
                        <div className="text-sm text-gray-500">Age 13+</div>
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
                        <div className="text-sm text-gray-500">Age 6-12</div>
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

                    {/* Infants */}
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

// Note: Packages 6, 7, and 8 can be added following the same structure above
// Package 6: Naran Kaghan Express
// Package 7: K2 Base Camp Trek  
// Package 8: Astore Valley Explorer
