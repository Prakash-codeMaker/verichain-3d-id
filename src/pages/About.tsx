import { motion } from "framer-motion";
import { Shield, Users, Globe, Zap, Heart, Award, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former blockchain architect at ConsenSys. PhD in Cryptography from MIT.",
      image: "👩‍💼",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Google senior engineer specializing in distributed systems and privacy tech.",
      image: "👨‍💻",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of Security",
      bio: "Cybersecurity expert with 15+ years in identity management and zero-knowledge proofs.",
      image: "👩‍🔬",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "James Kim",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about Web3 and decentralized technologies.",
      image: "👨‍🚀",
      social: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "VeriChainID was founded with a mission to democratize digital identity."
    },
    {
      year: "2023",
      title: "Seed Funding",
      description: "$5M seed round led by Andreessen Horowitz and Coinbase Ventures."
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Successful beta launch with 10,000+ early adopters and partners."
    },
    {
      year: "2024",
      title: "Security Audits",
      description: "Completed comprehensive security audits by CertiK and Trail of Bits."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data belongs to you. We believe in zero-knowledge architecture and user-controlled privacy."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Building identity solutions that work for everyone, everywhere, regardless of background."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with decentralized identity technology."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every decision we make puts our users' needs and experiences at the center."
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Credentials Issued", value: "250K+", icon: Award },
    { label: "Countries Supported", value: "120+", icon: Globe },
    { label: "Security Score", value: "99.9%", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About VeriChainID
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're building the future of digital identity - a world where you own and control your credentials, 
              share only what you choose, and verify your identity instantly without compromising privacy.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Mission & Vision */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-card border-border/50 p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize digital identity by giving individuals complete control over their personal data 
                    and credentials. We believe everyone deserves the right to own, manage, and selectively share 
                    their identity without relying on centralized authorities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-secondary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where digital identity is truly self-sovereign, where verification is instant and 
                    trustworthy, and where privacy is not just protected but enhanced through cutting-edge 
                    cryptographic technologies and blockchain infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Stats */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Platform Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="text-center bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Core Values */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="bg-gradient-card border-border/50 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{value.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Team */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="bg-gradient-card border-border/50 text-center hover:shadow-glow transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="text-6xl mb-4">{member.image}</div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Timeline */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 bg-gradient-card border-border/50">
                    <CardContent className="py-6">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-gradient-hero border-border/50 text-center p-12">
              <CardContent>
                <h2 className="text-3xl font-bold mb-6">Join the Identity Revolution</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Be part of building a more secure, private, and user-controlled digital future. 
                  Your identity, your control.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-glow">
                    Get Started Today
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;