import { postSheetName } from "@/services/select-sheetname/select-sheetname";
import { useFile } from "@/store/file/useFile";
import { useMutation } from "@tanstack/react-query";

export const useMutationSheetname = () => {
  const { setColumns } = useFile();

  return useMutation({
    mutationFn: ({
      sheetName,
      file_path,
    }: {
      sheetName: string;
      file_path: string;
    }) => postSheetName(sheetName, file_path),
    onSuccess: (data) => {
      console.log("Sheetname uploaded successfully", data);
      setColumns(data.columns);
    },
    onError: (error) => {
      console.error("Error uploading file", error);
      throw new Error("Error uploading file");
    },
  });
};
