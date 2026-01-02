import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-50 blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute top-[400px] left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl opacity-40 -translate-x-1/3" />

      {/* Hero Section */}
      <header className="px-6 py-16 md:py-24 lg:py-32 max-w-5xl mx-auto w-full relative">
        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
            Now serving London, Accra, & Bangalore
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-[1.1]">
            Shop global. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Delivered local.
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
            Your personal gateway to global shopping. We shop, consolidate, and forward parcels from <span className="font-semibold text-slate-900">London</span> to you in <span className="font-semibold text-slate-900">Accra</span> or <span className="font-semibold text-slate-900">Bangalore</span> suited to your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="mailto:support@capitaltome.com"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-slate-900 px-8 text-lg font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-lg font-semibold text-slate-900 transition-all hover:border-indigo-200 hover:bg-indigo-50/50 hover:-translate-y-0.5"
            >
              How it Works
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* What We Do */}
        <section id="how-it-works" className="px-6 py-20 bg-slate-50/50 md:py-32 relative">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-3">What We Do</h2>
              <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">Seamless global shopping experience</h3>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Personal Shopping",
                  desc: "We shop on your behalf from high-end stores in global capitals, ensuring you get exactly what you want.",
                  icon: (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  ),
                },
                {
                  title: "Parcel Forwarding",
                  desc: "Shop online using our dedicated address. We receive, inspect, and securely forward your packages.",
                  icon: (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                },
                {
                  title: "Reliable Handling",
                  desc: "End-to-end tracking and premium handling ensure your items arrive in perfect condition.",
                  icon: (
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="px-6 py-20 md:py-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-8">Our Locations</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { city: "London", country: "United Kingdom", color: "bg-blue-50" },
                { city: "Accra", country: "Ghana", color: "bg-yellow-50" },
                { city: "Bangalore", country: "India", color: "bg-green-50" },
              ].map((loc, i) => (
                <div key={i} className={`flex flex-col justify-between rounded-3xl p-8 ${loc.color} bg-opacity-50 border border-slate-100 transition-transform hover:scale-[1.02]`}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{loc.country}</p>
                    <p className="text-3xl font-bold text-slate-900">{loc.city}</p>
                  </div>
                  {/* Decorative map dot or simple graphic can go here if needed */}
                  <div className="mt-8 h-1 w-12 bg-slate-900 rounded-full opacity-10"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Capitaltome */}
        <section className="px-6 py-20 bg-slate-900 text-white md:py-32 relative overflow-hidden">
          {/* Abstract blobs for dark mode vibe */}
          <div className="absolute top-0 right-0 -z-0 h-[400px] w-[400px] rounded-full bg-indigo-900/40 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -z-0 h-[300px] w-[300px] rounded-full bg-blue-900/40 blur-3xl opacity-50" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4">Why Choose Us</h2>
                <h3 className="text-3xl font-bold mb-6 sm:text-4xl">Bridging the gap between you and the world's best markets.</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  We don't just ship boxes; we deliver a lifestyle. Whether it's high-fashion from Bond Street or tech from Bangalore, we handle it with care.
                </p>
                <Link
                  href="mailto:support@capitaltome.com"
                  className="text-white font-semibold border-b border-indigo-500 hover:text-indigo-400 hover:border-indigo-400 transition-colors pb-1"
                >
                  Start your journey &rarr;
                </Link>
              </div>
              <div className="grid gap-6">
                {[
                  { title: "Global Access", desc: "No more 'shipping not available to your country' errors.", icon: "🌍" },
                  { title: "Secure & Insured", desc: "Every parcel is inspected and insured for peace of mind.", icon: "🛡️" },
                  { title: "White-Glove Support", desc: "Direct access to our support team via WhatsApp or Email.", icon: "💬" },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Ready to upgrade your shopping?</h2>
            <p className="text-xl text-slate-600 mb-10">
              Join hundreds of happy customers in Accra and Bangalore who trust Capitaltome.
            </p>
            <Link
              href="mailto:support@capitaltome.com"
              className="inline-flex h-14 items-center justify-center rounded-full bg-indigo-600 px-10 text-lg font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-1"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-lg">capitaltome.</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
            <Link href="mailto:support@capitaltome.com" className="hover:text-indigo-600 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
