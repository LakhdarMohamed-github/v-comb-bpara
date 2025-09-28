import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import solutionImage from '../assets/WhatsAppImage2025-09-28at16.46.52(1).jpeg';

const Solution = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-100 rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 text-yellow-500 mr-2 ml-2" />
            <span className="text-yellow-700 font-semibold">ومنا كيجي الحل 👇</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-green-100 rounded-lg p-6 mb-6">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                جهاز V-Comb الأصلي هو
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                الحل الطبي المضمون والوحيد اللي كيشفط القمل ويبيضو مباشرة بلا مواد كيماوية، آمن للأطفال والكبار، وسهل الاستعمال فالدار
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">آمن ومعتمد بشهادات جودة عالمية</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">يعمل بتقنية الشفط المتطورة</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">بدون مواد كيميائية ضارة</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">سهل الاستعمال في المنزل</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src={solutionImage} 
                alt="أم تستخدم جهاز V-Comb مع طفلتها" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-lg p-4">
                <p className="font-bold text-lg">الحل بين يديك</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              شهادات الجودة والأمان
            </h3>
            <p className="text-gray-600 mb-6">
              جهاز V-Comb حاصل على شهادات جودة عالمية ومعتمد من قبل الخبراء
            </p>
            <div className="flex justify-center">
              <div className="bg-green-100 rounded-full p-4">
                <div className="text-green-600 font-bold text-lg">CERTIFIED</div>
                <div className="text-green-600 text-sm">QUALITY ASSURED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

