import fitnessImage from "@assets/57372_1756139897227.jpg";
import { Button } from "@/components/ui/button";

export default function WellnessSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Transform Your Life
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Beyond weight loss - experience increased energy, confidence, and a healthier relationship with fitness.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-sema-red rounded-full"></div>
                <span className="text-gray-700">Enhanced energy levels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-sema-red rounded-full"></div>
                <span className="text-gray-700">Improved fitness capacity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-sema-red rounded-full"></div>
                <span className="text-gray-700">Greater self-confidence</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                data-testid="button-start-transformation"
                onClick={scrollToContact}
                className="bg-sema-red hover:bg-red-600 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Now →
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={fitnessImage}
              alt="Confident woman with kettlebell showcasing fitness transformation"
              className="w-full h-auto rounded-2xl shadow-2xl"
              data-testid="img-wellness-transformation"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sema-red/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}