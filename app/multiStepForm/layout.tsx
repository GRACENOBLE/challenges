"use client"
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const links: { step: number; route: string }[] = [
    {
      step: 1,
      route: "/multiStepForm/personalInfo",
    },
    {
      step: 2,
      route: "/multiStepForm/selectPlan",
    },
    {
      step: 3,
      route: "/multiStepForm/pickAdd-ons",
    },
    {
      step: 4,
      route: "/multiStepForm/finishUp",
    },
  ];

  const pathname = usePathname()
  const router = useRouter()

  function handleClick() {
    if (pathname == "/multiStepForm/personalInfo") {
      router.push("/multiStepForm/selectPlan") ;
    } else if (pathname == "/multiStepForm/selectPlan") {
      router.push("/multiStepForm/pickAdd-ons");
    } else {
      router.push("/multiStepForm/finishUp");
    }
  }

  function handleBackClick() {
    if (pathname == "/multiStepForm/finishUp") {
      router.push("/multiStepForm/pickAdd-ons");
    } else if (pathname == "/multiStepForm/pickAdd-ons") {
      router.push("/multiStepForm/selectPlan");
    } else {
      router.push("/multiStepForm/personalInfo");
    }
  }

  return (
    <div className="grid place-items-center h-screen bg-red-50">
      <div className="border w-72 h-[500px] bg-blue-100 flex flex-col justify-between">
        <Image
          src={"/images/bg-sidebar-mobile.svg"}
          alt={""}
          width={1000}
          height={1000}
        />
        <div className="absolute w-72">
          <div className="">
            <nav className="flex justify-around px-10 py-5">
              {links.map(({ step, route }) => (
                <div
                  className={`border w-8 h-8 rounded-full grid place-items-center ${
                    pathname === route ? "text-black bg-white" : "text-white"
                  }`}
                >
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
          <button
            className=" text-xs text-slate-300 "
            onClick={handleBackClick}
          >
            Go Back
          </button>
          <button
            className={`py-2 px-4 rounded text-xs w-24 ${
              pathname === "/multiStepForm/finishUp"
                ? "bg-blue-500"
                : "bg-slate-700"
            } text-sm text-white`}
            onClick={handleClick}
          >
             {
              pathname === "/multiStepForm/finishUp"
                ?<p>Confirm</p>:<p>Next Step</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default layout;
