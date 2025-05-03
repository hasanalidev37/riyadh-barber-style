
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-barber-dark/95 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-barber-gold">
              حلاق السوداني الأنيق
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-barber-light hover:text-barber-gold transition-colors">
              الرئيسية
            </Link>
            <Link to="/about" className="text-barber-light hover:text-barber-gold transition-colors">
              عن الصالون
            </Link>
            <Link to="/services" className="text-barber-light hover:text-barber-gold transition-colors">
              خدماتنا
            </Link>
            <Link to="/gallery" className="text-barber-light hover:text-barber-gold transition-colors">
              معرض الأعمال
            </Link>
            <Link to="/faq" className="text-barber-light hover:text-barber-gold transition-colors">
              الأسئلة الشائعة
            </Link>
            <Link to="/reviews" className="text-barber-light hover:text-barber-gold transition-colors">
              التقييمات
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a
              href="tel:0545162003"
              className="bg-barber-gold hover:bg-barber-orange text-barber-dark font-bold py-2 px-4 rounded-md flex items-center gap-2 transition-all duration-300"
            >
              <Phone size={18} />
              <span>0545162003</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-barber-gold"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-barber-dark/95 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-barber-light hover:text-barber-gold px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            الرئيسية
          </Link>
          <Link to="/about" className="text-barber-light hover:text-barber-gold px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            عن الصالون
          </Link>
          <Link to="/services" className="text-barber-light hover:text-barber-gold px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            خدماتنا
          </Link>
          <Link to="/gallery" className="text-barber-light hover:text-barber-gold px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            معرض الأعمال
          </Link>
          <Link to="/faq" className="text-barber-light hover:text-barber-gold px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            الأسئلة الشائعة
          </Link>
          <Link to="/reviews" className="text-barber-light hover:text-barber-gold px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            التقييمات
          </Link>
          <a
            href="tel:0545162003"
            className="bg-barber-gold hover:bg-barber-orange text-barber-dark font-bold py-2 px-4 rounded-md text-center transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            اتصل بنا: 0545162003
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
