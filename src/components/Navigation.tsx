
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Bell, User } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-finance-navy shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-finance-blue">Stock<span className="text-finance-green">Verse</span></span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-finance-navy hover:bg-finance-lightgray">Home</Link>
              <Link to="/beginner" className="px-3 py-2 rounded-md text-sm font-medium text-finance-navy hover:bg-finance-lightgray">For Beginners</Link>
              <Link to="/investor" className="px-3 py-2 rounded-md text-sm font-medium text-finance-navy hover:bg-finance-lightgray">For Investors</Link>
              <Link to="/trader" className="px-3 py-2 rounded-md text-sm font-medium text-finance-navy hover:bg-finance-lightgray">For Traders</Link>
            </div>
          </div>

          {/* Desktop Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                className="pl-10 pr-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finance-blue focus:border-transparent"
                type="search"
                placeholder="Search stocks..."
              />
            </div>
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-finance-navy" />
            </Button>
            
            <Link to="/dashboard">
              <Button variant="outline" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-finance-blue hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-finance-navy shadow-md">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-finance-navy hover:bg-finance-lightgray">Home</Link>
          <Link to="/beginner" className="block px-3 py-2 rounded-md text-base font-medium text-finance-navy hover:bg-finance-lightgray">For Beginners</Link>
          <Link to="/investor" className="block px-3 py-2 rounded-md text-base font-medium text-finance-navy hover:bg-finance-lightgray">For Investors</Link>
          <Link to="/trader" className="block px-3 py-2 rounded-md text-base font-medium text-finance-navy hover:bg-finance-lightgray">For Traders</Link>
          
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="mt-3 px-2 space-y-1">
              <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-finance-navy hover:bg-finance-lightgray">Dashboard</Link>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finance-blue focus:border-transparent"
                type="search"
                placeholder="Search stocks..."
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
