import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Navigate 컴포넌트 import
import UserInfo from "./pages/UserInfo";
import Main from "./Main";
import Mainnext from "./Mainnext";
import Recommend from "./pages/Recommend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Navigate to="/userinfo" replace /> },
      { path: "userinfo", element: <UserInfo /> },
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
