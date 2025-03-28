import { PencilOff } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import React from "react";
import GradientBorderContainer from "../GradientBorderContainer";
import { ChartColumn, FileSpreadsheet } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="flex flex-col gap-3 ml-7 mb-5" id="info-section">
      <div className="flex gap-4">
        <GradientBorderContainer className="w-80 shadow-md">
          <div className="bg-white rounded-2xl w-full h-full flex flex-col gap-2 p-5 justify-center">
            <PencilOff className="size-10 drop-shadow-md" />
            <p className="font-medium">
              Regressionify will only read the file and not write anything
            </p>
          </div>
        </GradientBorderContainer>
        <GradientBorderContainer className="w-60 shadow-md">
          <div className="bg-white rounded-2xl w-full h-full flex flex-col gap-2 p-5 justify-center">
            <LockKeyhole className="size-10 drop-shadow-md" />
            <p className="font-medium">File would be used anonymously</p>
          </div>
        </GradientBorderContainer>
      </div>
      <div className="flex gap-4">
        <GradientBorderContainer className="w-60 shadow-md">
          <div className="bg-white rounded-2xl w-full h-full flex flex-col gap-2 p-5 justify-center">
            <FileSpreadsheet className="size-10 drop-shadow-md" />
            <p className="font-medium">Supports XLSX and XLS files</p>
          </div>
        </GradientBorderContainer>
        <GradientBorderContainer className="w-80 shadow-md">
          <div className="bg-white rounded-2xl w-full h-full flex flex-col gap-2 p-5 justify-center">
            <ChartColumn className="size-10 drop-shadow-md" />
            <p className="font-medium">
              Predict your data in real-time with ease
            </p>
          </div>
        </GradientBorderContainer>
      </div>
    </section>
  );
};

export default InfoSection;
