import create from "zustand";

interface Store {
  isModelOpen: boolean;
  setIsModelOpen: (arg0: boolean) => void;
}

const useStore = create<Store>((set) => ({
  isModelOpen: false,
  setIsModelOpen: (arg0: boolean) => set(() => ({ isModelOpen: arg0 })),
}));

export default useStore;
