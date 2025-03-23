import clientInstance from "@/utils/clientInstance";

export const postSelectColumn = async (
  independent: string[],
  dependent: string,
  sheetName: string,
  file_path: string
) => {
  const payload = {
    independent: independent,
    dependent: dependent,
    sheetName: sheetName,
    file_path: file_path,
  };
  try {
    const res = await clientInstance.post("select-column", payload);
    return res.data;
  } catch (e) {
    console.error("Error selecting columns", e);
    throw new Error("Error selecting columns");
  }
};
