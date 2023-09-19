import React, { Suspense, useState } from "react";
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from "./pages/Auth";
import { ModalContext } from "./utils/context";
import { Movie } from "./utils/types";

const Browse = React.lazy(() => import("./pages/Browse"));
const Search = React.lazy(() => import("./pages/Search"));

const App: React.FunctionComponent = (): JSX.Element => {
  const [modalMovie, setModalMovie] = useState<Movie | null>(null);
  const [viewModal, setViewModal] = useState<boolean>(false);

  const toggleViewModal = () => {
    setTimeout(() => {
      setViewModal(!viewModal);
    }, 100);
  };

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<>...</>}>
          <ModalContext.Provider
            value={{
              movie: modalMovie,
              viewModal,
              toggleViewModal,
              setModalMovie,
            }}
          >
            <Browse />
          </ModalContext.Provider>
        </Suspense>
      ),
    },
    {
      path: "/search",
      element: (
        <Suspense fallback={<>...</>}>
          <Search />
        </Suspense>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
