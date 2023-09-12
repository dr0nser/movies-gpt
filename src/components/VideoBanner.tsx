import { useQuery } from "@tanstack/react-query";
import {
  BANNER_VIDEO_URL_PREFIX,
  YOUTUBE_URL_PREFIX,
} from "../utils/constants";
import { BannerMovie, Video } from "../utils/types";
import ReactPlayer from "react-player/youtube";
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
      <div className="h-screen w-full brightness-75 relative">
        <ReactPlayer
          className="w-full h-screen"
          url={YOUTUBE_URL_PREFIX + data.key}
          playing={true}
          loop={true}
          width={"100%"}
          height={"100%"}
          muted={true}
        />
      </div>
      <div className="w-full z-10 bg-gradient-to-t from-black to-transparent absolute h-[30vh] top-[70vh]"></div>
      <div className="absolute top-[35vh] px-20 z-20">
        <p
          className={`w-1/2 ${
            title.length > 20 ? "text-8xl" : "text-9xl"
          } font-extrabold tracking-tight text-gray-50`}
        >
          {title}
        </p>
        <p className="w-1/2 text-2xl tracking-tight text-gray-50 py-8">
          {overview}
        </p>
      </div>
    </>
  );
};

export default VideoBanner;