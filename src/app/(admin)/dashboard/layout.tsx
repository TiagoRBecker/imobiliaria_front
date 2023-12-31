import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Dash from "@/components/Dashboard";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="w-full h-full overflow-hidden py ">
        <div className="w-full h-full flex">
          <aside className="w-80 h-full col-span-2 bg-[#005183] fixed">
          <Dash/>
          
          </aside>

          <main className=" h-full flex-grow  overflow-auto ml-[320px]  ">{children}</main>
        </div>
      </section>
    </>
  );
}
