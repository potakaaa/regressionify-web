"use client";

import { motion } from "framer-motion";
import SheetDropDown from "./SheetDropdown";
import { useState } from "react";
import {
  formElementMotion,
  formMotion,
} from "@/utils/create/createMotionVariants";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import IndependentCard from "./IndependentCard";

const sheetNames = ["Sheet1", "Sheet2", "Sheet3"];
const dependent = ["Y1", "Y2", "Y3"];

const CreateForm = () => {
  const [sheetname, setSheetname] = useState<string | null>(null);
  const [sheetList, setSheetList] = useState<string[]>([]);
  const [columnList, setColumnList] = useState<string[]>([]);
  const [filePath, setFilePath] = useState<string | null>(null);

  return (
    <motion.section
      id="form-container"
      className="space-y-3 w-72 flex flex-col justify-center"
      variants={formMotion}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={formElementMotion}
        className="font-extrabold text-xl text-primary"
      >
        Worksheet Details
      </motion.h1>
      <motion.div
        id="sheet-name-container"
        className="w-full flex flex-row justify-between items-center"
        variants={formElementMotion}
      >
        <p className="text-sm w-32 font-medium">Reference Sheet Name</p>
        <SheetDropDown propList={sheetNames} />
      </motion.div>
      <motion.div
        variants={formElementMotion}
        id="dependent-var-container"
        className="w-full flex flex-row justify-between items-center"
      >
        <p className="text-sm w-32 font-medium">Dependent Variable</p>
        <SheetDropDown propList={dependent} />
      </motion.div>
      <motion.div
        variants={formElementMotion}
        id="independent-var-container"
        className="w-full flex flex-row justify-between items-center"
      >
        <p className="text-sm w-32 font-medium">Independent Variable</p>
        <IndependentCard />
      </motion.div>
      <motion.div
        variants={formElementMotion}
        id="file-upload-container"
        className="w-full pt-7 space-y-1"
      >
        <Label className="text-sm font-medium ml-1">Upload Excel File</Label>
        <Input
          type="file"
          accept=".xlsx, .xls"
          className="text-sm hover:cursor-pointer hover:bg-zinc-800 duration-300"
        />
      </motion.div>
    </motion.section>
  );
};

export default CreateForm;
