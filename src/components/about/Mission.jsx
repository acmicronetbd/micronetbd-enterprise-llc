import {
  HiOutlineRocketLaunch,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const highlights = [
  {
    title: "Singular Focus",
    description:
      "Connecting exceptional Salesforce professionals with organizations that need them.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Part of Micronetbd Family",
    description:
      "Deep ecosystem expertise while focusing exclusively on talent placement.",
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "Global Talent Network",
    description:
      "Headquarters in New Jersey with talent centers across Bangladesh, India, and Philippines.",
    icon: HiOutlineGlobeAlt,
  },
  {
    title: "Dedicated to Talent",
    description:
      "We find it, vet it, and place it where it can thrive and transform organizations.",
    icon: HiOutlineUserGroup,
  },
];

export default function Mission() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Our Mission
          </h2>
          <p className="mt-8 text-xl text-gray-700 leading-relaxed font-medium">
            To be the most trusted source for Salesforce talent placement,
            delivering professionals who don&apos;t just fill roles but transform
            organizations.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Micronetbd Enterprise LLC was founded with a singular focus:
              connecting exceptional Salesforce professionals with organizations
              that need them. We understand that the right talent can make the
              difference between a successful Salesforce implementation and a
              costly failure.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As part of the Micronetbd family of companies, we bring deep
              expertise in the Salesforce ecosystem. While our sister company,
              Micronetbd Inc., delivers world-class Salesforce consulting and
              implementation services, Micronetbd Enterprise focuses exclusively
              on talent—finding it, vetting it, and placing it where it can thrive.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1BA0DA] px-6 py-3 text-base font-semibold text-white hover:bg-[#178FC3] transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1BA0DA]/10 text-[#1BA0DA] group-hover:bg-[#1BA0DA] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
