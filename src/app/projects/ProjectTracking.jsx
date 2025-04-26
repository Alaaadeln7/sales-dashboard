import { BadgeCheck, CircleAlert, Play, Plus } from "lucide-react";
import React from "react";
import CardInfoProject from "./CardInfoProject";
import { statusColors } from "@/constants";
import { File } from "lucide-react";
export default function ProjectTracking() {
  return (
    <section>
      <header className="flex justify-between items-center px-10 my-10">
        <h1 className="font-bold text-2xl">Project tracking</h1>
        <button className="btn btn-primary">
          <Plus className="size-5" />
          <span className="sm:flex hidden">new Project</span>
        </button>
      </header>
      <div className="flex justify-center items-center flex-wrap gap-3 mt-10">
        {/* {Array.from({ length: 4 }).map((_, i) => ( */}
        <CardInfoProject
          status={"new"}
          title={"new"}
          number={12}
          icon={<File className="size-5" />}
        />
        <CardInfoProject
          status={"progress"}
          title={"Is progress"}
          number={25}
          icon={<Play className="size-5" />}
        />
        <CardInfoProject
          status={"completed"}
          title={"completed"}
          number={16}
          icon={<BadgeCheck className="size-5" />}
        />
        <CardInfoProject
          status={"pending"}
          title={"pending"}
          number={15}
          icon={<CircleAlert className="size-5" />}
        />
        {/* ))} */}
      </div>
    </section>
  );
}
