import React from "react"
import { RouteObject, createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";

const App: React.FunctionComponent = (): JSX.Element => {

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />
}

export default App;