import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, highlight }) => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#002800] dark:text-white tracking-tight leading-[1.1]">
        {/* Split the main text into words for animation */}
        {text.split(" ").map((word, index) => (
          <span key={index} className="inline-block mr-3">
            <motion.span variants={item}>{word}</motion.span>
          </span>
        ))}
        <br />
        {/* The Highlighted Neon Text */}
        <motion.span
          variants={item}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-green-200"
        >
          {highlight}
        </motion.span>
      </h1>
    </motion.div>
  );
};

export default AnimatedText;
