import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { GalleryType } from "../utils/types";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { auth } from "../utils/firebase";

const GalleryContainer: React.FunctionComponent = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const queryURL = `http://localhost:8080/api/gallery?userId=${auth.currentUser?.uid}`;
      const response = await axios.get(queryURL);
      return response.data as GalleryType[];
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <></>;

  return (
    <div id="gallery-container" className="absolute top-[75vh] z-10">
      {data.map((section: GalleryType, index) => (
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
