import Image from "next/image";
import Link from "next/link";
import { FormLogin } from "./components/FormLogin";
export default function Login() {
  return (
    <>
      <main className="w-full h-[110vh] md:h-[150vh] flex">
        <section className="bg-[#6379F4] hidden md:w-[55%] pl-3 md:pl-32 md:pr-10 py-3 md:py-16 md:h-full md:flex flex-col">
          <div className="w-full h-full text-white">
            <Link href={"/"}>
              <div className="logo text-white text-3xl font-bold flex items-center">
                <h2>FazzPay</h2>
              </div>
            </Link>
            <div className=" flex justify-start w-[90%] md:h-[70%]">
              <Image
                src={require("../../../assets/img/phone-auth.png")}
                alt="phone-auth"
                className=" justify-start h-full w-full"
              />
            </div>
            <h4 className="text-2xl font-bold mb-5">
              App that Covering Banking Needs.
            </h4>
            <p>
              FazzPay is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in FazzPay everyday with worldwide
              users coverage.
            </p>
          </div>
        </section>
        <section className="md:w-[45%] bg-white px-3 md:pr-32 md:pl-10 py-3 md:py-16 md:h-full md:flex flex-col">
          <div className="w-full h-full pt-10">
            <h3 className="text-[#3A3D42] text-3xl mb-6">
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </h3>
            <p className="text-[#afafaf] mb-10">
              Transfering money is eassier than ever, you can access FazzPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <FormLogin />
          </div>
        </section>
      </main>
    </>
  );
}
