import H1 from "@/components/multiStepForm/H1";
import H2 from "@/components/multiStepForm/H2";
import P from "@/components/multiStepForm/P";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <H1>Finishing up</H1>
      <P>Double-check everything looks okay before confirming</P>
      <div className="bg-slate-50 rounded-md p-2">
        <div className="flex justify-between items-center border-b">
          <div>
            <H2>Arcade [monthly]</H2>
            <Link href={""} className="underline decoration-slate-300">
              <P>change</P>
            </Link>
          </div>
          <H2>$9/mo</H2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <P>Online service</P>
            <H2>+$1/mo</H2>
          </div>
          <div className="flex justify-between">
            <P>Online service</P>
            <H2>+$1/mo</H2>
          </div>
        </div>
      </div>
      <div className="flex items-center my-2 justify-between px-2">
        <P>Total[per month]</P>
        <p className="font-semibold text-sm text-purple-500">+12/mo</p>
      </div>
    </div>
  );
}
