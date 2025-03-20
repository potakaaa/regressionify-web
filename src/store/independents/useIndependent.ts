import { create } from "zustand";

type Independents = {
  independents: string[];
  setIndependents: (independents: string[]) => void;
};

export const useIndependents = create<Independents>((set) => ({
  independents: [],
  setIndependents: (independents) => set({ independents }),
}));
