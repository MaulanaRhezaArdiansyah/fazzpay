import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="logo text-[#6379F4] text-3xl font-bold flex items-center">
        <h2>FazzPay</h2>
      </div>
    </Link>
  );
};
