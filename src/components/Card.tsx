import React from "react";
import { Movie } from "../utils/types";

const Card: React.FunctionComponent<Movie> = ({ poster_path }): JSX.Element => {
  return (
    <div className="flex-shrink-0 rounded-lg overflow-hidden">
      <div className="hover:scale-110 cursor-pointer relative transition-all duration-150 group">
        <img
          className="w-44 h-64 object-cover object-center rounded-md"
          src={poster_path}
        />
      </div>
    </div>
  );
};

export default Card;
