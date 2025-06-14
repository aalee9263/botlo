
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle, Clock, Shield, Zap, Users, Settings, Smartphone, BarChart, Headphones, Star, CreditCard, Globe, CheckCircle, HelpCircle } from 'lucide-react';

const FAQsSection = () => {
  const { t, language } = useLanguage();

  const faqs = [
    {
      icon: MessageCircle,
      question: language === 'en' ? "What is an AI chatbot and how does it work?" : "AI chatbot kya hai aur yeh kaise kaam karta hai?",
      answer: language === 'en' ? "An AI chatbot is an automated messaging system that uses artificial intelligence to communicate with customers 24/7. It can answer questions, book appointments, process orders, and qualify leads without human intervention." : "AI chatbot ek automated messaging system hai jo artificial intelligence use karta hai customers ke saath 24/7 communicate karne ke liye. Yeh questions ka jawab de sakta hai, appointments book kar sakta hai, orders process kar sakta hai, aur leads qualify kar sakta hai bina human intervention ke."
    },
    {
      icon: Clock,
      question: language === 'en' ? "How quickly can you set up my chatbot?" : "Aap mera chatbot kitni jaldi setup kar sakte hain?",
      answer: language === 'en' ? "We can set up your basic chatbot within 24-48 hours. For complex integrations with multiple platforms, it typically takes 3-5 business days. We'll have you up and running quickly!" : "Hum aapka basic chatbot 24-48 hours mein setup kar sakte hain. Multiple platforms ke saath complex integrations ke liye usually 3-5 business days lagte hain. Hum aapko jaldi up and running kar denge!"
    },
    {
      icon: Shield,
      question: language === 'en' ? "Is my customer data safe and secure?" : "Kya mera customer data safe aur secure hai?",
      answer: language === 'en' ? "Absolutely! We use enterprise-grade security measures, including data encryption, secure servers, and GDPR compliance. Your customer data is protected with the highest security standards." : "Bilkul! Hum enterprise-grade security measures use karte hain, including data encryption, secure servers, aur GDPR compliance. Aapka customer data highest security standards ke saath protected hai."
    },
    {
      icon: Zap,
      question: language === 'en' ? "Which platforms can the chatbot work on?" : "Chatbot kon se platforms par kaam kar sakta hai?",
      answer: language === 'en' ? "Our chatbots work on WhatsApp Business, Facebook Messenger, Instagram DM, your website, and can integrate with SMS. We can customize for any platform you need." : "Hamare chatbots WhatsApp Business, Facebook Messenger, Instagram DM, aapki website par kaam karte hain, aur SMS ke saath integrate ho sakte hain. Hum aapki zaroorat ke kisi bhi platform ke liye customize kar sakte hain."
    },
    {
      icon: Users,
      question: language === 'en' ? "Can the chatbot handle multiple conversations at once?" : "Kya chatbot ek saath multiple conversations handle kar sakta hai?",
      answer: language === 'en' ? "Yes! Our AI chatbots can handle unlimited simultaneous conversations. Whether it's 1 customer or 1000, your bot will respond instantly to each one without any delays." : "Haan! Hamare AI chatbots unlimited simultaneous conversations handle kar sakte hain. Chahe 1 customer ho ya 1000, aapka bot har ek ko instantly respond karega bina kisi delay ke."
    },
    {
      icon: Settings,
      question: language === 'en' ? "Can I customize the chatbot responses?" : "Kya main chatbot responses customize kar sakta hun?",
      answer: language === 'en' ? "Absolutely! You can fully customize all responses, conversation flows, and even the bot's personality to match your brand voice. We provide an easy-to-use dashboard for updates." : "Bilkul! Aap sab responses, conversation flows, aur bot ki personality tak customize kar sakte hain apne brand voice ke according. Hum updates ke liye easy-to-use dashboard provide karte hain."
    },
    {
      icon: Smartphone,
      question: language === 'en' ? "Does it work on mobile phones?" : "Kya yeh mobile phones par kaam karta hai?",
      answer: language === 'en' ? "Yes! Our chatbots are fully optimized for mobile devices. Since most customers use WhatsApp and social media on their phones, your bot will work seamlessly on all mobile platforms." : "Haan! Hamare chatbots mobile devices ke liye fully optimized hain. Kyunki zyada tar customers WhatsApp aur social media apne phones par use karte hain, aapka bot sab mobile platforms par seamlessly kaam karega."
    },
    {
      icon: BarChart,
      question: language === 'en' ? "How do I track the chatbot's performance?" : "Main chatbot ki performance kaise track karun?",
      answer: language === 'en' ? "We provide detailed analytics including conversation metrics, lead conversion rates, response times, and customer satisfaction scores. You'll get weekly reports showing your ROI." : "Hum detailed analytics provide karte hain including conversation metrics, lead conversion rates, response times, aur customer satisfaction scores. Aapko weekly reports milenge jo aapka ROI show karenge."
    },
    {
      icon: Headphones,
      question: language === 'en' ? "What kind of support do you provide?" : "Aap kis qisam ki support provide karte hain?",
      answer: language === 'en' ? "We offer 24/7 technical support, regular bot optimization, performance monitoring, and free updates. Our team is always available to help you maximize your chatbot's effectiveness." : "Hum 24/7 technical support, regular bot optimization, performance monitoring, aur free updates offer karte hain. Hamari team hamesha available hai aapki chatbot ki effectiveness maximize karne ke liye."
    },
    {
      icon: Star,
      question: language === 'en' ? "What results can I expect?" : "Mujhe kya results expect karne chahiye?",
      answer: language === 'en' ? "Our clients typically see 40-60% increase in lead generation, 80% faster response times, and 24/7 customer engagement. Most businesses recover their investment within the first month." : "Hamare clients typically 40-60% increase dekhte hain lead generation mein, 80% faster response times, aur 24/7 customer engagement. Zyada tar businesses apni investment first month mein hi recover kar lete hain."
    },
    {
      icon: CreditCard,
      question: language === 'en' ? "What are your pricing plans?" : "Aapke pricing plans kya hain?",
      answer: language === 'en' ? "We offer flexible monthly plans starting from ₹5,000 for basic features. Premium plans with advanced AI and multiple integrations start from ₹15,000. Contact us for a custom quote based on your needs." : "Hum flexible monthly plans offer karte hain jo ₹5,000 se shuru hote hain basic features ke liye. Advanced AI aur multiple integrations ke saath premium plans ₹15,000 se start hote hain. Apni zarooraton ke base par custom quote ke liye hum se contact karein."
    },
    {
      icon: Globe,
      question: language === 'en' ? "Do you serve businesses outside Pakistan?" : "Kya aap Pakistan ke bahar businesses serve karte hain?",
      answer: language === 'en' ? "Yes! While we're based in Pakistan, we serve businesses globally. Our chatbots can be configured for any country, language, and time zone to match your target market." : "Haan! Hum Pakistan mein based hain lekin globally businesses serve karte hain. Hamare chatbots kisi bhi country, language, aur time zone ke liye configure ho sakte hain aapke target market ke according."
    },
    {
      icon: CheckCircle,
      question: language === 'en' ? "Is there a free trial available?" : "Kya free trial available hai?",
      answer: language === 'en' ? "Yes! We offer a 7-day free trial so you can test our chatbot with your actual customers. No credit card required, and you can see the results before making any commitment." : "Haan! Hum 7-day free trial offer karte hain taaki aap hamare chatbot ko apne actual customers ke saath test kar sakein. Koi credit card ki zaroorat nahi, aur aap koi commitment se pehle results dekh sakte hain."
    },
    {
      icon: HelpCircle,
      question: language === 'en' ? "What if I'm not satisfied with the results?" : "Agar main results se satisfied nahi hun to kya hoga?",
      answer: language === 'en' ? "We offer a 30-day money-back guarantee. If you're not completely satisfied with your chatbot's performance, we'll refund your investment. Your success is our priority!" : "Hum 30-day money-back guarantee offer karte hain. Agar aap apne chatbot ki performance se completely satisfied nahi hain, to hum aapki investment refund kar denge. Aapki success hamari priority hai!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 marketing-text">
            {t('faqsTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('faqsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                        <faq.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed pl-16">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
