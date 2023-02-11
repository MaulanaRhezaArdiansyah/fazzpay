"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DropdownProfile } from "./DropdownProfile";
import { Logo } from "./Logo";
import { NotifModal } from "./NotifModal";
// const getDetailUser = async () => {
//   const res = await fetch(
//     `http://localhost:8000/api/v1/users/2a85b74b-0215-4dc0-ae81-926cc3813ec2`
//   );
//   if (!res.ok) {
//     return { message: `error` };
//   }
//   return res.json();
// };
export const Header = (props) => {
  // const user = await getDetailUser();
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
  const [showModal, setShowModal] = useState(false);
  const [showModalNotif, setShowModalNotif] = useState(false);

  return (
    <>
      <header className="logged flex justify-between w-full h-28 items-center rounded-br-md rounded-bl-md shadow-xl bg-white/90 backdrop-blur-sm fixed top-0 left-0 px-3 md:px-32">
        <Logo />
        <div className="account-nav flex h-16 items-center gap-6 max-sm:gap-2 max-sm:flex-row-reverse">
          <div
            onClick={() => setShowModal(true)}
            className="h-14 w-14 rounded-full hover:border-[6px] hover:border-[#6379F4] duration-200 cursor-pointer"
          >
            {/* <Image
            src={require("../../assets/img/foto-profil-2.jpeg")}
            alt="user_name"
            className="w-full h-full rounded-full"
          /> */}
            <img
              src={
                dataUser[0]?.avatar
                  ? `http://localhost:8000/uploads/images/${dataUser[0].avatar}`
                  : `http://localhost:3000/images/default-avatar.jpg`
              }
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center max-sm:hidden">
            <p className="text-xl text-[#3A3D42] font-bold">
              {dataUser[0]?.first_name} {dataUser[0]?.last_name}
            </p>
            <p className="text-[#3A3D42E5]">
              {dataUser[0]?.phone ? dataUser[0]?.phone : "(empty phone number)"}
            </p>
          </div>
          <button
            onClick={() => {
              setShowModalNotif(true);
            }}
            className="flex items-center max-sm:h-14 max-sm:w-14 justify-center cursor-pointer"
          >
            <Image
              src={require("../../assets/img/bell.png")}
              alt="bell-notif"
            />
          </button>
        </div>
      </header>
      <NotifModal
        isVisible={showModalNotif}
        closeModal={() => setShowModalNotif(false)}
      />
      <DropdownProfile
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
};
