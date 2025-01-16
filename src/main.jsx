import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_Layout from "./Layout/Main_Layout";
import Middle from "./sidebars/Middle";

import { PostProvider } from "./Context_api/PostContext";
import Auth_Layout from "./Layout/Auth_Layout";
import SignUP from "./Authentication/SignUP";
import Login from "./Authentication/Login";
import { UserProvider } from "./Contexts/UserContext";
import User_Profile from "./Profile/User_Profile";
import { ProfileProvider } from "./Contexts/ProfileContext";

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
      {
        path: "/home/:username", // Renders the user profile based on the username
        element: <User_Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProfileProvider>
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      </ProfileProvider>
    </UserProvider>
  </React.StrictMode>
);
