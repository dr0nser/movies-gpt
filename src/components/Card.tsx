import React from "react";
import { GalleryCardProp } from "../utils/types";
import { CARD_THUMBNAIL_IMAGE_PREFIX } from "../utils/constants";

const Card: React.FunctionComponent<GalleryCardProp> = ({ card }) => {
  return (
    <div className="flex-shrink-0 rounded-lg overflow-hidden">
      <div className="hover:scale-110 cursor-pointer relative transition-all duration-150 group">
        <img
          className="w-72 h-44 object-cover object-center rounded-md"
          src={`${CARD_THUMBNAIL_IMAGE_PREFIX}${card.backdrop_path}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-150 flex items-center justify-center">
          <p className="text-white capitalize antialiased group-hover:subpixel-antialiased text-3xl opacity-0 group-hover:opacity-100 transition-all duration-150">
            {card.media_type === "tv"
              ? card.name
                ? card.name.length > 10
                  ? card.name.substring(0, 10) + "..."
                  : card.name
                : null
              : card.title
              ? card.title.length > 10
                ? card.title.substring(0, 10) + "..."
                : card.title
              : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
