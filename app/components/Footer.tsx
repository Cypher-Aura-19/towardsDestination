"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                <Image
                  src="/logo.jpeg"
                  alt="TOWARDSDESTINATION.PK"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">TOWARDSDESTINATION.PK</span>
            </Link>
            <p className="text-lg font-semibold text-white mb-2">Let's have an Adventure</p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted travel partner for Northern Pakistan tours, Umrah packages, and premium accommodation. Creating unforgettable journeys since 2012.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p className="font-semibold text-white">Registered from:</p>
              <p>FBR • SECP • DTS for Travel • Nadra</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/rNE3RXtnzyVFKpqC7?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Office no 406, Main Peshawar Rd, near Hotel One Inn Daewoo Express, Jhangi Sayedan, Islamabad, 44000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <div className="text-gray-400">
                  <a href="tel:+923174101300" className="hover:text-white transition-colors block">
                    UAN: +92 317 4101300
                  </a>
                  <a href="https://wa.me/923153309070" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                    WhatsApp: 0315 3309070
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:info@towardsdestination.pk" className="text-gray-400 hover:text-white transition-colors">
                  info@towardsdestination.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TOWARDSDESTINATION.PK. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
