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
import AddProduct from "./components/AddProduct.jsx";
import AllProduct from "./components/AllProduct.jsx";
import AllVariant from "./components/AllVariant.jsx";
import Registration from "./components/Registration.jsx";
import { Provider } from 'react-redux'
import store from "./store.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/allproduct" element={<AllProduct />}></Route>
        <Route path="/allvariant" element={<AllVariant />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
);
