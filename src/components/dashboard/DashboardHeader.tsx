
import { Button } from "@/components/ui/button";
import { AlertTriangle, Plus } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
      <div>
        <h2 className="text-2xl font-bold text-teal-700 dark:text-white">Your Dashboard</h2>
        <p className="text-gray-500 dark:text-gray-400">Track your investments and watchlist</p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center space-x-2">
        <Button variant="outline" className="text-teal-700 border-teal-700 dark:text-white dark:border-white">
          <AlertTriangle className="h-4 w-4 mr-2" />
          Set Alert
        </Button>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Investment
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
