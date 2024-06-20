import Link from "next/link";
import React from "react";

const page = () => {
  const projects: { title: string; path: string }[] = [
    {
      title: "Project 1",
      path: "/multiStepForm/personalInfo",
    },
    {
      title: "Project 2",
      path: "/interactivePricingComponent",
    },
    {
      title: "",
      path: "",
    },
    {
      title: "",
      path: "",
    },
  ];
  return (
    <div>
      <ul>
        {projects.map(({ title, path }) => (
          <li><Link href={path}>{title}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default page;
