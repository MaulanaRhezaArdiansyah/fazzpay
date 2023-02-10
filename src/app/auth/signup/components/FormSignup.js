"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export const FormSignup = () => {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const signupFormData = new FormData();

  signupFormData.append("firstname", signupData.firstname);
  signupFormData.append("lastname", signupData.lastname);
  signupFormData.append("email", signupData.email);
  signupFormData.append("password", signupData.password);

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });

  const router = useRouter();

  const handleSignup = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:8000/api/v1/auth/signup`,
      data: signupFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        setSignupData(result.data.data);
        alert(result.data.message);
        router.push("/auth/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setValidate({ error: true, message: err.response.data.message });
      });
  };
  return (
    <form onSubmit={handleSignup} action="" className="flex flex-col gap-4">
      <div className="flex gap-2 items-center h-14 border-b-[#A9A9A999] border-b-[1px] bg-transparent">
        <Image src={require("../../../../assets/img/person.png")} alt="" />
        <input
          onClick={(e) => {
            setSignupData({
              ...signupData,
              firstname: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter your firstname"
          className=" focus:outline-none bg-transparent w-full h-full"
        />
      </div>
      <div className="flex gap-2 items-center h-14 border-b-[#A9A9A999] border-b-[1px] bg-transparent">
        <Image src={require("../../../../assets/img/person.png")} alt="" />
        <input
          onClick={(e) => {
            setSignupData({
              ...signupData,
              lastname: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter your lastname"
          className=" focus:outline-none bg-transparent w-full h-full"
        />
      </div>
      <div className="flex gap-2 items-center h-14 border-b-[#A9A9A999] border-b-[1px] bg-transparent">
        <Image src={require("../../../../assets/img/mail.png")} alt="" />
        <input
          onClick={(e) => {
            setSignupData({
              ...signupData,
              email: e.target.value,
            });
          }}
          type="email"
          placeholder="Enter your e-mail"
          className=" focus:outline-none bg-transparent w-full h-full"
        />
      </div>
      <div className="flex gap-2 items-center h-14 border-b-[#A9A9A999] border-b-[1px] bg-transparent">
        <Image src={require("../../../../assets/img/lock.png")} alt="" />
        <input
          onClick={(e) => {
            setSignupData({
              ...signupData,
              password: e.target.value,
            });
          }}
          type="password"
          placeholder="Enter your password"
          className=" focus:outline-none bg-transparent w-full h-full"
        />
      </div>
      <button className="text-[#3A3D42CC] self-end font-semibold mb-10">
        Forgot password?
      </button>
      {validate.error && (
        <div className="p-5 w-full text-red-500 bg-red-200 rounded-md font-bold italic duration-200">
          {validate.message}
        </div>
      )}
      <button
        type="submit"
        className="py-4 text-[#88888F] bg-[#dadada] rounded-md mb-3 font-bold hover:bg-[#6379F4] hover:text-white duration-200"
      >
        Sign Up
      </button>
      <p className="text-center">
        Already have an account? Let’s{" "}
        <Link href={"/auth/login"}>
          <span className="text-[#6379F4] font-bold">Login</span>
        </Link>
      </p>
    </form>
  );
};
