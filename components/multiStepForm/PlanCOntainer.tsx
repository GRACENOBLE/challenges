import React from "react";
import H2 from "./H2";
import P from "./P";

export default function PlanCOntainer({
  icon,
  title,
  price,
  color
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
  color: string
}) {
  return (
    <div className="border rounded px-2 mb-2 py-2">
      <div className="flex">
        <div className={`h-10 w-10 rounded-full ${color} grid place-items-center mr-2 text-white`}>
          {icon}
        </div>
        <div className="flex flex-col">
          <H2>{title}</H2>
          <p className="text-sm text-slate-300 font-light">{price}</p>
        </div>
      </div>
    </div>
  );
}
