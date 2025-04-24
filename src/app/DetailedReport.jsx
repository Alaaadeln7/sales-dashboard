import { Download, EllipsisVertical, ListFilter } from "lucide-react";

export default function DetailedReport() {
  return (
    <section className="bg-base-100 rounded-xl p-5 mt-5">
      <header className="flex justify-between items-center px-5">
        <h1 className="font-bold text-3xl">Detailed report</h1>
        <div className="flex gap-5">
          <button className="btn btn-ghost">
            <ListFilter className="size-5" />
          </button>
          <button className="btn btn-primary">
            <Download className="size-5" />
            Export
          </button>
        </div>
      </header>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="uppercase">Items</th>
              <th className="uppercase">values</th>
              <th className="uppercase">DELIVERED TO</th>
              <th className="uppercase">DATE</th>
              <th className="uppercase">STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Laboris officia veniam</td>
                <td>$6,496</td>
                <td>Austin</td>
                <td>25/11/2023</td>
                <td>
                  <p className="bg-amber-50 text-amber-600 rounded-2xl p-1 text-center">
                    In progress
                  </p>
                </td>
                <td>
                  <button className="btn btn-ghost">
                    <EllipsisVertical className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
