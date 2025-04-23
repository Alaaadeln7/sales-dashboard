import { Search } from "lucide-react";
import Pagination from "./Pagination";
import Overview from "./Overview";
import DetailedReport from "./DetailedReport";

export default function Home() {
  return (
    <main className="container bg-base-200">
      <header className="flex justify-between items-center px-2 mt-10">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <form>
          <div className="form-controled bg-base-100 flex py-3 px-2 rounded-sm">
            <Search className="size-5" />
            <input
              type="search"
              className="bg-transparent outline-none border-none px-2 placeholder:text-base-400 placeholder:italic"
              placeholder="Search...."
            />
          </div>
        </form>
      </header>
      <Overview />
      <DetailedReport />
      <Pagination />
    </main>
  );
}
