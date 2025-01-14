import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_Layout from "./Layout/Main_Layout";
import Middle from "./sidebars/Middle";
import For_you from "./Fixed/For_you";
import Following from "./Fixed/Following";
import { PostProvider } from "./Context_api/PostContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout />, // Renders Main_Layout with the Middle component
    children: [
      {
        path: "/", // Renders the "Create Post" section and the Outlet for the nested routes
        element: <Middle />,
        children: [
          {
            path: "for_you", // This renders For_you inside Outlet
            element: <For_you />,
          },
          {
            path: "following", // This renders Following inside Outlet
            element: <Following />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </React.StrictMode>
);
