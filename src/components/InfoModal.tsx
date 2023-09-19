import React, { useContext } from "react";
import { ModalContext } from "../utils/context";
import { HiXMark } from "react-icons/hi2";

const InfoModal: React.FunctionComponent = (): JSX.Element => {
  const { movie, toggleViewModal } = useContext(ModalContext);

  console.log(movie);

  return movie ? (
    <div className="h-screen w-full backdrop-brightness-50 backdrop-blur-sm absolute top-0 left-0 z-50">
      <div className="mx-auto w-1/2 h-full bg-black relative pt-10 mt-8">
        {movie.trailerUrl !== null ? (
          <div className="relative w-full h-1/2">
            <iframe
              className="w-full h-full pointer-events-none"
              src={movie.trailerUrl}
            ></iframe>
            <div className="absolute bottom-0 z-50 bg-gradient-to-t from-black to-transparent h-32 w-full"></div>
            <img
              src={movie.logoUrl}
              className="absolute max-h-24 w-auto bottom-10 pl-10 z-50"
            />
          </div>
        ) : (
          <div className="relative w-full h-1/2">
            <img
              className="w-full h-full pointer-events-none"
              src={movie.backdropUrl}
            />
            <div className="absolute bottom-0 z-50 bg-gradient-to-t from-black to-transparent h-32 w-full"></div>
            <img
              src={movie.logoUrl}
              className="absolute max-h-24 w-auto bottom-10 pl-10 z-50"
            />
          </div>
        )}

        <button
          onClick={() => toggleViewModal()}
          className="text-white text-3xl absolute top-0 right-0 mr-2 mt-2 rounded-full p-1 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
        >
          <HiXMark />
        </button>

        {/* Movie info */}
        <div className="text-gray-200 px-4">
          <p className="text-green-500 font-medium">
            <span>{movie.rating}/10</span> based on {movie.total_ratings}{" "}
            ratings
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div className="col-span-2">
              <p className="text-xl">{movie.overview}</p>
            </div>
            <div className="col-span-1">
              <p>
                <span className="text-gray-400">Genres:</span>{" "}
                {movie.genres.join(", ")}
              </p>
              <p>
                <span className="text-gray-400">Duration:</span>{" "}
                {movie.duration}
              </p>
              <p>
                <span className="text-gray-400">Release Date:</span>{" "}
                {movie.release_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default InfoModal;
