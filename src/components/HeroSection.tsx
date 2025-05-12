
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart2, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-finance-navy to-finance-blue text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Your journey in the stock market starts here
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg">
              Whether you're a beginner, long-term investor, or active trader, StockVerse provides the tools and insights you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-finance-green hover:bg-green-600 text-white">
                Get Started
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10">
                Explore Features
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            {/* Stylized card display */}
            <div className="relative">
              <div className="absolute top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 transform rotate-2">
                <div className="flex items-center mb-2">
                  <BarChart2 className="h-5 w-5 text-finance-green mr-2" />
                  <h3 className="font-semibold">Market Overview</h3>
                </div>
                <div className="h-32 bg-gradient-to-b from-finance-green/20 to-transparent rounded-lg"></div>
              </div>
              
              <div className="absolute -top-8 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 transform -rotate-3">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-5 w-5 text-finance-yellow mr-2" />
                  <h3 className="font-semibold">Learning Resources</h3>
                </div>
                <div className="h-24 bg-gradient-to-b from-finance-yellow/20 to-transparent rounded-lg"></div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 mt-16">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-finance-lightblue mr-2" />
                  <h3 className="text-xl font-semibold">Live Trading Data</h3>
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-white/20 rounded-md"></div>
                  <div className="h-8 bg-white/20 rounded-md"></div>
                  <div className="h-8 bg-white/20 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
