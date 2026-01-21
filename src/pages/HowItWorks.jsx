import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Search, Coins, LineChart, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <UserPlus size={32} />,
    title: "Join the Platform",
    description:
      "Create an account or join the waitlist to get early access to fractional real estate investment opportunities.",
  },
  {
    id: 2,
    icon: <Search size={32} />,
    title: "Browse Properties",
    description:
      "Explore vetted real estate listings with full details, pricing, expected returns, and ownership structure.",
  },
  {
    id: 3,
    icon: <Coins size={32} />,
    title: "Invest Fractionally",
    description:
      "Buy a fraction of a property with an amount you can afford instead of paying the full property price.",
  },
  {
    id: 4,
    icon: <LineChart size={32} />,
    title: "Earn & Track Returns",
    description:
      "Receive rental income or profit from appreciation while tracking performance on your dashboard.",
  },
  {
    id: 5,
    icon: <ShieldCheck size={32} />,
    title: "Secure & Transparent",
    description:
      "All investments are protected with legal agreements, clear records, and a mediation process for disputes.",
  },
];

const HowItWorks = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0a0a0a] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002800] dark:text-white">
            How It <span className="text-[#00FF00]">Works</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A simple and transparent process designed to make real estate
            investment accessible to everyone.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-[#111] rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#00FF00]/10 text-[#00FF00] mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
