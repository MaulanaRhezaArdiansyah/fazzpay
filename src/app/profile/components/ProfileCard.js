"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const ProfileCard = () => {
  const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/${id}`)
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const router = useRouter();
  return (
    <div className="md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col justify-center items-center">
      <form
        className="flex flex-col items-center justify-center gap-1 md:mb-5 cursor-pointer"
        action=""
      >
        <div className="h-16 w-16 flex items-center justify-center">
          <img
            src={
              dataUser[0]?.avatar
                ? `http://localhost:8000/uploads/images/${dataUser[0].avatar}`
                : `http://localhost:3000/images/default-avatar.jpg`
            }
            alt={dataUser[0]?.first_name}
            className="w-full h-full rounded-full"
          />
        </div>
        <button className="flex items-center justify-center gap-2">
          <Image src={require("../../../assets/img/edit.png")} alt="edit" />
          <p className="text-[#7A7886]">Edit</p>
        </button>
      </form>
      <h3 className="text-xl text-[#4D4B57] font-bold text-center md:mb-2">
        {dataUser[0]?.first_name} {dataUser[0]?.last_name}
      </h3>
      <p className="md:mb-8 text-[#7A7886] text-center">{dataUser[0]?.phone}</p>
      <div className="button-nav flex flex-col gap-3">
        <Link href={"/profile/personal-info"}>
          <button className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200">
            <p className="font-semibold">Personal Information</p>
            <Image
              src={require("../../../assets/img/arrow-right-2.png")}
              alt=""
            />
          </button>
        </Link>
        <button className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200">
          <p className="font-semibold">Change Password</p>
          <Image
            src={require("../../../assets/img/arrow-right-2.png")}
            alt=""
          />
        </button>
        <button className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200">
          <p className="font-semibold">Change PIN</p>
          <Image
            src={require("../../../assets/img/arrow-right-2.png")}
            alt=""
          />
        </button>
        <button
          onClick={() => {
            alert(`You are logged out! See you soon 😊`);
            localStorage.removeItem("@login");
            router.push("/auth/login");
          }}
          className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200"
        >
          <p className="font-semibold">Logout</p>
        </button>
      </div>
    </div>
  );
};
