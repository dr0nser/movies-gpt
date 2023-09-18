import { useQuery } from "@tanstack/react-query";
import { Movie } from "../utils/types";
import axios from "axios";
import { useEffect } from "react";
import { Unsubscribe, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const VideoBanner: React.FunctionComponent = (): JSX.Element | null => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      if (!auth.currentUser) return null;
      const queryURL = `http://localhost:8080/api/banner?userId=${auth.currentUser?.uid}`;
      const response = await axios.get(queryURL);
      return response.data as Movie;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <></>;

  return data ? (
    <>
      <div className="bg-transparent h-screen w-full absolute">
        <iframe
          className="w-full h-screen"
          src={data.trailerUrl}
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
        <img className="max-h-56 w-auto" src={data.logoUrl} />
        <p className="w-1/3 text-2xl tracking-tight text-white py-8 antialiased">
          {data.overview}
        </p>
      </div>
    </>
  ) : null;
};

export default VideoBanner;
