import { useFile } from "@/store/file/useFile";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "@mantine/core";

const IndependentSelect = () => {
  const { independents, setIndependents, columns, dependent } = useFile();
  const [selectedIndependents, setSelectedIndependents] = useState<string[]>(
    []
  );

  const handleSelectIndependents = (value: string[]) => {
    setSelectedIndependents(value);
    setIndependents(value);
  };

  useEffect(() => {
    setSelectedIndependents([]);
    setIndependents([]);
  }, [dependent]);

  return (
    <MultiSelect
      data={columns.filter((column) => column !== dependent)}
      value={selectedIndependents}
      onChange={handleSelectIndependents}
      placeholder={selectedIndependents.length > 0 ? "" : "Select Independents"}
      clearable
      className="rounded-xl w-80 text-base line-clamp-1"
      styles={{
        input: {
          borderRadius: "12px",
          fontSize: "1rem",
          paddingTop: "0.52rem",
          paddingBottom: "0.52rem",
        },
        pill: {
          fontSize: "0.875rem",
          fontWeight: "500",
        },
        option: {
          fontSize: "0.875rem",
          fontWeight: "500",
        },
      }}
      hidePickedOptions
    />
  );
};

export default IndependentSelect;
