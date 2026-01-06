import {
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";

const features = [
  {
    title: "Deep Specialization",
    description:
      "Our recruiters are trained specifically in Salesforce technologies and certifications. We understand what it takes to succeed in each role.",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "Pre-Qualified Candidates",
    description:
      "Every professional in our network has been screened for technical skills, communication abilities, and professional references.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Risk Mitigation",
    description:
      "All placements include a satisfaction guarantee. If a candidate doesn't work out within the first 90 days, we'll find a replacement at no additional cost",
    icon: HiOutlineArrowPathRoundedSquare,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. No surprises. Clear, competitive rates that align with market standards",
    icon: HiOutlineCurrencyDollar,
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            What Sets Us Apart
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1BA0DA]/10 text-[#1BA0DA] group-hover:bg-[#1BA0DA] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
