// Index.js
import React, { useEffect, useState } from "react";
import Preloader from "./themeControls/Preloader/Preloader";
import { ThemeProvider } from "./themeControls/ThemeContext"; // Import ThemeProvider
import "./styles.css";
import "./animations.css";
import Header from "./ThemeTemplates/Header/Header";
import Footer from "./ThemeTemplates/Footer/footer1/Footer";
import Hero1 from "./ThemeTemplates/HeroSections/Hero1/hero";
import Services from "./ThemeTemplates/Services/Services";
import About from "./ThemeTemplates/About/About1/About";
import About2 from "./ThemeTemplates/About/About2/About";
import WhyChooseUs from "./ThemeTemplates/WhyChooseUs/WhyChooseUs";
import FAQ from "./ThemeTemplates/FAQ/FAQ";
import Testimonials from "./ThemeTemplates/Testimonials/Testimonials";
import ContactUs from "./ThemeTemplates/Contact/ContactUs";
import Menu from "./ThemeTemplates/Header/components/Menu/Menu";
import Projects from "./ThemeTemplates/Projects/Projects";
import Process from "./ThemeTemplates/Process/Process";
import Subscribe from "./ThemeTemplates/Subscribe/Subscribe";
import PricingTable from "./ThemeTemplates/Pricing/Pricing";

// Main App Component
const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  useEffect(() => {
    // Simulate an API call or loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // 3.5 seconds delay to match the preloader animation timing

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [isMenuOpen]);

  return (
    <ThemeProvider>
      {" "}
      {/* Wrap everything inside ThemeProvider */}
      <div className="App">
        {/* {loading ? (
          <Preloader />
        ) : ( */}
        <>
          <Header toggleMenu={toggleMenu} /> {/* Pass toggleMenu to Header */}
          <div className="flex column item-align-center">
            <div className="content container">
              <Hero1 />
              <Services />
              <About />
              <About2 />
              <Process />
              <WhyChooseUs />
              <Projects />
              <Testimonials />
              <PricingTable />
              <FAQ />
              <ContactUs />
              <Subscribe />
            </div>
          </div>
          <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Footer
            className={isMenuOpen ? "sticky-footer" : "relative-footer"
            }
          />
        </>
        
        {/* )} */}
      </div>
    </ThemeProvider>
  );
};

export default App;
