import Image from 'next/image';
import React from 'react'

export default function Check() {
  return (
    <Image
      src={"/images/ipc/icon-check.svg"}
      alt={""}
      width={1000}
      height={1000}
      className="w-2"
    />
  );
}
