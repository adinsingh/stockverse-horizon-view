
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DashboardComponent from "@/components/Dashboard";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
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
