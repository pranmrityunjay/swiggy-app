import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About.js";
// import Error from './Error.js';
import Body from "./Components/Body.js";
import Restaurants from "./Restaurants.js";
import Contact from "./Components/Contact.js";
// import Grocery from './Components/Grocery';
import { lazy, Suspense } from "react";
import Cart from "./Components/Cart.js";

const Grocery = lazy(() => import("./Components/Grocery"));
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //    errorElement:<Error/>
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurants />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
