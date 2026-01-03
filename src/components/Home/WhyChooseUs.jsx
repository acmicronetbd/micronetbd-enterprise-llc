export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Why Companies Trust{" "}
            <span className="text-[#1BA0DA]">Micronetbd Enterprise</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We don&apos;t just place Salesforce professionals — we build teams that
            last, perform, and scale with your business.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {/* Item 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Salesforce-Focused Expertise
            </h3>
            <p className="mt-2 text-base text-gray-600 leading-relaxed">
              We live and breathe the Salesforce ecosystem. Our recruiters
              understand the difference between a Sales Cloud specialist and a
              Service Cloud expert — and why that distinction matters.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Pre-Vetted Talent Pool
            </h3>
            <p className="mt-2 text-base text-gray-600 leading-relaxed">
              Every candidate undergoes technical assessments, certification
              verification, and behavioral interviews before ever reaching your
              desk.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Global Reach, Local Understanding
            </h3>
            <p className="mt-2 text-base text-gray-600 leading-relaxed">
              Access Salesforce talent from the USA, South Asia, and beyond,
              while working with a team that understands your local market and
              business culture.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Speed Without Sacrifice
            </h3>
            <p className="mt-2 text-base text-gray-600 leading-relaxed">
              We deliver an average time-to-fill of 2–3 weeks for most
              Salesforce roles — without compromising on candidate quality or
              long-term fit.
            </p>
          </div>

          {/* Item 5 (Full width on desktop) */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Retention-Focused Matching
            </h3>
            <p className="mt-2 text-base text-gray-600 leading-relaxed max-w-3xl">
              We prioritize long-term success over quick placements. Our
              retention-focused approach results in a 90-day retention rate
              exceeding <span className="font-medium text-gray-900">95%</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
