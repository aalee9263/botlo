
import { MessageCircle, ShoppingCart, Calendar, TrendingUp, Users, FileText } from "lucide-react";
import ChatbotMockup from "./ChatbotMockup";
import { Button } from "@/components/ui/button";

const BotCategoriesSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923255007150", "_blank");
  };

  const categories = [
    {
      title: "WhatsApp Business Bot",
      description: "Automate customer support and sales on WhatsApp with intelligent responses",
      icon: MessageCircle,
      type: "whatsapp" as const,
      color: "from-green-500 to-green-600"
    },
    {
      title: "E-commerce Assistant",
      description: "Handle product inquiries, process orders, and manage returns automatically",
      icon: ShoppingCart,
      type: "ecommerce" as const,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Appointment Booking",
      description: "Let customers book appointments 24/7 with smart scheduling",
      icon: Calendar,
      type: "booking" as const,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Lead Generation Bot",
      description: "Qualify leads and capture customer information automatically",
      icon: TrendingUp,
      type: "lead" as const,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="marketing-text">Choose Your Bot Type</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect chatbot for your business needs. Each bot is designed to automate specific tasks and boost your revenue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Get This Bot Now
                  </Button>
                </div>
                <div className="flex-shrink-0 lg:w-80">
                  <ChatbotMockup 
                    type={category.type} 
                    className="w-full max-w-sm mx-auto lg:max-w-none transform hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Start Building Your Bot Today!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BotCategoriesSection;
