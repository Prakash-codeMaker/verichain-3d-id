import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text, Box, Sphere } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, Shield, Eye, Download, Share2 } from "lucide-react";
import * as THREE from "three";

const CredentialCard = ({ 
  position, 
  color, 
  title, 
  isActive, 
  onClick 
}: { 
  position: [number, number, number];
  color: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} onClick={onClick}>
        <Box
          ref={meshRef}
          args={[2, 1.2, 0.1]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            color={color}
            transparent
            opacity={isActive ? 1 : 0.7}
            emissive={isActive ? color : "#000000"}
            emissiveIntensity={isActive ? 0.2 : 0}
          />
        </Box>
        
        <Text
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, 0.2, 0.06]}
          maxWidth={1.8}
        >
          {title}
        </Text>
        
        <Text
          fontSize={0.08}
          color="#cccccc"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.06]}
          maxWidth={1.8}
        >
          Verified Credential
        </Text>
        
        <Text
          fontSize={0.06}
          color="#999999"
          anchorX="center"
          anchorY="middle"
          position={[0, -0.2, 0.06]}
          maxWidth={1.8}
        >
          Blockchain Anchored
        </Text>
      </group>
    </Float>
  );
};

const VaultScene = ({ activeCredential, onCredentialClick }: { 
  activeCredential: number; 
  onCredentialClick: (index: number) => void;
}) => {
  const credentials = [
    { title: "Identity Passport", color: "#4F46E5", position: [0, 1.5, 0] as [number, number, number] },
    { title: "Education Degree", color: "#10B981", position: [-2.5, 0, 0] as [number, number, number] },
    { title: "Professional License", color: "#8B5CF6", position: [2.5, 0, 0] as [number, number, number] },
    { title: "Medical Records", color: "#F59E0B", position: [0, -1.5, 0] as [number, number, number] },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
        
        {/* Central Core */}
        <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
          <Sphere position={[0, 0, -2]} args={[0.5]}>
            <meshStandardMaterial
              color="#4F46E5"
              emissive="#4F46E5"
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </Float>

        {/* Credential Cards */}
        {credentials.map((credential, index) => (
          <CredentialCard
            key={credential.title}
            position={credential.position}
            color={credential.color}
            title={credential.title}
            isActive={activeCredential === index}
            onClick={() => onCredentialClick(index)}
          />
        ))}
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minDistance={5}
          maxDistance={12}
        />
      </Suspense>
    </Canvas>
  );
};

const CredentialVault = () => {
  const [activeCredential, setActiveCredential] = useState(0);

  const credentials = [
    {
      title: "Identity Passport",
      status: "Verified",
      issuer: "Government Authority",
      date: "2024-01-15",
      description: "Official government-issued identity document with biometric verification",
      type: "government",
    },
    {
      title: "Education Degree",
      status: "Verified",
      issuer: "Stanford University",
      date: "2023-06-20",
      description: "Bachelor of Science in Computer Science with honors",
      type: "education",
    },
    {
      title: "Professional License",
      status: "Verified",
      issuer: "Tech Certification Board",
      date: "2024-03-10",
      description: "Certified blockchain developer with smart contract specialization",
      type: "professional",
    },
    {
      title: "Medical Records",
      status: "Pending",
      issuer: "Healthcare Provider",
      date: "2024-09-14",
      description: "Encrypted medical history and vaccination records",
      type: "medical",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            3D Credential
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Vault</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize and manage your decentralized credentials in an immersive 3D environment.
            Click on any credential to view detailed information.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 3D Vault */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] bg-gradient-card rounded-2xl border border-border/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-glow opacity-20" />
            <VaultScene 
              activeCredential={activeCredential} 
              onCredentialClick={setActiveCredential}
            />
            
            {/* Controls Overlay */}
            <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-2">Controls</p>
              <div className="flex items-center gap-2 text-xs">
                <span>Click: Select</span>
                <span>•</span>
                <span>Drag: Rotate</span>
                <span>•</span>
                <span>Scroll: Zoom</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4">
              <Button variant="hero" size="sm">
                <Plus className="w-4 h-4" />
                Add Credential
              </Button>
            </div>
          </motion.div>

          {/* Credential Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-card rounded-xl border border-border/50 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {credentials[activeCredential].title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      credentials[activeCredential].status === 'Verified' 
                        ? 'bg-success' 
                        : 'bg-warning'
                    }`} />
                    <span className={`text-sm font-medium ${
                      credentials[activeCredential].status === 'Verified' 
                        ? 'text-success' 
                        : 'text-warning'
                    }`}>
                      {credentials[activeCredential].status}
                    </span>
                  </div>
                </div>
                <Shield className="w-6 h-6 text-primary" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Description</p>
                  <p className="text-foreground">
                    {credentials[activeCredential].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Issuer</p>
                    <p className="text-foreground font-medium">
                      {credentials[activeCredential].issuer}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
                    <p className="text-foreground font-medium">
                      {credentials[activeCredential].date}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4" />
                      Export
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-success mb-1">3</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-warning mb-1">1</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>

            {/* All Credentials List */}
            <div className="bg-gradient-card rounded-xl border border-border/50 p-6">
              <h4 className="font-semibold mb-4">All Credentials</h4>
              <div className="space-y-3">
                {credentials.map((credential, index) => (
                  <button
                    key={credential.title}
                    onClick={() => setActiveCredential(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      activeCredential === index
                        ? 'border-primary/50 bg-primary/10'
                        : 'border-border/50 hover:border-primary/30 hover:bg-muted/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{credential.title}</p>
                        <p className="text-sm text-muted-foreground">{credential.issuer}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        credential.status === 'Verified' ? 'bg-success' : 'bg-warning'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredentialVault;