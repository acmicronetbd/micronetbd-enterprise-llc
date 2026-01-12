"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-[90px] items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="Micronetbd Enterprise"
              width={240}
              height={50}
              className="w-20 md:w-32"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 lg:gap-8">
            {[
              ["Services", "/services"],
              ["About", "/about"],
              ["Employers", "/employers"],
              ["Job Seekers", "/job-seekers"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`text-xs lg:text-base font-bold transition relative pb-1 ${
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-[#1ba0da] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1ba0da]"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/employers"
              className="text-xs lg:text-base font-bold text-gray-700 hover:text-gray-900 transition"
            >
              Find Talent
            </Link>
            <Link
              href="/job-seekers"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-base font-semibold text-white transition-all duration-500 bg-size-[200%_auto] bg-left hover:bg-right"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1ca1d7, #3fb4a4, #5BC37C, #3fb4a4, #1ca1d7)",
              }}
            >
              Career Jobs
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-20 z-50 border-t border-gray-100 bg-white shadow-lg">
          <div className="space-y-4 px-4 py-4">
            {[
              ["Services", "/services"],
              ["About", "/about"],
              ["Employers", "/employers"],
              ["Job Seekers", "/job-seekers"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block text-lg font-bold transition ${
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-[#1ba0da] border-l-2 border-[#1ba0da] pl-2"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="pt-4 space-y-2">
              <Link
                href="/employers"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-bold text-gray-700 hover:bg-gray-50 transition"
              >
                Find Talent
              </Link>
              <Link
                href="/job-seekers"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-md bg-[#1BA0DA] px-4 py-2 text-center text-sm font-semibold text-white hover:bg-[#178FC3] transition"
              >
                Career Jobs
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
