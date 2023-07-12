import Image from "next/image";
import React from "react";
import Button from "./button";

export default function RestrictedPage() {
  return (
    <div>
      <Image
        src={"/assets/img/img-4.svg"}
        alt="restricted"
        height={200}
        width={200}
      />
      <h1 className="text-4xl font-bold">Login Dulu Yah!</h1>
      <h2 className="text-lg">
        Untuk mengakses halaman ini, kamu harus login terlebih dahulu
      </h2>
      <Button onClick={() => {}} text="Login" />
    </div>
  );
}
