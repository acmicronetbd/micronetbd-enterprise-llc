import {
  HiOutlinePhone,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineCalendarDays,
  HiOutlineCheckBadge,
  HiOutlineArrowLongRight,
  HiOutlineArrowLongDown,
} from "react-icons/hi2";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your organization, team dynamics, technical requirements, and culture.",
    icon: HiOutlinePhone,
  },
  {
    number: "02",
    title: "Talent Sourcing",
    description:
      "Our recruiters tap into our proprietary database, professional networks, and targeted outreach.",
    icon: HiOutlineUserGroup,
  },
  {
    number: "03",
    title: "Screening & Vetting",
    description:
      "Technical assessments, certification verification, reference checks, and behavioral interviews.",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    number: "04",
    title: "Candidate Presentation",
    description:
      "You receive a shortlist of qualified candidates with detailed profiles and our recommendations.",
    icon: HiOutlineDocumentText,
  },
  {
    number: "05",
    title: "Interview Coordination",
    description:
      "We manage scheduling, preparation, and feedback collection.",
    icon: HiOutlineCalendarDays,
  },
  {
    number: "06",
    title: "Offer & Onboarding Support",
    description:
      "We assist with offer negotiations and ensure a smooth transition.",
    icon: HiOutlineCheckBadge,
  },
];

export default function PlacementProcess() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Our Placement Process
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            A streamlined approach to finding the perfect Salesforce talent for your team.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex items-center">
              {/* Card */}
              <div className="flex-1 relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1BA0DA]/30 transition-all duration-300">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-6 bg-[#1BA0DA] text-white text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#1BA0DA]/10 text-[#1BA0DA] flex items-center justify-center">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow - Hidden on last item and at row ends */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal arrow for desktop - hide at end of each row */}
                  <div
                    className={`hidden lg:flex items-center justify-center w-8 shrink-0 ${
                      (index + 1) % 3 === 0 ? "lg:hidden" : ""
                    }`}
                  >
                    <HiOutlineArrowLongRight className="w-8 h-8 text-[#1BA0DA]" />
                  </div>

                  {/* Horizontal arrow for tablet - hide at end of each row */}
                  <div
                    className={`hidden md:flex lg:hidden items-center justify-center w-8 shrink-0 ${
                      (index + 1) % 2 === 0 ? "md:hidden" : ""
                    }`}
                  >
                    <HiOutlineArrowLongRight className="w-8 h-8 text-[#1BA0DA]" />
                  </div>

                  {/* Vertical arrow for mobile */}
                  <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2">
                    <HiOutlineArrowLongDown className="w-8 h-8 text-[#1BA0DA]" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
