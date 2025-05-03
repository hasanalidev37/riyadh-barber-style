
import { Scissors, Users, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="wood-pattern min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-barber-dark/90 to-barber-dark/70 z-0"></div>
        <div className="container mx-auto relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-barber-gold">
            صالون السوداني الأنيق للحلاقة
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            نرحب بكم في صالون السوداني الأنيق للحلاقة الرجالية والأطفال، وجهتكم المثالية للحصول على أفضل خدمات الحلاقة والعناية الشخصية في الرياض.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/services" className="gold-button">
              استكشف خدماتنا
            </Link>
            <a href="tel:0545162003" className="bg-transparent hover:bg-barber-gold/10 border-2 border-barber-gold text-barber-gold font-bold py-3 px-6 rounded-md transition-all duration-300">
              اتصل بنا
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-barber-dark">
        <div className="container mx-auto">
          <h2 className="section-title text-center mx-auto">لماذا تختارنا؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="text-barber-gold" size={32} />
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">خدمة احترافية</h3>
              <p>فريق متخصص من الحلاقين ذوي الخبرة العالية والمهارات المتميزة</p>
            </div>
            
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="M7 19h10"></path>
                  <path d="M11 19v-3.4a1.5 1.5 0 0 0-3 0V19"></path>
                  <path d="M16 19v-3.4a1.5 1.5 0 0 0-3 0V19"></path>
                  <rect width="18" height="12" x="3" y="3" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">بيئة نظيفة</h3>
              <p>نهتم بالنظافة والتعقيم لكافة الأدوات والمعدات</p>
            </div>
            
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-barber-gold" size={32} />
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">تعامل راقي</h3>
              <p>نقدم تجربة متكاملة تشمل الاستقبال الحار والخدمة المتميزة</p>
            </div>
            
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-barber-gold" size={32} />
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">تقييمات عالية</h3>
              <p>نفتخر بتقييمنا المميز 4.9 من 5 بناءً على أكثر من 71 تقييم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="section-title text-center mx-auto">خدماتنا المميزة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="service-card">
              <h3 className="text-xl font-bold text-barber-gold mb-3 flex items-center">
                <Scissors className="ml-2" size={20} />
                حلاقة الشعر
              </h3>
              <p className="mb-4">قصات عصرية وكلاسيكية تناسب جميع الأذواق</p>
              <div className="flex justify-between items-center border-t border-barber-gold/20 pt-4">
                <span className="text-barber-gold font-bold">تبدأ من</span>
                <span className="text-2xl font-bold text-barber-gold">30 ريال</span>
              </div>
            </div>
            
            <div className="service-card">
              <h3 className="text-xl font-bold text-barber-gold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                  <path d="M13 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4"></path>
                  <path d="M9 11.5v-1"></path>
                  <path d="M3 9.5v1"></path>
                  <path d="M6 11.5 9 9"></path>
                  <path d="m6 7.5 3 2.5"></path>
                  <path d="M9 7v3"></path>
                </svg>
                تشذيب اللحية
              </h3>
              <p className="mb-4">عناية فائقة وتصميم احترافي للحية</p>
              <div className="flex justify-between items-center border-t border-barber-gold/20 pt-4">
                <span className="text-barber-gold font-bold">تبدأ من</span>
                <span className="text-2xl font-bold text-barber-gold">20 ريال</span>
              </div>
            </div>
            
            <div className="service-card">
              <h3 className="text-xl font-bold text-barber-gold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                  <path d="M9 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  <path d="M4.5 21v-2a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  <path d="M21 21v-2a4 4 0 0 0-3-3.85"></path>
                </svg>
                حلاقة للأطفال
              </h3>
              <p className="mb-4">خدمات خاصة ومناسبة للأطفال في أجواء مريحة</p>
              <div className="flex justify-between items-center border-t border-barber-gold/20 pt-4">
                <span className="text-barber-gold font-bold">تبدأ من</span>
                <span className="text-2xl font-bold text-barber-gold">25 ريال</span>
              </div>
            </div>
            
            <div className="service-card">
              <h3 className="text-xl font-bold text-barber-gold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                  <circle cx="8" cy="9" r="7"></circle>
                  <path d="m15 6 6 6"></path>
                  <path d="m15 12 6-6"></path>
                  <path d="M9 16a5 5 0 0 1 5 5v0a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v0a5 5 0 0 1 5-5Z"></path>
                </svg>
                خدمات العناية بالبشرة
              </h3>
              <p className="mb-4">تنظيف البشرة وإزالة الرؤوس السوداء</p>
              <div className="flex justify-between items-center border-t border-barber-gold/20 pt-4">
                <span className="text-barber-gold font-bold">تبدأ من</span>
                <span className="text-2xl font-bold text-barber-gold">40 ريال</span>
              </div>
            </div>
            
            <div className="service-card">
              <h3 className="text-xl font-bold text-barber-gold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                  <path d="M9 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20c1.1 0 2 .9 2 2v5"></path>
                  <circle cx="13" cy="15" r="2"></circle>
                  <path d="M18 19c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5Z"></path>
                  <path d="m18.5 12.2-.4.2c-.7.3-1.2.9-1.2 1.7 0 1 .8 1.9 1.9 1.9.3 0 .6-.1.8-.2"></path>
                </svg>
                الحمام المغربي
              </h3>
              <p className="mb-4">تجربة مميزة للاسترخاء والعناية بالبشرة</p>
              <div className="flex justify-between items-center border-t border-barber-gold/20 pt-4">
                <span className="text-barber-gold font-bold">تبدأ من</span>
                <span className="text-2xl font-bold text-barber-gold">120 ريال</span>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 lg:col-span-1 flex justify-center items-center">
              <Link to="/services" className="gold-button flex items-center justify-center w-full">
                كل الخدمات
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-barber-wood">
        <div className="container mx-auto text-center">
          <h2 className="section-title text-center mx-auto">احجز موعدك الآن</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نسعد بزيارتكم وتجربة خدماتنا المميزة في صالون السوداني الأنيق للحلاقة
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:0545162003" className="gold-button flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              اتصل بنا: 0545162003
            </a>
            <a 
              href="https://wa.me/00966530640121" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M3 21 8 16"></path>
                <path d="M9.5 15.5c1.333.8 3.044 1.406 4.5 1 1.667-.5 2.667-1.5 3-3 .5-2-1-3-3-4 2 0 3-1 3-3s-1-3-3-3.5c-1.5-.375-3 0-4 1L9.5 4"></path>
                <path d="M13 18c2.667 0 5-2.5 5.5-5 .667-3-1-6-4-7 2 0 3-1 3-3s-1-3-3-3.5c-1.5-.375-3 0-4 1L10 .5"></path>
              </svg>
              واتساب: 00966530640121
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
