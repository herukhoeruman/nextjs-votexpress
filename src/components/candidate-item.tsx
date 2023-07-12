import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "./button";

export default function CandidateItem() {
  return (
    <div className="flex flex-row border border-zinc-100 p-5 rounded-md space-x-3">
      <div className="w-12 h-12 font-bold text-lg items-center flex justify-center bg-zinc-100 text-center">
        1
      </div>
      <div className="w-full">
        <span className="text-lg font-bold">Nama Kandidat</span>
        <div className="flex flex-row items-center space-x-2">
          {/* bar */}
          <div className="w-full h-1 bg-zinc-100 rounded-md">
            <div
              className="h-1 bg-black rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>

          {/* indicator */}
          <p className="text-sm font-bold">40%</p>
        </div>
      </div>

      <div className="w-20 h-20 items-center flex justify-center cursor-pointer bg-zinc-100 rounded-md">
        <CheckIcon className="w-7 h-7 text-white" />
      </div>
    </div>
  );
}
