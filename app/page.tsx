import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TestimonialSection from "./components/TestimonialSection";
import AffiliationsSection from "./components/AffiliationsSection";
import TourPackages from "./components/TourPackages";
import PlacesSection from "./components/PlacesSection";
import UmrahSection from "./components/UmrahSection";
import FamilySection from "./components/FamilySection";
import AboutSection from "./components/AboutSection";
import ActivitiesSection from "./components/ActivitiesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Book unforgettable Pakistan tour packages with TowardsDestination.pk. Explore Hunza Valley, Skardu, Naran, Kaghan, Swat, Neelum Valley, Fairy Meadows & more. Professional guides, best prices, and memorable experiences. Start your adventure today!",
  keywords: "Pakistan tours, Hunza Valley tours, Skardu tours, Naran Kaghan tours, Swat Valley tours, Neelum Valley tours, Fairy Meadows, northern areas Pakistan, Pakistan travel packages, tour operators Pakistan, Pakistan tourism",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home - TowardsDestination.pk",
    description: "Book unforgettable Pakistan tour packages. Explore Hunza, Skardu, Naran, Swat & more with professional guides.",
    url: "https://towardsdestination.pk",
    siteName: "TowardsDestination.pk",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "TowardsDestination.pk - Pakistan Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AffiliationsSection />
      <TourPackages />
      <PlacesSection />
      <FamilySection />
      <AboutSection />
      <WhyChooseSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

