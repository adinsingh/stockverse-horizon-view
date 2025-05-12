
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronRight, TrendingUp, TrendingDown, Info, BarChart2, PieChart } from "lucide-react";

const investmentData = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 1050 },
  { name: 'Mar', value: 1030 },
  { name: 'Apr', value: 1080 },
  { name: 'May', value: 1070 },
  { name: 'Jun', value: 1110 },
  { name: 'Jul', value: 1150 },
  { name: 'Aug', value: 1190 },
  { name: 'Sep', value: 1220 },
  { name: 'Oct', value: 1280 },
  { name: 'Nov', value: 1320 },
  { name: 'Dec', value: 1400 },
];

const stockAnalysis = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 173.05,
    change: 2.30,
    changePercent: 1.35,
    pe: 28.4,
    dividend: 0.92,
    marketCap: "2.7T",
    analyst: "Buy",
    rating: 4.2
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 327.89,
    change: -0.75,
    changePercent: -0.23,
    pe: 32.6,
    dividend: 0.83,
    marketCap: "2.4T",
    analyst: "Strong Buy",
    rating: 4.5
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 125.78,
    change: -2.15,
    changePercent: -1.68,
    pe: 58.7,
    dividend: 0,
    marketCap: "1.3T",
    analyst: "Buy",
    rating: 4.0
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 134.99,
    change: 1.47,
    changePercent: 1.10,
    pe: 25.3,
    dividend: 0,
    marketCap: "1.7T",
    analyst: "Buy",
    rating: 4.1
  }
];

const Investor = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Long-Term Investing</h1>
              <p className="text-xl mb-6">
                Access in-depth analysis tools and resources to build a robust investment portfolio for the future.
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Explore Investment Tools
              </Button>
            </div>
          </div>
        </div>
        
        {/* Market Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Market Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track major market indices and economic indicators that impact your investment decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "S&P 500", value: "4,587.64", change: "+0.62%", trend: "up" },
              { name: "Nasdaq", value: "14,346.02", change: "+0.89%", trend: "up" },
              { name: "Dow Jones", value: "35,390.15", change: "-0.17%", trend: "down" }
            ].map((index) => (
              <Card key={index.name} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle>{index.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{index.value}</span>
                    <div className={`flex items-center ${index.trend === 'up' ? 'text-finance-green' : 'text-finance-red'}`}>
                      {index.trend === 'up' ? <TrendingUp className="h-5 w-5 mr-1" /> : <TrendingDown className="h-5 w-5 mr-1" />}
                      <span className="font-medium">{index.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Investment Growth Simulation</CardTitle>
              <CardDescription>Projected growth of a $1,000 investment with 8% annual return</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={investmentData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Value']} />
                    <Area type="monotone" dataKey="value" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>This simulation is for illustrative purposes only and does not represent actual investment results.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Stock Analysis */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fundamental Analysis</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth data to help you evaluate stocks for long-term investment potential.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="pb-4">Company</th>
                        <th className="pb-4">Price</th>
                        <th className="pb-4">Change</th>
                        <th className="pb-4">P/E Ratio</th>
                        <th className="pb-4">Dividend Yield</th>
                        <th className="pb-4">Market Cap</th>
                        <th className="pb-4">Analyst Rating</th>
                        <th className="pb-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {stockAnalysis.map((stock) => (
                        <tr key={stock.symbol} className="border-b">
                          <td className="py-4">
                            <div className="font-medium">{stock.symbol}</div>
                            <div className="text-sm text-gray-500">{stock.name}</div>
                          </td>
                          <td className="py-4">${stock.price.toFixed(2)}</td>
                          <td className={`py-4 ${stock.change >= 0 ? 'text-finance-green' : 'text-finance-red'}`}>
                            <div className="flex items-center">
                              {stock.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                              <span>
                                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                              </span>
                            </div>
                          </td>
                          <td className="py-4">{stock.pe}</td>
                          <td className="py-4">{stock.dividend > 0 ? `${(stock.dividend * 100 / stock.price).toFixed(2)}%` : 'N/A'}</td>
                          <td className="py-4">{stock.marketCap}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-finance-blue h-2.5 rounded-full" style={{ width: `${stock.rating * 20}%` }}></div>
                              </div>
                              <span>{stock.analyst}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 text-center">
                  <Button>View More Companies</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Investment Strategies */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Strategies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approaches to long-term wealth building through strategic investing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Value Investing",
                description: "Find stocks trading below their intrinsic value for long-term growth potential.",
                icon: <BarChart2 className="h-8 w-8 text-finance-blue" />,
                features: [
                  "Focus on fundamentals like P/E ratio and book value",
                  "Look for companies with strong competitive advantages",
                  "Invest with a margin of safety",
                  "Hold investments for 5+ years"
                ]
              },
              {
                title: "Dividend Growth",
                description: "Build a portfolio of stocks that consistently increase dividend payments.",
                icon: <PieChart className="h-8 w-8 text-finance-green" />,
                features: [
                  "Select companies with history of dividend increases",
                  "Focus on dividend yield and payout ratio",
                  "Reinvest dividends for compound growth",
                  "Target sectors known for stable dividends"
                ]
              }
            ].map((strategy, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-blue-50 rounded-lg">
                      {strategy.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{strategy.title}</CardTitle>
                      <CardDescription className="mt-1">{strategy.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strategy.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full bg-finance-blue hover:bg-blue-700 text-white">
                      Learn This Strategy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <Info className="h-10 w-10 text-finance-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Personalized Portfolio Assessment</h3>
                    <p className="text-gray-700 mb-4">
                      Get a detailed analysis of your current investments and recommendations for optimization based on your goals and risk tolerance.
                    </p>
                    <Button className="bg-finance-blue hover:bg-blue-700 text-white">
                      Start Assessment <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investor;
