
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923255007150", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Simplified background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Brand badge */}
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6 md:mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            #1 AI Chatbot Solution in Pakistan
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 tracking-tight leading-tight animate-fade-in">
            <span className="marketing-text block mb-2">
              Botlo
            </span>
            <span className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-700 block">
              Convert Visitors Into Customers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-4 md:mb-6 font-bold animate-fade-in leading-tight" style={{ animationDelay: "0.2s" }}>
            <span className="text-blue-600">Chatbots jo na sote hain, na thakte hain —</span><br />
            <span className="text-indigo-600">24/7 aapke clients ke saath! 💪</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="font-semibold text-gray-800">Boost sales by 40%</span> with AI chatbots that work 24/7. 
            Automate WhatsApp, Facebook & Instagram to capture leads, book appointments, and close deals while you sleep! 
            <span className="text-blue-600 font-semibold">Join 500+ growing businesses!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in mb-8 md:mb-12" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <MessageCircle className="mr-3 h-6 w-6 md:h-7 md:w-7 group-hover:animate-bounce" />
              Start Making Money Now!
              <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-indigo-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-semibold text-gray-800">500+ Happy Clients</div>
                <div className="flex items-center">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Simplified Stats section */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-center p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100 hover:scale-105 transition-transform">
              <div className="text-2xl md:text-3xl font-black text-blue-600 mb-1 md:mb-2">
                24/7
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Never Miss a Lead</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-indigo-100 hover:scale-105 transition-transform">
              <div className="text-2xl md:text-3xl font-black text-indigo-600 mb-1 md:mb-2">
                +40%
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Sales Increase</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-100 hover:scale-105 transition-transform">
              <div className="text-2xl md:text-3xl font-black text-purple-600 mb-1 md:mb-2">
                99%
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
