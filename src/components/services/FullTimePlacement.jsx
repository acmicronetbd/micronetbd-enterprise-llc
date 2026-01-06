import { fullTimePlacement } from "@/data/services";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function FullTimePlacement() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            {fullTimePlacement.headline}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            {fullTimePlacement.body}
          </p>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-white rounded-xl border border-gray-100">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Ready to build your Salesforce team?
            </h3>
            <p className="mt-1 text-gray-600">
              Let us find the perfect candidates for your permanent positions.
            </p>
          </div>
          <a
            href="/employers"
            className="inline-flex items-center justify-center rounded-lg bg-[#1BA0DA] px-6 py-3 text-base font-semibold text-white hover:bg-[#178FC3] transition"
          >
            Start Hiring
            <HiOutlineArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
