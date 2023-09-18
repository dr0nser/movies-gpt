import { useContext } from "react";
import Header from "../components/Header";
import VideoBanner from "../components/VideoBanner";
import GalleryContainer from "../components/GalleryContainer";
import Search from "../components/Search";
import { SearchContext } from "../utils/context";

const Browse = () => {
  const { searchEnabled } = useContext(SearchContext);

  return (
    <>
      <Header />
      <div className="relative h-screen w-full bg-black">
        {searchEnabled ? (
          <Search />
        ) : (
          <>
            <VideoBanner />
            <GalleryContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
