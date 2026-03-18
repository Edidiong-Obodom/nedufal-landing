import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    avatar: "SJ",
    rating: 5,
    text: "NEDUFAL completely solved our roach problem in one visit. The technician was professional, explained everything clearly, and the results were immediate. Highly recommend!",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Marcus Osei",
    role: "Restaurant Owner",
    avatar: "MO",
    rating: 5,
    text: "As a restaurant owner, pest control is critical. NEDUFAL has been our partner for 3 years now. Zero pest incidents since we started. Worth every penny.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Amina Diallo",
    role: "Property Manager",
    avatar: "AD",
    rating: 5,
    text: "I manage 12 apartments and NEDUFAL handles all our pest control needs. Fast response, fair pricing, and their prevention program keeps all units pest-free.",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Tom Richards",
    role: "Homeowner",
    avatar: "TR",
    rating: 5,
    text: "Had a serious termite issue that other companies couldn't fix. NEDUFAL sent specialists who identified the problem immediately and resolved it completely. 5 stars!",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Linda Mensah",
    role: "Office Manager",
    avatar: "LM",
    rating: 5,
    text: "Our office had a rodent issue. NEDUFAL responded within hours, set up traps, and sealed entry points. Professional, discreet, and effective.",
    color: "bg-red-100 text-red-700",
  },
  {
    name: "James Adu",
    role: "Family Man",
    avatar: "JA",
    rating: 5,
    text: "I was worried about chemicals with young kids at home. NEDUFAL used eco-friendly products and kept my family safe. The bed bugs are completely gone now.",
    color: "bg-yellow-100 text-yellow-700",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-bold text-sm tracking-widest uppercase mb-3">
            Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Don't take our word for it. Here's what thousands of satisfied
            customers have to say.
          </p>

          {/* Overall rating */}
          <div className="mt-6 inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-black text-gray-900 text-xl">4.9/5</span>
            <span className="text-gray-500 text-sm">from 2,300+ reviews</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-red-200" />

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-black flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
