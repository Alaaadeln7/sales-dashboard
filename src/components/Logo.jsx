import { ShieldHalf } from "lucide-react";

export default function Logo() {
  return (
    <div>
      <h1 className="font-bold text-2xl flex justify-start items-center gap-4">
        <ShieldHalf />
        <span className="sm:block hidden">logo</span>
      </h1>
    </div>
  );
}
