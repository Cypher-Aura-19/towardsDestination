"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    
    // WhatsApp number
    const whatsappNumber = "923153309070";
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Office no 406, Main Peshawar Rd", "Jhangi Sayedan, Islamabad, 44000"],
      link: "https://maps.app.goo.gl/rNE3RXtnzyVFKpqC7?g_st=ic"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["UAN: +92 317 4101300", "WhatsApp: 0315 3309070"],
      link: "tel:+923174101300"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@towardsdestination.pk", "Quick response guaranteed"],
      link: "mailto:info@towardsdestination.pk"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Sunday", "24/7 Support"],
      link: null
    }
  ];

  const quickLinks = [
    { label: "Northern Tours by Air", href: "/private-tours/by-air" },
    { label: "Northern Tours by Road", href: "/private-tours/by-road" },
    { label: "Umrah Packages", href: "/umrah-packages" },
    { label: "Our Hotel", href: "/hotel" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 pb-12 xs:pb-16 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-white/10 backdrop-blur-sm px-3 xs:px-4 py-1.5 xs:py-2 rounded-full mb-4 text-xs xs:text-sm">
            <span className="text-white font-semibold">TOWARDSDESTINATION.PK</span>
            <span className="text-white/80 hidden xs:inline">•</span>
            <span className="text-white/90 hidden xs:inline">Let's have an Adventure</span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 xs:mb-6">
            Get in Touch
          </h1>
          <p className="text-white/95 text-sm xs:text-base sm:text-lg max-w-2xl mb-4">
            Have questions about our tours or packages? We're here to help you plan your perfect journey.
          </p>
          <div className="flex items-center gap-2 text-white/90 text-xs xs:text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span>Registered with FBR, SECP, DTS & Nadra</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 xs:py-10 sm:py-12 bg-gray-50 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-4 xs:p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-red-600 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="block">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`${idx === 0 ? 'text-red-600 font-medium' : 'text-gray-600 text-sm'}`}>
                          {detail}
                        </p>
                      ))}
                    </a>
                  ) : (
                    info.details.map((detail, idx) => (
                      <p key={idx} className={`${idx === 0 ? 'text-red-600 font-medium' : 'text-gray-600 text-sm'}`}>
                        {detail}
                      </p>
                    ))
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 xs:py-16 sm:py-20">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl xs:rounded-2xl shadow-lg p-4 xs:p-6 sm:p-8 border border-gray-200">
                <h2 className="text-2xl xs:text-3xl font-bold text-red-600 mb-2">
                  Send us a Message
                </h2>
                <p className="text-sm xs:text-base text-gray-600 mb-6 xs:mb-8">
                  Fill out the form below and we'll get back to you as soon as possible via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-red-600 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-red-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-red-600 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-red-600 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600 bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="Northern Tours">Northern Tours Inquiry</option>
                        <option value="Umrah Package">Umrah Package Inquiry</option>
                        <option value="Hotel Booking">Hotel Booking</option>
                        <option value="Custom Package">Custom Package Request</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-red-600 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-red-600 resize-none"
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message via WhatsApp
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    Your message will be sent directly to our WhatsApp for instant response.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* WhatsApp Direct */}
              <div className="bg-green-50 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get instant responses to your queries. Chat with us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/923153309070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium transition-colors text-center"
                >
                  Start Chat
                </a>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office Hours */}
              <div className="bg-red-600 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/20">
                    <p className="text-white/80 text-xs">
                      Emergency support available 24/7 via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl font-bold text-red-600 mb-4">
              Visit Our Office
            </h2>
            <p className="text-sm xs:text-base text-gray-600 mb-2">
              Office no 406, Main Peshawar Rd, near Hotel One Inn Daewoo Express
            </p>
            <p className="text-sm xs:text-base text-gray-600">
              Jhangi Sayedan, Islamabad, 44000
            </p>
          </div>
          <div className="rounded-xl xs:rounded-2xl overflow-hidden shadow-lg h-64 xs:h-80 sm:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.0!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/rNE3RXtnzyVFKpqC7?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
