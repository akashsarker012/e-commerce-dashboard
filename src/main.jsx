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
import AddCategory from "./components/Category/AddCategory.jsx";
import AllCategory from "./components/Category/AllCategory.jsx";
import CategoryStatus from "./components/Category/CategoryStatus.jsx";
import SubCategoryStatus from './components/Category/SubCategoryStatus.jsx';
import AddSubCategory from "./components/Category/AddSubCategory.jsx";
import ApproveCategory from "./components/Category/ApproveCategory.jsx";
import ApproveSubCategory from './components/Category/ApproveSubCategory';
import AddVariant from "./components/AddVariant.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/addvariant" element={<AddVariant />}></Route>
        <Route path="/allproduct" element={<AllProduct />}></Route>
        <Route path="/allvariant" element={<AllVariant />}></Route>
        <Route path="/addcategory" element={<AddCategory />}></Route>
        <Route path="/addsubcategory" element={<AddSubCategory />}></Route>
        <Route path="/subcategorystatus" element={<SubCategoryStatus />}></Route>
        <Route path="/allcategory" element={<AllCategory />}></Route>
        <Route path="/categorystatus" element={<CategoryStatus />}></Route>
        <Route path="/categorystatus" element={<CategoryStatus />}></Route>
        <Route path="/approve-category-status" element={<ApproveCategory />}></Route>
        <Route path="/approve-subcategory-status" element={<ApproveSubCategory />}></Route>
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
