import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0a0a0a] py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please read these terms carefully before joining our waitlist.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using this platform and joining the waitlist, you
              agree to be bound by these Terms and Conditions. If you do not
              agree, please do not proceed.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              2. Nature of the Service
            </h2>
            <p>
              This platform provides information about fractional real estate
              investment opportunities. Joining the waitlist does not guarantee
              access to investments, returns, or ownership.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              3. No Financial Advice
            </h2>
            <p>
              All content provided is for informational purposes only and does
              not constitute financial, legal, or investment advice. You are
              responsible for conducting your own due diligence.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              4. User Responsibilities
            </h2>
            <p>
              You agree to provide accurate and truthful information when
              joining the waitlist and acknowledge that false information may
              result in removal from the platform.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              5. Privacy & Data Usage
            </h2>
            <p>
              We collect and use your personal information solely for waitlist
              communication, updates, and platform-related announcements. Your
              data will not be sold to third parties.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              6. Risk Disclosure
            </h2>
            <p>
              Real estate investments involve risk, including potential loss of
              capital. Past performance does not guarantee future results.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms & Conditions at any
              time. Updated versions will be posted on this page.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              8. Contact
            </h2>
            <p>
              If you have questions about these terms, please contact our
              support team via the official platform channels.
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            to="/waitlist"
            className="text-[#00FF00] font-medium hover:underline"
          >
            ← Back to Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Terms;
