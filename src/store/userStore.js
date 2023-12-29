import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const userStore = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
});

const useUserStore = create(
  devtools(
    persist(userStore, {
      name: "user",
    })
  )
);

export default useUserStore;
