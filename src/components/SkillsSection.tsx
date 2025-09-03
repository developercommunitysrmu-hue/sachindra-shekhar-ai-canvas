import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Code, Database, Cloud, Cpu, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    icon: Brain,
    title: "AI/ML & Data Science",
    skills: [
      "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "Mediapipe",
      "Diffusion Models", "NLP", "Computer Vision", "Deep Learning"
    ],
    color: "cosmic-purple"
  },
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      "Python (Advanced)", "C++", "Java", "C", "C# (.NET)", "JavaScript (ES6+)"
    ],
    color: "cosmic-blue"
  },
  {
    icon: Database,
    title: "Backend & Databases",
    skills: [
      "Flask", "FastAPI", "Django", ".NET", "REST APIs", "GraphQL",
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"
    ],
    color: "cosmic-pink"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      "Google Cloud (Vertex AI, Cloud Run, BigQuery)", "Azure", "Docker",
      "Git/GitHub", "CI/CD Pipelines", "Microservices"
    ],
    color: "cosmic-orange"
  },
  {
    icon: Cpu,
    title: "Specialized Areas",
    skills: [
      "Latent Diffusion Models", "VAE", "UNet3D", "Satellite Image Processing",
      "Weather Data Analysis", "System Design"
    ],
    color: "cosmic-blue"
  },
  {
    icon: Zap,
    title: "Core Concepts",
    skills: [
      "OOP", "DSA", "DBMS", "Microservices", "System Design", "Quantum Computing"
    ],
    color: "cosmic-purple"
  }
];

const proficiencyData = [
  { name: "Python & AI/ML", level: 95 },
  { name: "Cloud Computing", level: 88 },
  { name: "Backend Development", level: 92 },
  { name: "Computer Vision", level: 90 },
  { name: "System Design", level: 85 },
  { name: "Quantum Computing", level: 70 }
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text-gradient mb-6">
            Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced expertise across the full spectrum of modern technology stack,
            specializing in AI/ML and scalable cloud systems with proven impact.
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={index}
              animation="animate-fade-in-up"
              delay={index * 100}
            >
              <Card className="h-full bg-gradient-card border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-500 hover:shadow-cosmic group hover:scale-105">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-all duration-300">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:cosmic-text-gradient transition-all duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs hover:cosmic-glow hover:scale-105 transition-all duration-300 cursor-default group-hover:border-cosmic-purple/30"
                          style={{
                            animationDelay: `${skillIndex * 50}ms`
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Proficiency Levels */}
        <AnimatedSection animation="animate-fade-in-up" delay={600}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold cosmic-text-gradient mb-4">
                Proficiency Levels
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Demonstrated expertise levels across core technology domains through 
                practical projects and professional experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {proficiencyData.map((skill, index) => (
                <AnimatedSection
                  key={index}
                  animation="animate-fade-in-right"
                  delay={index * 150}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-2xl font-bold cosmic-text-gradient">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-space-gray/50"
                    />
                    <div 
                      className="absolute top-0 left-0 h-3 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tech Stack Highlights */}
        <AnimatedSection animation="animate-fade-in-up" delay={1000} className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Tech Stack Highlights</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "🐍 Python Expert", "🧠 AI/ML Specialist", "☁️ Cloud Native", 
                "⚡ High Performance", "🔒 Security First", "🚀 Scalable Systems"
              ].map((highlight, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`text-sm px-4 py-2 border-cosmic-blue/30 hover:border-cosmic-purple/60 hover:cosmic-glow transition-all duration-300 animate-fade-in-up-delay-${(index + 1) * 100}`}
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;