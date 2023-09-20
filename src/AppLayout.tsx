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
import InfoModal from "./components/InfoModal";
import { ModalContext } from "./utils/context";
import ErrorPage from "./pages/ErrorPage";

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
          <InfoModal />
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
