import { create } from "zustand";

interface IGlobalState {
  isSignup: boolean;
  setIsSignup: (isSignup: boolean) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  showPassword: boolean;
  dark: boolean;
  setDark: (dark: boolean) => void;
  isModalStartOpen: boolean;
  setIsModalStartOpen: (isModalStartOpen: boolean) => void;
  setShowPassword: (showPassword: boolean) => void;
  namePersonCall: string;
  setNamePersonCall: (namePersonCall: string) => void;
  modalStopTranscribing: boolean;
  setModalStopTranscribing: (modalStopTranscribing: boolean) => void;
  openViewSidebar: boolean;
  setOpenViewSidebar: (openViewSidebar: boolean) => void;
  openSettings: boolean;
  setOpenSettings: (openSettings: boolean) => void;
  transcript: string;
  setTranscript: (transcript: any) => void;
  listening: boolean;
  setListening: (listening: boolean) => void;
}

export const useGlobalStore = create<IGlobalState>()((set) => ({
  isSignup: false,
  modalStopTranscribing: false,
  transcript: "",
  listening: false,
  setListening: (listening: boolean) => set({ listening }),
  setTranscript: (transcript: any) => set({ transcript }),
  setModalStopTranscribing: (modalStopTranscribing: boolean) => set({ modalStopTranscribing }),
  isModalStartOpen: false,
  namePersonCall: "",
  setNamePersonCall: (namePersonCall: string) => set({ namePersonCall }),
  setIsModalStartOpen: (isModalStartOpen: boolean) => set({ isModalStartOpen }),
  setIsSignup: (isSignup: boolean) => set({ isSignup }),
  isAuth: false,
  dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
  setDark: (dark: boolean) => set({ dark }),
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  showPassword: false,
  setShowPassword: (showPassword: boolean) => set({ showPassword }),
  openViewSidebar: false,
  setOpenViewSidebar: (openViewSidebar: boolean) => set({ openViewSidebar }),
  openSettings: false,
  setOpenSettings: (openSettings: boolean) => set({ openSettings }),
}));
