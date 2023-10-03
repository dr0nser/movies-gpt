import { GOOGLE_LOGO_URL, LOGIN_BACKGROUND } from "../utils/constants";
import {
  Unsubscribe,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Auth: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect((): Unsubscribe => {
    const authStateHandler: Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
    try {
      if (auth.currentUser) {
        navigate("/browse");
      }
    } catch (error) {
      console.error(error);
    }
    return () => authStateHandler();
  }, []);

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div
        style={{
          backgroundImage: `url(${LOGIN_BACKGROUND})`,
          filter: "brightness(0.5)",
        }}
        className="h-screen"
      ></div>
      <div className="h-screen w-full bg-gradient-to-b from-black to-transparent absolute top-0 left-0 opacity-50"></div>
      <div className="h-screen w-full absolute top-0 left-0">
        <div className="flex justify-around items-center pt-64">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: "-10vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-100 text-7xl font-extrabold"
            >
              Find the best movies, biggest hits
              <br />
              and more with{" "}
              <span className="animate-text bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                MoviesGPT
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-10vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="flex justify-around"
            >
              <button
                className="flex items-center space-x-3 bg-red-700 rounded-md px-20 py-3 mt-6"
                onClick={() => handleGoogleAuth()}
              >
                <img
                  className="w-8 h-8 p-1 bg-white rounded-full"
                  src={GOOGLE_LOGO_URL}
                  alt="Google logo"
                />
                <p className="text-2xl text-white font-semibold">
                  Login to continue
                </p>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Auth;
