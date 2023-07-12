import React, { useState } from "react";
import Button from "./button";
import { createRoot } from "react-dom/client";

interface Props {
  isOpen?: boolean;
  title?: string;
  message?: string;

  positiveButtonText?: string;
  negativeButtonText?: string;
  onPositiveClick?: () => void;
  onNegativeClick?: () => void;
}

function Alert(props: Props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  return (
    <div
      className={`relative z-10 ${!isOpen && "hidden"}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-zinc-900 bg-opacity-40 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full justify-center text-center items-center">
          <div className="relative transform overflow-hidden bg-white shadow-xl transition-all p-4 rounded-md">
            {/* Content */}
            <div className="w-full p-5 text-center">
              <p className="text-2xl font-bold "> {props.title || "Title"}</p>
              <p className="text-xl "> {props.message || "Message"}</p>
              <div className="space-x-5 mt-5">
                <button
                  className="text-sm bg-zinc-100 px-1 py-1 hover:bg-zinc-200"
                  onClick={() => {
                    props.onNegativeClick;
                    setIsOpen(false);
                  }}
                >
                  {props.negativeButtonText || "Kembali"}
                </button>
                <Button
                  className={`${!props.onPositiveClick && "hidden"}`}
                  onClick={() => {
                    props.onPositiveClick && props.onPositiveClick();
                    setIsOpen(false);
                  }}
                  text={props.positiveButtonText || "Ya"}
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} // render component ui

// menampilkan pada halaman
export default function ShowAlert(props: Props) {
  const alert = document.createElement("div");
  alert.id = "alert";
  document.body.appendChild(alert);
  const root = createRoot(alert);
  root.render(
    <Alert
      isOpen={true}
      title={props.title}
      message={props.message}
      positiveButtonText={props.positiveButtonText}
      negativeButtonText={props.negativeButtonText}
      onPositiveClick={props.onPositiveClick}
      onNegativeClick={props.onNegativeClick}
    />
  );
}
