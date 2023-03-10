"use client";
// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
import { Header } from "../components/Header";
import { Footer } from "@/app/components/Footer";
import { MenuNavCard } from "@/app/components/MenuNavCard";
import { BalanceCard } from "./components/BalanceCard";
import { TransactionHistory } from "./components/TransactionHistory";
import { ChartCard } from "./components/ChartCard";

export default function Home() {
  // const segment = usePathname();
  // const id = segment.split("/")[2];
  const isLogged = JSON.parse(localStorage.getItem("@login"));
  // const userId = isLogged.user.id;
  const userPhone = isLogged.user.phone;
  const router = useRouter();
  // sementara menggunakan logic ini untuk cek phone user, ada atau tidak
  // jika dia belum login maka redirect ke auth login
  if (isLogged === null) {
    router.push("/auth/login");
  } else if (userPhone.length === 0) {
    router.push("/profile");
  }
  // jika dia sudah login maka akan routing ke home dashboard, yakni akan mereturn-kan / render componen di bawah ini
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
            <ChartCard />
            <TransactionHistory />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
