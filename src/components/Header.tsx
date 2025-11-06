import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg sm:text-xl font-light tracking-wider hover:opacity-70 transition-opacity"
          >
            MADRAS SPACES
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("awards")}
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              AWARDS
            </button>
            <button
              onClick={() => scrollToSection("people")}
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              PEOPLE
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              CONTACT
            </button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity text-left"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("awards")}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity text-left"
              >
                AWARDS
              </button>
              <button
                onClick={() => scrollToSection("people")}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity text-left"
              >
                PEOPLE
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity text-left"
              >
                CONTACT
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
