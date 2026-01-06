"use client";

import { useState } from "react";
import {
  HiOutlineBuildingOffice2,
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlinePaperAirplane,
  HiOutlineLink,
} from "react-icons/hi2";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("employer");

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Get in Touch
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1.5">
            <button
              onClick={() => setActiveTab("employer")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === "employer"
                  ? "bg-[#1BA0DA] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <HiOutlineBuildingOffice2 className="w-5 h-5" />
              For Employers
            </button>
            <button
              onClick={() => setActiveTab("jobseeker")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === "jobseeker"
                  ? "bg-[#8dc63f] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <HiOutlineUser className="w-5 h-5" />
              For Job Seekers
            </button>
          </div>
        </div>

        {/* Forms Container */}
        <div className="max-w-4xl mx-auto">
          {/* Employer Form */}
          {activeTab === "employer" && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
              <div className="mb-8">
                <div className="w-14 h-14 rounded-xl bg-[#1BA0DA]/10 text-[#1BA0DA] flex items-center justify-center mb-4">
                  <HiOutlineBuildingOffice2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Hire Salesforce Talent
                </h3>
                <p className="mt-2 text-gray-600">
                  Ready to discuss your hiring needs? Contact us for a free
                  consultation.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="group">
                    <label
                      htmlFor="employer-name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#1BA0DA] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#1BA0DA]/10">
                      <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#1BA0DA] transition-colors">
                        <HiOutlineUser className="h-5 w-5" />
                      </div>
                      <input
                        type="text"
                        id="employer-name"
                        name="name"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Company Input */}
                  <div className="group">
                    <label
                      htmlFor="employer-company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name *
                    </label>
                    <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#1BA0DA] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#1BA0DA]/10">
                      <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#1BA0DA] transition-colors">
                        <HiOutlineBuildingOffice2 className="h-5 w-5" />
                      </div>
                      <input
                        type="text"
                        id="employer-company"
                        name="company"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                        placeholder="Company Inc."
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="group">
                    <label
                      htmlFor="employer-email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#1BA0DA] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#1BA0DA]/10">
                      <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#1BA0DA] transition-colors">
                        <HiOutlineEnvelope className="h-5 w-5" />
                      </div>
                      <input
                        type="email"
                        id="employer-email"
                        name="email"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="group">
                    <label
                      htmlFor="employer-phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#1BA0DA] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#1BA0DA]/10">
                      <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#1BA0DA] transition-colors">
                        <HiOutlinePhone className="h-5 w-5" />
                      </div>
                      <input
                        type="tel"
                        id="employer-phone"
                        name="phone"
                        className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Roles Input */}
                <div className="group">
                  <label
                    htmlFor="employer-roles"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Roles You&apos;re Hiring For
                  </label>
                  <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#1BA0DA] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#1BA0DA]/10">
                    <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#1BA0DA] transition-colors">
                      <HiOutlineBriefcase className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      id="employer-roles"
                      name="roles"
                      className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                      placeholder="e.g., Salesforce Developer, Admin, Architect"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <label
                    htmlFor="employer-message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell Us About Your Needs
                  </label>
                  <textarea
                    id="employer-message"
                    name="message"
                    rows={4}
                    className="block w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-[#1BA0DA] focus:bg-white focus:shadow-lg focus:shadow-[#1BA0DA]/10 focus:outline-none resize-none"
                    placeholder="Describe your project, team size, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(to right, #1BA0DA, #1589BD)",
                    boxShadow: "0 10px 15px -3px rgba(27, 160, 218, 0.25)",
                  }}
                >
                  <HiOutlinePaperAirplane className="w-5 h-5" />
                  Request Free Consultation
                </button>
              </form>
            </div>
          )}

          {/* Job Seeker Form */}
          {activeTab === "jobseeker" && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
              <div className="mb-8">
                <div className="w-14 h-14 rounded-xl bg-[#8dc63f]/10 text-[#8dc63f] flex items-center justify-center mb-4">
                  <HiOutlineUser className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Find Your Next Opportunity
                </h3>
                <p className="mt-2 text-gray-600">
                  Looking for your next Salesforce opportunity? Submit your
                  resume to join our talent network.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="group">
                    <label
                      htmlFor="seeker-name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#8dc63f] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#8dc63f]/10">
                      <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#8dc63f] transition-colors">
                        <HiOutlineUser className="h-5 w-5" />
                      </div>
                      <input
                        type="text"
                        id="seeker-name"
                        name="name"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                        placeholder="Jane Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label
                      htmlFor="seeker-email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#8dc63f] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#8dc63f]/10">
                      <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#8dc63f] transition-colors">
                        <HiOutlineEnvelope className="h-5 w-5" />
                      </div>
                      <input
                        type="email"
                        id="seeker-email"
                        name="email"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                        placeholder="jane@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="group">
                    <label
                      htmlFor="seeker-phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#8dc63f] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#8dc63f]/10">
                      <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#8dc63f] transition-colors">
                        <HiOutlinePhone className="h-5 w-5" />
                      </div>
                      <input
                        type="tel"
                        id="seeker-phone"
                        name="phone"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Expertise Select */}
                  <div className="group">
                    <label
                      htmlFor="seeker-expertise"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Primary Expertise *
                    </label>
                    <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#8dc63f] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#8dc63f]/10">
                      <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#8dc63f] transition-colors">
                        <HiOutlineBriefcase className="h-5 w-5" />
                      </div>
                      <select
                        id="seeker-expertise"
                        name="expertise"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-gray-900 focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select your expertise</option>
                        <option value="administrator">Salesforce Administrator</option>
                        <option value="developer">Salesforce Developer</option>
                        <option value="architect">Salesforce Architect</option>
                        <option value="consultant">Salesforce Consultant</option>
                        <option value="business-analyst">Business Analyst</option>
                        <option value="project-manager">Project Manager</option>
                        <option value="marketing-cloud">Marketing Cloud Specialist</option>
                        <option value="commerce-cloud">Commerce Cloud Specialist</option>
                        <option value="cpq">CPQ Specialist</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pr-4 text-gray-400 pointer-events-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Select */}
                <div className="group">
                  <label
                    htmlFor="seeker-experience"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Years of Salesforce Experience
                  </label>
                  <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#8dc63f] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#8dc63f]/10">
                    <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#8dc63f] transition-colors">
                      <HiOutlineDocumentText className="h-5 w-5" />
                    </div>
                    <select
                      id="seeker-experience"
                      name="experience"
                      className="flex-1 bg-transparent py-3 pr-4 text-gray-900 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-8">5-8 years</option>
                      <option value="8+">8+ years</option>
                    </select>
                    <div className="pr-4 text-gray-400 pointer-events-none">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div className="group">
                  <label
                    htmlFor="seeker-resume"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Upload Resume *
                  </label>
                  <div className="relative bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 transition-all duration-300 hover:border-[#8dc63f] hover:bg-[#8dc63f]/5">
                    <input
                      type="file"
                      id="seeker-resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex flex-col items-center justify-center py-8 px-4">
                      <div className="w-12 h-12 rounded-full bg-[#8dc63f]/10 flex items-center justify-center mb-3">
                        <HiOutlineDocumentText className="w-6 h-6 text-[#8dc63f]" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">
                        Drop your resume here or <span className="text-[#8dc63f]">browse</span>
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Input */}
                <div className="group">
                  <label
                    htmlFor="seeker-linkedin"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    LinkedIn Profile URL
                  </label>
                  <div className="relative flex items-center bg-gray-50 rounded-xl border-2 border-gray-100 transition-all duration-300 focus-within:border-[#8dc63f] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#8dc63f]/10">
                    <div className="flex items-center justify-center w-12 h-12 text-gray-400 group-focus-within:text-[#8dc63f] transition-colors">
                      <HiOutlineLink className="h-5 w-5" />
                    </div>
                    <input
                      type="url"
                      id="seeker-linkedin"
                      name="linkedin"
                      className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <label
                    htmlFor="seeker-message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="seeker-message"
                    name="message"
                    rows={4}
                    className="block w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-[#8dc63f] focus:bg-white focus:shadow-lg focus:shadow-[#8dc63f]/10 focus:outline-none resize-none"
                    placeholder="Tell us about your career goals, certifications, preferred work arrangement (remote/hybrid/onsite), etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(to right, #8dc63f, #7ab536)",
                    boxShadow: "0 10px 15px -3px rgba(141, 198, 63, 0.25)",
                  }}
                >
                  <HiOutlinePaperAirplane className="w-5 h-5" />
                  Submit Your Application
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
