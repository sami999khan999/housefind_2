"use client";

import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { navDropdownData } from "@/lib/data";

// Import shadcn Dropdown components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const MobileNav = () => {
  return (
    <div className="bg-background h-[3.8rem] 640p:hidden w-full flex items-center justify-between px-4">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" width={35} height={30} alt="logo" />
        <p className="text-xl text-primary-foreground font-bold tracking-wide">
          HOUSEFIND
        </p>
      </div>

      {/* Menu Button (Opens Sidebar) */}
      <Sheet>
        <SheetTrigger className="text-primary-foreground">
          <IoIosMenu size={30} />
        </SheetTrigger>

        {/* Sidebar Content */}
        <SheetContent side="left" className="bg-background w-64 p-5">
          {/* Logo Inside Sidebar */}
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logo.png" width={35} height={30} alt="logo" />
            <p className="text-xl text-primary-foreground font-bold tracking-wide">
              HOUSEFIND
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col gap-3 w-full ">
            {navDropdownData.map((dropdown) => (
              <DropdownMenu key={dropdown.name}>
                <DropdownMenuTrigger className="w-full text-left flex items-center justify-between text-primary-foreground font-semibold py-2">
                  {dropdown.name}
                  <IoIosArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full border-b">
                  {dropdown.item.map((item) => (
                    <DropdownMenuItem key={item.link} className="px-2 py-1">
                      <Link
                        href={item.link}
                        className="block text-base font-medium text-primary-foreground hover:text-secondary-foreground"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Search & View Listing */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="mt-6 flex items-center gap-2 border border-border rounded-md px-3 py-2">
              <BiSearch size={20} className="text-primary-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:ring-0 text-primary-foreground placeholder:text-gray-400 w-full outline-none"
              />
            </div>
            <Button className="w-full flex items-center justify-center text-secondary-foreground px-6 py-3 text-base gap-3 hover:bg-primary-foreground">
              <p>View Listing</p>
              <RiArrowRightUpFill className="w-6 h-6" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
