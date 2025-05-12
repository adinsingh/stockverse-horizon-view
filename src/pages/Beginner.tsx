
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, PenTool, GraduationCap } from "lucide-react";

const Beginner = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Stock Market Basics</h1>
              <p className="text-xl mb-6">
                Start your investment journey with easy-to-understand guides and resources designed for beginners.
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Learning
              </Button>
            </div>
          </div>
        </div>
        
        {/* Learning resources */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Learning Resources</h2>
          
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="guides" className="flex items-center justify-center">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Guides</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center justify-center">
                <Play className="h-4 w-4 mr-2" />
                <span>Videos</span>
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="flex items-center justify-center">
                <PenTool className="h-4 w-4 mr-2" />
                <span>Tutorials</span>
              </TabsTrigger>
              <TabsTrigger value="glossary" className="flex items-center justify-center">
                <GraduationCap className="h-4 w-4 mr-2" />
                <span>Glossary</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "What is a Stock?",
                    description: "Learn what stocks are and how they represent ownership in a company.",
                    level: "Beginner"
                  },
                  {
                    title: "How to Buy Your First Stock",
                    description: "Step-by-step guide to making your first stock purchase.",
                    level: "Beginner"
                  },
                  {
                    title: "Understanding Stock Markets",
                    description: "Learn how stock exchanges work and how prices are determined.",
                    level: "Beginner"
                  },
                  {
                    title: "Types of Investment Accounts",
                    description: "Explore different account types for investing in the stock market.",
                    level: "Beginner"
                  },
                  {
                    title: "Understanding Risk & Return",
                    description: "Learn about the relationship between investment risk and potential returns.",
                    level: "Intermediate"
                  },
                  {
                    title: "Diversification Basics",
                    description: "Why you shouldn't put all your eggs in one basket.",
                    level: "Beginner"
                  }
                ].map((guide, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{guide.title}</CardTitle>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">{guide.level}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{guide.description}</CardDescription>
                      <Button variant="link" className="p-0 text-finance-blue hover:text-finance-navy">Read Guide →</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Stock Market for Beginners",
                    description: "A simple explanation of how the stock market works.",
                    duration: "10:25",
                    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=500&q=80"
                  },
                  {
                    title: "How to Read Stock Charts",
                    description: "Learn the basics of reading and understanding stock price charts.",
                    duration: "15:32",
                    thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=500&q=80"
                  },
                  {
                    title: "Understanding Stock Valuations",
                    description: "Learn how to determine if a stock is overvalued or undervalued.",
                    duration: "12:15",
                    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=500&q=80"
                  },
                  {
                    title: "Creating Your First Portfolio",
                    description: "How to build a balanced portfolio as a beginner investor.",
                    duration: "18:45",
                    thumbnail: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=500&q=80"
                  }
                ].map((video, i) => (
                  <div key={i} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                    <div className="relative">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="rounded-full bg-white/80 p-3 cursor-pointer hover:bg-white transition-colors">
                          <Play className="h-8 w-8 text-finance-blue" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-2">{video.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                      <Button variant="link" className="p-0 text-finance-blue hover:text-finance-navy">Watch Video →</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tutorials">
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <p className="text-gray-600">Interactive tutorials to help you learn by doing</p>
                </div>
                
                {[
                  {
                    title: "Stock Trading Simulator",
                    description: "Practice buying and selling stocks in a risk-free environment with virtual money.",
                    steps: 5,
                    difficulty: "Easy",
                    timeToComplete: "30 mins"
                  },
                  {
                    title: "Build Your First Portfolio",
                    description: "Step-by-step guidance to create a diversified investment portfolio.",
                    steps: 7,
                    difficulty: "Medium",
                    timeToComplete: "45 mins"
                  },
                  {
                    title: "Reading Financial Statements",
                    description: "Learn how to analyze a company's balance sheet, income statement, and cash flow.",
                    steps: 6,
                    difficulty: "Medium",
                    timeToComplete: "60 mins"
                  }
                ].map((tutorial, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="md:w-3/4">
                          <h3 className="text-xl font-medium mb-2">{tutorial.title}</h3>
                          <p className="text-gray-600 mb-4">{tutorial.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div><span className="font-medium">{tutorial.steps}</span> Steps</div>
                            <div><span className="font-medium">{tutorial.difficulty}</span> Difficulty</div>
                            <div><span className="font-medium">{tutorial.timeToComplete}</span> Time</div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center">
                          <Button className="bg-finance-green hover:bg-green-600 text-white">
                            Start Tutorial
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="glossary">
              <Card>
                <CardHeader>
                  <CardTitle>Stock Market Glossary</CardTitle>
                  <CardDescription>Essential terms every beginner should know</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {[
                      { term: "Stock", definition: "A share in the ownership of a company." },
                      { term: "Dividend", definition: "A portion of a company's earnings paid to shareholders." },
                      { term: "Bull Market", definition: "A market condition where prices are rising or expected to rise." },
                      { term: "Bear Market", definition: "A market condition where prices are falling or expected to fall." },
                      { term: "P/E Ratio", definition: "Price-to-Earnings ratio, a measure of stock valuation." },
                      { term: "Market Cap", definition: "The total value of a company's outstanding shares." },
                      { term: "Volume", definition: "The number of shares traded during a given time period." },
                      { term: "Volatility", definition: "The rate at which the price of a security increases or decreases." },
                      { term: "ETF", definition: "Exchange-Traded Fund, a type of investment fund traded on stock exchanges." },
                      { term: "Blue Chip", definition: "A large, well-established, and financially sound company." }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-gray-200 pb-3">
                        <div className="font-medium">{item.term}</div>
                        <div className="text-sm text-gray-600">{item.definition}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline">View Full Glossary</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Getting started steps */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Get Started</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow these simple steps to begin your investment journey with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Learn the Basics",
                  description: "Understand the fundamentals of the stock market and investment principles.",
                  icon: <BookOpen className="h-8 w-8 text-finance-green" />
                },
                {
                  step: 2,
                  title: "Set Up an Account",
                  description: "Choose a brokerage platform and complete your account setup.",
                  icon: <PenTool className="h-8 w-8 text-finance-blue" />
                },
                {
                  step: 3,
                  title: "Start Small & Diversify",
                  description: "Begin with a small investment amount and spread it across different assets.",
                  icon: <GraduationCap className="h-8 w-8 text-finance-red" />
                }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
                      Step {item.step}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-finance-navy hover:bg-blue-900 text-white">
                Get Your Free Starter Guide
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Beginner;
