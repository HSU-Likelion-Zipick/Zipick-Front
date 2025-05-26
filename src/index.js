import React from "react";
import ReactDOM from "react-dom/client";
// index.css를 불러와야 적용이 됩니다!!
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Navigate 컴포넌트 import

import HouseInfo from "./pages/HouseInfo";
import UserInfo from "./pages/UserInfo";
import Main from "./Main";
import Mainnext from "./Mainnext";
import Recommend from "./pages/Recommend";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import LoadingModal from "./components/LoadingModal";
import Tips from "./pages/Tips";
import ConfirmModal from "./components/ConfirmModal";
import LimitModal from "./components/LimitModal";
import StarModal from "./components/StarModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "guide", element: <Guide /> },
      { path: "userinfo", element: <UserInfo /> },
      { path: "houseinfo", element: <HouseInfo /> },
      { path: "main", element: <Main /> },
      { path: "mainnext", element: <Mainnext /> },
      { path: "recommend", element: <Recommend /> },
      { path: "confirmmodal", element: <ConfirmModal /> },
      { path: "limitmodal", element: <LimitModal /> },
      { path: "loadingmodal", element: <LoadingModal /> },
      { path: "starmodal", element: <StarModal /> },
      { path: "tips", element: <Tips /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
