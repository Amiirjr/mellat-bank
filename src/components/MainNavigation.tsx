import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const MainNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: "درباره ملت",
      items: [
        "تاریخچه بانک ملت",
        "چشم‌انداز و رسالت", 
        "هیئت مدیره",
        "مدیران ارشد",
        "گزارشات سالانه",
        "صورت‌های مالی",
        "نشان‌ها و افتخارات",
        "مسئولیت اجتماعی"
      ]
    },
    {
      title: "اطلاع‌رسانی",
      items: [
        "آخرین اخبار",
        "اطلاعیه‌های مهم",
        "مناقصات و مزایدات",
        "فرصت‌های شغلی",
        "رویدادها و نمایشگاه‌ها",
        "نشریات و مجلات",
        "گزارش‌های عملکرد",
        "تغییرات نرخ بهره"
      ]
    },
    {
      title: "خدمات",
      items: [
        "حساب‌های جاری و پس‌انداز",
        "تسهیلات و وام‌ها",
        "خدمات ارزی",
        "کارت‌های بانکی",
        "خدمات شرکتی",
        "بانکداری خصوصی",
        "خدمات سرمایه‌گذاری",
        "مشاوره مالی"
      ]
    },
    {
      title: "بانکداری الکترونیک",
      items: [
        "همراه بانک ملت",
        "اینترنت بانک",
        "دستگاه‌های خودپرداز",
        "کارتخوان و ایکس‌پوز",
        "پرداخت موبایلی",
        "کیف پول دیجیتال",
        "امضای دیجیتال",
        "خدمات تلفن بانک"
      ]
    }
  ];

  return (
    <>
      <nav className={`transition-all duration-500 z-40 bg-gray-200 shadow-lg border-b border-gray-300`}> 
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center">
            <ul className="flex space-x-0 space-x-reverse">
              {menuItems.map((menu, index) => {
                return (
                  <li 
                    key={index} 
                    className="group relative"
                    onMouseEnter={() => setActiveMenu(index)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className={`flex items-center gap-2 py-5 px-8 font-medium transition-all duration-300 relative overflow-hidden ${
                      activeMenu === index 
                        ? 'text-red-500 bg-gray-300/20' 
                        : 'text-gray-600 hover:text-red-500'
                    }`}>
                      <span className="relative z-10">{menu.title}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-all duration-300 ${
                          activeMenu === index ? 'rotate-180 text-red-500' : 'group-hover:rotate-180'
                        }`} 
                      />
                    </button>

                    {/* Simple Dropdown Menu */}
                    <div className={`absolute top-full right-0 w-64 bg-gray-100 shadow-xl border border-gray-300 rounded-lg transition-all duration-300 transform ${
                      activeMenu === index 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-2'
                    } z-50`}>
                      <div className="py-3">
                        {menu.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href="#"
                            className="block px-5 py-3 text-sm text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-200"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content jump when nav becomes fixed */}
      {isScrolled && <div className="h-20"></div>}
    </>
  );
};

export default MainNavigation;