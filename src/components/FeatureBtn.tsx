"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const FeatureBtn = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  const searchParams = useSearchParams();
  const selectedParam = searchParams.get("featuredParams") || "forSale";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    window.history.pushState({}, "", `?featuredParams=${label}`);
  };

  return (
    <Button
      className={`bg-foreground text-foreground px-6 py-8 text-[20px] font-normal rounded-sm hover:bg-primary-foreground hover:text-foreground ${
        selectedParam === label
          ? "bg-secondary text-foreground"
          : "bg-foreground text-secondary"
      }`}
    >
      <Link
        className="flex items-center justify-center gap-2 font-medium"
        href={`?featuredParams=${label}`}
        onClick={handleClick}
      >
        {children}
      </Link>
    </Button>
  );
};

export default FeatureBtn;
