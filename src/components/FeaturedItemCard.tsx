import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { BsTextarea } from "react-icons/bs";

type FeedBackType = {
  title: string;
  location: string;
  price: number;
  name: string;
  customerPhoto: string;
  facilities: {
    bed: number;
    bath: number;
    area: number;
  };
};

const FeaturedItemCard = (item: FeedBackType) => {
  return (
    <div className="flex flex-col 640p:flex-row justify-between 640p:gap-10">
      {/* Feedback Image (Hidden on Mobile) */}
      <div>
        <Image
          src={"/best-featured-item.png"}
          width={600}
          height={562}
          alt="Feedback"
          className="hidden 640p:block"
        />
      </div>

      <div className="bg-background rounded-2xl p-6 640p:p-10 640p:w-[60%] text-primary-foreground border space-y-4 640p:space-y-6">
        <div className="relative top-0 left-0  flex gap-4 640p:text-lg mb-5">
          <p className="bg-secondary px-3 py-1 rounded-md text-foreground">
            Featured
          </p>
          <p className="bg-primary px-3 py-1 rounded-md text-primary-foreground">
            For Sale
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-primary-foreground text-[28px] font-semibold tracking-wide line-clamp-1">
            {item.title}
          </h2>
          <p className="text-muted 640p:text-[20px] flex gap-2 items-center line-clamp-1">
            <FaMapMarkerAlt />
            <span className="line-clamp-1">{item.location}</span>
          </p>

          <div className="text-[16px] text-muted flex gap-4">
            <div className="flex items-center justify-center gap-2 border rounded-full w-fit px-4 py-2 cursor-pointer">
              <IoBedOutline size={20} /> x{item.facilities?.bed}{" "}
              <span className="hidden 640p:block">Beds</span>
            </div>
            <div className="flex items-center justify-center gap-2 border rounded-full w-fit px-4 py-2 cursor-pointer">
              <LuBath size={20} /> x{item.facilities?.bath}{" "}
              <span className="hidden 640p:block">Baths</span>
            </div>
            <div className="flex items-center justify-center gap-2 border rounded-full w-fit px-4 py-2 cursor-pointer">
              <BsTextarea size={20} /> {item.facilities?.area}{" "}
              <span className="hidden 640p:block">sq</span>
            </div>
          </div>
        </div>

        <div className="border-t 640p:my-6 1080p:my-9 my-5"></div>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center text-primary-foreground text-base font-semibold">
            <div className="text-primary-foreground w-10 1080p:w-16 flex items-center justify-center aspect-square rounded-full">
              <Image
                src={item.customerPhoto}
                width={120}
                height={120}
                alt="Customer"
              />
            </div>
            <p className="1080p:text-lg capitalize ">{item.name}</p>
          </div>
          <Button className="text-foreground bg-secondary text-[16px] font-normal px-6 py-5 hover:bg-primary-foreground hover:text-secondary-foreground tracking-wider">
            ${formatNumber(item.price)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItemCard;
