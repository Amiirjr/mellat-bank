import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "همراه بانک ملت", href: "#" },
    { title: "اینترنت بانک", href: "#" },
    { title: "امضای دیجیتال", href: "#" },
    { title: "پیشخوان الکترونیکی", href: "#" }
  ];

  const services = [
    { title: "حساب‌های جاری و پس‌انداز", href: "#" },
    { title: "تسهیلات و وام‌ها", href: "#" },
    { title: "خدمات ارزی", href: "#" },
    { title: "کارت‌های بانکی", href: "#" }
  ];

  const aboutLinks = [
    { title: "درباره بانک ملت", href: "#" },
    { title: "چشم‌انداز و اهداف", href: "#" },
    { title: "گزارشات مالی", href: "#" },
    { title: "فرصت‌های شغلی", href: "#" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", name: "اینستاگرام" },
    { icon: Twitter, href: "#", name: "توییتر" },
    { icon: Linkedin, href: "#", name: "لینکدین" },
    { icon: Facebook, href: "#", name: "فیسبوک" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-200 via-gray-300 to-red-200 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cccccc' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Bank Info & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img 
                  src="https://fs.noorgram.ir/xen/2020/10/442_2be3e526e96286fa7b09a1705ddf40d5.png" 
                  alt="Bank Logo" 
                  className="w-13 h-13 object-cover rounded-full shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">بانک ملت</h3>
                <p className="text-sm opacity-90">بانک پیشرو در خدمات مالی</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <a href="tel:1634" className="flex items-center gap-3 text-sm hover:text-red-500 transition-colors group">
                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <Phone size={16} className="group-hover:text-white transition-colors" />
                </div>
                <span>۱۶۳۴ - مرکز تماس ۲۴ ساعته</span>
              </a>
              
              <a href="mailto:info@bankmellat.ir" className="flex items-center gap-3 text-sm hover:text-red-500 transition-colors group">
                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <Mail size={16} className="group-hover:text-white transition-colors" />
                </div>
                <span>info@bankmellat.ir</span>
              </a>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="group-hover:text-red-500 transition-colors" />
                </div>
                <span>تهران، خیابان طالقانی، پلاک ۲۷۵</span>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-red-500 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 group-hover:text-red-500 transition-opacity" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">خدمات</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-red-500 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 group-hover:text-red-500 transition-opacity" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">درباره بانک</h4>
            <ul className="space-y-3 mb-8">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-red-500 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 group-hover:text-red-500 transition-opacity" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-medium text-gray-800 mb-4">شبکه‌های اجتماعی</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon size={18} className="hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-90 text-center lg:text-right">
              © ۱۴۰۴ بانک ملت ایران. تمامی حقوق مادی و معنوی محفوظ است.
            </div>
            
            <div className="flex items-center gap-6 text-xs opacity-70">
              <a href="#" className="hover:opacity-100 hover:text-red-500 transition-opacity">حریم خصوصی</a>
              <a href="#" className="hover:opacity-100 hover:text-red-500 transition-opacity">شرایط استفاده</a>
              <a href="#" className="hover:opacity-100 hover:text-red-500 transition-opacity">سوالات متداول</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;