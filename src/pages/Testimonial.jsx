import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Finding verified properties used to be stressful. With this platform, everything is transparent, fast, and trustworthy. It completely changed how I search for homes.",
    name: "Donald Jackman",
    role: "Property Investor, Abuja",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    id: 2,
    text: "I was skeptical about fractional ownership, but the mediator system gave me peace of mind. We resolved a rent vs. sell decision in 24 hours. Highly recommended!",
    name: "Sarah Jenkins",
    role: "Digital Nomad, Lagos",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    id: 3,
    text: "The returns are consistent and transparent. I love getting notifications when my rental income drops. It's the easiest passive income I've ever set up.",
    name: "Michael Obi",
    role: "Software Engineer, Lekki",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 md:px-14 w-full bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-300">
      {/* Logo / Brand */}
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Real<span className="text-[#00FF00]">Estate.</span>
        </h2>
      </div>

      {/* Testimonial Content Wrapper */}
      <div className="relative w-full max-w-4xl min-h-[300px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* The Quote Text */}
            <p className="md:text-3xl text-xl leading-relaxed font-medium text-gray-800 dark:text-gray-200">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Profile Section */}
            <div className="flex items-center gap-4 mt-10">
              <img
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#00FF00]"
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
              />
              <div className="text-left">
                <p className="font-bold text-lg text-black dark:text-white">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-[#00FF00] font-medium tracking-wide">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex items-center gap-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-4 h-4 bg-[#00FF00] shadow-[0_0_10px_#00FF00]"
                : "w-3 h-3 bg-gray-300 dark:bg-white/20 hover:bg-[#00FF00]/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
