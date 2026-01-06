import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-24 lg:py-28 flex flex-col lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Your Trusted Partner for{" "}
              <span className="text-[#1BA0DA]">Salesforce Talent Placement</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Connecting businesses with certified Salesforce professionals for
              full time employment and managed staffing solutions. We don&apos;t
              consult we deliver the right people for lasting success.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/employers"
                className="inline-flex items-center justify-center rounded-lg bg-[#1BA0DA] px-6 py-3 text-base font-semibold text-white hover:bg-[#178FC3] transition"
              >
                Find Talent
              </Link>

              <Link
                href="/job-seekers"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-[#1BA0DA] border border-[#1BA0DA] hover:bg-[#1BA0DA] hover:text-white transition"
              >
                I&apos;m Looking for Work
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/home/banner-panda.png"
              alt="Salesforce Talent"
              width={500}
              height={500}
              className="w-full max-w-md lg:max-w-lg object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
