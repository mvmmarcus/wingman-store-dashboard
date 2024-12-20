"use client";
import { ChartBar, ChatTeardrop } from "@phosphor-icons/react";
import React from "react";

import { ConsultationsChart } from "src/app/_components/consultations-chart";
import { ForecastsCard } from "src/app/_components/forecasts-card";
import { VsPastPeriodChart } from "src/app/_components/vs-past-period-chart";

const data = [
  {
    title: "CONSULTATIONS",
    icon: ChatTeardrop,
  },
  {
    title: "VS PAST PERIOD",
    icon: ChartBar,
  },
  {
    title: "FORECASTS",
    icon: ChatTeardrop,
  },
];

export function SectionInsights() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:h-[455px] xl:grid-cols-4">
      <div className="col-span-1 flex w-full md:col-span-2">
        <ConsultationsChart {...data[0]} />
      </div>
      <div className="col-span-1 flex w-full flex-1">
        <VsPastPeriodChart {...data[1]} />
      </div>
      <div className="col-span-1 flex w-full flex-1">
        <ForecastsCard {...data[2]} />
      </div>
    </div>
  );
}
