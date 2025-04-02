"use client";

import { AnimatePresence, motion } from "framer-motion";
import SheetDropDown from "./SheetDropdown";
import { useEffect, useRef, useState } from "react";
import {
  formElementMotion,
  formMotion,
} from "@/utils/create/createMotionVariants";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import IndependentCard from "./IndependentCard";
import { useFile } from "@/store/file/useFile";
import { useMutationUploadSheet } from "@/hooks/tanstack/upload-sheet/useMutationUploadSheet";
import { toast } from "sonner";
import { useMutationSheetname } from "@/hooks/tanstack/select-sheetname/useMutationSheetname";
import { Button } from "../ui/button";
import { useMutationColumn } from "@/hooks/tanstack/select-column/useMutationColumn";
import { useResults } from "@/store/results/useResults";
import { FileUpload } from "../ui/file-upload";
import { MultiSelect } from "primereact/multiselect";
import IndependentSelect from "./IndependentSelect";
import GradientBorderContainer from "../GradientBorderContainer";
import ProgressBar from "./ProgressBar";
const dependentSample = ["Y1", "Y2", "Y3"];

const CreateForm = () => {
  const {
    filePath,
    setFilePath,
    fileName,
    setFileName,
    columns,
    dependent,
    setDependent,
    independents,
    setIndependents,
    setColumns,
    sheetName,
    setSheetName,
    sheetNames,
    step,
    setStep,
  } = useFile();

  const { results } = useResults();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    mutateAsync: uploadFile,
    isPending: uploadPending,
    isError: uploadError,
  } = useMutationUploadSheet();

  const {
    mutate: selectSheet,
    isPending: sheetSelectPending,
    isError: sheetSelectError,
  } = useMutationSheetname();

  const {
    mutateAsync: submit,
    isPending: submitPending,
    isError: submitError,
  } = useMutationColumn();

  const handleUploadFile = async (e: any) => {
    if (!e.target.files || !e.target.files[0]) {
      toast.error("No file selected");
      return;
    }

    setFileName(e.target.files[0].name);
    setStep(1);

    // const uploadPromise = new Promise<void>((resolve, reject) => {
    //   try {

    //     resolve();
    //   } catch (error) {
    //     setFileName("");
    //     reject(error);
    //   }
    // });

    try {
      await toast.promise(uploadFile(e.target.files[0]), {
        loading: "Uploading file...",
        success: "File uploaded successfully!",
        error: "An error occurred while uploading the file.",
      });
    } catch (error) {
      console.error("Error uploading file", error);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // useEffect(() => {
  //   console.log("FILE PATH: ", filePath);
  // }, [filePath]);

  const handleSelectSheet = (sheetname: string) => {
    if (sheetname) {
      setSheetName(sheetname);
    }
    const selectSheetPromise = new Promise<void>(async (resolve, reject) => {
      try {
        await selectSheet({ sheetName: sheetname, file_path: filePath });
        setStep(2);
        resolve();
      } catch (error) {
        reject(error);
        setSheetName("");
      }
    });

    toast.promise(selectSheetPromise, {
      loading: "Retrieving columns",
      success: "Columns retrieved successfully!",
      error: "An error occurred while retrieving columns.",
    });

    return selectSheetPromise;
  };

  const handleSelectDependent = (dependent: string) => {
    if (dependent) {
      setDependent(dependent);
      setStep(3);
    }
  };

  const handleSubmit = () => {
    if (independents.length < 1 || dependent.length < 1 || sheetName === "") {
      toast.error("Missing required fields");
      return;
    }
    submit({
      independent: independents,
      dependent: dependent,
      sheetName: sheetName,
      file_path: filePath,
    });
  };

  useEffect(() => {
    console.log("RESULTS: ", results);
  }, [results]);

  return (
    <motion.section
      id="form-container"
      className="space-y-3 w-full h-full py-2 pt-2 flex flex-col justify-between items-center"
      variants={formMotion}
      initial="hidden"
      animate="show"
    >
      <ProgressBar />
      <AnimatePresence>
        {filePath.length > 1 && (
          <motion.div
            className="w-full flex flex-col gap-5 pt-2 lg:pt-0"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              staggerChildren: 0.25,
              delayChildren: 0.25,
            }}
          >
            <motion.h1 className="text-left items-start font-bold self-start text-base sm:text-lg lg:text-base xl:text-xl mb-0 sm:mt-2 md:mt-5 lg:mb-2 lg:mt-0">
              WORKSHEET DETAILS
            </motion.h1>

            <motion.div
              id="sheet-name-container"
              className="w-full flex flex-row justify-between items-center"
            >
              <p className="text-sm sm:text-base xl:text-lg text-black font-medium">
                Reference Sheet Name
              </p>
              <SheetDropDown
                propList={sheetNames}
                onClick={handleSelectSheet}
              />
            </motion.div>
            <AnimatePresence>
              {columns.length > 0 && (
                <>
                  <motion.div
                    id="dependent-var-container"
                    className="w-full flex flex-row justify-between items-center"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="text-sm sm:text-base xl:text-lg text-black font-medium">
                      Dependent Variable
                    </p>
                    <SheetDropDown
                      propList={columns}
                      onClick={handleSelectDependent}
                    />
                  </motion.div>
                  <motion.div
                    id="independent-var-container"
                    className="w-full flex flex-row justify-between items-center"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="text-sm sm:text-base xl:text-lg text-black font-medium">
                      Independent Variable
                    </p>
                    <GradientBorderContainer padding="p-[3px]" className="">
                      <IndependentSelect />
                    </GradientBorderContainer>
                    {/* <IndependentCard /> */}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        variants={formElementMotion}
        id="file-upload-container"
        className="w-full pt-2 space-y-1"
      >
        {/* <Label className="text-sm font-medium ml-1">UPLOAD FILE</Label>
        <Input
          ref={fileInputRef}
          type="file"
          multiple={false}
          onChange={handleUploadFile}
          disabled={uploadPending || submitPending || sheetSelectPending}
          onError={() =>
            toast.error("An error occurred while uploading the file.")
          }
          accept=".xlsx, .xls"
          className="text-sm duration-300 cursor-pointer hover:bg-muted"
        /> */}
        <FileUpload
          onChange={handleUploadFile}
          disabled={uploadPending || submitPending || sheetSelectPending}
        />
      </motion.div>
      <Button
        className="w-full cursor-pointer py-6 rounded-xl bg-gradient-to-tr  from-[#EF4444] to-[#FDE68A] text-white text-base font-bold shadow-lg"
        disabled={dependent.length < 1 && independents.length < 1}
        onClick={handleSubmit}
      >
        START REGRESSION
      </Button>
    </motion.section>
  );
};

export default CreateForm;
