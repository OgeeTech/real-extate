import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/layouts/Navbar";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Testimonials from "./Testimonial";
import Waitlist from "./Waitlist";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <FAQ />

      <Footer />
    </div>
  );
};

export default Home;
