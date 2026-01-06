import {
  HiOutlineCog6Tooth,
  HiOutlineCodeBracket,
  HiOutlineChartBar,
  HiOutlineBuildingOffice2,
  HiOutlineCloud,
  HiOutlineClipboardDocumentList,
  HiOutlineCpuChip,
} from "react-icons/hi2";

const roles = [
  {
    title: "Salesforce Administrators",
    subtitle: "All levels",
    icon: HiOutlineCog6Tooth,
  },
  {
    title: "Salesforce Developers",
    subtitle: "Apex, LWC, Visualforce",
    icon: HiOutlineCodeBracket,
  },
  {
    title: "Business Analysts & Consultants",
    subtitle: null,
    icon: HiOutlineChartBar,
  },
  {
    title: "Architects",
    subtitle: "Solution, Technical, Enterprise",
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "Specialized Cloud Consultants",
    subtitle: "Sales, Service, Marketing, CPQ",
    icon: HiOutlineCloud,
  },
  {
    title: "Project Managers & Scrum Masters",
    subtitle: null,
    icon: HiOutlineClipboardDocumentList,
  },
  {
    title: "Integration Specialists",
    subtitle: null,
    icon: HiOutlineCpuChip,
  },
];

export default function RolesWeRecruit() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Roles We Recruit For
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.slice(0, 4).map((role) => (
            <div
              key={role.title}
              className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-[#1BA0DA]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-[#1BA0DA]/10 text-[#1BA0DA] flex items-center justify-center group-hover:bg-[#1BA0DA] group-hover:text-white transition-colors duration-300">
                  <role.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {role.title}
                  </h3>
                  {role.subtitle && (
                    <p className="mt-1 text-sm text-gray-500">{role.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {roles.slice(4).map((role) => (
            <div
              key={role.title}
              className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-[#1BA0DA]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-[#1BA0DA]/10 text-[#1BA0DA] flex items-center justify-center group-hover:bg-[#1BA0DA] group-hover:text-white transition-colors duration-300">
                  <role.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {role.title}
                  </h3>
                  {role.subtitle && (
                    <p className="mt-1 text-sm text-gray-500">{role.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
