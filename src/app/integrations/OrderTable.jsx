import Image from "next/image";
import OrderTableHeader from "./OrderTableHeader";
import image from "../../../public/avatar.jpg";
import { ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-react";
export default function OrderTable() {
  return (
    <article className="bg-base-100 p-5">
      <OrderTableHeader />
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-10">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => (
              <tr key={i}>
                <th className="flex justify-around gap-2">
                  <Image
                    src={image}
                    alt={"image"}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h5>product name</h5>
                    <span className="font-thin">$5000</span>
                  </div>
                </th>
                <td>4</td>
                <td>$9000</td>
                <td>new</td>
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

      <div className="join gap-2 flex justify-end">
        <button className="join-item btn btn-soft btn-primary btn-circle">
          <ChevronLeft className="size-5" />
        </button>
        <button className="join-item btn btn-soft btn-primary btn-circle">
          1
        </button>
        <button className="join-item btn btn-soft btn-primary btn-circle">
          2
        </button>
        <button className="join-item btn btn-soft btn-primary btn-circle btn-disabled">
          ...
        </button>
        <button className="join-item btn btn-soft btn-primary btn-circle">
          99
        </button>
        <button className="join-item btn btn-soft btn-primary btn-circle">
          100
        </button>
        <button className="join-item btn btn-soft btn-primary btn-circle">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </article>
  );
}
