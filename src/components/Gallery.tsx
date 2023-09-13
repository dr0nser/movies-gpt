import React, { useEffect, useRef, useState } from "react";
import { GalleryProps, Trending } from "../utils/types";
import Card from "./Card";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Gallery: React.FunctionComponent<GalleryProps> = ({
  title,
  cards,
  customCSS,
}): JSX.Element => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -galleryRef.current.clientWidth,
        behavior: "smooth",
      });
      checkScroll();
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: galleryRef.current.clientWidth,
        behavior: "smooth",
      });
      checkScroll();
    }
  };

  return (
    <div className={`${customCSS ? customCSS : ""} px-20 py-8`}>
      <p className="capitalize pb-4 text-gray-200 font-semibold tracking-tight text-3xl">
        {title}
      </p>
      <div className="pb-6 relative">
        <div className="flex space-x-8 overflow-hidden" ref={galleryRef}>
          {cards.map((card: Trending) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        {canScrollLeft && (
          <button
            className="h-64 w-20 bg-gradient-to-r from-black to-transparent hover:text-white absolute top-0 left-0 text-6xl"
            onClick={() => scrollLeft()}
          >
            <HiChevronLeft />
          </button>
        )}
        {canScrollRight && (
          <button
            className="h-64 w-20 bg-gradient-to-l from-black to-transparent hover:text-white transition-all duration-150 absolute top-0 right-0 text-6xl"
            onClick={() => scrollRight()}
          >
            <HiChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
