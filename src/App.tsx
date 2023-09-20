import React, { useState } from "react";
import AppLayout from "./AppLayout";
import { ModalContext } from "./utils/context";
import { Movie } from "./utils/types";
import { AnimatePresence } from "framer-motion";

const App: React.FunctionComponent = (): JSX.Element => {
  const [modalMovie, setModalMovie] = useState<Movie | null>(null);
  const [viewModal, setViewModal] = useState<boolean>(false);

  const toggleViewModal = () => {
    setTimeout(() => {
      setViewModal(!viewModal);
    }, 100);
  };

  return (
    <AnimatePresence mode="wait">
      <ModalContext.Provider
        value={{
          movie: modalMovie,
          viewModal,
          toggleViewModal,
          setModalMovie,
        }}
      >
        <AppLayout />
      </ModalContext.Provider>
    </AnimatePresence>
  );
};

export default App;
