import { motion } from "framer-motion";
import { Shield, Key, Globe, Zap, Eye, Users, Lock, Database } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Self-Sovereign Identity",
      description: "Complete control over your digital identity without centralized authorities",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Key,
      title: "Zero-Knowledge Proofs",
      description: "Prove identity without revealing sensitive personal information",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      icon: Globe,
      title: "Cross-Chain Compatible",
      description: "Works across multiple blockchains including Ethereum, Avalanche, and Polygon",
      gradient: "from-accent to-accent/80",
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Lightning-fast identity verification in under 2 seconds",
      gradient: "from-warning to-warning/80",
    },
    {
      icon: Eye,
      title: "Privacy First",
      description: "End-to-end encryption ensures your data remains private and secure",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Users,
      title: "Enterprise Ready",
      description: "Scalable solution for organizations with compliance and audit trails",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Lock,
      title: "Immutable Records",
      description: "Blockchain-anchored credentials that cannot be forged or tampered with",
      gradient: "from-accent to-primary",
    },
    {
      icon: Database,
      title: "Decentralized Storage",
      description: "No central point of failure with distributed data architecture",
      gradient: "from-primary-glow to-secondary-glow",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Digital Identity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge blockchain technology and cryptographic principles
            to deliver the most secure and user-friendly identity solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-card rounded-2xl border border-border/50 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to revolutionize digital identity?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who have already taken control of their digital identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-glow hover:shadow-xl transition-all"
              >
                Start Building
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-primary/20 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
              >
                View Documentation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;