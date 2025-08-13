import { Calendar, ArrowLeft, Eye, Clock, Tag, TrendingUp } from "lucide-react";

const NewsSection = () => {
  const featuredNews = {
    id: 1,
    title: "بانک ملت رکورددار جذب سپرده در بانک‌های خصوصی",
    summary: "بانک ملت در سال ۱۴۰۳ با جذب بیش از ۵۰ هزار میلیارد تومان سپرده، رکورد جدیدی در میان بانک‌های خصوصی کشور ثبت کرد و توانست رشد ۱۵ درصدی نسبت به سال گذشته داشته باشد.",
    date: "۲۵ مرداد ۱۴۰۳",
    readTime: "۳ دقیقه",
    views: "۲,۳۴۵",
    category: "اقتصادی",
    image: "src/assets/news/mellat-main-cover.jpg",
    isHot: true
  };

  const sideNews = [
    {
      id: 2,
      title: "راه‌اندازی سرویس‌های جدید در اپلیکیشن همراه بانک ملت",
      summary: "امکانات جدید شامل پرداخت قبوض، انتقال وجه سریع و مدیریت سبد سرمایه‌گذاری",
      date: "۲۳ مرداد ۱۴۰۳",
      readTime: "۲ دقیقه",
      views: "۱,۸۹۲",
      category: "فناوری",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "طرح های جدید كارت هماهنگ با سلایق مشتریان در دستور كار بانك ملت",
      summary: "بانک ملت در پاسخ به استقبال مشتریان از کارت های جدید این بانک، ارائه طرح های جدید را هماهنگ با سلایق متنوع مشتریان در دستور کار قرار داده است.",
      date: "۲۲ مرداد ۱۴۰۳",
      readTime: "۱ دقیقه",
      views: "۳,۱۲۱",
      category: "خدمات بانکی",
      image: "/src/assets/news/design-card-cover.jpg"
    },
    {
      id: 4,
      title: "برگزاری نمایشگاه خدمات بانکی ملت در تهران",
      summary: "نمایشگاه سه‌روزه خدمات بانکی با حضور مدیران ارشد بانک",
      date: "۲۰ مرداد ۱۴۰۳",
      readTime: "۲ دقیقه",
      views: "۹۸۷",
      category: "رویدادها",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const quickNews = [
    "اعلام نرخ جدید سود سپرده‌های کوتاه‌مدت",
    "تمدید مهلت ثبت‌نام کارت‌های اعتباری ملت",
    "راه‌اندازی شعبه جدید در منطقه ۲۲ تهران",
    "برگزاری دوره آموزشی سواد مالی برای دانشجویان"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp size={16} />
            <span>آخرین اخبار</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            اخبار و اطلاعیه‌های بانک ملت
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            از جدیدترین خدمات، دستاوردها و رویدادهای بانک ملت مطلع شوید
          </p>

          {/* Quick News Ticker */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-12">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span>اخبار فوری</span>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex gap-8 animate-slide-in-right">
                  {quickNews.map((news, index) => (
                    <span key={index} className="text-muted-foreground whitespace-nowrap">
                      • {news}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer group">
              <div className="relative">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {featuredNews.isHot && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                      تازه
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4 bg-black/30 backdrop-blur text-white px-3 py-1 rounded-full text-xs">
                    {featuredNews.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{featuredNews.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{featuredNews.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      <span>{featuredNews.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredNews.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side News */}
          <div className="space-y-6">
            {sideNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-sm hover-lift cursor-pointer group border border-gray-100"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.summary}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.date}</span>
                      <div className="flex items-center gap-3">
                        <span>{item.readTime}</span>
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105 text-center"
          >
            مشاهده آرشیو کامل اخبار
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;