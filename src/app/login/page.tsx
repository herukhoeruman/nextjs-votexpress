import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center container h-screen m-auto">
      <Link href={"/"} className="text-5xl mb-10 font-bold">
        VoteExpress
      </Link>
      <div className="w-1/3">
        <button className="inline-flex justify-center items-center bg-white py-2 w-full border-2 border-black font-medium hover:bg-black hover:text-white">
          <Image
            className="mx-2"
            alt="google"
            src={"/img/google.svg"}
            width={20}
            height={20}
          />
          Login Dengan Google
        </button>
      </div>
    </div>
  );
}
