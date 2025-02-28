"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { countries, navDropdownData } from "@/lib/data";

const Navbar = () => {
  // State to manage selected country in dropdown
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);

  return (
    <nav className="320p:hidden 640p:block">
      <div className="flex justify-center">
        <div className="padding-x h-[90px] flex items-center justify-between">
          <Logo />
          {/* Navigation Menu with Dropdowns */}
          <div className="flex gap-2 z-50">
            {navDropdownData.map((dropdown) => (
              <DropdownMenu key={dropdown.name}>
                <DropdownMenuTrigger className="bg-transparent text-primary-foreground border-none px-3 py-1 rounded-sm outline-none cursor-pointer font-semibold tracking-wide flex items-center justify-center gap-1 hover:bg-foreground duration-100">
                  {dropdown.name}
                  <IoIosArrowDown />
                </DropdownMenuTrigger>

                {/* Dropdown Menu Content */}
                <DropdownMenuContent className="bg-white text-primary-foreground text-xl space-y-1 rounded-tr-[10px] rounded-bl-[10px] border border-secondary shadow-sm shadow-primary-foreground">
                  {dropdown.item.map((item, i) => (
                    <DropdownMenuItem
                      key={item.link}
                      className={`outline-none hover:bg-primary hover:text-secondary-foreground  ${
                        i === 0 ? "rounded-tr-[10px]" : "rounded-none"
                      } ${
                        i === dropdown.item.length - 1
                          ? "rounded-bl-[10px]"
                          : "rounded-none"
                      }`}
                    >
                      <a
                        href={item.link}
                        className="text-lg px-4 outline-none "
                      >
                        {item.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Search & View Listing Button */}
          <div className="text-primary-foreground flex items-center justify-center gap-4">
            {/* Search Icon */}
            <div>
              <BiSearch size={30} />
            </div>
            <div className="ceperator h-[30px]"></div>

            {/* View Listing Button */}
            <Button className="flex items-center justify-center text-primary-foreground px-6 py-7 text-base gap-3 hover:bg-primary-foreground">
              <p>View Listing</p>
              <RiArrowRightUpFill className="inline-block w-10 h-10" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
