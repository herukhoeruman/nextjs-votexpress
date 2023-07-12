import React from "react";

interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={`
      ${
        props.type === "secondary"
          ? "bg-white px-3 py-2 border-2 border-black text-black hover:bg-black hover:text-white"
          : "bg-black border-black text-white hover:bg-zinc-500 "
      }
      ${props.className}
      ${
        props.size === "sm"
          ? "py-1 px-2 text-sm "
          : props.size === "lg"
          ? "py-3 px-4"
          : "py-2 px-3"
      }
      `}
    >
      {props.text}
    </button>
  );
}
