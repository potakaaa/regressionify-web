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
import { useIndependents } from "@/store/independents/useIndependent";

const independent = ["X1", "X2", "X3"];

const IndependentCard = () => {
  const { independents, setIndependents } = useIndependents();

  const handleAddIndependent = (independent: string) => {
    if (!independents.includes(independent)) {
      setIndependents([...independents, independent]);
    } else {
      console.log(`${independent} already exists in the list.`);
    }
  };

  const handleDeleteIndependent = (independent: string) => {
    setIndependents(independents.filter((item) => item !== independent));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-32 overflow-hidden text-ellipsis inline-block"
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
          <AlertDialogDescription>
            <div className="flex flex-row justify-between">
              <div className="grid grid-cols-3 gap-3">
                {independents.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row p-2 items-center justify-between border border-border rounded-lg w-24"
                  >
                    <p className=" text-ellipsis inline-block overflow-hidden">
                      {item}
                    </p>
                    <button
                      className="hover:bg-white hover:bg-opacity-10 p-1 rounded-lg"
                      onClick={() => handleDeleteIndependent(item)}
                    >
                      <Trash size={15} className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
              <SheetDropDown
                propList={independent}
                onClick={handleAddIndependent}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default IndependentCard;
