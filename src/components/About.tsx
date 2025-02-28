import Image from "next/image";
import React from "react";
import { aboutDetails } from "@/lib/data";
import { Button } from "./ui/button";
import { RiArrowRightUpFill } from "react-icons/ri";
import Heading from "./shared/Heading";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="padding-x flex flex-col 640p:flex-row my-[4rem] 640p:my-[10rem]">
        <div className="640p:w-[60%] 640p:flex hidden ">
          <div className="bg-about bg-cover bg-center relative flex gap-8">
            {/* Left Image */}
            <Image
              src={"/about/left.png"}
              width={361}
              height={460} // Reduced height
              alt="about-image-2"
              className="1080p:w-[361px] 1080:h-[460px] 640p:w-[330px] object-contain"
            />

            {/* Right Images Wrapper */}
            <div className="h-full">
              <Image
                src={"/about/right-top.png"}
                width={361}
                height={380} // Increased height
                alt="about-image-2"
                className="relative bottom-4 1080p:w-[361px] 1080:h-[380px] 640p:w-[310px] object-contain"
              />
              <Image
                src={"/about/right-bottom.png"}
                width={361}
                height={340} // Increased height
                alt="about-image-2"
                className="relative top-4 1080p:w-[361px] 1080:h-[380px] 640p:w-[310px] object-contain"
              />
            </div>

            {/* Centered "Our Happy Customers" Section */}
            <div className="absolute bg-background px-8 py-5 space-y-4 rounded-lg left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-primary-foreground 1080p:text-2xl 640p:text-xl font-semibold text-center">
                Our Happy Customers
              </p>
              <Image
                src={"/about/customers.png"}
                width={236}
                height={100}
                alt="customers"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="640p:w-[40%] flex flex-col gap-8 items-center 640p:items-start">
          <div className="flex flex-col gap-2 items-center 640p:items-start">
            <Heading>About Housebox</Heading>
            <h2 className="text-primary-foreground text-[34px] 640p:text-[44px] font-bold w-full 640p:w-[25rem] leading-tight text-center 640p:text-left">
              Embrace the Elegance Our Exclusive Property
            </h2>
            <p className="text-primary-foreground w-fit 640p:w-[474.68px] text-[18px] text-center 640p:text-left">
              At HouseBox, we’re redefining the way people find, sell, and
              invest in properties. Our mission is to simplify real a estate by
              provide innovative solutions, expert guidance.
            </p>
          </div>

          <div className="border-y-2 flex text-primary-foreground justify-between 640p:w-[474.68px] px-4 py-8 w-full">
            <div className="flex flex-col items-center">
              <p className="640p:text-4xl text-2xl font-semibold">
                {aboutDetails.homeSold}
              </p>
              <p className="640p:w-fit text-xs font-medium 640p:text-base">
                Home Soled
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="640p:text-4xl text-2xl font-semibold">
                {aboutDetails.happyClients}
              </p>
              <p className="640p:w-fit text-xs font-medium 640p:text-base">
                Happy Clients
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="640p:text-4xl text-2xl font-semibold">
                {aboutDetails.satisfactionRate}
              </p>
              <p className=" 640p:w-fit text-xs font-medium 640p:text-base">
                Satisfaction Rate
              </p>
            </div>
          </div>

          <Button className="w-fit py-6 px-5 text-primary-foreground tracking-wide text-base hover:bg-primary-foreground hover:text-background">
            See All Properties <RiArrowRightUpFill size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
