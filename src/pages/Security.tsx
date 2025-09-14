import { motion } from "framer-motion";
import { Shield, Lock, Key, Fingerprint, Eye, Database, FileText, Users, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All sensitive data is encrypted using AES-256 encryption before storage and transmission.",
      status: "implemented"
    },
    {
      icon: Key,
      title: "Zero-Knowledge Architecture",
      description: "Your private keys and credentials are never stored on our servers in plain text.",
      status: "implemented"
    },
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Multi-factor authentication with biometric verification for enhanced security.",
      status: "implemented"
    },
    {
      icon: Lock,
      title: "Blockchain Anchoring",
      description: "All identity proofs are anchored to the Avalanche blockchain for immutable verification.",
      status: "implemented"
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "Selective disclosure allows you to share only necessary information.",
      status: "implemented"
    },
    {
      icon: Database,
      title: "Decentralized Storage",
      description: "Credentials are distributed across multiple nodes, eliminating single points of failure.",
      status: "planned"
    }
  ];

  const auditReports = [
    {
      title: "Smart Contract Security Audit",
      auditor: "CertiK",
      date: "2024-01-15",
      score: "98/100",
      status: "passed"
    },
    {
      title: "Infrastructure Security Review",
      auditor: "Trail of Bits",
      date: "2024-02-01",
      score: "A+",
      status: "passed"
    },
    {
      title: "Privacy Impact Assessment",
      auditor: "Internal Team",
      date: "2024-02-15",
      score: "Compliant",
      status: "passed"
    }
  ];

  const complianceStandards = [
    "GDPR - General Data Protection Regulation",
    "CCPA - California Consumer Privacy Act",
    "SOC 2 Type II - Security & Availability",
    "ISO 27001 - Information Security Management",
    "W3C DID - Decentralized Identifiers Standard",
    "W3C VC - Verifiable Credentials Standard"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Security Documentation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive security measures protecting your digital identity with industry-leading encryption, 
              zero-knowledge architecture, and blockchain-based verification.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Security Features */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Security Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="h-full bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant={feature.status === "implemented" ? "default" : "secondary"}>
                            {feature.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Technical Implementation */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Implementation</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-primary" />
                    Cryptographic Standards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Encryption</span>
                      <span className="font-mono text-sm">AES-256-GCM</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Key Derivation</span>
                      <span className="font-mono text-sm">PBKDF2-SHA256</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Digital Signatures</span>
                      <span className="font-mono text-sm">ECDSA (secp256k1)</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Hash Function</span>
                      <span className="font-mono text-sm">SHA-3 (Keccak-256)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-secondary" />
                    Data Protection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="font-mono text-sm">Encrypted at Rest</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Transmission</span>
                      <span className="font-mono text-sm">TLS 1.3</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Key Management</span>
                      <span className="font-mono text-sm">HSM Protected</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Backup</span>
                      <span className="font-mono text-sm">Distributed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Audit Reports */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Security Audits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {auditReports.map((audit, index) => (
                <motion.div
                  key={audit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <FileText className="w-6 h-6 text-accent" />
                        <Badge variant={audit.status === "passed" ? "default" : "secondary"}>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {audit.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{audit.title}</CardTitle>
                      <CardDescription>by {audit.auditor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Score:</span>
                          <span className="font-semibold text-success">{audit.score}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-mono text-sm">{audit.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Compliance */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Compliance & Standards</h2>
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Regulatory Compliance
                </CardTitle>
                <CardDescription>
                  VeriChainID adheres to international privacy and security standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm">{standard}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Incident Response */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Incident Response</h2>
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                  Security Incident Protocol
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In the unlikely event of a security incident, VeriChainID follows a comprehensive response protocol:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Immediate Detection & Containment</h4>
                      <p className="text-muted-foreground text-sm">Automated monitoring systems detect anomalies within seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">User Notification</h4>
                      <p className="text-muted-foreground text-sm">Affected users are notified within 1 hour via multiple channels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Investigation & Recovery</h4>
                      <p className="text-muted-foreground text-sm">Forensic analysis and system restoration within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Transparent Reporting</h4>
                      <p className="text-muted-foreground text-sm">Public incident report published within 72 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Security;