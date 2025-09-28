import React from 'react';
import heroImage from '../assets/WhatsAppImage2025-09-28at16.46.51(1).jpeg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-400 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            وداعاً للقمل والصيبان نهائياً مع جهاز
            <br />
            <span className="text-yellow-300">V-Comb الأصلي</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-semibold">يقضي على القمل وبيضه من أول استعمال</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-semibold">تصميم عملي وسهل الاستعمال</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-semibold">آمن على فروة الرأس والشعر</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="طفلة سعيدة تحمل جهاز V-Comb" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full p-3">
                <span className="text-sm font-bold">Premium QUALITY</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              القمل والصيبان كابوس على راحة والدك وصحتهم 😟
            </h2>
            <p className="text-lg">
              وجود جهاز V-Comb هدارك غادي يريحك من هاد الكابوس نهائياً 👍
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

