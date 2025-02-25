import { create } from "zustand";

interface DropdownState {
  dropdownStates: { [key: number]: boolean };
  setAppendClass: (id: number, value: boolean) => void;
}

export const useDropdownState = create<DropdownState>((set) => ({
  dropdownStates: {},

  setAppendClass: (id, value) =>
    set((state) => ({
      dropdownStates: { ...state.dropdownStates, [id]: value },
    })),
}));

