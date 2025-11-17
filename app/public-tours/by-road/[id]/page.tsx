"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TourContactSection from "@/app/components/TourContactSection";
import { MapPin, Calendar, Users, Check, X, Phone, Mail, ChevronLeft, ChevronRight, Minus, Plus, MessageCircle, Send, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Helper function to make important words bold
const formatTextWithBold = (text: string) => {
  const importantWords = [
    // Locations
    'Kumrat', 'Kala Chashma', 'Dojanga', 'Hunza', 'Skardu', 'Naltar', 'Neelum', 'Arang Kel', 'Ratti Gali',
    'Naran', 'Shogran', 'Swat', 'Kalam', 'Malam Jabba', 'Fairy Meadows', 'Beyal Camp', 'Deosai',
    'Astore', 'Minimarg', 'Rama', 'Attabad', 'Passu', 'Khunjerab', 'Chitral', 'Kalash', 'Shandur',
    'Gilgit', 'Baltistan', 'Kashmir', 'Taobat', 'Sharda', 'Kel', 'Keran', 'Basho', 'Shigar',
    'Khyber Pakhtunkhwa', 'KPK', 'AJK', 'Azad Kashmir', 'Baltit Fort', 'Altit Fort',
    // Activities
    'trekking', 'hiking', 'camping', 'rafting', 'bonfire', 'jeep', 'Jeep', 'sightseeing',
    'Musical Night', 'Cycling Tours', 'Cultural Tours', 'Adventure', 'adventure',
    // Important terms
    '@towardsdestination.pk', 'Book', 'Experience', 'Beauty', 'Mesmerizing', 'mesmerizing',
    'Best', 'best', 'North Pakistan', 'Pakistan Tour', 'Valley', 'Lake', 'Meadows',
    'Waterfall', 'waterfalls', 'Border', 'Mountains', 'Scenic', 'scenic',
    // Tour specifics
    'Breakfast', 'Dinner', 'Accommodation', 'Transportation', 'Guide', 'Professional',
    'Departure', 'Arrival', 'Visit', 'Explore', 'Free time', 'Overnight',
    'Standard Package', 'Deluxe', 'Premium', 'Executive'
  ];

  let formattedText = text;
  
  importantWords.forEach(word => {
    // Create a regex that matches the word with word boundaries, case-insensitive
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
    title: "KUMRAT, KALA CHASHMA & DOJANGA MEADOWS (3 Days) Tour",
    location: "Kumrat Valley",
    duration: "3 days 2 nights",
    price: 14500,
    image: "/kumrat.jpg",
    groupSize: "20 - 25",
    tourType: "Daily Tour",
    description: "Experience the mesmerizing view of Kumrat, Kala Chashma & Dojanga Meadows with @towardsdestination.pk Pvt. Ltd. Book your Trip Now and Experience the Beauty of Kumrat Valley with @towardsdestination.pk. @towardsdestination.pk is known for planning and executing the best tours in North Pakistan, including trekking tours, Cycling Tours, Camping Tours, Cultural Tours and much more.",
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
      email: "Info.Towardsdestination@gmail.com",
      whatsapp: "+92315 3309070",
      instagram: "@towardsdestination.pk"
    },
    bulkDiscount: "Group Discount Offer: 5% discount for groups of 5-20 adults"
  },
  "2": {
    "id": 2,
    "title": "5 Days Trip to Hunza & Naltar Valley",
    "location": "Gilgit",
    "duration": "5 Days, 4 Nights",
    "price": 22000,
    "image": "/hunza1.jpg",
    "groupSize": "100 people",
    "tourType": "Specific Tour",
    "description": "EXPERIENCE THE MESMERIZING VIEW OF HUNZA AND NALTAR VALLEY WITH @towardsdestination.pk PVT. LTD. Book your Trip Now and Experience the Beauty of Hunza & Naltar Valley with @towardsdestination.pk. @towardsdestination.pk is known for planning and executing the best tours in North Pakistan, including trekking tours, Cycling Tours, Camping Tours, Cultural Tours and much more. Please visit our website to get the complete details of available Pakistan Tour Package. Our tour guides and other local support staff enable a host-guest environment in North Pakistan which others fail to deliver.",
    "pointsToVisit": [
      "Mansehra",
      "Balakot",
      "Naran",
      "Kiwai Waterfall",
      "Babusar Top",
      "Lulusar Lake",
      "Chillas",
      "Nanga Parbat Viewpoint",
      "Junction Point Of Three Mightiest Mountains",
      "Gilgit",
      "Nomal",
      "Naltar Valley",
      "Satrangi Lake",
      "Blue Water Lake",
      "Hunza Valley",
      "Hunza Shopping Center",
      "Karimabad Bazar",
      "Attabad Lake",
      "Attabad Tunnel",
      "Altit Fort",
      "Baltit Fort",
      "Rakaposhi Viewpoint",
      "Passu Cones",
      "Sost Dry Port",
      "Hussaini Suspension Bridge",
      "Khunjerab Pass"
    ],
    "highlights": [
      "Visit Hunza & Naltar Valley",
      "Explore Satrangi Lake and Blue Water Lake",
      "Visit Attabad Lake and Passu Cones",
      "Drive to Khunjerab Pass (China Border)",
      "Visit Altit & Baltit Forts",
      "Views of Nanga Parbat & Rakaposhi",
      "Scenic drive via Babusar Top (seasonal)"
    ],
    "included": [
      "𝐓𝐫𝐚𝐧𝐬𝐩𝐨𝐫𝐭",
      "𝐀𝐥𝐥 𝐑𝐨𝐚𝐝 𝐓𝐨𝐥𝐥 𝐓𝐚𝐱𝐞𝐬",
      "𝐏𝐫𝐨𝐟𝐞𝐬𝐬𝐢𝐨𝐧𝐚𝐥 𝐆𝐮𝐢𝐝𝐞",
      "𝟒 𝐃𝐢𝐧𝐧𝐞𝐫𝐬/𝟓 𝐁𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭𝐬",
      "𝐁𝐨𝐧𝐟𝐢𝐫𝐞",
      "𝐀𝐜𝐜𝐨𝐦𝐦𝐨𝐝𝐚𝐭𝐢𝐨𝐧 𝐚𝐭 𝐇𝐨𝐭𝐞𝐥𝐬 𝟒 𝐍𝐢𝐠𝐡𝐭𝐬",
      "𝐁𝐚𝐬𝐢𝐜 𝐅𝐢𝐫𝐬𝐭 𝐀𝐢𝐝"
    ],
    "excluded": [
      "𝐋𝐚𝐮𝐧𝐝𝐫𝐲, 𝐏𝐡𝐨𝐧𝐞 𝐂𝐚𝐥𝐥𝐬 & 𝐎𝐭𝐡𝐞𝐫 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐄𝐱𝐩𝐞𝐧𝐬𝐞𝐬.",
      "𝐄𝐱𝐭𝐫𝐚 𝐞𝐱𝐩𝐞𝐧𝐬𝐞 𝐝𝐮𝐞 𝐭𝐨 𝐥𝐚𝐧𝐝 𝐬𝐥𝐢𝐝𝐢𝐧𝐠, 𝐫𝐨𝐚𝐝 𝐛𝐥𝐨𝐜𝐤𝐬, 𝐛𝐚𝐝 𝐰𝐞𝐚𝐭𝐡𝐞𝐫 𝐚𝐧𝐝 𝐨𝐭𝐡𝐞𝐫 𝐩𝐨𝐥𝐢𝐭𝐢𝐜𝐚𝐥 𝐫𝐞𝐚𝐬𝐨𝐧𝐬.",
      "𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐢𝐧𝐬𝐮𝐫𝐚𝐧𝐜𝐞.",
      "𝐑𝐞𝐬𝐜𝐮𝐞, 𝐇𝐞𝐥𝐢𝐜𝐨𝐩𝐭𝐞𝐫 𝐜𝐨𝐯𝐞𝐫𝐚𝐠𝐞.",
      "𝐓𝐢𝐩𝐬 𝐟𝐨𝐫 𝐆𝐮𝐢𝐝𝐞, 𝐩𝐨𝐫𝐭𝐞𝐫 & 𝐜𝐨𝐨𝐤",
      "𝐀𝐧𝐲𝐭𝐡𝐢𝐧𝐠 𝐧𝐨𝐭 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 “𝐒𝐄𝐑𝐕𝐈𝐂𝐄𝐒 𝐈𝐍𝐂𝐋𝐔𝐃𝐄𝐒” 𝐥𝐢𝐬𝐭"
    ],
    "hotelList": [
      {
        "location": "Chilas",
        "standard": "FM Cottages",
        "deluxe": "Grace Continental",
        "premium": "Shangrilla Hotel",
        "executive": "Shangrilla Hotel"
      },
      {
        "location": "Naran",
        "standard": "Gateway/ Rose Valley",
        "deluxe": "Naran International",
        "premium": "Hotel Homes",
        "executive": "Hotel Homes"
      },
      {
        "location": "Hunza",
        "standard": "River Garden",
        "deluxe": "Northern Sapphire",
        "premium": "Roomy Dastan",
        "executive": "Ambiance Resort"
      },
      {
        "location": "Besham",
        "standard": "Ramada Besham",
        "deluxe": "Ramada Besham",
        "premium": "Besham Hilton",
        "executive": "Besham Hilton"
      }
    ],
    "departureSchedule": [
      {
        "city": "Islamabad",
        "departure1": "Every Saturday Morning",
        "departure2": "Every Wednesday Morning"
      },
      {
        "city": "Lahore",
        "departure1": "Every Friday Night",
        "departure2": "Every Tuesday night"
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "22,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "26,000",
        "deluxe": "43,500",
        "premium": "59,000",
        "executive": "67,500"
      },
      "soloSharing": {
        "standard": "33,000",
        "deluxe": "69,500",
        "premium": "93,000",
        "executive": "110,500"
      }
    },
    "exceptions": [
      "Kids age 5-8 : 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "DINNER IS NOT INCLUDED IN EXECUTIVE PACKAGE.",
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Jeep charges for Naltar Valley will be Rs. 2500/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "(DEPARTURE FROM LHR/ISB)",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 09:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 3:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST."
      },
      {
        "day": "Day 01",
        "title": "(ISB -Naran- Chilas)",
        "description": "Reach at Islamabad and pick up members from Islamaba - Departure from Islamabad at 04:30 am for Chilas - Short stays on the way - Short stay at Balakot for breakfast - Continue drive towards Chilas - Short stay Naran - Visit Lulusar Lake - Visit Babusar Top - Sightseeing of Water streams on way - Arrival at Chilas and Check in Hotel - Dinner and night stay at Chillas"
      },
      {
        "day": "Day 02",
        "title": "(NALTAR VALLEY - HUNZA VALLEY)",
        "description": "Breakfast call Departure for Hunza Valley at 9:00Am Sightseeing of Indus River Short stay at Nanga Parbat Viewpoint Short stay at where three Mightiest Mountain Ranges of the world Meet Arrival to Nomal Valley Transfer to Jeep for Naltar Valley (jeep charges not included) Departure for Naltar Valley Visit Naltar Valley Visit Satrangi Lake visit Blue Water Lake Explore the Beauty of Naltar Valley Back to Nomal Valley and Transfer to Coaster/Van"
      },
      {
        "day": "Day 03",
        "title": "(ATTABAD LAKE - PASSU CONES - KHUNJRAB BORDER)",
        "description": "Breakfast call Departure for Attabad Lake Visit Attabad Lake Leisure time for boating and Jet skii at Attabad Lake Visit Passu Cones Visit Hussaini Bridge Visit Sost Bazar Visit Khunjrab Border (if open) Visit Borith Lake (optional) visit Yak Grill cafe (Lunch Time) Experience the Camping at Attabad Lake (if camping available) Enjoy live BBQ, Camping at Attabad Lake"
      },
      {
        "day": "Day 04",
        "title": "(FORTS - GILGIT - NARAN)",
        "description": "Breakfast call Visit Altit/Baltit Fort Visit Karimbad Bazar Free time for Shopping at Attabad Lake short stay at Rakaposhi view point Departure towards Naran Cover any missing point on the way back. Back to Naran Dinner and Night stay at Naran"
      },
      {
        "day": "Day 05",
        "title": "(NARAN - ISLAMABAD - LAHORE)",
        "description": "Breakfast calls early morning. - Departure for Lahore/Islamabad - Short stops on the way - Short stop at Balakot - Continue drive towards Lahore/Islamabad - Arrival at Lahore/ Islamabad - End of Journey"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount offer: 5% discount for 5 to 20 adults"
  },
  "3": {
    "id": 3,
    "title": "Naran & Shogran Honeymoon Tour Package (3 Days)",
    "location": "Khyber Pakhtunkhwa (KPK)",
    "duration": "3 Days 2 Nights",
    "price": 105000,
    "image": "/naran1.jpg",
    "groupSize": "3 people",
    "tourType": "Daily Tour",
    "description": "Indulge in a dreamy getaway with our Naran & Shogran Honeymoon Tour Package (3 Days), designed for couples seeking romance and adventure. This short yet enchanting trip offers breathtaking views, serene landscapes, and unforgettable experiences. Whether you wish to explore lush green valleys, enjoy cozy evenings by the riverside, or capture stunning moments in nature, this tour has everything to make your honeymoon truly special.",
    "pointsToVisit": [
      "Shogran",
      "Siri paye Meadows",
      "Sightseeing of Kaghan Valley",
      "Naran",
      "Naran Bazar",
      "Saif ul Malook Lake",
      "Lulusar lake",
      "Babusar Top",
      "Batakundi",
      "Balakot",
      "Kunhar River"
    ],
    "highlights": [
      "Visit Shogran & Siri Paye Meadows",
      "Explore Naran Valley and Kunhar River",
      "Jeep ride to Saif ul Malook Lake",
      "Visit Lulusar Lake & Babusar Top (if accessible)",
      "Sightseeing in Kaghan Valley"
    ],
    "included": [
      "Transport (Toyota Corolla)",
      "Fuel, Toll Taxes, Challans",
      "Professional Driver cum Guide",
      "Jeep for Saif ul Malook Lake, Sogran Siri Paye",
      "Breakfast",
      "Bonfire (1 Night)"
    ],
    "excluded": [
      "Any kind of Activity Charges",
      "No Other Food Than Breakfast",
      "Any kind of Entry Tickets",
      "Any thing not mentioned in \"Services Included\""
    ],
    "hotelList": [
      {
        "location": "Naran",
        "standard": "Gateway Hotel",
        "deluxe": "Hotel Homes",
        "executive": "Masonite Hotel"
      }
    ],
    "departureSchedule": [],
    "departureNote": "Dates: Customizable to match your preferred schedule",
    "pricing": {
      "fromIslamabad": {
        "standard_per_couple": "105,000",
        "deluxe_per_couple": "120,000",
        "executive_per_couple": "155,000"
      },
      "fromLahore": {
        "standard_per_couple": "135,000",
        "deluxe_per_couple": "150,000",
        "executive_per_couple": "185,000"
      }
    },
    "exceptions": [],
    "notes": [
      "20% of charges will be charged extra from June to September due to Peak Season.",
      "Hotels can be change according to availability."
    ],
    "itinerary": [
      {
        "day": "Day 01",
        "title": "Departure from LHR/ISB to Shogran, Naran",
        "description": "Departure from Lahore / Islamabad Departure for Shogran Valley Arrival at Kiwai Waterfall Visit Kiwai Waterfall Transfer to Jeep for Shogran Valley and Siri Paye Meadow Back to kiwai at evening and Leave for Naran Arrival at Naran and check in hotel Dinner and Night stay at Naran Valley"
      },
      {
        "day": "Day 02",
        "title": "Explore Naran",
        "description": "o Breakfast call o After breakfast Leave for Rafting Point o Visit Rafting Point o Free time for enjoyment there o Lulusar Lake and Babusar Top will be visited when accessible o Back to Hotel at evening o Night stay at Naran Valley"
      },
      {
        "day": "Day 03",
        "title": "Naran- Saif ul Malook Lake - ISB/LHR",
        "description": "Early Morning Leave for Lake Saif Ul Malook on 4×4 Visit Lake Saif Ul Malook till 9:00am Back to Naran Breakfast & Drive Back to Lahore / Islamabad Short stay for lunch on way (Not Included in the package) Arrival at Islamabad at 8:00Pm Arrival at Lahore Late Night"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": null
  },
  "4": {
    "id": 4,
    "title": "3 Days – Naran | Shogran Group Tour Packages",
    "location": "Khyber Pakhtunkhwa (KPK)",
    "duration": "3 Days 2 Nights",
    "price": 14000,
    "image": "/naran1.jpg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "EXPERIENCE THE MESMERIZING VIEW OF NARAN, SHOGRAN AND SIRI PAYE MEADOWS WITH @towardsdestination.pk PVT. LTD. Book your Trip Now and Experience the Beauty of Naran with @towardsdestination.pk. @towardsdestination.pk is known for planning and executing the best tours in North Pakistan, including trekking tours, Cycling Tours, Camping Tours, Cultural Tours and much more.",
    "pointsToVisit": [
      "Shogran",
      "Siri paye Meadows",
      "Sightseeing of Kaghan Valley",
      "Naran",
      "Naran Bazar",
      "Saif ul Malook Lake",
      "Lulusar lake",
      "Babusar Top",
      "Batakundi",
      "Balakot",
      "Kunhar River"
    ],
    "highlights": [
      "Visit Naran, Shogran, and Siri Paye Meadows",
      "Explore Kaghan Valley",
      "Visit Saif ul Malook Lake",
      "See Lulusar Lake and Babusar Top (if accessible)",
      "Rafting at Kunhar River"
    ],
    "included": [
      "𝐓𝐫𝐚𝐧𝐩𝐬𝐨𝐫𝐭𝐚𝐭𝐢𝐨𝐧 (𝐆𝐫𝐚𝐧𝐝 𝐂𝐚𝐛𝐢𝐧 𝐨𝐫 𝐂𝐨𝐚𝐬𝐭𝐞𝐫)",
      "𝐀𝐜𝐜𝐨𝐦𝐨𝐝𝐚𝐭𝐢𝐨𝐧𝐬 (𝐚𝐜𝐜𝐨𝐫𝐝𝐢𝐧𝐠 𝐭𝐨 𝐏𝐚𝐜𝐤𝐚𝐠𝐞)",
      "𝐅𝐨𝐨𝐝 (𝟐 𝐃𝐢𝐧𝐧𝐞𝐫𝐬, 𝟑 𝐁𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭𝐬)",
      "𝐏𝐫𝐨𝐟𝐟𝐞𝐬𝐢𝐨𝐧𝐚𝐥 𝐆𝐮𝐢𝐝𝐞",
      "𝐒𝐢𝐠𝐡𝐭 𝐒𝐞𝐞𝐢𝐧𝐠",
      "𝐌𝐮𝐬𝐢𝐜𝐚𝐥 𝐍𝐢𝐠𝐡𝐭/𝐁𝐨𝐧𝐟𝐢𝐫𝐞"
    ],
    "excluded": [
      "𝐀𝐧𝐲 𝐊𝐢𝐧𝐝 𝐨𝐟 𝐄𝐧𝐭𝐫𝐲 𝐓𝐢𝐜𝐤𝐞𝐭𝐬",
      "𝐉𝐞𝐞𝐩 𝐂𝐡𝐚𝐫𝐠𝐞𝐬",
      "𝐋𝐮𝐧𝐜𝐡𝐬",
      "𝐋𝐚𝐮𝐧𝐝𝐚𝐫𝐲/𝐏𝐫𝐞𝐬𝐬/𝐏𝐡𝐨𝐭𝐨𝐠𝐫𝐚𝐩𝐡𝐲",
      "𝐀𝐧𝐲 𝐤𝐢𝐧𝐝 𝐨𝐟 𝐄𝐱𝐭𝐫𝐚 𝐜𝐡𝐚𝐫𝐠𝐞𝐬 𝐢𝐧𝐜𝐚𝐬𝐞 𝐨𝐟 𝐑𝐨𝐚𝐝 𝐁𝐥𝐨𝐜𝐤𝐬",
      "𝐀𝐧𝐲 𝐨𝐭𝐡𝐞𝐫 𝐂𝐡𝐚𝐫𝐚𝐠𝐞𝐬 𝐰𝐡𝐢𝐜𝐡 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐢𝐧𝐜𝐥𝐮𝐝𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐏𝐚𝐜𝐤𝐚𝐠𝐞"
    ],
    "hotelList": [
      {
        "location": "Naran",
        "standard": "Eagle Resort or Eqv",
        "deluxe": "Naran International or Eqv",
        "premium": "Not Available",
        "executive": "Hotel Homes or Eqv"
      }
    ],
    "departureSchedule": [
      {
        "city": "Islamabad",
        "departure1": "Every Friday Morning",
        "departure2": ""
      },
      {
        "city": "Lahore",
        "departure1": "Every Thursday Night",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "14,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "17,000",
        "deluxe": "27,900",
        "premium": "Not Available",
        "executive": "45,000"
      },
      "soloSharing": {
        "standard": "21,000",
        "deluxe": "44,000",
        "premium": "Not Available",
        "executive": "78,000"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Kind of Jeeps and Entry tickets are not included in the package.",
      "Jeep Charges for Saif ul Malook , Shogran siri Paye meadows will be Rs. 2500/head.",
      "All the Hotels are subject to availability and can be changed due to issues.",
      "On Eid Days only Standard Package will be available"
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "(Departure from ISB/LHR)",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 09:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 3:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST."
      },
      {
        "day": "Day 01",
        "title": "(Islamabad - Shogran - Naran)",
        "description": "o Reach at Islamabad and pick up members from Islamabad o Departure from Islamabad at 04:30 am o Departure for Shogran Valley o Arrival at Kiwai Waterfall o Visit Kiwai Waterfall o Transfer to Jeep for Shogran Valley and Siri Paye o Meadow o Back to kiwai at evening and Leave for Naran o Arrival at Naran and check in hotel o Dinner and Night stay at Naran Valley"
      },
      {
        "day": "Day 02",
        "title": "(Explore Naran)",
        "description": "o Breakfast call o After breakfast Leave for Rafting Point o Visit Rafting Point o Free time for enjoyment there o Lulusar Lake and Babusar Top will be visited when accessible o Back to Hotel at evening o Night stay at Naran Valley"
      },
      {
        "day": "Day 03",
        "title": "(Naran-Islamabad/Lahore)",
        "description": "o Early Morning Leave for Lake Saif Ul Malook on 4×4 o Visit Lake Saif Ul Malook till 9:00am o Back to Naran Breakfast & Drive Back to Lahore / o Islamabad o Transfer to Buses: 9:00 AM o Short stay for lunch on way (Not Included in the package) o Arrival at Islamabad at 8:00Pm o Arrival at Lahore Late Night"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": null
  },
  "5": {
    "id": 5,
    "title": "5 Days Trip to Neelum Valley | Taobat| Arang Kel & Ratti Gali",
    "location": "Azad Jammu and Kashmir (AJK)",
    "duration": "5 Days 4 Nights",
    "price": 25000,
    "image": "/neelum5.jpg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "EXPERIENCE THE MESMERIZING VIEW OF NEELUM VALLEY WITH @towardsdestination.pk PVT. LTD. Book your Trip Now and Experience the Beauty of Neelum Valley | Taobat| Arang Kel & Ratti Gali with @towardsdestination.pk.",
    "pointsToVisit": [
      "Murree",
      "Kohalla_Bridge",
      "Muzafrabad",
      "Neelum_Jhelum_project",
      "Neelum_River",
      "Dhani_Waterfall",
      "Kutton_waterfall / Kundal Shahi Waterfall",
      "Athmuqam",
      "Keran",
      "LOC (Line of control)",
      "Sharda",
      "Kel",
      "Arang_Kel",
      "Taobat",
      "Ratti Gali",
      "Helmet"
    ],
    "highlights": [
      "Explore Neelum Valley, Taobat, Arang Kel & Ratti Gali",
      "Visit Dhani & Kutton Waterfalls",
      "See the LOC (Line of control) at Keran",
      "Hike to Arang Kel",
      "Visit Sharda and Taobat",
      "Jeep safari to Ratti Gali Lake"
    ],
    "included": [
      "Luxury Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "4 Dinner/5 Breakfasts",
      "Bonfire/Music System",
      "4 Nights Accommodation",
      "Basic First Aid Kit"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Entry Ticket",
      "Any other meals or Lunch is not included in the package",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDED” list"
    ],
    "hotelList": [
      {
        "location": "Sharda",
        "standard": "Neelum Continental",
        "deluxe": "Not Available",
        "executive": "Not Available"
      },
      {
        "location": "Taobat",
        "standard": "Taobat Continental",
        "deluxe": "Not Available",
        "executive": "Not Available"
      },
      {
        "location": "Keran",
        "standard": "Keran Residency",
        "deluxe": "Not Available",
        "executive": "Not Available"
      }
    ],
    "departureSchedule": [
      {
        "city": "Islamabad",
        "departure1": "Every Thursday Early Morning",
        "departure2": ""
      },
      {
        "city": "Lahore",
        "departure1": "Every Wednesday Night",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "25,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "30,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Kind of Jeeps and Entry tickets are not included in the package.",
      "Jeep Charges will be Rs. 5,000/head.",
      "All the Hotels are subject to availability and can be changed due to issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE POINTS FROM LHR/ISB",
        "description": "𝐓𝐢𝐦𝐢𝐧𝐠𝐬 𝐅𝐨𝐫 𝐋𝐚𝐡𝐨𝐫𝐞:10:00 PM (Wednesday Night) 𝐏𝐢𝐜𝐤𝐮𝐩 𝐩𝐨𝐢𝐧𝐭: Meet up (Thokar Niaz Baig Near new Daewoo Terminal LAHORE) 𝐓𝐢𝐦𝐢𝐧𝐠𝐬 𝐅𝐨𝐫 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝: 4:30AM (Thursday Morning) from Islamabad 𝐏𝐢𝐜𝐤𝐮𝐩 𝐩𝐨𝐢𝐧𝐭: Daweoo Terminal Ner EME college Rawalpindi"
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - SHARDA",
        "description": "Departure for Muzaffrabad Short stay for breakfast at Muzaffrabad Short Stays on the way (Sightseeing of Muree, Kohala Bridge and Neelum River) Continue drive towards Kutton Waterfall (Kundal Shahi Waterfall) Departure for Shardah Valley Dinner and Night stay at Sharda"
      },
      {
        "day": "Day 02",
        "title": "SHARDA - TAOBAT - HELMET",
        "description": "Breakfast at 7:00 AM Departure for Taobat from Shardah Arrival at Taobat and Explore the Surroundings of Taobat Explore Taobat till Night Back to Hotel in Halmat/Taobat (20mins Away from Taobat) Night Stay and Dinner in Halmat/Taobat"
      },
      {
        "day": "Day 03",
        "title": "HELMET - ARANG KEL - SHARDA",
        "description": "Breakfast at 7:00 AM Explore Halmat till 9am Back to Kel Arrival to Kel Chairlift and 45mins hike to Arang Kel Reach Arang Kel till 2pm Explore Arang Kel till evening Back to Hotel in Shardah for Night stay Dinner + Bonfire at Shardah"
      },
      {
        "day": "Day 04",
        "title": "SHARDA - RATTI GALI KERAN",
        "description": "Breakfast Call Departure for Ratti Gali Arrival to Dowariyan Tarnsfer to 4×4 jeep (Jeep charges not included) Enjoy whole day there Back to Keran in the Evening overnight at Keran"
      },
      {
        "day": "Day 05",
        "title": "KERAN - ISLAMABAD- LAHORE",
        "description": "Breakfast at 7:00 AM Departure for Islamabad and Lahore Short stay at Dhani Waterfall for Lunch Continue drive towards Lahore Reach Isb till 7pm and Lhr till 12:00AM"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92 315 3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 20 adults"
  }
  ,"6": {
    "id":6,
    "title": "4 Days Trip to Ratti Gali & Arang kel",
    "location": "Azad Jammu and Kashmir (AJK)",
    "duration": "4 Days 3 Nights",
    "price": 17000,
    "image": "/neelum.jpg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "EXPERIENCE THE MESMERIZING VIEW OF NEELUM VALLEY WITH @towardsdestination.pk PVT. LTD. Book your Trip Now and Experience the Beauty of Ratti Gali & Arang Kel with @towardsdestination.pk.",
    "pointsToVisit": [
      "Muzafrabad",
      "Neelum_Jhelum_project",
      "Neelum_River",
      "Dhani_Waterfall",
      "Kutton_waterfall / Kundal Shahi Waterfall",
      "Athmuqam",
      "Keran",
      "LOC (Line of control)",
      "Sharda",
      "Kel",
      "Arang_Kel",
      "Ratti Gali"
    ],
    "highlights": [
      "Visit Ratti Gali Lake",
      "Hike to Arang Kel",
      "Explore Neelum Valley",
      "Visit Sharda",
      "See Dhani & Kutton Waterfalls",
      "View of LOC (Line of control) at Keran"
    ],
    "included": [
      "Luxury Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "3 Dinner/4 Breakfasts",
      "Bonfire/Music System",
      "3 Nights Accommodation",
      "Instrument For Ludo and Card",
      "Basic First Aid Kit"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Entry Ticket",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDED” list",
      "Jeep Charges for Sharda to Kel (Rs. 1500/head)"
    ],
    "hotelList": [
      {
        "location": "Sharda",
        "standard": "Neelum Continental",
        "deluxe": "Not Available",
        "executive": "Not Available"
      },
      {
        "location": "Keran",
        "standard": "Keran Residency",
        "deluxe": "Not Available",
        "executive": "Not Available"
      }
    ],
    "departureSchedule": [
      {
        "city": "Islamabad",
        "departure1": "Every Thursday Early Morning",
        "departure2": ""
      },
      {
        "city": "Lahore",
        "departure1": "Every Wednesday Night",
        "departure2": ""
      },
      {
        "city": "Karachi",
        "departure1": "Via Train/Bus/Air",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "17,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "couplePackage": {
        "standard": "42,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "karachiAddon": {
        "economyTrain": "18000",
        "businessTrain": "28000",
        "bus": "22,000",
        "air": "Depend on Air Ticket Fare",
        "hotelQuad": "4,000",
        "hotelTwin": "8,000"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Kind of Jeeps and Entry tickets are not included in the package.",
      "Jeep Charges for Sharda to Kel will be Rs. 1500/head.",
      "Additional charges for Karachi Participants: Traveling fare from Karachi to Islamabad and Islamabad to Karachi.",
      "Additional 2 Nights stay in Islamabad (applicable only for Karachi’s clients).",
      "All the Hotels are subject to availability and can be changed due to issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPATURE POINTS FROM LHR/ISB",
        "description": "𝐓𝐢𝐦𝐢𝐧𝐠𝐬 𝐅𝐨𝐫 𝐋𝐚𝐡𝐨𝐫𝐞:09:00 PM (Wednesday Night) 𝐏𝐢𝐜𝐤𝐮𝐩 𝐩𝐨𝐢𝐧𝐭: Meet up (Thokar Niaz Baig Near new Daewoo Terminal LAHORE) 𝐓𝐢𝐦𝐢𝐧𝐠𝐬 𝐅𝐨𝐫 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝: 3:30AM (Thursday Morning) from Islamabad 𝐏𝐢𝐜𝐤𝐮𝐩 𝐩𝐨𝐢𝐧𝐭: Daweoo Terminal Ner EME college Rawalpindi"
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - SHARDA",
        "description": "Departure for Muzaffarabad Short stay for breakfast at Muzaffarabad Short Stays on the way (Sightseeing of Murree, Kohala Bridge and Neelum River) Continue drive towards Kutton Waterfall (Kundal Shahi Waterfall) Departure for Shardah Valley Dinner and Night stay at Shardah"
      },
      {
        "day": "Day 02",
        "title": "SHARDA - ARANG KEL",
        "description": "Breakfast at 7:00 AM Transfer to 4×4 jeep (jeep charges not included) Departure for Arangkel from Shardah Arrival at Kel and Hike towards Arang Kel Explore Arang Kel till evening Back to Shardah in the Evening Night Stay and Dinner in Shardah"
      },
      {
        "day": "Day 03",
        "title": "SHARDA - RATTI GALI",
        "description": "Breakfast at 7:00 AM Departure for Ratti Gali Transfer to jeep from Dowariyan Visit Ratti Gali Spend whole day there Back to Keran in the evening Overnight at Keran"
      },
      {
        "day": "Day 04",
        "title": "KERAN - ISLAMABAD/ LHR",
        "description": "Breakfast at 7:00 AM Departure for Islamabad and Lahore Short stay at Dhani Waterfall for Lunch Continue drive towards Lahore Reach Isb till 7pm and Lhr till 12:00AM"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for up to 25 adults"
  },
  "7": {
    "id": 7,
    "title": "Taobat & Arang kel Kashmir : 4 Days Trip",
    "location": "Azad Jammu and Kashmir (AJK)",
    "duration": "4 Days 3 Nights",
    "price": 17500,
    "image": "/neelum.jpg",
    "tourType": "Specific Tour",
    "description": "Experience the mesmerizing beauty of Taobat and Arang Kel, Kashmir with @towardsdestination.pk (Pvt.) Ltd. Our well-planned trips offer breathtaking views of lush valleys, crystal rivers, and snow-capped peaks. Whether you are a nature lover, photographer, or adventure seeker, this Kashmir tour is your chance to discover the true charm of northern Pakistan. Book now and explore the untouched beauty of Neelum Valley with us!",
    "pointsToVisit": [
      "Murree",
      "Kohalla_Bridge",
      "Muzafrabad",
      "Neelum_Jhelum_project",
      "Neelum_River",
      "Dhani_Waterfall",
      "Kutton_waterfall / Kundal Shahi Waterfall",
      "Athmuqam",
      "Keran",
      "LOC (Line of control)",
      "Sharda",
      "Kel",
      "Arang_Kel",
      "Taobat",
      "Halmat"
    ],
    "highlights": [
      "Explore Taobat & Arang Kel",
      "Visit Neelum Valley",
      "See Dhani & Kutton Waterfalls",
      "View of LOC (Line of control) at Keran",
      "Visit Sharda & Halmat",
      "Hike to Arang Kel"
    ],
    "included": [
      "Luxury Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "3 Dinner/4 Breakfasts",
      "Bonfire/Music System",
      "3 Nights Accommodation (Accommodation/Hoteling)",
      "Instrument For Ludo and Card",
      "Sleeping Bags",
      "Basic First Aid Kit"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Entry Ticket",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDED” list"
    ],
    "hotelList": [
      {
        "location": "Sharda",
        "standard": "Neelum Continental",
        "deluxe": "Not Available",
        "executive": "Not Available"
      },
      {
        "location": "Taobat",
        "standard": "Taobat Continental",
        "deluxe": "Not Available",
        "executive": "Not Available"
      }
    ],
    "departureSchedule": [
      {
        "city": "Lahore",
        "departure1": "Every Wednesday Night",
        "departure2": ""
      },
      {
        "city": "Islamabad",
        "departure1": "Every Thursday Early Morning",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "17,500",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "21,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "soloSharing": {
        "standard": "27,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      }
    },
    "exceptions": [],
    "notes": [
      "All the Hotels are subject to availability and can be changed due to issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE FROM LHR/ISB",
        "description": "𝐓𝐢𝐦𝐢𝐧𝐠𝐬 𝐅𝐨𝐫 𝐋𝐚𝐡𝐨𝐫𝐞:09:00 PM (Wednesday Night) 𝐏𝐢𝐜𝐤𝐮𝐩 𝐩𝐨𝐢𝐧𝐭: Meet up (Thokar Niaz Baig Near new Daewoo Terminal LAHORE) 𝐓𝐢𝐦𝐢𝐧𝐠𝐬 𝐅𝐨𝐫 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝: 3:30AM (Thursday Morning) from Islamabad 𝐏𝐢𝐜𝐤𝐮𝐩 𝐩𝐨𝐢𝐧𝐭: Daweoo Terminal Ner EME college Rawalpindi"
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - SHARDA",
        "description": "Departure for Muzaffrabad Short stay for breakfast at Muzaffrabad Short Stays on the way (Sightseeing of Muree, Kohala Bridge and Neelum River) Continue drive towards Kutton Waterfall (Kundal Shahi Waterfall) Departure for Shardah Valley Dinner and Night stay at Shardah"
      },
      {
        "day": "Day 02",
        "title": "SHARDA - TAOBAT - HELMET",
        "description": "Breakfast at 7:00 AM Departure for Taobat from Shardah Arrival at Taobat and Explore the Surroundings of Taobat Explore Taobat till Night Back to Hotel in Halmat/Taobat (20mins Away from Taobat) Night Stay and Dinner in Halmat/Taobat"
      },
      {
        "day": "Day 03",
        "title": "HELMET - ARANG KEL - -SHARDA",
        "description": "Breakfast at 7:00 AM Explore Halmat till 9am Back to Kel Arrival to Kel Chairlift and 45mins hike to Arang Kel Reach Arang Kel till 2pm Explore Arang Kel till evening Back to Hotel in Shardah for Night stay Dinner + Bonfire at Shardah"
      },
      {
        "day": "Day 04",
        "title": "SHARDA - ISLAMABAD - LAHORE",
        "description": "Breakfast at 7:00 AM Departure for Islamabad and Lahore Short stay at Dhani Waterfall for Lunch Continue drive towards Lahore Reach Isb till 7pm and Lhr till 12:00AM"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 25 adults"
  },
  "8": {
    "id": 8,
    "title": "4 Days Trip to Kumrat | Jahaz Banda & Katora Lake",
    "location": "Khyber Pakhtunkhwa (KPK)",
    "duration": "4 Days 3 Nights",
    "price": 17500,
    "image": "/kumrat.jpg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "EXPERIENCE THE MESMERIZING VIEW OF KUMRAT | JAHAZ BANDA & KATORA LAKE WITH @towardsdestination.pk PVT. LTD. Book your Trip Now and Experience the Beauty of Kumrat Valley, Jahaz Banda & Katora Lake with @towardsdestination.pk.",
    "pointsToVisit": [
      "Chakdara",
      "Upper Dir",
      "Timergara",
      "Thal Village",
      "Kumrat Valley",
      "Kala Chashma (optional; If time left)",
      "Kumrat Jungle",
      "Panjkora River",
      "Two Abshar",
      "Jahaz Banda",
      "Katora Lake"
    ],
    "highlights": [
      "Explore Kumrat Valley and Kumrat Jungle",
      "Visit Kala Chashma and Two Abshar",
      "Hike to Jahaz Banda Meadows",
      "Trekking to Katora Lake",
      "Camping at Jahaz Banda"
    ],
    "included": [
      "Luxury Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "3 Dinner/4 Breakfasts",
      "Bonfire/Music System",
      "3 Nights Accommodation (Accommodation/Hoteling)",
      "Instrument For Ludo and Card",
      "Sleeping Bags",
      "Basic First Aid Kit"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Entry Ticket",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDED” list",
      "Jeep Charges for Kumrat Valley (Rs. 3500/head)"
    ],
    "hotelList": [
      {
        "location": "Kumrat",
        "standard": "Maskan Hotel",
        "deluxe": "Not Available",
        "executive": "Not Available"
      },
      {
        "location": "Jahaz Banda",
        "standard": "Punjab Hotel",
        "deluxe": "Not Available",
        "executive": "Not Available"
      }
    ],
    "departureSchedule": [
      {
        "city": "Lahore",
        "departure1": "Every Wednesday Night",
        "departure2": ""
      },
      {
        "city": "Islamabad",
        "departure1": "Every Thursday Early Morning",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "17,500",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "21,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "soloSharing": {
        "standard": "27,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Kind of Jeeps and Entry tickets are not included in the package.",
      "Jeep Charges for Kumrat Valley will be Rs. 3500/head.",
      "All the Hotels are subject to availability and can be changed due to issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE FOR LHR/ISB",
        "description": "𝐓𝐢𝐦𝐢𝐧𝐠𝐬 𝐅𝐨𝐫 𝐋𝐚𝐡𝐨𝐫𝐞:09:00 PM (Wednesday Night) 𝐏𝐢𝐜𝐤𝐮𝐩 𝐩𝐨𝐢𝐧𝐭: Meet up (Thokar Niaz Baig Near new Daewoo Terminal LAHORE) 𝐓𝐢𝐦𝐢𝐧𝐠𝐬 𝐅𝐨𝐫 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝: 3:30AM (Thursday Morning) from Islamabad 𝐏𝐢𝐜𝐤𝐮𝐩 𝐩𝐨𝐢𝐧𝐭: Daweoo Terminal Ner EME college Rawalpindi"
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - KUMRAT VALLEY",
        "description": "Breakfast on way at Timergara Arrival in Thal Transfer to 4×4 for Kumrat Valley Explore Kumrat Valley (2 Abshar, Kumrat Jungle) Visit kala chashma (if time left otherwise skip) Musical Night + Bonfire at Kumrat Valley Dinner and Night stay in Camps in Kumrat Valley (standard Hoteling/Camping)"
      },
      {
        "day": "Day 02",
        "title": "KUMRAT - JAHAZ BANDA",
        "description": "Breakfast call early morning Departure for Jahaz Banda Arrival to Gam Sair / Takki Banda Start Hiking towards Jahaz Banda (3 hrs Hiking) Musical Night + Bonfire at Jahaz banda Meadows below Starry sky Dinner and Night stay at jahaz Banda Meadows (Camping)"
      },
      {
        "day": "Day 03",
        "title": "JAHAZ BANDA - KATORA LAKE",
        "description": "Breakfast call early morning Start treking towards Katora Lake (3hrs Hiking) Explore Katora lake Trek Back to Jahazbanda Dinner and Night stay at Jahazbanda (Camping)"
      },
      {
        "day": "Day 04",
        "title": "KUMRAT - ISLB/LHR",
        "description": "Breakfast call early morning Departure for Islamabad Short stays on the ways Arrival in Islamabad at 9:00pm arrival to lahore: 1:00 am End of Services."
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 25 adults"
  },
  "9": {
    "id": 9,
    "title": "3 Days Trip to Ratti Gali Kashmir",
    "location": "Azad Jammu and Kashmir (AJK)",
    "duration": "3 Days 2 Nights",
    "price": 13500,
    "image": "/neelum3.jpg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "EXPERIENCE THE MESMERIZING VIEW OF NEELUM VALLEY RATTI GALI KASHMIR WITH @towardsdestination.pk PVT. LTD. Book your Trip Now and Experience the Beauty of Ratti Gali Kashmir with @towardsdestination.pk.",
    "pointsToVisit": [
      "Ratti Gali",
      "Kutton Waterfall",
      "Dhani Waterfall",
      "Sightseeing of Neelum River and Neelum Jhelum Dam",
      "Keran (LOC)"
    ],
    "highlights": [
      "Visit Ratti Gali Lake",
      "Explore Neelum Valley",
      "See Kutton & Dhani Waterfalls",
      "View of LOC (Line of control) at Keran",
      "Sightseeing of Neelum River and Neelum Jhelum Dam"
    ],
    "included": [
      "Luxury Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "2 Dinner/ 3 Breakfasts",
      "Bonfire",
      "2 Nights Hotel Accommodation",
      "Instrument For Ludo and Card",
      "Music System",
      "Basic First Aid Kit"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDES” list",
      "Jeep Charges for Ratti Gali, Kashmir (Rs. 2000/head)"
    ],
    "hotelList": [
      {
        "location": "Keran",
        "standard": "Keran Residency",
        "deluxe": "Not Available",
        "executive": "Not Available"
      }
    ],
    "departureSchedule": [
      {
        "city": "Lahore",
        "departure1": "Every Thursday Night",
        "departure2": ""
      },
      {
        "city": "Islamabad",
        "departure1": "Every Friday Early Morning",
        "departure2": ""
      },
      {
        "city": "Karachi",
        "departure1": "Via Train/Bus/Air",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "13,500",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "couplePackage": {
        "standard": "32,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "karachiAddon": {
        "economyTrain": "18000",
        "businessTrain": "28000",
        "bus": "22,000",
        "air": "Depend on Air Ticket Fare",
        "hotelQuad": "4,000",
        "hotelTwin": "8,000"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Kind of Jeeps and Entry tickets are not included in the package.",
      "Jeep Charges for Ratti Gal, Kashmir will be Rs. 2000/head.",
      "All the Hotels are subject to availability and can be changed due to issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE FROM LHR/ISB",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 10:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 4:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST."
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - KERAN",
        "description": "Departure for Neelum Valley Visit Dhani Waterfall on way Visit Kutton Waterfall Arrival at Keran Dinner and Night stay at Keran Musical Night + Bonfire at Keran Valley"
      },
      {
        "day": "Day 02",
        "title": "KERAN - RATTI GALI",
        "description": "Breakfast call at 7:00am Transfer to jeeps and Leave for Ratti Gali Arrival at Ratti Gali Spend whole day there Back to Keran in the eveving Dinner & Over Night at Keran"
      },
      {
        "day": "Day 03",
        "title": "KERAN - ISB/LHR",
        "description": "Breakfast & Drive Back to Lahore / Islamabad Transfer to Buses: 9:00 AM Short stay for lunch on way (Not Included in the package) Arrival at Islamabad at 9:00Pm Arrival at Lahore Late Night"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": null
  },
  "10": {
    "id": 10,
    "title": "5 Days Trip to Fairy Meadows & Beyal Camp",
    "location": "Fairy Meadows",
    "duration": "5 Days 4 Nights",
    "price": 24000,
    "image": "/logo.jpeg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "@towardsdestination.pk Presents 5 Days Trip to Fairy Meadows & Beyal Camp. Enjoy your Special Moments with us and make your moments more Memorable with your Love ones.",
    "pointsToVisit": [
      "Mansehra",
      "Karakoram highway",
      "Besham",
      "Summer Nala",
      "Chillas",
      "Raikot Bridge",
      "Tattu village",
      "Fairy meadows",
      "German View point",
      "Nanga Parbat Base Camp (Beyal Camp)"
    ],
    "highlights": [
      "Trek to Fairy Meadows",
      "Visit Beyal Camp (Nanga Parbat Base Camp)",
      "See the German Viewpoint",
      "Jeep ride from Raikot Bridge to Tattu village",
      "Drive along the Karakoram Highway",
      "Views of Nanga Parbat"
    ],
    "included": [
      "Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "4 Dinners/ 5 Breakfasts",
      "Bonfire",
      "Accommodation (2 night Hotel stay, 2 nights Camping)",
      "Basic First Aid"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDES” list",
      "Jeep charges for Tattu Village (Rs. 3000/head)"
    ],
    "hotelList": [
      {
        "location": "Chilas",
        "standard": "Regal Inn",
        "deluxe": "Not Available",
        "premium": "Shangrilla Hotel",
        "executive": "Not Available"
      },
      {
        "location": "Fairy Meadows",
        "standard": "Fairy Meadows View Point Cottages",
        "deluxe": "Not Available",
        "premium": "Hotel Sarai",
        "executive": "Not Available"
      },
      {
        "location": "Naran",
        "standard": "Gateway Hotel",
        "deluxe": "Not Available",
        "premium": "Naran International",
        "executive": "Not Available"
      },
      {
        "location": "Besham",
        "standard": "Ramada Besham",
        "deluxe": "Not Available",
        "premium": "Besham Hilton",
        "executive": "Not Available"
      }
    ],
    "departureSchedule": [
      {
        "city": "Lahore",
        "departure1": "Every Friday Night",
        "departure2": ""
      },
      {
        "city": "Islamabad",
        "departure1": "Every Saturday Early Morning",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "24,000",
        "deluxe": "Not Available",
        "premium": "41,500",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "38,000",
        "deluxe": "Not Available",
        "premium": "51,000",
        "executive": "Not Available"
      },
      "soloSharing": {
        "standard": "36,000",
        "deluxe": "Not Available",
        "premium": "83,500",
        "executive": "Not Available"
      }
    },
    "exceptions": [
      "Kids age 5-8 : 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Jeep charges for Tattu Village will be Rs. 3000/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE FROM LHR/ISB",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 09:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 3:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST."
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - CHILAS",
        "description": "Reach at Islamabad and pick up members from Islamabad - Departure from Islamabad at 04:30 am for Chilas - Short stays on the way - Short stay at Balakot for breakfast - Continue drive towards Chilas - Short stay Naran - Visit Lulusar Lake - Visit Babusar Top - Sightseeing of Water streams on way - Arrival at Chilas and Check in Hotel - Dinner and night stay at Chillas"
      },
      {
        "day": "Day 02",
        "title": "CHILAS- RAIKOT- FAIRY MEADOWS",
        "description": "Breakfast Call early Morning Departure for Raikot at 9:00 AM Jeep Ride from Raikot to tattu Village (Jeeps charges are not included in the package) Start trek to Fairy Meadows (3 hrs.) Short stays on the way Arrival to fairy Meadows Dinner/Night Stay in Fairy Meadows"
      },
      {
        "day": "Day 03",
        "title": "FAIRY MEAOWS - BEYAL CAMP",
        "description": "Early morning breakfast call Start Trek to Nanga Parbat Base Camp (3 to 4 Hrs) Short Stay and Refreshments at Nanga Parbat Base Camp Visit German view point Trek back to Fairy Meadows Bonfire and musical night at Camp site Dinner and Night Stay in Fairy Meadows"
      },
      {
        "day": "Day 04",
        "title": "FAIRY MEADOWS - NARAN",
        "description": "Early morning breakfast call Start trekking to tattu village (2.5 hrs) Transfer to 4×4 for Raikot Bridge Departure for Rai Kot bridge Transfer to coaster Departure FOR Naran.Cover any missing point on the way back. Back to Naran Dinner and Night stay at Naran"
      },
      {
        "day": "Day 05",
        "title": "NARAN - ISB/LHR",
        "description": "Breakfast calls early morning. - Departure for Lahore/Islamabad - Short stops on the way - Short stop at Balakot - Continue drive towards Lahore/Islamabad - Arrival at Lahore/ Islamabad - End of Journey"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 25 adults"
  },
  "11": {
    "id": 11,
    "title": "6 Days Trip to Astore | Minimarg | Rama Meadows| Deosai",
    "location": "Gilgit",
    "duration": "6 Days 5 Nights",
    "price": 28000,
    "image": "/astore.jpg",
    "tourType": "Specific Tour",
    "description": "@towardsdestination.pk presents Astore | Minimarg | Rama Meadows| Deosai. Enjoy your Special Moments with us and make your moments more Memorable with your Love ones.",
    "pointsToVisit": [
      "Mansehra",
      "Karakoram highway",
      "Balakot",
      "Naran",
      "Kiwai waterfall",
      "Babusar Top",
      "Lulusar lake",
      "Chillas",
      "Astore",
      "Rama Meadows",
      "Deosai Plains",
      "Chilam",
      "Minimerg",
      "Domail",
      "Burzil Top",
      "Trishing Valley"
    ],
    "highlights": [
      "Explore Astore, Minimarg, Rama Meadows, and Deosai",
      "Visit Rama Lake and Deosai Plains",
      "See Sheosar Lake",
      "Visit Burzil Top and Domail",
      "Explore Trishing Valley",
      "Drive via Babusar Top, visiting Lulusar Lake and Kiwai Waterfall"
    ],
    "included": [
      "Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "5 Dinners/6 Breakfasts",
      "Bonfire",
      "Accommodation at Hotels 5 Nights",
      "Basic First Aid"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDES” list",
      "Jeep charges (Rs. 8,000/head)"
    ],
    "hotelList": [
      {
        "location": "CHILAS",
        "standard": "Fairy Meadows Cottages",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      {
        "location": "RAMA",
        "standard": "Camping Site",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      {
        "location": "Astore",
        "standard": "Rama Midway Hotel",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      {
        "location": "MINIMARG",
        "standard": "Tent Village",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      }
    ],
    "departureSchedule": [
      {
        "city": "Lahore",
        "departure1": "Every Friday Night",
        "departure2": ""
      },
      {
        "city": "Islamabad",
        "departure1": "Every Saturday Early Morning",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "28,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "34,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      }
    },
    "exceptions": [
      "Kids age 5-8 : 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Jeep charges Expected Jeep Charges will be Rs. 8,000/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARURE FROM LHR/ISB",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 09:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 3:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST."
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - CHILAS",
        "description": "First stop of 40 Minutes for Breakfast at Balakot valley Sightseeing of Kunhar river Short stay at Kiwai waterfall Short stay at Naran bazar Short stay at Lulusar lake Short stay at Babusar Top Sightseeing of Water streams on way Continue Drive to Chilas Short stays on the ways Dinner and Night stay in Chilas"
      },
      {
        "day": "Day 02",
        "title": "CHILAS - RAMA MEADOWS",
        "description": "Breakfast Call Departure for Rama Meadows Arrival to Astore Bazar Transfer to 4*4 Jeep Visit Rama Meadows start hiking towards Rama Meadows Visit Rama Lake and surrounding Back to Rama Meadows in the Evening Overnight at Rama Meadows"
      },
      {
        "day": "Day 03",
        "title": "ASTORE - MINIMARG",
        "description": "Breakfast call Departure for Minimerg Sightseeing of Indus River Arrival to Chilam Check Post Transfer to Jeep from Chilam Check Post Departure for Minimerg Short stay at Burzil Top short stay at Minimerg Valley Visit Domail Visit Rainbow Lake Visit Crystal Lake Back to camping sight Overnight at Minimerg (Camping) Night stay and Dinner in Minimerg"
      },
      {
        "day": "Day 04",
        "title": "MINIMARG - DEOSAI - Astore",
        "description": "Breakfast call Departure for Deosai Plains Short stay at Burzil Top Visit Sheosar Lake Free time for enjoyment at Deasai National Park Back to Astore in the evening Dinner and night stay at Astore"
      },
      {
        "day": "Day 05",
        "title": "ASTORE - CHILAS/NARAN",
        "description": "Breakfast call Explore the beauty of Trishing Valley Sight Seeing of Nanga Parbat view point Departure for Naran Continous Drive to Chilas Short stay at Chilas for Fueling short stay at Babusar Top Arrival to Naran (if babusar is open our stay will be in Naran otherwise our stay will be in Chilas) Overnight at Naran/Chilas"
      },
      {
        "day": "Day 06",
        "title": "CHILAS/ NARAN - ISB- LHR",
        "description": "Breakfast Call Free Time for Rafting at Naran Departure for islamabad and Lahore Short stay at Balakot for Lunch Arrival in Islamabad 6:00PM Arrival in Lahore Late Night"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 20 adults"
  },
  "12": {
    "id": 12,
    "title": "8 Days Trip to Hunza & Skardu Valley",
    "location": "Gilgit",
    "duration": "8 Days 7 Nights",
    "price": 32000,
    "image": "/skardu8.jpg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "@towardsdestination.pk Presents 8 Days Trip to Hunza & Skardu Valley. Enjoy your Special Moments with us and make your moments more Memorable with your Love ones.",
    "pointsToVisit": [
      "Mansehra",
      "Karakoram highway",
      "Naran",
      "Kaghan",
      "Kiwai waterfall",
      "Lulusar lake",
      "Babusar Top",
      "Chillas",
      "Nanga Perbat View Point",
      "Junction Point of Three Mightiest Mountains",
      "Gilgit",
      "Altit Fort",
      "Baltit Fort",
      "Hunza Valley",
      "Hunza Shoping Center",
      "Attabad Lake",
      "Attabad Tunnel",
      "Rakaposhi View Point",
      "Passu Cones",
      "Hussaini Suspension Bridge",
      "KhunjerabPass",
      "Upper Kachura lake",
      "Shangrilla Resort",
      "Shigar fort",
      "Sarfaranga Cold Desert",
      "Manthoka waterfall",
      "Sheosar Lake",
      "Satpara Lake",
      "Bara Pani",
      "Kala Pani",
      "Besham",
      "Dassu waterfall",
      "summer nala",
      "Basha dam Sight",
      "Basho Valley",
      "Basho suspention Bridge"
    ],
    "highlights": [
      "Explore Hunza and Skardu Valleys",
      "Visit Attabad Lake, Passu Cones, and Khunjerab Pass (seasonal)",
      "See Altit and Baltit Forts",
      "Visit Upper Kachura Lake and Shangrilla Resort",
      "Explore Shigar Fort and Sarfaranga Cold Desert",
      "Visit Manthoka Waterfall",
      "Visit Deosai Plains (seasonal) or Basho Valley (seasonal)",
      "Drive along the Karakoram Highway",
      "Cross Babusar Top (seasonal)",
      "Visit Nanga Parbat View Point"
    ],
    "included": [
      "Transport",
      "All Road Toll Taxes",
      "07 Dinner/ 08 Breakfasts",
      "Bonfire",
      "Accommodation at Hotels 7 Nights",
      "Professional Guide",
      "Live BBQ",
      "Instrument for fun activity like Ludo, Card and frisbee etc",
      "Basic First Aid"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Any kind of jeep is not included in the package",
      "Entry Ticket of Altit & Baltit Forts",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDES” list",
      "Dinner (for Premium and Executive Packages)",
      "Jeep charges for Deosai Plains (Rs. 3,000/head)"
    ],
    "hotelList": [
      {
        "location": "Chilas",
        "standard": "Regal Inn",
        "deluxe": "Grace Continental",
        "premium": "Shangrilla Hotel",
        "executive": "Shangrilla Hotel"
      },
      {
        "location": "Naran",
        "standard": "Gateway Hotel",
        "deluxe": "Naran International",
        "premium": "Hotel Homes",
        "executive": "Hotel Homes"
      },
      {
        "location": "Hunza",
        "standard": "Hunza Hidden Palace",
        "deluxe": "Blossom Inn",
        "premium": "Roomy Dastan",
        "executive": "Ambiance Resort"
      },
      {
        "location": "Skardu",
        "standard": "Trout Villa",
        "deluxe": "Hisper Hotel",
        "premium": "Gumaan Resorts",
        "executive": "Gumaan Resorts"
      },
      {
        "location": "Besham",
        "standard": "Ramada Besham",
        "deluxe": "Ramada Besham",
        "premium": "Besham Hilton",
        "executive": "Besham Hilton"
      }
    ],
    "departureSchedule": [
      {
        "city": "Lahore",
        "departure1": "Every Friday night at 10:00 pm",
        "departure2": ""
      },
      {
        "city": "Islamabad",
        "departure1": "Every Saturday morning at 5:00 am",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "32,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "38,000",
        "deluxe": "72,500",
        "premium": "100,000",
        "executive": "117,500"
      },
      "soloSharing": {
        "standard": "48,000",
        "deluxe": "116,000",
        "premium": "165,000",
        "executive": "198,000"
      }
    },
    "exceptions": [
      "Kids age 5-8 : 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Dinner is not inlcuded in Premium and Executive Package.",
      "Jeep charges for Deosai Plains will be Rs. 3,000/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE FROM LHR/ ISB",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 09:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 3:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST"
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - CHILAS",
        "description": "Reach at Islamabad and pick up members from Islamabad - Departure from Islamabad at 04:30 am for Chilas - Short stays on the way - Short stay at Balakot for breakfast - Continue drive towards Chilas - Short stay Naran - Visit Lulusar Lake - Visit Babusar Top - Sightseeing of Water streams on way - Arrival at Chilas and Check in Hotel - Dinner and night stay at Chillas"
      },
      {
        "day": "Day 02",
        "title": "CHILAS - KACHURA LAKE - SKARDU",
        "description": "Breakfast call Departure for Skardu Valley Short stay at Nanga Parbat view point short stay at 3 Mountain Junction point Visit Upper Kachura lake skardu. Visit Shangrilla resort and Shangrilla Lake Arrival to Skardu Overnight at Skardu"
      },
      {
        "day": "Day 03",
        "title": "SKARDU - MANTHOKA - SHIGAR",
        "description": "Breakfast Call Departure for Manthoka waterfall Free time for Enjoyment at Manthoka waterfall Departure for Sarfaranga Cold Desert Arrival to Sarfaranga Cold Desert Free time for activities at Sarfarnga Cold Desert Visit Shigar Fort Visit Amburuq Masjid (if time left) Back to Skardu city Overnight at Skardu Valley"
      },
      {
        "day": "Day 04",
        "title": "SKRADU - BASHO MEADOWS",
        "description": "Breakfast Call Transfer to jeeps On this day, Transfer to 4x4 jeeps for Basho Valley then Departure for Basho Valley Visit Bashu Suspension Bridge Visit Basho Valley Spend whole day there Back to Skardu in the evening Overnight at Skardu"
      },
      {
        "day": "Day 05",
        "title": "SKARDU - HUNZA",
        "description": "Breakfast call Travaling towards Hunza on the way Short stay at Astak Nala Visit Nagar Rakaposhi view point, Visit Altit fort /Baltit fort Visit Karimabad Bazar Dinner and night stay in Hunza"
      },
      {
        "day": "Day 06",
        "title": "HUNZA - ATTABAD LAKE - PASSU CONES - HUNZA",
        "description": "Breakfast call Traveling towards China border (If Opens) Visit Ataabad lake Visit Hussaini bridge/Rainbow Bridge, Visit Passu cones, Visit Passu glaciar Lunch break at Gircha Visit Khunjrab Border (If Opens) Free time for Enjoyment at Khunjrab Border Back to Hunza Overnight at Hunza Valley"
      },
      {
        "day": "Day 07",
        "title": "HUNZA- NARAN",
        "description": "Breakfast call Visit Altit/Baltit Fort Visit Karimbad Bazar Free time for Shopping at Attabad Lake short stay at Rakaposhi view point Departure towards Naran Cover any missing point on the way back. Back to Naran Dinner and Night stay at Naran"
      },
      {
        "day": "Day 08",
        "title": "NARAN - ISB/LHR",
        "description": "Breakfast calls early morning. - Departure for Lahore/Islamabad - Short stops on the way - Short stop at Balakot - Continue drive towards Lahore/Islamabad - Arrival at Lahore/ Islamabad - End of Journey"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 25 adults"
  },
  "13": {
    "id": 13,
    "title": "6 Days Trip to Skardu & Deosai Plains",
    "location": "Gilgit",
    "duration": "6 Days 5 Nights",
    "price": 26000,
    "image": "/skardu6.jpg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "@towardsdestination.pk presents 6 days trip to Skardu & Basho Meadows. Enjoy your Special Moments with us and make your moments more Memorable with your Love ones.",
    "pointsToVisit": [
      "Sightseeing of Balakot",
      "Kiwai Waterfall",
      "Kaghan Valley",
      "Naran Valley",
      "Lake Saif Ul Malook",
      "Sightseeing of Batakundi",
      "Babusar Top",
      "Chillas",
      "Nanga Parbat view point",
      "3 mountain junction point",
      "Shangrila Resort",
      "Skardu valley",
      "lower Kachura Lake",
      "Upper Kachura Lake",
      "Sadpara lake",
      "Mantoka Waterfall",
      "Kharmang Valley",
      "Shigar Valley",
      "Shigar Fort",
      "Deosai Plains",
      "Sheosar Lake",
      "Sarfranga Cold Desert",
      "Katpana cold desert",
      "Skardu city",
      "Chunda Valley",
      "Sightseeing of Besham",
      "Dassu waterfall",
      "Summer Nala",
      "Basha Dam sight",
      "Astak Nala",
      "Basho Valley",
      "Basho Suspension Bridge",
      "Basho waterfall"
    ],
    "highlights": [
      "Explore Skardu Valley and Deosai Plains (seasonal)",
      "Visit Shangrila Resort and Upper/Lower Kachura Lakes",
      "See Manthoka Waterfall and Shigar Fort",
      "Experience Sarfranga/Katpana Cold Deserts",
      "Visit Basho Valley (seasonal)",
      "Drive through Kaghan, Naran, and over Babusar Top (seasonal)",
      "See Nanga Parbat view point and the junction of 3 mighty mountains"
    ],
    "included": [
      "Luxury Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "5 Dinner/ 6 Breakfasts",
      "Bonfire",
      "5 Nights Hotel Accommodation",
      "Instrument For Ludo and Card",
      "Music System",
      "Basic First Aid Kit"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Any Kind of Jeep and Secondary Transport isn't included",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDES” list",
      "Jeep charges for Deosai Plains (Rs. 3,000/head)"
    ],
    "hotelList": [
      {
        "location": "Chilas",
        "standard": "FM Cottages",
        "deluxe": "Grace Continental",
        "premium": "Shangrilla Hotel",
        "executive": "Shangrilla Hotel"
      },
      {
        "location": "Naran",
        "standard": "Gatewat/ Rose Valley",
        "deluxe": "Naran International",
        "premium": "Hotel Homes",
        "executive": "Hotel Homes"
      },
      {
        "location": "Skardu",
        "standard": "Trout Villa",
        "deluxe": "Hisper Hotel",
        "premium": "Gumaan Resorts",
        "executive": "Gumaan Resorts"
      },
      {
        "location": "Besham",
        "standard": "Ramada Besham",
        "deluxe": "Ramada Besham",
        "premium": "Besham Hilton",
        "executive": "Besham Hilton"
      }
    ],
    "departureSchedule": [
      {
        "city": "Lahore",
        "departure1": "Every Friday Night",
        "departure2": ""
      },
      {
        "city": "Islamabad",
        "departure1": "Every Saturday Early Morning",
        "departure2": ""
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "26,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "30,000",
        "deluxe": "52,500",
        "premium": "71,000",
        "executive": "82,500"
      },
      "soloSharing": {
        "standard": "39,000",
        "deluxe": "80,000",
        "premium": "117,000",
        "executive": "140,000"
      }
    },
    "exceptions": [
      "Kids age 5-8 : 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Jeep charges for Deosai Plains will be Rs. 3,000/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE FROM LHR/ ISB",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 09:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 3:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST"
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - CHILAS",
        "description": "Reach at Islamabad and pick up members from Islamabad - Departure from Islamabad at 04:30 am for Chilas - Short stays on the way - Short stay at Balakot for breakfast - Continue drive towards Chilas - Short stay Naran - Visit Lulusar Lake - Visit Babusar Top - Sightseeing of Water streams on way - Arrival at Chilas and Check in Hotel - Dinner and night stay at Chillas"
      },
      {
        "day": "Day 02",
        "title": "CHILAS - KACHURA LAKES - SKARDU",
        "description": "Breakfast call Departure for Skardu Valley Short stay at Nanga Parbat view point short stay at 3 Mountain Junction point Visit Upper Kachura lake skardu. Visit Shangrilla resort and Shangrilla Lake Arrival to Skardu Overnight at Skardu"
      },
      {
        "day": "Day 03",
        "title": "SKARDU - MANTHOKA - SHIGAR",
        "description": "Breakfast Call Departure for Manthoka waterfall Free time for Enjoyment at Manthoka waterfall Departure for Sarfaranga Cold Desert Arrival to Sarfaranga Cold Desert Free time for activities at Sarfarnga Cold Desert Visit Shigar Fort Visit Amburuq Masjid (if time left) Back to Skardu city Overnight at Skardu Valley"
      },
      {
        "day": "Day 04",
        "title": "SKARDU - BASHO MEADOWS",
        "description": "Breakfast Call Transfer to jeeps On this day, Transfer to 4x4 jeeps for Basho Valley then Departure for Basho Valley Visit Bashu Suspension Bridge Visit Basho Valley Spend whole day there Back to Skardu in the evening Overnight at Skardu"
      },
      {
        "day": "Day 05",
        "title": "SKARDU - Naran",
        "description": "Breakfast call Visit Missing points in skardu Spend quality time there Departure back for Naran short stay at Astak Nala Departure towards Naran Cover any missing point on the way back. Back to Naran Dinner and Night stay at Naran"
      },
      {
        "day": "Day 06",
        "title": "NARAN - ISLAMABAD - LAHORE",
        "description": "Breakfast calls early morning. - Departure for Lahore/Islamabad - Short stops on the way - Short stop at Balakot - Continue drive towards Lahore/Islamabad - Arrival at Lahore/ Islamabad - End of Journey"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 20 adults"
  },
  "14": {
    "id": 14,
    "title": "3 Days Trip to Neelum Valley & Arang Kel",
    "location": "Azad Jammu and Kashmir (AJK)",
    "duration": "3 Days 2 Nights",
    "price": 14000,
    "image": "/neelum.jpg",
    "tourType": "Specific Tour",
    "description": "EXPERIENCE THE MESMERIZING VIEW OF NEELUM VALLEY AND ARANG KEL WITH @towardsdestination.pk PVT. LTD. Book your Trip Now and Experience the Beauty of Neelum Valley & Arang Kel with @towardsdestination.pk. @towardsdestination.pk is known for planning and executing the best tours in North Pakistan, including trekking tours, Cycling Tours, Camping Tours, Cultural Tours and much more. Please visit our website to get the complete details of available Pakistan Tour Package. Our tour guides and other local support staff enable a host-guest environment in North Pakistan which others fail to deliver.",
    "pointsToVisit": [
      "Shardah",
      "Kel",
      "Arang Kel",
      "Kutton Waterfall",
      "Dhani Waterfall",
      "Sightseeing of Neelum River and Neelum Jhelum Dam",
      "Keran (LOC)"
    ],
    "highlights": [
      "Explore Neelum Valley",
      "Hike to Arang Kel",
      "Visit Shardah and Kel",
      "See Kutton and Dhani Waterfalls",
      "View of LOC (Line of control) at Keran",
      "Sightseeing of Neelum River and Neelum Jhelum Dam"
    ],
    "included": [
      "Luxury Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "2 Dinner/ 3 Breakfasts",
      "Bonfire",
      "2 Nights Hotel Accommodation",
      "Instrument For Ludo and Card",
      "Music System",
      "Basic First Aid Kit"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDES” list",
      "Jeep Charges for Sharda to Kel (Rs. 2000/head)"
    ],
    "hotelList": [
      {
        "location": "Sharda",
        "standard": "Neelum Continental",
        "deluxe": "Shangrilla Sharda",
        "executive": "Vadi Hotel"
      }
    ],
    "departureSchedule": [
      {
        "city": "Islamabad",
        "departure1": "Every Friday Morning",
        "departure2": "Every Tuesday Morning"
      },
      {
        "city": "Lahore",
        "departure1": "Every Thursday Night",
        "departure2": "Every Monday Night"
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "14,000",
        "deluxe": "Not Available",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "17,000",
        "deluxe": "20,500",
        "premium": "Not Available",
        "executive": "31,000"
      },
      "soloSharing": {
        "standard": "21,500",
        "deluxe": "30,500",
        "premium": "Not Available",
        "executive": "50,500"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Kind of Jeeps and Entry tickets are not included in the package.",
      "Jeep Charges for Sharda to Kel will be Rs. 2000/head.",
      "All the Hotels are subject to availability and can be changed due to issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE FROM LHR/ ISB",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 09:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 3:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST."
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - SHARDA",
        "description": "Pickup members from ISB at 03:30am Departure for Neelum Valley Visit Dhani Waterfall on way Visit Kutton Waterfall Arrival at Shardah Dinner and Night stay at Shardah Musical Night + Bonfire at Shardah Valley"
      },
      {
        "day": "Day 02",
        "title": "SHARDA - KEL - ARANG KEL",
        "description": "Breakfast call at 7:00am Transfer to jeeps and Leave for Arang Kel Arrival at Kel Transfer to Cable car for Arang Kel Start Hiking towards Arang Kel (45 Mins) Explore the beauty of Arang Kel, Spend whole day there and Explore surroundings of Arang kel Start journey back to Shardah Arrival at Shardah Dinner & Over Night at Shardah"
      },
      {
        "day": "Day 03",
        "title": "SHARDA - ISLAMABAD - LAHORE",
        "description": "Breakfast & Drive Back to Lahore / Islamabad Transfer to Buses: 9:00 AM Short stay for lunch on way (Not Included in the package) Arrival at Islamabad at 9:00Pm Arrival at Lahore Late Night"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 20 adults"
  },
  "15": {
    "id": 15,
    "title": "3 Days Trip to Kalam & Malam Jabba, Swat Valley",
    "location": "Khyber Pakhtunkhwa (KPK)",
    "duration": "3 Days 2 Nights",
    "price": 14000,
    "image": "/swat.jpg",
    "groupSize": "Unlimited",
    "tourType": "Specific Tour",
    "description": "EXPERIENCE THE MESMERIZING VIEW OF SWAT VALLEY WITH @towardsdestination.pk PVT. LTD. Book your Trip Now and Experience the Beauty of Swat and Kalam Valley with @towardsdestination.pk. @towardsdestination.pk is known for planning and executing the best tours in North Pakistan, including trekking tours, Cycling Tours, Camping Tours, Cultural Tours and much more. Please visit our website to get the complete details of available Pakistan Tour Package. Our tour guides and other local support staff enable a host-guest environment in North Pakistan which others fail to deliver.",
    "pointsToVisit": [
      "Sightseeing of Swat",
      "Mingora",
      "Swat Valley",
      "Fizaghat",
      "Behrain",
      "Kalam",
      "Mahudhand lake",
      "Paloga Valley",
      "Ushu Forest",
      "Saif ullah Lake"
    ],
    "highlights": [
      "Explore Swat Valley, Kalam, and Malam Jabba",
      "Visit Mahudhand Lake",
      "See Ushu Forest, Paloga Valley, and Saif Ullah Lake",
      "Visit Behrain and Fizaghat"
    ],
    "included": [
      "Luxury Transport",
      "All Road Toll Taxes",
      "Professional Guide",
      "2 Dinner/ 3 Breakfasts",
      "Bonfire",
      "2 Nights Hotel Accommodation",
      "Instrument For Ludo and Card",
      "Music System",
      "Basic First Aid Kit"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Any Kind of Jeep and Secondary Transport isn't included",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the “SERVICES INCLUDES” list"
    ],
    "hotelList": [
      {
        "location": "Kalam",
        "standard": "Holiday Inn",
        "deluxe": "Holiday Inn [Deluxe Rooms]",
        "executive": "Zen Luxus"
      },
      {
        "location": "Fizaghat",
        "standard": "Parkway Hotel",
        "deluxe": "Parkway Hotel [Deluxe Rooms]",
        "executive": "Burj al Swat"
      }
    ],
    "departureSchedule": [
      {
        "city": "Islamabad",
        "departure1": "Every Friday Morning",
        "departure2": "Every Tuesday Morning"
      },
      {
        "city": "Lahore",
        "departure1": "Every Thursday Night",
        "departure2": "Every Monday night"
      }
    ],
    "pricing": {
      "quadSharing": {
        "standard": "14,000",
        "deluxe": "18,500",
        "premium": "Not Available",
        "executive": "Not Available"
      },
      "twinSharing": {
        "standard": "17,000",
        "deluxe": "21,000",
        "premium": "Not Available",
        "executive": "28,500"
      },
      "soloSharing": {
        "standard": "19,000",
        "deluxe": "26,500",
        "premium": "Not Available",
        "executive": "41,500"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "Any Kind of Jeeps and Entry tickets are not included in the package.",
      "Jeep Charges for Sharda to Kel will be Rs. 2000/head.",
      "All the Hotels are subject to availability and can be changed due to issues."
    ],
    "itinerary": [
      {
        "day": "Day 00",
        "title": "DEPARTURE FROM LHR/ ISB",
        "description": "𝐋𝐚𝐡𝐨𝐫𝐞 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 10:00 PM on from Lahore 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Pso Pump Thokar Niaz baig near new Daewoo Terminal, Lahore 𝐈𝐬𝐥𝐚𝐦𝐚𝐛𝐚𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐮𝐫𝐞 𝐏𝐨𝐢𝐧𝐭: 𝐓𝐢𝐦𝐢𝐧𝐠𝐬: 4:30AM from Islamabad 𝐏𝐢𝐜𝐤 𝐔𝐩 𝐏𝐨𝐢𝐧𝐭: Daewoo terminal near EME College NUST"
      },
      {
        "day": "Day 01",
        "title": "ISLAMABAD - MALAM JABBA - FIZAGHAT",
        "description": "Pickup members from ISB at 04:30am Departure for Swat Valley Short stay for Breakfast at Fizaghat Departure for Malam Jabba Visit Malam Jabba Free time for Activities there. Back to fizaghat in the Evening Overnight at Fizaghat/Mingora"
      },
      {
        "day": "Day 02",
        "title": "FIZAGHAT - MAHUDAND LAKE - KALAM",
        "description": "Breakfast call at 7:00am After breakfast Leave for Kalam Valley Short stay at Behrain Valley Arrival to Kalam Transfer to jeep for Mahudhand Lake Visit Ushu forest , Palogha Valley and Saif Ullah Lake Back to Kalam in the Evening. Overnight at Kalam"
      },
      {
        "day": "Day 03",
        "title": "KALAM - BAHRAIN - ISLAMABAD - LAHORE",
        "description": "Breakfast call Early in the morning Departure for Lahore Visit White Palace (if time left) Short stays on the ways Back to Lahore in the night"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for 5 to 20 adults"
  },
  "16": {
    "id": 16,
    "title": "08 Days Pakistan Trip to Shogran & Kashmir Valley (From Karachi)",
    "location": "Shogran & Kashmir Valley",
    "duration": "8 days, 7 nights",
    "price": 38000,
    "image": "/shogran.jpg",
    "groupSize": "24 people",
    "tourType": "Specific Tour",
    "description": "Nature Explorer Tours Presents Shogran & Kashmir valley Trips from Karachi for thier Beloved Clients. Enjoy your Special Moments at Paksitan Trip with us and make your moments more Memorable with your Love ones. If you are looking for Travelling with your Loved ones for Honeymoon or Bacholor Trip to Kashmir & Shogran Valley in one go then just DM us & book your Trip now with us.",
    "pointsToVisit": [
      "Balakot",
      "Kiwai waterfall",
      "Shogran Valley",
      "Siri Paye Meadows",
      "Gari Habib ullah Top",
      "Muzaffrabad",
      "Dhani waterfall",
      "Kutton waterfall",
      "Keran",
      "Upper Neelum",
      "Khanpur Dam"
    ],
    "highlights": [
      "Visit Shogran Valley & Siri Paye Meadows",
      "Explore Kashmir Valley & Upper Neelum",
      "Visit Kiwai, Dhani & Kutton Waterfalls",
      "See Khanpur Dam",
      "Bonfire & Live BBQ",
      "Musical Night"
    ],
    "included": [
      "Transport",
      "All Road Toll Taxes",
      "05 Dinner/ 07 Breakfasts",
      "Hotel pick & Drop from Bus Terminal",
      "Bonfire",
      "Accommodation at Hotels",
      "Professional Guide",
      "Live BBQ",
      "Instrument for fun activity like Ludo, Card and frisbee etc",
      "Basic First Aid"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Any kind of jeep is not included in the package",
      "Entry Ticket of Altit & Baltit Forts",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the \"SERVICES INCLUDED\" list"
    ],
    "hotelList": [
      {
        "location": "KERAN",
        "standard": "Meer continental"
      },
      {
        "location": "ISLAMABAD",
        "standard": "Madcrew Lodges"
      },
      {
        "location": "BALAKOT",
        "standard": "Royal Park"
      }
    ],
    "departureSchedule": [
      {
        "city": "Karachi",
        "departure1": "Every Friday"
      },
      {
        "city": "Islamabad",
        "departure1": "Every Sunday"
      }
    ],
    "pricing": {
      "karachiQuadSharing": {
        "standard": "38,000"
      },
      "karachiTwinSharing": {
        "standard": "52,500"
      },
      "islamabadQuadSharing": {
        "standard": "22,000"
      },
      "islamabadTwinSharing": {
        "standard": "27,500"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "For Karachi Participants: Only Standard hotels will be provided in Islamabad, regardless of the package they choose.",
      "Executive class bus tickets are included in the package. (for Karachi to Islamabad – Islamabad to Karachi Travel)",
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Heater/Ac charges are not included standard package.",
      "Jeep charges for Shogran/Siripaye will be Rs. 2000/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [
      {
        "day": "Day 01",
        "title": "DEPARTURE FROM KARACHI",
        "description": "Pick up Members from Karachi Bus Terminal. Continous drive to Islamabad. Short stays on the ways"
      },
      {
        "day": "Day 02",
        "title": "ARRIVAL TO ISLAMABAD",
        "description": "Arrival to Islamabad and check in hotel"
      },
      {
        "day": "Day 03",
        "title": "DEPARTURE FROM ISLAMABAD",
        "description": "Departure from Islamabad for Kashmir Valley"
      },
      {
        "day": "Day 04",
        "title": "UPPER NEELUM - BALAKOT",
        "description": "Explore Upper Neelum Valley. Visit Kutton waterfall, Keran and other scenic points. Departure for Balakot"
      },
      {
        "day": "Day 05",
        "title": "SHOGRAN VALLEY TOUR",
        "description": "Visit Shogran Valley. Transfer to Jeep for Siri Paye Meadows. Visit Kiwai waterfall. Explore Gari Habib ullah Top"
      },
      {
        "day": "Day 06",
        "title": "BALAKOT - ISLAMABAD",
        "description": "Departure from Balakot to Islamabad. Visit Khanpur Dam on the way. Arrival to Islamabad"
      },
      {
        "day": "Day 07",
        "title": "ISLAMBAD - KARACHI",
        "description": "Departure from Islamabad to Karachi. Overnight journey"
      },
      {
        "day": "Day 08",
        "title": "ARRIVAL TO KARACHI",
        "description": "Arrival to Karachi Bus Terminal"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for groups of 5-25 adults"
  },
  "17": {
    "id": 17,
    "title": "10 Days Pakistan Trip to Swat, Shogran & Kashmir Valley (From Karachi)",
    "location": "Swat, Shogran & Kashmir Valley",
    "duration": "10 days, 9 nights",
    "price": 48000,
    "image": "/swat.jpg",
    "groupSize": "24 people",
    "tourType": "Specific Tour",
    "description": "Nature Explorer Tours Presents Pakistan Trip to Swat, Shogran & Kashmir valley from Karachi for thier Beloved Clients. Enjoy your Special Moments at Paksitan Trip with us and make your moments more Memorable with your Love ones. If you are looking for Travelling with your Loved ones for Honeymoon or Bacholor Trip to Swat, Kashmir & Shogran Valley in one go then just DM us & book your Trip now with us.",
    "pointsToVisit": [
      "Swat Valley",
      "Fizaghat",
      "Malam Jabba",
      "Bahrain",
      "Kalam",
      "Madayan",
      "Ushu Forest",
      "Palogha valley",
      "Mahudhand Lake",
      "Saif ullah Lake",
      "Shangla Top",
      "Balakot",
      "Kiwai waterfall",
      "Shogran Valley",
      "Siri Paye Meadows",
      "Gari Habib ullah Top",
      "Muzaffrabad",
      "Dhani waterfall",
      "Kutton waterfall",
      "Keran",
      "Upper Neelum"
    ],
    "highlights": [
      "Explore Swat Valley, Kalam & Malam Jabba",
      "Visit Mahudhand Lake & Saif ullah Lake",
      "See Shogran Valley & Siri Paye Meadows",
      "Explore Kashmir Valley & Upper Neelum",
      "Visit multiple waterfalls",
      "Bonfire & Live BBQ",
      "Musical Night"
    ],
    "included": [
      "Transport",
      "All Road Toll Taxes",
      "07 Dinner/ 08 Breakfasts",
      "Bonfire",
      "Accommodation at Hotels",
      "Professional Guide",
      "Live BBQ",
      "Instrument for fun activity like Ludo, Card and frisbee etc",
      "Basic First Aid"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Any kind of jeep is not included in the package",
      "Entry Ticket of Altit & Baltit Forts",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the \"SERVICES INCLUDED\" list"
    ],
    "hotelList": [
      {
        "location": "KALAM",
        "standard": "Holiday Inn"
      },
      {
        "location": "KERAN",
        "standard": "Meer continental"
      },
      {
        "location": "BEHRAIN",
        "standard": "Bahrain continental"
      },
      {
        "location": "BALAKOT",
        "standard": "Royal Park"
      },
      {
        "location": "FIZAGHAT",
        "standard": "Peace Hotel"
      }
    ],
    "departureSchedule": [
      {
        "city": "Karachi",
        "departure1": "Every Friday"
      },
      {
        "city": "Islamabad",
        "departure1": "Every Sunday"
      }
    ],
    "pricing": {
      "karachiQuadSharing": {
        "standard": "48,000"
      },
      "karachiTwinSharing": {
        "standard": "62,000"
      },
      "islamabadQuadSharing": {
        "standard": "30,000"
      },
      "islamabadTwinSharing": {
        "standard": "40,000"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "For Karachi Participants: Only Standard hotels will be provided in Islamabad, regardless of the package they choose.",
      "Executive class bus tickets are included in the package. (for Karachi to Islamabad – Islamabad to Karachi Travel)",
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Heater/Ac charges are not included standard package.",
      "Jeep charges for Mahudand lake will be Rs. 1500/head. (Approximately)",
      "Jeep charges for Shogran/Siripaye will be Rs. 2000/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [
      {
        "day": "Day 01",
        "title": "DEPARTURE FROM KARACHI",
        "description": "Pick up Members from Karachi Bus Terminal. Continous drive to Islamabad. Short stays on the ways"
      },
      {
        "day": "Day 02",
        "title": "ARRIVAL TO ISLAMABAD",
        "description": "Arrival to Islamabad and check in hotel"
      },
      {
        "day": "Day 03",
        "title": "DEPARTURE FROM ISLAMABAD",
        "description": "Departure from Islamabad for Kashmir Valley"
      },
      {
        "day": "Day 04",
        "title": "UPPER NEELUM - BALAKOT",
        "description": "Explore Upper Neelum Valley. Visit Kutton waterfall, Keran and other scenic points. Departure for Balakot"
      },
      {
        "day": "Day 05",
        "title": "SHOGRAN VALLEY TOUR",
        "description": "Visit Shogran Valley. Transfer to Jeep for Siri Paye Meadows. Visit Kiwai waterfall. Explore Gari Habib ullah Top"
      },
      {
        "day": "Day 06",
        "title": "BALAKOT - SHANGLA - MALAM JABBA",
        "description": "Departure from Balakot. Drive through Shangla Top. Arrival to Malam Jabba. Explore Malam Jabba ski resort"
      },
      {
        "day": "Day 07",
        "title": "MALAM JABBA - FIZAGHAT",
        "description": "Departure from Malam Jabba to Fizaghat/Mingora. Explore Swat Valley"
      },
      {
        "day": "Day 08",
        "title": "KALAM - MAHUDHAND LAKE",
        "description": "Departure for Kalam Valley. Visit Bahrain, Madayan. Transfer to Jeep for Mahudhand Lake. Visit Ushu Forest, Palogha Valley and Saif Ullah Lake. Back to Kalam"
      },
      {
        "day": "Day 09",
        "title": "KALAM VALLEY - ISLAMABAD",
        "description": "Explore Kalam Valley. Departure for Islamabad. Short stays on the way. Arrival to Islamabad"
      },
      {
        "day": "Day 10",
        "title": "ISLAMBAD - KARACHI",
        "description": "Departure from Islamabad to Karachi. Arrival to Karachi Bus Terminal"
      }
    ],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for groups of 5-25 adults"
  },
  "18": {
    "id": 18,
    "title": "07 Days Trip to Swat Valley (From Karachi)",
    "location": "Swat Valley",
    "duration": "7 days, 6 nights",
    "price": 30000,
    "image": "/swat.jpg",
    "groupSize": "24 people",
    "tourType": "Specific Tour",
    "description": "Nature Explorer Tours Presents 07 Days Trip to Swat valley from Karachi for thier Beloved Clients. Enjoy your Special Moments at Swat Valley with us and make your moments more Memorable with your Love ones. If you are looking for Travelling with your Loved ones for Honeymoon or Bacholor Trip to Hunza Valley then just DM us & book your Trip now with us.",
    "pointsToVisit": [
      "Swat Valley",
      "Fizaghat",
      "Malam Jabba",
      "Bahrain",
      "Kalam",
      "Madayan",
      "Ushu Forest",
      "Palogha valley",
      "Mahudhand Lake",
      "Saif ullah Lake"
    ],
    "highlights": [
      "Explore Swat Valley & Fizaghat",
      "Visit Malam Jabba ski resort",
      "See Kalam & Bahrain",
      "Visit Mahudhand Lake & Saif ullah Lake",
      "Explore Ushu Forest & Palogha valley",
      "Bonfire & Live BBQ"
    ],
    "included": [
      "Transport",
      "All Road Toll Taxes",
      "03 Dinner/ 05 Breakfasts",
      "Bonfire",
      "Accommodation at Hotels 4 Nights",
      "Professional Guide",
      "Live BBQ",
      "Instrument for fun activity like Ludo, Card and frisbee etc",
      "Basic First Aid"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Any kind of jeep is not included in the package",
      "Entry Ticket of Altit & Baltit Forts",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the \"SERVICES INCLUDED\" list"
    ],
    "hotelList": [
      {
        "location": "Fizaghat",
        "standard": "Parkway Hotel",
        "deluxe": "Parkway Hotel",
        "executive": "Burj ul swat"
      },
      {
        "location": "KALAM",
        "standard": "Holday Inn",
        "deluxe": "Holiday Inn",
        "executive": "Zen Lexus"
      }
    ],
    "departureSchedule": [
      {
        "city": "Karachi",
        "departure1": "Every Wednesday",
        "departure2": "Every Sunday"
      },
      {
        "city": "Islamabad",
        "departure1": "Every Friday",
        "departure2": "Every Tuesday"
      }
    ],
    "pricing": {
      "karachiQuadSharing": {
        "standard": "30,000",
        "deluxe": "35,000"
      },
      "karachiTwinSharing": {
        "standard": "37,500",
        "deluxe": "45,000",
        "executive": "52,500"
      },
      "islamabadQuadSharing": {
        "standard": "13,000",
        "deluxe": "17,500"
      },
      "islamabadTwinSharing": {
        "standard": "15,000",
        "deluxe": "20,000",
        "executive": "27,500"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "For Karachi Participants: Only Standard hotels will be provided in Islamabad, regardless of the package they choose.",
      "Executive class bus tickets are included in the package. (for Karachi to Islamabad – Islamabad to Karachi Travel)",
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Heater/Ac charges are not included standard package.",
      "Jeep charges for Mahudand lake will be Rs. 1500/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for groups of 5-25 adults"
  },
  "19": {
    "id": 19,
    "title": "09 Days Trip to Hunza Valley (From Karachi)",
    "location": "Hunza Valley",
    "duration": "9 days, 8 nights",
    "price": 42000,
    "image": "/hunza1.jpg",
    "groupSize": "24 people",
    "tourType": "Specific Tour",
    "description": "Nature Explorer Tours Presents 09 Days Trip to Hunza valley from Karachi for thier Beloved Clients. Enjoy your Special Moments with us and make your moments more Memorable with your Love ones. If you are looking for Travelling with your Loved ones for Honeymoon or Bacholor Trip to Hunza Valley then just DM us & book your Trip now with us.",
    "pointsToVisit": [
      "Mansehra",
      "Karakoram highway",
      "Naran",
      "Kaghan",
      "Kiwai waterfall",
      "Lulusar lake",
      "Babusar Top",
      "Chillas",
      "Nanga Perbat View Point",
      "Junction Point of Three Mightiest Mountains",
      "Gilgit",
      "Altit Fort",
      "Baltit Fort",
      "Hunza Valley",
      "Hunza Shoping Center",
      "Attabad Lake",
      "Attabad Tunnel",
      "Rakaposhi View Point",
      "Passu Cones",
      "Hussaini Suspension Bridge",
      "Khunjerab Pass",
      "Besham",
      "Dassu waterfall",
      "summer nala",
      "Basha dam Sight"
    ],
    "highlights": [
      "Visit Hunza Valley & Karimabad",
      "Explore Attabad Lake & Passu Cones",
      "Drive to Khunjerab Pass (China Border)",
      "Visit Altit & Baltit Forts",
      "See Nanga Parbat View Point",
      "Visit Rakaposhi View Point",
      "Explore Hussaini Suspension Bridge",
      "Bonfire & Live BBQ"
    ],
    "included": [
      "Transport",
      "All Road Toll Taxes",
      "4 Dinner/ 06 Breakfasts",
      "Bonfire",
      "Accommodation at Hotels 7 Nights",
      "Professional Guide",
      "Live BBQ",
      "Instrument for fun activity like Ludo, Card and frisbee etc",
      "Basic First Aid"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Any kind of jeep is not included in the package",
      "Entry Ticket of Altit & Baltit Forts",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the \"SERVICES INCLUDED\" list"
    ],
    "hotelList": [
      {
        "location": "Chilas",
        "standard": "Regal Inn",
        "deluxe": "Grace Continental",
        "premium": "Shangrilla Hotel",
        "executive": "Shangrilla Hotel"
      },
      {
        "location": "Hunza",
        "standard": "Hunza Hidden Palace",
        "deluxe": "Northern Sapphire",
        "premium": "Roomy Dastan",
        "executive": "Luxus Hunza"
      },
      {
        "location": "Besham",
        "standard": "Ramada Besham",
        "deluxe": "Ramada Besham",
        "premium": "Besham Hilton",
        "executive": "Besham Hilton"
      }
    ],
    "departureSchedule": [
      {
        "city": "Karachi",
        "departure1": "Every Thursday (Day Time)"
      },
      {
        "city": "Islamabad",
        "departure1": "Every Saturday morning at 5:00 am"
      }
    ],
    "pricing": {
      "karachiQuadSharing": {
        "standard": "42,000"
      },
      "karachiTwinSharing": {
        "standard": "49,000",
        "deluxe": "58,000",
        "premium": "65,000",
        "executive": "85,000"
      },
      "islamabadQuadSharing": {
        "standard": "21,000"
      },
      "islamabadTwinSharing": {
        "standard": "24,000",
        "deluxe": "32,500",
        "premium": "40,000",
        "executive": "60,000"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "For Karachi Participants: Only Standard hotels will be provided in Islamabad, regardless of the package they choose.",
      "Executive class bus tickets are included in the package. (for Karachi to Islamabad – Islamabad to Karachi Travel)",
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Jeep charges for Naltar Valley will be Rs. 3,000/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for groups of 5-25 adults"
  },
  "20": {
    "id": 20,
    "title": "12 Days Tour package Hunza & Skardu Valley (From Karachi)",
    "location": "Hunza & Skardu Valley",
    "duration": "12 days, 11 nights",
    "price": 50000,
    "image": "/skardu8.jpg",
    "groupSize": "24 people",
    "tourType": "Specific Tour",
    "description": "Nature Explorer Tours Presents 12 Days Trip to Hunza & Skardu valley from Karachi for thier Beloved Clients. Enjoy your Special Moments with us and make your moments more Memorable with your Love ones. If you are looking for Travelling with your Loved ones for Honeymoon or Bacholor Trip then just DM us & book your Trip now with us.",
    "pointsToVisit": [
      "Mansehra",
      "Karakoram highway",
      "Naran",
      "Kaghan",
      "Kiwai waterfall",
      "Lulusar lake",
      "Babusar Top",
      "Chillas",
      "Nanga Perbat View Point",
      "Junction Point of Three Mightiest Mountains",
      "Gilgit",
      "Altit Fort",
      "Baltit Fort",
      "Hunza Valley",
      "Hunza Shoping Center",
      "Attabad Lake",
      "Attabad Tunnel",
      "Rakaposhi View Point",
      "Passu Cones",
      "Hussaini Suspension Bridge",
      "Khunjerab Pass",
      "Upper Kachura lake",
      "Shangrilla Resort",
      "Shigar fort",
      "Sarfaranga Cold Desert",
      "Manthoka waterfall",
      "Sheosar Lake",
      "Satpara Lake",
      "Bara Pani",
      "Kala Pani",
      "Besham",
      "Dassu waterfall",
      "summer nala",
      "Basha dam Sight",
      "Basho Valley",
      "Basho suspention Bridge"
    ],
    "highlights": [
      "Visit Hunza Valley & Skardu Valley",
      "Explore Attabad Lake & Passu Cones",
      "Drive to Khunjerab Pass (China Border)",
      "Visit Altit & Baltit Forts",
      "See Shangrilla Resort & Upper Kachura Lake",
      "Visit Shigar Fort & Sarfaranga Cold Desert",
      "Explore Basho Valley & Suspension Bridge",
      "Visit Sheosar Lake & Satpara Lake",
      "Bonfire & Live BBQ"
    ],
    "included": [
      "Transport",
      "All Road Toll Taxes",
      "07 Dinner/ 08 Breakfasts",
      "Bonfire",
      "Accommodation at Hotels 11 Nights",
      "Professional Guide",
      "Live BBQ",
      "Instrument for fun activity like Ludo, Card and frisbee etc",
      "Basic First Aid"
    ],
    "excluded": [
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, road blocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Lunch isn't included in the package",
      "Any kind of jeep is not included in the package",
      "Entry Ticket of Altit & Baltit Forts",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the \"SERVICES INCLUDED\" list"
    ],
    "hotelList": [
      {
        "location": "Chilas",
        "standard": "Regal Inn",
        "deluxe": "Grace Continental",
        "premium": "Shangrilla Hotel",
        "executive": "Shangrilla Hotel"
      },
      {
        "location": "Gilgit",
        "standard": "Alpine Guest House",
        "deluxe": "Duroyou Inn",
        "premium": "Mandarin Inn",
        "executive": "Serena Hotel"
      },
      {
        "location": "Hunza",
        "standard": "Hunza Hidden Palace",
        "deluxe": "Northern Sapphire",
        "premium": "Roomy Dastan",
        "executive": "Luxus Hunza"
      },
      {
        "location": "Skardu",
        "standard": "Trout Villa",
        "deluxe": "Snowland",
        "premium": "Avari Express",
        "executive": "Himmel"
      },
      {
        "location": "Besham",
        "standard": "Ramada Besham",
        "deluxe": "Ramada Besham",
        "premium": "Besham Hilton",
        "executive": "Besham Hilton"
      }
    ],
    "departureSchedule": [
      {
        "city": "Karachi",
        "departure1": "Every Thursday (Day Time)"
      },
      {
        "city": "Islamabad",
        "departure1": "Every Saturday morning at 5:00 am"
      }
    ],
    "pricing": {
      "karachiQuadSharing": {
        "standard": "50,000"
      },
      "karachiTwinSharing": {
        "standard": "60,000",
        "deluxe": "75,000",
        "premium": "92,500",
        "executive": "120,000"
      },
      "islamabadQuadSharing": {
        "standard": "30,000"
      },
      "islamabadTwinSharing": {
        "standard": "35,000",
        "deluxe": "50,000",
        "premium": "67,500",
        "executive": "95,000"
      }
    },
    "exceptions": [
      "Kids age 5-8: 50% charges and given jumper seat.",
      "Kids age <= 4: Free and given jumper seat if available or Lap"
    ],
    "notes": [
      "For Karachi Participants: Only Standard hotels will be provided in Islamabad, regardless of the package they choose.",
      "Executive class bus tickets are included in the package. (for Karachi to Islamabad – Islamabad to Karachi Travel)",
      "Any Type of Jeep charges and Entry Tickets are not included in the package.",
      "Jeep charges for Basho Meadows will be Rs. 2,000/head. (Approximately)",
      "All the Hotels are subject to availability and can be changed due to availability issues."
    ],
    "itinerary": [],
    "contact": {
      "email": "Info.Towardsdestination@gmail.com",
      "whatsapp": "+92315-3309070",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": "Group Discount Offer: 5% discount for groups of 5-25 adults"
  },
  "21": {
    "id": 21,
    "title": "Discover Pakistan: Hunza | Skardu | Lahore | Islamabad (8 Days Trip)",
    "location": "Hunza, Skardu, Lahore & Islamabad",
    "duration": "8 Days 7 Nights",
    "price": 455,
    "image": "/hunza1.jpg",
    "groupSize": "17 people",
    "tourType": "Daily Tour",
    "description": "Nature Explorer tours Offers Discover Pakistan: Hunza | Skardu | Lahore | Islamabad Package for their beloved clients. If you are looking for comfortable Trip to North Pakistan in one go then you are at right place. We have a Various range of trekking tours in north Pakistan. People who are looking for adventurous tours then these Tour Package are recommended. Experience the beauty of Pakistan with this amazing journey. Explore the peaceful valleys of Hunza and Skardu, full of natural wonders. Visit Lahore for its rich culture and history, and enjoy the modern charm of Islamabad. Travel by road and air for a smooth and memorable trip!",
    "pointsToVisit": [
      "Islamabad",
      "Naran Valley",
      "Gilgit",
      "Hunza Valley",
      "Attabad Lake",
      "Passu Cones",
      "Khunjerab Pass",
      "Altit Fort",
      "Baltit Fort",
      "Naltar Valley",
      "Skardu Valley",
      "Shangrila Resort",
      "Upper Kachura Lake",
      "Shigar Valley",
      "Manthoka Waterfall",
      "Saif ul Malook Lake",
      "Lahore",
      "Badshahi Mosque",
      "Lahore Fort",
      "Minar-e-Pakistan"
    ],
    "highlights": [
      "Explore Hunza Valley & Skardu Valley",
      "Visit Attabad Lake with boating",
      "Drive to Khunjerab Pass (China Border)",
      "Visit Altit & Baltit Forts",
      "Explore Naltar Valley & SOQ Valley",
      "Visit Shangrila Resort & Upper Kachura Lake",
      "See Manthoka Waterfall",
      "Visit Saif ul Malook Lake",
      "Explore Lahore's historical sites",
      "Traditional Musical Night with Bonfire",
      "Domestic Air Ticket included (one side)"
    ],
    "included": [
      "Warm welcome at Airport",
      "Transportation",
      "Fuel/Toll tax/Challan/Driver/Guide",
      "Domestic Air Ticket (one side)",
      "07 Nights Hotel accommodation (Twin Sharing)",
      "Meal: Full Board (7 Breakfast-7 Lunches- 8 Dinners)",
      "Visa support/invitation letter for travelling",
      "Jeeps for Naltar, SOQ Valley and Saif ul Malook Lake",
      "Tickets for Altit/Baltit fort/Shangrila Resort/ Manthoka Waterfall/ Khunjrab National Park",
      "Boating at Attabad Lake",
      "Traditional Musical Night with Bonfire",
      "Unlimited water bottles during travelling"
    ],
    "excluded": [
      "International Flight Tickets",
      "Laundry, Phone Calls & Other Personal Expenses.",
      "Extra expense due to land sliding, roadblocks, bad weather and other political reasons.",
      "Personal insurance.",
      "Rescue, Helicopter coverage.",
      "Tips for Guide, porter & cook",
      "Anything not mentioned in the \"SERVICES INCLUDED\" list"
    ],
    "hotelList": [
      {
        "location": "Islamabad",
        "standard": "Green Line Motel / Hotel Red Line / Grand Islamabad Hotel",
        "deluxe": "Envoy Continental Hotel / Grand Hotel / Roomy",
        "executive": "Ramada Hotel / Hill View / Best Western"
      },
      {
        "location": "Naran Valley",
        "standard": "Cloud Way Hotel / Gateway Hotel",
        "deluxe": "Hotel Home / Northern Retreat / Fairyland Hotel",
        "executive": "Hotel Sarai / Maisonette Hotel and Resort"
      },
      {
        "location": "Gilgit",
        "standard": "Gateway Hotel / Alpine Guest House",
        "deluxe": "Duroyou Inn Gilgit / Heritage Hotel / Mandarin Inn Hotel",
        "executive": "Serena Hotel Gilgit / Riverdale Hotel"
      },
      {
        "location": "Hunza Valley",
        "standard": "Hunza Hidden Palace / Darvesh Hotel / Campo de Berg",
        "deluxe": "Grand Motel Hunza / Tribes and Tales / Passu Tourist Lodges",
        "executive": "Monarch Resort / Famree Resort / Hunza Darbar / Luxus Hotel Attabad Lake / Hard Rocks"
      },
      {
        "location": "Besham",
        "standard": "Ramada Hotel / Besham Continental",
        "deluxe": "Besham Hilton Hotel",
        "executive": "Besham Hilton Hotel / Besham Continental"
      },
      {
        "location": "Skardu",
        "standard": "Trout Villa Hotel / Skardu Viewpoint / Baltistan Resort",
        "deluxe": "Space Hotel Shigar / Maple Hotel / Himalaya Inn",
        "executive": "La Vista Resort / Shangrila Hotel / Khoj Resort / Serena Hotel Shigar Valley / Serena Hotel Khaplu Valley / Byrsa"
      },
      {
        "location": "Lahore",
        "standard": "Hotel Shanghai / Mars Hotel / Lahore Continental",
        "deluxe": "Fallet's Express Hotel / Hilton Suites",
        "executive": "Ramada by Wyndham / Four Points Inn"
      }
    ],
    "departureSchedule": [],
    "pricing": {
      "foreignerPricing": {
        "standard": "USD 455 PER PAX",
        "deluxe": "USD 625 PER PAX",
        "executive": "USD 1000 PER PAX"
      }
    },
    "exceptions": [],
    "notes": [
      "All hotels are subject to availability and can be changed according to the circumstances.",
      "In such case the equivalent hotel to the said hotel will be provided",
      "This package is designed for foreign tourists",
      "Visa support/invitation letter for travelling is included",
      "Full board meals included (Breakfast, Lunch, Dinner)",
      "Domestic air ticket (one side) is included in the package"
    ],
    "itinerary": [],
    "contact": {
      "email": "info@natureexplorertours.com",
      "whatsapp": "+92312-0506457",
      "instagram": "@towardsdestination.pk"
    },
    "bulkDiscount": null
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

  const handleWhatsAppInquiry = () => {
    const whatsappNumber = "923153309070";
    const message = `Hello! I'm interested in the tour package: ${pkg.title}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section with Breadcrumb and Title */}
      <section className="bg-white border-b border-gray-200 pt-40 pb-10">
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
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Content - Takes 2 columns */}
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
              
              {/* WhatsApp Inquiry Button */}
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
                  <MapPin className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Tour Type</div>
                    <div className="font-semibold text-gray-900">{pkg.tourType || "By Road"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="text-sm text-gray-600">Group Size</div>
                    <div className="font-semibold text-gray-900">{pkg.groupSize || "Varies"}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose */}
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose the {pkg.title}?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg font-light tracking-wide">
                This package blends natural beauty, tranquility, and adventure, making it an ideal choice for travelers. From exploring scenic valleys to enjoying peaceful moments, every aspect is filled with memorable experiences and relaxation.
              </p>
            </section>

            {/* Pricing Table */}
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Options</h2>
              
              {/* Standard Pricing Table (for most packages) */}
              {pkg.pricing && (pkg.pricing.quadSharing || pkg.pricing.twinSharing || pkg.pricing.soloSharing) && (
                <div className="overflow-x-auto mb-6">
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
                      {pkg.pricing.quadSharing && (
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="border text-black border-gray-300 px-4 py-3 font-semibold">Quad Sharing</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.quadSharing?.standard}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.quadSharing?.deluxe}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.quadSharing?.premium}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.quadSharing?.executive}</td>
                        </tr>
                      )}
                      {pkg.pricing.twinSharing && (
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="border text-black border-gray-300 px-4 py-3 font-semibold">Twin Sharing</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.twinSharing?.standard}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.twinSharing?.deluxe}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.twinSharing?.premium}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">PKR {pkg.pricing.twinSharing?.executive}</td>
                        </tr>
                      )}
                      {pkg.pricing.soloSharing && (
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="border text-black border-gray-300 px-4 py-3 font-semibold">Solo Sharing</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.soloSharing?.standard}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.soloSharing?.deluxe}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.soloSharing?.premium}</td>
                          <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{pkg.pricing.soloSharing?.executive}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Special Pricing (from Islamabad/Lahore) - For Honeymoon packages */}
              {pkg.pricing && (pkg.pricing.fromIslamabad || pkg.pricing.fromLahore) && (
                <div className="space-y-4 mb-6">
                  {pkg.pricing.fromIslamabad && (
                    <div className="bg-white border border-gray-300 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">From Islamabad</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Standard Package</div>
                          <div className="text-2xl font-bold text-green-700">PKR {pkg.pricing.fromIslamabad.standard_per_couple}</div>
                          <div className="text-xs text-gray-500">Per Couple</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Deluxe Package</div>
                          <div className="text-2xl font-bold text-green-700">PKR {pkg.pricing.fromIslamabad.deluxe_per_couple}</div>
                          <div className="text-xs text-gray-500">Per Couple</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Executive Package</div>
                          <div className="text-2xl font-bold text-green-700">PKR {pkg.pricing.fromIslamabad.executive_per_couple}</div>
                          <div className="text-xs text-gray-500">Per Couple</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {pkg.pricing.fromLahore && (
                    <div className="bg-white border border-gray-300 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">From Lahore</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Standard Package</div>
                          <div className="text-2xl font-bold text-blue-700">PKR {pkg.pricing.fromLahore.standard_per_couple}</div>
                          <div className="text-xs text-gray-500">Per Couple</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Deluxe Package</div>
                          <div className="text-2xl font-bold text-blue-700">PKR {pkg.pricing.fromLahore.deluxe_per_couple}</div>
                          <div className="text-xs text-gray-500">Per Couple</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Executive Package</div>
                          <div className="text-2xl font-bold text-blue-700">PKR {pkg.pricing.fromLahore.executive_per_couple}</div>
                          <div className="text-xs text-gray-500">Per Couple</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Karachi Specific Pricing */}
              {pkg.pricing && (pkg.pricing.karachiQuadSharing || pkg.pricing.karachiTwinSharing) && (
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-orange-300 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">From Karachi</h3>
                    
                    {/* Quad Sharing */}
                    {pkg.pricing.karachiQuadSharing && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Quad Sharing (4 Persons in one Room)</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {pkg.pricing.karachiQuadSharing.standard && (
                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="text-xs text-gray-600 mb-1">Standard</div>
                              <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiQuadSharing.standard}</div>
                            </div>
                          )}
                          {pkg.pricing.karachiQuadSharing.deluxe && (
                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="text-xs text-gray-600 mb-1">Deluxe</div>
                              <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiQuadSharing.deluxe}</div>
                            </div>
                          )}
                          {pkg.pricing.karachiQuadSharing.premium && (
                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="text-xs text-gray-600 mb-1">Premium</div>
                              <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiQuadSharing.premium}</div>
                            </div>
                          )}
                          {pkg.pricing.karachiQuadSharing.executive && (
                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="text-xs text-gray-600 mb-1">Executive</div>
                              <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiQuadSharing.executive}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Twin Sharing */}
                    {pkg.pricing.karachiTwinSharing && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Twin Sharing (2 Persons in one Room)</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {pkg.pricing.karachiTwinSharing.standard && (
                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="text-xs text-gray-600 mb-1">Standard</div>
                              <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiTwinSharing.standard}</div>
                            </div>
                          )}
                          {pkg.pricing.karachiTwinSharing.deluxe && (
                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="text-xs text-gray-600 mb-1">Deluxe</div>
                              <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiTwinSharing.deluxe}</div>
                            </div>
                          )}
                          {pkg.pricing.karachiTwinSharing.premium && (
                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="text-xs text-gray-600 mb-1">Premium</div>
                              <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiTwinSharing.premium}</div>
                            </div>
                          )}
                          {pkg.pricing.karachiTwinSharing.executive && (
                            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="text-xs text-gray-600 mb-1">Executive</div>
                              <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiTwinSharing.executive}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-white border border-blue-300 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">From Islamabad</h3>
                    
                    {/* Quad Sharing */}
                    {pkg.pricing.islamabadQuadSharing && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Quad Sharing (4 Persons in one Room)</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {pkg.pricing.islamabadQuadSharing.standard && (
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="text-xs text-gray-600 mb-1">Standard</div>
                              <div className="text-lg font-bold text-blue-700">PKR {pkg.pricing.islamabadQuadSharing.standard}</div>
                            </div>
                          )}
                          {pkg.pricing.islamabadQuadSharing.deluxe && (
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="text-xs text-gray-600 mb-1">Deluxe</div>
                              <div className="text-lg font-bold text-blue-700">PKR {pkg.pricing.islamabadQuadSharing.deluxe}</div>
                            </div>
                          )}
                          {pkg.pricing.islamabadQuadSharing.premium && (
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="text-xs text-gray-600 mb-1">Premium</div>
                              <div className="text-lg font-bold text-blue-700">PKR {pkg.pricing.islamabadQuadSharing.premium}</div>
                            </div>
                          )}
                          {pkg.pricing.islamabadQuadSharing.executive && (
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="text-xs text-gray-600 mb-1">Executive</div>
                              <div className="text-lg font-bold text-blue-700">PKR {pkg.pricing.islamabadQuadSharing.executive}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Twin Sharing */}
                    {pkg.pricing.islamabadTwinSharing && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Twin Sharing (2 Persons in one Room)</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {pkg.pricing.islamabadTwinSharing.standard && (
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="text-xs text-gray-600 mb-1">Standard</div>
                              <div className="text-lg font-bold text-blue-700">PKR {pkg.pricing.islamabadTwinSharing.standard}</div>
                            </div>
                          )}
                          {pkg.pricing.islamabadTwinSharing.deluxe && (
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="text-xs text-gray-600 mb-1">Deluxe</div>
                              <div className="text-lg font-bold text-blue-700">PKR {pkg.pricing.islamabadTwinSharing.deluxe}</div>
                            </div>
                          )}
                          {pkg.pricing.islamabadTwinSharing.premium && (
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="text-xs text-gray-600 mb-1">Premium</div>
                              <div className="text-lg font-bold text-blue-700">PKR {pkg.pricing.islamabadTwinSharing.premium}</div>
                            </div>
                          )}
                          {pkg.pricing.islamabadTwinSharing.executive && (
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="text-xs text-gray-600 mb-1">Executive</div>
                              <div className="text-lg font-bold text-blue-700">PKR {pkg.pricing.islamabadTwinSharing.executive}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Foreigner Pricing (USD) */}
              {pkg.pricing && pkg.pricing.foreignerPricing && (
                <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-300 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🌍 International Package Pricing (USD)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pkg.pricing.foreignerPricing.standard && (
                      <div className="text-center p-4 bg-white rounded-lg border-2 border-green-200">
                        <div className="text-sm text-gray-600 mb-2">Standard Package</div>
                        <div className="text-3xl font-bold text-green-700">{pkg.pricing.foreignerPricing.standard}</div>
                        <div className="text-xs text-gray-500 mt-2">Per Person</div>
                      </div>
                    )}
                    {pkg.pricing.foreignerPricing.deluxe && (
                      <div className="text-center p-4 bg-white rounded-lg border-2 border-green-200">
                        <div className="text-sm text-gray-600 mb-2">Deluxe Package</div>
                        <div className="text-3xl font-bold text-green-700">{pkg.pricing.foreignerPricing.deluxe}</div>
                        <div className="text-xs text-gray-500 mt-2">Per Person</div>
                      </div>
                    )}
                    {pkg.pricing.foreignerPricing.executive && (
                      <div className="text-center p-4 bg-white rounded-lg border-2 border-green-200">
                        <div className="text-sm text-gray-600 mb-2">Executive Package</div>
                        <div className="text-3xl font-bold text-green-700">{pkg.pricing.foreignerPricing.executive}</div>
                        <div className="text-xs text-gray-500 mt-2">Per Person</div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">✈️ Includes: Domestic Air Ticket (one side) | Full Board Meals | Visa Support</p>
                  </div>
                </div>
              )}

              {/* Couple Package Pricing */}
              {pkg.pricing && pkg.pricing.couplePackage && (
                <div className="bg-linear-to-r from-pink-50 to-purple-50 border-2 border-pink-300 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💑 Couple Package</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-700">PKR {pkg.pricing.couplePackage.standard}</div>
                    <div className="text-sm text-gray-600 mt-2">Special package for couples</div>
                  </div>
                </div>
              )}

              {/* Karachi Addon Pricing */}
              {pkg.pricing && pkg.pricing.karachiAddon && (
                <div className="bg-linear-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">✈️ Additional Charges for Karachi Participants</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded p-4">
                        <div className="text-sm text-gray-600 mb-1">Economy Train</div>
                        <div className="text-xl font-bold text-orange-700">PKR {pkg.pricing.karachiAddon.economyTrain}</div>
                      </div>
                      <div className="bg-white rounded p-4">
                        <div className="text-sm text-gray-600 mb-1">Business Train</div>
                        <div className="text-xl font-bold text-orange-700">PKR {pkg.pricing.karachiAddon.businessTrain}</div>
                      </div>
                      <div className="bg-white rounded p-4">
                        <div className="text-sm text-gray-600 mb-1">Bus</div>
                        <div className="text-xl font-bold text-orange-700">PKR {pkg.pricing.karachiAddon.bus}</div>
                      </div>
                      <div className="bg-white rounded p-4">
                        <div className="text-sm text-gray-600 mb-1">Air</div>
                        <div className="text-xl font-bold text-orange-700">{pkg.pricing.karachiAddon.air}</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-orange-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Hotel Charges in Islamabad (2 Nights)</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded p-3">
                          <div className="text-sm text-gray-600">Quad Sharing</div>
                          <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiAddon.hotelQuad}</div>
                        </div>
                        <div className="bg-white rounded p-3">
                          <div className="text-sm text-gray-600">Twin Sharing</div>
                          <div className="text-lg font-bold text-orange-700">PKR {pkg.pricing.karachiAddon.hotelTwin}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Exceptions */}
              {pkg.exceptions && pkg.exceptions.length > 0 && (
                <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
                  <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2 text-lg">
                    <span>⚠️</span> Exceptions:
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
              
              {/* Notes */}
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

            {/* Departure Note (for packages with custom schedule) */}
            {pkg.departureNote && (
              <section className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Departure Information</h2>
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-8 h-8 text-blue-700 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-xl">Flexible Departure Dates</h3>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        <FormattedText text={pkg.departureNote} />
                      </p>
                    </div>
                  </div>
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
                        
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name "
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email "
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone/WhatsApp "
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900 placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Your Message or Inquiry "
                        
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
                    <a href="mailto:Info.Towardsdestination@gmail.com" className="text-sm hover:text-green-600 transition-colors">
                      Info.Towardsdestination@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <Footer />
    </div>
  );
}
