import { useFile } from "@/store/file/useFile";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "@mantine/core";

const IndependentSelect = () => {
  const { independents, setIndependents, columns, dependent, setStep } =
    useFile();
  const [selectedIndependents, setSelectedIndependents] = useState<string[]>(
    []
  );

  const handleSelectIndependents = (value: string[]) => {
    setSelectedIndependents(value);
    setIndependents(value);
    setStep(4);
  };

  useEffect(() => {
    setSelectedIndependents([]);
    setIndependents([]);
  }, [dependent]);

  useEffect(() => {
    if (independents.length === 0) {
      setStep(3);
    }
  }, [independents]);

  return (
    <MultiSelect
      data={columns.filter((column) => column !== dependent)}
      value={selectedIndependents}
      onChange={handleSelectIndependents}
      placeholder={selectedIndependents.length > 0 ? "" : "Select Independents"}
      clearable
      className="rounded-xl w-40 sm:w-72 md:w-80 lg:w-60 xl:w-72 2xl:w-80 text-sm lg:text-base line-clamp-1 transition-all duration-200"
      classNames={{
        input: "text-sm md:text-base lg:text-base rounded-xl py-2",
        pill: "text-sm md:text-base lg:text-base font-medium",
        option: "text-sm md:text-base lg:text-base font-medium",
      }}
      hidePickedOptions
    />
  );
};

export default IndependentSelect;
