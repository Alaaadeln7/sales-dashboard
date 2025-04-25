import { Filter } from "lucide-react";

export default function OrderTableHeader() {
  return (
    <header className="flex justify-between items-center px-3 ">
      <h3 className="font-bold text-2xl">Orders</h3>
      <div className="flex gap-5">
        <button className="btn btn-soft">
          <Filter className="size-4" /> Filter
        </button>
        <button className="btn btn-soft  btn-primary">View all</button>
      </div>
    </header>
  );
}
