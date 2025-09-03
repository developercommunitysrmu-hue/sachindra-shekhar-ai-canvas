import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import spaceHeroBg from "@/assets/space-hero-bg.jpg";
import cosmicPlanet from "@/assets/cosmic-planet.jpg";

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
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Floating Cosmic Planet */}
      <div className="absolute top-20 right-10 animate-float opacity-60">
        <img 
          src={cosmicPlanet} 
          alt="Cosmic Planet" 
          className="w-64 h-64 object-cover rounded-full drop-shadow-glow-blue"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-6">
          {/* Location & Status */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="secondary" className="cosmic-border">
              <MapPin className="w-4 h-4 mr-2" />
              Lucknow, India
            </Badge>
            <Badge variant="outline" className="cosmic-text-gradient border-cosmic-blue/30">
              Open to Relocation & Remote Work
            </Badge>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold cosmic-text-gradient mb-4">
            Sachindra Shekhar Pandey
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            AI/ML Engineer & Computer Science Student
          </h2>

          {/* Key Achievement Badge */}
          <div className="animate-pulse-glow mx-auto max-w-2xl">
            <Badge className="cosmic-gradient text-lg px-6 py-2">
              🏆 Google Agentic AI Hackathon Finalist - Top 0.1% among 9,000+ teams
            </Badge>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about AI innovation, quantum computing, and building cloud-native platforms. 
            Founder of Developer Community SRMU with 600+ members. Proven expertise in machine learning, 
            computer vision, and system design through impactful projects and internships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button variant="default" size="lg" className="cosmic-glow group">
              View My Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="cosmic-border hover:cosmic-glow">
              Download Resume
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="mailto:sachindrapandey328@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a 
              href="tel:+917905604539"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 79056 04539
            </a>
            <a 
              href="https://github.com/Sachindrapandeyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sachindra-shekhar-pandey-73b45427b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;