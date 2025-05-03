
import { Award, Users, Clock, Check } from 'lucide-react';

const About = () => {
  return (
    <div className="wood-pattern min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-barber-gold text-center">
            نبذة عن صالون السوداني الأنيق
          </h1>
          <div className="w-20 h-1 bg-barber-gold mx-auto mb-8"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 px-4 bg-barber-dark/80">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-title">قصة صالون السوداني الأنيق</h2>
              <p className="mb-6">
                تأسس صالون السوداني الأنيق للحلاقة لتقديم تجربة حلاقة متميزة تجمع بين الاحترافية والراحة. يضم صالوننا نخبة من الحلاقين السودانيين المحترفين الذين يتمتعون بخبرة واسعة في مجال الحلاقة والعناية الشخصية.
              </p>
              <p>
                نهدف إلى الارتقاء بمستوى خدمات الحلاقة في الرياض من خلال توفير بيئة نظيفة ومريحة، واستخدام أفضل المنتجات وأدوات الحلاقة المعقمة، لنضمن لكم تجربة متميزة في كل زيارة.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-barber-wood/70 p-1 border border-barber-gold/30 rounded-lg w-full max-w-md">
                <div className="aspect-[3/4] w-full bg-barber-gold/20 rounded flex items-center justify-center">
                  <div className="text-center p-4">
                    <Award className="mx-auto mb-4 text-barber-gold" size={64} />
                    <h3 className="text-2xl font-bold text-barber-gold mb-2">الخبرة والإتقان</h3>
                    <p>نجمع بين الخبرة العريقة والتقنيات الحديثة لتقديم خدمة حلاقة لا مثيل لها</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h2 className="section-title">رؤيتنا</h2>
              <p className="mb-6">
                نسعى لأن نكون الوجهة الأولى والمفضلة لخدمات الحلاقة الرجالية في الرياض، من خلال تقديم خدمات متميزة تلبي احتياجات وتطلعات عملائنا بأعلى مستويات الجودة والاحترافية.
              </p>
              <h3 className="text-xl font-bold text-barber-gold mt-8 mb-4">قيمنا</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-barber-gold/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-barber-gold" size={16} />
                  </div>
                  <div className="mr-4">
                    <p className="font-bold text-barber-gold">الاحترافية</p>
                    <p>الالتزام بأعلى معايير الأداء في تقديم خدماتنا</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-barber-gold/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-barber-gold" size={16} />
                  </div>
                  <div className="mr-4">
                    <p className="font-bold text-barber-gold">النظافة</p>
                    <p>الاهتمام بنظافة وتعقيم المكان والأدوات</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-barber-gold/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-barber-gold" size={16} />
                  </div>
                  <div className="mr-4">
                    <p className="font-bold text-barber-gold">الاهتمام بالعميل</p>
                    <p>جعل رضا العميل أولوية قصوى ومحور اهتمامنا</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-barber-gold/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-barber-gold" size={16} />
                  </div>
                  <div className="mr-4">
                    <p className="font-bold text-barber-gold">التطوير المستمر</p>
                    <p>مواكبة أحدث صيحات وتقنيات الحلاقة والعناية الشخصية</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-barber-gold/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-barber-gold" size={16} />
                  </div>
                  <div className="mr-4">
                    <p className="font-bold text-barber-gold">الأمانة</p>
                    <p>الالتزام بالمصداقية والشفافية في تعاملاتنا</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:order-1">
              <div className="bg-barber-wood/70 p-1 border border-barber-gold/30 rounded-lg w-full max-w-md">
                <div className="aspect-[3/4] w-full bg-barber-gold/20 rounded flex items-center justify-center">
                  <div className="text-center p-4">
                    <Users className="mx-auto mb-4 text-barber-gold" size={64} />
                    <h3 className="text-2xl font-bold text-barber-gold mb-2">فريق محترف</h3>
                    <p>فريق من الحلاقين المحترفين ذوي الخبرة العالية والمهارات المتميزة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Environment Section */}
      <section className="py-12 px-4 bg-barber-dark/80">
        <div className="container mx-auto">
          <h2 className="section-title text-center mx-auto">بيئة الصالون</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            يتميز صالون السوداني الأنيق بتصميمه الأنيق والمريح الذي يوفر أجواء هادئة ومريحة لجميع العملاء. حرصنا على تجهيز الصالون بأحدث الادوات والمعدات لضمان تجربة مريحة.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                  <path d="M9 12v6"></path>
                  <path d="M13 12v6"></path>
                  <path d="M14 7.5c-1 0-1.64.4-2 1-.36-.6-1-1-2-1-1.1 0-2 .9-2 2 0 .24.05.47.13.67.09.2.22.39.38.55L13 15l4.5-4.27c.16-.16.29-.35.38-.55.08-.2.12-.43.12-.68 0-1.1-.9-2-2-2Z"></path>
                  <path d="M2 2h20v8H2z"></path>
                  <path d="M2 17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-1H2Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">منطقة استقبال مريحة</h3>
              <p>منطقة انتظار مجهزة بوسائل الراحة والترفيه لتجربة مريحة</p>
            </div>
            
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">معدات حديثة</h3>
              <p>نستخدم أحدث الأدوات والمعدات لضمان أفضل النتائج</p>
            </div>
            
            <div className="service-card text-center">
              <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" x2="9.01" y1="9" y2="9"></line>
                  <line x1="15" x2="15.01" y1="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-barber-gold mb-3">منطقة خاصة للأطفال</h3>
              <p>خصصنا للأطفال منطقة ملائمة تجعل تجربة الحلاقة لديهم ممتعة وخالية من الإزعاج</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-barber-gold mb-6">تواصل معنا اليوم</h2>
          <p className="text-xl mb-8">نحن في انتظارك لتقديم تجربة حلاقة لا تُنسى</p>
          <a href="tel:0545162003" className="gold-button">
            اتصل بنا: 0545162003
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
