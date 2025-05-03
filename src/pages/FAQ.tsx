
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-barber-gold/30 rounded-lg overflow-hidden mb-4">
      <button
        className={`w-full text-right p-4 flex justify-between items-center focus:outline-none ${
          isOpen ? 'bg-barber-gold/10' : 'bg-barber-wood/70'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-barber-gold">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-barber-gold transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 bg-barber-dark/50 ${
          isOpen ? 'max-h-96 p-4' : 'max-h-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const appointmentFAQs = [
    {
      question: 'ما هي ساعات عمل الصالون؟',
      answer: 'صالون حلاق السوداني الأنيق يفتح أبوابه يومياً من الساعة 12 ظهراً حتى الساعة 2 صباحاً.'
    },
    {
      question: 'هل يلزم الحجز المسبق؟',
      answer: 'لا يلزم الحجز المسبق، يمكنكم زيارتنا مباشرة في أي وقت خلال ساعات العمل. ومع ذلك، يفضل الاتصال بنا في أوقات الذروة للتأكد من توفر الخدمة دون انتظار طويل.'
    },
    {
      question: 'هل يمكنني إحضار طفلي للحلاقة؟',
      answer: 'بالتأكيد، نحن نقدم خدمات حلاقة خاصة للأطفال في بيئة مريحة، ولدينا فريق متخصص في التعامل معهم بلطف واحترافية.'
    }
  ];

  const servicesFAQs = [
    {
      question: 'ما هي الخدمات الرئيسية التي تقدمونها؟',
      answer: 'نقدم مجموعة متكاملة من خدمات الحلاقة تشمل قص الشعر، تشذيب وتصميم اللحية، خدمات العناية بالبشرة، الحمام المغربي، بالإضافة إلى خدمات خاصة للأطفال.'
    },
    {
      question: 'هل توفرون منتجات العناية بالشعر واللحية؟',
      answer: 'نعم، نوفر مجموعة مختارة من أفضل منتجات العناية بالشعر واللحية، بالإضافة إلى ماكينات الحلاقة وكريمات ما بعد الحلاقة والكولونيا.'
    },
    {
      question: 'كم تستغرق خدمة قص الشعر واللحية؟',
      answer: 'تستغرق خدمة قص الشعر عادة حوالي 30-45 دقيقة، وتشذيب اللحية حوالي 15-20 دقيقة، وتعتمد المدة على نوع القصة والخدمة المطلوبة.'
    },
  ];

  const salonFAQs = [
    {
      question: 'ما هي إجراءات النظافة والتعقيم المتبعة في الصالون؟',
      answer: 'نلتزم بأعلى معايير النظافة والتعقيم، حيث نقوم بتعقيم جميع الأدوات بعد كل استخدام، واستخدام فوط نظيفة لكل عميل، بالإضافة إلى التنظيف المستمر للصالون والكراسي.'
    },
    {
      question: 'هل تقدمون خدمات للمناسبات الخاصة؟',
      answer: 'نعم، يمكننا تقديم خدمات خاصة للمناسبات مثل الأعراس والمناسبات المهمة، يرجى التواصل معنا مسبقاً للترتيب.'
    },
    {
      question: 'هل لديكم مواقف سيارات؟',
      answer: 'نعم، يتوفر مواقف للسيارات بالقرب من الصالون.'
    },
  ];

  return (
    <div className="wood-pattern min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-barber-gold text-center">
            الأسئلة الشائعة
          </h1>
          <div className="w-20 h-1 bg-barber-gold mx-auto mb-8"></div>
          <p className="text-center max-w-3xl mx-auto">
            الأسئلة المتكررة عن حلاق السوداني الأنيق وخدماتنا. إذا كان لديك أي استفسارات أخرى، يرجى التواصل معنا مباشرة.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 px-4 bg-barber-dark/80">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-title">حول المواعيد والزيارة</h2>
          <div className="mt-8">
            {appointmentFAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <h2 className="section-title mt-16">حول الخدمات</h2>
          <div className="mt-8">
            {servicesFAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <h2 className="section-title mt-16">حول الصالون</h2>
          <div className="mt-8">
            {salonFAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-barber-gold mb-6">لم تجد إجابة لسؤالك؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            يسعدنا الإجابة على جميع استفساراتكم. تواصل معنا الآن.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:0545162003" className="gold-button">
              اتصل بنا: 0545162003
            </a>
            <a 
              href="https://wa.me/00966530640121" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
            >
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
