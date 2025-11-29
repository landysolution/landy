"use client"
import React from "react";
import Image from "next/image";
const CafeBar = ({ cafe }) => {
  return (
    <div className="relative">
      <Image src={cafe.images[0]} alt="cafe banner" fill/>
    </div>
  )
};

export default CafeBar;
