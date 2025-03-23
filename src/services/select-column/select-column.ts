import clientInstance from "@/utils/clientInstance";
import { toast } from "sonner";

export const postSelectColumn = async (
  independent: string[],
  dependent: string,
  sheetName: string,
  file_path: string
) => {
  const payload = {
    independent_columns: independent,
    dependent_column: dependent,
    sheetname: sheetName,
    file_path: file_path,
  };
  try {
    const res = await clientInstance.post("select_columns/", payload);
    return res.data;
  } catch (e: any) {
    const error = e.response?.data || e.message;
    console.error("Error selecting columns", e);
    console.error("Error in postSheetName", error);
    if (error) {
      toast.error("An error occured. Please try again.");
    }
    throw new Error("Error selecting columns");
  }
};
