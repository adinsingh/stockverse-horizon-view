
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Plus } from "lucide-react";

interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const watchlistItems: WatchlistItem[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 173.05, change: 2.30, changePercent: 1.35 },
  { symbol: "MSFT", name: "Microsoft Corp", price: 327.89, change: -0.75, changePercent: -0.23 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 134.99, change: 1.47, changePercent: 1.10 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 125.78, change: -2.15, changePercent: -1.68 },
];

const WatchlistTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Watchlist</CardTitle>
        <CardDescription>Stocks you're monitoring</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2">Symbol</th>
                <th className="pb-2">Name</th>
                <th className="pb-2">Price</th>
                <th className="pb-2">Change</th>
                <th className="pb-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchlistItems.map((item) => (
                <tr key={item.symbol} className="border-b">
                  <td className="py-3 font-medium">{item.symbol}</td>
                  <td className="py-3">{item.name}</td>
                  <td className="py-3">${item.price.toFixed(2)}</td>
                  <td className="py-3">
                    <div className={`flex items-center ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                      <span>
                        {item.change >= 0 ? '+' : ''}${Math.abs(item.change).toFixed(2)} ({item.change >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </td>
                  <td className="py-3">
                    <Button variant="outline" size="sm" className="text-xs">Buy</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="flex items-center">
            <Plus className="h-4 w-4 mr-1" />
            Add to Watchlist
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WatchlistTab;
