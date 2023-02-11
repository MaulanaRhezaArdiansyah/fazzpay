"use client";
import React, { useState } from "react";
import Image from "next/image";
export const TopUpModal = ({ isVisible, closeModal }) => {
  //   const [validate, setValidate] = useState({
  //     error: false,
  //     message: "Topup success!",
  //   });
  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeModal();
    }
  };
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center "
    >
      <div className="md:w-[500px] w-[80%] h-[70%] md:h-[400px] bg-white rounded-xl shadow-lg flex flex-col md:p-10 p-10 gap-5 md:gap-5 justify-center">
        <div className="flex justify-between items-center">
          <p className="text-[#3A3D42] text-xl font-bold">Top Up</p>
          <button
            onClick={() => closeModal()}
            className="text-[#3A3D42] font-bold text-xl p-1"
          >
            <Image src={require("../../assets/img/x.png")} alt="close" />
          </button>
        </div>
        <p className="text-[#3A3D4299] md:mb-5 md:w-[80%]">
          Enter the amount of money, and click submit.
        </p>
        <input
          type="text"
          className="border-[1px] border-[#A9A9A999] rounded-xl w-full py-5 focus:outline-1 focus:outline-[#6379F4] md:px-5 text-center text-2xl text-[#3A3D42] font-bold"
        />
        <button
          onClick={() => {
            alert("Topup success!");
          }}
          //   type="submit"
          className="bg-[#6379F4] self-end md:w-40 w-32 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
