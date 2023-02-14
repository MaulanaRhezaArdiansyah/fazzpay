"use client";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Loading() {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center">
        <p style={{ animationDelay: `1s`, animationDuration: "1s" }}>
          Loading...
        </p>
      </div>
    </>
  );
}
