"use client";
import { salesChartData } from "@/data/ChartsData";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function SalesChart() {
  return (
    <article className="bg-base-100 w-fit p-5">
      <h1 className="font-bold text-2xl">sales</h1>
      <LineChart
        width={400}
        height={300}
        data={salesChartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </article>
  );
}
