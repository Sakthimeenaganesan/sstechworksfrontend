import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Instagram,
  Github
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0f1f] to-[#060b17] text-gray-300">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-14">

        {/* ===== COMPANY ===== */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-5">
            S&S Techworks
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            We craft scalable digital experiences — from modern websites
            and mobile applications to branding and academic solutions.
            Clean code. Clear communication. Real impact.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Globe, Linkedin, Instagram, Github].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-indigo-600 transition cursor-pointer"
              >
                <Icon size={18} className="text-gray-300 hover:text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* ===== SERVICES ===== */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Services
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Mobile Applications
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Branding & Posters
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Academic Projects
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Technical Support
            </li>
          </ul>
        </div>

        {/* ===== QUICK LINKS (FIXED) ===== */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h4>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">
            Contact
          </h4>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-500" />
              <span>sstechworks26@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-500" />
              <span>+91 73976 72111</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-indigo-500" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

          </div>
        </div>

      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-white/10" />

      {/* ================= BOTTOM BAR ================= */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

        <p>
          © {new Date().getFullYear()} S&S Techworks. All rights reserved.
        </p>

      </div>

    </footer>
  );
}