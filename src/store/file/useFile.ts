import { create } from "zustand";

type SheetFile = {
  filePath: string;
  setFilePath: (filePath: string) => void;
  fileName: string;
  setFileName: (fileName: string) => void;
  sheetNames: string[];
  setSheetNames: (sheetNames: string[]) => void;
  sheetName: string;
  setSheetName: (sheetName: string) => void;

  columns: string[];
  setColumns: (columns: string[]) => void;
  independents: string[];
  setIndependents: (independent: string[]) => void;
  dependent: string;
  setDependent: (dependent: string) => void;
};

export const useFile = create<SheetFile>((set) => ({
  filePath: "",
  setFilePath: (filePath) => set({ filePath }),

  fileName: "",
  setFileName: (fileName) => set({ fileName }),

  sheetNames: [],
  setSheetNames: (sheetNames) => set({ sheetNames }),

  sheetName: "",
  setSheetName: (sheetName) => set({ sheetName }),

  columns: [],
  setColumns: (columns) => set({ columns }),

  independents: [],
  setIndependents: (independents) => set({ independents }),

  dependent: "",
  setDependent: (dependent) => set({ dependent }),
}));
