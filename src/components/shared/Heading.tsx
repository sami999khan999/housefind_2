import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`capitalize bg-foreground text-secondary w-fit px-4 py-2 text-[18px] font-medium rounded-sm h-fit !${className} `}
    >
      {children}
    </div>
  );
};

export default Heading;
