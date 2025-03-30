import { PencilOff } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import React from "react";
import GradientBorderContainer from "../GradientBorderContainer";
import { ChartColumn, FileSpreadsheet } from "lucide-react";
import InfoBox from "./InfoBox";

const iconStyle = "size-8 drop-shadow-md";

const InfoSection = () => {
  return (
    <section className="flex flex-col gap-3 ml-7 mb-5" id="info-section">
      <div className="flex gap-4">
        <InfoBox
          width="w-72"
          icon={<PencilOff className={iconStyle} />}
          text="Regressionify will only read the file and not write anything"
        />
        <InfoBox
          width="w-52"
          icon={<LockKeyhole className={iconStyle} />}
          text="File would be used anonymously"
        />
      </div>
      <div className="flex gap-4">
        <InfoBox
          width="w-52"
          icon={<FileSpreadsheet className={iconStyle} />}
          text="Supports XLSX and XLS files"
        />
        <InfoBox
          width="w-72"
          icon={<ChartColumn className={iconStyle} />}
          text="Predict your data in real-time with ease"
        />
      </div>
    </section>
  );
};

export default InfoSection;
