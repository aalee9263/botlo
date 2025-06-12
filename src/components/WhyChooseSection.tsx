
import { CheckCircle, Clock, Zap, Shield, Users, TrendingUp, Star, DollarSign, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923255007150", "_blank");
  };

  const reasons = [
    {
      icon: Clock,
      title: "Never Sleep, Never Stop Selling",
      description: "While you sleep, our bots are closing deals! 24/7 availability means you never miss a hot lead or urgent inquiry.",
      metric: "24/7",
      color: "from-botlo-primary to-botlo-secondary"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Response = More Sales",
      description: "Studies show 78% of customers buy from the first responder. Our bots reply in milliseconds, not hours!",
      metric: "<1s",
      color: "from-botlo-secondary to-botlo-accent"
    },
    {
      icon: TrendingUp,
      title: "Proven Revenue Growth",
      description: "Our clients see average 40% sales increase within 30 days. That's not a promise, that's a proven track record!",
      metric: "+40%",
      color: "from-botlo-accent to-botlo-primary"
    },
    {
      icon: Users,
      title: "Handle Unlimited Customers",
      description: "Serve 1000s of customers simultaneously without hiring extra staff. Scale your business without scaling costs!",
      metric: "∞",
      color: "from-botlo-primary to-botlo-accent"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with 99.9% uptime. Your customer data is safe, your business never stops running.",
      metric: "99.9%",
      color: "from-botlo-secondary to-botlo-primary"
    },
    {
      icon: CheckCircle,
      title: "Setup in Minutes, Not Months",
      description: "No complex installations or technical headaches. Get your money-making bot live in just 5 minutes!",
      metric: "5min",
      color: "from-botlo-accent to-botlo-secondary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-botlo-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-botlo-primary/10 to-botlo-secondary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-botlo-primary/20 to-botlo-secondary/20 border border-botlo-primary/30 rounded-full text-botlo-primary text-sm font-bold mb-8 glass">
            <Star className="w-5 h-5 mr-2 animate-bounce-slow" />
            Why Smart Businesses Choose Botlo
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="marketing-text">Don't Just Take</span><br />
            <span className="text-botlo-neutral-800">Our Word For It!</span>
          </h2>
          <p className="text-xl text-botlo-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Join <span className="font-bold text-botlo-primary">500+ successful businesses</span> that chose Botlo to automate their customer communications 
            and <span className="font-bold text-botlo-secondary">skyrocket their revenue</span> with intelligent chatbot solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up border border-gray-100 hover:border-botlo-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-4xl font-black bg-gradient-to-r ${reason.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {reason.metric}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-botlo-neutral-800 mb-4 group-hover:text-botlo-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-botlo-neutral-600 leading-relaxed mb-6">
                  {reason.description}
                </p>

                <Button 
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  size="sm"
                  className="w-full border-botlo-primary/30 text-botlo-primary hover:bg-botlo-primary hover:text-white font-semibold transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-botlo-primary via-botlo-secondary to-botlo-accent p-12 md:p-16 rounded-3xl text-white max-w-6xl mx-auto shadow-2xl relative overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-32 -translate-y-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-32 translate-y-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <Rocket className="w-8 h-8 animate-bounce-slow" />
                  <Target className="w-8 h-8 animate-bounce-slow" style={{ animationDelay: "0.5s" }} />
                  <DollarSign className="w-8 h-8 animate-bounce-slow" style={{ animationDelay: "1s" }} />
                </div>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Stop Losing Money to Slow Responses!
              </h3>
              <p className="text-xl opacity-95 mb-8 max-w-4xl mx-auto leading-relaxed">
                Every minute you wait is money walking out the door. Join the AI revolution and start converting 
                more visitors into paying customers <span className="font-bold">TODAY!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="cta-button bg-white text-botlo-primary hover:bg-botlo-neutral-100 px-12 py-6 text-xl font-black rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Zap className="mr-3 h-7 w-7" />
                  Get My Revenue Bot Now!
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Free Consultation & Setup
                </div>
                <div className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  30-Day Money-Back Guarantee
                </div>
                <div className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  24/7 Expert Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
