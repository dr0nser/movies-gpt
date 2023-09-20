import React, { useState } from "react";
import Body from "./AppLayout";
import { ModalContext } from "./utils/context";
import { Movie } from "./utils/types";

const App: React.FunctionComponent = (): JSX.Element => {
  const [modalMovie, setModalMovie] = useState<Movie | null>(null);
  const [viewModal, setViewModal] = useState<boolean>(false);

  const toggleViewModal = () => {
    setTimeout(() => {
      setViewModal(!viewModal);
    }, 100);
  };

  return (
    <ModalContext.Provider
      value={{
        movie: modalMovie,
        viewModal,
        toggleViewModal,
        setModalMovie,
      }}
    >
      <Body />
    </ModalContext.Provider>
  );
};

export default App;
