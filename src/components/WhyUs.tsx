import {
  ShieldCheck,
  Leaf,
  Clock3,
  BadgeCheck,
  HeartHandshake,
  Microscope,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    description:
      "All our technicians are fully licensed, trained, and certified to handle any pest situation safely.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Methods",
    description:
      "We use environmentally responsible products that are safe for your family, pets, and the planet.",
  },
  {
    icon: Clock3,
    title: "Same-Day Response",
    description:
      "Emergency? We offer same-day and next-day service slots to get you relief fast.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guarantee",
    description:
      "Not happy? We'll come back at no extra cost until the problem is completely resolved.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Pricing",
    description:
      "No hidden fees. We provide clear, upfront quotes before any work begins.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description:
      "We use the latest pest control technology and products for maximum effectiveness.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 relative overflow-hidden"
    >
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-400 font-bold text-sm tracking-widest uppercase mb-3">
            Why Choose NEDUFAL
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            The NEDUFAL Difference
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just treat pests, we protect your peace of mind with
            professional, reliable, and lasting solutions.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 hover:border-red-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-red-600/20 border border-red-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                <Icon size={24} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10,000+", label: "Happy Clients" },
            { value: "15+", label: "Years in Business" },
            { value: "50+", label: "Certified Technicians" },
            { value: "24/7", label: "Support Available" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/5 rounded-2xl py-6 px-4 border border-white/10"
            >
              <div className="text-4xl font-black text-red-400">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
