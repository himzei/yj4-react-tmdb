import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Detail from "./routes/Detail";
import Movies from "./routes/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "detail/:id",
    element: <Detail />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
