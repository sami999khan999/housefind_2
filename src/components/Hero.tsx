"use client";

import { searchParamaData } from "@/lib/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Button } from "./ui/button";
import SearchParamSelect from "./SearchParamSelect";

const Hero = () => {
  const searchParams = useSearchParams();
  const selectedParam = (searchParams.get("searchSelectedParam") ??
    "forSale") as keyof typeof searchParamaData;

  return (
    <div className="bg-hero bg-cover bg-center flex items-center flex-col top-0">
      {/* Spacer for large screens */}

      <div className="padding-x 640p:mt-[10%] 320p:mt-8 h-fit mb-[4rem] flex flex-col items-center">
        {/* Heading section */}
        <div className="w-full flex flex-col items-center 640p:items-start gap-4">
          <h1 className="!text-background text-lg 640p:text-2xl bg-white/15 backdrop-blur-sm px-4 py-1 rounded-md font-normal tracking-wide text-opacity-10 ">
            Discover Your Ideal Property Today!
          </h1>

          <h1 className="text-[30px] text-center 640p:text-left 640p:text-[70px] 1080p:w-[50%] 640p:w-[70%] font-semibold tracking-wide text-background leading-snug">
            Elegant Homes For Elevated Lifestyles
          </h1>

          {/* Action buttons: Find Dream Home and View Listings */}
          <div className="flex flex-col gap-3 640p:flex-row mb-5">
            <Button className="text-primary-foreground text-base px-5 py-7 hover:bg-primary-foreground hover:text-foreground">
              Find Your Dream Home Now <RiArrowRightUpFill size={20} />
            </Button>
          </div>
        </div>

        {/* Main content wrapper for select category and search options */}
        <div className="flex flex-col items-center 640p:items-start w-full mt-4">
          {/* Select Category (For Sale / For Rent) */}
          <div>
            <div className="w-full flex items-center">
              {/* Link to For Sale category */}
              <Link href={`?searchSelectedParam=forSale`}>
                <Button
                  className={`${
                    selectedParam === "forSale"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary-foreground text-primary-foreground"
                  } text-sm 640p:text-lg py-6 640p:px-16 px-9 rounded-none rounded-tl-lg hover:bg-primary-foreground hover:text-secondary-foreground`}
                >
                  For Sale
                </Button>
              </Link>
              {/* Link to For Rent category */}
              <Link href={`?searchSelectedParam=forRent`}>
                <Button
                  className={`${
                    selectedParam === "forRent"
                      ? "bg-primary text-secondary-foreground"
                      : "bg-secondary-foreground text-primary-foreground"
                  } text-sm 640p:text-lg py-6 640p:px-16 px-9 rounded-none rounded-tr-lg hover:bg-primary-foreground hover:text-secondary-foreground`}
                >
                  For Rent
                </Button>
              </Link>
            </div>
          </div>

          {/* Main container for search options and customization */}
          <div className="bg-background flex flex-col 640p:flex-row justify-between items-center w-full px-6 py-8 border rounded-lg 640p:rounded-b-lg 640p:rounded-tl-none shadow-md 640p:gap-8 gap-4">
            {/* Search parameters section */}
            <div className="flex flex-col 640p:flex-row 640p:gap-8 gap-4 w-[100%] 640p:w-[60%]">
              {searchParamaData[selectedParam]?.map((item, index) => (
                <SearchParamSelect key={index} item={item} index={index} />
              ))}
            </div>

            {/* Customize section */}
            <div className="flex flex-col 640p:flex-row 640p:w-[40%] w-full 640p:gap-8">
              <div className="flex-1">
                {/* Customize text and options */}
                <p className="text-primary-foreground text-center 640p:text-left text-lg font-semibold capitalize mb-1">
                  Customize
                </p>
                <div className="flex justify-between items-center gap-4 bg-secondary-foreground text-lg outline-none border-none py-[10px] px-5 mt-auto w-full">
                  <p className="text-primary-foreground">Advance</p>
                  <MdOutlineDashboardCustomize />
                </div>
              </div>

              {/* Divider between sections */}
              <div className="border-t-2 640p:border-l-2 border-secondary-foreground h-[40px] mt-auto"></div>

              {/* Search button */}
              <div className="mt-auto flex-1">
                <Button className="text-primary-foreground w-full py-6 hover:bg-primary-foreground hover:text-foreground text-lg">
                  Search
                  <CiSearch />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
