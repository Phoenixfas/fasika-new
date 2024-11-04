import {create} from "zustand";

const useStore = create((set) => ({
  mesobOpen: false,
  setMesobOpen: () => set((state: any) => ({ mesobOpen: !state.mesobOpen })),

  modalVisible: false,
  setModalVisible: (value: any) => set((state: any) => ({ modalVisible: value })),
}));

export default useStore;
