import React from "react";
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Browse from "./pages/Browse";
import Auth from "./pages/Auth";

const App: React.FunctionComponent = (): JSX.Element => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
