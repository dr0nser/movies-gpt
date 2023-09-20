import React, { Suspense, useContext } from "react";
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Auth from "./pages/Auth";
import ShimmerVideoBanner from "./shimmer/ShimmerVideoBanner";
import Header from "./components/Header";
import { ModalContext } from "./utils/context";
import ErrorPage from "./pages/ErrorPage";
import { AnimatePresence, motion } from "framer-motion";
import InfoModal from "./components/InfoModal";

const Browse = React.lazy(() => import("./pages/Browse"));
const Search = React.lazy(() => import("./pages/Search"));

const AppLayout: React.FunctionComponent = (): JSX.Element => {
  const { viewModal } = useContext(ModalContext);

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Auth />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: (
        <div
          className={`relative h-screen flex flex-col ${
            viewModal ? "overflow-clip" : ""
          }`}
        >
          <Header />
          <Outlet />
          <AnimatePresence mode="wait">
            {viewModal && (
              <motion.div
                className="absolute z-50 h-screen w-full top-0 left-0"
                initial={{ opacity: 0, y: "10vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, y: "10vh" }}
              >
                <InfoModal />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ),
      children: [
        {
          path: "/browse/",
          element: (
            <Suspense fallback={<ShimmerVideoBanner />}>
              <Browse />
            </Suspense>
          ),
        },
        {
          path: "/browse/search",
          element: (
            <Suspense fallback={<ShimmerVideoBanner />}>
              <Search />
            </Suspense>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default AppLayout;
