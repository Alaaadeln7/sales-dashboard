import { Calendar, Filter } from "lucide-react";
import Image from "next/image";
import image from "../../../public/avatar.jpg";
export default function TaskTrackingTable() {
  return (
    <div className="w-10/12">
      <div className="flex justify-between items-center px-5">
        <nav>
          <ul className="flex justify-center gap-3 items-center">
            <li>
              <button className="btn btn-ghost">New</button>
            </li>
            <li>
              <button className="btn btn-ghost">In progress</button>
            </li>
            <li>
              <button className="btn btn-ghost">Completed</button>
            </li>
          </ul>
        </nav>
        <button className="btn btn-soft">
          <Filter className="size-5" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table bg-base-100 p-5 m-3">
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={i}>
                <th>Task title</th>
                <td>
                  <progress
                    className="progress w-26 text-primary"
                    value="70"
                    max="100"
                  ></progress>
                </td>
                <td className="p-1 text-center text-red-500 bg-red-50 rounded-md ">
                  high
                </td>
                <td className="flex">
                  <Calendar className="size-5" />
                  13/04/2020
                </td>
                <td>
                  <Image
                    src={image}
                    alt="image"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
