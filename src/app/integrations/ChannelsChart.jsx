"use client";
import { channlesChartData, salesChartData } from "@/data/ChartsData";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
export default function ChannelsChart() {
  return (
    <article className="bg-base-100 p-5 w-fit">
      <div className="flex justify-between px-3 items-center">
        <h2 className="font-bold text-2xl">channels</h2>
        <ul className="flex justify-around items-center gap-3">
          <li className="flex gap-1 justify-center items-center">
            <div className="w-5 h-5 bg-purple-200 rounded-md"></div>
            <span className="text-sm">Under $1k</span>
          </li>
          <li className="flex gap-1 justify-center items-center">
            <div className="w-5 h-5 bg-purple-300 rounded-md"></div>
            <span className="text-sm">$1k - $3k</span>
          </li>
          <li className="flex gap-1 justify-center items-center">
            <div className="w-5 h-5 bg-purple-600 rounded-md"></div>
            <span className="text-sm"> $3k+</span>
          </li>
        </ul>
      </div>
      <LineChart
        width={400}
        height={300}
        data={channlesChartData}
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
