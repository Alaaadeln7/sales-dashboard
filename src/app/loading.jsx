"use client";
import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Loader className="animate-spin size-10" />
    </div>
  );
}
