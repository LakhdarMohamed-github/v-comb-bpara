import React from 'react';
import { CheckCircle, Shield, Zap, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "فعالية فورية",
      description: "يقضي على القمل والصيبان من أول استعمال"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "آمن تماماً",
      description: "بدون مواد كيميائية ضارة، آمن للأطفال"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "سهل الاستعمال",
      description: "تصميم عملي ومريح للاستخدام اليومي"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
      title: "نتائج مضمونة",
      description: "حل نهائي ومضمون لمشكلة القمل"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            لماذا جهاز V-Comb هو الحل الأمثل؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            جهاز V-Comb الأصلي يوفر حلاً فعالاً وآمناً لمشكلة القمل والصيبان
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

