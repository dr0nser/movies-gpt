import { useEffect, Suspense } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import ShimmerVideoBanner from "../shimmer/ShimmerVideoBanner";
import ShimmerGallery from "../shimmer/ShimmerGallery";
import React from "react";

const VideoBanner = React.lazy(() => import("../components/VideoBanner"));
const GalleryContainer = React.lazy(
  () => import("../components/GalleryContainer")
);

const Browse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

  return (
    <div className="relative h-screen flex flex-col w-full">
      <div className="relative flex-grow w-full bg-black">
        <Suspense fallback={<ShimmerVideoBanner />}>
          <VideoBanner />
        </Suspense>
        <Suspense fallback={<ShimmerGallery />}>
          <GalleryContainer />
        </Suspense>
        <GalleryContainer />
      </div>
    </div>
  );
};

export default Browse;
