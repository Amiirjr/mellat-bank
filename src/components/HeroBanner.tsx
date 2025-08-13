import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "خرید خودرو وارداتی با حساب وکالتی",
      subtitle: "تسهیلات ویژه خرید خودرو با بهترین شرایط",
      description: "از امکانات منحصر به فرد بانک ملت برای خرید خودروهای وارداتی با نرخ سود ۱۸٪ و بازپرداخت تا ۶۰ ماه استفاده کنید",
      features: ["سود ۱۸٪ سالانه", "بازپرداخت تا ۶۰ ماه", "بدون نیاز به ضامن"],
      cta: "درخواست تسهیلات",
      background: "gradient-bank-primary"
    },
    {
      title: "بانکداری دیجیتال نسل جدید",
      subtitle: "تجربه‌ای نو از خدمات بانکی",
      description: "با اپلیکیشن همراه بانک ملت، بیش از ۱۰۰ خدمت بانکی را ۲۴ ساعته و در هر کجا که هستید، انجام دهید",
      features: ["۱۰۰+ خدمت آنلاین", "امنیت بالا", "رابط کاربری ساده"],
      cta: "دانلود اپلیکیشن",
      background: "gradient-bank-secondary"
    },
    {
      title: "سرمایه‌گذاری هوشمند",
      subtitle: "راه‌های متنوع کسب درآمد",
      description: "با محصولات سرمایه‌گذاری بانک ملت و نرخ سود تا ۲۵٪، آینده‌ای مطمئن و پردرآمد بسازید",
      features: ["سود تا ۲۵٪", "سرمایه تضمینی", "مشاوره رایگان"],
      cta: "شروع سرمایه‌گذاری",
      backgroundImage: "/src/assets/Herobanner/mellat-saipa-hero.jpg"
    },
    {
      title: "رمز ارز و پرداخت دیجیتال",
      subtitle: "آینده پول در دستان شما",
      description: "با کیف پول دیجیتال بانک ملت، بیت‌کوین و سایر رمزارزها را خرید و فروش کنید و از مزایای پرداخت‌های دیجیتال استفاده کنید",
      features: ["خرید و فروش رمزارز", "کیف پول دیجیتال", "تراکنش‌های ایمن"],
      cta: "شروع معاملات",
      backgroundImage: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1920&h=500&fit=crop&crop=center"
    },
    {
      title: "تجارت بین‌الملل و ارزی",
      subtitle: "اتصال به بازارهای جهانی",
      description: "خدمات کامل بانک ملت برای تجارت خارجی شامل اعتبارات اسنادی، حواله ارزی و مشاوره تجاری برای توسعه کسب و کار شما",
      features: ["اعتبارات اسنادی", "حواله ارزی سریع", "مشاوره تخصصی"],
      cta: "مشاوره رایگان",
      backgroundImage: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1920&h=500&fit=crop&crop=center"
    },
    {
      title: "بیمه زندگی و سرمایه‌گذاری",
      subtitle: "حفاظت و رشد مالی همزمان",
      description: "طرح‌های بیمه زندگی بانک ملت که علاوه بر پوشش کامل، امکان سرمایه‌گذاری و کسب بازدهی مناسب را فراهم می‌کند",
      features: ["پوشش کامل بیمه", "بازدهی تضمینی", "انعطاف در پرداخت"],
      cta: "محاسبه حق بیمه",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=500&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 transform ${
            index === currentSlide 
              ? 'translate-x-0 opacity-100' 
              : index < currentSlide 
                ? '-translate-x-full opacity-0' 
                : 'translate-x-full opacity-0'
          } ${slide.background || ''}`}
          style={slide.backgroundImage ? {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          } : {}}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 opacity-90">
                {slide.subtitle}
              </h2>
              <p className="text-lg mb-6 opacity-80 leading-relaxed">
                {slide.description}
              </p>
              
              {/* Features List */}
              <div className="flex flex-wrap gap-4 mb-8">
                {slide.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-white bg-opacity-20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                    ✓ {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
                  {slide.cta}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-all">
                  اطلاعات بیشتر
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;