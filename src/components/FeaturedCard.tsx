"use client";

import { formatNumber } from "@/lib/utils";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { BsTextarea } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Button } from "./ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";

type Property = {
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
  coordinates: { lat: number; lng: number }; // Added coordinates for map
};

const FeaturedCart = ({ item }: { item: Property }) => {
  return (
    <div className="w-full flex flex-col 640p:flex-row gap-6">
      {/* Image Section */}
      <div className="640p:w-[66%] flex flex-col 640p:flex-row">
        <div className="rounded-t-2xl 640p:rounded-t-none 640p:rounded-l-2xl 640p:w-[50%] overflow-hidden relative">
          <Image
            src={"/featured-card-img.png"}
            width={416}
            height={293}
            alt="card-img"
            className="w-full"
          />
          <div className="absolute top-4 left-4 flex gap-3 text-[16px] font-medium cursor-pointer">
            <div className="bg-background rounded-sm text-primary-foreground w-fit px-4 py-1.5">
              Featured
            </div>
            <div className="bg-background rounded-sm text-primary-foreground w-fit px-4 py-1.5">
              For Sale
            </div>
          </div>
        </div>

        {/* Property Details Section */}
        <div className="pr-6 640p:pl-10 pl-6 py-6 rounded-b-2xl 640p:rounded-b-none 640p:rounded-r-2xl bg-background 640p:w-[50%]">
          <div className="space-y-4">
            <h2 className="text-primary-foreground text-[24px] font-semibold tracking-wide">
              {item.title}
            </h2>
            <p className="text-muted text-[16px] font-semibold flex gap-2 items-center">
              <FaMapMarkerAlt />
              {item.location}
            </p>

            <div className="text-[16px] text-muted flex gap-4">
              <div className="flex items-center justify-center gap-2 border rounded-full w-fit px-4 py-2 cursor-pointer">
                <IoBedOutline size={20} /> x{item.facilities.bed}
              </div>
              <div className="flex items-center justify-center gap-2 border rounded-full w-fit px-4 py-2 cursor-pointer">
                <LuBath size={20} /> x{item.facilities.bath}
              </div>
              <div className="flex items-center justify-center gap-2 border rounded-full w-fit px-4 py-2 cursor-pointer">
                <BsTextarea size={20} /> {item.facilities.area}{" "}
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
      {/* Map Section */}
      <div className="w-[33%] border rounded-lg hidden 640p:block">
        <MapContainer
          center={[item.coordinates.lat, item.coordinates.lng]}
          zoom={30}
          style={{ height: "100%", width: "100%", borderRadius: "10px" }}
        >
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
          <Marker position={[item.coordinates.lat, item.coordinates.lng]}>
            <Popup>{item.title}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default FeaturedCart;
