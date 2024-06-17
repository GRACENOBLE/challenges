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
    <div className="border rounded px-1 py-2 flex justify-between">
      <div className="flex gap-1 w-full">
        <input type="checkbox" />
        <div className="">
          <H2>{title}</H2>
          <p className="text-slate-300 text-xs">{description}</p>
        </div>
      </div>
      <P>{price}</P>
      <div></div>
    </div>
  );
}
