import Link from "next/link";

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231BA0DA' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1BA0DA] rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#1BA0DA] rounded-full blur-3xl opacity-5" />

      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1BA0DA] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#1BA0DA] transition">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-gray-400 hover:text-[#1BA0DA] transition">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#1BA0DA] font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            {title}
          </h1>

          {/* Decorative underline */}
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 rounded-full overflow-hidden flex">
              <div className="w-1/2 h-full bg-[#1c9fda]" />
              <div className="w-1/2 h-full bg-[#8dc63f]" />
            </div>
          </div>

          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

    </section>
  );
}
