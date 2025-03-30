import { useFile } from "@/store/file/useFile";
import { Check } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ProgressBar = () => {
  const { step } = useFile();
  return (
    <div className="flex justify-between w-full relative">
      <div className="flex flex-col gap-2 items-center justify-center relative z-10">
        <span className="bg-gradient-to-tr from-[#D7426E] to-[#EDE7BD] rounded-full size-12" />
        <p className="text-sm font-medium">Upload File</p>
        {step >= 1 && (
          <motion.div
            className="absolute top-3 drop-shadow-lg"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Check className="size-6 text-white" />
          </motion.div>
        )}
      </div>
      <div className="flex flex-col gap-2 items-center justify-center z-10">
        <span className="bg-gradient-to-tr from-[#D7426E] to-[#EDE7BD] rounded-full size-12" />
        <p className="text-sm font-medium">Select Sheet</p>
        {step >= 2 && (
          <motion.div
            className="absolute top-3 drop-shadow-lg"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Check className="size-6 text-white" />
          </motion.div>
        )}
      </div>
      <div className="flex flex-col gap-2 items-center justify-center z-10">
        <span className="bg-gradient-to-tr from-[#D7426E] to-[#EDE7BD] rounded-full size-12" />
        <p className="text-sm font-medium">Select Columns</p>
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              className="absolute top-3 drop-shadow-lg"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              exit={{ y: 10, opacity: 0 }}
            >
              <Check className="size-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="absolute top-5 left-5 w-[90%] h-2 bg-primary/70 shadow-md rounded-full" />
    </div>
  );
};

export default ProgressBar;
