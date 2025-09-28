import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      title: "والدك كيتشكاو من الحكة المستمرة؟",
      description: "القمل يسبب حكة شديدة وإزعاج مستمر للأطفال"
    },
    {
      title: "القمل كينتقل بسرعة بين الإخوة والأخوات؟",
      description: "انتشار سريع في المنزل والمدرسة"
    },
    {
      title: "جربتي بزاف ديال الخلطات والمواد الكيماوية وما جات حتى نتيجة؟",
      description: "الطرق التقليدية غير فعالة ومضرة أحياناً"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            هاد المشاكل ماشي غير مزعجة... بل كتأثر على راحة والدك وصحتهم وحتى على التركيز ديالهم فالمدرسة
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-lg text-red-700 font-semibold">
            هاد المشاكل ماشي غير مزعجة... بل كتأثر على راحة والدك وصحتهم وحتى على التركيز ديالهم فالمدرسة
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;

