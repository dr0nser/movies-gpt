import React, { useEffect, useRef, useState } from "react";
import { GalleryProps, Movie } from "../utils/types";
import Card from "./Card";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";

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
      setTimeout(checkScroll, 500);
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: galleryRef.current.clientWidth,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <div className={`${customCSS ? customCSS : ""} px-20 py-8`}>
      <p className="capitalize pb-4 text-gray-200 font-semibold tracking-tight text-3xl">
        {title}
      </p>
      <div className="pb-6 relative">
        <div className="flex space-x-8 overflow-hidden" ref={galleryRef}>
          {cards.map((card: Movie, index) => (
            <motion.div
              key={card.id}
              className="flex-shrink-0 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card {...card} />
            </motion.div>
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
