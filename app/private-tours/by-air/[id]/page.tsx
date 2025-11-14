"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Calendar, Plane, Check, X, Phone, Mail, Send, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const packageDetails: any = {
  "1": {
    id: 1,
    title: "Honeymoon in Hunza & Skardu 7 Days – By Air",
    location: "Hunza & Skardu",
    duration: "7 Days 6 Nights",
    price: null,
    image: "/hunza1.jpg",
    groupSize: "2 people",
    tourType: "Daily Tour",
    description: "Embark on a 7-day honeymoon in Hunza and Skardu by air, designed for couples seeking romance, adventure, and breathtaking landscapes. This exclusive getaway offers a blend of luxury, culture, and nature, making it the perfect honeymoon experience.",
    pointsToVisit: [
      "Scenic Flight to Gilgit",
      "Luxury Honeymoon Stays",
      "Attabad Lake Boat Ride",
      "Eagle’s Nest Sunset",
      "Baltit & Altit Forts",
      "Deosai National Park",
      "Shangrila & Upper Kachura Lake",
      "Cold Desert of Skardu"
    ],
    highlights: [
      "Scenic Flight to Gilgit",
      "Luxury Honeymoon Stays",
      "Attabad Lake Boat Ride",
      "Eagle’s Nest Sunset",
      "Baltit & Altit Forts",
      "Deosai National Park",
      "Shangrila & Upper Kachura Lake",
      "Cold Desert of Skardu"
    ],
    included: [
      "Transport (Toyota Corolla/Toyota Parado)",
      "Fuel/Toll Tax/Challan/Driver/Guide",
      "7 Days,6 Nights",
      "6 Breakfasts",
      "Jeeps for Basho Valley",
      "Jeeps for Naltar",
      "Destination Photoshoot (will be charged separately)",
      "Bonfire",
      "Music Instrument"
    ],
    excluded: [
      "Any kind of Activity Charges",
      "No Other Food Than Breakfast",
      "Any kind of Entry Tickets"
    ],
    hotelList: [
      { location: "Skardu", standard: "Trout Villa", deluxe: "Gumaan Resort", executive: "Gumaan Resort" },
      { location: "Hunza", standard: "Hunza Hidden Palace", deluxe: "Northern Sapphire", executive: "Luxus Hunza" },
      { location: "Gilgit", standard: "Alpine Guest House", deluxe: "Duroyou Inn", executive: "Serena Gilgit" }
    ],
    departureSchedule: [
      { city: "Islamabad", departure1: "Flight to Skardu (PIA/Air Blue)", departure2: "—" },
      { city: "Lahore", departure1: "Flight to Skardu (PIA/Air Blue)", departure2: "—" },
      { city: "Karachi", departure1: "Flight to Skardu (PIA/Air Blue)", departure2: "—" }
    ],
    pricing: {
      "sedanCar_perCouple": { 
        "standard": "PKR 180,000/-", 
        "deluxe": "PKR 240,000/-", 
        "executive": "PKR 295,000/-" 
      },
      "jeep4x4_perCouple": { 
        "standard": "PKR 220,000/-", 
        "deluxe": "PKR 280,000/-", 
        "executive": "PKR 240,000/-" 
      }
    },
    exceptions: null,
    notes: [
      "AIR FARES are not included in the Package. They will be charged separately according to the dates chose by clients.",
      "Hotels can be change according to availability."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Lahore/islamabad - Skardu valley",
        description: "Pick up members from Skardu Airport\nArrival at Hotel and Check in\nAfter check in leave for Shangrilla Lake\nVisit Lower Kachura Lake and Shangrilla Resort\nFree time for activities at lake\nVisit Upper Kachura Lake\nOvernight stay in Skardu"
      },
      {
        day: "Day 02",
        title: "Sarfaranga Cold Desert - Manthoka Waterfall",
        description: "Breakfast call\nAfter breakfast Departure for Manthoka waterfall\nFree time for Enjoyment at Manthoka waterfall\nDeparture Sarfaranga Cold Desert\nVisit Sarfaranga Cold Desert\nFree time for Activities there (Jeep Safari, Paragliding etc.)\nVisit Shigar Fort\nvisit Amburuk Mosque\nVisit Blind Lake (if time allows)\nBack to hotel in the evening\nOvernight stay at Skardu"
      },
      {
        day: "Day 03",
        title: "Chocolate Rocks - Basho Valley",
        description: "Breakfast call\nAfter breakfast visit Chocolate Rocks\nTransfer to 4x4 jeeps for Basho Meadows\nExplore the beauty of Basho Meadows\nVisit Basho Suspension Bridge\nBack to hotel in the evening\nOvernight stay at Skardu"
      },
      {
        day: "Day 04",
        title: "Skardu to Hunza",
        description: "After breakfast Departure for Hunza Valley \nShort stay at Astak Nala \nVisit Rakaposhi view point \nVisit Altit Fort & Baltit Fort (If time allows, otherwise will visit on return) \nFree time for shopping at Karimabad bazar \nArrival at Hunza and Check in Hotel \nDinner and Night stay in Skardu"
      },
      {
        day: "Day 05",
        title: "Explore Hunza- Attabad Lake - Passu Cones",
        description: "After breakfast Departure for Khunjrab Pass \nVisit Attabad Lake by crossing the longest tunnel beside Attabad \nLake. \nVisit of Suspension Bridge Hussaini Bridge \nVisit borith lake \nShort stay at Passu Cones and Glacier View Point. \nVisit Khunjrab Border (if road is open) \nDrive back to Hunza \nDinner & Night at Hunza"
      },
      {
        day: "Day 06",
        title: "Hunza - Naltar",
        description: "Breakfast call \nArrival to Nomal Valley \nTransfer to Jeep for Naltar Valley \nVisit Naltar Valley \nVisit Satrangi Lake \nvisit Blue Water Lake \nExplore the Beauty of Naltar Valley \nAfter Visiting Naltar and Leave for Gilgit \nDinner and Night stay at Gilgit"
      },
      {
        day: "Day 07",
        title: "Fly Back Home",
        description: "Breakfast call \n• After Breakfast leave for Gilgit Airport \n• Drop off at Gilgit Airport \n• Fly back to Islamabad"
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+923120506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  },
  "2": {
    id: 2,
    title: "3-Day Honeymoon in Hunza – By Air",
    location: "Hunza",
    duration: "3 Days 2 Nights",
    price: null,
    image: "/hunza1.jpg",
    groupSize: "2 people",
    tourType: "Daily Tour",
    description: "Escape to Hunza Valley with a 3-day honeymoon package by air, designed for couples seeking breathtaking landscapes, luxury, and intimate moments. This trip blends serene beauty, rich culture, and adventure, creating a perfect getaway for newlyweds.",
    pointsToVisit: [
      "Scenic Flight to Gilgit",
      "Luxury Stay with a Romantic Setup",
      "Attabad Lake Cruise",
      "Eagle’s Nest Sunrise",
      "Baltit & Altit Forts"
    ],
    highlights: [
      "Scenic Flight to Gilgit",
      "Luxury Stay with a Romantic Setup",
      "Attabad Lake Cruise",
      "Eagle’s Nest Sunrise",
      "Baltit & Altit Forts"
    ],
    included: [
      "Transport (Toyota Corolla/Toyota Parado)",
      "Fuel/Toll Tax/Challan/Driver/Guide",
      "3 Days,2 Nights",
      "2 Breakfasts",
      "Destination Photoshoot (will be charged separately)",
      "Bonfire",
      "Music Instrument"
    ],
    excluded: [
      "Any kind of Activity Charges",
      "No Other Food Than Breakfast",
      "Any kind of Entry Tickets"
    ],
    hotelList: [
      { location: "Hunza", standard: "Hunza Hidden Palace", deluxe: "Northern Sapphire", executive: "Luxus Hunza" }
    ],
    departureSchedule: [
      { city: "Islamabad/Lahore/Karachi", departure1: "Flight to Gilgit (PIA/Air Blue)", departure2: "—" }
    ],
    pricing: {
      "sedanCar_perCouple": { 
        "standard": "PKR 85,000/-", 
        "deluxe": "PKR 110,000/-", 
        "executive": "PKR 130,000/-" 
      },
      "jeep4x4_perCouple": { 
        "standard": "PKR 95,000/-", 
        "deluxe": "PKR 120,000/-", 
        "executive": "PKR 140,000/-" 
      }
    },
    exceptions: null,
    notes: [
      "AIR FARES are not included in the Package. They will be charged separately according to the dates chose by clients.",
      "Hotels can be change according to availability."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Lahore/islamabad - Gilgit Airport",
        description: "Pickup Members from Gilgit Airport \nDeparture for Hunza Valley \nSightseeing of Indus River \nVisit Rakaposhi viewpoint \nArrival in Hunza \nVisit Altit and Baltit fort \nVisit karimabad Shoping Center \nVisit Duikar for sunset (Also called as Eagle Nest point) \nBack to Hotel and check in Hotel \nNight stay and Dinner in Hunza"
      },
      {
        day: "Day 02",
        title: "Exploring Hunza Valley",
        description: " Breakfast Call \nAfter Breakfast leave for Khunjrab \nExperience the car drive of 2nd Longest Tunnel of Pakistan (Attabad \nTunnel) \nVisit Attabad Lake \nVisit Passu Cones \nVisit Hussaini Suspension Bridge \nVisit Khunerab Pass \nBack to Hunza and Visit Karimabad Bazar \nOvernight stay in Hunza \nNight stay and Dinner in Hunza"
      },
      {
        day: "Day 03",
        title: "Fly Back to Home",
        description: "Breakfast call\nAfter Breakfast leave for Gilgit Airport\nDrop off at Gilgit Airport\nFly back to Islamabad"
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+923120506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  },
  "3": {
    id: 3,
    title: "4 Days By Air Honeymoon Package for Hunza Valley",
    location: "Gilgit",
    duration: "4 Days 3 Nights",
    price: null,
    image: "/hunza1.jpg",
    groupSize: "2 people",
    tourType: "Daily Tour",
    description: "Embark on a 4-day by air trip to Hunza Valley, where nature, history, and adventure come together for an unforgettable experience. Located in Gilgit-Baltistan, Hunza is renowned for its snow-capped peaks, crystal-clear lakes, and centuries-old forts. This tour ensures comfort and convenience, making it perfect for a short yet immersive getaway.",
    pointsToVisit: [
      "Scenic Flight to Gilgit",
      "Attabad Lake & Passu Cones",
      "Baltit & Altit Forts",
      "Eagle’s Nest Viewpoint",
      "Local Culture & Cuisine",
      "Naltar Valley"
    ],
    highlights: [
      "Scenic Flight to Gilgit – Fly over the majestic Karakoram Range.",
      "Attabad Lake & Passu Cones – Witness the stunning turquoise lake and dramatic rock formations.",
      "Baltit & Altit Forts – Step into Hunza’s rich history.",
      "Eagle’s Nest Viewpoint – Enjoy panoramic sunrise and sunset views.",
      "Local Culture & Cuisine – Indulge in traditional Hunza dishes and meet warm, hospitable locals."
    ],
    included: [
      "Transport (Toyota Corolla/Toyota Parado)",
      "Fuel/Toll Tax/Challan/Driver/Guide",
      "4 Days,3 Nights",
      "3 Breakfasts",
      "Jeeps for Naltar",
      "Destination Photoshoot (will be charged separately)",
      "Bonfire",
      "Music Instrument"
    ],
    excluded: [
      "Any kind of Activity Charges",
      "No Other Food Than Breakfast",
      "Any kind of Entry Tickets"
    ],
    hotelList: [
      { location: "Hunza", standard: "Hunza Hidden Palace", deluxe: "Dastan By Roomy", executive: "Luxus Hunza" },
      { location: "Gilgit", standard: "Duroyou Inn", deluxe: "Destination Hotel", executive: "Ramada Gilgit" }
    ],
    departureSchedule: [
      { city: "Islamabad/Lahore/Karachi", departure1: "Flight to Gilgit (PIA/Air Blue)", departure2: "—" }
    ],
    pricing: {
      "sedanCar_perCouple": { 
        "standard": "PKR 105,000/-", 
        "deluxe": "PKR 135,000/-", 
        "executive": "PKR 170,000/-" 
      },
      "jeep4x4_perCouple": { 
        "standard": "PKR 125,000/-", 
        "deluxe": "PKR 155,000/-", 
        "executive": "PKR 190,000/-" 
      }
    },
    exceptions: null,
    notes: [
      "AIR FARES are not included in the Package. They will be charged separately according to the client selected dates.",
      "Hotels can be change according to availability."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Lahore/islamabad - Gilgit Airport",
        description: "Pickup Members from Gilgit Airport \nDeparture for Hunza Valley \nSightseeing of Indus River \nVisit Rakaposhi viewpoint \nArrival in Hunza \nVisit Altit and Baltit fort \nVisit karimabad Shoping Center \nVisit Duikar for sunset (Also called as Eagle Nest point) \nBack to Hotel and check in Hotel \nNight stay and Dinner in Hunza"
      },
      {
        day: "Day 02",
        title: "Exploring Hunza Valley",
        description: " Breakfast Call \nAfter Breakfast leave for Khunjrab \nExperience the car drive of 2nd Longest Tunnel of Pakistan (Attabad \nTunnel) \nVisit Attabad Lake \nVisit Passu Cones \nVisit Hussaini Suspension Bridge \nVisit Khunerab Pass \nBack to Hunza and Visit Karimabad Bazar \nOvernight stay in Hunza \nNight stay and Dinner in Hunza"
      },
      {
        day: "Day 03",
        title: "Hunza - Naltar Valley",
        description: "Breakfast call \nArrival to Nomal Valley \nTransfer to Jeep for Naltar Valley \nVisit Naltar Valley \nVisit Satrangi Lake \nvisit Blue Water Lake \nExplore the Beauty of Naltar Valley \nAfter Visiting Naltar and Leave for Gilgit \nDinner and Night stay at Gilgit"
      },
      {
        day: "Day 04",
        title: "Fly Back to Home",
        description: "Breakfast call\nAfter Breakfast leave for Gilgit Airport\nDrop off at Gilgit Airport\nFly back to Islamabad"
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+923120506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  },
  "4": {
    id: 4,
    title: "5 Days By Air Honeymoon Package for Hunza Valley",
    location: "Hunza",
    duration: "5 Days 4 Nights",
    price: null, // Price is complex, see pricing object
    image: "/hunza1.jpg",
    groupSize: "2 people",
    tourType: "Daily Tour",
    description: "Discover the breathtaking beauty of Hunza Valley with our 5-day by air trip, designed for a seamless and unforgettable experience. Nestled in Gilgit-Baltistan, Hunza is famous for its majestic peaks, serene lakes, and rich cultural heritage. This journey offers comfort, adventure, and spectacular landscapes, making it an ideal escape for travelers.",
    pointsToVisit: [
      "Scenic Flight to Gilgit",
      "Attabad Lake & Passu Cones",
      "Baltit & Altit Forts",
      "Eagle’s Nest Viewpoint",
      "Local Culture & Cuisine"
    ],
    highlights: [
      "Scenic Flight to Gilgit",
      "Attabad Lake & Passu Cones",
      "Baltit & Altit Forts",
      "Eagle’s Nest Viewpoint",
      "Local Culture & Cuisine"
    ],
    included: [
      "Transport (Toyota Corolla/Toyota Parado)",
      "Fuel/Toll Tax/Challan/Driver/Guide",
      "5 Days,4 Nights",
      "5 Breakfasts",
      "Jeeps for Naltar",
      "Destination Photoshoot (will be charged separately)", // Combined from two broken list items
      "Bonfire",
      "Music Instrument"
    ],
    excluded: [
      "Any kind of Activity Charges",
      "No Other Food Than Breakfast",
      "Any kind of Entry Tickets"
    ],
    hotelList: [
      { location: "Hunza", standard: "Hunza Hidden Palace", deluxe: "Dastan By Roomy", executive: "Luxus Hunza" },
      { location: "Gilgit", standard: "Duroyou Inn", deluxe: "Destination Hotel", executive: "Ramada Gilgit" }
    ],
    departureSchedule: [
      { city: "Islamabad/Lahore/Karachi", departure1: "Flight to Gilgit (PIA/Air Blue)", departure2: "—" }
    ],
    pricing: {
      "sedanCar_perCouple": { 
        "standard": "PKR 125,000/-", 
        "deluxe": "PKR 160,000/-", 
        "executive": "PKR 205,000/-" 
      },
      "jeep4x4_perCouple": { 
        "standard": "PKR 150,000/-", 
        "deluxe": "PKR 185,000/-", 
        "executive": "PKR 230,000/-" 
      }
    },
    exceptions: null,
    notes: [
      "AIR FARES are not included in the Package. They will be charged separately according to the dates chose by clients.",
      "Hotels can be change according to availability."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Lahore/islamabad - Gilgit Airport",
        description: "Pickup Members from Gilgit Airport \nDeparture for Hunza Valley \nSightseeing of Indus River \nVisit Rakaposhi viewpoint \nArrival in Hunza \nVisit Altit and Baltit fort \nVisit karimabad Shoping Center \nVisit Duikar for sunset (Also called as Eagle Nest point) \nBack to Hotel and check in Hotel \nNight stay and Dinner in Hunza"
      },
      {
        day: "Day 02",
        title: "Exploring Hunza Valley",
        description: " Breakfast Call \nAfter Breakfast leave for Khunjrab \nExperience the car drive of 2nd Longest Tunnel of Pakistan (Attabad \nTunnel) \nVisit Attabad Lake \nVisit Passu Cones \nVisit Hussaini Suspension Bridge \nVisit Khunerab Pass \nBack to Hunza and Visit Karimabad Bazar \nOvernight stay in Hunza \nNight stay and Dinner in Hunza"
      },
      {
        day: "Day 03",
        title: "Hunza - Hopper Valley",
        description: " Breakfast Call \nAfter Breakfast leave for Khunjrab \nExperience the car drive of 2nd Longest Tunnel of Pakistan (Attabad \nTunnel) \nVisit Attabad Lake \nVisit Passu Cones \nVisit Hussaini Suspension Bridge \nVisit Khunerab Pass \nBack to Hunza and Visit Karimabad Bazar \nOvernight stay in Hunza \nNight stay and Dinner in Hunza"
      },
      {
        day: "Day 04",
        title: "Hunza - Naltar Valley",
        description: "Breakfast call \nArrival to Nomal Valley \nTransfer to Jeep for Naltar Valley \nVisit Naltar Valley \nVisit Satrangi Lake \nvisit Blue Water Lake \nExplore the Beauty of Naltar Valley \nAfter Visiting Naltar and Leave for Gilgit \nDinner and Night stay at Gilgit"
      },
      {
        day: "Day 05",
        title: "Fly Back to Home",
        description: "Breakfast call\nAfter Breakfast leave for Gilgit Airport\nDrop off at Gilgit Airport\nFly back to Islamabad"
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+923120506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  },
  "5": {
    id: 5,
    title: "4 Days By Air Honeymoon Package for Skardu Valley",
    location: "Skardu",
    duration: "4 Days 3 Nights",
    price: null,
    image: "/skardu1.jpg",
    groupSize: "2 people",
    tourType: "Daily Tour",
    description: "Nature Explorer Tours proudly presents the By Air Honeymoon Package to Skardu Valley, designed for couples seeking a perfect blend of romance, adventure, and relaxation. With breathtaking landscapes, seamless travel, and premium accommodations, this package ensures an unforgettable experience.",
    pointsToVisit: [
      "Shangrilla Lake",
      "Lower Kachura Lake",
      "Upper Kachura Lake",
      "Manthoka Waterfall",
      "Sarfaranga Cold Desert",
      "Shigar Fort",
      "Amburuk Mosque",
      "Blind Lake",
      "Chocolate Rocks",
      "Basho Meadows",
      "Basho Suspension Bridge"
    ],
    highlights: [
      "Visit Shangrilla & Kachura Lakes",
      "Explore Sarfaranga Cold Desert",
      "Visit Manthoka Waterfall",
      "Explore the historic Shigar Fort",
      "Transfer to 4x4 Jeeps for Basho Meadows",
      "Visit Basho Suspension Bridge"
    ],
    included: [
      "Transport (Toyota Corolla/Toyota Parado)",
      "Fuel/Toll Tax/Challan/Driver/Guide",
      "4 Days,3 Nights",
      "3 Breakfasts",
      "Jeeps for Basho Valley",
      "Destination Photoshoot (will be charged separately)",
      "Bonfire",
      "Music Instrument"
    ],
    excluded: [
      "Any kind of Activity Charges",
      "No Other Food Than Breakfast",
      "Any kind of Entry Tickets",
      "AIR FARES (Will be charged separately)"
    ],
    hotelList: [
      { location: "Skardu", standard: "Trout Villa", deluxe: "Gumaan Resort", executive: "Gumaan Resort" }
    ],
    departureSchedule: [
      { city: "Islamabad/Lahore/Karachi", departure1: "Flight to Skardu (PIA/Air Blue)", departure2: "—" }
    ],
    pricing: {
      "sedanCar_perCouple": { 
        "standard": "PKR 110,000/-", 
        "deluxe": "PKR 145,000/-", 
        "executive": "PKR 175,000/-" 
      },
      "jeep4x4_perCouple": { 
        "standard": "PKR 130,000/-", 
        "deluxe": "PKR 170,000/-", 
        "executive": "PKR 200,000/-" 
      }
    },
    exceptions: null,
    notes: [
      "AIR FARES are not included in the Package. They will be charged separately according to the client selected dates",
      "Hotels can be change according to availability."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Lahore/islamabad - Skardu valley",
        description: "Pick up members from Skardu Airport\nArrival at Hotel and Check in\nAfter check in leave for Shangrilla Lake\nVisit Lower Kachura Lake and Shangrilla Resort\nFree time for activities at lake\nVisit Upper Kachura Lake\nOvernight stay in Skardu"
      },
      {
        day: "Day 02",
        title: "Sarfaranga Cold Desert - Manthoka Waterfall",
        description: "Breakfast call\nAfter breakfast Departure for Manthoka waterfall\nFree time for Enjoyment at Manthoka waterfall\nDeparture Sarfaranga Cold Desert\nVisit Sarfaranga Cold Desert\nFree time for Activities there (Jeep Safari, Paragliding etc.)\nVisit Shigar Fort\nvisit Amburuk Mosque\nVisit Blind Lake (if time allows)\nBack to hotel in the evening\nOvernight stay at Skardu"
      },
      {
        day: "Day 03",
        title: "Chocolate Rocks - Basho Valley",
        description: "Breakfast call\nAfter breakfast visit Chocolate Rocks\nTransfer to 4x4 jeeps for Basho Meadows\nExplore the beauty of Basho Meadows\nVisit Basho Suspension Bridge\nBack to hotel in the evening\nOvernight stay at Skardu"
      },
      {
        day: "Day 04",
        title: "Fly Back to Home",
        description: "Breakfast call\nAfter Breakfast leave for Skardu Airport\nDrop off at Skardu Airport\nFly back to Islamabad"
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+923120506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  },
  "6": {
    id: 6,
    title: "5 Days By Air Honeymoon Package for Skardu Valley",
    location: "Skardu",
    duration: "5 Days 4 Nights",
    price: null,
    image: "/skardu1.jpg",
    groupSize: "2 people",
    tourType: "Daily Tour",
    description: "Nature Explorer Tours offer best By air Honeymoon Package for thier Beloved clients. If you are looking for by Air Honeymoon Package to Skardu Valley then you are at right place. Our Gilgit Baltistan tour package is designed for domestic and foreign tourists interested in visiting northern areas of Pakistan.",
    pointsToVisit: [
      "Shangrilla Lake",
      "Lower Kachura Lake",
      "Upper Kachura Lake",
      "Manthoka waterfall",
      "Sarfaranga Cold Desert",
      "Shigar Fort",
      "Amburuk Mosque",
      "Blind Lake",
      "Chocolate Rocks",
      "Basho Meadows",
      "Basho Suspension Bridge",
      "Khaplu Valley",
      "Sailing Fish Farm",
      "Chagchan Mosque",
      "Ghanche"
    ],
    highlights: [
      "Visit Shangrilla & Kachura Lakes",
      "Visit Manthoka Waterfall",
      "Explore Sarfaranga Cold Desert & Shigar Fort",
      "Visit Basho Meadows",
      "Explore Khaplu Valley & Ghanche"
    ],
    included: [
      "Transport (Toyota Corolla/Toyota Parado)",
      "Fuel/Toll Tax/Challan/Driver/Guide",
      "5 Days,4 Nights",
      "5 Breakfasts",
      "Jeeps for Basho Valley",
      "Destination Photoshoot (will be charged separately)",
      "Bonfire",
      "Music Instrument"
    ],
    excluded: [
      "Any kind of Activity Charges",
      "No Other Food Than Breakfast",
      "Any kind of Entry Tickets"
    ],
    hotelList: [
      { location: "Skardu", standard: "Trout Villa", deluxe: "Gumaan Resort", executive: "Gumaan Resort" }
    ],
    departureSchedule: [
      { city: "ISB/LHR/KHI", departure1: "BY AIR (PIA/AIR BLUE)", departure2: "—" }
    ],
    pricing: {
      "sedanCar_perCouple": { 
        "standard": "PKR 150,000/-", 
        "deluxe": "PKR 190,000/-", 
        "executive": "PKR 225,000/-" 
      },
      "jeep4x4_perCouple": { 
        "standard": "PKR 170,000/-", 
        "deluxe": "PKR 215,000/-", 
        "executive": "PKR 250,000/-" 
      }
    },
    exceptions: null,
    notes: [
      "AIR FARES are not included in the Package. They will be charged separately according to the dates choosed by clients.",
      "Hotels can be change according to availability."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Lahore/islamabad - Skardu valley",
        description: "Pick up members from Skardu Airport\nArrival at Hotel and Check in\nAfter check in leave for Shangrilla Lake\nVisit Lower Kachura Lake and Shangrilla Resort\nFree time for activities at lake\nVisit Upper Kachura Lake\nOvernight stay in Skardu"
      },
      {
        day: "Day 02",
        title: "Sarfaranga Cold Desert - Manthoka Waterfall",
        description: "Breakfast call\nAfter breakfast Departure for Manthoka waterfall\nFree time for Enjoyment at Manthoka waterfall\nDeparture Sarfaranga Cold Desert\nVisit Sarfaranga Cold Desert\nFree time for Activities there (Jeep Safari, Paragliding etc.)\nVisit Shigar Fort\nvisit Amburuk Mosque\nVisit Blind Lake (if time allows)\nBack to hotel in the evening\nOvernight stay at Skardu"
      },
      {
        day: "Day 03",
        title: "Chocolate Rocks - Basho Valley",
        description: "Breakfast call\nAfter breakfast visit Chocolate Rocks\nTransfer to 4x4 jeeps for Basho Meadows\nExplore the beauty of Basho Meadows\nVisit Basho Suspension Bridge\nBack to hotel in the evening\nOvernight stay at Skardu"
      },
      {
        day: "Day 04",
        title: "Khaplu Valley - Ghanche",
        description: "Breakfast call\nAfter breakfast elave for Khapluu\nVisit KhapluVisit Sailing Fish Farm\nVisit Chagchan Mosque\nVisit Ghanche\nBack to hotel in in the evening\nOvernight stay at Skardu"
      },
      {
        day: "Day 05",
        title: "Fly Back to Home",
        description: "Breakfast call\nAfter Breakfast leave for Skardu Airport\nDrop off at Skardu Airport\nFly back to Islamabad"
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+923120506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  },
  "7": {
    id: 7,
    title: "Soq Valley Tour",
    location: "Gilgit",
    duration: "7 Days 6 Nights",
    price: 720,
    image: "/skardu1.jpg",
    groupSize: "Unlimited",
    tourType: "Daily Tour",
    description: "The Soq Valley Tour provides a tranquil escape to a magnificent valley surrounded by majestic mountains and flowing rivers. The vacation is ideal for nature lovers and adventurers, with options for walking, camping under the stars, and trout fishing in crystal-clear waterways. Along with experiencing the valley’s rough beauty, you’ll also explore adjacent scenic places, offering your tour the ideal balance of relaxation and adventure in an unspoiled natural wonderland.",
    pointsToVisit: [
      "Islamabad",
      "Skardu",
      "Shangrila Lake",
      "Upper Kachura Lake",
      "Soq Valley",
      "Katpana Desert",
      "Satpara Lake"
    ],
    highlights: [
      "Fly to Skardu",
      "Drive to Soq Valley",
      "Hiking in Soq Valley",
      "Trout fishing in Soq River",
      "Camping/Bonfire under the stars",
      "Visit Shangrila & Upper Kachura Lake",
      "Visit Katpana Desert",
      "Visit Satpara Lake"
    ],
    included: [
      "Pickup from hotel or vacation rental before sightseeing",
      "Drop at hotel or vacation rental after sightseeing",
      "Guided sightseeing tour according to itinerary above",
      "Map (hard copy)",
      "Licensed professional guide (english speaking)",
      "SUV/mini-van/car (depending on number of people)",
      "Driver",
      "All entry/admission tickets",
      "Bottled water in car (fair usage policy)",
      "Toll & parking fees"
    ],
    excluded: [
      "Drop after 10 pm (Drivers & Guide's working hours end at 10pm)",
      "Gratuities/tips for guides/drivers, etc",
      "Meals, snacks and drinks (our guide will make recommendations after consultation with guests)",
      "Accommodation (can be arranged at additional cost according to your budget)",
      "Personal travel insurance (Recommendation/Rescue Partners: Global Rescue)",
      "Visa to Pakistan (supporting documents can be offered if requested for multiday tours)",
      "Refunds in case of early tour windup/closure due to any reason",
      "Anything not mentioned in inclusions"
    ],
    hotelList: null,
    departureSchedule: [
      { city: "All Seasons", departure1: "Daily", departure2: "—" }
    ],
    pricing: {
      "perPerson_Spring_USD": { "price": "720" },
      "perPerson_Winter_USD": { "price": "720" },
      "perPerson_Summer_USD": { "price": "720" },
      "perPerson_Autumn_USD": { "price": "720" }
    },
    exceptions: null,
    notes: [
      "In case of flight cancellation, you will drive to Chilas overnight."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "ARRIVAL AT INTERNATIONAL AIRPORT ISLAMABAD",
        description: "On this Day: Your flights will normally arrive in Islamabad in the afternoon. Our guide(s) will receive you from the airport. Soon the participants will be transferred to hotels. This day the participants can relax and recover from the journey."
      },
      {
        day: "Day 02",
        title: "FLY TO SKARDU",
        description: "Your tour begins with an early morning flight from Islamabad to Skardu, a magnificent 1-hour flight with stunning views of the Karakoram and Himalayan mountains. When you arrive in Skardu, you will be transferred to your accommodation... In the afternoon, spend some time exploring Skardu town. You may explore the bustling Skardu Bazaar... In Skardu, spend the night in a hotel."
      },
      {
        day: "Day 03",
        title: "DRIVE TO SOQ VALLEY",
        description: "After breakfast, take a scenic trip to Soq Valley... En route, stop at Shangrila Lake (Lower Kachura Lake)... Continue your journey to Upper Kachura Lake... From here, the route turns into Soq Valley... When you arrive in Soq Valley, pitch your tent or stay in a guesthouse. Spend the afternoon fishing for trout... relax by a bonfire... overnight camping or a stay at a nearby motel."
      },
      {
        day: "Day 04",
        title: "EXPLORE SOQ VALLEY",
        description: "This day is dedicated to completely experiencing the natural splendor of Soq Valley. After breakfast, begin a full day of hiking... For lunch, picnic beside the river... Spend the afternoon exploring... Return to your tent or guesthouse in the evening... Stay overnight at Soq Valley."
      },
      {
        day: "Day 05",
        title: "BACK TO SKARDU",
        description: "After breakfast, begin your drive back to Skardu... Your first destination will be Upper Kachura Lake... Continue your journey to the Katpana Desert... From there, travel to Satpara Lake... return to your accommodation for an overnight stay."
      },
      {
        day: "Day 06",
        title: "FLY BACK TO ISLAMABAD",
        description: "On this day the participants will take a flight from the airport in Skardu to Islamabad aiport. You will have a good time to relax at the hotel in Islamabad. The domestic flights sometimes get canceled... In case of flight cancellation, you will drive to Chilas overnight."
      },
      {
        day: "Day 07",
        title: "FLY TO HOME COUNTRY",
        description: "Meals included: Breakfast Our staff will transfer all our guests to the airport on their respective departure timings... The checkout time of all our partner hotels is 12 pm."
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+92312 0506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  },
  "8": {
    id: 8,
    title: "Nazbar Valley Tour",
    location: "Gilgit",
    duration: "8 Days 7 Nights",
    price: 930,
    image: "/skardu1.jpg",
    groupSize: "Unlimited",
    tourType: "Daily Tour",
    description: "Explore the hidden beauty of Nazbar Valley in Yasin, Gilgit-Baltistan. This journey offers stunning vistas of lush meadows, deep forests, and clear streams, providing a peaceful respite from the everyday. Enjoy picturesque hikes to stunning overlooks and interact with the friendly locals. The Nazbar Valley Trip is ideal for nature lovers and explorers, offering an amazing experience in one of Pakistan’s most lovely valleys.",
    pointsToVisit: [
      "Islamabad",
      "Gilgit",
      "Yasin Valley",
      "Ishkoman Bridge",
      "Autumn Gardens",
      "Nazbar Valley",
      "Phander Valley",
      "Khalti Lake",
      "Dream Island",
      "Phander Viewpoint",
      "Phander Lake",
      "Gahkuch"
    ],
    highlights: [
      "Fly to Gilgit",
      "Drive to Yasin Valley",
      "Explore Nazbar Valley (hiking, picnic)",
      "Interact with friendly locals",
      "Explore Phander Valley",
      "Visit Khalti Lake & Phander Lake"
    ],
    included: [
      "Pickup from hotel or vacation rental before sightseeing",
      "Drop at hotel or vacation rental after sightseeing",
      "Guided sightseeing tour according to itinerary above",
      "Map (hard copy)",
      "Licensed professional guide (english speaking)",
      "SUV/mini-van/car (depending on number of people)",
      "Driver",
      "All entry/admission tickets",
      "Bottled water in car (fair usage policy)",
      "Toll & parking fees"
    ],
    excluded: [
      "Drop after 10 pm (Drivers & Guide's working hours end at 10pm)",
      "Gratuities/tips for guides/drivers, etc",
      "Meals, snacks and drinks (our guide will make recommendations after consultation with guests)",
      "Accommodation (can be arranged at additional cost according to your budget)",
      "Personal travel insurance (Recommendation/Rescue Partners: Global Rescue)",
      "Visa to Pakistan (supporting documents can be offered if requested for multiday tours)",
      "Refunds in case of early tour windup/closure due to any reason",
      "Anything not mentioned in inclusions"
    ],
    hotelList: null,
    departureSchedule: [
      { city: "All Seasons", departure1: "Daily", departure2: "—" }
    ],
    pricing: {
      "perPerson_Spring_USD": { "price": "930" },
      "perPerson_Winter_USD": { "price": "930" },
      "perPerson_Summer_USD": { "price": "930" },
      "perPerson_Autumn_USD": { "price": "930" }
    },
    exceptions: null,
    notes: [
      "Accommodation can be arranged at additional cost according to your budget."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "ARRIVAL AT ISLAMABAD INTERNATIONAL AIRPORT",
        description: "On this Day: Your flights will normally arrive in Islamabad in the afternoon. Our guide(s) will receive you from the airport. Soon the participants will be transferred to hotels. This day the participants can relax and recover from the journey."
      },
      {
        day: "Day 02",
        title: "FLY TO GILGIT",
        description: "On this Day: Participants on this morning will take the spectacular flight from Islamabad airport to Gilgit airport. After arrival in Gilgit, the day is free."
      },
      {
        day: "Day 03",
        title: "DRIVE TO YASIN VALLEY",
        description: "On this Day: Begin your day with breakfast at your Gilgit hotel before heading to Yasin Valley. On your route, stop at the Ishkoman Bridge overlook to take some amazing photos. Continue your journey to Yasin Valley... When you arrive, go to the Autumn Gardens in Yasin Valley... Return to the Fort Hotel in Yasin Valley for supper and overnight stay."
      },
      {
        day: "Day 04",
        title: "EXLPORE NAZBAR VALLEY",
        description: "On this Day: After breakfast, take a picturesque drive to Nazbar Valley... Explore the valley on foot, strolling along lovely pathways... Enjoy a calm picnic lunch beside a stream or meadow... Interact with friendly locals... Return to Yasin Valley in the late evening... retire for the night."
      },
      {
        day: "Day 05",
        title: "EXPLORE PHANDER VALLEY",
        description: "On this Day: After breakfast at your Yasin Valley hotel, drive to Phander Valley... stop at Khalti Lake, as well as other bridges and overlooks. Visit Dream Island and Phander Viewpoint... Have lunch in Phander Valley, then head to Phander Lake. Return to the Hilltop Hotel Phander or Shandur Paradise Teru for supper and an overnight stay."
      },
      {
        day: "Day 06",
        title: "DRIVE TO GILGIT",
        description: "On this Day: Eat breakfast at your Phander Valley accommodation before returning to Gilgit. Make a lunch stop in Gahkuch... Arrive in Gilgit in the evening and settle into your guesthouse for supper and an overnight stay."
      },
      {
        day: "Day 07",
        title: "FLY BACK TO ISLAMABAD",
        description: "On this Day: On this day the participants will take a flight from the airport in Gilgit to Islamabad aiport. You will have a good time to relax at the hotel in Islamabad."
      },
      {
        day: "Day 08",
        title: "Fly to home country",
        description: "On this Day: Meals included: Breakfast Our staff will transfer all our guests to the airport on their respective departure timings. The checkout time of all our partner hotels is 12pm."
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+92312 0506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  },
  "9": {
    id: 9,
    title: "Khorkundus Valley Tour",
    location: "Gilgit",
    duration: "7 Days 6 Nights",
    price: 1000,
    image: "/skardu1.jpg",
    groupSize: "Unlimited",
    tourType: "Daily Tour",
    description: "Join an exciting Khorkundus Valley Tour to discover the natural landscapes of Ghanche District, Gilgit-Baltistan. Nestled at an elevation of 3,399 meters, this hidden gem is bordered by towering peaks such as K13, Sherpi Kangri, and Saltoro Kangri. Experience the charm of traditional Balti culture, relax in the valley’s curative hot springs, and take in the spectacular scenery of this secluded sanctuary.",
    pointsToVisit: [
      "Skardu",
      "Shangrila Resort",
      "Upper Kachura Lake",
      "Khaplu",
      "Khaplu Palace",
      "Chaqchan Mosque",
      "Khorkundus Village",
      "Khorkundus Hot Springs",
      "Lachat Village",
      "Thang Village",
      "Shigar Valley",
      "Shigar Fort"
    ],
    highlights: [
      "Fly to Skardu with views of Karakoram/Himalayas",
      "Visit Shangrila Resort and Upper Kachura Lake",
      "Drive along the Shyok River",
      "Explore Khaplu Palace and Chaqchan Mosque",
      "Visit Khorkundus village and its curative hot springs",
      "Hike to the base of Saltoro Kangri, K13, or Sherpi Kangri",
      "Explore traditional Balti culture in Lachat and Thang",
      "Visit the historic Shigar Fort"
    ],
    included: [
      "Pickup from hotel or vacation rental before sightseeing",
      "Drop at hotel or vacation rental after sightseeing",
      "Guided sightseeing tour according to itinerary above",
      "Map (hard copy)",
      "Licensed professional guide (english speaking)",
      "SUV/mini-van/car (depending on number of people)",
      "Driver",
      "All entry/admission tickets",
      "Bottled water in car (fair usage policy)",
      "Toll & parking fees"
    ],
    excluded: [
      "Drop after 10 pm (Drivers & Guide's working hours end at 10pm)",
      "Gratuities/tips for guides/drivers, etc",
      "Meals, snacks and drinks (our guide will make recommendations after consultation with guests)",
      "Accommodation (can be arranged at additional cost according to your budget)",
      "Personal travel insurance (Recommendation/Rescue Partners: Global Rescue)",
      "Visa to Pakistan (supporting documents can be offered if requested for multiday tours)",
      "Refunds in case of early tour windup/closure due to any reason",
      "Anything not mentioned in inclusions"
    ],
    hotelList: null,
    departureSchedule: [
      { city: "All Seasons", departure1: "Daily", departure2: "—" }
    ],
    pricing: {
      "perPerson_Spring_USD": { "price": "1000" },
      "perPerson_Winter_USD": { "price": "1000" },
      "perPerson_Summer_USD": { "price": "1000" },
      "perPerson_Autumn_USD": { "price": "1000" }
    },
    exceptions: null,
    notes: [
      "Accommodation (can be arranged at additional cost according to your budget)",
      "Alternatively, start your trip on the Karakoram Highway (which necessitates an overnight stop in Chilas).",
      "In case of flight cancellation, start the return journey in Chilas (which requires an additional overnight stay)."
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "FLY TO SKARDU",
        description: "Fly to Skardu (about one hour). Alternatively, start your trip on the Karakoram Highway (which necessitates an overnight stop in Chilas). Arrive in Skardu, move to the hotel, and rest. Visit Shangrila Resort and Upper Kachura Lake. Spend the night at a hotel in Skardu."
      },
      {
        day: "Day 02",
        title: "SKARDU TO KHAPLU",
        description: "Drive to Khaplu (about 4-5 hours and 103 kilometers). Enjoy the lovely views along the Shyok River. Visit Khaplu Palace and the historical Chaqchan Mosque. Explore Khaplu village to learn about Balti culture. Spend the night in a hotel or guesthouse in Khaplu."
      },
      {
        day: "Day 03",
        title: "DRIVE TO KHORKONDUS",
        description: "Depart for Khorkondus (around 2-3 hours drive). Arrive in Khorkondus village, check-in, and explore the surroundings. Visit a hot spring famed for its medicinal powers. Take a short climb to get panoramic views of the neighboring peaks. Interact with people to learn about their customs and lifestyles. In Khorkondus, spend the night in a tent or local guesthouse."
      },
      {
        day: "Day 04",
        title: "EXPLORE KHORKONDUS VALLEY",
        description: "Take a guided hike to the base of Saltoro Kangri or visit other neighboring peaks such as K13 or Sherpi Kangri. Visit surrounding villages including Lachat and Thang to see traditional farming and mud dwellings. Return to Khorkondus for a peaceful evening. Enjoy a bonfire (if arranged). Overnight stay in Khorkondus."
      },
      {
        day: "Day 05",
        title: "KHORKONDUS TO KHAPLU",
        description: "Depart Khorkondus and return to Khaplu. Free time for relaxation or sightseeing in Khaplu. Visit Saling Fish Farm or Machulu Village for additional cultural perspectives. Spend the night in a hotel or guesthouse in Khaplu."
      },
      {
        day: "Day 06",
        title: "KHAPLU TO SKARDU",
        description: "Drive back to Skardu. Explore Shigar Valley and see Shigar Fort. Enjoy a trip around the area's luscious orchards. Relax and eat dinner at the hotel in Skardu. Overnight stay in Skardu."
      },
      {
        day: "Day 07",
        title: "SKARDU TO ISLAMABAD",
        description: "Catch a flight back to Islamabad. Alternatively, start the return journey in Chilas (which requires an additional overnight stay). Arrive in Islamabad to complete the tour."
      }
    ],
    contact: {
      email: "info@natureexplorertours.com",
      whatsapp: "+92312 0506457",
      instagram: "https://www.instagram.com/natureexplorers.pk?igsh=ZzgwMXk1aTl2ajR4&utm_source=qr"
    },
    bulkDiscount: null
  }
};
export default function PrivateTourByAirDetail() {
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
    const whatsappMessage = `*Private Tour Inquiry - ${pkg.title}*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/923153309070?text=${whatsappMessage}`, '_blank');
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppInquiry = () => {
    const message = `*Inquiry for: ${pkg.title}*%0A%0AHello, I'm interested in this private tour package. Please provide more details and pricing.`;
    window.open(`https://wa.me/923153309070?text=${message}`, '_blank');
  };

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Tour Not Found</h1>
          <Link href="/private-tours/by-air" className="text-red-600 hover:underline">
            Back to Tours
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section with Breadcrumb and Title */}
      <section className="bg-white border-b border-gray-200 pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tag */}
          <div className="mb-4">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-bold">
              ✈️ By Air - Private Tour
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {pkg.title}
          </h1>
          
          {/* Info Row */}
          <div className="flex flex-wrap items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              <span className="text-lg">{pkg.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-600" />
              <span className="text-lg">{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-red-600" />
              <span className="text-lg">Private Tour</span>
            </div>
          </div>
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
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Description */}
            <section className="bg-white rounded-xl p-8 border border-red-200 shadow-lg">
              <h2 className="text-3xl font-bold text-red-700 mb-4">About This Tour</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{pkg.description}</p>
            </section>

            {/* Highlights */}
            <section className="bg-red-50 rounded-xl p-8 border border-red-200">
              <h2 className="text-3xl font-bold text-red-800 mb-6">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl p-8 border border-red-200 shadow-lg">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((item: any, index: number) => (
                  <div key={index} className="border-l-4 border-red-600 pl-6 pb-6 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.day}
                      </span>
                      <h3 className="text-xl font-bold text-red-700">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <Check className="w-6 h-6" />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {pkg.included.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white rounded-xl p-6 border border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <X className="w-6 h-6" />
                  What's Excluded
                </h3>
                <ul className="space-y-2">
                  {pkg.excluded.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Points to Visit */}
            {pkg.pointsToVisit && pkg.pointsToVisit.length > 0 && (
              <section className="bg-white rounded-xl p-8 border border-red-200 shadow-lg">
                <h2 className="text-3xl font-bold text-red-700 mb-6">Points to Visit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pkg.pointsToVisit.map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Hotel List */}
            {pkg.hotelList && pkg.hotelList.length > 0 && (
              <section className="bg-red-50 rounded-xl p-8 border border-red-200">
                <h2 className="text-3xl font-bold text-red-800 mb-6">Hotel Options</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-red-300">
                        <th className="text-left py-3 px-4 text-red-800 font-bold">Location</th>
                        <th className="text-left py-3 px-4 text-red-800 font-bold">Standard</th>
                        <th className="text-left py-3 px-4 text-red-800 font-bold">Deluxe</th>
                        <th className="text-left py-3 px-4 text-red-800 font-bold">Executive</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.hotelList.map((hotel: any, index: number) => (
                        <tr key={index} className="border-b border-red-200">
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

            {/* Departure Schedule */}
            {pkg.departureSchedule && pkg.departureSchedule.length > 0 && (
              <section className="bg-white rounded-xl p-8 border border-red-200 shadow-lg">
                <h2 className="text-3xl font-bold text-red-700 mb-6">Departure Schedule</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-red-300">
                        <th className="text-left py-3 px-4 text-red-700 font-bold">City</th>
                        <th className="text-left py-3 px-4 text-red-700 font-bold">Departure</th>
                        {pkg.departureSchedule[0].departure2 && (
                          <th className="text-left py-3 px-4 text-red-700 font-bold">Alternative</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.departureSchedule.map((schedule: any, index: number) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-3 px-4 font-semibold text-gray-800">{schedule.city}</td>
                          <td className="py-3 px-4 text-gray-700">{schedule.departure1}</td>
                          {schedule.departure2 && (
                            <td className="py-3 px-4 text-gray-700">{schedule.departure2}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Pricing */}
            {pkg.pricing && (
              <section className="bg-red-50 rounded-xl p-8 border border-red-200">
                <h2 className="text-3xl font-bold text-red-800 mb-6">Pricing Details</h2>
                
                {pkg.pricing.sedanCar_perCouple && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">Sedan Car (Per Couple)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pkg.pricing.sedanCar_perCouple.standard && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Standard</div>
                          <div className="text-2xl font-bold text-red-700">{pkg.pricing.sedanCar_perCouple.standard}</div>
                        </div>
                      )}
                      {pkg.pricing.sedanCar_perCouple.deluxe && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Deluxe</div>
                          <div className="text-2xl font-bold text-red-700">{pkg.pricing.sedanCar_perCouple.deluxe}</div>
                        </div>
                      )}
                      {pkg.pricing.sedanCar_perCouple.executive && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Executive</div>
                          <div className="text-2xl font-bold text-red-700">{pkg.pricing.sedanCar_perCouple.executive}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {pkg.pricing.jeep4x4_perCouple && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">Jeep 4x4 (Per Couple)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pkg.pricing.jeep4x4_perCouple.standard && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Standard</div>
                          <div className="text-2xl font-bold text-red-700">{pkg.pricing.jeep4x4_perCouple.standard}</div>
                        </div>
                      )}
                      {pkg.pricing.jeep4x4_perCouple.deluxe && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Deluxe</div>
                          <div className="text-2xl font-bold text-red-700">{pkg.pricing.jeep4x4_perCouple.deluxe}</div>
                        </div>
                      )}
                      {pkg.pricing.jeep4x4_perCouple.executive && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Executive</div>
                          <div className="text-2xl font-bold text-red-700">{pkg.pricing.jeep4x4_perCouple.executive}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {pkg.pricing.perPerson_Spring_USD && (
                  <div>
                    <h3 className="text-xl font-bold text-red-700 mb-4">Per Person Pricing (USD)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {pkg.pricing.perPerson_Spring_USD && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Spring</div>
                          <div className="text-xl font-bold text-red-700">${pkg.pricing.perPerson_Spring_USD.price}</div>
                        </div>
                      )}
                      {pkg.pricing.perPerson_Summer_USD && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Summer</div>
                          <div className="text-xl font-bold text-red-700">${pkg.pricing.perPerson_Summer_USD.price}</div>
                        </div>
                      )}
                      {pkg.pricing.perPerson_Autumn_USD && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Autumn</div>
                          <div className="text-xl font-bold text-red-700">${pkg.pricing.perPerson_Autumn_USD.price}</div>
                        </div>
                      )}
                      {pkg.pricing.perPerson_Winter_USD && (
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="text-sm text-gray-600 mb-1">Winter</div>
                          <div className="text-xl font-bold text-red-700">${pkg.pricing.perPerson_Winter_USD.price}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Notes */}
            {pkg.notes && pkg.notes.length > 0 && (
              <section className="bg-yellow-50 rounded-xl p-8 border border-yellow-300">
                <h2 className="text-3xl font-bold text-yellow-800 mb-6">Important Notes</h2>
                <ul className="space-y-3">
                  {pkg.notes.map((note: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-yellow-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Exceptions */}
            {pkg.exceptions && (
              <section className="bg-orange-50 rounded-xl p-8 border border-orange-300">
                <h2 className="text-3xl font-bold text-orange-800 mb-6">Exceptions</h2>
                <p className="text-gray-700 leading-relaxed">{pkg.exceptions}</p>
              </section>
            )}

            {/* Bulk Discount */}
            {pkg.bulkDiscount && (
              <section className="bg-green-50 rounded-xl p-8 border border-green-300">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Bulk Discount</h2>
                <p className="text-gray-700 leading-relaxed">{pkg.bulkDiscount}</p>
              </section>
            )}

            {/* Contact Section */}
            <section className="py-16 bg-linear-to-br from-red-50 via-white to-red-50 rounded-xl">
              <div className="px-8">
                <div className="text-center mb-8">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-red-100 rounded-2xl p-8 shadow-lg border border-red-200">
                    <h2 className="text-3xl font-bold text-red-800 mb-6">Our Contact</h2>
                    
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold mb-1">Phone</p>
                        <a href="tel:+923174101300" className="text-red-700 hover:text-red-800 underline font-medium">
                          +92 317 4101300
                        </a>
                        <a href="https://wa.me/923153309070" target="_blank" rel="noopener noreferrer" className="block text-red-700 hover:text-red-800 underline font-medium mt-1">
                          WhatsApp: 0315 3309070
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold mb-1">Email Address</p>
                        <a href="mailto:Info.Towardsdestination@gmail.com" className="text-red-700 hover:text-red-800 underline font-medium">
                          Info.Towardsdestination@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-red-800 mb-4">Social Media</h3>
                      <div className="flex items-center gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-md hover:shadow-lg">
                          <Facebook className="w-6 h-6 text-white" />
                        </a>
                        <a href="https://www.instagram.com/towardsdestination.pk" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-md hover:shadow-lg">
                          <Instagram className="w-6 h-6 text-white" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-md hover:shadow-lg">
                          <Youtube className="w-6 h-6 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-200">
                    <h2 className="text-3xl font-bold text-red-800 mb-6">Where to Find Us</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-red-700 font-bold text-lg mb-2">Islamabad Office (Main Head Office)</p>
                        <a href="https://maps.app.goo.gl/rNE3RXtnzyVFKpqC7?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-700 transition-colors block">
                          Office no 406, Main Peshawar Rd, near Hotel One Inn Daewoo Express, Jhangi Sayedan, Islamabad, 44000
                        </a>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                          <Phone className="w-5 h-5 text-red-600" />
                          <a href="tel:+923174101300" className="text-red-700 hover:text-red-800 underline font-medium">
                            +92 317 4101300
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-red-600" />
                          <a href="mailto:Info.Towardsdestination@gmail.com" className="text-red-700 hover:text-red-800 underline font-medium">
                            Info.Towardsdestination@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Inquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-red-200 overflow-hidden">
              <div className="p-6 bg-red-50 border-b border-red-200">
                <div className="text-sm text-gray-600 mb-1">Private Tour Package</div>
                <div className="text-2xl font-bold text-red-700">Contact for Pricing</div>
                <p className="text-sm text-gray-600 mt-2">Custom pricing based on your requirements</p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4">Request Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Your Message or Inquiry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Inquiry
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+923174101300" className="text-sm hover:text-red-600 transition-colors">
                      +92 317 4101300
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:Info.Towardsdestination@gmail.com" className="text-sm hover:text-red-600 transition-colors">
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

