import Image from "next/image";
import React from "react";
import image from "../../../public/avatar.jpg";
export default function Activities() {
  return (
    <article className="bg-base-100 p-5">
      <header className="flex justify-between px-4 items-center">
        <h3 className="text-2xl font-bold">Activities</h3>
        <button className="btn btn-soft btn-primary">View all</button>
      </header>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="flex gap-3 bg-base-300 p-5 my-3 rounded-xl max-w-[300px]">
          <Image
            src={image}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-md">user name</h3>
            <p>In eu do do cillum lorem exercitation ea dolor.</p>
          </div>
        </div>
      ))}
    </article>
  );
}
