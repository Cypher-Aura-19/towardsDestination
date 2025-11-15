"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import TopBar from "./TopBar";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPrivateDropdownOpen, setIsPrivateDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobilePrivateDropdownOpen, setIsMobilePrivateDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);

  return (
    <>
      <TopBar />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100" style={{ marginTop: '33px' }}>
      <div className="w-full max-w-[1400px] mx-auto px-3 xs:px-4 sm:px-6 py-1 xs:py-2 sm:py-2">
        <div className="flex items-center justify-between gap-2 xs:gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 shrink-0 mx-auto xl:mx-0">
            <div className="relative w-48 h-16 xs:w-56 xs:h-18 sm:w-64 sm:h-20 shrink-0 flex items-center justify-center">
              <Image
                src="/logo1.jpeg"
                alt="TOWARDSDESTINATION.PK - Let's have an Adventure"
                width={240}
                height={90}
                className="object-contain scale-[0.7] sm:scale-90 md:scale-90"
                priority
              />
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
                 🛫 By Air
                </Link>
                <Link 
                  href="/public-tours/by-road"
                  className="block px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                 🛣 ️ By Road
                </Link>
              </div>
            </div>

            {/* Private Tours Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsPrivateDropdownOpen(true)}
              onMouseLeave={() => setIsPrivateDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap">
                Private Tours
                <ChevronDown className={`w-4 h-4 transition-transform ${isPrivateDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100 transition-all duration-200 ${isPrivateDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
               
                  <Link 
                    href="/private-tours/by-air"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded"
                  >
                    ✈️ By Air Tours
                  </Link>
                

                <div className="border-t border-gray-100 my-1"></div>

          
                  <Link 
                    href="/private-tours/honeymoon"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded"
                  >
                    💑 Honeymoon Packages
                  </Link>
                

                <div className="border-t border-gray-100 my-1"></div>

               
                  <Link 
                    href="/private-tours/luxury"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded"
                  >
                    ⭐ Luxury Tours
                  </Link>
               

                <div className="border-t border-gray-100 my-1"></div>

                
                  <Link 
                    href="/private-tours"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded"
                  >
                    ✨ Customize Your Tour
                  </Link>
                
                
              </div>
            </div>
            <Link 
              href="/international-tours" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              International Tours
            </Link>

            {/* Other Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold whitespace-nowrap">
                Other Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl py-2 border border-gray-100 transition-all duration-200 ${isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link 
                  href="/transportation"
                  className="block px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  🚗 Rental Services
                </Link>
                <Link 
                  href="/hotels"
                  className="block px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  🏨 Hotel Services
                </Link>
              </div>
            </div>
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
            href="/private-tours"
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
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Public Tours Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg"
              >
                Public Tours
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`transition-all duration-200 overflow-hidden ${
                isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  href="/public-tours/by-air"
                  className="block pl-8 pr-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🛫 By Air
                </Link>
                <Link 
                  href="/public-tours/by-road"
                  className="block pl-8 pr-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                   🚗 By Road
                </Link>
              </div>
            </div>

            {/* Mobile Private Tours Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobilePrivateDropdownOpen(!isMobilePrivateDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg"
              >
                Private Tours
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isMobilePrivateDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`transition-all duration-200 overflow-hidden ${
                isMobilePrivateDropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}>
            
                  <Link 
                    href="/private-tours/by-air"
                    className="block py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-lg px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ✈️ By Air Tours
                  </Link>
               
                
                  <Link 
                    href="/private-tours/honeymoon"
                    className="block py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-lg px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    💑 Honeymoon Packages
                  </Link>
               
               
                  <Link 
                    href="/private-tours/luxury"
                    className="block py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-lg px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ⭐ Luxury Tours
                  </Link>
                
                
                  <Link 
                    href="/private-tours"
                    className="block py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-lg px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ✨ Customize Your Tour
                  </Link>
                
              </div>
            </div>
            <Link 
              href="/international-tours" 
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              International Tours
            </Link>

            {/* Mobile Other Services Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg"
              >
                Other Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileServicesDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`transition-all duration-200 overflow-hidden ${
                isMobileServicesDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  href="/transportation"
                  className="block pl-8 pr-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🚗 Rental Services
                </Link>
                <Link 
                  href="/hotels"
                  className="block pl-8 pr-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🏨 Hotel Services
                </Link>
              </div>
            </div>
            <Link 
              href="/gallery" 
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile Book Now Button */}
            <Link 
              href="/private-tours"
              className="block mx-4 mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-center font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
