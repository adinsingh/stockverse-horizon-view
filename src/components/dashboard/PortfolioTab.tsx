
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PortfolioItem {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  totalValue: number;
  gain: number;
  gainPercent: number;
}

const portfolioItems: PortfolioItem[] = [
  { 
    symbol: "AAPL", 
    name: "Apple Inc.", 
    shares: 10, 
    avgCost: 165.25, 
    currentPrice: 173.05, 
    totalValue: 1730.50, 
    gain: 78.00, 
    gainPercent: 4.72 
  },
  { 
    symbol: "NVDA", 
    name: "NVIDIA Corporation", 
    shares: 5, 
    avgCost: 380.50, 
    currentPrice: 429.97, 
    totalValue: 2149.85, 
    gain: 247.35, 
    gainPercent: 13.00 
  },
  { 
    symbol: "TSLA", 
    name: "Tesla, Inc.", 
    shares: 8, 
    avgCost: 252.30, 
    currentPrice: 237.01, 
    totalValue: 1896.08, 
    gain: -122.32, 
    gainPercent: -6.06 
  },
];

const PortfolioTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Holdings</CardTitle>
        <CardDescription>Manage your stock portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2">Symbol</th>
                <th className="pb-2">Shares</th>
                <th className="pb-2">Avg Cost</th>
                <th className="pb-2">Current Price</th>
                <th className="pb-2">Total Value</th>
                <th className="pb-2">Gain/Loss</th>
              </tr>
            </thead>
            <tbody>
              {portfolioItems.map((item) => (
                <tr key={item.symbol} className="border-b">
                  <td className="py-3">
                    <div className="font-medium">{item.symbol}</div>
                    <div className="text-sm text-gray-500">{item.name}</div>
                  </td>
                  <td className="py-3">{item.shares}</td>
                  <td className="py-3">${item.avgCost.toFixed(2)}</td>
                  <td className="py-3">${item.currentPrice.toFixed(2)}</td>
                  <td className="py-3">${item.totalValue.toFixed(2)}</td>
                  <td className="py-3">
                    <div className={`flex items-center ${item.gain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.gain >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                      <span>
                        {item.gain >= 0 ? '+' : ''}${Math.abs(item.gain).toFixed(2)} ({item.gain >= 0 ? '+' : ''}{item.gainPercent.toFixed(2)}%)
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioTab;
