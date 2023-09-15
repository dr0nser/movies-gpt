import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../utils/types";
import Footer from "./Footer";
import ResultCard from "./ResultCard";

const SearchResults = ({ result }: { result: string }) => {
  const [movieDetails, setMovieDetails] = useState<Movie[]>([]);
  console.log(movieDetails);

  useEffect(() => {
    const movieNames: string[] = result.split(", ");
    Promise.all(
      movieNames.map((name) =>
        axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=true&language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${
                import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
              }`,
            },
          }
        )
      )
    ).then((response) => {
      const movieDetails = response.map((res) => res.data.results[0]);
      setMovieDetails(movieDetails);
    });
  }, []);

  return (
    <div className="absolute bottom-0 z-10 bg-gradient-to-t from-black via-black to-transparent w-full">
      <div className="px-20 mx-auto flex justify-between pb-10">
        {movieDetails.map((movie) => (
          <ResultCard key={movie.id} card={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
