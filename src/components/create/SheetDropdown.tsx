"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FC, useEffect, useState } from "react";
import GradientBorderContainer from "../GradientBorderContainer";

export interface DropDownProps {
  propList: string[];
  onClick?: (selectedValue: string) => void;
  customWidth?: string;
}

const SheetDropDown: FC<DropDownProps> = ({
  propList,
  onClick,
  customWidth,
}: {
  propList: string[];
  onClick?: (selectedValue: string) => void;
  customWidth?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(propList[0]);

  // Update value when propList changes
  useEffect(() => {
    if (propList.length > 0) {
      setValue(propList[0]);
    }
  }, [propList]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <GradientBorderContainer
        padding="p-[3px]"
        className="pointer-events-auto"
      >
        <PopoverTrigger asChild>
          <Button
            variant={"ghost"}
            role="combobox"
            aria-expanded={open}
            className={`w-80 py-5 justify-between cursor-pointer overflow-hidden text-ellipsis bg-white text-base rounded-xl hover:bg-gray-100 shadow-md ${customWidth}`}
          >
            {value}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
      </GradientBorderContainer>
      <PopoverContent className={`w-80 p-0 bg-white ${customWidth}`}>
        <Command className="bg-white">
          <CommandInput
            placeholder="Search sheet"
            autoFocus={false}
            tabIndex={-1}
          />
          <CommandList>
            <CommandEmpty>No sheet found.</CommandEmpty>
            <CommandGroup>
              {propList.map((sheet) => (
                <CommandItem
                  key={sheet}
                  value={sheet}
                  className="cursor-pointer font-medium"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? value : currentValue);
                    setOpen(false);

                    // Pass the value directly instead of wrapping it in an object
                    onClick?.(currentValue);
                  }}
                >
                  {sheet}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === sheet ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SheetDropDown;
