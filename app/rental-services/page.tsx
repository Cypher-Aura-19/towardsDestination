import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RentalServicesContent from "../components/RentalServicesContent";

export default function RentalServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RentalServicesContent />
      <Footer />
    </div>
  );
}
