const services = [
  {
    emoji: "🪳",
    title: "Cockroach Control",
    description:
      "Complete elimination of cockroach infestations using advanced gel baiting and residual spraying techniques.",
    color: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    tag: "Most Popular",
  },
  {
    emoji: "🐀",
    title: "Rodent Control",
    description:
      "Safe and effective removal of rats and mice with baiting stations, traps, and proofing solutions.",
    color: "from-gray-50 to-gray-100",
    border: "border-gray-200",
    tag: "",
  },
  {
    emoji: "🦟",
    title: "Mosquito Treatment",
    description:
      "Outdoor and indoor mosquito control using fogging and larviciding to protect your family.",
    color: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    tag: "",
  },
  {
    emoji: "🐜",
    title: "Ant & Termite Control",
    description:
      "Targeted ant colony elimination and comprehensive termite protection for your property's structure.",
    color: "from-green-50 to-green-100",
    border: "border-green-200",
    tag: "High Demand",
  },
  {
    emoji: "🐍",
    title: "Snake Repellant",
    description:
      "Professional application of snake repellants to keep snakes away from your home, compound, and surroundings.",
    color: "from-emerald-50 to-emerald-100",
    border: "border-emerald-200",
    tag: "",
  },
  {
    emoji: "🛏️",
    title: "Bed Bug Treatment",
    description:
      "Heat and chemical treatment for complete bed bug eradication with follow-up inspections included.",
    color: "from-red-50 to-red-100",
    border: "border-red-200",
    tag: "",
  },
  {
    emoji: "🐝",
    title: "Wasp & Bee Removal",
    description:
      "Safe relocation and removal of wasp nests and beehives without harm to your family.",
    color: "from-yellow-50 to-yellow-100",
    border: "border-yellow-200",
    tag: "",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-bold text-sm tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Our Pest Control Services
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            From single infestations to full property protection plans, we've
            got the solution.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <a
              key={s.title}
              href={`https://wa.me/2348136680852?text=${encodeURIComponent(`Hi NEDUFAL! I'm interested in your "${s.title}" services. Please provide more information.`)}`}
              target="_blank"
              rel="noreferrer"
              className={`relative rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}
            >
              {s.tag && (
                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              )}
              <div className="text-5xl mb-4">{s.emoji}</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {s.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-green-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.1 1.523 5.824L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.883.935-3.625-.235-.372A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Chat on WhatsApp
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-red-200 active:scale-95"
          >
            Request a Service Today
          </a>
        </div>
      </div>
    </section>
  );
}
