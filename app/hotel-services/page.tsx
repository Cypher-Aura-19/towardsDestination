import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelServicesContent from "../components/HotelServicesContent";

export default function HotelServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HotelServicesContent />
      <Footer />
    </div>
  );
}
