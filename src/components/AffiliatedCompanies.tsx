import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Import company logos
import mellatInsuranceLogo from "@/assets/logos/mellat-insurance-logo.png";
import mellatLeasingLogo from "@/assets/logos/mellat-leasing-logo.png";
import mellatExchangeLogo from "@/assets/logos/mellat-exchange-logo.png";
import mellatInvestmentLogo from "@/assets/logos/mellat-investment-logo.png";
import mellatBrokerageLogo from "@/assets/logos/mellat-brokerage-logo.png";
import mellatPaymentLogo from "@/assets/logos/mellat-payment-logo.png";

const AffiliatedCompanies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const companies = [
    {
      id: 1,
      name: "بیمه ملت",
      description: "خدمات بیمه‌ای جامع",
      logo: mellatInsuranceLogo
    },
    {
      id: 2,
      name: "به پرداخت ملت",
      description: "راه‌حل‌های فناوری مالی",
      logo: mellatPaymentLogo
    },
    {
      id: 3,
      name: "شرکت صرافی ملت",
      description: "خدمات صرافی و ارز",
      logo: mellatExchangeLogo
    },
    {
      id: 4,
      name: "سرمایه‌گذاری ملت",
      description: "مدیریت سرمایه و سپرده",
      logo: mellatInvestmentLogo
    },
    {
      id: 5,
      name: "کارگزاری ملت",
      description: "خدمات بورس و اوراق",
      logo: mellatBrokerageLogo
    },
    {
      id: 6,
      name: "لیزینگ ملت",
      description: "خدمات لیزینگ و اجاره",
      logo: mellatLeasingLogo
    }
  ];

  const itemsPerPage = 5;
  const maxIndex = Math.max(0, companies.length - itemsPerPage);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= maxIndex) {
          return 0; // Reset to beginning
        }
        return prev + 1;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [maxIndex, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleIndicatorClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
          شرکت‌های وابسته
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            شبکه گسترده‌ای از شرکت‌های متخصص که در کنار هم اکوسیستم جامع خدمات مالی گروه ملت را تشکیل می‌دهند
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {companies.map((company) => (
                <Card
                  key={company.id}
                  className="flex-shrink-0 w-1/5 group cursor-pointer border-2 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm"
                  style={{ minWidth: `calc(20% - 25.6px)` }}
                >
                  <CardContent className="p-5 text-center">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 mx-auto mb-3 rounded-xl bg-transparent transition-colors duration-300">
                        <img 
                          src={company.logo} 
                          alt={`لوگو ${company.name}`}
                          className="w-full h-full object-contain transition-all duration-300 scale-110"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {company.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed min-h-[2rem] flex items-center justify-center">
                      {company.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-primary font-medium text-xs group-hover:gap-3 transition-all duration-200">
                      <span>جزئیات</span>
                      <ArrowLeft size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-background/90 backdrop-blur-sm border border-border shadow-lg rounded-full p-3 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl hover:bg-background transition-all duration-200"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-background/90 backdrop-blur-sm border border-border shadow-lg rounded-full p-3 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl hover:bg-background transition-all duration-200"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliatedCompanies;