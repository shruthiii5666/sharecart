import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Box, TrendingUp, ShoppingCart } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Logo / Icon */}
      <div className="bg-purple-100 rounded-full p-4 mb-6">
        <ShoppingCart className="h-10 w-10 text-purple-600" />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">
        Sharecart
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-center max-w-xl mb-10">
        Connect with vendors, share surplus, and turn excess inventory into
        profit with our streamlined marketplace.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-12">
        <Card className="shadow-md p-6 flex flex-col items-center text-center">
          <Box className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Easy Listing</h3>
          <p className="text-gray-500 text-sm">
            Add your surplus products in minutes
          </p>
        </Card>

        <Card className="shadow-md p-6 flex flex-col items-center text-center">
          <Users className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Vendor Network</h3>
          <p className="text-gray-500 text-sm">
            Connect with verified vendors
          </p>
        </Card>

        <Card className="shadow-md p-6 flex flex-col items-center text-center">
          <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Maximize Profit</h3>
          <p className="text-gray-500 text-sm">
            Turn surplus into revenue
          </p>
        </Card>
      </div>

      <Button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700">
        Get Started
      </Button>
      <Button className="px-6 py-2 rounded-lg shadow border border-gray-300 text-gray-800 bg-white hover:bg-gray-100">
        Sign In
      </Button>
    </div>
  );
}
