import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_Layout from "./Layout/Main_Layout";
import Middle from "./sidebars/Middle";
import For_you from "./Fixed/For_you";
import Following from "./Fixed/Following";
import { PostProvider } from "./Context_api/PostContext";
import Auth_Layout from "./Layout/Auth_Layout";
import SignUP from "./Authentication/SignUP";
import Login from "./Authentication/Login";
import { UserProvider } from "./Contexts/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth_Layout />,
    children: [
      {
        path: "/",
        element: <SignUP />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/home",
    element: <Main_Layout />, // Renders Main_Layout with the Middle component
    children: [
      {
        path: "/home", // Renders the "Create Post" section and the Outlet for the nested routes
        element: <Middle />,
      },
      {},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PostProvider>
        <RouterProvider router={router} />
      </PostProvider>
    </UserProvider>
  </React.StrictMode>
);
