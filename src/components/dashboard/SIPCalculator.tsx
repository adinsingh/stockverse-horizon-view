
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, PieChart } from "lucide-react";

const SIPCalculator = () => {
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
  );
};

export default SIPCalculator;
