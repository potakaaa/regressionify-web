import clientInstance from "@/utils/clientInstance";

export const postUploadSheet = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const res = await clientInstance.post("upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (e) {
    console.error("Error uploading file", e);
    throw new Error("Error uploading file");
  }
};
