import React from "react";
import Link from "next/link";
import Image from "next/image";

export const HeroLanding = () => {
  return (
    <div className="hero w-full md:px-32 md:h-[120vh] bg-[#6379F4] flex md:flex-row">
      <div className="text md:w-[50%] h-full flex flex-col justify-center items-start md:gap-8">
        <h2 className="text-white text-5xl md:w-[80%] font-bold">
          Awesome App For Saving Time.
        </h2>
        <p className="text-white md:w-[80%]">
          We bring you a mobile app for banking problems that oftenly wasting
          much of your times.
        </p>
        <Link href={"/home"}>
          <button className="border-2 border-white bg-white rounded-md w-36 py-3 text-[#6379F4] font-bold hover:bg-transparent hover:text-white duration-200">
            Try It Free
          </button>
        </Link>
      </div>
      <div className="image md:w-[50%] h-full flex items-end">
        <Image src={require("../../assets/img/phone-hero.png")} alt="phone" />
      </div>
    </div>
  );
};
