import Link from "next/link";

export default function JobSeekersCTA() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className="relative rounded-2xl overflow-hidden bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: "url('/employers/ready-to.png')" }}
        >
          <div className="relative px-8 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1F2029]">
              How to Get Started
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
                <div className="w-1/2 h-full bg-[#1c9fda]" />
                <div className="w-1/2 h-full bg-[#8dc63f]" />
              </div>
            </div>
            <p className="mt-6 text-lg sm:text-xl text-[#1F2029] max-w-2xl mx-auto leading-relaxed">
              Submit your resume and one of our recruiters will reach out within
              48 hours for an initial conversation.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1c9fda] px-8 py-4 text-lg font-semibold text-white hover:bg-[#178FC3] transition shadow-lg hover:shadow-xl"
              >
                Submit Your Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
