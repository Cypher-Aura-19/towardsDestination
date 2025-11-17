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
      details: ["Info.Towardsdestination@gmail.com", "Quick response guaranteed"],
      link: "Info.Towardsdestination@gmail.com"
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
            <div className="w-2 h-2 bg-red-500 rounded-full shrink-0"></div>
            <span>Registered with FBR, SECP, DTS & Nadra</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards - Hidden on Mobile */}
      <section className="hidden lg:block py-8 xs:py-10 sm:py-12 bg-gray-50 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 xs:p-7 sm:p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-5">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-red-600 mb-3 text-lg">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="block">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`${idx === 0 ? 'text-red-600 font-semibold text-base' : 'text-gray-600 text-sm'}`}>
                          {detail}
                        </p>
                      ))}
                    </a>
                  ) : (
                    info.details.map((detail, idx) => (
                      <p key={idx} className={`${idx === 0 ? 'text-red-600 font-semibold text-base' : 'text-gray-600 text-sm'}`}>
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
          
          {/* Mobile Contact Section - Before Form */}
          <div className="lg:hidden mb-8">
            {/* Our Contact Card */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100 shadow-lg">
              <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">Our Contact</h2>
              
              {/* Phone */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Phone</h3>
                <a href="tel:+923174101300" className="text-red-600 hover:text-red-700 font-semibold text-lg underline mb-1">
                  +92 317 4101300
                </a>
                <a href="https://wa.me/923153309070" className="text-red-600 hover:text-red-700 font-semibold underline">
                  WhatsApp: 0315 3309070
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Email Address</h3>
                <a href="mailto:Info.Towardsdestination@gmail.com" className="text-red-600 hover:text-red-700 font-semibold underline text-center">
                  Info.Towardsdestination@gmail.com
                </a>
              </div>

              {/* Social Media */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Social Media</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/towardsdestination.pk" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/towardsdestination.pk/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@TowardsDestination.pk_" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Where to Find Us Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mt-6">
              <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Where to Find Us</h2>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-red-600 mb-4">Islamabad Office (Main Head Office)</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Office no 406, Main Peshawar Rd, near Hotel One Inn Daewoo Express, Jhangi Sayedan, Islamabad, 44000
                </p>
                
                <div className="space-y-3">
                  <a href="tel:+923174101300" className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                    <Phone className="w-5 h-5" />
                    +92 317 4101300
                  </a>
                  <a href="mailto:Info.Towardsdestination@gmail.com" className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                    <Mail className="w-5 h-5" />
                    Info.Towardsdestination@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
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
              <div className="bg-red-50 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 border border-red-200">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
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
                  className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-medium transition-colors text-center"
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
