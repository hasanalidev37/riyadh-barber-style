
import { Facebook, Instagram, MapPin, Phone, Clock, SnapChat, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-barber-dark border-t border-barber-gold/20 text-barber-light pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-barber-gold mb-4">معلومات الاتصال</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="text-barber-gold mt-1 flex-shrink-0" size={20} />
                <p>شارع غبيرة العام، بجانب إشارة الفرزدق، عمارة الراجحي، بالقرب من شارع عمار بن ياسر، الرياض، المملكة العربية السعودية</p>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="text-barber-gold flex-shrink-0" size={20} />
                <p>هاتف: <a href="tel:0545162003" className="hover:text-barber-gold transition-colors">0545162003</a></p>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MessageSquare className="text-barber-gold flex-shrink-0" size={20} />
                <p>واتساب: <a href="https://wa.me/00966530640121" className="hover:text-barber-gold transition-colors">00966530640121</a></p>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="text-barber-gold flex-shrink-0" size={20} />
                <a href="https://maps.app.goo.gl/43rafdhCiehkz16QA" target="_blank" rel="noopener noreferrer" className="hover:text-barber-gold transition-colors">
                  شاهد موقعنا على خرائط Google
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold text-barber-gold mb-4">ساعات العمل</h3>
            <div className="flex items-start space-x-3 space-x-reverse">
              <Clock className="text-barber-gold mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="mb-2">نفتح أبوابنا لخدمتكم يومياً:</p>
                <p className="font-bold">من الأحد إلى السبت: 12 ظهراً - 2 صباحاً</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-barber-gold mb-4">تابعونا على وسائل التواصل الاجتماعي</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.instagram.com/elegantsudanesbarber/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse hover:text-barber-gold transition-colors"
              >
                <Instagram className="text-barber-gold" size={20} />
                <span>@elegantsudanesbarber</span>
              </a>
              <a
                href="https://www.tiktok.com/@barberelgant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse hover:text-barber-gold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
                <span>@barberelgant</span>
              </a>
              <a
                href="https://www.snapchat.com/add/elegantsudanese"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse hover:text-barber-gold transition-colors"
              >
                <SnapChat className="text-barber-gold" size={20} />
                <span>elegantsudanese</span>
              </a>
              <a
                href="https://www.facebook.com/61559650486448"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse hover:text-barber-gold transition-colors"
              >
                <Facebook className="text-barber-gold" size={20} />
                <span>حلاق السوداني الأنيق</span>
              </a>
              <a
                href="https://www.threads.net/@elegantsudanesbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse hover:text-barber-gold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="M12 2c-2.8 0-5 2.2-5 5v7c0 2.8 2.2 5 5 5s5-2.2 5-5V7c0-2.8-2.2-5-5-5Z"></path>
                  <path d="M12 22c-4 0-7-1.6-9-4"></path>
                </svg>
                <span>@elegantsudanesbarber</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-barber-gold/20 my-8"></div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="/" className="hover:text-barber-gold transition-colors">الرئيسية</Link>
          <Link to="/about" className="hover:text-barber-gold transition-colors">عن الصالون</Link>
          <Link to="/services" className="hover:text-barber-gold transition-colors">خدماتنا</Link>
          <Link to="/gallery" className="hover:text-barber-gold transition-colors">معرض الأعمال</Link>
          <Link to="/faq" className="hover:text-barber-gold transition-colors">الأسئلة الشائعة</Link>
          <Link to="/reviews" className="hover:text-barber-gold transition-colors">التقييمات</Link>
        </div>

        {/* Copyright */}
        <div className="text-center pb-6">
          <p>&copy; {new Date().getFullYear()} صالون حلاق السوداني الأنيق. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
