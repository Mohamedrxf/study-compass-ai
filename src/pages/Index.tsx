import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ROICalculator from "@/components/ROICalculator";
import LoanSection from "@/components/LoanSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <ROICalculator />
    <LoanSection />
    <CommunitySection />
    <Footer />
    <AIChatbot />
  </div>
);

export default Index;
