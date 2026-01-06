import { contractToHire } from "@/data/services";
import {
  HiOutlineDocumentCheck,
  HiOutlineUserPlus,
  HiOutlineClipboardDocumentCheck,
  HiOutlineHandThumbUp,
  HiOutlineCalendarDays,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const steps = [
  {
    step: "01",
    title: "Define Requirements",
    description:
      "Share your Salesforce role needs and we'll identify the right candidates.",
    icon: HiOutlineDocumentCheck,
  },
  {
    step: "02",
    title: "Start the Contract",
    description:
      "Bring the professional onboard for a 3–6 month evaluation period.",
    icon: HiOutlineUserPlus,
  },
  {
    step: "03",
    title: "Evaluate Performance",
    description:
      "Assess cultural fit, technical skills, and team collaboration firsthand.",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    step: "04",
    title: "Convert to Full-Time",
    description:
      "Make a confident hiring decision with no additional placement fees.",
    icon: HiOutlineHandThumbUp,
  },
];

const highlights = [
  {
    label: "Contract Period",
    value: "3–6 Months",
    icon: HiOutlineCalendarDays,
  },
  {
    label: "Conversion Fee",
    value: "Zero",
    icon: HiOutlineCurrencyDollar,
  },
  {
    label: "Risk Level",
    value: "Minimal",
    icon: HiOutlineShieldCheck,
  },
];

export default function ContractToHire() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          {/* <span className="inline-block text-[#1BA0DA] text-sm font-semibold tracking-wide uppercase mb-3">
            Contract-to-Hire
          </span> */}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            {contractToHire.headline}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            {contractToHire.body}
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 bg-[#1BA0DA]/5 rounded-xl p-5 border border-[#1BA0DA]/10"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-[#1BA0DA] text-white flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0" />
                )}
                <div className="relative bg-gray-50 rounded-xl p-6 border border-gray-100 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#1BA0DA] text-white flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <step.icon className="w-6 h-6 text-[#1BA0DA]" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
