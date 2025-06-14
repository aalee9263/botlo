
import React from 'react';
import { MessageCircle, User, Bot } from 'lucide-react';

interface ChatbotMockupProps {
  type: 'whatsapp' | 'ecommerce' | 'booking' | 'lead' | 'healthcare' | 'education' | 'travel' | 'realestate';
  className?: string;
}

const ChatbotMockup = ({ type, className = '' }: ChatbotMockupProps) => {
  const getMessages = () => {
    switch (type) {
      case 'whatsapp':
        return [
          { sender: 'user', text: 'Hi, I need help with my order' },
          { sender: 'bot', text: 'Hello! I\'d be happy to help. Can you share your order number?' },
          { sender: 'user', text: 'Order #12345' },
          { sender: 'bot', text: 'Found your order! It\'s being processed and will ship today.' }
        ];
      case 'ecommerce':
        return [
          { sender: 'user', text: 'Show me your best deals' },
          { sender: 'bot', text: '🛍️ Today\'s deals:\n• 50% off Electronics\n• Buy 2 Get 1 Free Clothing' },
          { sender: 'user', text: 'Tell me about electronics' },
          { sender: 'bot', text: 'Electronics have up to 50% discount. Which category interests you?' }
        ];
      case 'booking':
        return [
          { sender: 'user', text: 'I want to book an appointment' },
          { sender: 'bot', text: '📅 I\'ll help you schedule! What service do you need?' },
          { sender: 'user', text: 'Consultation' },
          { sender: 'bot', text: 'Available today:\n• 2:00 PM\n• 4:30 PM\n• 6:00 PM' }
        ];
      case 'lead':
        return [
          { sender: 'user', text: 'Tell me about your services' },
          { sender: 'bot', text: '🚀 We specialize in AI chatbots that increase sales by 40%!' },
          { sender: 'user', text: 'Restaurant business' },
          { sender: 'bot', text: 'Perfect! Our restaurant bots handle orders & reservations 24/7.' }
        ];
      case 'healthcare':
        return [
          { sender: 'user', text: 'I need to schedule a checkup' },
          { sender: 'bot', text: '🏥 I can help! What type of appointment do you need?' },
          { sender: 'user', text: 'General checkup' },
          { sender: 'bot', text: 'Available slots:\n• Tomorrow 9 AM\n• Friday 2 PM\n• Monday 11 AM' }
        ];
      case 'education':
        return [
          { sender: 'user', text: 'I want to enroll in a course' },
          { sender: 'bot', text: '📚 Great! Which subject are you interested in?' },
          { sender: 'user', text: 'Programming' },
          { sender: 'bot', text: 'We have Python, JavaScript, and React courses. All with certificates!' }
        ];
      case 'travel':
        return [
          { sender: 'user', text: 'Plan a trip to Dubai' },
          { sender: 'bot', text: '✈️ Exciting! When are you planning to travel?' },
          { sender: 'user', text: 'Next month' },
          { sender: 'bot', text: 'I found great deals! 5-day package for $899 including hotel & flights.' }
        ];
      case 'realestate':
        return [
          { sender: 'user', text: 'Looking for a 3-bedroom house' },
          { sender: 'bot', text: '🏠 I can help! What\'s your budget range?' },
          { sender: 'user', text: 'Around $300k' },
          { sender: 'bot', text: 'Found 5 properties in your range! Would you like to schedule viewings?' }
        ];
      default:
        return [];
    }
  };

  const messages = getMessages();
  const colors = {
    whatsapp: 'from-green-500 to-emerald-600',
    ecommerce: 'from-blue-500 to-cyan-600',
    booking: 'from-purple-500 to-pink-600',
    lead: 'from-orange-500 to-red-600',
    healthcare: 'from-red-500 to-pink-500',
    education: 'from-indigo-500 to-purple-500',
    travel: 'from-teal-500 to-green-500',
    realestate: 'from-amber-500 to-orange-500'
  };

  return (
    <div className={`chatbot-mockup bg-gradient-to-br ${colors[type]} p-4 md:p-6 rounded-3xl shadow-2xl ${className} animate-fade-in flex flex-col`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20 flex-shrink-0">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-xs md:text-sm">AI Assistant</h3>
            <p className="text-white/70 text-xs">Online</p>
          </div>
        </div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      {/* Messages - Fixed height without scroll */}
      <div className="space-y-3 flex-1 flex flex-col justify-end">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'bot' && (
              <div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-2 h-2 md:w-3 md:h-3 text-white" />
              </div>
            )}
            <div
              className={`message-bubble text-xs md:text-sm max-w-[75%] px-3 py-2 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-white/90 text-gray-800 rounded-br-md'
                  : 'bg-white/20 text-white rounded-bl-md'
              }`}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-2 h-2 md:w-3 md:h-3 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {/* Typing indicator */}
        <div className="flex items-start space-x-2 justify-start">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="w-2 h-2 md:w-3 md:h-3 text-white" />
          </div>
          <div className="bg-white/20 text-white px-3 py-2 rounded-2xl rounded-bl-md">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full animate-typing"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMockup;
