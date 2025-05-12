
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="hover:shadow-md transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Portfolio Value</CardTitle>
          <CardDescription>Total investment value</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$5,776.43</div>
          <div className="mt-2 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+$203.03 (3.64%)</span>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Day Change</CardTitle>
          <CardDescription>Today's portfolio change</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">+$42.15</div>
          <div className="mt-2 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+0.73% today</span>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Cash Balance</CardTitle>
          <CardDescription>Available for investment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$1,250.00</div>
          <button className="mt-2 text-teal-600 hover:underline text-sm flex items-center">
            <Plus className="h-3 w-3 mr-1" />
            Add funds
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
