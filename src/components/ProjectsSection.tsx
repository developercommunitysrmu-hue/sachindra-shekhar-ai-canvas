import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award, Users, Zap, Eye, Brain, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Project Chakshu - AI Weather Nowcasting",
    description: "Advanced weather prediction using INSAT satellite imagery + Latent Diffusion Models (VAE + UNet3D). Achieved SSIM ≥0.8, CSI ≥0.7.",
    icon: Eye,
    badge: "ISRO Hackathon Semi-Finalist",
    badgeColor: "cosmic-orange",
    tags: ["Diffusion Models", "Satellite Data", "UNet3D", "VAE", "Weather Prediction"],
    link: "https://linkedin.com/posts/sachindra-shekhar-pandey-73b45427b_antarikshhackathon2025-spacetech-diffusionmodels-activity-7354100662319673345-yeqr",
    featured: true
  },
  {
    title: "Project Drishti - AI Crowd Management",
    description: "Real-time crowd analytics with FastAPI + Firebase + Vertex AI. Handles 50k+ attendees with <3s latency.",
    icon: Users,
    badge: "Google Agentic AI Finalist",
    badgeColor: "cosmic-blue",
    tags: ["FastAPI", "Firebase", "Vertex AI", "Real-time Analytics", "Computer Vision"],
    github: "https://github.com/Sachindrapandeyyy/ai_day",
    featured: true
  },
  {
    title: "UrbanSync - Smart City Platform",
    description: "AI-driven smart city platform with traffic & disaster mapping for urban management optimization.",
    icon: Zap,
    badge: "IBM Call for Code",
    badgeColor: "cosmic-purple",
    tags: ["Smart Cities", "Traffic Analysis", "Disaster Management", "AI", "Urban Tech"],
    link: "https://www.linkedin.com/posts/sachindra-shekhar-pandey-73b45427b_callforcode-callforcode-urbansync-activity-7363211194339389441-4q5e"
  },
  {
    title: "NSS Secure Data Platform",
    description: "Privacy-preserving system using k-anonymity + differential privacy for secure data handling.",
    icon: Shield,
    badge: "Statathon 2025",
    badgeColor: "cosmic-pink",
    tags: ["Privacy Tech", "K-Anonymity", "Differential Privacy", "Data Security"],
    link: "https://www.linkedin.com/posts/sachindra-shekhar-pandey-73b45427b_statathon2025-datasecurity-privacypreserving-activity-7361592431328313344-qxg9"
  },
  {
    title: "Edith - AI Personal Assistant",
    description: "GPT-4 powered multimodal assistant, handling 100+ queries/day with advanced natural language processing.",
    icon: Brain,
    badge: "Featured Project",
    badgeColor: "cosmic-blue",
    tags: ["GPT-4", "NLP", "Multimodal AI", "Personal Assistant", "Voice Recognition"],
    link: "https://www.linkedin.com/posts/sachindra-shekhar-pandey-73b45427b_coding-ai-ml-activity-7163411201605971969-4jq1"
  },
  {
    title: "Kill Diptera - ML Game",
    description: "Gesture-based OpenCV game with 95% accuracy, combining computer vision with interactive gaming.",
    icon: Zap,
    badge: "Open Source",
    badgeColor: "cosmic-purple",
    tags: ["OpenCV", "Computer Vision", "Game Development", "Gesture Recognition"],
    github: "https://github.com/Sachindrapandeyyy/ML-BASED-GAME"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-background/95 via-background to-background/95">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions at the intersection of AI, cloud computing, and real-world problems.
            From hackathon victories to production systems, each project demonstrates technical excellence 
            and practical impact.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              animation="animate-fade-in-up"
              delay={index * 150}
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <Card className="h-full bg-gradient-card border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-500 hover:shadow-cosmic group hover:-translate-y-2">
                
                {/* Card Header */}
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-all duration-300">
                        <project.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold group-hover:cosmic-text-gradient transition-all duration-300 leading-tight">
                          {project.title}
                        </CardTitle>
                        <Badge 
                          variant="secondary" 
                          className="mt-2 text-xs animate-glow-pulse"
                        >
                          <Award className="w-3 h-3 mr-1" />
                          {project.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                {/* Card Content */}
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-cosmic-blue/30 hover:border-cosmic-purple/60 transition-all duration-300 hover:scale-105"
                        style={{
                          animationDelay: `${tagIndex * 50}ms`
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.link && (
                      <Button
                        variant="cosmic"
                        size="sm"
                        asChild
                        className="flex-1 hover:scale-105 transition-all duration-300"
                      >
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="cosmic-outline"
                        size="sm"
                        asChild
                        className="flex-1 hover:scale-105 transition-all duration-300"
                      >
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Project Stats */}
        <AnimatedSection animation="animate-fade-in-up" delay={1000} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Completed", value: "15+" },
              { label: "Hackathon Wins", value: "3" },
              { label: "GitHub Stars", value: "100+" },
              { label: "Tech Stack", value: "20+" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`space-y-2 animate-fade-in-up-delay-${(index + 1) * 100}`}
              >
                <div className="text-3xl font-bold cosmic-text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;