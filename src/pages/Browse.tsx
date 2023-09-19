import { useContext, useEffect } from "react";
import Header from "../components/Header";
import VideoBanner from "../components/VideoBanner";
import GalleryContainer from "../components/GalleryContainer";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import InfoModal from "../components/InfoModal";
import { ModalContext } from "../utils/context";

const Browse = () => {
  const navigate = useNavigate();
  const { viewModal } = useContext(ModalContext);

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

  return (
    <div
      className={`relative h-screen flex flex-col w-full ${
        viewModal ? "overflow-hidden" : ""
      }`}
    >
      <Header />
      <div className="relative flex-grow w-full bg-black">
        <VideoBanner />
        <GalleryContainer />
      </div>
      {viewModal && <InfoModal />}
    </div>
  );
};

export default Browse;
