import React from "react";
import Heading from "./shared/Heading";
import Image from "next/image";

const PropertyLoactions = () => {
  return (
    <div className="flex justify-center">
      <div className="padding-x py-[5rem]">
        <div className="flex items-center flex-col gap-3">
          <Heading>property location</Heading>
          <h1 className="text-[35px] 640p:w-[30rem] leading-10 1080p:text-[44px] text-center text-primary-foreground font-semibold">
            Explore Our Property Locations
          </h1>
        </div>

        <div className="space-y-6 mt-12">
          <div className="1080p:h-[330px] 640p:h-[270px] w-full flex flex-col 640p:flex-row justify-between gap-6">
            <Image
              src={"/properties/property-1.png"}
              width={306}
              height={310}
              alt="Property-1"
              className="w-full"
            />
            <Image
              src={"/properties/property-2.png"}
              width={416}
              height={310}
              alt="Property-2"
              className="w-full"
            />
            <Image
              src={"/properties/property-3.png"}
              width={526}
              height={310}
              alt="Property-3"
              className="w-full"
            />
          </div>
          <div className="1080p:h-[330px] 640p:h-[270px] w-full flex flex-col 640p:flex-row justify-between gap-5">
            <Image
              src={"/properties/property-3.png"}
              width={526}
              height={310}
              alt="Property-3"
              className="w-full"
            />
            <Image
              src={"/properties/property-2.png"}
              width={416}
              height={310}
              alt="Property-2"
              className="w-full"
            />
            <Image
              src={"/properties/property-1.png"}
              width={306}
              height={310}
              alt="Property-1"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLoactions;
