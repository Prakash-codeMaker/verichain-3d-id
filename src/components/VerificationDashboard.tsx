import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Scan, 
  Download,
  Share2,
  RefreshCw,
  Zap
} from "lucide-react";

const VerificationDashboard = () => {
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'scanning' | 'verifying' | 'success' | 'failed'>('idle');
  const [progress, setProgress] = useState(0);

  // Simulate verification process
  useEffect(() => {
    if (verificationStatus === 'verifying') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setVerificationStatus('success');
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [verificationStatus]);

  const startVerification = () => {
    setVerificationStatus('verifying');
    setProgress(0);
  };

  const resetVerification = () => {
    setVerificationStatus('idle');
    setProgress(0);
  };

  const verificationSteps = [
    { step: 1, title: "Identity Scan", completed: progress >= 25 },
    { step: 2, title: "Blockchain Verification", completed: progress >= 50 },
    { step: 3, title: "Zero-Knowledge Proof", completed: progress >= 75 },
    { step: 4, title: "Final Validation", completed: progress >= 100 },
  ];

  const qrValue = JSON.stringify({
    type: "verichain_verification",
    session: "session_" + Math.random().toString(36).substr(2, 9),
    timestamp: Date.now(),
    endpoint: "https://api.verichain.id/verify"
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real-Time Identity
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Verification</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience lightning-fast identity verification with live progress tracking
            and blockchain anchoring for maximum security.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* QR Code Scanner */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-card rounded-xl border border-border/50 p-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">QR Verification</h3>
              <p className="text-muted-foreground text-sm">
                Scan the QR code to start verification
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-xl">
                <QRCodeSVG
                  value={qrValue}
                  size={200}
                  level="H"
                  includeMargin
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={startVerification}
                disabled={verificationStatus === 'verifying'}
              >
                <Scan className="w-4 h-4" />
                {verificationStatus === 'verifying' ? 'Verifying...' : 'Start Verification'}
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="ghost" size="sm" className="text-xs">
                  <Download className="w-3 h-3" />
                  Download
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  <Share2 className="w-3 h-3" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Verification Progress */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-card rounded-xl border border-border/50 p-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Verification Progress</h3>
              <p className="text-muted-foreground text-sm">
                Real-time status and progress tracking
              </p>
            </div>

            {/* Status Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {verificationStatus === 'idle' && (
                  <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                
                {verificationStatus === 'verifying' && (
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                    <RefreshCw className="w-8 h-8 text-primary animate-spin" />
                  </div>
                )}
                
                {verificationStatus === 'success' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-8 h-8 text-success" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-foreground font-medium">{progress}%</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2">
                <motion.div
                  className="bg-gradient-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Verification Steps */}
            <div className="space-y-3">
              {verificationSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    step.completed ? 'bg-success/10 border border-success/20' : 'bg-muted/10'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    step.completed ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.completed ? '✓' : step.step}
                  </div>
                  <span className={`text-sm ${step.completed ? 'text-success' : 'text-muted-foreground'}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {verificationStatus === 'success' && (
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={resetVerification}
              >
                <RefreshCw className="w-4 h-4" />
                Verify Again
              </Button>
            )}
          </motion.div>

          {/* Verification Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-card rounded-xl border border-border/50 p-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Verification Results</h3>
              <p className="text-muted-foreground text-sm">
                Detailed verification outcome
              </p>
            </div>

            {verificationStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="text-center p-4 bg-success/10 border border-success/20 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                  <h4 className="font-semibold text-success mb-1">Verification Successful</h4>
                  <p className="text-sm text-muted-foreground">
                    Identity verified in 2.3 seconds
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Verification ID</span>
                    <span className="text-sm font-mono bg-muted/20 px-2 py-1 rounded">
                      VER-{Math.random().toString(36).substr(2, 8).toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Blockchain</span>
                    <span className="text-sm font-medium">Avalanche</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Gas Fee</span>
                    <span className="text-sm font-medium text-success">$0.02</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Timestamp</span>
                    <span className="text-sm font-medium">
                      {new Date().toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button variant="verify" className="w-full">
                  <Download className="w-4 h-4" />
                  Download Certificate
                </Button>
              </motion.div>
            ) : (
              <div className="text-center py-8">
                <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {verificationStatus === 'idle' && "Start verification to see results"}
                  {verificationStatus === 'verifying' && "Verification in progress..."}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-card rounded-xl border border-border/50 p-6 text-center">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">2.3s</div>
            <div className="text-sm text-muted-foreground">Avg. Verification Time</div>
          </div>
          
          <div className="bg-gradient-card rounded-xl border border-border/50 p-6 text-center">
            <Shield className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">99.97%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          
          <div className="bg-gradient-card rounded-xl border border-border/50 p-6 text-center">
            <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">1.2M+</div>
            <div className="text-sm text-muted-foreground">Verifications</div>
          </div>
          
          <div className="bg-gradient-card rounded-xl border border-border/50 p-6 text-center">
            <AlertCircle className="w-8 h-8 text-warning mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">0</div>
            <div className="text-sm text-muted-foreground">Security Incidents</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerificationDashboard;