import { Scale, Trophy, Ruler, Truck } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function StatisticsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 22% Weight Loss */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8 border-2 border-gray-200">
            <div className="flex items-center mb-4">
              <Scale className="w-8 h-8 text-gray-800 mr-2" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">22%</h3>
            <p className="text-lg text-gray-700 font-medium">
              Lose up to 22% of your body weight**
            </p>
          </div>

          {/* 6X More Effective */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 border-2 border-gray-200">
            <div className="flex items-center mb-4">
              <Trophy className="w-8 h-8 text-gray-800 mr-2" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">6X More</h3>
            <p className="text-lg text-gray-700 font-medium">
              weight loss compared to diet and exercise alone
            </p>
          </div>

          {/* 6.9% Waist-to-Height Ratio */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 border-2 border-gray-200">
            <div className="flex items-center mb-4">
              <Ruler className="w-8 h-8 text-gray-800 mr-2" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">6.9%</h3>
            <p className="text-lg text-gray-700 font-medium">
              Average reduction in waist-to-height ratio, a critical indicator of body fat.**
            </p>
          </div>

          {/* 48 Hours Shipping */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8 border-2 border-gray-200">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-gray-800 mr-2" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">48 Hours</h3>
            <p className="text-lg text-gray-700 font-medium">
              If approved, medication will ship within 48 hours
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            data-testid="button-start-proven-results"
            onClick={scrollToContact}
            className="bg-sema-red hover:bg-red-600 text-white text-xl font-bold px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Now →
          </Button>
          <p className="text-gray-600 mt-4 text-lg">Join thousands who've achieved proven results</p>
        </div>


      </div>
    </section>
  );
}