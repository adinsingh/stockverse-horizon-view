
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, BarChart2 } from "lucide-react";

const UserTypeSelector = () => {
  const userTypes = [
    {
      id: "beginner",
      title: "For Beginners",
      description: "Start your investment journey with simplified educational resources and guided tutorials.",
      icon: <BookOpen className="h-8 w-8 text-finance-green" />,
      features: ["Stock Market Basics", "Beginner-Friendly Tutorials", "Investment Terminology", "Low-Risk Strategies"],
      color: "bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-800 dark:to-slate-800 border-green-200 dark:border-green-900",
      buttonColor: "bg-finance-green hover:bg-green-600",
      path: "/beginner"
    },
    {
      id: "investor",
      title: "For Investors",
      description: "Access in-depth analysis tools and resources for long-term portfolio planning.",
      icon: <TrendingUp className="h-8 w-8 text-finance-blue" />,
      features: ["Company Fundamentals", "Portfolio Management", "Dividend Tracking", "Long-Term Strategies"],
      color: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-slate-800 border-blue-200 dark:border-blue-900",
      buttonColor: "bg-finance-blue hover:bg-blue-700",
      path: "/investor"
    },
    {
      id: "trader",
      title: "For Traders",
      description: "Get real-time trading data and advanced technical analysis tools.",
      icon: <BarChart2 className="h-8 w-8 text-finance-red" />,
      features: ["Real-Time Charts", "Technical Indicators", "Trading Strategies", "Pattern Recognition"],
      color: "bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-800 dark:to-slate-800 border-red-200 dark:border-red-900",
      buttonColor: "bg-finance-red hover:bg-red-700",
      path: "/trader"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-finance-navy dark:text-white">Choose Your Path</h2>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            StockVerse adapts to your experience level, providing the right tools and information for your financial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type) => (
            <Card key={type.id} className={`${type.color} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {type.icon}
                </div>
                <CardTitle className="text-2xl text-center">{type.title}</CardTitle>
                <CardDescription className="text-center">{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link to={type.path}>
                  <Button className={`${type.buttonColor} text-white`}>
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelector;
