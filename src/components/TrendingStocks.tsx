
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

type TrendingStock = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
};

const trendingStocks: TrendingStock[] = [
  { symbol: "NVDA", name: "NVIDIA Corporation", price: 429.97, change: 12.33, changePercent: 2.95, volume: "42.5M" },
  { symbol: "AMD", name: "Advanced Micro Devices", price: 158.76, change: 5.22, changePercent: 3.40, volume: "31.2M" },
  { symbol: "AAPL", name: "Apple Inc.", price: 173.05, change: 2.30, changePercent: 1.35, volume: "58.7M" },
  { symbol: "TSLA", name: "Tesla, Inc.", price: 237.01, change: 5.87, changePercent: 2.54, volume: "35.9M" },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 327.89, change: -0.75, changePercent: -0.23, volume: "18.3M" },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 125.78, change: -2.15, changePercent: -1.68, volume: "45.1M" }
];

const TrendingStocks = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-finance-navy dark:text-white">Trending Stocks</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Most active stocks being watched by investors today</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingStocks.map((stock) => (
            <Card key={stock.symbol} className="overflow-hidden border-t-4 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700" 
                  style={{ borderTopColor: stock.change >= 0 ? '#4CAF50' : '#E53935' }}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{stock.symbol}</span>
                    <CardTitle className="text-xl">{stock.name}</CardTitle>
                  </div>
                  {stock.change >= 0 ? (
                    <TrendingUp className="h-6 w-6 text-finance-green" />
                  ) : (
                    <TrendingDown className="h-6 w-6 text-finance-red" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-2 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-2xl">${stock.price.toFixed(2)}</span>
                    <span className={`flex items-center font-medium ${
                      stock.change >= 0 ? 'text-finance-green' : 'text-finance-red'
                    }`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
                    <span>Volume: {stock.volume}</span>
                    <span className="cursor-pointer text-finance-blue hover:underline">View details →</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingStocks;
