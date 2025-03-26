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

export interface DropDownProps {
  propList: string[];
  onClick?: (selectedValue: string) => void;
}

const SheetDropDown: FC<DropDownProps> = ({
  propList,
  onClick,
}: {
  propList: string[];
  onClick?: (selectedValue: string) => void;
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
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-32 justify-between cursor-pointer overflow-hidden text-ellipsis"
        >
          {value}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-0">
        <Command>
          <CommandInput placeholder="Search sheet" />
          <CommandList>
            <CommandEmpty>No sheet found.</CommandEmpty>
            <CommandGroup>
              {propList.map((sheet) => (
                <CommandItem
                  key={sheet}
                  value={sheet}
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
