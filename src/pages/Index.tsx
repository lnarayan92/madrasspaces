import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

const Index = () => {
  const location = useLocation();

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Awards />
      <Contact />
    </div>
  );
};

export default Index;
