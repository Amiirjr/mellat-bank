import { Zap, PiggyBank, Monitor, DollarSign, Info, Users, Shield, Clock } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: Zap,
      title: "دسترسی سریع",
      description: "انجام تراکنش‌های بانکی در کمترین زمان ممکن",
      features: ["انتقال فوری وجه", "پرداخت آنلاین قبوض", "استعلام موجودی"],
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      users: "۲.۵ میلیون کاربر"
    },
    {
      icon: PiggyBank,
      title: "سپرده‌گذاری",
      description: "انواع حساب‌های پس‌انداز و سرمایه‌گذاری",
      features: ["سود تا ۲۰٪", "سررسید انعطاف‌پذیر", "ضمانت سرمایه"],
      color: "text-green-500",
      bgColor: "bg-green-50",
      users: "۱.۸ میلیون سپرده‌گذار"
    },
    {
      icon: Monitor,
      title: "میز الکترونیک",
      description: "خدمات آنلاین ۲۴ ساعته و ۷ روز هفته",
      features: ["پشتیبانی زنده", "راهنمای تصویری", "عملیات بدون مراجعه"],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      users: "فعال ۲۴/۷"
    },
    {
      icon: DollarSign,
      title: "خدمات ارزی",
      description: "معاملات ارزی و حواله‌های بین‌المللی",
      features: ["۵۰+ ارز معتبر", "نرخ رقابتی", "تحویل سریع"],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      users: "۵۰۰ هزار معامله ماهانه"
    },
    {
      icon: Info,
      title: "خدمات اطلاعاتی",
      description: "راهنمایی و پشتیبانی تخصصی مشتریان",
      features: ["مشاوره رایگان", "آموزش بانکداری", "پشتیبانی فوری"],
      color: "text-red-500",
      bgColor: "bg-red-50",
      users: "۱۰۰+ مشاور متخصص"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield size={16} />
            <span>خدمات ویژه</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            طیف جامع خدمات بانک ملت
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            از خدمات متنوع و پیشرفته بانک ملت بهره‌مند شوید و تجربه‌ای نو از بانکداری مدرن داشته باشید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 text-center hover-lift cursor-pointer group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${service.bgColor} mb-6 ${service.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <service.icon size={40} />
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-muted/50 rounded-lg p-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
                    <Users size={14} />
                    <span>{service.users}</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white py-3 rounded-lg text-sm font-medium transition-all duration-300 transform group-hover:scale-105">
                  شروع کنید
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            آیا خدمات خاصی را می‌خواهید؟
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            تیم متخصصان بانک ملت آماده ارائه مشاوره رایگان و طراحی بسته خدماتی مناسب نیازهای شما می‌باشند
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              درخواست مشاوره
            </button>
            <button className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
              تماس با کارشناس
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;