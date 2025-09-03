import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Code, Database, Cloud, Cpu, Zap } from "lucide-react";

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

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold cosmic-text-gradient mb-4">
            Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced expertise across the full spectrum of modern technology stack,
            specializing in AI/ML and scalable cloud systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-300 hover:shadow-cosmic group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-primary/20`}>
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:cosmic-glow transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { name: "Python & AI/ML", level: 95 },
              { name: "Cloud Computing", level: 88 },
              { name: "Backend Development", level: 92 },
              { name: "Computer Vision", level: 90 },
              { name: "System Design", level: 85 },
              { name: "Quantum Computing", level: 70 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 bg-space-gray"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;