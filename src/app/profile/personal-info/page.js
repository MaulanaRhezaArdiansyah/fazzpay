"use client";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { MenuNavCard } from "@/app/components/MenuNavCard";
import React from "react";
import { PersonalInfoCard } from "./PersonalInfoCard";

export default function PersonalInfo() {
  return (
    <>
      <Header />
      <main className="w-full h-[150vh] md:h-[150vh] md:py-10 md:pt-40 md:px-32 bg-base flex md:gap-5">
        <section className="menu md:w-3/12 h-full">
          <MenuNavCard />
        </section>
        <section className="content md:w-9/12 h-full flex md:flex-col md:gap-5">
          <PersonalInfoCard />
        </section>
      </main>
      <Footer />
    </>
  );
}
