import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import FormModal from "@/components/form-modal";

export default function MedicationOptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" data-testid="medication-options-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        </div>
        
        <div className="max-w-lg mx-auto">
          {/* Premium GLP-1 Card */}
          <Card data-testid="card-semaglutide" className="relative border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-red-50/30 to-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-red-100/10"></div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-sema-red/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-4 w-16 h-16 bg-sema-red/10 rounded-full blur-lg"></div>
            
            <CardContent className="relative p-10">
              {/* Premium Badge */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-gradient-to-r from-sema-red to-red-600 text-white font-bold px-4 py-2 shadow-lg">
                  PREMIUM
                </Badge>
              </div>

              {/* Vial Image - Prominent Display */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-sema-red/10 to-red-100/20 rounded-3xl flex items-center justify-center shadow-xl ring-4 ring-white ring-offset-4 ring-offset-red-50">
                    <img
                      data-testid="img-semaglutide-vial"
                      src="https://gokulnair.com/aniket/aniket_logo/semavial1.png"
                      alt="Premium GLP-1 medication vial"
                      className="w-36 h-36 object-contain rounded-2xl"
                    />
                  </div>
                  {/* Floating accent dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-sema-red rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>

              {/* Title Section */}
              <div className="text-center mb-8">
                <h3 data-testid="text-semaglutide-title" className="text-3xl font-black text-gray-900 mb-3">
                  GLP-1 Medication
                </h3>
                <p className="text-base text-gray-600">Premium GLP-1 treatment for weight loss</p>
              </div>
              
              {/* Pricing Section */}
              <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-lg text-gray-500 line-through mr-3">$195</span>
                  <span data-testid="text-semaglutide-price" className="text-5xl font-black text-sema-red">$112</span>
                  <span className="text-3xl font-bold text-gray-700">.49</span>
                  <span className="text-xl text-gray-600 ml-2">/month</span>
                </div>
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                  All Dosages • Same Price
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 gap-4 mb-10">
                <div className="flex items-center bg-white/60 rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">100% discreet, online consultation</span>
                </div>
                <div className="flex items-center bg-white/60 rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">U.S. board certified physicians</span>
                </div>
                <div className="flex items-center bg-white/60 rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">Trusted medications, money back guarantee</span>
                </div>
                <div className="flex items-center bg-white/60 rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">Affordable pricing, no insurance required</span>
                </div>
                <div className="flex items-center bg-white/60 rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">Fast shipping</span>
                </div>

              </div>

              {/* CTA Button */}
              <Button
                data-testid="button-semaglutide-start"
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-sema-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black text-lg py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                START MY FREE VISIT →
              </Button>
            </CardContent>
          </Card>


        </div>
      </div>
      
      {/* Form Modal */}
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
