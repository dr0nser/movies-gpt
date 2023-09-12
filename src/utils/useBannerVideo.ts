import axios from "axios";
import { BANNER_VIDEO_URL_PREFIX } from "./constants";
import { Video } from "./types";
import { useEffect, useState } from "react";

const useBannerVideo = (movieId: number): Video | null => {
  const [bannerVideo, setBannerVideo] = useState<Video | null>(null);

  useEffect(() => {
    fetchBannerVideo();
  }, []);

  const fetchBannerVideo = async () => {
    const BANNER_VIDEO_URL = `${BANNER_VIDEO_URL_PREFIX}${movieId}/videos`;
    const res = await axios.get(BANNER_VIDEO_URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
      },
    });
    const bannerVideos = res.data.results.filter(
      (video: Video) =>
        (video.type === "Teaser" || video.type === "Trailer") &&
        video.official === true &&
        video.site === "YouTube"
    );
    setBannerVideo(bannerVideos[0]);
  };
  return bannerVideo;
};

export default useBannerVideo;
