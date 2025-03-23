import { postSelectColumn } from "@/services/select-column/select-column";
import { useMutation } from "@tanstack/react-query";

export const useMutationColumn = () => {
  return useMutation({
    mutationFn: ({
      independent,
      dependent,
      sheetName,
      file_path,
    }: {
      independent: string[];
      dependent: string;
      sheetName: string;
      file_path: string;
    }) => postSelectColumn(independent, dependent, sheetName, file_path),
    onSuccess: () => {
      console.log("Columns selected successfully");
    },
    onError: (error) => {
      console.error("Error selecting columns", error);
      throw new Error("Error selecting columns");
    },
  });
};
