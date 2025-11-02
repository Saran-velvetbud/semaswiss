import { Shield, Truck, UserCheck } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "Free Confidential Online Consultation",
      description: "",
      testId: "indicator-consultation"
    },
    {
      icon: UserCheck,
      title: "Board-certified Physicians, trusted medications",
      description: "",
      testId: "indicator-physicians"
    },
    {
      icon: Truck,
      title: "Fast, free shipping",
      description: "",
      testId: "indicator-shipping"
    }
  ];

  return (
    <section data-testid="trust-indicators-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} data-testid={indicator.testId} className="text-center">
                <div className="w-16 h-16 bg-medical-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-medical-blue w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-gray-600 text-sm">{indicator.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
