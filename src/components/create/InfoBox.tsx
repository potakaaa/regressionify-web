import React from "react";
import GradientBorderContainer from "../GradientBorderContainer";
import { PencilOff } from "lucide-react";

const InfoBox = ({
  icon,
  text,
  width,
}: {
  icon: React.ReactNode;
  text: string;
  width: string;
}) => {
  return (
    <GradientBorderContainer className={`${width} shadow-md`}>
      <div className="bg-white rounded-2xl w-full h-full flex flex-col gap-2 p-3 lg:p-5 justify-center">
        {icon}
        <p className="font-medium tracking-tight text-xs lg:text-sm">{text}</p>
      </div>
    </GradientBorderContainer>
  );
};

export default InfoBox;
