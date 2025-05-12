
import Navigation from "@/components/Navigation";
import StockTicker from "@/components/StockTicker";
import HeroSection from "@/components/HeroSection";
import TrendingStocks from "@/components/TrendingStocks";
import NewsSection from "@/components/NewsSection";
import UserTypeSelector from "@/components/UserTypeSelector";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <StockTicker />
      
      <main className="flex-grow">
        <HeroSection />
        <TrendingStocks />
        <NewsSection />
        <UserTypeSelector />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
