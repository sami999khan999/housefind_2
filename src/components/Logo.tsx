import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src={"/logo.png"} width={55.8} height={51} alt="logo" />
      <p className="text-2xl text-primary-foreground font-bold tracking-wide">
        HOUSEFIND
      </p>
    </div>
  );
};

export default Logo;
