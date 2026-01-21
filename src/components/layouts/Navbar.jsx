import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // Define navigation links here for easy management
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  // 1. Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 2. Toggle Function
  const toggleTheme = () => {
    console.log("Before:", document.documentElement.className);

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }

    console.log("After:", document.documentElement.className);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter text-[#002800] dark:text-white hover:scale-105 transition-transform duration-300"
        >
          Real<span className="text-[#00FF00]">Estate.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              active={isActive(link.path)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              // Sun Icon
              <svg
                className="w-5 h-5 text-gray-300 hover:text-[#00FF00]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            ) : (
              // Moon Icon
              <svg
                className="w-5 h-5 text-gray-600 hover:text-[#00FF00]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </button>

          {/* CTA Button */}
          <Link
            to="/waitlist"
            className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full text-sm hover:shadow-[0_0_15px_rgba(0,255,0,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Join Waitlist
          </Link>
        </div>

        {/* MOBILE ACTIONS (Theme + Menu Toggle) */}
        <div className="flex items-center md:hidden gap-4">
          {/* Theme Toggle (Mobile) */}
          <button onClick={toggleTheme} className="focus:outline-none p-1">
            {isDark ? (
              <svg
                className="w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#050505] border-b border-gray-200 dark:border-white/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-6 px-6 py-8">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </MobileNavLink>
              ))}

              <Link
                to="/waitlist"
                onClick={() => setIsOpen(false)}
                className="bg-[#00FF00] text-black font-bold py-3 text-center rounded-lg shadow-[0_0_10px_rgba(0,255,0,0.3)]"
              >
                Join Waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Sub-component for Desktop Links (with Hover Underline Effect)
const NavLink = ({ to, children, active }) => (
  <Link to={to} className="relative group py-2">
    <span
      className={`text-sm font-medium transition-colors duration-300 ${
        active
          ? "text-[#00FF00]"
          : "text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-[#00FF00]"
      }`}
    >
      {children}
    </span>
    {/* Animated Underline */}
    <span
      className={`absolute bottom-0 left-0 h-[2px] bg-[#00FF00] transition-all duration-300 ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </Link>
);

// Sub-component for Mobile Links
const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-[#00FF00] dark:hover:text-[#00FF00] transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;
