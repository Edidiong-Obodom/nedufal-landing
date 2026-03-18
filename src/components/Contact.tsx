import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Cockroach Control",
  "Rodent Control",
  "Mosquito Treatment",
  "Termite Control",
  "Bed Bug Treatment",
  "Wasp/Bee Removal",
  "Snake Repellant",
  "General Pest Inspection",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello NEDUFAL! I'd like to request a free quote.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Service Needed:* ${form.service}`,
      form.message ? `*Details:* ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/2348136680852?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-bold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Fill in the form and our team will get back to you within the hour.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                Contact Info
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: "WhatsApp / Phone",
                    value: "+234 813 668 0852",
                    href: "https://wa.me/2348136680852",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@nedufal.com",
                    href: "mailto:info@nedufal.com",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "22 Road B Close, Festac Town, Lagos",
                    href: "https://maps.google.com/?q=22+Road+B+Close+Festac+Town+Lagos",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 bg-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                      <Icon size={20} className="text-red-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                        {label}
                      </div>
                      <div className="text-gray-900 font-semibold mt-0.5 group-hover:text-red-600 transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-gradient-to-br from-gray-900 to-red-950 rounded-2xl p-6 text-white">
              <h4 className="font-black text-lg mb-4">Working Hours</h4>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "Emergency Only" },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between items-center py-1 border-b border-white/10 last:border-0"
                  >
                    <span className="text-gray-300">{row.day}</span>
                    <span className="font-bold text-red-400">{row.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">
                  24/7 Emergency Line Available
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-5"
            >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Tell Us More (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the pest problem you're experiencing..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black text-lg py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-green-200 active:scale-[0.99]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.1 1.523 5.824L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.883.935-3.625-.235-.372A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="text-center text-xs text-gray-400">
                  Tapping the button will open WhatsApp with your details pre-filled. We respond within minutes.
                </p>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
