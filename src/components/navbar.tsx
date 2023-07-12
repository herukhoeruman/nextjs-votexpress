"use client";
import Image from "next/image";
import React from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-between py-5">
      <div
        className="inline-flex space-x-1 space-y-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src={"/img/rocket.svg"}
          width={35}
          height={35}
          alt="VoteXpress"
        />
        <span className="font-bold text-xl">VoteXpress</span>
      </div>
      <Button text="Login" />
    </div>
  );
}
