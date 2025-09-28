import React from 'react';
import productBox from '../assets/licetec-v-comb-anti-lice-and-nits-device_1_1.jpg';
import productDevice from '../assets/enadditional_images_s101036088.jpg';
import childWithDevice from '../assets/WhatsAppImage2025-09-28at16.46.51.jpeg';
import familyUsage from '../assets/WhatsAppImage2025-09-28at16.46.52.jpeg';

const ProductGallery = () => {
  const images = [
    {
      src: productBox,
      alt: "علبة جهاز V-Comb الأصلي",
      title: "المنتج الأصلي"
    },
    {
      src: productDevice,
      alt: "جهاز V-Comb لمكافحة القمل",
      title: "التصميم المتطور"
    },
    {
      src: childWithDevice,
      alt: "طفلة تستخدم جهاز V-Comb",
      title: "سهل الاستعمال"
    },
    {
      src: familyUsage,
      alt: "استخدام عائلي لجهاز V-Comb",
      title: "آمن للعائلة"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            صور المنتج
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            شاهد جهاز V-Comb الأصلي وكيفية استخدامه بأمان وفعالية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              جهاز V-Comb الأصلي من B Para
            </h3>
            <p className="text-gray-600 leading-relaxed">
              نضمن لك الحصول على المنتج الأصلي بأعلى معايير الجودة. 
              جميع الصور تُظهر المنتج الحقيقي الذي ستحصل عليه عند الطلب.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;

