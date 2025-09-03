import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Home, User, Briefcase, Trophy, Mail, Download } from "lucide-react";
import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#skills", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: Trophy },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <AnimatedSection animation="animate-fade-in-down">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-cosmic-blue/20 shadow-cosmic' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-cosmic">
                  <span className="text-primary-foreground font-bold text-lg">SP</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-50 animate-pulse-glow"></div>
              </div>
              <div className="hidden md:block">
                <span className="font-bold text-xl cosmic-text-gradient">Sachindra Pandey</span>
                <Badge variant="secondary" className="ml-3 text-xs animate-glow-pulse">
                  AI/ML Engineer
                </Badge>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    relative hover:cosmic-glow transition-all duration-300 hover:scale-110
                    ${activeSection === item.href.substring(1) ? 'cosmic-text-gradient' : ''}
                  `}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-primary animate-pulse-glow"></div>
                  )}
                </Button>
              ))}
            </div>

            {/* Enhanced Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="cosmic-outline" size="sm" className="hover:scale-105 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:cosmic-glow transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-cosmic-blue/20 shadow-cosmic animate-fade-in-down">
              <div className="px-6 py-6 space-y-3">
                {navItems.map((item, index) => (
                  <div 
                    key={item.label}
                    className={`animate-fade-in-up-delay-${(index + 1) * 100}`}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection(item.href)}
                      className="w-full justify-start hover:cosmic-glow transition-all duration-300"
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.label}
                    </Button>
                  </div>
                ))}
                <Button 
                  variant="cosmic" 
                  size="sm" 
                  className="w-full mt-6 animate-fade-in-up-delay-600"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </AnimatedSection>
  );
};

export default Navigation;