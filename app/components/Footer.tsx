"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-red-600 via-red-700 to-red-600 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 animate-fade-in-up">
          {/* Company Info */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <Link href="/" className="flex items-center justify-center mb-4">
              <div className="relative w-full h-40 sm:h-40 md:h-40">
                <Image
                  src="/footer.png"
                  alt="TOWARDSDESTINATION.PK"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner for Northern Pakistan tours, Umrah packages, and premium accommodation. Creating unforgettable journeys since 2012.
            </p>
            <div className="text-gray-300 text-sm space-y-1">
              <p className="font-semibold text-white">Registered from:</p>
              <p>FBR • SECP • DTS for Travel • Nadra</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/northern-tours" className="hover:text-white transition-colors">
                  Northern Tours
                </Link>
              </li>
              <li>
                <Link href="/umrah-packages" className="hover:text-white transition-colors">
                  Umrah Packages
                </Link>
              </li>
              <li>
                <Link href="/hotel" className="hover:text-white transition-colors">
                  Our Hotel
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Hunza Valley Tours
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Skardu Expeditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Umrah by Air
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Umrah by Road
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Hotel Accommodation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/rNE3RXtnzyVFKpqC7?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Office no 406, Main Peshawar Rd, near Hotel One Inn Daewoo Express, Jhangi Sayedan, Islamabad, 44000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <div className="text-gray-300">
                  <a href="tel:+923174101300" className="hover:text-white transition-colors block">
                    UAN: +92 317 4101300
                  </a>
                  <a href="https://wa.me/923153309070" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                    WhatsApp: 0315 3309070
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a href="mailto:info@towardsdestination.pk" className="text-gray-300 hover:text-white transition-colors">
                  info@towardsdestination.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              {new Date().getFullYear()} TOWARDSDESTINATION.PK. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
