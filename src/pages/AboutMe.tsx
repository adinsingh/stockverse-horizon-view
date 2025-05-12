
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-teal-800 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to InvestZen!</h1>
              <p className="text-xl mb-6">
                Your trusted partner for smart, informed investment choices.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <User className="h-32 w-32 text-gray-400" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-gray-600 mb-4">Founder & Finance Expert</p>
                  
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" className="justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      contact@investzen.com
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Linkedin className="h-4 w-4 mr-2" />
                      linkedin.com/investzen
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Twitter className="h-4 w-4 mr-2" />
                      @investzen
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Globe className="h-4 w-4 mr-2" />
                      www.investzen.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-teal-700 dark:text-teal-500">About Me</h2>
              <div className="prose max-w-none dark:prose-invert">
                <p className="mb-4 text-lg">
                  Hello, I'm John Doe, the creator and manager behind InvestZen. I'm passionate about helping individuals take control 
                  of their financial future through smart, informed investment choices. Whether you're just starting out in the stock 
                  market or you're a seasoned investor, InvestZen is designed to be your go-to platform for learning, growing, and making 
                  confident investment decisions.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal-700 dark:text-teal-500">My Journey in the Stock Market</h3>
                <p className="mb-4">
                  I've spent over 10 years studying the stock market and financial markets. Over the years, I've gained a deep 
                  understanding of how investments work and the tools that can help investors achieve their financial goals. I realized 
                  there was a gap in the market for a platform that offers a user-friendly, educational, and all-in-one solution for both 
                  beginners and advanced traders. That's why I created InvestZen.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal-700 dark:text-teal-500">Our Mission</h3>
                <p className="mb-4">
                  At InvestZen, our mission is to provide a trusted space where people can not only track and manage their investments but 
                  also learn and grow in their financial journey. I believe that everyone should have access to the knowledge and tools 
                  necessary to make informed decisions about their money.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal-700 dark:text-teal-500">Why InvestZen?</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="mb-2">
                    <span className="font-semibold">User-Friendly:</span> InvestZen is designed with both beginners and experienced investors 
                    in mind, ensuring everyone has an easy-to-use experience.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Educational Resources:</span> We provide articles, tutorials, and guides to help you better 
                    understand the complexities of the stock market.
                  </li>
                  <li>
                    <span className="font-semibold">Real-Time Tools:</span> From portfolio tracking to live market news and SIP calculators, we 
                    aim to keep you updated and make your investing experience seamless.
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal-700 dark:text-teal-500">Get In Touch</h3>
                <p className="mb-4">
                  If you have any questions, feedback, or just want to chat about investing, feel free to reach out to me. 
                  I'm always happy to hear from you and help in any way I can!
                </p>
                
                <p className="mt-8 font-medium">
                  Thank you for being a part of the InvestZen community!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
