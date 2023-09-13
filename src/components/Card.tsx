import React from "react";
import { GalleryCardProp } from "../utils/types";
import { CARD_THUMBNAIL_IMAGE_PREFIX } from "../utils/constants";

const Card: React.FunctionComponent<GalleryCardProp> = ({ card }) => {
  return (
    <div className="flex-shrink-0 rounded-lg overflow-hidden">
      <div className="hover:scale-110 cursor-pointer relative transition-all duration-150 group">
        <img
          className="w-44 h-64 object-cover object-center rounded-md"
          src={`${CARD_THUMBNAIL_IMAGE_PREFIX}${card.poster_path}`}
        />
      </div>
    </div>
  );
};

export default Card;
