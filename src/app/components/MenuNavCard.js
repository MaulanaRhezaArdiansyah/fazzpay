"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const MenuNavCard = () => {
  const router = useRouter();
  return (
    <div className="menu-card shadow-lg bg-white md:p-12 flex flex-col w-full h-full rounded-xl justify-between">
      <div className="top flex flex-col md:gap-12">
        <div
          className="flex items-center md:gap-3 cursor-pointer hover:text-[#6379F4]"
          activeclassname="active"
        >
          <Image src={require("../../assets/img/grid.svg")} alt="dashboard" />
          <p activeclassname="active">Dashboard</p>
        </div>
        <div className="flex items-center md:gap-3 cursor-pointer hover:text-[#6379F4]">
          {/* <Image
                  src={require("../../../assets/img/arrow-up.svg")}
                  alt="transfer"
                /> */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 22.1663V5.83301"
              stroke="#3A3D42"
              strokeOpacity="0.8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.83333 13.9997L14 5.83301L22.1667 13.9997"
              stroke="#3A3D42"
              strokeOpacity="0.8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Transfer</p>
        </div>
        <div className="flex items-center md:gap-3 cursor-pointer hover:text-[#6379F4]">
          <Image src={require("../../assets/img/plus.svg")} alt="top-up" />
          <p>Top Up</p>
        </div>
        <div className="flex items-center md:gap-3 cursor-pointer hover:text-[#6379F4]">
          <Image src={require("../../assets/img/user.svg")} alt="user" />
          <p>Profile</p>
        </div>
      </div>
      <div className="bottom">
        <button
          onClick={() => {
            alert(`You are logged out! See you soon 😊`);
            localStorage.removeItem("@login");
            router.push("/auth/login");
          }}
          className="flex items-center md:gap-3 cursor-pointer hover:text-[#6379F4]"
        >
          <Image src={require("../../assets/img/log-out.svg")} alt="logout" />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};
