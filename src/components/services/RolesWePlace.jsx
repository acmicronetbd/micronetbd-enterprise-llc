import {
  HiOutlineCog6Tooth,
  HiOutlineCodeBracket,
  HiOutlineBuildingOffice2,
  HiOutlineCloud,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentList,
  HiOutlineCpuChip,
  HiOutlineSquares2X2,
  HiOutlineRocketLaunch,
  HiOutlineUserGroup,
  HiOutlineMegaphone,
  HiOutlineCalculator,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineScale,
  HiOutlineHeart,
  HiOutlineBanknotes,
  HiOutlineHandRaised,
} from "react-icons/hi2";

const roleCategories = [
  {
    category: "Administration & Operations",
    roles: [
      { title: "Salesforce Administrators", icon: HiOutlineCog6Tooth },
      { title: "Business Analysts", icon: HiOutlineChartBar },
      { title: "Project Managers", icon: HiOutlineClipboardDocumentList },
      { title: "Release Managers", icon: HiOutlineRocketLaunch },
    ],
  },
  {
    category: "Development & Technical",
    roles: [
      { title: "Salesforce Developers (Apex, LWC, Visualforce)", icon: HiOutlineCodeBracket },
      { title: "Integration Specialists", icon: HiOutlineCpuChip },
      { title: "Technical Architects", icon: HiOutlineSquares2X2 },
      { title: "Solution Architects", icon: HiOutlineBuildingOffice2 },
    ],
  },
  {
    category: "Specialized Platforms",
    roles: [
      { title: "Sales Cloud Consultants", icon: HiOutlineUserGroup },
      { title: "Service Cloud Consultants", icon: HiOutlineCloud },
      { title: "Marketing Cloud Specialists", icon: HiOutlineMegaphone },
      { title: "CPQ Specialists", icon: HiOutlineCalculator },
      { title: "Pardot/Account Engagement Experts", icon: HiOutlineEnvelope },
      { title: "Experience Cloud Developers", icon: HiOutlineGlobeAlt },
    ],
  },
  {
    category: "Industry-Specific",
    roles: [
      { title: "Litify Specialists (Legal)", icon: HiOutlineScale },
      { title: "Health Cloud Consultants", icon: HiOutlineHeart },
      { title: "Financial Services Cloud Experts", icon: HiOutlineBanknotes },
      { title: "Nonprofit Cloud Specialists", icon: HiOutlineHandRaised },
    ],
  },
];

export default function RolesWePlace() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Roles We Place
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Expert Salesforce professionals across every specialization to match your unique needs.
          </p>
        </div>

        {/* Roles by Category */}
        <div className="mt-14 space-y-10">
          {roleCategories.map((categoryGroup) => (
            <div key={categoryGroup.category}>
              <h3 className="text-xl font-semibold text-gray-900 mb-5 pb-4 border-b text-center border-gray-200">
                {categoryGroup.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryGroup.roles.map((role) => (
                  <div
                    key={role.title}
                    className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1BA0DA]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-[#1BA0DA]/10 text-[#1BA0DA] flex items-center justify-center group-hover:bg-[#1BA0DA] group-hover:text-white transition-colors duration-300">
                        <role.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">
                          {role.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
