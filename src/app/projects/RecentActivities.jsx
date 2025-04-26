import React from "react";
import AvatarClient from "./AvatarClient";

export default function RecentActivities() {
  return (
    <article className="bg-base-100 rounded-2xl p-5">
      <h1 className="text-xl font-bold">Recent activities</h1>
      <h4 className="font-thin uppercase">today</h4>
      <div className="flex flex-col gap-3">
        {Array.from({ length: 2 }).map((item) => (
          <>
            <AvatarClient />
            <div className="bg-base-300 rounded-2xl p-5">
              <h4 className="font-semibold">comment on project</h4>
              <p className="text-base-400">Tempor enim ipsum quis adipisici</p>
            </div>
          </>
        ))}
      </div>
    </article>
  );
}
