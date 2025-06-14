
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessStoriesSection = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      name: language === 'en' ? 'Ahmed Khan' : 'احمد خان',
      service: language === 'en' ? 'Restaurant Chain' : 'ریسٹورنٹ چین',
      testimonial: language === 'en' 
        ? 'Our orders increased by 60% after implementing the chatbot. Amazing results!'
        : 'Chatbot lagane ke baad hamare orders 60% barh gaye. Kamaal ke results!',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: language === 'en' ? 'Fatima Ali' : 'فاطمہ علی',
      service: language === 'en' ? 'Fashion Store' : 'فیشن سٹور',
      testimonial: language === 'en'
        ? 'Customer support became so much easier. Bot handles 80% of queries automatically.'
        : 'Customer support bohat aasan ho gaya. Bot 80% queries khud handle karta hai.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: language === 'en' ? 'Muhammad Hassan' : 'محمد حسن',
      service: language === 'en' ? 'Medical Clinic' : 'میڈیکل کلینک',
      testimonial: language === 'en'
        ? 'Appointment booking is now automated. Patients love the 24/7 availability.'
        : 'Appointment booking ab automatic hai. Patients ko 24/7 availability bohat pasand hai.',
      avatar: '👨‍⚕️',
      rating: 5
    },
    {
      name: language === 'en' ? 'Sarah Ahmed' : 'سارہ احمد',
      service: language === 'en' ? 'Beauty Salon' : 'بیوٹی سیلون',
      testimonial: language === 'en'
        ? 'Lead generation improved dramatically. Getting 5x more qualified leads now.'
        : 'Lead generation dramatically improve hui. Ab 5x zyada qualified leads mil rahe hain.',
      avatar: '💄',
      rating: 5
    },
    {
      name: language === 'en' ? 'Ali Raza' : 'علی رضا',
      service: language === 'en' ? 'Real Estate' : 'ریئل اسٹیٹ',
      testimonial: language === 'en'
        ? 'Property inquiries are handled instantly. Clients appreciate quick responses.'
        : 'Property inquiries instantly handle ho jaate hain. Clients ko quick responses bohat pasand hain.',
      avatar: '🏘️',
      rating: 5
    },
    {
      name: language === 'en' ? 'Zainab Sheikh' : 'زینب شیخ',
      service: language === 'en' ? 'Online Store' : 'آن لائن سٹور',
      testimonial: language === 'en'
        ? 'Sales conversion increased by 45%. The bot never sleeps, never takes breaks!'
        : 'Sales conversion 45% barha hai. Bot kabhi sota nahi, kabhi break nahi leta!',
      avatar: '🛍️',
      rating: 5
    },
    {
      name: language === 'en' ? 'Omar Malik' : 'عمر ملک',
      service: language === 'en' ? 'Fitness Center' : 'فٹنیس سینٹر',
      testimonial: language === 'en'
        ? 'Member registration automated completely. More time to focus on training.'
        : 'Member registration completely automatic ho gaya. Training par zyada focus kar sakte hain.',
      avatar: '💪',
      rating: 5
    },
    {
      name: language === 'en' ? 'Ayesha Khan' : 'عائشہ خان',
      service: language === 'en' ? 'Travel Agency' : 'ٹریول ایجنسی',
      testimonial: language === 'en'
        ? 'Booking process simplified for customers. Revenue up 35% in just 2 months.'
        : 'Customers ke liye booking process simple ho gaya. Sirf 2 months mein revenue 35% barha.',
      avatar: '✈️',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(stories.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(stories.length / 3)) % Math.ceil(stories.length / 3));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleStories = stories.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 marketing-text">
            {t('successTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('successSubtitle')}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visibleStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{story.avatar}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{story.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{story.service}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed italic">
                  "{story.testimonial}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Layout - Swipeable */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory">
            {stories.map((story, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 snap-center"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{story.avatar}</div>
                  <div>
                    <h3 className="font-bold text-gray-800">{story.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{story.service}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{story.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(stories.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
