import React, { FC, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { Item } from "../types/item";
import { useItemList } from "../hooks/useItemList";
import { RowSelection } from "@tanstack/react-table";

type NewItem = {
  name: string;
  profit: number;
};

type Props = {
  items?: Item[];
};

export const BarGraph: FC<Props> = (props) => {
  const { items = [] } = props;

  const [newItems, setNewItems] = useState<NewItem[]>([]);

  useEffect(() => {
    const itemsData: NewItem[] = items.map((item) => ({
      name: item.name,
      profit: Math.floor(
        (item.price * 0.9 - item.cost - item.postage) * item.unitSales
      ),
    }));
    setNewItems(itemsData);
  }, [items]);

  return (
    <div>
      <h1>売上グラフ(商品ごと)</h1>
      <ResponsiveContainer width={1200} height={600}>
        <BarChart data={newItems}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={70}
            dy={0}
            dx={4}
            height={200}
            interval={0}
            fontSize={10}
            limitingConeAngle={90}
            textAnchor="start"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="profit" fill="#8884d8" width={1000} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
