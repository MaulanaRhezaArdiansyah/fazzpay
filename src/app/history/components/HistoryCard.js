"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FilterHistory } from "@/app/components/FilterHistory";
import axios from "axios";
export const HistoryCard = () => {
  const [showModalFilter, setShowModalFilter] = useState(false);
  const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/history/${id}`)
      .then((result) => {
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col p-10">
        <div className="w-full md:h-[10%] flex justify-between items-center md:mb-6">
          <p className="text-xl text-[#3A3D42] font-bold">
            Transaction History
          </p>
          <button
            onClick={() => setShowModalFilter(true)}
            className="bg-[#e6e7e9] py-3 w-40 hover:bg-[#6379F4] hover:text-white rounded-xl duration-200"
          >
            --Select Filter--
          </button>
        </div>
        <div className="transaction-list-container w-full md:h-[90%]">
          <div className="transaction-list w-full h-24 md:h-24 flex items-center justify-between mb-1">
            <div className="flex items-center">
              <div className="w-14 h-14 flex justify-center items-center mr-3">
                <Image
                  src={require("../../../assets/img/foto-profil-2.jpeg")}
                  alt="profile"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <p className="text-[#4D4B57] text-lg font-bold">Samuel Suhi</p>
                <p className="text-[#7A7886]">Accept</p>
              </div>
            </div>
            <p className="font-bold text-[#1EC15F] text-xl">+Rp50.000</p>
          </div>
          <div className="transaction-list w-full h-24 md:h-24 flex items-center justify-between mb-1">
            <div className="flex items-center">
              <div className="w-14 h-14 flex justify-center items-center mr-3">
                <Image
                  src={require("../../../assets/img/foto-profil-2.jpeg")}
                  alt="profile"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <p className="text-[#4D4B57] text-lg font-bold">Samuel Suhi</p>
                <p className="text-[#7A7886]">Accept</p>
              </div>
            </div>
            <p className="font-bold text-[#1EC15F] text-xl">+Rp50.000</p>
          </div>
        </div>
      </div>
      <FilterHistory
        isVisible={showModalFilter}
        closeModal={() => setShowModalFilter(false)}
      />
    </>
  );
};
