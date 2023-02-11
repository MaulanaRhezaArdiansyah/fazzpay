"use client";
import React, { useState } from "react";
import { FilterHistory } from "../components/FilterHistory";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MenuNavCard } from "../components/MenuNavCard";
import { HistoryCard } from "./components/HistoryCard";

export default function History() {
  // const [showModalFilter, setShowModalFilter] = useState(false);
  return (
    <>
      <Header />
      <main className="w-full h-[150vh] md:h-[150vh] md:py-10 md:pt-40 md:px-32 bg-base flex md:gap-5">
        <section className="menu md:w-3/12 h-full">
          <MenuNavCard />
        </section>
        <section className="content md:w-9/12 h-full flex md:flex-col md:gap-5">
          <HistoryCard />
        </section>
      </main>
      <Footer />
    </>
  );
}
