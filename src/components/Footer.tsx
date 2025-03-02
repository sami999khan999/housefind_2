"use client";

import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center bg-secondary-foreground">
      <div className=" padding-x pt-[23rem] 640p:pt-[16rem]">
        <div className="flex flex-col 640p:flex-row 640p:items-start items-center gap-5 justify-between">
          {/* Logo & Description */}
          <div className="flex flex-col items-center 640p:items-start text-center 640p:text-left gap-5">
            <Logo />
            <div className="text-[16px] text-primary-foreground tracking-wide space-y-4 font-medium mt-4">
              <div className="flex items-center justify-center 640p:justify-start gap-3">
                <FaPhoneAlt size={20} /> +1 123 456 7890
              </div>
              <div className="flex items-center justify-center 640p:justify-start gap-3">
                <FaLocationDot size={20} /> 421 Allen, Mexico 4233
              </div>
              <div className="flex items-center justify-center 640p:justify-start gap-3">
                <IoMdMail size={20} /> houseboxesate@com
              </div>
            </div>

            <div className="text-primary-foreground flex gap-4 w-full justify-center 640p:justify-start">
              <Link
                href={"/"}
                className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
              >
                <FaFacebookF size={19} />
              </Link>
              <Link
                href={"/"}
                className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
              >
                <FaLinkedinIn size={19} />
              </Link>
              <Link
                href={"/"}
                className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
              >
                <AiFillInstagram size={19} />
              </Link>
              <Link
                href={"/"}
                className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
              >
                <FaYoutube size={19} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center 640p:text-left">
            <h2 className="text-2xl text-primary-foreground font-bold tracking-wide">
              Category
            </h2>
            <div className="text-[16px] text-primary-foreground tracking-wide space-y-4 font-medium mt-4">
              <p>Modern House</p>
              <p>Cottage House</p>
              <p>Cabin House</p>
              <p>Rambler House</p>
              <p>Pent House</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center 640p:text-left">
            <h2 className="text-2xl text-primary-foreground font-bold tracking-wide">
              Quick Links
            </h2>
            <div className="text-[16px] text-primary-foreground tracking-wide space-y-4 font-medium mt-4 flex flex-col">
              <Link href={"/"} className="hover:underline">
                Terms of Service
              </Link>
              <Link href={"/"} className="hover:underline">
                Privacy Policy
              </Link>
              <Link href={"/"} className="hover:underline">
                Refund Policy
              </Link>
              <Link href={"/"} className="hover:underline">
                Become a Seller
              </Link>
              <Link href={"/"} className="hover:underline">
                Help Center
              </Link>
            </div>
          </div>

          {/* Instagram Posts */}
          <div className="text-center 640p:text-left hidden 640p:block">
            <h2 className="text-2xl text-primary-foreground font-bold tracking-wide mb-4">
              We are here
            </h2>
            <div className="border rounded-lg h-[180px] w-[306px]">
              <MapContainer
                center={[40.7128, -74.006]}
                zoom={13}
                style={{ height: "100%", width: "100%", borderRadius: "10px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />
                <Marker position={[40.7128, -74.006]}>
                  <Popup>New York City</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border border-gray-300 mt-14 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-primary-foreground 640p:text-xl mb-8">
          ©Copyright {currentYear} - Blackrise Themes. All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
