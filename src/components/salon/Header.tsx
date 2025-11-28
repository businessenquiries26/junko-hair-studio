import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onBookClick: () => void;
}

const Header = ({ onBookClick }: HeaderProps) => {
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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-heading font-bold text-foreground tracking-tight">
              Junko Hair Studio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-sm text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("stylists")} className="text-sm text-foreground hover:text-primary transition-colors">
              Stylists
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-sm text-foreground hover:text-primary transition-colors">
              Our Work
            </button>
            <button onClick={() => scrollToSection("specialties")} className="text-sm text-foreground hover:text-primary transition-colors">
              Specialties
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("location")} className="text-sm text-foreground hover:text-primary transition-colors">
              Location
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-sm text-foreground hover:text-primary transition-colors">
              Reviews
            </button>
          </nav>

          {/* Right Side: Social Icons + Book Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <Button 
              onClick={onBookClick}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            >
              Book Online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection("home")} className="block text-sm text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("stylists")} className="block text-sm text-foreground hover:text-primary transition-colors">
              Stylists
            </button>
            <button onClick={() => scrollToSection("gallery")} className="block text-sm text-foreground hover:text-primary transition-colors">
              Our Work
            </button>
            <button onClick={() => scrollToSection("specialties")} className="block text-sm text-foreground hover:text-primary transition-colors">
              Specialties
            </button>
            <button onClick={() => scrollToSection("services")} className="block text-sm text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("location")} className="block text-sm text-foreground hover:text-primary transition-colors">
              Location
            </button>
            <button onClick={() => scrollToSection("reviews")} className="block text-sm text-foreground hover:text-primary transition-colors">
              Reviews
            </button>
            <Button 
              onClick={onBookClick}
              variant="outline"
              className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Book Online
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
