import React, { Suspense, useState } from "react";
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from "./pages/Auth";
import { ModalContext, SearchContext } from "./utils/context";
import { Movie } from "./utils/types";

const Browse = React.lazy(() => import("./pages/Browse"));

const App: React.FunctionComponent = (): JSX.Element => {
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
  const [modalMovie, setModalMovie] = useState<Movie | null>(null);
  const [viewModal, setViewModal] = useState<boolean>(false);

  const toggleViewModal = () => {
    setTimeout(() => {
      setViewModal(!viewModal);
    }, 100);
  };

  const toggleSearchEnabled = () => {
    setTimeout(() => {
      setSearchEnabled(!searchEnabled);
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
          <SearchContext.Provider
            value={{ searchEnabled, toggleSearchEnabled }}
          >
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
          </SearchContext.Provider>
        </Suspense>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
