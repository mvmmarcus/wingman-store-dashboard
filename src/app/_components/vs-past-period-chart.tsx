"use client";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "src/shared/ui/chart";
import { Card, CardContent, CardHeader } from "src/shared/ui/card";

const chartData = [
  {
    day: "This week",
    consultations: 70,
    orders_closed: 60,
  },
  {
    day: "Last week",
    consultations: 55,
    orders_closed: 50,
  },
];

const chartConfig = {
  consultations: {
    label: "Consultations",
  },
  orders_closed: {
    label: "Orders closed",
  },
} satisfies ChartConfig;

interface CardProps {
  title: string;
  icon: React.ElementType;
}

export const VsPastPeriodChart = (item: CardProps) => {
  return (
    <Card className="text-third flex flex-1">
      <CardHeader className="flex flex-row items-center gap-2 pb-6 text-xs">
        <item.icon weight="fill" />
        {item.title}
      </CardHeader>
      <CardContent className="h-full pb-6 text-[32px] font-medium text-black">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ComposedChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={16}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={16}
              domain={[10, "80"]}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent gap={4} />} />

            <Bar
              dataKey="consultations"
              fill="var(--secondary)"
              barSize={32}
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="orders_closed"
              fill="var(--sidebar-border)"
              barSize={32}
              radius={[6, 6, 0, 0]}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
