import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>


      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Error />}></Route>
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
