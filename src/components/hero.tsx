import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Shield, UserCheck } from "lucide-react";
import FormModal from "@/components/form-modal";
import heroImage from "@assets/111395_1756226348984.jpg";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section data-testid="hero-section" className="bg-sema-red min-h-screen flex items-center py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left side - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 data-testid="text-hero-heading" className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">
                YOUR WEIGHT<br />
                LOSS JOURNEY<br />
                <span className="bg-white text-sema-red px-6 py-2 italic font-medium text-3xl lg:text-4xl xl:text-5xl">
                  starts here
                </span>
              </h1>
              
              <p data-testid="text-hero-description" className="text-white text-lg lg:text-xl leading-relaxed max-w-2xl font-medium">
                Premium GLP Treatments—Delivered to Your Door at the Lowest Price in the Industry.
              </p>
            </div>

            {/* CTA Button with HIPAA badge */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <Button 
                data-testid="button-start-free-visit"
                onClick={() => setIsModalOpen(true)}
                className="bg-white hover:bg-gray-100 text-sema-red text-lg lg:text-xl font-bold px-8 lg:px-12 py-4 lg:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                START MY FREE VISIT →
              </Button>
              
              {/* HIPAA Badge */}
              <div className="flex items-center space-x-3">
                <img 
                  src="https://cdn.prod.website-files.com/668d55c8f0b55e9fc41fd2b8/66e199a84286f36ab38f6208_Hippa%20blue.svg" 
                  alt="HIPAA Compliant"
                  className="w-16 h-12 object-contain"
                  data-testid="img-hipaa-logo"
                />
              </div>
            </div>
          </div>

          {/* Right side - Person Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Happy couple running together */}
              <img
                src={heroImage}
                alt="Happy couple running together showing active healthy lifestyle"
                className="w-80 h-96 lg:w-96 lg:h-[480px] xl:w-[420px] xl:h-[520px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                data-testid="img-hero-person"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-white/40 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-white/25 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Modal */}
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
