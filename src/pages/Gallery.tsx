
const Gallery = () => {
  const haircuts = [
    { id: 1, title: 'قصة عصرية 1', description: 'قصة شعر عصرية مميزة' },
    { id: 2, title: 'قصة عصرية 2', description: 'تصميم حديث للشعر' },
    { id: 3, title: 'قصة كلاسيكية 1', description: 'قصة أنيقة تناسب جميع المناسبات' },
    { id: 4, title: 'حلاقة أطفال', description: 'قصة مناسبة للأطفال' },
    { id: 5, title: 'تصميم خاص', description: 'قصة مبتكرة بتصميم فريد' },
    { id: 6, title: 'قصة شبابية', description: 'قصة تناسب الشباب والمراهقين' },
  ];

  const beards = [
    { id: 1, title: 'تشذيب اللحية 1', description: 'تشذيب وتصميم اللحية بدقة' },
    { id: 2, title: 'تشذيب اللحية 2', description: 'عناية كاملة باللحية' },
    { id: 3, title: 'لحية قصيرة', description: 'تصميم للحية القصيرة' },
    { id: 4, title: 'شارب وذقن', description: 'تشذيب الذقن والشارب بدقة عالية' },
  ];

  return (
    <div className="wood-pattern min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-barber-gold text-center">
            معرض الأعمال
          </h1>
          <div className="w-20 h-1 bg-barber-gold mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto">
            نقدم لكم مجموعة من أعمالنا المميزة التي تعكس جودة وإبداع خدماتنا في صالون السوداني الأنيق. تصفحوا صور قصات الشعر المختلفة وتصميمات اللحية التي ننفذها بأيدي حلاقينا المحترفين.
          </p>
        </div>
      </section>

      {/* Hair Cuts Gallery */}
      <section className="py-12 px-4 bg-barber-dark/80">
        <div className="container mx-auto">
          <h2 className="section-title">قصات الشعر</h2>
          <p className="mb-8">استعرض نماذج من قصات الشعر المميزة التي ننفذها في صالوننا</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {haircuts.map((item) => (
              <div key={item.id} className="service-card overflow-hidden">
                <div className="bg-barber-gold/20 aspect-square rounded-md flex items-center justify-center mb-4">
                  <div className="text-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-barber-gold/50">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-barber-gold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beard Gallery */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="section-title">تصميمات اللحية</h2>
          <p className="mb-8">شاهد أجمل تصميمات اللحية التي ننفذها لعملائنا</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beards.map((item) => (
              <div key={item.id} className="service-card overflow-hidden">
                <div className="bg-barber-gold/20 aspect-[4/3] rounded-md flex items-center justify-center mb-4">
                  <div className="text-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-barber-gold/50">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-barber-gold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-barber-wood">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-barber-gold mb-6">زورنا لتحصل على المظهر المثالي</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تعال وجرب خدماتنا المميزة لتحصل على الإطلالة التي تريدها
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:0545162003" className="gold-button">
              اتصل بنا: 0545162003
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
