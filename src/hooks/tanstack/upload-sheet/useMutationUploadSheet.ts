import { postUploadSheet } from "@/services/upload-sheet/upload-sheet";
import { useFile } from "@/store/file/useFile";
import { useMutation } from "@tanstack/react-query";

export const useMutationUploadSheet = () => {
  const { setSheetNames, setFilePath, setColumns } = useFile();

  return useMutation({
    mutationFn: (file: File) => postUploadSheet(file),
    onSuccess: (data) => {
      console.log("Sheet uploaded successfully", data);
      setFilePath(data.file_full_path);
      setSheetNames(data.sheetnames);
      setColumns([]);
    },
    onError: (error) => {
      console.error("Error uploading file", error);
      setFilePath("");
      setSheetNames([]);
      throw new Error("Error uploading file");
    },
  });
};
