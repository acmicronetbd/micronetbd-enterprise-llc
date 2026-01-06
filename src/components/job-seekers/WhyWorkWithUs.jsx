import {
  HiOutlineLockClosed,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
} from "react-icons/hi2";

const benefits = [
  {
    title: "Exclusive Opportunities",
    description:
      "Access positions that aren't posted on job boards",
    icon: HiOutlineLockClosed,
  },
  {
    title: "Career Guidance",
    description:
      "Our recruiters provide honest feedback and market insights",
    icon: HiOutlineLightBulb,
  },
  {
    title: "Interview Preparation",
    description:
      "We help you present your best self to prospective employers",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Salary Negotiation Support",
    description:
      "We advocate for competitive compensation on your behalf",
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: "Ongoing Relationship",
    description:
      "We stay connected throughout your career journey",
    icon: HiOutlineHeart,
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Why Work With Us
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.slice(0, 3).map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1BA0DA]/10 text-[#1BA0DA] group-hover:bg-[#1BA0DA] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.slice(3).map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1BA0DA]/10 text-[#1BA0DA] group-hover:bg-[#1BA0DA] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
