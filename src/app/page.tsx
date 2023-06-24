import Button from "@/components/button";
import Image from "next/image";
import { LinkIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col place-items-center py-20 space-y-3">
        <span className="text-5xl font-bold">Ayo Mulai Voting</span>
        <span className="text-lg bg-zinc-100 px-3 py-1">
          Sistem voting terbaik di Indonesia
        </span>
        <Image
          src={"/img/img-1.svg"}
          alt={"Landing"}
          width={300}
          height={300}
        />
        <div className="space-x-10">
          <Button text="Buat Vote Baru" />
          <Button text="Ikutan Vote" type="secondary" />
        </div>
      </div>

      <div>
        <p className="py5 text-lg font-bold">Vote yang telah dibuat</p>
        <table className="table-auto w-full border border-zinc-100">
          <thead>
            <tr className="border border-zinc-100">
              <th className="p-5 text-left">No</th>
              <th className="p-5 text-left">Judul</th>
              <th className="p-5 text-left">Kandidat</th>
              <th className="p-5 text-left">Kode</th>
              <th className="p-5 text-left">Mulai</th>
              <th className="p-5 text-left">Selesai</th>
              <th className="p-5 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5 text-left">1</td>
              <td className="p-5 text-left">Pemilihan presiden wakanda</td>
              <td className="p-5 text-left">Joko - Yanto</td>
              <td className="p-5 text-left">SDXS</td>
              <td className="p-5 text-left">22 Oct 2022 11:AM</td>
              <td className="p-5 text-left">22 Oct 2022 11:AM</td>
              <td className="p-5 text-left">
                <div className="inline-flex space-x-2">
                  <Link href={"/#"}>
                    <LinkIcon className="w-5 h-6 hover:bg-zinc-100" />
                  </Link>
                  <Link href={"/#"}>
                    <TrashIcon className="w-5 h-6  hover:bg-zinc-100" />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
