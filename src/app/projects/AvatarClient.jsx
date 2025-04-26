import Image from "next/image";
import avatarImage from "../../../public/avatar.jpg";

export default function AvatarClient() {
  return (
    <div className="flex gap-2">
      <Image
        src={avatarImage}
        alt="avatar client"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h1 className="font-semibold text-md">client name</h1>
        <span className="text-sm">10 mins ago</span>
      </div>
    </div>
  );
}
