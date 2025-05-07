import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import WhoAreWe from './assets/components/WhoAreWe';
import WhatWeDo from './assets/components/WhatWeDo';
import Projects from './assets/components/Projects.jsx';
import Footer from './assets/components/Footer';

function App() {
  const [pageTitle, setPageTitle] = useState("Aaven");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "Aaven";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    switch (currentSection) {
      case "about":
        setPageTitle("ABOUT");
        break;
      case "solutions":
        setPageTitle("SOLUTIONS");
        break;
      case "inquiries":
        setPageTitle("INQUIRIES");
        break;
      default:
        setPageTitle("Aaven");
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      <section id="aaven">
        <Hero />
      </section>

      <section id="about">
        <WhoAreWe />
      </section>

      <section id="solutions">
        <WhatWeDo />
        <Projects />
      </section>

      <section id="inquiries">
        <Footer />
      </section>
    </>
  );
}

export default App;
