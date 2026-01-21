import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#000a00] border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* COLUMN 1: Brand & Newsletter (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              to="/"
              className="text-3xl font-bold tracking-tighter text-black dark:text-white"
            >
              Real<span className="text-[#00FF00]">Estate.</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Democratizing property ownership through fractional investing.
              Join a group, vote on decisions, and build wealth together.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider mb-4">
                Join the Waitlist
              </h4>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-[#00FF00] transition-colors"
                />
                <button className="bg-[#00FF00] hover:bg-[#00DD00] text-black p-3 rounded-lg transition-colors duration-300 flex-shrink-0">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Spacer (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* COLUMN 2: Company Links (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-black dark:text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <FooterLink to="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/#how-it-works">How It Works</FooterLink>
              </li>
              <li>
                <FooterLink to="/careers">Careers</FooterLink>
              </li>
              <li>
                <FooterLink to="/blog">Blog</FooterLink>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Support Links (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-black dark:text-white mb-6">
              Support
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <FooterLink to="/faq">FAQ</FooterLink>
              </li>
              <li>
                <FooterLink to="/terms">Terms of Service</FooterLink>
              </li>
              <li>
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact Us</FooterLink>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Socials (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-black dark:text-white mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} RealEstate Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-500">
            <Link
              to="/privacy"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Helper Components for Clean Code ---

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 dark:text-gray-400 hover:text-[#00FF00] dark:hover:text-[#00FF00] transition-colors duration-300 block"
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-[#00FF00] hover:text-black transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
