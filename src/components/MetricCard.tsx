import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { MetricData, formatCurrency, formatNumber } from "@/lib/mockData";

interface MetricCardProps {
  title: string;
  data: MetricData;
  icon?: React.ComponentType<{ className?: string }>;
  prefix?: string;
}

export function MetricCard({ title, data, icon: Icon, prefix }: MetricCardProps) {
  const formatValue = (value: number | string) => {
    if (typeof value === "string") return value;
    if (prefix === "$") return formatCurrency(value);
    return formatNumber(value);
  };

  return (
    <div className="metric-card group cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
          {title}
        </h3>
        {Icon && (
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="metric-value text-3xl font-bold group-hover:scale-105 transition-transform">
          {formatValue(data.value)}
        </div>
        
        <div className="flex items-center justify-between">
          <div className={data.isPositive ? "metric-change-positive" : "metric-change-negative"}>
            {data.isPositive ? (
              <ArrowUpIcon className="h-3 w-3" />
            ) : (
              <ArrowDownIcon className="h-3 w-3" />
            )}
            <span className="text-xs font-medium">{data.change}</span>
          </div>
          <span className="text-xs text-muted-foreground">{data.period}</span>
        </div>
      </div>
    </div>
  );
}