import { createContext } from "react";
import { ModalContextType } from "./types";

export const ModalContext = createContext<ModalContextType>({
  movie: null,
  viewModal: false,
  toggleViewModal: () => {},
  setModalMovie: () => {},
});
