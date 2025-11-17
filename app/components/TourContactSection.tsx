import { Phone, Mail } from "lucide-react";

export default function TourContactSection() {
  return (
    <>
      {/* Desktop Contact Section */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-8">
        {/* Our Contact Card */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100 shadow-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6">Our Contact</h2>
          
          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Phone</h3>
              <a href="tel:+923174101300" className="text-red-600 hover:text-red-700 font-semibold underline block">
                +92 317 4101300
              </a>
              <a href="https://wa.me/923153309070" className="text-red-600 hover:text-red-700 font-semibold underline block text-sm">
                WhatsApp: 0315 3309070
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Email Address</h3>
              <a href="mailto:Info.Towardsdestination@gmail.com" className="text-red-600 hover:text-red-700 font-semibold underline break-all">
                Info.Towardsdestination@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-3">Social Media</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/towardsdestination.pk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/towardsdestination.pk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@TowardsDestination.pk_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Where to Find Us Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6">Where to Find Us</h2>
          
          <h3 className="text-lg font-bold text-red-600 mb-3">Islamabad Office (Main Head Office)</h3>
          <p className="text-gray-700 mb-6 leading-relaxed text-sm">
            Office no 406, Main Peshawar Rd, near Hotel One Inn Daewoo Express, Jhangi Sayedan, Islamabad, 44000
          </p>
          
          <div className="space-y-3">
            <a href="tel:+923174101300" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
              <Phone className="w-4 h-4" />
              +92 317 4101300
            </a>
            <a href="mailto:Info.Towardsdestination@gmail.com" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold break-all">
              <Mail className="w-4 h-4" />
              Info.Towardsdestination@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Contact Section */}
      <div className="lg:hidden mt-8 space-y-6">
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
            <a href="mailto:Info.Towardsdestination@gmail.com" className="text-red-600 hover:text-red-700 font-semibold underline text-center break-all">
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
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
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
              <a href="mailto:Info.Towardsdestination@gmail.com" className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 font-semibold break-all">
                <Mail className="w-5 h-5" />
                Info.Towardsdestination@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
