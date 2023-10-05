import { useQuery } from "@tanstack/react-query";
import { Movie } from "../utils/types";
import axios from "axios";
import { useContext, useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import ShimmerVideoBanner from "../shimmer/ShimmerVideoBanner";
import { ModalContext } from "../utils/context";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoBanner: React.FunctionComponent = (): JSX.Element | null => {
  const navigate = useNavigate();
  const { setModalMovie, toggleViewModal } = useContext(ModalContext);

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      if (!auth.currentUser) return null;
      const queryURL = `${import.meta.env.VITE_API_DOMAIN}api/banner?userId=${
        auth.currentUser?.uid
      }`;
      const response = await axios.get(queryURL);
      return response.data as Movie;
    },
  });

  if (isLoading) return <ShimmerVideoBanner />;

  if (isError) return <></>;

  const handleModalView = () => {
    setModalMovie(data);
    toggleViewModal();
  };

  return data ? (
    <>
      <div className="bg-transparent h-screen w-full absolute">
        <iframe
          className="w-full h-screen"
          src={data.trailerUrl}
          allowFullScreen
        ></iframe>
      </div>
      <div id="hide-yt-controls" className="w-full h-full absolute top-0"></div>
      <div
        id="text-bg-gradient"
        className="w-2/3 h-full bg-gradient-to-r from-black to-transparent absolute top-0"
      ></div>
      <div className="absolute top-[20vh] px-20">
        <img className="max-h-56 w-auto" src={data.logoUrl} />
        <p className="w-1/3 text-2xl tracking-tight text-white py-8 antialiased">
          {data.overview}
        </p>
        <button
          onClick={() => handleModalView()}
          className="flex items-center justify-center space-x-3 px-8 py-4 text-2xl text-white bg-white/30 rounded-sm hover:bg-white/20"
        >
          <AiOutlineInfoCircle className="text-4xl" />
          <p>More Info</p>
        </button>
      </div>
    </>
  ) : null;
};

export default VideoBanner;
