
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import LabsSection from "@/components/home/LabsSection";
import StatsSection from "@/components/home/StatsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <LabsSection />
      <StatsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
