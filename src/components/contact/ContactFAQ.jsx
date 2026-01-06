"use client";

import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const faqs = [
  {
    question: "How quickly can you fill a Salesforce position?",
    answer:
      "Our average time-to-fill is 2-4 weeks for most Salesforce roles. For urgent needs, we can present qualified candidates within 48-72 hours from our pre-vetted talent pool.",
  },
  {
    question: "What types of Salesforce roles do you specialize in?",
    answer:
      "We specialize in all Salesforce ecosystem roles including Administrators, Developers, Architects, Consultants, Business Analysts, Project Managers, and specialists in Marketing Cloud, Commerce Cloud, CPQ, and more.",
  },
  {
    question: "Do you offer contract, contract-to-hire, and full-time placements?",
    answer:
      "Yes! We offer flexible staffing solutions including contract engagements, contract-to-hire arrangements, and direct full-time placements to meet your specific business needs.",
  },
  {
    question: "How do you vet your Salesforce candidates?",
    answer:
      "Our rigorous vetting process includes technical assessments, certification verification, reference checks, and behavioral interviews. We evaluate both technical skills and cultural fit to ensure quality placements.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve clients across all industries including Healthcare, Financial Services, Retail, Manufacturing, Technology, Non-profit, and Government sectors. Our Salesforce experts have diverse industry experience.",
  },
  {
    question: "Is there a guarantee on your placements?",
    answer:
      "Yes, we stand behind our placements with a satisfaction guarantee. If a placement doesn't work out within the guarantee period, we'll find a replacement at no additional cost.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1BA0DA]/10 to-[#8dc63f]/10 mb-4">
            <HiOutlineQuestionMarkCircle className="w-8 h-8 text-[#1BA0DA]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;ve got answers. If you don&apos;t find what
            you&apos;re looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-gray-50 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-[#1BA0DA] shadow-lg shadow-[#1BA0DA]/10"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-lg font-medium transition-colors ${
                    openIndex === index ? "text-[#1BA0DA]" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 ml-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#1BA0DA] text-white rotate-180"
                      : "bg-white text-gray-400 group-hover:bg-gray-100"
                  }`}
                >
                  <HiOutlineChevronDown className="w-5 h-5" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-200 mb-4" />
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="tel:+16096134656"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1BA0DA] to-[#8dc63f] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Call Us: (609) 613-4656
          </a>
        </div>
      </div>
    </section>
  );
}
