import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "شهادة الجودة العالمية",
      description: "معتمد من المنظمات الدولية"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "شهادة الأمان",
      description: "آمن للاستخدام على الأطفال"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-500" />,
      title: "شهادة الفعالية",
      description: "مثبت علمياً وطبياً"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            شهادات الجودة والاعتماد
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            جهاز V-Comb حاصل على شهادات جودة وأمان من أهم المنظمات العالمية
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2 ml-2" />
              <span className="text-green-700 font-semibold text-lg">منتج أصلي ومضمون</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ضمان الجودة من B Para
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نحن في B Para نضمن لك الحصول على المنتج الأصلي بأعلى معايير الجودة. 
              جهاز V-Comb الذي نقدمه معتمد ومرخص وحاصل على جميع الشهادات المطلوبة للاستخدام الآمن.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

