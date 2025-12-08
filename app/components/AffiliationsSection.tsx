"use client";

import Image from "next/image";

export default function AffiliationsSection() {
  const affiliations = [
    {
      id: 1,
      name: "Government of Pakistan",
      image: "/affiliations/1.png",
    },
    {
      id: 2,
      name: "FBR Pakistan",
      image: "/affiliations/2.png",
    },
    {
      id: 3,
      name: "COTHM Pakistan",
      image: "/affiliations/3.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Affiliations
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* 3 Logos Side by Side */}
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {affiliations.map((affiliation) => (
            <div
              key={affiliation.id}
              className="flex-shrink-0"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <Image
                  src={affiliation.image}
                  alt={affiliation.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* License Numbers */}
        <div className="text-center mt-12">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 tracking-wider">
            GL # 5866 | TM # 663170
          </p>
        </div>
      </div>
    </section>
  );
}
