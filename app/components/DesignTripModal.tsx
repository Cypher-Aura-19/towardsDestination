"use client";

import { X, User, Mail, Calendar, MapPin, Hotel, Users, Minus, Plus } from "lucide-react";
import { useState } from "react";

interface DesignTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesignTripModal({ isOpen, onClose }: DesignTripModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    startingPoint: "",
    destination: "",
    duration: "",
    accommodation: "",
    adults: 0,
    kids: 0,
    rooms: "",
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `*CUSTOM TRIP REQUEST*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📧 Email: ${formData.email || "N/A"}\n` +
      `📅 Departure Date: ${formData.date}\n` +
      `📍 Trip Starting Point: ${formData.startingPoint}\n` +
      `🎯 Trip Destination: ${formData.destination}\n` +
      `⏱️ Trip Duration: ${formData.duration}\n` +
      `🏨 Hotel Accommodation Type: ${formData.accommodation}\n` +
      `👥 No. of Adults: ${formData.adults}\n` +
      `👶 No. of Kids: ${formData.kids}\n` +
      `🛏️ Select Rooms: ${formData.rooms}\n` +
      `📝 Additional Info: ${formData.additionalInfo || "N/A"}`;

    const whatsappUrl = `https://wa.me/923153309070?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleIncrement = (field: "adults" | "kids") => {
    setFormData(prev => ({ ...prev, [field]: prev[field] + 1 }));
  };

  const handleDecrement = (field: "adults" | "kids") => {
    setFormData(prev => ({ ...prev, [field]: Math.max(0, prev[field] - 1) }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            DESIGN MY OWN
          </h2>
          <p className="text-sm text-red-100">CUSTOMIZED TRIP</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-3">
          {/* Your Name */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Your Email (Optional) */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              placeholder="Your Email (Optional)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Departure & Date */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <Calendar className="w-4 h-4" />
            </div>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all [color-scheme:dark]"
            />
          </div>

          {/* Trip Starting Point */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <MapPin className="w-4 h-4" />
            </div>
            <select
              required
              value={formData.startingPoint}
              onChange={(e) => setFormData({ ...formData, startingPoint: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="text-gray-900">Trip Starting Point</option>
              <option value="Rawalpindi/Islamabad" className="text-gray-900">Rawalpindi/Islamabad</option>
              <option value="Lahore" className="text-gray-900">Lahore</option>
              <option value="Karachi" className="text-gray-900">Karachi</option>
              <option value="Skardu" className="text-gray-900">Skardu</option>
              <option value="Other" className="text-gray-900">Other</option>
            </select>
          </div>

          {/* Trip Destination */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <MapPin className="w-4 h-4" />
            </div>
            <select
              required
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="text-gray-900">Trip Destination</option>
              <option value="Hunza" className="text-gray-900">Hunza</option>
              <option value="Skardu" className="text-gray-900">Skardu</option>
              <option value="Naran" className="text-gray-900">Naran</option>
              <option value="Shogran" className="text-gray-900">Shogran</option>
              <option value="Neelum Valley" className="text-gray-900">Neelum Valley</option>
              <option value="Swat" className="text-gray-900">Swat</option>
              <option value="Kumrat" className="text-gray-900">Kumrat</option>
              <option value="Fairy Meadows" className="text-gray-900">Fairy Meadows</option>
              <option value="Other" className="text-gray-900">Other</option>
            </select>
          </div>

          {/* Trip Duration */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <Calendar className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              placeholder="Trip Duration (e.g., 5 Days / 4 Nights)"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Select Hotel Accommodation Type */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <Hotel className="w-4 h-4" />
            </div>
            <select
              required
              value={formData.accommodation}
              onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="text-gray-900">Select Hotel Accommodation Type</option>
              <option value="Economy-Standard" className="text-gray-900">Economy-Standard</option>
              <option value="Value" className="text-gray-900">Value</option>
              <option value="Deluxe" className="text-gray-900">Deluxe</option>
              <option value="Executive" className="text-gray-900">Executive</option>
            </select>
          </div>

          {/* No. of Adults */}
          <div className="bg-white/20 border border-white/30 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Users className="w-4 h-4" />
                <span className="text-sm">No. of Adults</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleDecrement("adults")}
                  className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <Minus className="w-4 h-4 text-white" />
                </button>
                <span className="text-white font-semibold w-8 text-center">{formData.adults}</span>
                <button
                  type="button"
                  onClick={() => handleIncrement("adults")}
                  className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* No. of Kids */}
          <div className="bg-white/20 border border-white/30 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Users className="w-4 h-4" />
                <span className="text-sm">No. of Kids</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleDecrement("kids")}
                  className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <Minus className="w-4 h-4 text-white" />
                </button>
                <span className="text-white font-semibold w-8 text-center">{formData.kids}</span>
                <button
                  type="button"
                  onClick={() => handleIncrement("kids")}
                  className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Number of Rooms */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <Hotel className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              placeholder="Number of Rooms (e.g., 2 Double Rooms)"
              value={formData.rooms}
              onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Please select us required items as per available with us */}
          <div className="relative">
            <textarea
              placeholder="Please select us required items as per available with us"
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            SHARE MY TRIP
          </button>
        </form>
      </div>
    </div>
  );
}
