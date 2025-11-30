import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // If we're not on the homepage, navigate there first
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
              onClick={() => scrollToSection("projects")}
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              PROJECTS
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-light tracking-wide hover:opacity-70 transition-opacity outline-none">
                STUDIO
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuItem onClick={() => scrollToSection("about")} className="cursor-pointer">
                  ABOUT
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("awards")} className="cursor-pointer">
                  AWARDS
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              CONTACT
            </button>
            <a
              href="https://www.instagram.com/madras_spaces/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
            >
              <Instagram className="h-5 w-5" />
            </a>
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
                onClick={() => scrollToSection("projects")}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity text-left"
              >
                PROJECTS
              </button>
              <div className="text-sm font-light tracking-wide text-left opacity-50">STUDIO</div>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity text-left pl-4"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("awards")}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity text-left pl-4"
              >
                AWARDS
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
