
import { MessageCircle, Clock, CheckCircle2 } from "lucide-react";

interface ChatbotMockupProps {
  type: 'whatsapp' | 'ecommerce' | 'booking' | 'lead';
  className?: string;
}

const ChatbotMockup = ({ type, className = "" }: ChatbotMockupProps) => {
  const mockups = {
    whatsapp: {
      title: "WhatsApp Business",
      messages: [
        { type: 'user', text: "Hi! Do you have iPhone 15 in stock?" },
        { type: 'bot', text: "Hello! Yes, we have iPhone 15 Pro in all colors. Would you like to see pricing and availability?" },
        { type: 'user', text: "Yes, please show me options" },
        { type: 'bot', text: "📱 iPhone 15 Pro Options:\n• 128GB - $999\n• 256GB - $1099\n• 512GB - $1299\n\nAll available in Natural Titanium, Blue, White & Black. Free delivery within 24hrs!" }
      ],
      color: "from-green-500 to-green-600"
    },
    ecommerce: {
      title: "E-commerce Assistant",
      messages: [
        { type: 'user', text: "I want to return this product" },
        { type: 'bot', text: "I'd be happy to help with your return! Please provide your order number." },
        { type: 'user', text: "Order #12345" },
        { type: 'bot', text: "Found your order! Return approved ✅\n\nYour return label has been sent to your email. Free pickup available tomorrow between 10AM-6PM." }
      ],
      color: "from-blue-500 to-purple-600"
    },
    booking: {
      title: "Appointment Booking",
      messages: [
        { type: 'user', text: "I need a haircut appointment" },
        { type: 'bot', text: "Perfect! I can help you book with our top stylists. What day works best for you?" },
        { type: 'user', text: "Tomorrow afternoon" },
        { type: 'bot', text: "Available slots tomorrow:\n• 2:00 PM with Sarah\n• 3:30 PM with Mike\n• 4:45 PM with Sarah\n\nWhich time preference works for you?" }
      ],
      color: "from-pink-500 to-rose-600"
    },
    lead: {
      title: "Lead Generation",
      messages: [
        { type: 'user', text: "Tell me about your digital marketing services" },
        { type: 'bot', text: "Great choice! We help businesses grow online with SEO, Social Media, and Ads. What's your current monthly revenue?" },
        { type: 'user', text: "Around $50k per month" },
        { type: 'bot', text: "Excellent! Businesses like yours typically see 40-60% growth with our strategies. I'd love to schedule a free consultation. What's your email?" }
      ],
      color: "from-orange-500 to-yellow-600"
    }
  };

  const mockup = mockups[type];

  return (
    <div className={`chatbot-mockup ${className} animate-float`}>
      <div className={`bg-gradient-to-r ${mockup.color} p-4 text-white relative`}>
        <div className="flex items-center space-x-3">
          <MessageCircle className="w-6 h-6" />
          <div>
            <h4 className="font-semibold">{mockup.title}</h4>
            <div className="flex items-center text-sm opacity-90">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Online • Responds instantly
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-white space-y-3 max-h-80 overflow-y-auto">
        {mockup.messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <div className={`message-bubble ${message.type === 'user' ? 'message-user' : 'message-bot'} animate-slide-up`}>
              <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <Clock className="w-3 h-3 opacity-60" />
                <span className="text-xs opacity-60">now</span>
                {message.type === 'user' && <CheckCircle2 className="w-3 h-3 text-blue-500" />}
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex justify-start">
          <div className="message-bubble message-bot">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-botlo-neutral-400 rounded-full animate-typing"></div>
              <div className="w-2 h-2 bg-botlo-neutral-400 rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-botlo-neutral-400 rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMockup;
