import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TourPackages from "./components/TourPackages";
import PlacesSection from "./components/PlacesSection";
import UmrahSection from "./components/UmrahSection";
import FamilySection from "./components/FamilySection";
import AboutSection from "./components/AboutSection";
import ActivitiesSection from "./components/ActivitiesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      <Navbar />
      <Hero />
      <TourPackages />
      <PlacesSection />
      <UmrahSection />
      <FamilySection />
      <AboutSection />
      <ActivitiesSection />
      <WhyChooseSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
