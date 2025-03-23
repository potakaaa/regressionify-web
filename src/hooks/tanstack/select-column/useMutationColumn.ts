import { postSelectColumn } from "@/services/select-column/select-column";
import { useResults } from "@/store/results/useResults";
import { useMutation } from "@tanstack/react-query";

export const useMutationColumn = () => {
  const { setResults } = useResults();

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
    onSuccess: (data) => {
      console.log("Columns selected successfully");
      const results = data.regression_summary;
      setResults(results);
    },
    onError: (error) => {
      console.error("Error selecting columns", error);
      throw new Error("Error selecting columns");
    },
  });
};
