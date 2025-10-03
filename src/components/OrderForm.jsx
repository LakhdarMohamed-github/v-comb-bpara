import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Gift, Truck, CreditCard, Package, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../emailjs-config';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const templateParams = {
        to_name: 'B Para',
        from_name: formData.fullName,
        phone: formData.phone,
        city: formData.city,
        product: 'جهاز V-Comb لمكافحة القمل',
        price: '179 درهم',
        message: `طلب جديد من ${formData.fullName} - الهاتف: ${formData.phone} - المدينة: ${formData.city}`
      };

      await emailjs.send(
        emailjsConfig.serviceId, 
        emailjsConfig.templateId, 
        templateParams, 
        emailjsConfig.publicKey
      );
      
      setSubmitMessage('تم إرسال طلبك بنجاح! سنتصل بك قريباً لتأكيد الطلب.');
      setFormData({ fullName: '', phone: '', city: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

   const benefits = [
    { icon: <CreditCard className="w-5 h-5" />, text: "الدفع عند الاستلام" },
    { icon: <Package className="w-5 h-5" />, text: "ضمان الجودة" },
    { icon: <Clock className="w-5 h-5" />, text: "خدمة 24/7" }
  ];

  return (
    <section id="order-form" className="py-16 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-yellow-400 text-black inline-block rounded-full px-6 py-2 mb-4">
              <span className="font-bold">استفد من العرض الخيالي قبل فوات الأوان</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              سارع بملء الاستمارة وأرسل طلبك
            </h2>
            <div className="flex items-center justify-center space-x-4 space-x-reverse">
              <span className="text-4xl font-bold text-yellow-300">179 د.م</span>
              <span className="text-2xl line-through text-red-300">299 د.م</span>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              معلومات الزبون
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="الإسم الكامل"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 text-right text-gray-900"
                  dir="rtl"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 text-right text-gray-900"
                  dir="rtl"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="city"
                  placeholder="المدينة"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 text-right text-gray-900"
                  dir="rtl"
                />
              </div>
              
              <p className="text-sm text-gray-600 text-center">
                سنتصل بك من أجل تأكيد طلبيتك وتزويدك بالمعلومات الكاملة
              </p>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>
                  {isSubmitting ? 'جاري الإرسال...' : 'اضغط هنا لإرسال الطلب'}
                </span>
              </Button>
            </form>
            
            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg text-center ${
                submitMessage.includes('بنجاح') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {submitMessage}
              </div>
            )}
          </div>

          {/* Benefits (now only 3) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  {benefit.icon}
                </div>
                <p className="text-sm font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-green-500 hover:bg-green-600 inline-block rounded-lg px-8 py-4 transition-colors duration-300">
              <a href="#order-form" className="text-white font-bold text-xl flex items-center space-x-2 space-x-reverse">
                <Gift className="w-6 h-6" />
                <span>أطلب الآن قبل نفاذ الكمية</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;