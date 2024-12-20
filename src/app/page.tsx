"use client";
import React from "react";
import { Content } from "src/shared/ui/content";
import { Card, CardContent, CardHeader } from "src/shared/ui/card";
import { SectionMetrics } from "src/app/_components/section-metrics";
import { SectionInsights } from "src/app/_components/section-insights";
import { SectionOrders } from "src/app/_components/section-orders";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/shared/ui/select";

export default function HomePage() {
  return (
    <Content.Root>
      <Card className="overflow-x-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-12 pt-8">
          <Content.Title>At a glance</Content.Title>
          <Select defaultValue="7days">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">7 days</SelectItem>
              <SelectItem value="30days">30 days</SelectItem>
              <SelectItem value="90days">90 days</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <SectionMetrics />
        </CardContent>
        <CardHeader className="pb-12 pt-16">
          <Content.Title>Insights</Content.Title>
        </CardHeader>
        <CardContent>
          <SectionInsights />
        </CardContent>
        <CardHeader className="gap-12 pb-12 pt-16">
          <Content.Title>Orders</Content.Title>
        </CardHeader>
        <CardContent className="pb-8">
          <SectionOrders />
        </CardContent>
      </Card>
    </Content.Root>
  );
}
