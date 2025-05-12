
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DashboardComponent from "@/components/Dashboard";
import StockTicker from "@/components/StockTicker";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <StockTicker />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <DashboardComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
