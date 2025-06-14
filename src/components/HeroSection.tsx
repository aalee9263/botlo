
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, ArrowRight, Sparkles, Bot, Zap, Shield, Cpu, Brain } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923255007150", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-20 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 md:left-20 w-40 h-40 md:w-80 md:h-80 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-purple-200 rounded-full blur-3xl opacity-10 animate-float"></div>
      
      {/* AI/Tech imagery with animations */}
      <div className="absolute top-1/4 left-4 md:left-10 opacity-20 animate-float">
        <Bot className="w-16 h-16 md:w-32 md:h-32 text-blue-500" />
      </div>
      <div className="absolute bottom-1/4 right-4 md:right-10 opacity-20 animate-bounce-slow">
        <Zap className="w-12 h-12 md:w-24 md:h-24 text-indigo-500" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-15 animate-pulse">
        <Shield className="w-10 h-10 md:w-20 md:h-20 text-purple-500" />
      </div>
      <div className="absolute top-20 left-1/3 opacity-10 animate-float" style={{ animationDelay: "1s" }}>
        <Cpu className="w-14 h-14 md:w-28 md:h-28 text-green-500" />
      </div>
      <div className="absolute bottom-20 left-1/3 opacity-15 animate-bounce-slow" style={{ animationDelay: "3s" }}>
        <Brain className="w-8 h-8 md:w-16 md:h-16 text-pink-500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced brand badge */}
          <div className="inline-flex items-center px-3 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-200 rounded-full text-blue-700 text-xs md:text-sm font-bold mb-4 md:mb-8 animate-fade-in shadow-lg">
            <Sparkles className="w-3 h-3 md:w-5 md:h-5 mr-2 animate-bounce" />
            #1 AI Chatbot Solution in Pakistan 🚀
          </div>
          
          <h1 className="text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-black mb-3 md:mb-6 tracking-tight leading-tight animate-fade-in">
            <span className="marketing-text block mb-1 md:mb-3">
              {t('heroTitle')}
            </span>
            <span className="text-sm md:text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-700 block">
              {t('heroSubtitle')}
            </span>
          </h1>
          
          <div className="mb-3 md:mb-6 animate-fade-in px-2" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm md:text-2xl lg:text-3xl xl:text-3xl text-blue-600 mb-1 md:mb-2 font-bold leading-tight">
              {t('heroPowerText')}
            </p>
            <p className="text-sm md:text-2xl lg:text-3xl xl:text-3xl text-indigo-600 font-bold leading-tight">
              {t('heroPowerText2')}
            </p>
          </div>
          
          <p className="text-xs md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.4s" }}>
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in mb-6 md:mb-12 px-2" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25 cta-button w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-6 md:w-6 group-hover:animate-bounce" />
              {t('heroCta')}
              <ArrowRight className="ml-2 h-3 w-3 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="flex -space-x-1 md:-space-x-2">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-2 md:border-3 border-white shadow-lg"></div>
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full border-2 md:border-3 border-white shadow-lg"></div>
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full border-2 md:border-3 border-white shadow-lg"></div>
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full border-2 md:border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs">
                  500+
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800 text-xs md:text-lg">500+ Happy Clients</div>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-xs md:text-lg">⭐⭐⭐⭐⭐</span>
                  <span className="ml-1 md:ml-2 text-gray-600 font-semibold text-xs">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Stats section - Fully mobile responsive */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-2xl mx-auto animate-fade-in px-2" style={{ animationDelay: "0.8s" }}>
            <div className="text-center p-2 md:p-6 bg-white/70 backdrop-blur-sm rounded-lg md:rounded-2xl border border-blue-100 md:border-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-lg md:text-3xl lg:text-4xl font-black text-blue-600 mb-1 md:mb-3">
                24/7
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-600 font-bold leading-tight">{t('heroStats1')}</div>
            </div>
            <div className="text-center p-2 md:p-6 bg-white/70 backdrop-blur-sm rounded-lg md:rounded-2xl border border-indigo-100 md:border-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-lg md:text-3xl lg:text-4xl font-black text-indigo-600 mb-1 md:mb-3">
                +40%
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-600 font-bold leading-tight">{t('heroStats2')}</div>
            </div>
            <div className="text-center p-2 md:p-6 bg-white/70 backdrop-blur-sm rounded-lg md:rounded-2xl border border-purple-100 md:border-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-lg md:text-3xl lg:text-4xl font-black text-purple-600 mb-1 md:mb-3">
                99%
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-600 font-bold leading-tight">{t('heroStats3')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
