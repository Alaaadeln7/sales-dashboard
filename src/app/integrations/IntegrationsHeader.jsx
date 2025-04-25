import Image from "next/image";
import avatarImage from "../../../public/avatar.jpg";
import { Bell, CircleHelp, Search } from "lucide-react";

export default function IntegrationsHeader() {
  return (
    <header className="w-12/12 flex justify-between items-center px-5 py-3 bg-base-100">
      <form className="w-5/12">
        <div className="justify-start items-center bg-base-300 px-3 sm:flex hidden">
          <Search className="size-5" />
          <input
            type="search"
            className="w-full border-none outline-none p-3 bg-transparent placeholder:italic placeholder:text-base-400"
            placeholder="search..."
          />
        </div>
      </form>
      <div className="flex justify-center items-center">
        <button className="btn btn-ghost">
          <Bell className="size-5" />
        </button>
        <button className="btn btn-ghost">
          <CircleHelp className="size-5" />
        </button>
        <button className="btn btn-ghost">
          <Image
            src={avatarImage}
            alt="avatar image"
            className="w-10 h-10 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}
