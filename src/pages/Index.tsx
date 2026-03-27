import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import LiveDemoSection from "@/components/LiveDemoSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <SocialProof />
    <Features />
    <HowItWorks />
    <LiveDemoSection />
    <Pricing />
    <Footer />
  </div>
);

export default Index;
