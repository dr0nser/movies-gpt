import axios from "axios";
import { NOW_PLAYING_URL } from "./constants";
import { Movie } from "./types";
import { useEffect, useState } from "react";

const useNowPlaying = (): Movie | null => {
  const [nowPlaying, setNowPlaying] = useState<Movie[] | null>(null);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {
    const res = await axios.get(NOW_PLAYING_URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
      },
    });
    setNowPlaying(res?.data?.results);
  };

  const getRandomIndexBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return nowPlaying
    ? nowPlaying[getRandomIndexBetween(0, nowPlaying.length)]
    : null;
};

export default useNowPlaying;
