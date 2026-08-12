"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star, CheckCircle, ArrowRight } from "lucide-react";

export default function ClothingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 flex-grow flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/clothing-banner.png"
            alt="Mr. Fab Clothing"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-sm font-semibold tracking-wider mb-6">
            PREMIUM COLLECTION
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Elevate Your Style with <span className="text-emerald-400">Mr. Fab</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our exclusive range of high-quality, comfortable, and trendy clothing designed for the modern adventurer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mrfab.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1"
            >
              <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Buy Now Our New Clothes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Brand?</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted from the finest materials to ensure maximum comfort and durability for all your journeys.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Designs</h3>
              <p className="text-gray-600">
                Stay trendy with our exclusive collections that blend contemporary fashion with practical wearability.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Shopping</h3>
              <p className="text-gray-600">
                Shop with confidence on our dedicated online store with secure checkout and fast delivery options.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Explore the full collection and upgrade your wardrobe today.
            </p>
            <a
              href="https://mrfab.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors text-lg border-b-2 border-emerald-600 pb-1"
            >
              Visit Mr. Fab Store <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
