
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    heroTitle: "Botlo",
    heroSubtitle: "Convert Visitors Into Customers",
    heroPowerText: "Chatbots that never sleep, never get tired —",
    heroPowerText2: "24/7 with your clients! 💪",
    heroDescription: "Boost sales by 40% with AI chatbots that work 24/7. Automate WhatsApp, Facebook & Instagram to capture leads, book appointments, and close deals while you sleep! Join 500+ growing businesses!",
    heroCta: "Get AI Assistant",
    heroStats1: "Never Miss a Lead",
    heroStats2: "Sales Increase",
    heroStats3: "Client Satisfaction",
    
    // Bot Categories
    botCategoriesTitle: "Choose Your Bot Type",
    botCategoriesSubtitle: "Select the perfect chatbot for your business needs. Each bot is designed to automate specific tasks and boost your revenue.",
    whatsappBotTitle: "WhatsApp Business Bot",
    whatsappBotDesc: "Automate customer support and sales on WhatsApp with intelligent responses",
    ecommerceBotTitle: "E-commerce Assistant",
    ecommerceBotDesc: "Handle product inquiries, process orders, and manage returns automatically",
    bookingBotTitle: "Appointment Booking",
    bookingBotDesc: "Let customers book appointments 24/7 with smart scheduling",
    leadBotTitle: "Lead Generation Bot",
    leadBotDesc: "Qualify leads and capture customer information automatically",
    getBotNow: "Get This Bot Now",
    startBuilding: "Start Building Your Bot Today!",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Complete chatbot solutions for your business growth",
    
    // Why Choose
    whyChooseTitle: "Why Choose Botlo?",
    whyChooseSubtitle: "We deliver results that matter to your business",
    
    // FAQs
    faqsTitle: "Frequently Asked Questions",
    faqsSubtitle: "Everything you need to know about our AI chatbot services",
    
    // Use Cases
    useCasesTitle: "Choose Your Bot Type",
    useCasesSubtitle: "Select the perfect chatbot solution for your business needs",
    whatsappBot: "WhatsApp Business",
    ecommerceBot: "E-commerce Support",
    bookingBot: "Appointment Booking",
    leadBot: "Lead Generation",
    
    // Success Stories
    successTitle: "Success Stories",
    successSubtitle: "See how our clients are growing their businesses with AI chatbots",
    
    // Contact
    contactTitle: "Ready to Transform Your Business?",
    contactSubtitle: "Get started with your AI chatbot today",
    contactCta: "Contact Us Now",
    
    // Footer
    footerTagline: "Building the future of customer engagement",
    
    // WhatsApp Float
    whatsappCta: "Chat on WhatsApp",
    whatsappSubtext: "Get instant support and free consultation"
  },
  ur: {
    // Hero Section
    heroTitle: "Botlo",
    heroSubtitle: "Visitors Ko Customers Mein Convert Karein",
    heroPowerText: "Chatbots jo na sote hain, na thakte hain —",
    heroPowerText2: "24/7 aapke clients ke saath! 💪",
    heroDescription: "AI chatbots ke saath sales 40% barhaiye jo 24/7 kaam karte hain. WhatsApp, Facebook aur Instagram ko automate karke leads capture karein, appointments book karein, aur deals close karein jab aap so rahe hon! 500+ growing businesses ke saath judiye!",
    heroCta: "AI Assistant Hasil Karein",
    heroStats1: "Koi Lead Miss Nahi",
    heroStats2: "Sales Increase",
    heroStats3: "Client Satisfaction",
    
    // Bot Categories
    botCategoriesTitle: "Apna Bot Type Choose Karein",
    botCategoriesSubtitle: "Apne business ki zarooraton ke liye perfect chatbot select karein. Har bot specific tasks ko automate karne aur aapki revenue barhaane ke liye design kiya gaya hai.",
    whatsappBotTitle: "WhatsApp Business Bot",
    whatsappBotDesc: "WhatsApp par customer support aur sales ko intelligent responses ke saath automate karein",
    ecommerceBotTitle: "E-commerce Assistant",
    ecommerceBotDesc: "Product inquiries handle karein, orders process karein, aur returns automatically manage karein",
    bookingBotTitle: "Appointment Booking",
    bookingBotDesc: "Customers ko 24/7 smart scheduling ke saath appointments book karne den",
    leadBotTitle: "Lead Generation Bot",
    leadBotDesc: "Leads qualify karein aur customer information automatically capture karein",
    getBotNow: "Ye Bot Abhi Hasil Karein",
    startBuilding: "Aaj Hi Apna Bot Banana Shuru Karein!",
    
    // Services
    servicesTitle: "Hamaray Services",
    servicesSubtitle: "Aapke business growth ke liye complete chatbot solutions",
    
    // Why Choose
    whyChooseTitle: "Botlo Kyun Choose Karein?",
    whyChooseSubtitle: "Hum aapke business ke liye results deliver karte hain",
    
    // FAQs
    faqsTitle: "Aksar Pooche Jane Wale Sawal",
    faqsSubtitle: "Hamare AI chatbot services ke baare mein sab kuch jo aapko jaanna chahiye",
    
    // Use Cases
    useCasesTitle: "Apna Bot Type Choose Karein",
    useCasesSubtitle: "Apne business ki zarooraton ke liye perfect chatbot solution select karein",
    whatsappBot: "WhatsApp Business",
    ecommerceBot: "E-commerce Support",
    bookingBot: "Appointment Booking",
    leadBot: "Lead Generation",
    
    // Success Stories
    successTitle: "Kamyabi Ki Kahaniyan",
    successSubtitle: "Dekhiye kaise hamare clients AI chatbots ke saath apne business ko barha rahe hain",
    
    // Contact
    contactTitle: "Apne Business Ko Transform Karne Ke Liye Ready Hain?",
    contactSubtitle: "Aaj hi apna AI chatbot shuru karein",
    contactCta: "Abhi Contact Karein",
    
    // Footer
    footerTagline: "Customer engagement ke future ko build kar rahe hain",
    
    // WhatsApp Float
    whatsappCta: "WhatsApp Par Chat Karein",
    whatsappSubtext: "Instant support aur free consultation hasil karein"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
