
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

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

const watchlistItems: WatchlistItem[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 173.05, change: 2.30, changePercent: 1.35 },
  { symbol: "MSFT", name: "Microsoft Corp", price: 327.89, change: -0.75, changePercent: -0.23 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 134.99, change: 1.47, changePercent: 1.10 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 125.78, change: -2.15, changePercent: -1.68 },
];

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

const DashboardComponent = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold text-finance-navy dark:text-white">Your Dashboard</h2>
          <p className="text-gray-500 dark:text-gray-400">Track your investments and watchlist</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <Button variant="outline" className="text-finance-navy border-finance-navy dark:text-white dark:border-white">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Set Alert
          </Button>
          <Button className="bg-finance-blue hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Investment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Portfolio Value</CardTitle>
            <CardDescription>Total investment value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$5,776.43</div>
            <div className="mt-2 flex items-center text-finance-green">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+$203.03 (3.64%)</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Day Change</CardTitle>
            <CardDescription>Today's portfolio change</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">+$42.15</div>
            <div className="mt-2 flex items-center text-finance-green">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+0.73% today</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Cash Balance</CardTitle>
            <CardDescription>Available for investment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$1,250.00</div>
            <button className="mt-2 text-finance-blue hover:underline text-sm flex items-center">
              <Plus className="h-3 w-3 mr-1" />
              Add funds
            </button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
        </TabsList>
        
        <TabsContent value="portfolio">
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
                          <div className={`flex items-center ${item.gain >= 0 ? 'text-finance-green' : 'text-finance-red'}`}>
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
        </TabsContent>
        
        <TabsContent value="watchlist">
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
                          <div className={`flex items-center ${item.change >= 0 ? 'text-finance-green' : 'text-finance-red'}`}>
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardComponent;
