
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, ArrowRight, Clock, Users, Zap, DollarSign, Target } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923255007150", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:support@botlo.xyz", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-botlo-neutral-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-botlo-primary/10 to-botlo-secondary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-botlo-primary/20 to-botlo-secondary/20 border border-botlo-primary/30 rounded-full text-botlo-primary text-sm font-bold mb-8 glass">
            <Target className="w-5 h-5 mr-2" />
            Your Success Starts Here
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="marketing-text">Ready to</span><br />
            <span className="text-botlo-neutral-800">Make More Money?</span>
          </h2>
          <p className="text-xl text-botlo-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Don't let another customer slip away! Get your <span className="font-bold text-botlo-primary">FREE consultation</span> now and 
            see how Botlo can <span className="font-bold text-botlo-secondary">double your revenue</span> in just 30 days. 
            <span className="font-bold text-botlo-accent">Limited spots available!</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp Contact */}
            <div className="group bg-gradient-to-br from-green-50 via-botlo-primary/5 to-green-50 p-10 rounded-3xl border-2 border-botlo-primary/20 animate-slide-up hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              {/* Background effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-botlo-primary/20 to-botlo-secondary/20 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500 blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-botlo-primary to-botlo-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-black text-botlo-neutral-800 group-hover:text-botlo-primary transition-colors duration-300">WhatsApp</h3>
                    <p className="text-botlo-neutral-600 flex items-center font-semibold">
                      <Zap className="w-5 h-5 mr-2 text-botlo-primary" />
                      Instant Money-Making Consultation
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-botlo-neutral-700">
                    <span className="text-green-500 mr-3 text-lg">✓</span>
                    <span className="font-semibold">Get your first bot setup in 5 minutes</span>
                  </div>
                  <div className="flex items-center text-botlo-neutral-700">
                    <span className="text-green-500 mr-3 text-lg">✓</span>
                    <span className="font-semibold">See live demo of money-making bots</span>
                  </div>
                  <div className="flex items-center text-botlo-neutral-700">
                    <span className="text-green-500 mr-3 text-lg">✓</span>
                    <span className="font-semibold">FREE revenue calculation for your business</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full cta-button bg-gradient-to-r from-botlo-primary to-botlo-secondary hover:from-botlo-primary-dark hover:to-botlo-secondary-dark text-white font-black py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow"
                >
                  <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Call Now: 0325-5007150
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-center text-sm text-botlo-neutral-600 mt-4 font-medium">
                  🔥 <span className="text-botlo-primary font-bold">FREE Setup Worth ₨50,000!</span> Limited Time Only
                </p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="group bg-gradient-to-br from-botlo-neutral-50 via-white to-botlo-neutral-50 p-10 rounded-3xl border-2 border-botlo-neutral-200 animate-slide-up hover:shadow-2xl transition-all duration-500 relative overflow-hidden" style={{ animationDelay: "0.1s" }}>
              {/* Background effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-botlo-neutral-200/50 to-botlo-neutral-300/50 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500 blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-botlo-neutral-700 to-botlo-neutral-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-black text-botlo-neutral-800 group-hover:text-botlo-secondary transition-colors duration-300">Email</h3>
                    <p className="text-botlo-neutral-600 flex items-center font-semibold">
                      <Users className="w-5 h-5 mr-2 text-botlo-secondary" />
                      Detailed Business Analysis
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-botlo-neutral-700">
                    <span className="text-botlo-secondary mr-3 text-lg">✓</span>
                    <span className="font-semibold">Custom revenue projection report</span>
                  </div>
                  <div className="flex items-center text-botlo-neutral-700">
                    <span className="text-botlo-secondary mr-3 text-lg">✓</span>
                    <span className="font-semibold">Detailed implementation roadmap</span>
                  </div>
                  <div className="flex items-center text-botlo-neutral-700">
                    <span className="text-botlo-secondary mr-3 text-lg">✓</span>
                    <span className="font-semibold">Competitor analysis & strategy</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleEmailClick}
                  variant="outline"
                  className="w-full border-2 border-botlo-neutral-700 text-botlo-neutral-700 hover:bg-botlo-neutral-700 hover:text-white font-black py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  support@botlo.xyz
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-center text-sm text-botlo-neutral-600 mt-4 font-medium">
                  📊 <span className="text-botlo-secondary font-bold">FREE Business Audit!</span> Response within 2 hours
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center bg-gradient-to-r from-botlo-neutral-900 via-botlo-neutral-800 to-botlo-neutral-900 p-12 md:p-20 rounded-3xl text-white animate-fade-in shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-botlo-primary/20 rounded-full transform -translate-x-32 -translate-y-32 blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-botlo-secondary/20 rounded-full transform translate-x-32 translate-y-32 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-sm font-bold animate-pulse">
                  <Clock className="w-5 h-5 mr-2" />
                  ⚠️ LIMITED TIME OFFER - ACT NOW!
                </div>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-botlo-primary via-botlo-secondary to-botlo-accent bg-clip-text text-transparent">
                  Last Chance to Get Ahead!
                </span>
              </h3>
              <p className="text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
                Your competitors are already using AI chatbots to steal your customers RIGHT NOW! 
                <br /><span className="text-botlo-primary font-black">Don't be the last one to join the revolution!</span>
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
                <h4 className="text-2xl font-black mb-4 text-botlo-primary">🎯 What You Get Today:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <DollarSign className="w-6 h-6 mr-3 text-green-400" />
                    <span className="font-semibold">FREE Bot Setup (Worth ₨50,000)</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-6 h-6 mr-3 text-blue-400" />
                    <span className="font-semibold">Revenue Analysis Report</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                    <span className="font-semibold">30-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-3 text-purple-400" />
                    <span className="font-semibold">24/7 VIP Support Access</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="cta-button bg-gradient-to-r from-botlo-primary to-botlo-secondary hover:from-botlo-primary-dark hover:to-botlo-secondary-dark text-white px-16 py-8 text-2xl font-black rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-glow"
                >
                  <MessageCircle className="mr-4 h-8 w-8" />
                  Claim My FREE Bot Now!
                  <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
              </div>
              
              <p className="text-lg opacity-80 mb-6">
                ⏰ <span className="font-bold text-red-400">Only 5 spots left this month!</span> Don't miss out on this game-changing opportunity.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span className="bg-green-500/20 px-6 py-3 rounded-full backdrop-blur-sm border border-green-500/30">
                  ✓ No Hidden Costs
                </span>
                <span className="bg-blue-500/20 px-6 py-3 rounded-full backdrop-blur-sm border border-blue-500/30">
                  ✓ Setup in 5 Minutes
                </span>
                <span className="bg-purple-500/20 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-500/30">
                  ✓ ROI Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
