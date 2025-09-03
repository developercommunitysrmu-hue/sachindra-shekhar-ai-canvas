import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, TrendingUp, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "NTPC Limited",
    role: "Software Engineering Intern",
    type: "Fortune 500 Company",
    duration: "Jun 2025 – Jul 2025",
    location: "Lucknow, India",
    description: "Built Flask-based legal document management system with PostgreSQL, reducing retrieval time by 30%. Implemented JWT authentication & role-based access control.",
    achievements: [
      "Reduced document retrieval time by 30%",
      "Automated workflows saving 40+ hours/week",
      "Enhanced dashboards for 200+ users",
      "Maintained 99.9% system uptime",
      "Improved scalability by 20%"
    ],
    tags: ["Flask", "PostgreSQL", "C#/.NET", "JWT", "System Architecture"],
    featured: true
  },
  {
    company: "Skillzee",
    role: "Software Developer Intern",
    type: "EdTech Startup",
    duration: "Dec 2023 – Jan 2024",
    location: "Remote",
    description: "Improved onboarding completion rate by 15% with accessibility upgrades. Developed backend APIs serving 1000+ users.",
    achievements: [
      "Improved onboarding completion by 15%",
      "Developed APIs for 1000+ users",
      "Reduced bugs by 25%",
      "Reduced deployment time by 40%",
      "Accelerated delivery by 10%"
    ],
    tags: ["Backend Development", "API Design", "Agile", "User Experience"],
    featured: false
  }
];

const education = {
  degree: "B.Tech, Computer Science & Engineering",
  institution: "Shri Ramswaroop Memorial University",
  location: "Lucknow, India",
  duration: "2022 – 2026",
  coursework: ["DSA", "DBMS", "ML", "Software Engineering", "Cloud Computing", "System Design"]
};

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text-gradient mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From Fortune 500 enterprises to innovative startups, building scalable solutions 
            that drive real business impact and deliver measurable results.
          </p>
        </AnimatedSection>

        {/* Professional Experience */}
        <div className="space-y-12 mb-20">
          <AnimatedSection animation="animate-fade-in-left" delay={200}>
            <h3 className="text-3xl font-bold cosmic-text-gradient mb-8">Professional Experience</h3>
          </AnimatedSection>
          
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              animation="animate-fade-in-up"
              delay={300 + index * 200}
            >
              <Card className={`
                bg-gradient-card border-cosmic-blue/20 hover:border-cosmic-purple/40 
                transition-all duration-500 hover:shadow-cosmic group hover:-translate-y-1
                ${exp.featured ? 'border-l-4 border-l-cosmic-blue shadow-cosmic/50' : ''}
              `}>
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-all duration-300">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl group-hover:cosmic-text-gradient transition-all duration-300">
                            {exp.role}
                          </CardTitle>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="font-semibold text-primary text-lg">{exp.company}</span>
                            <Badge variant="secondary" className="text-xs animate-glow-pulse">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cosmic-blue" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cosmic-purple" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Key Achievements & Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div 
                          key={achIndex} 
                          className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 flex-shrink-0 animate-pulse-glow" />
                          <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-cosmic-blue/30 hover:border-cosmic-purple/60 hover:cosmic-glow transition-all duration-300 hover:scale-105"
                        style={{
                          animationDelay: `${tagIndex * 100}ms`
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Education Section */}
        <div>
          <AnimatedSection animation="animate-fade-in-left" delay={800}>
            <h3 className="text-3xl font-bold cosmic-text-gradient mb-8">Education</h3>
          </AnimatedSection>
          
          <AnimatedSection animation="animate-fade-in-up" delay={1000}>
            <Card className="bg-gradient-card border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-500 hover:shadow-cosmic group">
              <CardHeader className="pb-6">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-secondary/20 group-hover:bg-gradient-secondary/30 transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <CardTitle className="text-2xl group-hover:cosmic-text-gradient transition-all duration-300">
                      {education.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="font-semibold text-primary text-lg">{education.institution}</div>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cosmic-blue" />
                          <span className="font-medium">{education.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cosmic-purple" />
                          <span className="font-medium">{education.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-3">
                    {education.coursework.map((course, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="hover:cosmic-glow transition-all duration-300 hover:scale-105 px-4 py-2"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;