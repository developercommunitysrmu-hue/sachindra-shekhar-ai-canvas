import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

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
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold cosmic-text-gradient mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Fortune 500 enterprises to innovative startups, building scalable solutions 
            that drive real business impact.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`bg-gradient-card border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-300 hover:shadow-cosmic ${
                exp.featured ? 'border-l-4 border-l-cosmic-blue' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-primary/20">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-cosmic-blue/30 hover:border-cosmic-purple/60 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <Card className="bg-gradient-card border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-secondary/20">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-xl">{education.degree}</CardTitle>
                  <div className="text-muted-foreground">
                    <div className="font-medium text-primary">{education.institution}</div>
                    <div className="flex items-center gap-4 text-sm mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {education.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {education.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-medium">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:cosmic-glow transition-all duration-200"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;