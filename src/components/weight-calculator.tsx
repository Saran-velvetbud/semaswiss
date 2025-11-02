import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function WeightCalculator() {
  const [weight, setWeight] = useState([305]);
  const [potentialLoss, setPotentialLoss] = useState(67);

  useEffect(() => {
    const currentWeight = weight[0];
    const calculatedLoss = Math.round(currentWeight * 0.22);
    setPotentialLoss(calculatedLoss);
  }, [weight]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section data-testid="weight-calculator-section" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        </div>

      </div>
    </section>
  );
}
