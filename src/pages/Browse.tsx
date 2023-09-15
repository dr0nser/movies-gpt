import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useContext, useEffect } from "react";
import { Unsubscribe, onAuthStateChanged } from "firebase/auth";
import Header from "../components/Header";
import VideoBanner from "../components/VideoBanner";
import { Movie } from "../utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NOW_PLAYING_URL } from "../utils/constants";
import GalleryContainer from "../components/GalleryContainer";
import Search from "../components/Search";
import { SearchContext } from "../utils/context";

const Browse = () => {
  const navigate = useNavigate();
  const { searchEnabled } = useContext(SearchContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: async () => {
      const response = await axios.get(NOW_PLAYING_URL, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${
            import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
          }`,
        },
      });
      return response.data.results[getRandomIndexBetween(0, 19)] as Movie;
    },
    staleTime: 10 * 60 * 1000,
  });

  const getRandomIndexBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect((): Unsubscribe => {
    if (!auth.currentUser) navigate("/");
    const authStateHandler: Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
    return () => authStateHandler();
  }, []);

  if (isLoading) return <p>Loading</p>;

  if (isError) return <p>Unexpected error occurred!</p>;

  return (
    <>
      <Header />
      <div className="relative h-screen w-full bg-black">
        {searchEnabled ? (
          <Search />
        ) : (
          <>
            <VideoBanner id={data.id} overview={data.overview} />
            <GalleryContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
