import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <main className="min-h-screen bg-white font-sans text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((current) => !current)}
        />
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
