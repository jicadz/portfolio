import { create } from "zustand";
import { ReactNode } from "react";

interface PageContent {
    pageContent: ReactNode;
    setPageContent: (component: ReactNode) => void;
}

export const useContent = create<PageContent>((set) => ({
    pageContent: null,
    setPageContent: (component) => set({ pageContent: component}),
}));