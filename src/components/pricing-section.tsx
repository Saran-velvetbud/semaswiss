import { useState } from 'react';
import FormModal from "@/components/form-modal";

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A More Affordable
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8">
            Option to Better Health
          </h3>
        </div>

        {/* Enhanced Semaglutide Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-100 hover:shadow-3xl transition-all duration-500 group">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Semaglutide</h3>
              <p className="text-xl text-gray-600 mb-2">
                <span className="text-5xl font-bold text-sema-red">$112</span>
                <span className="text-gray-500 text-lg">/month</span>
              </p>

            </div>

            {/* Prominent Vial Image - EXTRA LARGE */}
            <div className="mb-8 flex justify-center relative">
              {/* Multiple layered glow effects for maximum impact */}
              <div className="absolute inset-0 bg-gradient-to-br from-sema-red/20 to-red-600/20 rounded-full blur-3xl w-80 h-80 mx-auto -translate-y-8"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-blue-100/40 rounded-full blur-2xl w-64 h-64 mx-auto -translate-y-4"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-sema-red/15 to-transparent rounded-full blur-xl w-56 h-56 mx-auto"></div>
              
              <img 
                src="https://gokulnair.com/aniket/aniket_logo/semavial1.png" 
                alt="Semaglutide vial"
                className="relative w-64 h-80 object-contain drop-shadow-2xl brightness-110 contrast-110 filter group-hover:scale-110 transition-transform duration-700"
                data-testid="img-semaglutide-vial"
              />
              
              {/* Floating accent elements around vial */}
              <div className="absolute top-8 -left-8 w-4 h-4 bg-sema-red/60 rounded-full animate-pulse"></div>
              <div className="absolute -top-4 right-12 w-3 h-3 bg-blue-500/50 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-16 -right-6 w-5 h-5 bg-sema-red/40 rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-32 -left-4 w-2 h-2 bg-white/70 rounded-full animate-ping delay-500"></div>
            </div>

            {/* Benefits */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-center text-green-600 bg-green-50 rounded-lg py-2 px-4">
                <span className="text-green-500 text-lg mr-3">✓</span>
                <span className="text-sm font-medium">100% discreet, online consultation</span>
              </div>
              <div className="flex items-center justify-center text-green-600 bg-green-50 rounded-lg py-2 px-4">
                <span className="text-green-500 text-lg mr-3">✓</span>
                <span className="text-sm font-medium">U.S. board certified physicians</span>
              </div>
              <div className="flex items-center justify-center text-green-600 bg-green-50 rounded-lg py-2 px-4">
                <span className="text-green-500 text-lg mr-3">✓</span>
                <span className="text-sm font-medium">Trusted medications, money back guarantee</span>
              </div>
              <div className="flex items-center justify-center text-green-600 bg-green-50 rounded-lg py-2 px-4">
                <span className="text-green-500 text-lg mr-3">✓</span>
                <span className="text-sm font-medium">Affordable pricing, no insurance required</span>
              </div>
              <div className="flex items-center justify-center text-green-600 bg-green-50 rounded-lg py-2 px-4">
                <span className="text-green-500 text-lg mr-3">✓</span>
                <span className="text-sm font-medium">Fast shipping</span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              className="w-full bg-sema-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              data-testid="button-start-visit"
              onClick={() => setIsModalOpen(true)}
            >
              START MY FREE VISIT →
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            *Results may vary. Individual results based on clinical studies. 
            Consult with healthcare provider for personalized treatment options.
          </p>
        </div>
      </div>
      
      {/* Form Modal */}
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}