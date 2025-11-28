import { create } from "zustand";

export const useResultsStore = create((set) => ({
    results: [],
    setResults: (data) => set({ results: data }),
}));
