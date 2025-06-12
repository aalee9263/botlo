
import HeroSection from "@/components/HeroSection";
import BotCategoriesSection from "@/components/BotCategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BotCategoriesSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
