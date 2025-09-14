import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CredentialVault from "@/components/CredentialVault";
import VerificationDashboard from "@/components/VerificationDashboard";
import WalletConnect from "@/components/WalletConnect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CredentialVault />
        <VerificationDashboard />
        <WalletConnect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
