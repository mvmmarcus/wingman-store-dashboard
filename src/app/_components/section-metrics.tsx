"use client";
import {
  ChatTeardrop,
  CheckFat,
  Coin,
  Coins,
  PiggyBank,
  Tag,
  TrendDown,
  TrendUp,
} from "@phosphor-icons/react";
import React from "react";

import { Card, CardContent, CardFooter, CardHeader } from "src/shared/ui/card";

const data = [
  {
    title: "CONSULTATIONS",
    value: "24",
    change: 15,
    increased: true,
    icon: ChatTeardrop,
  },
  {
    title: "ORDERS PLACED",
    value: "12",
    change: 15,
    increased: false,
    icon: Tag,
  },
  {
    title: "CONVERSION",
    value: "50%",
    change: 15,
    increased: false,
    icon: CheckFat,
  },
  {
    title: "TOTAL SALES VALUE",
    value: "$2,400",
    change: 15,
    increased: true,
    icon: Coins,
  },
  {
    title: "AVG ORDER VALUE",
    value: "$240",
    change: 15,
    increased: true,
    icon: Coin,
  },
  {
    title: "COMMISSION PAID",
    value: "$240",
    change: 15,
    increased: true,
    icon: PiggyBank,
  },
];

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  increased: boolean;
  icon: React.ElementType;
}

const MetricCard = (item: MetricCardProps) => {
  return (
    <Card className="text-third">
      <CardHeader className="flex flex-row items-center gap-2 text-xs">
        <item.icon weight="fill" />
        {item.title}
      </CardHeader>
      <CardContent className="text-[32px] font-medium text-black">
        {item.value}
      </CardContent>
      <CardFooter className="flex flex-row items-center gap-2 text-sm">
        {item.increased ? (
          <TrendUp size={24} className="fill-success" />
        ) : (
          <TrendDown size={24} className="fill-error" />
        )}
        <span className={item.increased ? "text-success" : "text-error"}>
          {item.change}% {item.increased ? " increase" : " decrease"}
        </span>
      </CardFooter>
    </Card>
  );
};

export function SectionMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <MetricCard key={item.value} {...item} />
      ))}
    </div>
  );
}
