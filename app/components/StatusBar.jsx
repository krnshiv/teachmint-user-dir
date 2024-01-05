import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import CountryDropdown from "./CountryDropdown";

const Clock = dynamic(() => import("./Clock"), { ssr: false });

const StatusBar = ({ selectedCountry, handleCountryChange }) => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex xl:flex-row lg:flex-row md:flex-row flex-col items-center justify-between bg-blue-600 text-white p-4 gap-4">
      <div className="h-full flex justify-start items-start xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full">
        <button
          className="rounded-xl p-1 w-[75px] bg-blue-600 text-white border-[1px] text-[12px] hover:bg-white hover:text-blue-700"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
        </div>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-row xl:justify-end lg:justify-end md:justify-end justify-between items-end  xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full gap-4">
        <CountryDropdown onSelect={handleCountryChange} />
        <Clock suppressHydrationWarning={true} timeZone={selectedCountry} />
      </div>
    </div>
  );
};

export default StatusBar;
