
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ChatbotMockup from '@/components/ChatbotMockup';
import { MessageCircle, ShoppingCart, Calendar, TrendingUp } from 'lucide-react';

const UseCasesSection = () => {
  const { t } = useLanguage();
  const [activeUseCase, setActiveUseCase] = useState('whatsapp');

  const useCases = [
    {
      id: 'whatsapp',
      name: t('whatsappBot'),
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      description: 'WhatsApp Business automation for customer support'
    },
    {
      id: 'ecommerce',
      name: t('ecommerceBot'),
      icon: ShoppingCart,
      color: 'from-blue-500 to-purple-600',
      description: 'E-commerce support and order management'
    },
    {
      id: 'booking',
      name: t('bookingBot'),
      icon: Calendar,
      color: 'from-pink-500 to-rose-600',
      description: 'Appointment booking and scheduling'
    },
    {
      id: 'lead',
      name: t('leadBot'),
      icon: TrendingUp,
      color: 'from-orange-500 to-yellow-600',
      description: 'Lead generation and qualification'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 marketing-text">
            {t('useCasesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {t('useCasesSubtitle')}
          </p>

          {/* Use Case Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {useCases.map((useCase) => {
              const IconComponent = useCase.icon;
              return (
                <Button
                  key={useCase.id}
                  onClick={() => setActiveUseCase(useCase.id)}
                  variant={activeUseCase === useCase.id ? "default" : "outline"}
                  size="lg"
                  className={`group px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    activeUseCase === useCase.id 
                      ? `bg-gradient-to-r ${useCase.color} text-white shadow-lg` 
                      : 'hover:shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  {useCase.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Mockup Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <ChatbotMockup 
                type={activeUseCase as 'whatsapp' | 'ecommerce' | 'booking' | 'lead'} 
                className="h-96 md:h-80 lg:h-96"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel for smaller screens */}
        <div className="md:hidden mt-8">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <ChatbotMockup 
                  type={activeUseCase as 'whatsapp' | 'ecommerce' | 'booking' | 'lead'} 
                  className="h-96"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
