import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Navigate 컴포넌트 import
import UserInfo from './pages/UserInfo';
import HouseInfo from "./pages/HouseInfo";

const router=createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {path: "/",element: <Navigate to="/userinfo" replace />},
      {path: "userinfo", element: <UserInfo /> }, 
      {path: "houseinfo", element: <HouseInfo />}, 

    ],
  },
]);






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);