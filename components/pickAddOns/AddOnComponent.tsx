import React from "react";
import H2 from "../multiStepForm/H2";
import P from "../multiStepForm/P";

export default function AddOnComponent({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) {
 
  return (
    <div
      className={`border rounded px-1 py-2 flex justify-between hover:cursor-pointer `}
    >
      <div className="flex gap-1 w-full">
        <input type="checkbox" id={title} className="hover:cursor-pointer" />
        <label htmlFor={title} className="hover:cursor-pointer">
          <H2>{title}</H2>
          <p className="text-slate-300 text-xs">{description}</p>
        </label>
      </div>
      <label htmlFor={title} className=" hover:cursor-pointer">
        <P>{price}</P>
      </label>

      <div></div>
    </div>
  );
}
