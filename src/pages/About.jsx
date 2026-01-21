import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-800 dark:text-gray-200 transition-colors duration-300 pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF00]/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white tracking-tight"
          >
            We are democratizing <br />
            <span className="text-[#00FF00]">Property Ownership.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            RealEstate. is a platform designed to facilitate owning property
            within your budget. We bridge the gap between dream and reality by
            allowing users to invest collectively, manage democratically, and
            build wealth together.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. THE CORE PILLARS (Grid) */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Feature 1: Fractional Ownership */}
            <FeatureCard
              number="01"
              title="Group Ownership"
              description="Purchase shares of premium properties (1200sqm+). You are automatically added to a private, anonymous group with your co-owners to oversee your investment."
            />

            {/* Feature 2: The Mediator (Unique from your Doc) */}
            <FeatureCard
              number="02"
              title="Guided Mediation"
              description="No chaotic group chats. Every ownership group is assigned a professional Mediator to maintain order, act as the company's eyes, and facilitate polls."
            />

            {/* Feature 3: Democratic Voting */}
            <FeatureCard
              number="03"
              title="Decision by Consensus"
              description="Sell, rent, or build? Decisions are made via secure polling. We require a 75%-85% consensus to ensure the majority's interest is always protected."
            />
          </motion.div>
        </div>
      </section>

      {/* 3. SPLIT SECTION: BUILD OR RENT */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Beyond just <span className="text-[#00FF00]">holding.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              Most platforms just let you buy a stock. We let you control the
              asset.
            </p>
            <ul className="space-y-4">
              <ListItem text="Rental Income: Shared automatically based on your ownership %." />
              <ListItem text="Building: bring your own contractors (vetted) to develop the land." />
              <ListItem text="Appreciation: Property value updated every 6-12 months." />
              <ListItem text="Liquidity: 6-month lock-up, then sell to the group or public." />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-[500px] w-full bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-300 dark:border-white/10 flex items-center justify-center"
          >
            {/* Abstract Visual Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF00]/20 to-transparent opacity-50" />
            <div className="text-center p-8">
              <h3 className="text-5xl font-bold text-black dark:text-white mb-2">
                85%
              </h3>
              <p className="text-sm uppercase tracking-widest text-[#00FF00]">
                Consensus Required
              </p>
              <p className="mt-4 text-gray-500 text-sm max-w-xs mx-auto">
                Our high threshold for decision making ensures that your
                investment is never sold or altered without strong agreement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
            Ready to own your share?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Join the waitlist today and get early access to our first listing.
          </p>
          <Link
            to="/waitlist"
            className="inline-block bg-[#00FF00] text-black font-bold py-4 px-10 rounded-full hover:shadow-[0_0_20px_rgba(0,255,0,0.4)] hover:scale-105 transition-all duration-300"
          >
            Join Waitlist
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ number, title, description }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 p-8 rounded-2xl hover:border-[#00FF00]/50 transition-colors duration-300 group"
  >
    <div className="text-5xl font-bold text-gray-200 dark:text-white/10 mb-6 group-hover:text-[#00FF00]/20 transition-colors">
      {number}
    </div>
    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

// Reusable List Item
const ListItem = ({ text }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00FF00]/20 flex items-center justify-center mt-1 mr-3">
      <svg
        className="w-3 h-3 text-[#00FF00]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <span className="text-gray-700 dark:text-gray-300">{text}</span>
  </div>
);

export default About;
