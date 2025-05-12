
import { useState, useEffect } from 'react';

type Stock = {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
};

const mockStocks: Stock[] = [
  { symbol: "AAPL", price: 173.05, change: 2.30, changePercent: 1.35 },
  { symbol: "MSFT", price: 327.89, change: -0.75, changePercent: -0.23 },
  { symbol: "GOOGL", price: 134.99, change: 1.47, changePercent: 1.10 },
  { symbol: "AMZN", price: 125.78, change: -2.15, changePercent: -1.68 },
  { symbol: "TSLA", price: 237.01, change: 5.87, changePercent: 2.54 },
  { symbol: "META", price: 301.74, change: 3.21, changePercent: 1.08 },
  { symbol: "NVDA", price: 430.51, change: 10.24, changePercent: 2.44 },
  { symbol: "JPM", price: 146.43, change: -0.23, changePercent: -0.16 },
  { symbol: "V", price: 235.67, change: 0.89, changePercent: 0.38 },
  { symbol: "JNJ", price: 162.05, change: -1.45, changePercent: -0.89 }
];

const StockTicker = () => {
  const [stocks, setStocks] = useState(mockStocks);

  // Simulate periodic price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStocks = stocks.map(stock => {
        // Random small price change
        const priceChange = (Math.random() * 2 - 1) * 0.5; // Between -0.5 and 0.5
        const newPrice = +(stock.price + priceChange).toFixed(2);
        const newChange = +(stock.change + priceChange).toFixed(2);
        const newChangePercent = +((newChange / (stock.price - stock.change)) * 100).toFixed(2);
        return { ...stock, price: newPrice, change: newChange, changePercent: newChangePercent };
      });
      setStocks(updatedStocks);
    }, 5000);

    return () => clearInterval(interval);
  }, [stocks]);

  return (
    <div className="ticker-container bg-teal-700 text-white py-2 overflow-hidden">
      <div className="ticker-content flex items-center">
        {/* Duplicate the content to make the loop smooth */}
        {[...stocks, ...stocks].map((stock, index) => (
          <div
            key={`${stock.symbol}-${index}`}
            className="flex items-center mx-4 transition-all duration-300 hover:scale-105"
          >
            <span className="font-semibold">{stock.symbol}</span>
            <span className="mx-1">${stock.price.toFixed(2)}</span>
            <span 
              className={`ml-1 ${
                stock.change >= 0 ? 'text-green-300' : 'text-red-300'
              }`}
            >
              {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;
