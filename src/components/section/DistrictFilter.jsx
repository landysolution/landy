"use client";
import React, { useState } from "react";
import { districts } from "@/lib/utils";
import { useCafe } from "@/hook/useCafe";
import CafeBar from "../ui/CafeBar";
const DistrictFilter = () => {
  const { cafes, isLoading, mutate } = useCafe();
  const [selected, setSelected] = useState("Бүгд");
  const filtered =
    selected === "Бүгд"
      ? cafes
      : cafes.filter(
          (cafe) => cafe.location.district === selected 
        );
  return (
    <div>
      <div
        className="flex overflow-x-auto gap-2"
        style={{ scrollbarWidth: "none" }}
      >
        {districts.map((dist, index) => (
          <div
            key={index}
            className={`whitespace-nowrap rounded-3xl px-5 py-3 ${
              selected === dist ? "bg-[#3873F2]" : "bg-[#011426]"
            }`}
            onClick={() => setSelected(dist)}
          >
            {dist}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        {filtered.slice(0,1).map((cafe, index) => (
         <CafeBar key={index} cafe={cafe}/>
        ))}
      </div>
    </div>
  );
};

export default DistrictFilter;
