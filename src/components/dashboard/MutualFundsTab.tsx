
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface MutualFundItem {
  name: string;
  category: string;
  nav: number;
  change: number;
  oneYearReturn: number;
  threeYearReturn: number;
  fiveYearReturn: number;
  risk: "Low" | "Moderate" | "High";
}

const mutualFunds: MutualFundItem[] = [
  { 
    name: "Vanguard Total Stock Market Index", 
    category: "Large Blend", 
    nav: 115.23, 
    change: 0.45, 
    oneYearReturn: 12.5, 
    threeYearReturn: 8.7, 
    fiveYearReturn: 10.2, 
    risk: "Moderate" 
  },
  { 
    name: "Fidelity Blue Chip Growth", 
    category: "Large Growth", 
    nav: 156.78, 
    change: 0.67, 
    oneYearReturn: 15.3, 
    threeYearReturn: 12.1, 
    fiveYearReturn: 14.5, 
    risk: "Moderate" 
  },
  { 
    name: "T. Rowe Price Small-Cap Value", 
    category: "Small Value", 
    nav: 52.41, 
    change: -0.32, 
    oneYearReturn: 8.7, 
    threeYearReturn: 6.2, 
    fiveYearReturn: 7.8, 
    risk: "High" 
  }
];

const MutualFundsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mutual Funds</CardTitle>
        <CardDescription>Your mutual fund investments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2">Fund Name</th>
                <th className="pb-2">Category</th>
                <th className="pb-2">NAV</th>
                <th className="pb-2">1Y Return</th>
                <th className="pb-2">3Y Return</th>
                <th className="pb-2">5Y Return</th>
                <th className="pb-2">Risk</th>
                <th className="pb-2">Compare</th>
              </tr>
            </thead>
            <tbody>
              {mutualFunds.map((fund, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 font-medium">{fund.name}</td>
                  <td className="py-3">{fund.category}</td>
                  <td className="py-3">${fund.nav.toFixed(2)}</td>
                  <td className={`py-3 ${fund.oneYearReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {fund.oneYearReturn}%
                  </td>
                  <td className={`py-3 ${fund.threeYearReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {fund.threeYearReturn}%
                  </td>
                  <td className={`py-3 ${fund.fiveYearReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {fund.fiveYearReturn}%
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs 
                      ${fund.risk === 'Low' ? 'bg-green-100 text-green-800' : 
                        fund.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}
                    >
                      {fund.risk}
                    </span>
                  </td>
                  <td className="py-3">
                    <Button variant="outline" size="sm" className="text-xs">Compare</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="flex items-center">
            <Search className="h-4 w-4 mr-1" />
            Explore More Funds
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MutualFundsTab;
