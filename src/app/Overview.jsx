"use client";
import { DollarSign, LayoutDashboard, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import OverviewCard from "./OverviewCard";

export default function Overview() {
  const [date, setDate] = useState();
  return (
    <section className="bg-base-100 rounded-sm">
      <header className="flex justify-between items-center px-3 my-3">
        <h1 className="flex gap-3 items-center justify-center text-3xl">
          <LayoutDashboard />
          <span className="font-bold">Overview</span>
        </h1>
        <div>
          <button
            popoverTarget="rdp-popover"
            className="input input-border"
            style={{ anchorName: "--rdp" }}
          >
            {date ? date.toLocaleDateString() : "Pick a date"}
          </button>
          <div
            popover="auto"
            id="rdp-popover"
            className="dropdown"
            style={{ positionAnchor: "--rdp" }}
          >
            <DayPicker
              className="react-day-picker"
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
        </div>
      </header>
      <div className="flex justify-around items-center gap-3 flex-wrap">
        <OverviewCard
          title={"Turnover"}
          number={1200}
          incremment={2.4}
          icon={<ShoppingBag />}
          bg={"bg-blue-100"}
          color={"bg-blue-500"}
        />
        <OverviewCard
          title={"profit"}
          number={2000}
          incremment={1.4}
          icon={<DollarSign />}
          bg={"bg-cyan-100"}
          color={"bg-cyan-500"}
        />
        <OverviewCard
          title={"new customer"}
          number={4000}
          incremment={34.4}
          icon={<User />}
          bg={"bg-purple-100"}
          color={"bg-purple-500"}
        />
      </div>
    </section>
  );
}
