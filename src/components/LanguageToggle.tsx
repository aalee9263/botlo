
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-blue-600">
          {language === 'en' ? 'اردو' : 'EN'}
        </span>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </Button>
  );
};

export default LanguageToggle;
