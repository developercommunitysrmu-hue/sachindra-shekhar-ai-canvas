import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Award, BookOpen, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Google Agentic AI Hackathon Finalist",
    description: "Top 0.1% among 9,000+ teams worldwide",
    icon: Trophy,
    badge: "Top 0.1%",
    color: "cosmic-orange",
    link: "https://www.linkedin.com/posts/sachindra-shekhar-pandey-73b45427b_coding-ai-ml-activity-7163411201605971969-4jq1",
    featured: true
  },
  {
    title: "ISRO Bharatiya Antariksh Hackathon Semi-Finalist", 
    description: "Advanced weather nowcasting with satellite imagery",
    icon: Award,
    badge: "Semi-Finalist",
    color: "cosmic-blue",
    link: "https://linkedin.com/posts/sachindra-shekhar-pandey-73b45427b_antarikshhackathon2025-spacetech-diffusionmodels-activity-7354100662319673345-yeqr",
    featured: true
  },
  {
    title: "Developer Community SRMU Founder",
    description: "Built and grew community to 600+ active members",
    icon: Users,
    badge: "600+ Members",
    color: "cosmic-purple",
    link: "https://www.linkedin.com/posts/sachindra-shekhar-pandey-73b45427b_gamedev-machinelearning-python-activity-7219163853928980480-2BMK",
    featured: true
  },
  {
    title: "Smart India Hackathon Organizer",
    description: "Coordinated event for 250+ participants",
    icon: Users,
    badge: "250+ Participants",
    color: "cosmic-pink"
  },
  {
    title: "HP & Nodwin Gaming Event Coordinator",
    description: "Led gaming events in Lucknow City",
    icon: Award,
    badge: "City-wide",
    color: "cosmic-blue"
  },
  {
    title: "Project Bhasha Setu Contributor",
    description: "Contributing to language technology initiatives",
    icon: BookOpen,
    badge: "Active Contributor",
    color: "cosmic-purple",
    link: "https://www.linkedin.com/posts/sachindra-shekhar-pandey-73b45427b_gamedev-machinelearning-python-activity-7219163853928980480-2BMK"
  }
];

const certifications = [
  "Quantum Computing Certificate – Udemy",
  "Artificial Intelligence Certificate – L&T EduTech", 
  "Deep Learning Specialization – Coursera",
  "Google Cloud Associate Engineer (In Progress)",
  "MongoDB Certified Developer (In Progress)"
];

const recognitions = [
  "Letter of Recommendation from HP",
  "Letter of Recommendation from Skillzee",
  "Exceptional Performance Recognition - NTPC Limited",
  "Published Article: 'Why Traditional Programming Skills Are No Longer the Gatekeepers of AI Innovation'"
];

const AchievementsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold cosmic-text-gradient mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized excellence in AI innovation, community leadership, and technical contributions
            across prestigious competitions and industry initiatives.
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`bg-gradient-card border-cosmic-blue/20 hover:border-cosmic-purple/40 transition-all duration-300 hover:shadow-cosmic group ${
                achievement.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-primary/20`}>
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <Badge 
                    variant="secondary"
                    className="animate-pulse-glow"
                  >
                    {achievement.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:cosmic-text-gradient transition-all duration-300">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
                
                {achievement.link && (
                  <Button
                    variant="cosmic-outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Achievement
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="bg-gradient-card border-cosmic-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary/20">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Recognition */}
          <Card className="bg-gradient-card border-cosmic-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-secondary/20">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                Professional Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recognitions.map((recognition, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{recognition}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;