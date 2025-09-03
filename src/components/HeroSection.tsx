import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import spaceHeroBg from "@/assets/space-hero-bg.jpg";
import cosmicPlanet from "@/assets/cosmic-planet.jpg";
import TypewriterText from "./TypewriterText";
import AnimatedSection from "./AnimatedSection";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${spaceHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced Overlay with Gradients */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/40" />
      
      {/* Floating Cosmic Planet */}
      <AnimatedSection 
        animation="animate-float" 
        className="absolute top-20 right-10 opacity-60"
      >
        <img 
          src={cosmicPlanet} 
          alt="Cosmic Planet" 
          className="w-64 h-64 object-cover rounded-full drop-shadow-glow-blue animate-pulse-glow"
        />
      </AnimatedSection>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          
          {/* Status Badges */}
          <AnimatedSection animation="animate-fade-in-down" delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="cosmic-border animate-glow-pulse">
                <MapPin className="w-4 h-4 mr-2" />
                Lucknow, India
              </Badge>
              <Badge variant="outline" className="cosmic-text-gradient border-cosmic-blue/30">
                Open to Relocation & Remote Work
              </Badge>
            </div>
          </AnimatedSection>

          {/* Name with Typewriter Effect */}
          <AnimatedSection animation="animate-scale-in" delay={400}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold cosmic-text-gradient leading-tight">
                <TypewriterText 
                  text="Sachindra Shekhar Pandey"
                  delay={600}
                  speed={80}
                />
              </h1>
              
              <AnimatedSection animation="animate-fade-in-up" delay={2000}>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  AI/ML Engineer & Computer Science Student
                </h2>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Achievement Highlight */}
          <AnimatedSection animation="animate-slide-up" delay={2500}>
            <div className="animate-pulse-glow mx-auto max-w-2xl">
              <Badge className="cosmic-gradient text-lg px-8 py-3 shadow-cosmic">
                🏆 Google Agentic AI Hackathon Finalist - Top 0.1% among 9,000+ teams
              </Badge>
            </div>
          </AnimatedSection>

          {/* Enhanced Description */}
          <AnimatedSection animation="animate-fade-in-up" delay={3000}>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about <span className="cosmic-text-gradient font-semibold">AI innovation</span>, 
                <span className="cosmic-text-gradient font-semibold"> quantum computing</span>, and 
                <span className="cosmic-text-gradient font-semibold"> building cloud-native platforms</span>.
              </p>
              <p className="text-base text-muted-foreground/80">
                Founder of Developer Community SRMU with 600+ members • 
                Proven expertise in machine learning, computer vision, and system design through impactful projects and internships.
              </p>
            </div>
          </AnimatedSection>

          {/* Action Buttons */}
          <AnimatedSection animation="animate-fade-in-up" delay={3500}>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button 
                variant="cosmic" 
                size="lg" 
                className="group hover:scale-105 transition-all duration-300"
              >
                View My Projects
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="cosmic-outline" 
                size="lg" 
                className="hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>
          </AnimatedSection>

          {/* Contact Links with Staggered Animation */}
          <AnimatedSection animation="animate-fade-in-up" delay={4000}>
            <div className="flex justify-center gap-8 mt-12 flex-wrap">
              {[
                { icon: Mail, label: "Email", href: "mailto:sachindrapandey328@gmail.com" },
                { icon: Phone, label: "+91 79056 04539", href: "tel:+917905604539" },
                { icon: Github, label: "GitHub", href: "https://github.com/Sachindrapandeyyy" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sachindra-shekhar-pandey-73b45427b" }
              ].map((contact, index) => (
                <div 
                  key={contact.label}
                  className={`animate-fade-in-up-delay-${(index + 1) * 100}`}
                >
                  <a 
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-all duration-300">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <span className="hidden sm:block text-sm font-medium">{contact.label}</span>
                  </a>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Scroll Indicator */}
          <AnimatedSection animation="animate-fade-in-up" delay={4500}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce">
                <div className="w-1 h-16 bg-gradient-primary rounded-full opacity-60"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;