import clientInstance from "@/utils/clientInstance";

export const postSheetName = async (sheetName: string, file_path: string) => {
  const payload = {
    sheetname: sheetName,
    file_path: file_path,
  };
  try {
    const res = await clientInstance.post("select_sheet/", payload);
    return res.data;
  } catch (e: any) {
    console.error("Error in postSheetName", e);
    console.error("Error in postSheetName", e.response?.data || e.message);
    throw new Error("Error in postSheetName");
  }
};
