import { TrendDown, TrendUp } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader } from "src/shared/ui/card";

interface CardProps {
  title: string;
  icon: React.ElementType;
}

const data = [
  {
    change: "+15%",
    increase: true,
    description:
      "fforecasted increase in your sales closed by the end of the current month",
  },
  {
    change: "+20%",
    increase: true,
    description:
      "forecasted increase in your sales closed by the end of the current month",
  },
];

export const ForecastsCard = (item: CardProps) => {
  return (
    <Card className="text-sidebar-accent-foreground flex flex-1 bg-[url(/card-bg.png)] bg-cover bg-center bg-no-repeat">
      <CardHeader className="flex flex-row items-center gap-2 pb-0 text-xs">
        <item.icon weight="fill" />
        {item.title}
      </CardHeader>
      <CardContent className="flex h-full flex-row items-center py-6 text-white">
        <div className="flex flex-col items-center justify-between gap-10">
          {data.map((item) => (
            <div key={item.change} className="flex flex-col gap-5">
              <div className="flex justify-between gap-2">
                <span className="text-[56px] font-medium leading-none">
                  {item.change}
                </span>
                {item.increase ? (
                  <TrendUp size={35} />
                ) : (
                  <TrendDown size={35} />
                )}
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
