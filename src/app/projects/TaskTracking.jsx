import { Plus } from "lucide-react";
import TaskTrackingTable from "./TaskTrackingTable";
import RecentActivities from "./RecentActivities";

export default function TaskTracking() {
  return (
    <section>
      <header className="flex justify-between items-center px-10 my-10">
        <h1 className="font-bold text-2xl">Task tracking</h1>
        <button className="btn btn-primary">
          <Plus className="size-5" />
          <span className="sm:flex hidden">new task</span>
        </button>
      </header>
      <div className="flex gap-2 sm:flex-wrap md:flex-nowrap">
        <TaskTrackingTable />
        <RecentActivities />
      </div>
    </section>
  );
}
