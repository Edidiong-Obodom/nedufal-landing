import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import nedufalLogo from "../images/Nedufal.png";

const footerLinks = {
  Services: [
    { label: "Cockroach Control", href: "#services" },
    { label: "Rodent Control", href: "#services" },
    { label: "Mosquito Treatment", href: "#services" },
    { label: "Termite Control", href: "#services" },
    { label: "Bed Bug Treatment", href: "#services" },
    { label: "Wasp/Bee Removal", href: "#services" },
    { label: "Snake Repellant", href: "#services" },
  ],
  "Quick Links": [
    { label: "About Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  Support: [
    { label: "FAQ", href: "#contact" },
    { label: "Emergency Line", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={nedufalLogo}
                alt="NEDUFAL"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-black text-white tracking-wider">
                NEDUFAL
                <span className="text-red-500 text-xs align-super">®</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Professional pest control services for homes and businesses
              across Nigeria. Licensed, certified, and committed to your peace of mind.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              {[
                { icon: Phone, text: "+234 813 668 0852", href: "tel:+2348136680852" },
                { icon: Mail, text: "info@nedufal.com.ng", href: "mailto:info@nedufal.com.ng" },
                { icon: MapPin, text: "22 Road B Close, Festac Town, Lagos", href: "https://maps.google.com/?q=22+Road+B+Close+Festac+Town+Lagos+Nigeria" },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center gap-2 text-sm hover:text-red-400 transition-colors">
                  <Icon size={14} className="text-red-500 flex-shrink-0" />
                  <span>{text}</span>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 bg-white/5 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-red-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>© {new Date().getFullYear()} NEDUFAL®. All rights reserved.</p>
            <span className="hidden sm:block text-white/20">|</span>
            <p className="text-gray-500">CAC Reg. No: RC 1135307</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-semibold">
              24/7 Emergency Support Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
