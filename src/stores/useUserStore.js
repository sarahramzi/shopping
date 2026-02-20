import { create } from "zustand";

const useUserStore = create((set) => {
  return {
    token: null,
    setToken: (newToken) => set({ token: newToken }),
    isLoggedIn: false,
    setIsLoggedIn: (value) => set({ isLoggedIn: value }),
  };
});

export default useUserStore;
