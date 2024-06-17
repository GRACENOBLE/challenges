"use client";
import H1 from "@/components/multiStepForm/H1";
import P from "@/components/multiStepForm/P";
import PlanContainer from "@/components/multiStepForm/PlanCOntainer";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuJoystick } from "react-icons/lu";
import { BiJoystickAlt } from "react-icons/bi";

const page = () => {
  const plans: {
    icon: React.ReactNode;
    title: string;
    price: string;
    color: string;
  }[] = [
    {
      icon: <LuJoystick />,
      title: "Arcade",
      price: "$9/mo",
      color: "bg-orange-300",
    },
    {
      icon: <BiJoystickAlt />,
      title: "Advanced",
      price: "$12/mo",
      color: "bg-red-300",
    },
    {
      icon: <IoGameControllerOutline />,
      title: "Pro",
      price: "$15/mo",
      color: "bg-blue-500",
    },
  ];

  const [selected, setSelected] = useState("");

  return (
    <div>
      <H1>Select Your Plan</H1>
      <div className="py-2">
        <P>You have the option of monthly or Yearly billing</P>
      </div>

      <div className="flex flex-col">
        {plans.map(({ icon, title, price, color }) => (
          <button onClick={() => setSelected(title)}>
            <PlanContainer
              icon={icon}
              title={title}
              price={price}
              color={color}
              selected={selected}
            />
          </button>
        ))}
      </div>

      <div className=" flex justify-center items-center gap-4 bg-slate-100 py-2 rounded-md">
        <Label htmlFor="airplane-mode" className="text-xs">
          Monthly
        </Label>
        <Switch id="airplane-mode" className="" />
        <Label htmlFor="airplane-mode" className="text-xs">
          Yearly
        </Label>
      </div>
    </div>
  );
};

export default page;
