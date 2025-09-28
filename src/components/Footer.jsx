import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">B Para</h3>
            <p className="text-gray-300 mb-4">
              متخصصون في توفير أفضل الحلول الطبية والصحية للعائلة العربية
            </p>
            <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>المغرب - الدار البيضاء</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+212 6XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
                <Mail className="w-5 h-5" />
                <span>info@bpara.ma</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
                <Clock className="w-5 h-5" />
                <span>24/7 خدمة العملاء</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• التوصيل المجاني</li>
              <li>• الدفع عند الاستلام</li>
              <li>• ضمان الجودة</li>
              <li>• خدمة ما بعد البيع</li>
            </ul>
          </div>
          
          {/* Product Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">جهاز V-Comb</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• منتج أصلي ومعتمد</li>
              <li>• آمن للأطفال</li>
              <li>• فعال 100%</li>
              <li>• سهل الاستعمال</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 B Para. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              جهاز V-Comb الأصلي - الحل النهائي للقمل والصيبان
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

