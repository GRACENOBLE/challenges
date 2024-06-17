import H1 from "@/components/multiStepForm/H1";
import P from "@/components/multiStepForm/P";
import React from "react";

const page = () => {
  return (
    <div>
      <H1>Personal info</H1>
      <P>
        Please add your name, email, address and phone number.
      </P>
      <form action="submit">
        <div className="flex flex-col gap-2">
          <>
            <label htmlFor="" className="text-sm">
              Name
            </label>
            <input
              type="text"
              className="border w-44 text-xs rounded-md p-1"
              placeholder=" e.g. Stephen King"
            />
          </>
          <>
            <label htmlFor="" className="text-sm">
              Email Address
            </label>
            <input
              type="text"
              className="border w-44 text-xs rounded-md p-1"
              placeholder="e.g. stephenking@gmail.com"
            />
          </>
          <>
            <label htmlFor="" className="text-sm">
              Phone Number
            </label>
            <input
              type="text"
              className="border w-44 text-xs rounded-md p-1"
              placeholder="+256 774784599"
            />
          </>
        </div>
      </form>
    </div>
  );
};

export default page;
