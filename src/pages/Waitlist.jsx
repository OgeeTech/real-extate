import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "./Footer";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investment: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    alert("Thank you for joining the waitlist! You’ll be contacted shortly.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      investment: "",
      terms: false,
    });
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl bg-white dark:bg-[#111] rounded-3xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 text-center">
            Join Our Waitlist
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
            Be among the first to access fractional real estate investment
            opportunities.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00FF00]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00FF00]"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (WhatsApp preferred)"
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00FF00]"
            />

            <select
              name="investment"
              value={formData.investment}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00FF00]"
            >
              <option value="">Investment Interest (Optional)</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
            </select>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded border-gray-300 dark:border-gray-700 text-[#00FF00] focus:ring-[#00FF00]"
              />
              <span>
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-[#00FF00] underline hover:text-green-400"
                >
                  Terms & Conditions
                </Link>{" "}
                (optional)
              </span>
            </label>

            {/* PS Notice */}
            <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#1a1a1a] p-4 rounded-xl">
              <strong>PS:</strong> By joining the waitlist, you may be added to
              a private <strong>WhatsApp group</strong> for early updates,
              announcements, and exclusive opportunities.
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-[#00FF00] text-black font-bold rounded-xl hover:bg-green-500 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Waitlist;
