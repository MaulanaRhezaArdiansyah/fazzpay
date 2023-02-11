"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { FooterLanding } from "./components/FooterLanding";
import { Header } from "./components/Header";
import { AboutAppLanding } from "./components/AboutAppLanding";
import { CompanyPartnerLanding } from "./components/CompanyPartnerLanding";
import { HeroLanding } from "./components/HeroLanding";
import { FeatureLanding } from "./components/FeatureLanding";
import { ReviewLanding } from "./components/ReviewLanding";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  const isLogged = JSON.parse(localStorage.getItem("@login"));

  return (
    <>
      {/* <header className="flex justify-between w-full h-32 items-center bg-white/5 backdrop-blur-sm fixed top-0 left-0 md:px-32"> */}
      {isLogged ? (
        <Header />
      ) : (
        <header className="flex justify-between w-full h-28 items-center bg-[#6379F4]/90 backdrop-blur-sm fixed top-0 left-0 md:px-32">
          <div className="logo text-white text-3xl font-bold flex items-center">
            <h2>FazzPay</h2>
          </div>
          <nav className="navbar flex justify-center items-center gap-5">
            <Link href="/auth/login" title="login">
              <button
                // onClick={() => router.push("/auth/login")}
                className="border-2 border-white bg-[#6379F4] rounded-md w-28 py-3 text-white font-bold hover:bg-white hover:text-[#6379F4] duration-200"
              >
                Login
              </button>
            </Link>
            <Link href="/auth/signup" title="signup">
              <button className="border-2 border-white bg-white rounded-md w-28 py-3 text-[#6379F4] font-bold hover:bg-transparent hover:text-white duration-200">
                Sign Up
              </button>
            </Link>
          </nav>
        </header>
      )}
      <main className="bg-white w-full md:h-[500vh] flex flex-col">
        <HeroLanding />
        <CompanyPartnerLanding />
        <AboutAppLanding />
        <FeatureLanding />
        <ReviewLanding />
      </main>
      <FooterLanding />
    </>
  );
}
