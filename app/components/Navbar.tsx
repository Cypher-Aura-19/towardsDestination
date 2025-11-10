"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="w-full max-w-[1400px] mx-auto px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 xs:gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">
            <div className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="TOWARDSDESTINATION.PK"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden lg:block">
              <span className="text-xl font-bold text-red-600 block leading-tight whitespace-nowrap">TOWARDSDESTINATION.PK</span>
              <span className="text-xs text-gray-600 font-semibold whitespace-nowrap">Let's have an Adventure</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Home
            </Link>
            
            {/* Public Tours Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap">
                Public Tours
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl py-2 border border-gray-100 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link 
                  href="/public-tours/by-air"
                  className="block px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  By Air
                </Link>
                <Link 
                  href="/public-tours/by-road"
                  className="block px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  By Road
                </Link>
              </div>
            </div>

            <Link 
              href="/private-tours" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Private Tours
            </Link>
            <Link 
              href="/international-tours" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              International Tours
            </Link>
            <Link 
              href="/gallery"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Book Now Button */}
          <Link 
            href="/contact"
            className="hidden xl:inline-flex bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors shadow-md whitespace-nowrap shrink-0"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            <Link 
              href="/" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Public Tours Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-semibold rounded-lg"
              >
                Public Tours
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  isMobileDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`transition-all duration-200 overflow-hidden ${
                isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  href="/public-tours/by-air"
                  className="block pl-8 pr-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  By Air
                </Link>
                <Link 
                  href="/public-tours/by-road"
                  className="block pl-8 pr-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  By Road
                </Link>
              </div>
            </div>

            <Link 
              href="/private-tours" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Private Tours
            </Link>
            <Link 
              href="/international-tours" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              International Tours
            </Link>
            <Link 
              href="/gallery" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile Book Now Button */}
            <Link 
              href="/contact"
              className="block mx-4 mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-center font-bold transition-colors shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
