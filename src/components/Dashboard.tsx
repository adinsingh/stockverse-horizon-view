
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, TrendingDown, AlertTriangle, Calculator, PieChart, Search } from "lucide-react";
import { useState } from "react";

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

const DashboardComponent = () => {
  const [sipAmount, setSipAmount] = useState<number>(5000);
  const [sipYears, setSipYears] = useState<number>(10);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipResult, setSipResult] = useState<number | null>(null);

  const calculateSIP = () => {
    const monthlyRate = sipRate / 12 / 100;
    const months = sipYears * 12;
    const futureValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    setSipResult(Math.round(futureValue));
  };

  return (
    <div className="p-6">
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

      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          <TabsTrigger value="mutual-funds">Mutual Funds</TabsTrigger>
          <TabsTrigger value="sip-calculator">SIP Calculator</TabsTrigger>
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
        </TabsContent>

        <TabsContent value="mutual-funds">
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
        </TabsContent>

        <TabsContent value="sip-calculator">
          <Card>
            <CardHeader>
              <CardTitle>SIP Calculator</CardTitle>
              <CardDescription>Calculate your future investment value</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Monthly Investment (₹)</label>
                    <input 
                      type="number" 
                      value={sipAmount}
                      onChange={(e) => setSipAmount(Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Time Period (Years)</label>
                    <input 
                      type="number" 
                      value={sipYears}
                      onChange={(e) => setSipYears(Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Expected Return Rate (%)</label>
                    <input 
                      type="number" 
                      value={sipRate}
                      onChange={(e) => setSipRate(Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <Button onClick={calculateSIP} className="w-full bg-teal-600 hover:bg-teal-700">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
                  <div className="text-teal-700 text-lg mb-2">Future Value</div>
                  {sipResult !== null ? (
                    <>
                      <div className="text-3xl font-bold mb-4">₹{sipResult.toLocaleString()}</div>
                      <div className="text-sm text-gray-500 text-center">
                        <p>Total Investment: ₹{(sipAmount * sipYears * 12).toLocaleString()}</p>
                        <p>Estimated Returns: ₹{(sipResult - (sipAmount * sipYears * 12)).toLocaleString()}</p>
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-500">Enter values and click calculate</div>
                  )}
                  <div className="mt-4 flex items-center">
                    <PieChart className="h-4 w-4 text-teal-600 mr-2" />
                    <span className="text-sm">Visualization coming soon!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardComponent;
