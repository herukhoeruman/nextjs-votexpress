"use client";
import React, { useState } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Form from "@/components/form";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import "react-datepicker/dist/react-datepicker.css";
import CandidateForm from "@/components/candidate";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "@/components/button";

registerLocale("id", id);

export default function CreateVote() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const submitCandidate = (candidate: Candidate) => {
    setCandidates(
      candidates.map((c) => (c.key === candidate.key ? candidate : c))
    );
  };

  const addCandidateForm = () => {
    const newCandidate: Candidate = {
      name: "",
      key: candidates.length + 1,
      title: "",
    };
    setCandidates([...candidates, newCandidate]);
  };

  const removeCandidateForm = (key: number) => {
    const newCandidates = candidates.filter(
      (candidates) => candidates.key !== key
    );
    newCandidates.forEach((candidate, index) => {
      candidate.key = index + 1;
    });
    setCandidates(newCandidates);
  };

  return (
    <div className="flex flex-col">
      <Image
        src={"/img/img-2.svg"}
        alt="Create"
        width={300}
        height={300}
        className="place-self-end"
      />
      <span className="text-4xl font-bold">Buat Voting Baru</span>
      <span className="text-zinc-700 mt-3">Silahkan inputkan data voting</span>

      <form className="flex flex-col mt-5">
        {/* detai vote */}
        <div className="space-y-5">
          <span className="font-medium text-xl mt-10">Detail Voting</span>
          <div className="flex flex-col">
            <label className="text-sm mt-5">Judul</label>
            <Form
              onChange={() => {}}
              value={""}
              placeholder={""}
              className={"mt-1 w-1/2"}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Kapan dimulai</label>
            <div className="inline-flex">
              <ReactDatePicker
                locale={"id"}
                showTimeSelect
                selected={startDate}
                onChange={(date) => date && setStartDate(date)}
                dateFormat={"Pp"}
                minDate={new Date()}
                className="w-full bg-zinc-100 py-2 px-3"
              />
              <span className="text-sm text-center p-3">sampai</span>
              <ReactDatePicker
                locale={"id"}
                showTimeSelect
                selected={endDate}
                onChange={(date) => date && setEndDate(date)}
                dateFormat={"Pp"}
                minDate={startDate}
                className="w-full bg-zinc-100 py-2 px-3"
              />
            </div>
          </div>
        </div>

        {/* ksndidat */}
        <span className="font-medium text-xl mt-10">Kandidat</span>
        <div className="grid gap-4 grid-cols-4 mt-5">
          {candidates.map((candidate: Candidate, index: number) => (
            <CandidateForm
              key={index}
              candidate={candidate}
              submitCandidate={submitCandidate}
              removeCandidate={removeCandidateForm}
            />
          ))}
          <div
            onClick={() => addCandidateForm()}
            className="w-1/3 flex flex-col items-center justify-center aspect-square cursor-pointer bg-zinc-100 text-zinc-400 hover:bg-black hover:text-white"
          >
            <PlusIcon className="w-1/2" />
          </div>
        </div>
        <div className="text-right mt-10">
          <Button text="Buat Voting" />
        </div>
      </form>
      {JSON.stringify(candidates)}
    </div>
  );
}
