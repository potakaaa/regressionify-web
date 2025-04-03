import { create } from "zustand";

type Tab = {
  tab: string;
  setTab: (tab: string) => void;
};

const useTabs = create<Tab>((set) => ({
  tab: "variables",
  setTab: (tab) => set({ tab }),
}));

export default useTabs;
