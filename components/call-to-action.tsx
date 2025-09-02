import { Button } from "@/components/ui/button"
import { Plus, Star, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
import { AddBusinessModal } from "@/components/add-business-modal"
import { LoginModal } from "./login-modal";

export function CallToAction() {
  const [showAddBusiness, setShowAddBusiness] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="py-10 bg-gradient-to-r from-blue-600 to-green-600 text-white">
       <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Grow Your Business online?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join over thousands of successful businesses already listed on Cricaismus and start attracting more local customers today - completely free to get started!
            </p>
           
          </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="text-center space-y-2">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Reach More Customers</h3>
              <p className="text-sm opacity-80">Connect with local customers searching for your business and services through our free directory listings</p>
             
            </div>
              <div className="text-center space-y-2">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Build Your Reputation</h3>
              <p className="text-sm opacity-80">
                Collect customer reviews and showcase your quality services to attract more potential clients.
               
              </p>
            </div>

           <div className="text-center space-y-2">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Grow Your Business</h3>
              <p className="text-sm opacity-80">Increase visibility and drive more traffic to your business</p>
            </div>
          </div>

          <div className="pt-2">
            <Button
              size="lg"
              onClick={() => setShowAddBusiness(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 text-base px-6 py-2 transition-all duration-300 hover:scale-[1.02]"
            >
              <Plus className="h-5 w-5 mr-2" strokeWidth={2.5} />
              Add Your Business Now - It's Free!
            </Button>

            <div className="h-10">
              <LoginModal open={showLogin} onOpenChange={setShowLogin} />
              <AddBusinessModal open={showAddBusiness} onOpenChange={setShowAddBusiness} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}