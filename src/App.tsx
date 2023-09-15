import React, { useState } from "react";
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Browse from "./pages/Browse";
import Auth from "./pages/Auth";
import { SearchContext } from "./utils/context";

const App: React.FunctionComponent = (): JSX.Element => {
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);

  const toggleSearchEnabled = () => {
    setTimeout(() => {
      setSearchEnabled(!searchEnabled);
    }, 500);
  };

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/browse",
      element: (
        <SearchContext.Provider value={{ searchEnabled, toggleSearchEnabled }}>
          <Browse />
        </SearchContext.Provider>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
