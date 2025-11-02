import { Frown, Heart, HelpCircle, Activity, Brain, Scale, Bed, Coffee } from 'lucide-react';

export default function WeightStrugglesSection() {
  const struggles = [
    { text: "Persistent fatigue", icon: Coffee },
    { text: "Low mood/anxiety", icon: Brain },
    { text: "Emotional stress", icon: Heart },
    { text: "Difficulty with weight regulation", icon: Scale },
    { text: "Increased appetite", icon: HelpCircle },
    { text: "Low self-esteem", icon: Frown },
    { text: "Compromised mobility", icon: Activity },
    { text: "Sleep disturbances", icon: Bed },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-sema-red to-red-500 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Weight struggles can take away life's simple pleasures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {struggles.map((struggle, index) => {
              const IconComponent = struggle.icon;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-medium">{struggle.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}