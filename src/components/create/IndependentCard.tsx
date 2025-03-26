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
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-32 overflow-hidden text-ellipsis inline-block cursor-pointer"
        >
          {independents.length > 0
            ? independents.map((item, index) =>
                index === independents.length - 1 ? item : item + ", "
              )
            : "Select Independent"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select Independent Variables</AlertDialogTitle>
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
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer"
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
