
import HeroSection from "@/components/HeroSection";
import BotCategoriesSection from "@/components/BotCategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQsSection from "@/components/FAQsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LanguageToggle />
      <HeroSection />
      <BotCategoriesSection />
      <ServicesSection />
      <WhyChooseSection />
      <SuccessStoriesSection />
      <FAQsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
