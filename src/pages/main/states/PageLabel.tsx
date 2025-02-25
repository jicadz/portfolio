import { create } from "zustand";

interface PageLabel {
    pageLabel: string
    setPageLabel: (name: string) => void;
}

export const useLabel = create<PageLabel>((set) => ({
    pageLabel: "",
    setPageLabel: (name) => set({ pageLabel: name}),
}));