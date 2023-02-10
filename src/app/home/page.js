"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
// import { useState } from "react";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "@/app/components/Footer";
import { MenuNavCard } from "@/app/components/MenuNavCard";
import { BalanceCard } from "./components/BalanceCard";

export default function Home() {
  const segment = usePathname();
  const id = segment.split("/")[2];
  const isLogged = JSON.parse(localStorage.getItem("@login"));
  const router = useRouter();
  // jika dia belum login maka redirect ke auth login
  if (isLogged === null) {
    router.push("/auth/login");
  }
  // jika dia sudah login maka akan routing ke home dashboard
  return (
    <>
      <Header />
      <main className="w-full h-[150vh] md:h-[150vh] md:py-10 md:pt-40 md:px-32 bg-base flex md:gap-5">
        <section className="menu md:w-3/12 h-full">
          <MenuNavCard />
        </section>
        <section className="content md:w-9/12 h-full flex md:flex-col md:gap-5">
          <BalanceCard />
          <div className="bottom flex w-full md:h-3/4 md:gap-5">
            <div className="left bg-white rounded-xl md:h-full md:w-3/5 shadow-lg"></div>
            <div className="right bg-white rounded-xl md:h-full md:w-2/5 shadow-lg"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
