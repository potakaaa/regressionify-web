import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import SheetDropDown from "./SheetDropdown";
import { Trash } from "lucide-react";
import { useFile } from "@/store/file/useFile";
import { useEffect, useState } from "react";
import GradientBorderContainer from "../GradientBorderContainer";

const IndependentCard = () => {
  const { independents, setIndependents, columns, dependent } = useFile();
  const [tempIndependents, setTempIndependents] = useState<string[]>([]);

  const handleAddIndependent = (independent: string) => {
    if (!tempIndependents.includes(independent)) {
      setTempIndependents([...tempIndependents, independent]);
    } else {
      console.log(`${independent} already exists in the list.`);
    }
  };

  const handleDeleteIndependent = (independent: string) => {
    setTempIndependents(
      tempIndependents.filter((item) => item !== independent)
    );
    setIndependents(independents.filter((item) => item !== independent));
  };

  const handleSaveIndependents = () => {
    setIndependents(tempIndependents);
  };

  console.log("columns: ", columns);
  console.log("dependent: ", dependent);
  console.log("independents: ", independents);
  console.log(
    "filtered:",
    columns.filter((column) => column !== dependent)
  );

  useEffect(() => {
    setIndependents([]);
    setTempIndependents([]);
  }, [dependent]);

  return (
    <AlertDialog>
      <GradientBorderContainer
        padding="p-[3px]"
        className="pointer-events-auto"
      >
        <AlertDialogTrigger asChild>
          <Button
            variant="ghost"
            className="w-80 py-5 rounded-xl bg-white text-base overflow-hidden text-ellipsis cursor-pointer shadow-md"
          >
            {independents.length > 0
              ? independents.map((item, index) =>
                  index === independents.length - 1 ? item : item + ", "
                )
              : "Select Independent"}
          </Button>
        </AlertDialogTrigger>
      </GradientBorderContainer>
      <AlertDialogContent className="w-[500px] h-[200px] flex flex-col justify-between">
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-5">
            Select Independent Variables
          </AlertDialogTitle>
          <div className="flex flex-row justify-between">
            <div className="grid grid-cols-3 gap-3">
              {tempIndependents.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row p-2 items-center justify-between border border-border rounded-lg w-24"
                >
                  <p className=" text-ellipsis inline-block overflow-hidden">
                    {item}
                  </p>
                  <button
                    className="hover:bg-foreground/5 p-1 rounded-lg cursor-pointer"
                    onClick={() => handleDeleteIndependent(item)}
                  >
                    <Trash size={15} className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
            <SheetDropDown
              propList={columns.filter((column) => column !== dependent)}
              onClick={handleAddIndependent}
              customWidth="w-[150px]"
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer rounded-xl bg-gradient-to-tr  from-[#EF4444] to-[#FDE68A] text-white text-sm font-medium shadow-lg hover:bg-gradient-to-tr hover:from-[#EF4444]/80 hover:to-[#FDE68A]/80 duration-200 transition-all"
            onClick={handleSaveIndependents}
          >
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default IndependentCard;
