import { cn } from "@/lib/utils";
import React from "react";

const GradientBorderContainer = ({
  children,
  className,
  padding = "p-[3px]",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={cn(
        `rounded-2xl bg-gradient-to-tr from-[#D7426E] to-[#EDE7BD] ${padding}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default GradientBorderContainer;
