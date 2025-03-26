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
      className="space-y-3 w-72 flex flex-col justify-center"
      variants={formMotion}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {filePath.length > 1 && (
          <>
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
              <SheetDropDown
                propList={sheetNames}
                onClick={handleSelectSheet}
              />
            </motion.div>
            {columns.length > 0 && (
              <>
                <motion.div
                  variants={formElementMotion}
                  id="dependent-var-container"
                  className="w-full flex flex-row justify-between items-center"
                >
                  <p className="text-sm w-32 font-medium">Dependent Variable</p>
                  <SheetDropDown
                    propList={columns}
                    onClick={handleSelectDependent}
                  />
                </motion.div>
                <motion.div
                  variants={formElementMotion}
                  id="independent-var-container"
                  className="w-full flex flex-row justify-between items-center"
                >
                  <p className="text-sm w-32 font-medium">
                    Independent Variable
                  </p>
                  <IndependentCard />
                </motion.div>
              </>
            )}
          </>
        )}
      </AnimatePresence>
      <motion.div
        variants={formElementMotion}
        id="file-upload-container"
        className="w-full pt-7 space-y-1"
      >
        <Label className="text-sm font-medium ml-1">Upload Excel File</Label>
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
        />
      </motion.div>
      <Button
        className="w-full cursor-pointer"
        disabled={dependent.length < 1 && independents.length < 1}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </motion.section>
  );
};

export default CreateForm;
