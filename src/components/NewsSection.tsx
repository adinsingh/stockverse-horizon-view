
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type NewsItem = {
  id: number;
  title: string;
  source: string;
  timeAgo: string;
  imageUrl: string;
  category: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Federal Reserve Signals Potential Rate Cuts as Inflation Eases",
    source: "Financial Times",
    timeAgo: "2 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Economy"
  },
  {
    id: 2,
    title: "Tech Giants Rally as AI Investments Drive Quarterly Earnings",
    source: "Bloomberg",
    timeAgo: "3 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Technology"
  },
  {
    id: 3,
    title: "Global Supply Chain Challenges Persist Amid Geopolitical Tension",
    source: "Wall Street Journal",
    timeAgo: "5 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Global Markets"
  },
  {
    id: 4,
    title: "Renewable Energy Stocks Surge Following New Climate Legislation",
    source: "Reuters",
    timeAgo: "1 day ago",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Energy Sector"
  }
];

const NewsSection = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-finance-navy dark:text-white">Breaking Financial News</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Stay updated with the latest financial news and market insights</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
                <div className="sm:col-span-1">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="sm:col-span-2">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-finance-lightgray text-finance-navy">{news.category}</span>
                      <CardDescription>{news.timeAgo}</CardDescription>
                    </div>
                    <CardTitle className="text-lg mt-2 line-clamp-2">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{news.source}</span>
                      <span className="text-finance-blue hover:underline cursor-pointer text-sm">Read more →</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="text-finance-blue hover:text-finance-navy dark:hover:text-blue-300 transition-colors font-medium">
            View All News Articles →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
