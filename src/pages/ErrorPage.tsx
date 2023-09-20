import { Link, useNavigate, useRouteError } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { ErrorType } from "../utils/types";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { auth } from "../utils/firebase";

const ErrorPage = () => {
  const error: ErrorType = useRouteError() as ErrorType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-screen w-full flex justify-around items-center pb-16 text-gray-100"
    >
      <div className="text-center">
        <p className="text-3xl font-semibold pb-2">Oops!</p>
        <p className="text-xl pb-4">An unexpected error has occurred.</p>
        <p className="text-gray-300 pb-2">
          <i>
            {error.status}: {error.error.message}
          </i>
        </p>
        <Link
          to="/"
          className="flex items-center justify-around p-2 bg-red-600 mt-4 rounded-sm hover:shadow-lg"
        >
          <div className="flex items-center space-x-3 text-center text-white">
            <HiArrowLeft className="stroke-2" />
            <p className="text-lg font-medium">Back to home</p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
