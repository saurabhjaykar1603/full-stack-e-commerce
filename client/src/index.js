import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./views/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./views/AddProduct/AddProduct";
import ProductDetails from "./views/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "add-product",
    element: <AddProduct />,
  },
  {
    path: "product/:_id",
    element: <ProductDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
