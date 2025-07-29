// Mock data for ADmyBRAND Insights Analytics Dashboard

export interface MetricData {
  value: number | string;
  change: string;
  period: string;
  isPositive: boolean;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  date?: string;
}

export interface CampaignData {
  id: number;
  campaignName: string;
  startDate: string;
  endDate: string;
  budget: number;
  spend: number;
  conversions: number;
  status: 'Active' | 'Completed' | 'Paused' | 'Draft';
  channel: string;
  ctr: number;
  roi: number;
}

export const mockMetrics: Record<string, MetricData> = {
  totalRevenue: {
    value: 1254300,
    change: "+12.5%",
    period: "vs last month",
    isPositive: true
  },
  activeUsers: {
    value: 78940,
    change: "+5.2%",
    period: "vs last week",
    isPositive: true
  },
  conversions: {
    value: 15670,
    change: "+8.1%",
    period: "vs last 30 days",
    isPositive: true
  },
  growthRate: {
    value: "23.4%",
    change: "-0.3%",
    period: "YoY growth",
    isPositive: false
  }
};

export const revenueChartData: ChartDataPoint[] = [
  { name: "Jan", value: 850000, date: "2024-01" },
  { name: "Feb", value: 920000, date: "2024-02" },
  { name: "Mar", value: 1100000, date: "2024-03" },
  { name: "Apr", value: 980000, date: "2024-04" },
  { name: "May", value: 1150000, date: "2024-05" },
  { name: "Jun", value: 1254300, date: "2024-06" },
  { name: "Jul", value: 1320000, date: "2024-07" },
  { name: "Aug", value: 1180000, date: "2024-08" },
  { name: "Sep", value: 1450000, date: "2024-09" },
  { name: "Oct", value: 1390000, date: "2024-10" },
  { name: "Nov", value: 1520000, date: "2024-11" },
  { name: "Dec", value: 1680000, date: "2024-12" }
];

export const usersByChannelData: ChartDataPoint[] = [
  { name: "Organic Search", value: 32500 },
  { name: "Paid Ads", value: 18400 },
  { name: "Social Media", value: 12800 },
  { name: "Direct", value: 8900 },
  { name: "Email", value: 5340 },
  { name: "Referral", value: 3200 }
];

export const conversionSourcesData: ChartDataPoint[] = [
  { name: "Google Ads", value: 35 },
  { name: "Facebook", value: 28 },
  { name: "Organic", value: 20 },
  { name: "Email", value: 12 },
  { name: "Others", value: 5 }
];

export const campaignPerformanceData: CampaignData[] = [
  {
    id: 1,
    campaignName: "Spring Sale 2024",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    budget: 50000,
    spend: 47500,
    conversions: 1240,
    status: "Completed",
    channel: "Google Ads",
    ctr: 3.2,
    roi: 245
  },
  {
    id: 2,
    campaignName: "Summer Launch",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    budget: 75000,
    spend: 68200,
    conversions: 1890,
    status: "Active",
    channel: "Facebook",
    ctr: 2.8,
    roi: 312
  },
  {
    id: 3,
    campaignName: "Black Friday Preview",
    startDate: "2024-11-01",
    endDate: "2024-11-30",
    budget: 120000,
    spend: 0,
    conversions: 0,
    status: "Draft",
    channel: "Multi-channel",
    ctr: 0,
    roi: 0
  },
  {
    id: 4,
    campaignName: "Email Retargeting",
    startDate: "2024-05-15",
    endDate: "2024-12-31",
    budget: 25000,
    spend: 18500,
    conversions: 890,
    status: "Active",
    channel: "Email",
    ctr: 4.1,
    roi: 189
  },
  {
    id: 5,
    campaignName: "Brand Awareness",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    budget: 90000,
    spend: 90000,
    conversions: 2100,
    status: "Completed",
    channel: "Display",
    ctr: 1.9,
    roi: 278
  },
  {
    id: 6,
    campaignName: "Holiday Promo",
    startDate: "2024-12-01",
    endDate: "2024-12-25",
    budget: 80000,
    spend: 45600,
    conversions: 720,
    status: "Paused",
    channel: "Social Media",
    ctr: 2.3,
    roi: 156
  },
  {
    id: 7,
    campaignName: "Product Launch Q3",
    startDate: "2024-07-01",
    endDate: "2024-09-30",
    budget: 65000,
    spend: 62100,
    conversions: 1456,
    status: "Completed",
    channel: "Google Ads",
    ctr: 3.7,
    roi: 289
  },
  {
    id: 8,
    campaignName: "Influencer Collab",
    startDate: "2024-08-15",
    endDate: "2024-10-15",
    budget: 40000,
    spend: 38200,
    conversions: 678,
    status: "Active",
    channel: "Instagram",
    ctr: 5.2,
    roi: 234
  }
];

// Helper function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Helper function to format numbers with commas
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

// Helper function to format percentage
export const formatPercentage = (num: number): string => {
  return `${num.toFixed(1)}%`;
};

// Simulate real-time data updates
export const updateMetrics = (): Record<string, MetricData> => {
  const variance = () => (Math.random() - 0.5) * 0.1; // ±5% variance
  
  return {
    totalRevenue: {
      ...mockMetrics.totalRevenue,
      value: Math.round(1254300 * (1 + variance())),
    },
    activeUsers: {
      ...mockMetrics.activeUsers,
      value: Math.round(78940 * (1 + variance())),
    },
    conversions: {
      ...mockMetrics.conversions,
      value: Math.round(15670 * (1 + variance())),
    },
    growthRate: mockMetrics.growthRate
  };
};