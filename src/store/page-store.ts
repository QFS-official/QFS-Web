import { create } from "zustand";

type PageType = "home" | "whitepaper" | "roadmap" | "portal";

interface PageStore {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  currentPage: "home",
  setCurrentPage: (page) => set({ currentPage: page }),
}));
