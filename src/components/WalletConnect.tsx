import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  Shield, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  Zap,
  DollarSign,
  TrendingUp
} from "lucide-react";

const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'Most popular Ethereum wallet',
      icon: '🦊',
      status: 'available',
      users: '30M+'
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      description: 'Connect to any mobile wallet',
      icon: '🔗',
      status: 'available',
      users: '15M+'
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      description: 'Self-custody wallet by Coinbase',
      icon: '🌀',
      status: 'available',
      users: '10M+'
    },
    {
      id: 'rainbow',
      name: 'Rainbow',
      description: 'Ethereum wallet made for everyone',
      icon: '🌈',
      status: 'available',
      users: '5M+'
    }
  ];

  const mockWalletData = {
    address: '0x742d35Cc6543C09594e9dA4C4c88e82eFd64a72B',
    balance: '2.547',
    network: 'Avalanche C-Chain',
    credentials: 3,
    verifications: 12
  };

  const connectWallet = (walletId: string) => {
    setSelectedWallet(walletId);
    // Simulate connection delay
    setTimeout(() => {
      setIsConnected(true);
    }, 1500);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setSelectedWallet(null);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(mockWalletData.address);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Connect Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Wallet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Securely connect your favorite wallet to start managing your decentralized identity.
            Your keys, your identity, your control.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {!isConnected ? (
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Wallet Selection */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4">Choose Your Wallet</h3>
                  <p className="text-muted-foreground">
                    Select from our supported wallets to get started with VeriChainID
                  </p>
                </div>

                <div className="space-y-4">
                  {wallets.map((wallet, index) => (
                    <motion.button
                      key={wallet.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => connectWallet(wallet.id)}
                      disabled={selectedWallet === wallet.id}
                      className="w-full p-4 bg-gradient-card border border-border/50 rounded-xl hover:border-primary/50 transition-all disabled:opacity-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{wallet.icon}</div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{wallet.name}</h4>
                            {wallet.status === 'available' && (
                              <CheckCircle className="w-4 h-4 text-success" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{wallet.description}</p>
                          <p className="text-xs text-primary font-medium mt-1">{wallet.users} users</p>
                        </div>
                        {selectedWallet === wallet.id ? (
                          <div className="animate-spin">
                            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full" />
                          </div>
                        ) : (
                          <ExternalLink className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Connection Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-card rounded-xl border border-border/50 p-8"
              >
                <div className="text-center mb-8">
                  <Wallet className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Why Connect Your Wallet?</h3>
                  <p className="text-muted-foreground">
                    Unlock the full potential of decentralized identity
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">True Ownership</h4>
                      <p className="text-sm text-muted-foreground">
                        Your identity credentials are stored on-chain and controlled by you alone
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Instant Verification</h4>
                      <p className="text-sm text-muted-foreground">
                        Verify your identity instantly across any compatible platform
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <DollarSign className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Low Cost</h4>
                      <p className="text-sm text-muted-foreground">
                        Minimal gas fees on Avalanche network for all operations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-warning mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Future-Proof</h4>
                      <p className="text-sm text-muted-foreground">
                        Built on open standards ensuring long-term compatibility
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Connected Wallet Dashboard */}
              <div className="bg-gradient-card rounded-xl border border-border/50 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Wallet Connected</h3>
                      <p className="text-muted-foreground">
                        {wallets.find(w => w.id === selectedWallet)?.name} is now connected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" onClick={disconnectWallet}>
                    Disconnect
                  </Button>
                </div>

                {/* Wallet Info */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Wallet Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                          <span className="text-sm text-muted-foreground">Address</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-mono">
                              {mockWalletData.address.slice(0, 6)}...{mockWalletData.address.slice(-4)}
                            </span>
                            <Button variant="ghost" size="icon-sm" onClick={copyAddress}>
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                          <span className="text-sm text-muted-foreground">Network</span>
                          <span className="text-sm font-medium">{mockWalletData.network}</span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                          <span className="text-sm text-muted-foreground">Balance</span>
                          <span className="text-sm font-medium">{mockWalletData.balance} AVAX</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Identity Stats</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                          <div className="text-2xl font-bold text-success mb-1">
                            {mockWalletData.credentials}
                          </div>
                          <div className="text-sm text-muted-foreground">Active Credentials</div>
                        </div>

                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {mockWalletData.verifications}
                          </div>
                          <div className="text-sm text-muted-foreground">Total Verifications</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <h4 className="font-semibold mb-4">Quick Actions</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button variant="hero" className="h-auto p-4 flex-col gap-2">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm">Create DID</span>
                    </Button>
                    
                    <Button variant="secondary" className="h-auto p-4 flex-col gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Verify Identity</span>
                    </Button>
                    
                    <Button variant="accent" className="h-auto p-4 flex-col gap-2">
                      <Wallet className="w-5 h-5" />
                      <span className="text-sm">Manage Credentials</span>
                    </Button>
                    
                    <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">View on Explorer</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WalletConnect;