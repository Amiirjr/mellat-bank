import NotificationBar from "@/components/NotificationBar";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { User, GraduationCap, Calendar, Code, Palette, Database, Smartphone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <NotificationBar />
      <div className="pt-32"></div>
      <MainNavigation />
      
      <main className="py-20 bg-gradient-to-b from-muted/20 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <User size={16} />
              <span>درباره ما</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              معرفی پروژه و سازنده
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              این پروژه بخشی از تکالیف درسی و نمونه‌ای از طراحی مدرن وب‌سایت بانکی است
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">اطلاعات دانشجویی</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <User size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">نام و نام خانوادگی</p>
                    <p className="font-semibold text-foreground">[نام خود را وارد کنید]</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <span className="text-primary font-bold text-lg">#</span>
                  <div>
                    <p className="text-sm text-muted-foreground">شماره دانشجویی</p>
                    <p className="font-semibold text-foreground">[شماره دانشجویی خود را وارد کنید]</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">ترم تحصیلی</p>
                    <p className="font-semibold text-foreground">[ترم خود را وارد کنید]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Code size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">درباره پروژه</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  این پروژه یک نمونه کامل از طراحی و پیاده‌سازی وب‌سایت بانک ملت با استفاده از 
                  جدیدترین تکنولوژی‌های فرانت‌اند است.
                </p>
                <p>
                  هدف از این پروژه، ایجاد یک رابط کاربری مدرن، ریسپانسیو و کاربرپسند برای 
                  خدمات بانکی آنلاین می‌باشد.
                </p>
                <p>
                  پروژه شامل صفحات مختلف نظیر صفحه اصلی، خدمات، اخبار و نرخ ارز با طراحی 
                  مینیمال و کاربری بهینه طراحی شده است.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Features */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ویژگی‌های فنی پروژه
              </h2>
              <p className="text-muted-foreground">
                تکنولوژی‌ها و ابزارهای استفاده شده در این پروژه
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">React & TypeScript</h3>
                <p className="text-sm text-muted-foreground">
                  فریمورک مدرن برای ساخت رابط کاربری
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                  <Palette size={24} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Tailwind CSS</h3>
                <p className="text-sm text-muted-foreground">
                  سیستم طراحی مدرن و ریسپانسیو
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                  <Database size={24} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Vite</h3>
                <p className="text-sm text-muted-foreground">
                  ابزار بیلد سریع و بهینه
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                  <Smartphone size={24} className="text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Responsive Design</h3>
                <p className="text-sm text-muted-foreground">
                  سازگار با تمام دستگاه‌ها
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;