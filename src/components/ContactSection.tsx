import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Download, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sachindrapandey328@gmail.com",
    href: "mailto:sachindrapandey328@gmail.com",
    color: "cosmic-blue"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 79056 04539",
    href: "tel:+917905604539",
    color: "cosmic-purple"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, India",
    href: null,
    color: "cosmic-pink"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "Sachindrapandeyyy",
    href: "https://github.com/Sachindrapandeyyy",
    color: "cosmic-blue"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "sachindra-shekhar-pandey",
    href: "https://www.linkedin.com/in/sachindra-shekhar-pandey-73b45427b",
    color: "cosmic-purple"
  }
];

const availability = [
  "Immediate availability for new opportunities",
  "Open to relocation worldwide",
  "Visa sponsorship welcome",
  "Remote work preferred",
  "Flexible work arrangements"
];

const interests = [
  "AI for Climate Science",
  "Computer Vision",
  "Privacy-Preserving AI", 
  "Edge Computing",
  "Quantum Computing",
  "Space Technology"
];

const ContactSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold cosmic-text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative AI projects or discuss exciting opportunities.
            Available for immediate start with flexible arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="lg:col-span-2 bg-gradient-card border-cosmic-blue/20 hover:shadow-cosmic transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary/20">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-gradient-primary/20">
                      <contact.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-sm font-medium hover:text-primary transition-colors truncate block"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="font-medium">Social Profiles</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="cosmic-outline"
                      size="sm"
                      asChild
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <social.icon className="w-4 h-4" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="cosmic" size="lg" className="flex-1 min-w-fit">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="cosmic-outline" size="lg" className="flex-1 min-w-fit">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Availability & Interests */}
          <div className="space-y-6">
            {/* Availability */}
            <Card className="bg-gradient-card border-cosmic-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-gradient-secondary/20">
                    <Globe className="w-4 h-4 text-accent" />
                  </div>
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-gradient-card border-cosmic-blue/20">
              <CardHeader>
                <CardTitle className="text-lg">Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs hover:cosmic-glow transition-all duration-200"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Languages */}
        <Card className="mt-8 bg-gradient-card border-cosmic-blue/20">
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="default">English</Badge>
                <span className="text-sm text-muted-foreground">Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">Hindi</Badge>
                <span className="text-sm text-muted-foreground">Native</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;