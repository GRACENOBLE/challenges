import H1 from "@/components/multiStepForm/H1";
import P from "@/components/multiStepForm/P";
import AddOnComponent from "@/components/multiStepForm/AddOnComponent";
import React from "react";

export default function page() {
  const addons: { title: string; description: string; price: string }[] = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      price: "+51/mo",
    },
    {
      title: "Larger storage",
      description: "Extra 1Tb of cloud storage",
      price: "+52/mo",
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: "+52/mo",
    },
  ];
  return (
    <div>
      <H1>Pick add-ons</H1>
      <P>Add-ons help enhance your gaming experience</P>
      <div className="flex flex-col gap-2">
        {addons.map(({ title, description, price }) => (
          <AddOnComponent
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}
