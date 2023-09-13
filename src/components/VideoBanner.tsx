import { useQuery } from "@tanstack/react-query";
import {
  BANNER_VIDEO_URL_PREFIX,
  YOUTUBE_URL_PREFIX,
} from "../utils/constants";
import { BannerMovie, Video } from "../utils/types";
import axios from "axios";

const VideoBanner: React.FunctionComponent<BannerMovie> = ({
  id,
  title,
  overview,
}): JSX.Element => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["banner"],
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
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Unexpected Error Occurred</p>;

  return (
    <>
      <div className="bg-transparent h-screen w-full absolute">
        <iframe
          className="w-full h-screen"
          src={`${YOUTUBE_URL_PREFIX}${data.key}?autoplay=1&mute=1&loop=1&playlist=${data.key}&controls=0&showinfo=0&vq=hd1080`}
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
        <p className="w-1/2 text-8xl font-extrabold tracking-tight text-gray-50">
          {title}
        </p>
        <p className="w-1/3 text-2xl tracking-tight text-gray-50 py-8">
          {overview}
        </p>
      </div>
    </>
  );
};

export default VideoBanner;
