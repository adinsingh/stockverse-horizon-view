
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DashboardComponent from "@/components/Dashboard";
import StockTicker from "@/components/StockTicker";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <StockTicker />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <DashboardComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
