import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartDataPoint } from "@/lib/mockData";

interface PieChartProps {
  data: ChartDataPoint[];
  title: string;
  dataKey?: string;
}

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent-brand))",
  "hsl(var(--success))",
  "hsl(var(--warning))",
  "hsl(var(--danger))",
  "hsl(var(--muted-foreground))"
];

export function PieChart({ data, title, dataKey = "value" }: PieChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-elevated border border-border rounded-lg p-3 shadow-elegant">
          <p className="font-medium text-foreground">{`${payload[0].name}`}</p>
          <p className="text-primary font-semibold">
            {`${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-muted-foreground">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-6 text-foreground">{title}</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey={dataKey}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  className="hover:opacity-80 transition-opacity"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}