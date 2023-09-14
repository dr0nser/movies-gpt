import { useQueries } from "@tanstack/react-query";
import {
  BANNER_VIDEO_URL_PREFIX,
  CARD_THUMBNAIL_IMAGE_PREFIX,
  YOUTUBE_URL_PREFIX,
} from "../utils/constants";
import { BannerMovie, BannerMovieLogo, Video } from "../utils/types";
import axios from "axios";

const VideoBanner: React.FunctionComponent<BannerMovie> = ({
  id,
  overview,
}): JSX.Element => {
  const [bannerVideo, bannerText] = useQueries({
    queries: [
      {
        queryKey: ["bannerVideo"],
        queryFn: async () => {
          const response = await axios.get(
            BANNER_VIDEO_URL_PREFIX + id + "/videos",
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${
                  import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
                }`,
              },
            }
          );
          return response.data.results.filter(
            (video: Video) =>
              video.site === "YouTube" &&
              (video.type === "Teaser" || video.type === "Trailer")
          )[0] as Video;
        },
      },
      {
        queryKey: ["bannerText"],
        queryFn: async () => {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/images`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${
                  import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
                }`,
              },
            }
          );
          return response.data.logos.filter(
            (logo: BannerMovieLogo) => logo.iso_639_1 === "en"
          )[0] as BannerMovieLogo;
        },
      },
    ],
  });

  if (bannerVideo.isLoading || bannerText.isLoading) return <p>Loading...</p>;

  if (bannerVideo.isError || bannerText.isError) return <></>;

  return (
    <>
      <div className="bg-transparent h-screen w-full absolute">
        <iframe
          className="w-full h-screen"
          src={`${YOUTUBE_URL_PREFIX}${bannerVideo.data.key}?autoplay=1&mute=1&loop=1&playlist=${bannerVideo.data.key}&controls=0&showinfo=0&vq=hd1080`}
          allowFullScreen
        ></iframe>
      </div>
      <div
        id="hide-yt-controls"
        className="w-full h-screen absolute top-0"
      ></div>
      <div
        id="text-bg-gradient"
        className="w-2/3 h-screen bg-gradient-to-r from-black to-transparent absolute top-0"
      ></div>
      <div className="absolute top-[25vh] px-20">
        <img
          className="max-h-56 w-auto"
          src={`${CARD_THUMBNAIL_IMAGE_PREFIX}/${bannerText.data.file_path}`}
        />
        <p className="w-1/3 text-2xl tracking-tight text-white py-8 antialiased">
          {overview}
        </p>
      </div>
    </>
  );
};

export default VideoBanner;
