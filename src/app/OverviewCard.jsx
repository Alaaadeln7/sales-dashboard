import { ChevronUp, ShoppingBag } from "lucide-react";
import React from "react";

export default function OverviewCard({
  title,
  number,
  incremment,
  icon,
  bg,
  color,
  textColor,
}) {
  return (
    <div
      className={`${bg} rounded-2xl max-w-6/12 sm:max-w-12/12 py-4 px-4 mt-4`}
    >
      <header className="flex justify-between items-center">
        <h3 className={`font-bold ${textColor}`}>{title}</h3>
        <button className={`btn btn-primary outline-none border-none ${color}`}>
          {icon}
        </button>
      </header>
      <h1 className="font-bold text-3xl">{number}</h1>

      <div className="flex justify-center items-end gap-2 my-5 mx-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-10 h-20 ${color}`}
            style={{ height: `${(i + 1) * 20}px` }}
          ></div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-3">
        <p className="text-green-600 flex items-center justify-center">
          <ChevronUp className="size-4 inline" />
          <span>{incremment}%</span>
        </p>
        <p className="font-thin text-base-400">preiod of changes</p>
      </div>
    </div>
  );
}
