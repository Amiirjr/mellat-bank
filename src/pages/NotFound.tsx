import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-100 to-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">
          اوه نه! صفحه‌ای که دنبالش بودید پیدا نشد.
        </p>
        <p className="text-lg text-gray-500 mb-8">شاید مسیر اشتباهی رفتید؟</p>
        <a
          href="/"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          بازگشت به صفحه اصلی
        </a>
      </div>
    </div>
  );
};

export default NotFound;
