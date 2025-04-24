import Avatar from "@/components/Avatar";
import Logo from "@/components/Logo";
import {
  Bell,
  ChartPie,
  FolderKanban,
  Handshake,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  Workflow,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="md:w-3/12 sm:2/12 shadow px-2 h-screen bg-base-100 relative">
      <Logo />
      <div className="mt-10">
        <h1 className="text-md font-semibold sm:block hidden">Working space</h1>
        <ul className="space-y-4 flex flex-col items-start mt-5">
          <li className="w-full">
            <button className="btn w-full btn-ghost justify-start hover:bg-primary hover:text-base-100">
              <LayoutDashboard className="size-5" />{" "}
              <span className="sm:block hidden"> Dashboard</span>
            </button>
          </li>
          <li className="w-full">
            <button className="btn w-full btn-ghost justify-start hover:bg-primary hover:text-base-100">
              <FolderKanban className="size-5" />

              <span className="sm:block hidden"> Projects</span>
            </button>
          </li>
          <li className="w-full">
            <button className="btn w-full btn-ghost justify-start hover:bg-primary hover:text-base-100">
              <ChartPie className="size-5" />

              <span className="sm:block hidden"> Analytics</span>
            </button>
          </li>
          <li className="w-full">
            <button className="btn w-full btn-ghost justify-start hover:bg-primary hover:text-base-100">
              <Workflow className="size-5" />

              <span className="sm:block hidden"> Integrations</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h1 className="text-md font-semibold sm:block hidden">Personal</h1>
        <ul className="space-y-4 flex flex-col items-start mt-5">
          <li className="w-full">
            <button className="btn w-full btn-ghost justify-start hover:bg-primary hover:text-base-100">
              <Handshake className="size-5" />

              <span className="sm:block hidden">Teams</span>
            </button>
          </li>
          <li className="w-full">
            <button className="btn w-full btn-ghost justify-start hover:bg-primary hover:text-base-100">
              <MessagesSquare className="size-5" />

              <span className="sm:block hidden">Messages</span>
            </button>
          </li>
          <li className="w-full">
            <button className="btn w-full btn-ghost justify-start hover:bg-primary hover:text-base-100">
              <Bell className="size-5" />

              <span className="sm:block hidden">Notifications</span>
            </button>
          </li>
          <li className="w-full">
            <button className="btn w-full btn-ghost justify-start hover:bg-primary hover:text-base-100">
              <Settings className="size-5" />

              <span className="sm:block hidden">Setting</span>
            </button>
          </li>
        </ul>
      </div>
      <Avatar />
    </aside>
  );
}
