import { Search, Home, Globe, Bell, Wallet, UserRound } from "lucide-react";
import { useState, useEffect } from "react";

const NotificationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentPersianDate = () => {
    const today = new Date();
    const persianDate = new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(today);
    return persianDate;
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-border/20' 
        : 'bg-gradient-to-b from-white via-white/95 to-white/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6">
        {/* Top Section - Only visible when not scrolled */}
        <div className={`transition-all duration-500 border-b border-border/10 ${
          isScrolled ? 'max-h-0 opacity-0 overflow-hidden py-0' : 'max-h-20 opacity-100 py-3'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                همراه بانک
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                امضای دیجیتال
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                بانکداری اینترنتی
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                پیشخوان الکترونیکی
              </a>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="text-muted-foreground font-medium">{getCurrentPersianDate()}</span>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                  <Globe size={16} />
                  <span>EN</span>
                </button>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                  <Wallet size={16} />
                </a>
                <button className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Section */}
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          <a href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-300">
            <img 
              src="https://fs.noorgram.ir/xen/2020/10/442_2be3e526e96286fa7b09a1705ddf40d5.png" 
              alt="Bank Logo" 
              className={`rounded-xl shadow-md object-cover transition-all duration-500 ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            />
            <div className="flex flex-col">
              <h1 className={`font-bold text-foreground transition-all duration-500 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                بانک ملت
              </h1>
              <p className={`text-muted-foreground transition-all duration-500 ${
                isScrolled ? 'text-xs opacity-80' : 'text-sm'
              }`}>
                بانک پیشرو در خدمات مالی
              </p>
            </div>
          </a>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="/mellat-bank/#/about"
                className="text-red-500 font-bold cursor-pointer flex items-center group transition-colors duration-200 hover:text-red-600">
                <UserRound className="mr-2 w-4 h-5 transition-transform duration-200 group-hover:scale-125" />
                <span className="transition-transform duration-200 group-hover:scale-110">
                  درباره من
                </span>
              </a>
              <span className="hover:text-red-500 transition-all duration-300 cursor-pointer hover:scale-105 font-medium">
                شعب
              </span>
              <span className="hover:text-red-500 transition-all duration-300 cursor-pointer hover:scale-105 font-medium">
                خدمات آنلاین
              </span>
            </div>
            
            {/* User Actions */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-110">
                <Bell size={18} className="text-muted-foreground hover:text-primary" />
              </button>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-110">
                <Home size={18} className="text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
