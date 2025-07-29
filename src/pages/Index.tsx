import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { DashboardHero } from "@/components/DashboardHero";
import { MetricCard } from "@/components/MetricCard";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import { DataTable } from "@/components/DataTable";
import {
  mockMetrics,
  revenueChartData,
  usersByChannelData,
  conversionSourcesData,
  updateMetrics
} from "@/lib/mockData";
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp, 
  RefreshCw 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [metrics, setMetrics] = useState(mockMetrics);
  const [isUpdating, setIsUpdating] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(updateMetrics());
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setMetrics(updateMetrics());
      setIsUpdating(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        {/* Hero Section */}
        <DashboardHero />

        {/* Metrics Cards */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Key Metrics</h2>
            <p className="text-muted-foreground">Monitor your business performance in real-time</p>
          </div>
          <Button 
            onClick={handleRefresh}
            variant="outline"
            size="sm"
            disabled={isUpdating}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isUpdating ? 'animate-spin' : ''}`} />
            Refresh Data
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <MetricCard
              title="Total Revenue"
              data={metrics.totalRevenue}
              icon={DollarSign}
              prefix="$"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <MetricCard
              title="Active Users"
              data={metrics.activeUsers}
              icon={Users}
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <MetricCard
              title="Conversions"
              data={metrics.conversions}
              icon={Target}
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <MetricCard
              title="Growth Rate"
              data={metrics.growthRate}
              icon={TrendingUp}
            />
          </div>
        </div>

        {/* Charts Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Analytics Overview</h2>
          
          {/* First Row - Revenue Chart */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <LineChart
              data={revenueChartData}
              title="Monthly Revenue Trend"
              color="hsl(var(--primary))"
            />
          </div>

          {/* Second Row - Two Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <BarChart
                data={usersByChannelData}
                title="Users by Channel"
                color="hsl(var(--accent-brand))"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <PieChart
                data={conversionSourcesData}
                title="Conversion Sources Distribution"
              />
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <DataTable title="Campaign Performance" />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
