import React, { useEffect, useState } from "react";
import Form from "./form";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  candidate: Candidate;
  submitCandidate: (candidate: Candidate) => void;
  removeCandidate: (key: number) => void;
}

export default function CandidateForm(props: Props) {
  const [candidate, setCandidate] = useState<Candidate>({
    key: 0,
    name: "",
    title: "",
  });

  useEffect(() => {
    setCandidate(props.candidate);
  }, [props.candidate]);

  useEffect(() => {
    props.submitCandidate(candidate);
  }, [candidate]);

  return (
    <div className="flex flex-col border border-zinc-100 p-5 ">
      <div className="self-end">
        <XCircleIcon
          className="h-6 w-6 cursor-pointer self-end hover:bg-zinc-100 text-zinc-400"
          onClick={() => props.removeCandidate(candidate.key)}
        />
      </div>
      <h1 className="flex w-1/2 bg-zinc-100 aspect-square self-center text-center justify-center items-center text-4xl rounded-full">
        {props.candidate.key}
      </h1>
      <label className="text-sm mt-3 mb-1">Nama Kandidat</label>
      <Form
        placeholder="Masukan Nama Kandidat"
        value={candidate.name}
        onChange={(e) => {
          setCandidate({ ...candidate, name: e });
        }}
      />
    </div>
  );
}
