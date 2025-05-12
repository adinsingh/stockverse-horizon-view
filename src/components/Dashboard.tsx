
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardStats from "./dashboard/DashboardStats";
import PortfolioTab from "./dashboard/PortfolioTab";
import WatchlistTab from "./dashboard/WatchlistTab";
import MutualFundsTab from "./dashboard/MutualFundsTab";
import SIPCalculator from "./dashboard/SIPCalculator";

const DashboardComponent = () => {
  return (
    <div className="p-6">
      <DashboardHeader />
      <DashboardStats />

      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          <TabsTrigger value="mutual-funds">Mutual Funds</TabsTrigger>
          <TabsTrigger value="sip-calculator">SIP Calculator</TabsTrigger>
        </TabsList>
        
        <TabsContent value="portfolio">
          <PortfolioTab />
        </TabsContent>
        
        <TabsContent value="watchlist">
          <WatchlistTab />
        </TabsContent>

        <TabsContent value="mutual-funds">
          <MutualFundsTab />
        </TabsContent>

        <TabsContent value="sip-calculator">
          <SIPCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardComponent;
