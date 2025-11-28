import { create } from "zustand";

export const useLocationStore = create((set) => ({
    selectedState: null,
    selectedCity: null,

    setSelectedState: (state) =>
        set(() => ({
            selectedState: state,
            selectedCity: null,
        })),

    setSelectedCity: (city) =>
        set(() => ({
            selectedCity: city,
        })),
}));
