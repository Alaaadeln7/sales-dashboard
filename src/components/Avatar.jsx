import Image from "next/image";
import avatarImage from "../../public/avatar.jpg";

export default function Avatar() {
  return (
    <div className="flex gap-3 fixed bottom-8 btn btn-ghost py-10">
      <Image
        src={avatarImage}
        alt="avatar image"
        className="w-10 h-10 object-cover rounded-full"
      />
      <div className="sm:hidden md:block text-start">
        <h1 className="font-semibold text-md">Sergey Goldberg</h1>
        <p className="text-sm">company@example.com</p>
      </div>
    </div>
  );
}
