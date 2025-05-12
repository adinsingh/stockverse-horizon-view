
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
         BarChart, Bar, Legend, ReferenceLine } from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, ArrowRight, ChevronRight } from "lucide-react";

const stockData = [
  { date: '2023-05-01', open: 145.0, high: 147.5, low: 144.8, close: 146.7, volume: 32000000 },
  { date: '2023-05-02', open: 146.8, high: 148.2, low: 145.9, close: 147.1, volume: 28000000 },
  { date: '2023-05-03', open: 147.0, high: 147.8, low: 143.2, close: 143.5, volume: 35000000 },
  { date: '2023-05-04', open: 143.8, high: 144.3, low: 141.0, close: 142.2, volume: 40000000 },
  { date: '2023-05-05', open: 142.5, high: 146.0, low: 142.1, close: 145.8, volume: 38000000 },
  { date: '2023-05-08', open: 146.0, high: 149.5, low: 145.5, close: 149.0, volume: 36000000 },
  { date: '2023-05-09', open: 149.2, high: 151.0, low: 148.5, close: 150.5, volume: 45000000 },
  { date: '2023-05-10', open: 149.8, high: 150.3, low: 147.2, close: 148.0, volume: 33000000 },
  { date: '2023-05-11', open: 148.2, high: 150.8, low: 147.9, close: 150.1, volume: 31000000 },
  { date: '2023-05-12', open: 150.3, high: 152.5, low: 149.8, close: 151.8, volume: 37000000 },
  { date: '2023-05-15', open: 151.5, high: 153.0, low: 150.2, close: 152.3, volume: 34000000 },
  { date: '2023-05-16', open: 152.0, high: 152.8, low: 149.0, close: 149.5, volume: 39000000 },
  { date: '2023-05-17', open: 149.0, high: 149.8, low: 145.1, close: 145.8, volume: 42000000 },
  { date: '2023-05-18', open: 146.0, high: 148.3, low: 144.7, close: 147.9, volume: 38000000 },
  { date: '2023-05-19', open: 147.5, high: 150.5, low: 147.1, close: 150.0, volume: 36000000 },
];

const volumeData = stockData.map(item => ({
  date: item.date,
  volume: item.volume / 1000000
}));

const indicators = [
  { name: "RSI", value: 65, status: "neutral", description: "Relative Strength Index measures momentum" },
  { name: "MACD", value: "Bullish", status: "positive", description: "Moving Average Convergence Divergence" },
  { name: "Moving Avg", value: "Above 200d", status: "positive", description: "Price relative to 200-day moving average" },
  { name: "Bollinger", value: "Upper Band", status: "caution", description: "Price near upper Bollinger Band" }
];

const patterns = [
  {
    name: "Bullish Engulfing",
    description: "A bullish reversal pattern that forms after a downtrend.",
    reliability: 85,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    name: "Doji",
    description: "Signals potential price reversal depending on context.",
    reliability: 68,
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    name: "Head & Shoulders",
    description: "Reversal pattern indicating a bullish-to-bearish trend change.",
    reliability: 76,
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80"
  },
];

const Trader = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-gray-900 to-finance-darkgray text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Advanced Trading Tools</h1>
              <p className="text-xl mb-6">
                Real-time data, advanced charts, and technical analysis tools for active traders.
              </p>
              <Button size="lg" className="bg-finance-red hover:bg-red-600 text-white">
                Access Trading Platform
              </Button>
            </div>
          </div>
        </div>
        
        {/* Technical Analysis */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Technical Analysis Dashboard</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <p className="text-xl text-gray-600">
                Advanced charts and indicators for precise market analysis
              </p>
              <div className="flex items-center mt-4 md:mt-0 space-x-4">
                <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
                  <span className="font-bold mr-2">AAPL</span>
                  <span className="text-finance-green flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +1.35%
                  </span>
                </div>
                <Button variant="outline">Change Symbol</Button>
              </div>
            </div>
          </div>
          
          <Card className="mb-12">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Price Chart - AAPL</CardTitle>
                  <CardDescription>Daily candlestick chart with volume</CardDescription>
                </div>
                <div className="flex space-x-2">
                  {["1D", "1W", "1M", "3M", "6M", "1Y"].map((period) => (
                    <Button key={period} variant="outline" size="sm" className="text-xs">
                      {period}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-96">
                {/* This is a placeholder for a candlestick chart */}
                <ResponsiveContainer width="100%" height="70%">
                  <AreaChart
                    data={stockData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Price']}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Area type="monotone" dataKey="close" stroke="#E53935" fill="#E53935" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
                
                <ResponsiveContainer width="100%" height="30%">
                  <BarChart data={volumeData} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" hide />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}M`, 'Volume']} />
                    <Bar dataKey="volume" fill="#607D8B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-4 border-t">
                {indicators.map((indicator) => (
                  <div key={indicator.name} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{indicator.name}</span>
                      <span 
                        className={`text-sm font-medium ${
                          indicator.status === 'positive' ? 'text-finance-green' :
                          indicator.status === 'negative' ? 'text-finance-red' : 
                          'text-finance-yellow'
                        }`}
                      >
                        {indicator.value}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{indicator.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Trading Strategies */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trading Strategies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven approaches used by professional traders to maximize potential returns.
              </p>
            </div>
            
            <Tabs defaultValue="day" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="day">Day Trading</TabsTrigger>
                <TabsTrigger value="swing">Swing Trading</TabsTrigger>
                <TabsTrigger value="position">Position Trading</TabsTrigger>
              </TabsList>
              
              <TabsContent value="day">
                <Card>
                  <CardHeader>
                    <CardTitle>Day Trading Strategies</CardTitle>
                    <CardDescription>Short-term trading strategies focused on intraday price movements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        {
                          name: "Scalping",
                          description: "Profit from small price changes with multiple quick trades throughout the day.",
                          timeframe: "Minutes",
                          risk: "High",
                          features: [
                            "Requires full-time attention",
                            "Focus on high-volume stocks",
                            "Typically 5-10 second to few minutes per trade",
                            "Relies on technical indicators and Level 2 quotes"
                          ]
                        },
                        {
                          name: "Momentum Trading",
                          description: "Capitalize on strong price movements with heavy volume in a specific direction.",
                          timeframe: "Hours",
                          risk: "Medium-High",
                          features: [
                            "Trade stocks making significant moves",
                            "Use volume as confirmation",
                            "Set clear entry and exit points",
                            "Focus on news catalysts"
                          ]
                        }
                      ].map((strategy) => (
                        <div key={strategy.name} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h3 className="text-xl font-medium mb-2">{strategy.name}</h3>
                          <p className="text-gray-600 mb-4">{strategy.description}</p>
                          <div className="flex space-x-4 mb-4">
                            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Timeframe:</span> {strategy.timeframe}
                            </div>
                            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Risk Level:</span> {strategy.risk}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {strategy.features.map((feature, i) => (
                              <div key={i} className="flex items-start">
                                <svg className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <Button className="bg-finance-red hover:bg-red-600 text-white w-full">
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="swing">
                <Card>
                  <CardHeader>
                    <CardTitle>Swing Trading Strategies</CardTitle>
                    <CardDescription>Medium-term strategies capturing price movements over days to weeks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        {
                          name: "Breakout Trading",
                          description: "Enter positions when price breaks through resistance levels with increased volume.",
                          timeframe: "Days to Weeks",
                          risk: "Medium",
                          features: [
                            "Identify key support and resistance levels",
                            "Look for volume confirmation on breakouts",
                            "Use stop loss orders to manage risk",
                            "Target next resistance level for profit taking"
                          ]
                        },
                        {
                          name: "Pullback Strategy",
                          description: "Buy during temporary price retracements within an established uptrend.",
                          timeframe: "Days to Weeks",
                          risk: "Medium",
                          features: [
                            "Identify strong uptrending stocks",
                            "Wait for pullback to support level or moving average",
                            "Look for reversal candlestick patterns",
                            "Set stop loss below support level"
                          ]
                        }
                      ].map((strategy) => (
                        <div key={strategy.name} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h3 className="text-xl font-medium mb-2">{strategy.name}</h3>
                          <p className="text-gray-600 mb-4">{strategy.description}</p>
                          <div className="flex space-x-4 mb-4">
                            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Timeframe:</span> {strategy.timeframe}
                            </div>
                            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Risk Level:</span> {strategy.risk}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {strategy.features.map((feature, i) => (
                              <div key={i} className="flex items-start">
                                <svg className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <Button className="bg-finance-red hover:bg-red-600 text-white w-full">
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="position">
                <Card>
                  <CardHeader>
                    <CardTitle>Position Trading Strategies</CardTitle>
                    <CardDescription>Longer-term strategies focused on major trends over weeks to months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        {
                          name: "Trend Following",
                          description: "Identify and follow major market trends until reversal signals appear.",
                          timeframe: "Weeks to Months",
                          risk: "Medium-Low",
                          features: [
                            "Use longer-term moving averages (50, 100, 200-day)",
                            "Track ADX indicator for trend strength",
                            "Enter on pullbacks within established trends",
                            "Trail stops as trend develops"
                          ]
                        },
                        {
                          name: "Sector Rotation",
                          description: "Shift investments to sectors expected to outperform in current economic cycle.",
                          timeframe: "Months",
                          risk: "Medium",
                          features: [
                            "Understand business cycle phases",
                            "Track sector performance and momentum",
                            "Use relative strength analysis",
                            "Monitor economic indicators for rotation signals"
                          ]
                        }
                      ].map((strategy) => (
                        <div key={strategy.name} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h3 className="text-xl font-medium mb-2">{strategy.name}</h3>
                          <p className="text-gray-600 mb-4">{strategy.description}</p>
                          <div className="flex space-x-4 mb-4">
                            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Timeframe:</span> {strategy.timeframe}
                            </div>
                            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Risk Level:</span> {strategy.risk}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {strategy.features.map((feature, i) => (
                              <div key={i} className="flex items-start">
                                <svg className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <Button className="bg-finance-red hover:bg-red-600 text-white w-full">
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Candlestick Patterns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Essential Candlestick Patterns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn to recognize powerful chart patterns that can signal potential price movements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patterns.map((pattern) => (
              <Card key={pattern.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pattern.image}
                    alt={pattern.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{pattern.name}</CardTitle>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-finance-red h-2.5 rounded-full" 
                      style={{ width: `${pattern.reliability}%` }}
                    ></div>
                  </div>
                  <CardDescription className="text-sm">{pattern.reliability}% reliability rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{pattern.description}</p>
                  <Button variant="outline" className="w-full">View Pattern Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-finance-red hover:bg-red-600 text-white">
              View Complete Pattern Library <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Risk Management */}
        <div className="bg-red-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start space-x-6">
              <div className="hidden md:block">
                <AlertCircle className="h-16 w-16 text-finance-red" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Risk Management</h2>
                <p className="text-xl mb-6">
                  Essential practices to protect your capital and trade responsibly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2">Position Sizing</h3>
                    <p>Never risk more than 1-2% of your trading capital on a single trade. Calculate your position size based on your stop loss level.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2">Stop Loss Orders</h3>
                    <p>Always use stop loss orders to protect against larger-than-expected losses. Place stops at logical technical levels.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2">Risk-Reward Ratio</h3>
                    <p>Aim for trades with at least a 1:2 risk-reward ratio. Don't enter trades where potential loss exceeds potential gain.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2">Trading Journal</h3>
                    <p>Maintain a detailed trading journal to track your decisions, outcomes, and lessons learned from each trade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Trader;
