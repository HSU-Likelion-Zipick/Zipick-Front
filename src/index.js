import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Navigate 컴포넌트 import

import HouseInfo from "./pages/HouseInfo";
import UserInfo from "./pages/UserInfo";
import Main from "./Main";
import Mainnext from "./Mainnext";
import Recommend from "./pages/Recommend";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Navigate to="/userinfo" replace /> },
      { path: "home", element: <Home /> },
      { path: "userinfo", element: <UserInfo /> },
      {path: "houseinfo", element: <HouseInfo />}, 
      { path: "main", element: <Main /> },
      { path: "mainnext", element: <Mainnext /> },
      { path: "recommend", element: <Recommend /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
