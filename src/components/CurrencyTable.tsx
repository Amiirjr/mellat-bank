import { TrendingUp, TrendingDown } from "lucide-react";

const convertToPersianDigits = (number) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.replace(/[0-9]/g, (digit) => persianDigits[digit]);
};

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const CurrencyTable = () => {
  const currencies = [
    {
      code: "USD",
      name: "دلار آمریکا",
      flag: "https://flagcdn.com/us.svg",
      buy: convertToPersianDigits(formatNumberWithCommas("89332")),
      sell: convertToPersianDigits(formatNumberWithCommas("90000")),
      change: 0.3,
      trend: "down"
    },
    {
      code: "EUR",
      name: "یورو",
      flag: "https://flagcdn.com/eu.svg",
      buy: convertToPersianDigits(formatNumberWithCommas("97000")),
      sell: convertToPersianDigits(formatNumberWithCommas("97500")),
      change: 0.5,
      trend: "up"
    },
    {
      code: "GBP",
      name: "پوند انگلیس",
      flag: "https://flagcdn.com/gb.svg",
      buy: convertToPersianDigits(formatNumberWithCommas("112000")),
      sell: convertToPersianDigits(formatNumberWithCommas("112500")),
      change: -0.1,
      trend: "down"
    },
    {
      code: "AED",
      name: "درهم امارات",
      flag: "https://flagcdn.com/ae.svg",
      buy: convertToPersianDigits(formatNumberWithCommas("24300")),
      sell: convertToPersianDigits(formatNumberWithCommas("24500")),
      change: 0.2,
      trend: "up"
    },
    {
      code: "CNY",
      name: "یوان چین",
      flag: "https://flagcdn.com/cn.svg",
      buy: convertToPersianDigits(formatNumberWithCommas("12900")),
      sell: convertToPersianDigits(formatNumberWithCommas("13000")),
      change: 0.4,
      trend: "up"
    },
    {
      code: "CAD",
      name: "دلار کانادا",
      flag: "https://flagcdn.com/ca.svg",
      buy: convertToPersianDigits(formatNumberWithCommas("67000")),
      sell: convertToPersianDigits(formatNumberWithCommas("67500")),
      change: -0.2,
      trend: "down"
    },
    {
      code: "CHF",
      name: "فرانک سوییس",
      flag: "https://flagcdn.com/ch.svg",
      buy: convertToPersianDigits(formatNumberWithCommas("102000")),
      sell: convertToPersianDigits(formatNumberWithCommas("102500")),
      change: 0.3,
      trend: "up"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            نرخ ارز
          </h2>
          <p className="text-lg text-muted-foreground">
            آخرین نرخ خرید و فروش ارزهای معتبر
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
            <div className="bg-muted px-6 py-4">
              <div className="grid grid-cols-5 gap-4 font-semibold text-sm text-muted-foreground">
                <div className="text-right">ارز</div>
                <div className="text-center">نرخ خرید</div>
                <div className="text-center">نرخ فروش</div>
                <div className="text-center">تغییر</div>
                <div className="text-center">روند</div>
              </div>
            </div>
            
            <div className="divide-y">
              {currencies.map((currency, index) => (
                <div
                  key={currency.code}
                  className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-6 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={currency.flag}
                        alt={`${currency.name} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {currency.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {currency.code}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center font-medium text-card-foreground">
                    {currency.buy}
                  </div>
                  
                  <div className="text-center font-medium text-card-foreground">
                    {currency.sell}
                  </div>
                  
                  <div className={`text-center font-medium ${
                    currency.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {currency.change > 0 ? '+' : ''}{currency.change}%
                  </div>
                  
                  <div className="text-center">
                    {currency.trend === 'up' ? (
                      <TrendingUp size={20} className="text-green-600 mx-auto" />
                    ) : (
                      <TrendingDown size={20} className="text-red-600 mx-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8 space-y-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              مشاهده همه ارزها
            </button>
            <p className="text-sm text-muted-foreground">
              آخرین به‌روزرسانی: امروز ساعت ۱۴:۳۰
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyTable;