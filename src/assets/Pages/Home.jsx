import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero.jsx';
import WhoAreWe from '../components/WhoAreWe.jsx';
import WhatWeDo from '../components/WhatWeDo.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx'; // ✅ Missing import added

const Home = () => {
  const [pageTitle, setPageTitle] = useState("Aaven");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "aaven";

    sections.forEach((section) => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

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
};

export default Home;
