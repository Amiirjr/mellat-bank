import NotificationBar from "@/components/NotificationBar";
import MainNavigation from "@/components/MainNavigation";
import HeroBanner from "@/components/HeroBanner";
import ServiceCards from "@/components/ServiceCards";
import NewsSection from "@/components/NewsSection";
import CurrencyTable from "@/components/CurrencyTable";
import AffiliatedCompanies from "@/components/AffiliatedCompanies";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NotificationBar />
      <div className="pt-32"></div>
      <MainNavigation />
      <HeroBanner />
      <ServiceCards />
      <NewsSection />
      <CurrencyTable />
      <AffiliatedCompanies />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
