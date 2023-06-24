import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VoteXpress",
  description: "Aplikasi voting dengan jujur dan adil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-[200px]">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
