import Image from "next/image";
import React from "react";
import { RiStarFill, RiStarLine } from "react-icons/ri"; // Importing star icons from react-icons

export type FeedBackType = {
  name: string;
  feedback: string;
  photo: string;
  position: string;
  stars: number;
};

const FeedBackItem = ({ item }: { item: FeedBackType }) => {
  return (
    <div className="flex flex-col 640p:flex-row justify-between 640p:gap-12 w-full">
      <div className="">
        <Image
          src={"/feedback.png"}
          width={550}
          height={336}
          alt="Feedback"
          className="hidden 640p:block"
        />
      </div>

      <div className="w-full 640p:w-[55%]">
        <div className="bg-secondary p-7 rounded-lg h-fit">
          <div className="flex justify-between">
            <div className="flex items-center">
              {/* Render filled stars based on the `item?.stars` value */}
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="bg-[#094d47ef] backdrop-blur-lg p-[3px] rounded-sm mr-1.5"
                >
                  {index < (item?.stars ?? 0) ? (
                    <RiStarFill size={20} color="#FFD700" />
                  ) : (
                    <RiStarLine size={20} color="#FFD700" />
                  )}
                </div>
              ))}
            </div>
            <Image src={"/coma.png"} width={30} height={30} alt="Coma" />
          </div>
          <p className="text-[18px] mt-5 text-gray-300 tracking-wide leading-relaxed">
            {item?.feedback}
          </p>
        </div>
        <div className="flex items-center 1080p:mt-[4.8rem] 640p:mt-6 gap-4 mt-4">
          <Image src={item.photo} width={70} height={70} alt="Customer" />
          <div>
            <h1 className="text-primary-foreground font-semibold text-[18px] mt-3">
              {item.name}
            </h1>
            <p className="text-muted text-[14px]">{item.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackItem;
