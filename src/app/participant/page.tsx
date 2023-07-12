"use client";
import Button from "@/components/button";
import Form from "@/components/form";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Participant() {
  const router = useRouter();
  const [code, setcode] = useState("");

  const handleSubmit = () => {
    alert(code);
    router.push("/participant/kode-voting");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5 mx-auto mt-10">
      <Image
        alt="Ikut Participant"
        src={"/img/img-3.svg"}
        width={300}
        height={180}
      />
      <span className="text-4xl font-bold">Ikutan Voting</span>
      <span className="w-1/2 text-center">
        Untuk ikutan voting, kamu harus memasukan kode voting yang sudah di
        berikan panitia/penyelenggara
      </span>
      <Form
        value={code}
        onChange={setcode}
        placeholder="Masukan kode voting"
        className="w-1/5 mt-3"
      />

      <Button onClick={handleSubmit} text="Lanjutkan" className="w-1/5" />
      <Link href={"/"}>Kembali</Link>
    </div>
  );
}
