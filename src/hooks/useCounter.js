import { create } from "zustand";

const useCounterStore = create((set) => {
  return {
    number: 0,
    increase: () => set((prev) => ({ number: prev.number + 1 })),
    decrease: () => set((prev) => ({ number: prev.number - 1 })),
    reset: () => set({ number: 0 }),
  };
});

export default useCounterStore;
