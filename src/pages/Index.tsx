import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="experience">
          <ExperienceSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="achievements">
          <AchievementsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cosmic-blue/20 bg-background/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Sachindra Shekhar Pandey. Designed with cosmic inspiration. Built with React & Tailwind CSS.
          </p>
          <div className="mt-2 text-xs text-muted-foreground/70">
            Available for immediate opportunities • Open to relocation & remote work
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
