"use client";

import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const contactDetails = [
  {
    icon: HiOutlineMapPin,
    title: "Visit Us",
    details: [
      "Micronetbd Enterprise LLC",
      "4 AAA Drive, Suite 205",
      "Hamilton, NJ 08619",
    ],
    link: "https://maps.google.com/?q=4+AAA+Drive+Suite+205+Hamilton+NJ+08619",
    linkText: "Get Directions",
    color: "#1BA0DA",
  },
  {
    icon: HiOutlinePhone,
    title: "Call Us",
    details: ["(609) 613-4656"],
    link: "tel:+16096134656",
    linkText: "Call Now",
    color: "#8dc63f",
  },
  {
    icon: HiOutlineEnvelope,
    title: "Email Us",
    details: ["careers@micronetbd-enterprise.com"],
    link: "mailto:careers@micronetbd-enterprise.com",
    linkText: "Send Email",
    color: "#1BA0DA",
  },
  {
    icon: HiOutlineClock,
    title: "Business Hours",
    details: ["Monday - Friday", "9:00 AM - 6:00 PM EST"],
    link: null,
    linkText: null,
    color: "#8dc63f",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Contact Information
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help you find the perfect Salesforce talent or
            your next career opportunity.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${item.color}05 0%, ${item.color}10 100%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 mt-4 font-medium transition-all duration-300 group/link"
                    style={{ color: item.color }}
                  >
                    <span className="group-hover/link:underline">
                      {item.linkText}
                    </span>
                    <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                )}
              </div>

              {/* Decorative corner */}
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
            {/* Map Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1BA0DA]/10 text-[#1BA0DA] flex items-center justify-center">
                <HiOutlineMapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Our Location</h3>
                <p className="text-sm text-gray-500">
                  4 AAA Drive, Suite 205, Hamilton, NJ 08619
                </p>
              </div>
            </div>
            {/* Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.5!2d-74.6703!3d40.2248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1234567890%3A0x1234567890abcdef!2s4%20AAA%20Dr%20%23205%2C%20Hamilton%20Township%2C%20NJ%2008619!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Micronetbd Enterprise LLC Location"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
