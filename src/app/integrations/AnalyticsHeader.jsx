"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
export default function AnalyticsHeader() {
  const [date, setDate] = useState();

  return (
    <header className="flex justify-between items-center flex-wrap px-5 my-5">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Analytics overview</h1>
        <time
          className="text-sm justify-end bg-purple-100 text-purple-600 rounded-2xl p-2"
          datetime="Oct 20, 2022"
        >
          Today: Oct 20, 2022{" "}
        </time>
      </div>
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
  );
}
