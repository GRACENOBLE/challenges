import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const links: { step: number; route: string }[] = [
    {
      step: 1,
      route: "",
    },
    {
      step: 2,
      route: "",
    },
    {
      step: 3,
      route: "",
    },
    {
      step: 4,
      route: "",
    },
  ];
  return (
    <div className="grid place-items-center h-screen bg-red-50">
      <div className="border w-72 h-[500px] bg-blue-200 flex flex-col justify-between">
        <Image src={"/images/bg-sidebar-mobile.svg"} alt={""} width={1000} height={1000}/>
        <div className="absolute w-72">
          <div className="">
            <nav className="flex justify-around px-10 py-5">
              {links.map(({ step, route }) => (
                <div className="border w-8 h-8 rounded-full grid place-items-center text-white">
                  {step}
                </div>
              ))}
            </nav>
            <div className="border mx-2 rounded-md bg-white px-3 py-4 shadow-lg ">
              {children}
            </div>
          </div>
        </div>
        <div className="bg-white py-2 mt-10 px-2 flex justify-between items-center">
          <Link className=" text-xs text-slate-300 " href={""}>Go Back</Link>
          <Link className="py-2 px-4 rounded bg-blue-500 text-sm text-white" href={""}>Next Step</Link>
        </div>
      </div>
    </div>
  );
};

export default layout;
