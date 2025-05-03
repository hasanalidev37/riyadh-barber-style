
import { Star } from 'lucide-react';

interface ReviewProps {
  name: string;
  rating: number;
  time: string;
  comment: string;
}

const ReviewCard = ({ name, rating, time, comment }: ReviewProps) => {
  return (
    <div className="service-card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "text-barber-gold fill-barber-gold" : "text-gray-400"}
              />
            ))}
            <span className="mx-2 text-sm text-barber-light/60">{time}</span>
          </div>
        </div>
      </div>
      <p className="text-barber-light/90">{comment}</p>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Moez Salih",
      rating: 5,
      time: "قبل 5 أشهر",
      comment: "Very clean place , people are very welcoming in there."
    },
    {
      name: "على عشا",
      rating: 5,
      time: "قبل 5 أشهر",
      comment: "مبدعين ومحل مرتب ونظيف واهتمام بالعملا نتمني لكم التوفيق"
    },
    {
      name: "MUNTASIR ABDALLA",
      rating: 5,
      time: "قبل 4 أشهر",
      comment: "والله من افضل الصوالين السودانية في الرياض ❤️ تعامل اكثر من رائع 🌹 وصالون مجهز بكل المعدات الحديثة والانتظار مجهز باحتراف ✌️ حبيبنا مصطفى بالتوفيق يا غالي"
    },
    {
      name: "hesham kambal",
      rating: 5,
      time: "قبل 3 أشهر",
      comment: "ماشاء الله يامصطفى شي مرتب ونظافه الله يوفقكم يارب مبروك المكان الجديد 💚👍"
    },
    {
      name: "obai algafari",
      rating: 5,
      time: "قبل 3 أشهر",
      comment: "ممتاذ شباب حلوين محل نظيف جديد تحية للأخ مصطفى قمة في الأخلاق بتوفيق دوام التقدم"
    },
    {
      name: "سوما عمر",
      rating: 5,
      time: "قبل 5 أشهر",
      comment: "افضل صالون في الرياض استطاف ممتاز وتعامل راقي والمكان مريح جدا ومجهز تجهيز حلو جدا ربنا يوفقكم"
    },
    {
      name: "MOHAMED SIDEEG ADAM ABDALLAH",
      rating: 5,
      time: "قبل 5 أشهر",
      comment: "صالون جميل و نظيف جداً و مرتب و طاقم حلاقين ممتاز عندهم حلاق اطفال رهيب و ممتازين و تعاملهم راقي جداً شكراً 🌹 علي التعامل الراقي"
    },
    {
      name: "Khlaid Abdulgader",
      rating: 5,
      time: "قبل 5 أشهر",
      comment: "ماشاء الله صالون مميز جدا، حلاقة ونظافة على اعلى مستوى، ياريت نشوف الحلاقين السودانيين بنفس المستوى ده. موفقين جدا"
    }
  ];

  return (
    <div className="wood-pattern min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-barber-gold text-center">
            آراء العملاء
          </h1>
          <div className="w-20 h-1 bg-barber-gold mx-auto mb-8"></div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="mb-4">
              نفخر بتقييم عملائنا المميز البالغ 4.9 من 5 على Google، وهذا يعكس التزامنا بتقديم خدمات عالية الجودة وتجربة استثنائية لكل عميل.
            </p>
            <div className="flex items-center justify-center gap-1 my-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={i < 4.9 ? "text-barber-gold fill-barber-gold" : "text-gray-400"}
                />
              ))}
              <span className="mr-2 text-xl font-bold text-barber-gold">4.9</span>
              <span className="text-barber-light/70">من إجمالي 71 تقييم</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 px-4 bg-barber-dark/80">
        <div className="container mx-auto">
          <h2 className="section-title text-center mx-auto">ما يقوله عملاؤنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                rating={review.rating}
                time={review.time}
                comment={review.comment}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-barber-gold mb-6">شاركنا تجربتك</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نسعد بسماع رأيك وتقييمك لخدماتنا. زرنا وشارك تجربتك معنا على Google.
          </p>
          <a 
            href="https://maps.app.goo.gl/43rafdhCiehkz16QA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gold-button"
          >
            قيّم تجربتك على Google
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
