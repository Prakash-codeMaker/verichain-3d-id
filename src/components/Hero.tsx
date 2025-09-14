import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text, Box } from "@react-three/drei";
import { Suspense } from "react";

const FloatingCube = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box position={position} args={[1, 1, 1]}>
        <meshStandardMaterial color={color} wireframe />
      </Box>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Float speed={4} rotationIntensity={1} floatIntensity={3}>
          <Text
            fontSize={1.5}
            color="#4F46E5"
            anchorX="center"
            anchorY="middle"
            position={[0, 0, 0]}
          >
            DID
          </Text>
        </Float>
        
        <FloatingCube position={[-3, 2, -2]} color="#4F46E5" />
        <FloatingCube position={[3, -1, -1]} color="#10B981" />
        <FloatingCube position={[-2, -2, 1]} color="#8B5CF6" />
        <FloatingCube position={[2, 2, 0]} color="#06B6D4" />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Suspense>
    </Canvas>
  );
};

const Hero = () => {
  const features = [
    "Self-sovereign identity control",
    "Zero-knowledge proof verification",
    "Cross-chain compatibility",
    "Enterprise-grade security"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <Shield className="w-4 h-4" />
              Blockchain-Powered Identity
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Your Identity,
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Your Control
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              VeriChainID revolutionizes digital identity with decentralized, self-sovereign 
              verification powered by blockchain technology. Take control of your digital presence.
            </motion.p>
          </div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              <Globe className="w-5 h-5" />
              Explore Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Verified Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-sm text-muted-foreground">Blockchains</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[600px] bg-gradient-card rounded-2xl border border-border/50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-glow opacity-20" />
          <Scene3D />
          
          {/* Floating Info Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="absolute top-6 left-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 max-w-48"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Fast Verification</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Instant identity verification in under 2 seconds
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="absolute bottom-6 right-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 max-w-48"
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Military Grade</span>
            </div>
            <p className="text-xs text-muted-foreground">
              AES-256 encryption with zero-knowledge proofs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;