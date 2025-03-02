"use client";

import React from "react";
import { Button } from "./ui/button";
import { RiArrowRightUpFill } from "react-icons/ri";
import Heading from "./shared/Heading";
import { feedbackData } from "@/lib/data";
import Image from "next/image";
import FeedBackItem, { FeedBackType } from "./FeedBackItem";

const FeedBack = () => {
  const [selectedItem, setSelectedItem] = React.useState<FeedBackType>(
    feedbackData[0]
  );

  return (
    <div className="flex justify-center bg-secondary-foreground">
      <div className="padding-x my-[5rem]">
        <div className=" flex flex-col 640p:flex-row  justify-between w-full  640p:items-start items-center mb-5 text-center">
          <div className="flex items-center 640p:items-start flex-col mb-3 640p:mb-0">
            <Heading>Trusted by Thousand people</Heading>
            <h1 className="text-[35px] 1080p:text-[44px] text-primary-foreground font-semibold">
              Hear Our Happy Clients
            </h1>
          </div>

          <Button className="w-fit py-6 px-5 text-primary-foreground tracking-wide text-base hover:bg-primary-foreground hover:text-background">
            See All Properties <RiArrowRightUpFill size={20} />
          </Button>
        </div>

        <div className="flex flex-col 640p:flex-row justify-between  gap-16 items-center">
          <FeedBackItem item={selectedItem} />
          <div className="flex 640p:flex-col gap-4 mt-4 640p:mt-0">
            {feedbackData.map((item, index) => (
              <div
                key={index}
                className={`bg-secondary p-1 rounded-full w-fit flex items-center justify-center cursor-pointer hover:bg-primary duration-200 ${
                  selectedItem.name === item.name ? "bg-yellow-500" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.photo}
                  width={70}
                  height={70}
                  alt="Customer Image"
                  className="w-[50px] aspect-square 640p:w-[70px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
