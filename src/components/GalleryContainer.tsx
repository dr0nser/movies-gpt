import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Trending } from "../utils/types";
import Gallery from "./Gallery";
import Footer from "./Footer";

const GalleryContainer: React.FunctionComponent = (): JSX.Element => {
  const [trendingAll, trendingMovies, trendingTVShows] = useQueries({
    queries: [
      {
        queryKey: ["trendingAll"],
        queryFn: async () => {
          const response = await axios.get(
            "https://api.themoviedb.org/3/trending/all/day",
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${
                  import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
                }`,
              },
            }
          );
          return response.data.results as Trending[];
        },
      },
      {
        queryKey: ["trendingMovies"],
        queryFn: async () => {
          const response = await axios.get(
            "https://api.themoviedb.org/3/trending/movie/day",
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${
                  import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
                }`,
              },
            }
          );
          return response.data.results as Trending[];
        },
      },
      {
        queryKey: ["trendingTVShows"],
        queryFn: async () => {
          const response = await axios.get(
            "https://api.themoviedb.org/3/trending/tv/day",
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${
                  import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
                }`,
              },
            }
          );
          return response.data.results as Trending[];
        },
      },
    ],
  });

  if (
    trendingAll.isLoading ||
    trendingMovies.isLoading ||
    trendingTVShows.isLoading
  )
    return <p>Loading...</p>;

  if (trendingAll.isError || trendingMovies.isError || trendingTVShows.isError)
    return <></>;

  return (
    <div id="gallery-container" className="absolute top-[75vh] z-10">
      <Gallery
        customCSS="bg-gradient-to-t from-black via-black to-transparent"
        title="trending now"
        cards={trendingAll.data}
      />
      <Gallery
        customCSS="bg-black"
        title="movies"
        cards={trendingMovies.data}
      />
      <Gallery
        customCSS="bg-black"
        title="TV shows"
        cards={trendingTVShows.data}
      />
      <Footer />
    </div>
  );
};

export default GalleryContainer;
