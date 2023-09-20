import { SearchResultProp } from "../utils/types";
import Footer from "./Footer";
import Gallery from "./Gallery";

const SearchResult: React.FunctionComponent<SearchResultProp> = ({
  movies,
}): JSX.Element => {
  return (
    <div className="absolute bottom-0 z-10 bg-gradient-to-t from-black via-black to-transparent w-full">
      {movies && movies.length > 0 ? (
        <Gallery title="Search Results" cards={movies} />
      ) : (
        <p className="text-center py-40 capitalize text-gray-200 font-semibold tracking-tight text-3xl">
          No Results Found
        </p>
      )}

      <Footer />
    </div>
  );
};

export default SearchResult;
