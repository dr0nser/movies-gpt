import { useContext, useEffect } from "react";
import Header from "../components/Header";
import VideoBanner from "../components/VideoBanner";
import GalleryContainer from "../components/GalleryContainer";
import Search from "../components/Search";
import { SearchContext } from "../utils/context";
import { Unsubscribe } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const { searchEnabled } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

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
