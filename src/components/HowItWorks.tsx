const steps = [
  {
    number: "01",
    title: "Book an Inspection",
    description:
      "Call us or fill out the online form. We'll schedule a convenient time for a thorough inspection of your property.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Expert Assessment",
    description:
      "Our certified technicians identify the pest type, severity, and entry points to craft a custom treatment plan.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Treatment & Elimination",
    description:
      "We apply targeted, eco-friendly treatments to eliminate pests quickly and safely with minimal disruption.",
    icon: "🎯",
  },
  {
    number: "04",
    title: "Follow-Up & Prevention",
    description:
      "We return to confirm the results and provide prevention strategies to keep pests away for good.",
    icon: "✅",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-bold text-sm tracking-widest uppercase mb-3">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            A simple, proven 4-step process that delivers results every time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 z-0" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
              {/* Circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white border-4 border-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-100">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg font-black text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 text-center text-white shadow-2xl shadow-red-200">
          <h3 className="text-3xl font-black mb-3">
            Ready to Live Pest-Free?
          </h3>
          <p className="text-red-100 text-lg mb-8 max-w-lg mx-auto">
            Don't wait for the problem to get worse. Book your free inspection
            today and get a same-day quote.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-red-700 font-black text-lg px-10 py-4 rounded-full hover:bg-red-50 transition-all hover:shadow-xl active:scale-95"
          >
            Book Free Inspection Now
          </a>
        </div>
      </div>
    </section>
  );
}
