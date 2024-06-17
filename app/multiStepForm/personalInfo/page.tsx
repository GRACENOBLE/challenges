import H1 from "@/components/multiStepForm/H1";
import P from "@/components/multiStepForm/P";
import React from "react";

const page = () => {
  return (
    <div>
      <H1>Personal info</H1>
      <div className="py-3">
        <P>Please add your name, email, address and phone number.</P>
      </div>

      <form action="submit" autoComplete="off">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="" className="text-xs font-bold">
              Name
            </label>
            <input
              type="text"
              className="border w-44 text-xs rounded-md p-1"
              placeholder=" e.g. Stephen King"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xs font-bold">
              Email Address
            </label>
            <input
              type="text"
              className="border w-44 text-xs rounded-md p-1"
              placeholder="e.g. stephenking@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xs font-bold">
              Phone Number
            </label>
            <input
              type="text"
              className="border w-44 text-xs rounded-md p-1"
              placeholder="+256 774784599"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
