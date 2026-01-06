export default function Services() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1BA0DA]/10 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#1BA0DA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Full-Time Placement Services
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Find your next Salesforce Administrator, Developer, Architect,
              or Consultant through our rigorous vetting process. We match
              certified professionals with organizations seeking permanent
              team members.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1BA0DA]/10 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#1BA0DA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Managed Staffing Services
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Scale your Salesforce team on demand. Our managed staffing model
              provides dedicated resources who work as an extension of your
              team—without the overhead of traditional hiring.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1BA0DA]/10 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#1BA0DA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Contract-to-Hire Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Test the fit before making a commitment. Our contract-to-hire
              option lets you evaluate talent in real working conditions
              before extending a full-time offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
