import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import nedufalLogo from "../images/Nedufal.png";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: Award, label: "10+ Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-800/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Nigeria's Trusted Pest Control Experts
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            We Eliminate
            <span className="block text-red-500">Every Pest.</span>
            <span className="block text-gray-300 text-4xl sm:text-5xl font-bold mt-2">
              Guaranteed.
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg">
            NEDUFAL is Nigeria's trusted pest control company. Fast, safe, and
            effective treatments for cockroaches, rodents, termites, bed bugs
            and more for homes and businesses nationwide.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-red-600/40 active:scale-95"
            >
              Get Free Inspection
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5"
            >
              Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-gray-400"
              >
                <Icon size={18} className="text-red-500" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — logo + stats */}
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600/25 blur-3xl rounded-full" />
            <img
              src={nedufalLogo}
              alt="NEDUFAL"
              className="relative w-80 max-w-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {[
              { value: "10K+", label: "Clients Served" },
              { value: "99%", label: "Success Rate" },
              { value: "15+", label: "Pest Types" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm"
              >
                <div className="text-3xl font-black text-red-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 fill-white"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
