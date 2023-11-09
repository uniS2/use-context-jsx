import { create } from "zustand";

export const useStore = create((set) => ({
  // state
  isDark: false,
  // action
  setIsDark: () =>
    set((state) => ({
      isDark: !state.isDark,
    })),
}));
