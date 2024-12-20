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
    day: "Mon",
    experts_online: 20,
    consultations_answered: 50,
    consultations_incoming: 30,
  },
  {
    day: "Tue",
    experts_online: 25,
    consultations_answered: 60,
    consultations_incoming: 40,
  },
  {
    day: "Wed",
    experts_online: 22,
    consultations_answered: 40,
    consultations_incoming: 35,
  },
  {
    day: "Thu",
    experts_online: 28,
    consultations_answered: 70,
    consultations_incoming: 50,
  },
  {
    day: "Fri",
    experts_online: 30,
    consultations_answered: 90,
    consultations_incoming: 60,
  },
  {
    day: "Sat",
    experts_online: 35,
    consultations_answered: 80,
    consultations_incoming: 55,
  },
  {
    day: "Sun",
    experts_online: 38,
    consultations_answered: 85,
    consultations_incoming: 65,
  },
];

const chartConfig = {
  consultations_incoming: {
    label: "Incoming",
  },
  experts_online: {
    label: "Experts online",
  },
  consultations_answered: {
    label: "Answered",
  },
} satisfies ChartConfig;

interface ChartCardProps {
  title: string;
  icon: React.ElementType;
}

export const ConsultationsChart = (item: ChartCardProps) => {
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
              label={{
                value: "CONSULTATIONS",
                angle: -90,
                fontSize: 8,
                fill: "var(--gray-light)",
                dx: -26,
              }}
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              tickMargin={16}
            />

            <YAxis
              label={{
                value: "EXPERTS ONLINE",
                angle: -90,
                fill: "var(--gray-light)",
                fontSize: 8,
                dx: 26,
              }}
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={16}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />

            <Bar
              dataKey="experts_online"
              fill="var(--yellow)"
              yAxisId="right"
              barSize={32}
              radius={[6, 6, 0, 0]}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="consultations_incoming"
              stroke="#8A94A6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="consultations_answered"
              stroke="#15B79F"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
