import { SearchResultProp } from "../utils/types";
import Footer from "./Footer";
import Gallery from "./Gallery";

const SearchResult: React.FunctionComponent<SearchResultProp> = ({
  movies,
}): JSX.Element => {
  return (
    movies && (
      <div className="absolute bottom-0 z-10 bg-gradient-to-t from-black via-black to-transparent w-full">
        <Gallery title="Search Results" cards={movies} />
        <Footer />
      </div>
    )
  );
};

export default SearchResult;
