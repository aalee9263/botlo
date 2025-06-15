
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open("https://wa.me/+17433476532", "_blank", "noopener,noreferrer");
  };

  const toggleExpanded = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Expanded Card */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-fade-in border border-green-100 pointer-events-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Botlo Support</h3>
                <p className="text-green-600 text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={toggleExpanded}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-1"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm">
            {t('whatsappSubtext')}
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            type="button"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('whatsappCta')}</span>
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative pointer-events-auto">
        <button
          onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
          type="button"
          className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow flex items-center space-x-3 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)'
          }}
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
          {!isExpanded && (
            <span className="font-semibold text-sm whitespace-nowrap hidden sm:block">
              {t('whatsappCta')}
            </span>
          )}
        </button>

        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
