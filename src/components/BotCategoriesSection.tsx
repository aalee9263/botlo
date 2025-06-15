
import { MessageCircle, ShoppingCart, Calendar, TrendingUp, Heart, GraduationCap, Car, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ChatbotMockup from "./ChatbotMockup";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BotCategoriesSection = () => {
  const { t } = useLanguage();
  const [selectedBot, setSelectedBot] = useState('whatsapp');
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+17433476532", "_blank");
  };

  const categories = [
    {
      id: 'whatsapp',
      title: t('whatsappBotTitle'),
      icon: MessageCircle,
      color: "from-green-500 to-emerald-600",
      ctaText: "WhatsApp Bot Banwayein"
    },
    {
      id: 'ecommerce',
      title: t('ecommerceBotTitle'),
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-600",
      ctaText: "E-commerce Bot Shuru Karein"
    },
    {
      id: 'booking',
      title: t('bookingBotTitle'),
      icon: Calendar,
      color: "from-purple-500 to-pink-600",
      ctaText: "Booking Bot Hasil Karein"
    },
    {
      id: 'lead',
      title: t('leadBotTitle'),
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
      ctaText: "Lead Generation Bot Lein"
    },
    {
      id: 'healthcare',
      title: "Healthcare Bot",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      ctaText: "Healthcare Bot Banwayein"
    },
    {
      id: 'education',
      title: "Education Bot",
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500",
      ctaText: "Education Bot Hasil Karein"
    },
    {
      id: 'travel',
      title: "Travel Bot",
      icon: Car,
      color: "from-teal-500 to-green-500",
      ctaText: "Travel Bot Banayein"
    },
    {
      id: 'realestate',
      title: "Real Estate Bot",
      icon: Home,
      color: "from-amber-500 to-orange-500",
      ctaText: "Real Estate Bot Lein"
    }
  ];

  const selectedCategory = categories.find(cat => cat.id === selectedBot);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="marketing-text">{t('botCategoriesTitle')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('botCategoriesSubtitle')}
          </p>
        </div>
        
        {/* Desktop: 2 Column Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Side: Bot Type Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                onClick={() => setSelectedBot(category.id)}
                variant={selectedBot === category.id ? "default" : "outline"}
                className={`group h-auto p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  selectedBot === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-0` 
                    : 'hover:shadow-md bg-white border-2 border-gray-200 hover:border-gray-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    selectedBot === category.id 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-r ${category.color}`
                  }`}>
                    <category.icon className={`h-5 w-5 ${
                      selectedBot === category.id ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <span className="font-semibold text-sm text-center leading-tight">
                    {category.title}
                  </span>
                </div>
              </Button>
            ))}
          </div>

          {/* Right Side: Chat Mockup */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in">
              <ChatbotMockup 
                type={selectedBot as 'whatsapp' | 'ecommerce' | 'booking' | 'lead' | 'healthcare' | 'education' | 'travel' | 'realestate'} 
                className="w-full h-96 transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="mt-6 text-center">
              <Button 
                onClick={handleWhatsAppClick}
                className={`w-full bg-gradient-to-r ${selectedCategory?.color} hover:opacity-90 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300`}
              >
                {selectedCategory?.ctaText}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile: Stacked Layout */}
        <div className="md:hidden space-y-6">
          {/* Bot Type Buttons */}
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                onClick={() => setSelectedBot(category.id)}
                variant={selectedBot === category.id ? "default" : "outline"}
                className={`group h-auto p-3 rounded-xl transition-all duration-300 ${
                  selectedBot === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-0` 
                    : 'hover:shadow-md bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    selectedBot === category.id 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-r ${category.color}`
                  }`}>
                    <category.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-xs text-center leading-tight">
                    {category.title}
                  </span>
                </div>
              </Button>
            ))}
          </div>

          {/* Chat Mockup */}
          <div className="animate-fade-in">
            <ChatbotMockup 
              type={selectedBot as 'whatsapp' | 'ecommerce' | 'booking' | 'lead' | 'healthcare' | 'education' | 'travel' | 'realestate'} 
              className="w-full h-80" 
            />
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleWhatsAppClick}
            className={`w-full bg-gradient-to-r ${selectedCategory?.color} hover:opacity-90 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300`}
          >
            {selectedCategory?.ctaText}
          </Button>
        </div>

        <div className="text-center mt-12 md:mt-16 animate-fade-in">
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
            {t('startBuilding')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BotCategoriesSection;
