import { managedStaffing } from "@/data/services";
import {
  HiOutlineUserGroup,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineShieldCheck,
  HiOutlineArrowPath,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const features = [
  {
    title: "Dedicated Salesforce Resources",
    description:
      "Get skilled professionals who work exclusively on your projects, fully integrated with your team.",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Scale up or down based on project needs — monthly, quarterly, or long-term arrangements.",
    icon: HiOutlineAdjustmentsHorizontal,
  },
  {
    title: "Employer of Record (EOR)",
    description:
      "We handle payroll, benefits, compliance, and HR — you focus on the work that matters.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Performance Guarantee",
    description:
      "Full accountability with replacement guarantee if a resource doesn't meet expectations.",
    icon: HiOutlineArrowPath,
  },
];

const benefits = [
  "Reduce hiring overhead and administrative burden",
  "Access pre-vetted Salesforce talent immediately",
  "Maintain team continuity with dedicated resources",
  "Scale your Salesforce capacity without long-term commitments",
];

export default function ManagedStaffing() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          {/* <span className="inline-block text-[#1BA0DA] text-sm font-semibold tracking-wide uppercase mb-3">
            Managed Staffing
          </span> */}
          <h2 className="text-xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            {managedStaffing.headline}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            {managedStaffing.body}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#1BA0DA]/10 text-[#1BA0DA] flex items-center justify-center">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-14 bg-white rounded-xl border border-gray-100 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Why Choose Managed Staffing?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <HiOutlineCheckCircle className="shrink-0 w-6 h-6 text-[#1BA0DA] mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
