import React, { useContext } from "react";
import { Movie } from "../utils/types";
import { ModalContext } from "../utils/context";

const Card: React.FunctionComponent<Movie> = (movie): JSX.Element => {
  const { setModalMovie, toggleViewModal } = useContext(ModalContext);

  const handleModalView = () => {
    setModalMovie(movie);
    toggleViewModal();
  };

  return (
    <div
      className="flex-shrink-0 rounded-lg overflow-hidden"
      onClick={() => handleModalView()}
    >
      <div className="hover:scale-110 antialiased hover:subpixel-antialiased cursor-pointer relative transition-all duration-150">
        <img
          className="w-44 h-64 object-cover object-center rounded-md"
          src={movie.poster_path}
        />
      </div>
    </div>
  );
};

export default Card;
