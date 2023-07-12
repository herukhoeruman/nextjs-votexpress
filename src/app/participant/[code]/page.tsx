"use client";
import ShowAlert from "@/components/alert";
import Button from "@/components/button";
import CandidateItem from "@/components/candidate-item";
import CountDown from "@/components/countDown/count-down";
import { useParams } from "next/navigation";
import React from "react";

export default function DetailParticipant() {
  const { code } = useParams();
  return (
    <div className="my-10">
      <div className="text-4xl text-center mt-10">Judul Voting</div>
      <CountDown className="mt-10" />

      {/* kandidat */}
      <div className="mt-10 space-y-3 mx-auto w-2/3">
        <CandidateItem />
        <CandidateItem />
        <CandidateItem />
      </div>

      <div className="text-center mt-10">
        <Button
          text="Kirim Vote Saya"
          onClick={() =>
            ShowAlert({
              title: "yeay !",
              message: "kamu berhasil",
              positiveButtonText: "ya",
              onPositiveClick() {},
            })
          }
        />
      </div>
    </div>
  );
}
