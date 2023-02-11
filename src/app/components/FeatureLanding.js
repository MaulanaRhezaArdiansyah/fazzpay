import React from "react";
import Image from "next/image";

export const FeatureLanding = () => {
  const feature = [
    {
      id: 1,
      title: "Small Fee",
      desc: "We only charge 5% of every success transaction done in FazzPay app.",
    },
    {
      id: 2,
      title: "Data Secured",
      desc: "All your data is secured properly in our system and it’s encrypted.",
    },
    {
      id: 3,
      title: "Small Fee",
      desc: "FazzPay come up with modern and sleek design and not complicated.",
    },
  ];
  return (
    <div className="feature md:h-[120vh] w-full bg-base-2 flex md:px-32 md:gap-10 overflow-hidden">
      <div className="md:h-full md:w-1/3 ">
        <Image
          src={require("../../assets/img/app-mobile-lp.png")}
          alt="feature"
        />
      </div>
      <div className="md:h-full md:w-2/3  flex flex-col justify-center items-start">
        <h2 className="text-[#3A3D42] text-5xl font-bold md:mb-10 text-left">
          All The <span className="text-[#6379F4]">Great</span> FazzPay
          Features.
        </h2>
        <div className="feature-row flex flex-col  md:w-full md:h-[60%] md:gap-5">
          {feature?.map((i, index) => {
            return (
              <div
                key={i.id}
                className="feature-card bg-white shadow-lg rounded-xl md:p-5 md:w-full md:h-32 flex flex-col justify-center md:gap-2 hover:scale-110 duration-200"
              >
                <h4 className="font-bold text-[#3A3D42] text-lg flex md:gap-2">
                  <span className="text-[#6379F4]">{index + 1}.</span>
                  {i.title}
                </h4>
                <p>{i.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
