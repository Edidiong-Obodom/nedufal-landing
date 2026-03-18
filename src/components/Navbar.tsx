import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import nedufalLogo from "../images/Nedufal.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={nedufalLogo}
            alt="NEDUFAL logo"
            className="h-10 w-auto object-contain drop-shadow-md"
          />
          <span
            className={`text-2xl font-black tracking-wider transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            NEDUFAL<span className="text-red-600 text-sm align-super">®</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-semibold text-sm tracking-wide transition-colors hover:text-red-600 ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/2348136680852"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
          >
            <Phone size={16} />
            <span>+234 813 668 0852</span>
          </a>
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-red-200 active:scale-95"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-semibold hover:text-red-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block bg-red-600 text-white text-center font-bold py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              Get Free Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
