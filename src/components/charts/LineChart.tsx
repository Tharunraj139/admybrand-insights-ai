import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint, formatCurrency } from "@/lib/mockData";

interface LineChartProps {
  data: ChartDataPoint[];
  title: string;
  dataKey?: string;
  color?: string;
}

export function LineChart({ 
  data, 
  title, 
  dataKey = "value", 
  color = "hsl(var(--primary))" 
}: LineChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-elevated border border-border rounded-lg p-3 shadow-elegant">
          <p className="font-medium text-foreground">{`${label}`}</p>
          <p className="text-primary font-semibold">
            {`Revenue: ${formatCurrency(payload[0].value)}`}
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
          <RechartsLineChart data={data}>
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
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              dot={{ 
                fill: color, 
                strokeWidth: 2, 
                r: 4,
                stroke: "hsl(var(--background))"
              }}
              activeDot={{ 
                r: 6, 
                stroke: color,
                strokeWidth: 2,
                fill: "hsl(var(--background))"
              }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}