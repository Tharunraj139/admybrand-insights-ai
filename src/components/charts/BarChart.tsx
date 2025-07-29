import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint, formatNumber } from "@/lib/mockData";

interface BarChartProps {
  data: ChartDataPoint[];
  title: string;
  dataKey?: string;
  color?: string;
}

export function BarChart({ 
  data, 
  title, 
  dataKey = "value", 
  color = "hsl(var(--primary))" 
}: BarChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-elevated border border-border rounded-lg p-3 shadow-elegant">
          <p className="font-medium text-foreground">{`${label}`}</p>
          <p className="text-primary font-semibold">
            {`Users: ${formatNumber(payload[0].value)}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-6 text-foreground">{title}</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ left: 20, right: 20 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
              opacity={0.3}
            />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey={dataKey} 
              fill={color}
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}