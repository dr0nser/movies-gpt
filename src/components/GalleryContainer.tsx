import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GalleryType } from "../utils/types";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const GalleryContainer: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      if (!auth.currentUser) return null;
      const queryURL = `http://localhost:8080/api/gallery?userId=${auth.currentUser?.uid}`;
      const response = await axios.get(queryURL);
      return response.data as GalleryType[];
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <></>;

  return (
    <div className="absolute top-[75vh] z-10">
      {data &&
        data.map((section: GalleryType, index) => (
          <Gallery
            key={section.name}
            customCSS={
              index === 0
                ? "bg-gradient-to-t from-black via-black to-transparent"
                : "bg-black"
            }
            title={section.name}
            cards={section.data}
          />
        ))}
      <Footer />
    </div>
  );
};

export default GalleryContainer;
