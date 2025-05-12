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
            {/* Aditya Narayan Singh */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <User className="h-32 w-32 text-gray-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Aditya Narayan Singh</h3>
                <p className="text-gray-600 mb-4">Co-Founder & Market Strategist</p>

                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    aditya@investzen.com
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Linkedin className="h-4 w-4 mr-2" />
                    linkedin.com/aditya
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Twitter className="h-4 w-4 mr-2" />
                    @aditya_invest
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ankit Singhania */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <User className="h-32 w-32 text-gray-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Ankit Singhania</h3>
                <p className="text-gray-600 mb-4">Co-Founder & Tech Lead</p>

                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    ankit@investzen.com
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Linkedin className="h-4 w-4 mr-2" />
                    linkedin.com/ankit
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Twitter className="h-4 w-4 mr-2" />
                    @ankit_codes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Original (Optional: rename to "InvestZen Team" or leave as yourself) */}
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

          {/* Existing About Text Section */}
          <div className="mt-16 md:mt-20 md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 text-teal-700 dark:text-teal-500">About Us</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="mb-4 text-lg">
                We are a team of passionate individuals dedicated to simplifying the investment journey for everyone. 
                With a blend of market expertise, technical skill, and a user-focused approach, we aim to build a platform 
                that empowers users with confidence, clarity, and the tools they need to succeed in the financial world.
              </p>
              {/* ... rest of your content unchanged ... */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutMe;

