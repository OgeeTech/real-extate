import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-[#001400] transition-colors duration-300 overflow-hidden flex items-center">
      {/* 1. Ambient Background Glows */}
      {/* Adjusted opacity slightly for better visibility in light mode */}
      <div className="absolute top-[-10%] right-[0] w-[500px] h-[500px] bg-[#00FF00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#00FF00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* --- LEFT COLUMN: Text & CTA --- */}
        <div className="text-left order-2 lg:order-1 pt-10 lg:pt-0">
          {/* Your Custom Animated Component */}
          <AnimatedText text="Own Real Estate" highlight="Together. Smarter." />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            Invest in premium properties within your budget, collaborate with
            others, and earn transparently through shared ownership.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/waitlist"
              className="bg-[#00FF00] text-black font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] hover:scale-105 transition-all duration-300"
            >
              Join Waitlist
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 rounded-full font-medium transition-all duration-300 
              border border-gray-300 text-gray-900 hover:bg-gray-100 
              dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/40"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: Image --- */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative order-1 lg:order-2 h-full flex justify-center lg:justify-end items-center"
        >
          {/* Green accent border behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF00]/20 to-transparent rounded-[2.5rem] transform rotate-6 scale-105 z-0 blur-sm" />

          {/* Main Hero Image */}
          <img
            src="/img/Hero.png"
            alt="Modern Architecture"
            className="relative z-10 w-full max-w-md lg:max-w-lg rounded-[2rem] shadow-2xl object-cover border border-gray-200 dark:border-white/10"
            style={{ maxHeight: "650px" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
