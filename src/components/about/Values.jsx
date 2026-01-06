import {
  HiOutlineStar,
  HiOutlineEye,
  HiOutlineUserGroup,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

const values = [
  {
    title: "Quality Over Quantity",
    description:
      "We'd rather present three exceptional candidates than thirty mediocre ones.",
    icon: HiOutlineStar,
  },
  {
    title: "Transparency",
    description:
      "Honest communication with clients and candidates, even when the news isn't what they want to hear.",
    icon: HiOutlineEye,
  },
  {
    title: "Long-Term Relationships",
    description:
      "We measure success by careers built and partnerships sustained, not placements closed.",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Continuous Improvement",
    description:
      "The Salesforce ecosystem evolves constantly. So do we.",
    icon: HiOutlineArrowTrendingUp,
  },
];

export default function Values() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Our Values
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1BA0DA]/10 text-[#1BA0DA] group-hover:bg-[#1BA0DA] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
