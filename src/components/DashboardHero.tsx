import { useState, useEffect } from "react";
import { Sparkles, TrendingUp, Users, Target, DollarSign } from "lucide-react";
import heroImage from "@/assets/dashboard-hero.jpg";

export function DashboardHero() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-brand p-8 text-white shadow-glow mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent-brand/90" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium text-blue-100">
                Live Analytics Dashboard
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Welcome to ADmyBRAND Insights
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              Your AI-powered analytics command center. Real-time insights, 
              predictive analytics, and data-driven decisions at your fingertips.
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-blue-100">
              {currentTime.toLocaleDateString()}
            </div>
            <div className="text-2xl font-bold">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm text-blue-100">Revenue Growth</div>
                <div className="text-xl font-bold">+12.5%</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm text-blue-100">Active Users</div>
                <div className="text-xl font-bold">78.9K</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm text-blue-100">Conversions</div>
                <div className="text-xl font-bold">15.7K</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <DollarSign className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm text-blue-100">Revenue</div>
                <div className="text-xl font-bold">$1.25M</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-brand/20 rounded-full blur-2xl" />
    </div>
  );
}