import React from "react";

interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
}

export default function Button(props: Props) {
  return (
    <button
      className={`bg-black px-3 py-2 border-black text-white hover:bg-zinc-500 
      ${
        props.type === "secondary" &&
        "bg-white border-2 border-black text-stone-950 hover:bg-black hover:text-white"
      }
      ${props.className}`}
    >
      {props.text}
    </button>
  );
}
