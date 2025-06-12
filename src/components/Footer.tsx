
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-botlo-black via-gray-900 to-botlo-black py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-botlo-green to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-4xl font-black text-white mb-3 bg-gradient-to-r from-white via-botlo-green to-white bg-clip-text text-transparent">
              Botlo
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Chatbots jo na sote hain, na thakte hain — 24/7 aapke clients ke saath!
            </p>
          </div>
          
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Botlo. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="hover:text-botlo-green transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-botlo-green transition-colors cursor-pointer">Terms of Service</span>
                <span className="hover:text-botlo-green transition-colors cursor-pointer">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
