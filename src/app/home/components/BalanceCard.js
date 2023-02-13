import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TopUpModal } from "@/app/components/TopUpModal";
export const BalanceCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="top shadow-lg flex w-full md:h-1/4 rounded-xl bg-[#6379F4] justify-between items-center md:p-12 md:px-8">
        <div className="text flex flex-col gap-5">
          <p className="text-[#E0E0E0]">Balance</p>
          <p className="text-white text-4xl">Rp120.000</p>
          <p className="text-[#DFDCDC]">+62 813-9387-7946</p>
        </div>
        <div className="button flex flex-col gap-3 text-white">
          <Link href={"/transfer"}>
            <button className="flex gap-2 items-center justify-center w-36 py-3 rounded-xl border-[2px] border-white bg-[#9aa6eb] hover:bg-[#8092f7] duration-200">
              <Image src={require("../../../assets/img/arrow-up.svg")} alt="" />
              <p>Transfer</p>
            </button>
          </Link>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="flex gap-2 items-center justify-center w-36 py-3 rounded-xl border-[2px] border-white bg-[#9aa6eb] hover:bg-[#8092f7] duration-200"
          >
            <Image src={require("../../../assets/img/plus.svg")} alt="" />
            <p>Top Up</p>
          </button>
        </div>
      </div>
      <TopUpModal
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
};
