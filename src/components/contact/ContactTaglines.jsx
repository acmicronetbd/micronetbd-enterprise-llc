"use client";

import { HiOutlineSparkles } from "react-icons/hi2";

const taglines = [
  {
    text: "Where Salesforce Careers Begin",
    featured: true,
  },
  {
    text: "Salesforce Talent. Delivered.",
  },
  {
    text: "The Right People. The Right Fit. Every Time.",
  },
  {
    text: "Your Salesforce Staffing Partner",
  },
  {
    text: "Building Teams That Build Success",
  },
  {
    text: "Beyond Recruiting. Building Careers.",
  },
  {
    text: "Salesforce Professionals, On Demand",
  },
  {
    text: "We Find Salesforce Talent. You Focus on Growth.",
  },
];

export default function ContactTaglines() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1BA0DA]/10 to-[#8dc63f]/10 mb-4">
            <HiOutlineSparkles className="w-5 h-5 text-[#1BA0DA]" />
            <span className="text-sm font-medium text-gray-700">
              Our Promise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            What We Stand For
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
        </div>

        {/* Featured Tagline */}
        <div className="mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1BA0DA] to-[#8dc63f] rounded-2xl blur-lg opacity-20" />
            <div className="relative bg-gradient-to-r from-[#1BA0DA] to-[#8dc63f] rounded-2xl p-8 sm:p-10 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                &quot;Where Salesforce Careers Begin&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Taglines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {taglines.slice(1).map((tagline, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, rgba(27, 160, 218, 0.05) 0%, rgba(27, 160, 218, 0.1) 100%)"
                      : "linear-gradient(135deg, rgba(141, 198, 63, 0.05) 0%, rgba(141, 198, 63, 0.1) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center min-h-[80px]">
                <p
                  className={`text-center font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 ${
                    index % 2 === 0
                      ? "group-hover:bg-gradient-to-r group-hover:from-[#1BA0DA] group-hover:to-[#1BA0DA]"
                      : "group-hover:bg-gradient-to-r group-hover:from-[#8dc63f] group-hover:to-[#8dc63f]"
                  }`}
                >
                  &quot;{tagline.text}&quot;
                </p>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${
                  index % 2 === 0 ? "bg-[#1BA0DA]" : "bg-[#8dc63f]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Partner with us to build exceptional Salesforce teams that drive
            your business forward.
          </p>
        </div>
      </div>
    </section>
  );
}
