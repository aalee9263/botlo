
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, ShoppingCart, FileText, Users, TrendingUp, ArrowRight, Zap, DollarSign, Clock } from "lucide-react";

const ServicesSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923255007150", "_blank");
  };

  const services = [
    {
      icon: TrendingUp,
      title: "Lead Generation That Converts",
      description: "Turn every visitor into a paying customer! Our AI captures, qualifies, and nurtures leads automatically while you focus on closing deals.",
      features: ["Smart lead scoring", "Auto-follow ups", "CRM integration"],
      benefit: "3x More Qualified Leads",
      gradient: "from-botlo-primary to-botlo-secondary",
      bgColor: "from-botlo-primary/5 to-botlo-secondary/5"
    },
    {
      icon: Calendar,
      title: "Appointment Booking on Autopilot",
      description: "Never lose a booking again! Perfect for clinics, salons, consultants. Your calendar stays full while customers book 24/7.",
      features: ["Smart scheduling", "Auto reminders", "No-show reduction"],
      benefit: "85% Booking Rate",
      gradient: "from-botlo-secondary to-botlo-accent",
      bgColor: "from-botlo-secondary/5 to-botlo-accent/5"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Sales Machine",
      description: "Boost online sales instantly! Handle inquiries, process orders, and provide 24/7 support that turns browsers into buyers.",
      features: ["Product recommendations", "Cart recovery", "Order tracking"],
      benefit: "40% Sales Increase",
      gradient: "from-botlo-accent to-botlo-primary",
      bgColor: "from-botlo-accent/5 to-botlo-primary/5"
    },
    {
      icon: FileText,
      title: "Client Onboarding Simplified",
      description: "Streamline your intake process! Collect information, validate data, and onboard clients faster than ever before.",
      features: ["Smart forms", "Data validation", "Process automation"],
      benefit: "75% Faster Onboarding",
      gradient: "from-botlo-primary to-botlo-accent",
      bgColor: "from-botlo-primary/5 to-botlo-accent/5"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business Domination",
      description: "Dominate WhatsApp with professional chatbots that engage customers where they spend their time. Broadcast, automate, convert!",
      features: ["Broadcast campaigns", "Rich media", "Business API"],
      benefit: "60% Higher Engagement",
      gradient: "from-botlo-secondary to-botlo-primary",
      bgColor: "from-botlo-secondary/5 to-botlo-primary/5"
    },
    {
      icon: Users,
      title: "Multi-Platform Mastery",
      description: "One solution for all platforms! Consistent brand experience across WhatsApp, Facebook, and Instagram that builds trust.",
      features: ["Cross-platform sync", "Unified analytics", "Brand consistency"],
      benefit: "3x Platform Reach",
      gradient: "from-botlo-accent to-botlo-secondary",
      bgColor: "from-botlo-accent/5 to-botlo-secondary/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-botlo-neutral-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-botlo-primary to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-botlo-primary/20 to-botlo-secondary/20 border border-botlo-primary/30 rounded-full text-botlo-primary text-sm font-bold mb-8 glass">
            <DollarSign className="w-5 h-5 mr-2" />
            Revenue-Generating Solutions
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="marketing-text">Services That</span><br />
            <span className="text-botlo-neutral-800">Actually Make Money</span>
          </h2>
          <p className="text-xl text-botlo-neutral-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Stop losing customers to slow responses! Our AI-powered chatbots work 24/7 to capture leads, 
            book appointments, and close sales automatically. <span className="font-bold text-botlo-primary">Your competition is already doing this!</span>
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="cta-button bg-gradient-to-r from-botlo-primary to-botlo-secondary hover:from-botlo-primary-dark hover:to-botlo-secondary-dark text-white px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="mr-2 h-5 w-5" />
            Get Your Money-Making Bot Now!
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white animate-slide-up overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-bold rounded-full`}>
                    {service.benefit}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-botlo-neutral-800 mb-4 group-hover:text-botlo-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-botlo-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-botlo-neutral-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="w-full border-2 border-botlo-primary/30 text-botlo-primary hover:bg-botlo-primary hover:text-white font-bold py-3 rounded-xl transition-all duration-300 group-hover:scale-105"
                >
                  Start Earning More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-botlo-neutral-900 via-botlo-neutral-800 to-botlo-neutral-900 p-12 md:p-16 rounded-3xl text-white relative overflow-hidden animate-fade-in shadow-2xl">
            <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-botlo-primary/20 rounded-full transform -translate-x-20 -translate-y-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-botlo-secondary/20 rounded-full transform translate-x-20 translate-y-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-botlo-primary via-botlo-secondary to-botlo-accent bg-clip-text text-transparent">
                  Ready to 10X Your Business?
                </span>
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                While you're reading this, your competitors are already using AI chatbots to steal your customers. 
                <span className="font-bold text-botlo-primary"> Don't get left behind!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="cta-button bg-gradient-to-r from-botlo-primary to-botlo-secondary hover:from-botlo-primary-dark hover:to-botlo-secondary-dark text-white px-12 py-6 text-xl font-black rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow"
                >
                  <Clock className="mr-3 h-7 w-7" />
                  Get Started in 5 Minutes!
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-green-400 mr-2">✓</span>
                  No Setup Fees
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-green-400 mr-2">✓</span>
                  Free Trial Available
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-green-400 mr-2">✓</span>
                  ROI Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
