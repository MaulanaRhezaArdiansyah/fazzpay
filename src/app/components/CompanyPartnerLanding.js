import React from "react";
import Image from "next/image";

export const CompanyPartnerLanding = () => {
  return (
    <div className="company w-full md:h-52 flex items-center justify-center bg-base-2 md:px-32">
      <div className=" h-full w-1/4 flex items-center justify-center">
        <Image
          src={require("../../assets/img/microsoft.png")}
          alt="microsoft"
        />
      </div>
      <div className=" h-full w-1/4 flex items-center justify-center">
        <Image src={require("../../assets/img/dropbox.png")} alt="dropbox" />
      </div>
      <div className=" h-full w-1/4 flex items-center justify-center">
        <Image src={require("../../assets/img/h&m.png")} alt="h&m" />
      </div>
      <div className=" h-full w-1/4 flex items-center justify-center">
        <Image src={require("../../assets/img/airbnb.png")} alt="airbnb" />
      </div>
    </div>
  );
};
