
import { Scissors } from 'lucide-react';

const Services = () => {
  return (
    <div className="wood-pattern min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-barber-gold text-center">
            خدماتنا المتميزة
          </h1>
          <div className="w-20 h-1 bg-barber-gold mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto">
            نقدم في صالون السوداني الأنيق مجموعة متكاملة من خدمات الحلاقة والعناية الشخصية التي تلبي احتياجات جميع عملائنا بمختلف أعمارهم وأذواقهم.
          </p>
        </div>
      </section>

      {/* Hair Cuts Section */}
      <section className="py-12 px-4 bg-barber-dark/80">
        <div className="container mx-auto">
          <h2 className="section-title">قصات الشعر</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-barber-gold flex items-center">
                  <Scissors className="ml-2" size={20} />
                  قصات الشعر العصرية
                </h3>
                <span className="text-xl font-bold text-barber-gold">30-50 ريال</span>
              </div>
              <p>
                نواكب أحدث صيحات الموضة العالمية في مجال قصات الشعر، ونقدم مجموعة متنوعة من القصات العصرية التي تتناسب مع مختلف أشكال الوجه وأنواع الشعر.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-barber-gold flex items-center">
                  <Scissors className="ml-2" size={20} />
                  قصات الشعر الكلاسيكية
                </h3>
                <span className="text-xl font-bold text-barber-gold">30-40 ريال</span>
              </div>
              <p>
                للباحثين عن الأناقة التقليدية، نقدم أفضل القصات الكلاسيكية بلمسات عصرية تمنحكم مظهراً أنيقاً ومرتباً يناسب جميع المناسبات.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-barber-gold flex items-center">
                  <Scissors className="ml-2" size={20} />
                  قصات شعر الأطفال
                </h3>
                <span className="text-xl font-bold text-barber-gold">25-35 ريال</span>
              </div>
              <p>
                نقدم خدمات حلاقة خاصة للأطفال في أجواء مريحة وودية، مع فريق متخصص في التعامل مع الأطفال لضمان تجربة ممتعة وخالية من الإزعاج.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beard Services Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="section-title">خدمات اللحية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-barber-gold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                    <path d="M13 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4"></path>
                    <path d="M9 11.5v-1"></path>
                    <path d="M3 9.5v1"></path>
                    <path d="M6 11.5 9 9"></path>
                    <path d="m6 7.5 3 2.5"></path>
                    <path d="M9 7v3"></path>
                  </svg>
                  تشذيب وتصميم اللحية
                </h3>
                <span className="text-xl font-bold text-barber-gold">20-30 ريال</span>
              </div>
              <p>
                نقدم خدمات احترافية لتشذيب وتصميم اللحية بدقة عالية، مع مراعاة شكل الوجه وكثافة شعر اللحية لإبراز جمال ملامحكم.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-barber-gold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                    <path d="M13 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4"></path>
                    <path d="M9 11.5v-1"></path>
                    <path d="M3 9.5v1"></path>
                    <path d="M6 11.5 9 9"></path>
                    <path d="m6 7.5 3 2.5"></path>
                    <path d="M9 7v3"></path>
                  </svg>
                  حلاقة اللحية الكاملة
                </h3>
                <span className="text-xl font-bold text-barber-gold">15-20 ريال</span>
              </div>
              <p>
                لمن يفضلون الوجه الأملس، نقدم خدمة حلاقة متقنة تضمن نعومة البشرة وحمايتها من التهيج.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-barber-gold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                    <path d="M13 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4"></path>
                    <path d="M9 11.5v-1"></path>
                    <path d="M3 9.5v1"></path>
                    <path d="M6 11.5 9 9"></path>
                    <path d="m6 7.5 3 2.5"></path>
                    <path d="M9 7v3"></path>
                  </svg>
                  العناية باللحية
                </h3>
                <span className="text-xl font-bold text-barber-gold">40-60 ريال</span>
              </div>
              <p>
                خدمات متكاملة للعناية باللحية تشمل التنظيف العميق والترطيب واستخدام أفضل المنتجات والزيوت الطبيعية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Care Section */}
      <section className="py-12 px-4 bg-barber-dark/80">
        <div className="container mx-auto">
          <h2 className="section-title">خدمات العناية بالبشرة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-barber-gold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                    <circle cx="8" cy="9" r="7"></circle>
                    <path d="m15 6 6 6"></path>
                    <path d="m15 12 6-6"></path>
                    <path d="M9 16a5 5 0 0 1 5 5v0a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v0a5 5 0 0 1 5-5Z"></path>
                  </svg>
                  تنظيف البشرة
                </h3>
                <span className="text-xl font-bold text-barber-gold">40-60 ريال</span>
              </div>
              <p>
                خدمة متكاملة لتنظيف البشرة وإزالة الرؤوس السوداء وترطيب البشرة للحصول على بشرة نظيفة وصحية.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-barber-gold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-barber-gold">
                    <path d="M9 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20c1.1 0 2 .9 2 2v5"></path>
                    <circle cx="13" cy="15" r="2"></circle>
                    <path d="M18 19c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5Z"></path>
                    <path d="m18.5 12.2-.4.2c-.7.3-1.2.9-1.2 1.7 0 1 .8 1.9 1.9 1.9.3 0 .6-.1.8-.2"></path>
                  </svg>
                  الحمام المغربي
                </h3>
                <span className="text-xl font-bold text-barber-gold">120-200 ريال</span>
              </div>
              <p>
                تجربة فريدة للاسترخاء والعناية بالبشرة، متوفرة في صالوننا لتمنحكم نظافة عميقة وبشرة متجددة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="section-title">المنتجات المتوفرة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="M16 2c.97 0 1.69.81 2.8 2.4l.27.39c.34.55.67.95 1.13 1.19l.26.13c1.55.7 2.54 1.27 2.54 2.47v11.5c0 .28-.22.5-.5.5h-19A.5.5 0 0 1 3 20.08V8.58c0-1.18.97-1.74 2.38-2.39l.25-.11c.51-.24.88-.65 1.27-1.26l.21-.32C8.33 2.82 9.05 2 10 2"></path>
                  <path d="M16.5 2.5c1.5 3-3 3-3 6.5 0 2.5 2 2.5 2 5 0 .5-.5 1-1 1"></path>
                  <path d="M10.5 2.5C9 5.5 13.5 5.5 13.5 9c0 2.5-2 2.5-2 5 0 .5.5 1 1 1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">كريمات ما بعد الحلاقة</h3>
              <p>كريمات عالية الجودة للعناية بالبشرة بعد الحلاقة</p>
            </div>
            
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="M9 22h6c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2Z"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M12 12h.01"></path>
                  <path d="M12 15h.01"></path>
                  <path d="M12 18h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">منتجات العناية بالشعر</h3>
              <p>شامبو، بلسم، وزيوت طبيعية للعناية بالشعر</p>
            </div>
            
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="M13 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4"></path>
                  <path d="M9 11.5v-1"></path>
                  <path d="M3 9.5v1"></path>
                  <path d="M6 11.5 9 9"></path>
                  <path d="m6 7.5 3 2.5"></path>
                  <path d="M9 7v3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">منتجات العناية باللحية</h3>
              <p>زيوت وبلسم خاص للحية للحصول على مظهر صحي</p>
            </div>
            
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="M17 8v16m-4-8V8"></path>
                  <path d="M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">ماكينات الحلاقة</h3>
              <p>ماكينات التنعيم وماكينات المحترفين للزيرو</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-barber-wood">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-barber-gold mb-6">احجز موعدك الآن</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نسعد بتقديم خدماتنا المتميزة لكم في صالون السوداني الأنيق للحلاقة
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:0545162003" className="gold-button flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M3 21 8 16"></path>
                <path d="M9.5 15.5c1.333.8 3.044 1.406 4.5 1 1.667-.5 2.667-1.5 3-3 .5-2-1-3-3-4 2 0 3-1 3-3s-1-3-3-3.5c-1.5-.375-3 0-4 1L9.5 4"></path>
                <path d="M13 18c2.667 0 5-2.5 5.5-5 .667-3-1-6-4-7 2 0 3-1 3-3s-1-3-3-3.5c-1.5-.375-3 0-4 1L10 .5"></path>
              </svg>
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
