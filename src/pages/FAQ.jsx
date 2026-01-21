import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is group real estate ownership?",
    answer:
      "Group real estate ownership allows multiple investors to collectively own a property. Each investor owns a percentage based on their contribution and earns returns accordingly.",
  },
  {
    question: "What is the minimum investment amount?",
    answer:
      "You can start investing from ₦500,000 depending on the property. Each listing clearly shows the required minimum.",
  },
  {
    question: "How are decisions made?",
    answer:
      "Major decisions are made through secure group voting, requiring a 75–85% consensus before execution to ensure the majority's interest is protected.",
  },
  {
    question: "How do investors earn returns?",
    answer:
      "Returns come from rental income and property appreciation. Rental income is shared periodically based on ownership %, while appreciation is realized at resale.",
  },
  {
    question: "Are the properties verified?",
    answer:
      "Yes. All properties are legally verified, professionally valued, and vetted by our legal team before being listed on the platform.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open the first one

  return (
    <section
      id="faq"
      className="py-24 bg-white dark:bg-[#002800] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group order-2 lg:order-1"
        >
          {/* Neon Glow Effect */}
          <div className="absolute -inset-2 bg-[#00FF00]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 aspect-[4/5]">
            <img
              src="/img/faq1.jpeg"
              alt="Real Estate Investment Discussion"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Gradient for Text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-[#00FF00] mb-2">
                Trusted Platform
              </p>
              <p className="text-lg font-medium">
                Over 50+ properties successfully funded by groups like yours.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: FAQ CONTENT */}
        <div className="order-1 lg:order-2">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-sm font-bold text-[#00FF00] uppercase tracking-widest mb-2">
              Support
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
              Everything you need to know about co-owning real estate and
              building wealth securely.
            </p>
          </motion.div>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border-b border-gray-200 dark:border-white/10 ${isOpen ? "pb-4" : "pb-4"}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left group py-4 focus:outline-none"
                  >
                    <h3
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        isOpen
                          ? "text-[#00FF00]"
                          : "text-[#002800] dark:text-white group-hover:text-[#00FF00]"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <div
                      className={`p-2 rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#00FF00]/10 text-[#00FF00]"
                          : "bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:text-[#00FF00]"
                      }`}
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-500 ease-in-out ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* ANSWER (Smooth Height Animation) */}
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed pr-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
