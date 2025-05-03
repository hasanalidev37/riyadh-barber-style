
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="wood-pattern min-h-screen flex items-center justify-center p-4">
      <div className="text-center bg-barber-dark/80 p-8 rounded-lg border border-barber-gold/30 max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold text-barber-gold mb-4">404</h1>
        <p className="text-xl text-barber-light mb-6">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
        <Link 
          to="/" 
          className="gold-button inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
