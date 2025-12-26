"use client";

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Quote Icon */}
          <div className="flex-shrink-0">
            <svg 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-gray-300" 
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M12,48c0-12,4-23,12-33l8,4c-6,8-10,17-10,25c0,2,0.5,4,1.5,5.5S26,52,28,52c3,0,6,1,8,3s3,5,3,8 c0,3-1,6-3,8s-5,3-8,3c-4,0-8-2-11-5S12,61,12,48z M52,48c0-12,4-23,12-33l8,4c-6,8-10,17-10,25c0,2,0.5,4,1.5,5.5S66,52,68,52 c3,0,6,1,8,3s3,5,3,8c0,3-1,6-3,8s-5,3-8,3c-4,0-8-2-11-5S52,61,52,48z"/>
            </svg>
          </div>

          {/* Testimonial Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-4 sm:mb-6">
              "HAD AN INCREDIBLE TIME WITH TOWARDSDESTINATION TEAM ON A MEMORABLE TRIP!
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-600 leading-relaxed">
              From laughter to learning, every moment was truly special. Exploring new places together built stronger bonds.."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

