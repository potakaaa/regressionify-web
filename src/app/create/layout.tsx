import GradientBorderContainer from "@/components/GradientBorderContainer";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="parent-container"
      className="w-full min-h-screen p-2 lg:p-5 bg-white overflow-hidden shadow-lg flex items-center justify-center"
    >
      <div
        id="child-container"
        className="w-full h-full bg-gradient-to-t from-[#FFEDD5] to-[#DBEAFE] p-5 lg:p-5 xl:p-16 2xl:p-20 px-2 lg:px-5 xl:px-16 2xl:px-40 flex items-center justify-center self-center overflow-hidden rounded-2xl shadow-sm"
      >
        <GradientBorderContainer
          id="gradient-border"
          className="w-full shadow-lg h-full lg:h-[750px]"
          padding="p-[3px] lg:p-[5px]"
        >
          {children}
        </GradientBorderContainer>
      </div>
    </div>
  );
};

export default layout;
