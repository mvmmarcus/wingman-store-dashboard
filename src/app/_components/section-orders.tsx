import { ArrowUpRight } from "@phosphor-icons/react";
import { Avatar, AvatarImage } from "src/shared/ui/avatar";
import { Card } from "src/shared/ui/card";

const orders = [
  {
    id: 1,
    product: "Product Name 1",
    date: "24 Apr 2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
  {
    id: 2,
    product: "Product Name 2",
    date: "24 Apr 2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
  {
    id: 3,
    product: "Product Name 3",
    date: "24 Apr 2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
  {
    id: 4,
    product: "Product Name 4",
    date: "24 Apr 2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
];

export const SectionOrders = () => {
  return (
    <Card className="flex overflow-auto rounded-md">
      <table className="w-full">
        <thead className="bg-table-header">
          <tr className="text-muted-foreground border-b text-sm">
            <th className="truncate px-6 py-4 text-left font-medium">
              Product
            </th>
            <th className="truncate px-6 py-4 text-left font-medium">Date</th>
            <th className="truncate px-6 py-4 text-left font-medium">
              Time spent
            </th>
            <th className="truncate px-6 py-4 text-left font-medium">
              Order Value
            </th>
            <th className="truncate px-6 py-4 text-left font-medium">
              Commission
            </th>
            <th className="truncate px-6 py-4 text-left font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b last:border-0">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3 truncate">
                  <Avatar>
                    <AvatarImage src="/product.png" />
                  </Avatar>
                  <span>{order.product}</span>
                </div>
              </td>
              <td className="truncate px-6 py-4">
                <div>
                  <div>{order.date}</div>
                  <div className="text-sm text-black">{order.time}</div>
                </div>
              </td>
              <td className="px-6 py-4">{order.timeSpent}</td>
              <td className="px-6 py-4">{order.orderValue}</td>
              <td className="px-6 py-4 text-base font-bold">
                {order.commission}
              </td>
              <td className="truncate px-6 py-4">
                <button className="text-gray hover:text-foreground flex items-center gap-4 text-xs">
                  View Chat
                  <ArrowUpRight size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
