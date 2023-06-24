import Image from "next/image";
import React from "react";
import Button from "./button";

export default function Navbar() {
  return (
    <div className="flex justify-between py-5">
      <div className="inline-flex space-x-1 space-y-2">
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
